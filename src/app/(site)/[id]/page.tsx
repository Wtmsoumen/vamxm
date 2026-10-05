import { notFound } from "next/navigation";
import PandalDetailClient from "@/components/pandal/PandalDetailClient";
import { getPublicPandal, getPublicPandals } from "@/lib/publicApi";

function toSlug(value: string) {
  return value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateStaticParams() {
  const { pandals } = await getPublicPandals();
  const slugs = Array.isArray(pandals)
    ? pandals.flatMap((pandal: Record<string, unknown>) => {
      const id = [pandal.slug, pandal.tour_slug, pandal.url_slug, pandal.id]
        .find((value): value is string | number => typeof value === "string" || typeof value === "number");
      const name = typeof pandal.name === "string" ? toSlug(pandal.name) : "";
      return [id == null ? "" : String(id), name].filter(Boolean);
    })
    : [];

  // Keep this known public link buildable if the API is temporarily unavailable
  // while static params are being generated.
  return [...new Set([...slugs, "santosh-mitra-square", "college-square", "baghbazar-sarbojanin"])].map((id) => ({ id }));
}

export default async function PandalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pandal = await getPublicPandal(id);
  if (!pandal || !pandal.published) notFound();
  return <PandalDetailClient pandal={pandal} />;
}
