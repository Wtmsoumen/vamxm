"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "./axios";

interface AdminUser {
  id: string | number;
  name: string;
  email: string;
  role?: string;
}

interface AuthContextValue {
  user: AdminUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("admin_token");
    const storedUser = localStorage.getItem("admin_user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await api.post("/admin/auth/login", { email, password });
    // Support both { token } and { data: { token } } shapes
    const jwt: string =
      data?.token ?? data?.data?.token ?? data?.access_token ?? data?.data?.access_token;
    const adminUser: AdminUser =
      data?.user ?? data?.data?.user ?? data?.admin ?? data?.data?.admin ?? { id: "", name: "Admin", email };

    if (!jwt) throw new Error("No token in response");

    localStorage.setItem("admin_token", jwt);
    localStorage.setItem("admin_user", JSON.stringify(adminUser));
    setToken(jwt);
    setUser(adminUser);
    router.replace("/admin");
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    setToken(null);
    setUser(null);
    router.replace("/admin/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
