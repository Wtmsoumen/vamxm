"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import PandalDetailClient from "@/components/pandal/PandalDetailClient";
import { Pandal } from "@/types";
import { normalizePandal } from "@/lib/publicApi";

export default function PandalDetailRoute() {
  const { id } = useParams<{ id: string }>();
  const [pandal, setPandal] = useState<Pandal | null>(null);
  const [loading, setLoading] = useState(true);
  const [pandelDetails, setPandelDetails] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPandal() {
      setLoading(true);
      setPandal(null);

      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
        if (!baseUrl) throw new Error("Public API URL is not configured");

        const response: any = await axios.get(`${baseUrl}/mobile/pandals/${encodeURIComponent(id)}`, {
          signal: controller.signal,
        });
        const payload: unknown = response.data;
        const root = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};
        const data = root.data && typeof root.data === "object" ? root.data as Record<string, unknown> : {};
        const item = [data.pandal, data.tour, root.pandal, root.tour, root.data, payload]
          .find((candidate) => candidate && typeof candidate === "object") as Record<string, unknown> | undefined;

        if (!item) throw new Error("Pandal not found");
        const normalized = normalizePandal(item);
        if (!normalized.id || !normalized.published) {
          throw new Error("Pandal not found");
        }
        // console.log(response.data.data.virtual_tour.index_url, "esponse_data");
        setPandelDetails(response.data.data)
        setPandal(normalized);
      } catch (error) {
        if (!controller.signal.aborted) setPandal(null);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadPandal();
    return () => controller.abort();
  }, [id]);

  if (pandal) return <PandalDetailClient pandal={pandal} pandelDetails={pandelDetails} />;

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <p>{loading ? "Loading pandal…" : "Pandal not found or unavailable."}</p>
    </main>
  );
}
