"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PandalDetailClient from "@/components/pandal/PandalDetailClient";
import { Pandal } from "@/types";

export default function PandalDetailRoute() {
  const { id } = useParams<{ id: string }>();
  const [pandal, setPandal] = useState<Pandal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPandal() {
      setLoading(true);
      setPandal(null);

      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
        if (!baseUrl) throw new Error("Public API URL is not configured");

        const response = await fetch(
          `${baseUrl}/public/pandals/${encodeURIComponent(id)}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Pandal not found");

        const payload: unknown = await response.json();
        const root = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};
        const data = root.data && typeof root.data === "object" ? root.data as Record<string, unknown> : {};
        const item = [data.pandal, data.tour, root.pandal, root.tour, root.data, payload]
          .find((candidate) => candidate && typeof candidate === "object") as Record<string, unknown> | undefined;

        if (!item) throw new Error("Pandal not found");
        const published = item.published ?? item.is_published;
        if (published === false || published === 0 || published === "0" || published === "false") {
          throw new Error("Pandal not found");
        }

        const stringValue = (...keys: string[]) => {
          for (const key of keys) {
            const value = item[key];
            if (typeof value === "string" && value.trim()) return value;
            if (typeof value === "number") return String(value);
          }
          return "";
        };
        const numberValue = (...keys: string[]) => {
          for (const key of keys) {
            const value = item[key];
            const number = typeof value === "number" ? value : Number(value);
            if (value !== undefined && value !== null && Number.isFinite(number)) return number;
          }
          return undefined;
        };
        const booleanValue = (...keys: string[]) => keys.some((key) => {
          const value = item[key];
          return value === true || value === 1 || value === "1" || value === "true";
        });
        const sponsors = Array.isArray(item.sponsors) ? item.sponsors.map((value, index) => {
          const sponsor = value && typeof value === "object" ? value as Record<string, unknown> : {};
          const sponsorString = (...keys: string[]) => keys.map((key) => sponsor[key]).find((v) => typeof v === "string" && v) as string | undefined;
          return {
            id: sponsorString("id", "_id", "uuid", "slug") || `sponsor-${index}`,
            name: sponsorString("name", "title") || "Sponsor",
            logo: sponsorString("logo", "logo_url", "image", "image_url") || "",
            website: sponsorString("website", "url", "link") || "#",
            bannerImage: sponsorString("bannerImage", "banner_image", "banner_url"),
          };
        }) : [];
        const hotspots = Array.isArray(item.hotspots) ? item.hotspots.map((value, index) => {
          const hotspot = value && typeof value === "object" ? value as Record<string, unknown> : {};
          const hotspotString = (...keys: string[]) => keys.map((key) => hotspot[key]).find((v) => typeof v === "string" && v) as string | undefined;
          const type = hotspotString("type")?.toLowerCase();
          return {
            id: hotspotString("id", "_id") || `hotspot-${index}`,
            type: type === "sponsor" ? "sponsor" as const : "info" as const,
            label: hotspotString("label", "title", "name") || "",
            pitch: Number(hotspot.pitch) || 0,
            yaw: Number(hotspot.yaw) || 0,
            sponsorId: hotspotString("sponsorId", "sponsor_id"),
            url: hotspotString("url", "link"),
          };
        }) : [];

        setPandal({
          id: stringValue("slug", "id", "_id", "uuid") || id,
          name: stringValue("name", "title") || "Untitled Pandal",
          nameBengali: stringValue("nameBengali", "name_bengali", "bengali_name") || undefined,
          location: stringValue("location", "address", "area", "place") || "Kolkata",
          views: numberValue("views", "view_count", "views_count"),
          description: stringValue("description", "about", "details"),
          thumbnail: stringValue("thumbnail", "thumbnail_url", "image", "image_url", "cover_image"),
          panoramaUrl: stringValue("panoramaUrl", "panorama_url", "panorama", "360_image", "image_360"),
          idolPanoramaUrl: stringValue("idolPanoramaUrl", "idol_panorama_url", "idol_360_image") || undefined,
          featured: booleanValue("featured", "is_featured"),
          published: true,
          sponsors,
          hotspots,
          createdAt: stringValue("createdAt", "created_at", "updated_at"),
        });
      } catch (error) {
        if (!controller.signal.aborted) setPandal(null);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadPandal();
    return () => controller.abort();
  }, [id]);

  if (pandal) return <PandalDetailClient pandal={pandal} />;

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <p>{loading ? "Loading pandal…" : "Pandal not found or unavailable."}</p>
    </main>
  );
}
