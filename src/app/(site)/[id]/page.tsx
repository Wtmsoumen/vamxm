import { notFound } from "next/navigation";
import PandalDetailRoute from "@/components/pandal/PandalDetailRoute";
import { getPublicPandals, normalizePandal } from "@/lib/publicApi";
import { pandals as fallbackPandals } from "@/data/pandals";

export async function generateStaticParams() {
  // With static export, public slugs must be present in the generated output.
  const { pandals: apiPandals } = await getPublicPandals(1, 1000);
  const ids = new Set([
    ...fallbackPandals.map((pandal) => pandal.id),
    ...apiPandals.map((pandal) => normalizePandal(pandal).id),
  ].filter(Boolean));

  return [...ids].map((id) => ({ id }));
}

export default async function PandalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) notFound();
  return <PandalDetailRoute />;
}
