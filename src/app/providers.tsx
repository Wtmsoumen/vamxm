"use client";

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { store } from "@/store";
import { fetchPublicHome } from "@/store/homeSlice";
import { fetchPublicServices, fetchPublicSettings } from "@/store/publicContentSlice";

function HomeDataLoader() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPublicHome());
    dispatch(fetchPublicServices());
    dispatch(fetchPublicSettings());
  }, [dispatch]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HomeDataLoader />
      {children}
    </Provider>
  );
}
