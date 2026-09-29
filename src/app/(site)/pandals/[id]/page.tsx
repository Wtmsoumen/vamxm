import { notFound } from "next/navigation";
import PandalDetailClient from "@/components/pandal/PandalDetailClient";
import { getPublicPandal } from "@/lib/publicApi";

export default async function PandalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pandal = await getPublicPandal(id);
  console.log(pandal, "pandals_id");
  if (!pandal || !pandal.published) notFound();
  return <PandalDetailClient pandal={pandal} />;
}
