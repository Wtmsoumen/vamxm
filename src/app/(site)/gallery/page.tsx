"use client";

import { useEffect, useState } from "react";
import GallerySection from "@/components/home/GallerySection";
import { getPublicHome } from "@/lib/publicApi";

export default function GalleryPage() {
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    let active = true;
    getPublicHome().then((payload) => {
      if (!active || !payload || typeof payload !== "object") return;
      const root = payload as { data?: { gallery?: unknown } };
      if (Array.isArray(root.data?.gallery)) setGallery(root.data.gallery);
    });
    return () => { active = false; };
  }, []);

  return <GallerySection data={gallery} fullPage />;
}
