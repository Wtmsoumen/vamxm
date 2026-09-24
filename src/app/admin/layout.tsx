"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MapPin,
  Image,
  Smartphone,
  Settings,
  LogOut,
  Menu,
  X,
  Loader2,
} from "lucide-react";
import { AuthProvider, useAuth } from "@/lib/auth";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Pandals", href: "/admin/pandals", icon: MapPin },
  { label: "Gallery", href: "/admin/gallery", icon: Image },
  { label: "Banners", href: "/admin/banners", icon: Image },
  { label: "Mobile Banners", href: "/admin/mobile-banners", icon: Smartphone },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, loading, logout, user } = useAuth();

  // Redirect to login if not authenticated (skip for login page)
  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [loading, isAuthenticated, pathname, router]);

  // Show loading state while rehydrating
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-utsav/40" />
      </div>
    );
  }

  // Login page — render without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Not authenticated — don't flash content while redirecting
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-utsav/40" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-black/10 transform transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:flex flex-col`}
      >
        <div className="p-5 border-b border-black/10">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo/vamxm-horizontal-black.png"
              alt="VAMXM"
              className="h-auto w-[215px]"
            />
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-utsav/10 text-utsav"
                    : "text-black/50 hover:text-black hover:bg-black/5"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-black/10 space-y-1">
          {user && (
            <div className="px-3 py-2 mb-2">
              <p className="text-black text-sm font-medium truncate">{user.name}</p>
              <p className="text-black/40 text-xs truncate">{user.email}</p>
            </div>
          )}
          <button
            id="admin-logout-btn"
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-black/40 hover:text-black hover:bg-black/5 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-black/10 px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-black/60 hover:text-black"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2 text-sm text-black/40">
            <div className="w-7 h-7 bg-utsav/10 rounded-full flex items-center justify-center text-utsav font-bold text-xs">
              {user?.name?.[0]?.toUpperCase() ?? "A"}
            </div>
            {user?.name ?? "Admin"}
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AuthProvider>
  );
}
