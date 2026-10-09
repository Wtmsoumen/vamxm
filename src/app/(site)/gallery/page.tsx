"use client";

import { useSelector } from "react-redux";
import GallerySection from "@/components/home/GallerySection";
import type { RootState } from "@/store";

export default function GalleryPage() {
  const homeData = useSelector((state: RootState) => state.home.data) as any;
  const gallery = Array.isArray(homeData?.data?.gallery) ? homeData.data.gallery : [];

  return <GallerySection data={gallery} fullPage />;
}
