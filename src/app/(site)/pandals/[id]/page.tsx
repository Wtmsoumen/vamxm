import { notFound } from "next/navigation";
import { pandals } from "@/data/pandals";
import PandalDetailClient from "@/components/pandal/PandalDetailClient";

export function generateStaticParams() {
  return pandals.map((p) => ({ id: p.id }));
}

export default async function PandalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pandal = pandals.find((p) => p.id === id);
  if (!pandal || !pandal.published) notFound();
  return <PandalDetailClient pandal={pandal} />;
}
