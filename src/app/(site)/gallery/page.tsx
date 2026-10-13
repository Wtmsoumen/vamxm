"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GallerySection from "@/components/home/GallerySection";
import type { RootState } from "@/store";
import { getPublicGallery } from "@/lib/publicApi";
import MobileAppSection from "@/components/home/MobileAppSection";

type GalleryItem = { id: string | number; url: string; alt_text: string };
type GalleryHomeData = {
  data?: {
    gallery?: unknown;
    section_headings?: {
      gallery?: { eyebrow?: string | null; title?: string | null; highlight?: string | null; subtitle?: string | null };
    };
  };
};

function normalizeGallery(payload: unknown): GalleryItem[] {
  if (!payload || typeof payload !== "object") return [];
  const root = payload as Record<string, unknown>;
  const data = root.data;
  const dataRecord = data && typeof data === "object" && !Array.isArray(data) ? data as Record<string, unknown> : null;
  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(data)
      ? data
      : Array.isArray(dataRecord?.data)
        ? dataRecord.data
        : Array.isArray(dataRecord?.gallery)
          ? dataRecord.gallery
          : Array.isArray(dataRecord?.items)
            ? dataRecord.items
            : Array.isArray(root.gallery)
              ? root.gallery
              : Array.isArray(root.items)
                ? root.items
                : [];

  return records.flatMap((record, index) => {
    if (!record || typeof record !== "object") return [];
    const item = record as Record<string, unknown>;
    const url = [item.url, item.image, item.image_url, item.file_url].find((value): value is string => typeof value === "string" && !!value.trim());
    if (!url) return [];
    const altText = [item.alt_text, item.alt, item.title, item.name].find((value): value is string => typeof value === "string" && !!value.trim());
    const id = typeof item.id === "string" || typeof item.id === "number" ? item.id : index;
    return [{ id, url, alt_text: altText || "Gallery image" }];
  });
}

export default function GalleryPage() {
  const homeData = useSelector((state: RootState) => state.home.data) as any | null;
  const [apiGallery, setApiGallery] = useState<GalleryItem[] | null>(null);

  useEffect(() => {
    let active = true;
    getPublicGallery().then((payload: any) => {
      if (active) setApiGallery(payload?.data?.images);
      // console.log(payload, "apiGallery__");

    });
    return () => { active = false; };
  }, []);

  const homepageGallery = normalizeGallery(homeData?.data?.gallery);
  const gallery = apiGallery?.length ? apiGallery : homepageGallery;
  const heading = homeData?.data?.section_headings?.gallery;


  return (<>
    <GallerySection data={gallery} heading={heading} fullPage />
    <MobileAppSection data={homeData?.data?.app_downloads} />
  </>)
}
