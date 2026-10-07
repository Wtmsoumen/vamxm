import { notFound } from "next/navigation";
import PandalDetailRoute from "@/components/pandal/PandalDetailRoute";

export async function generateStaticParams() {
  // Static export requires known route paths; detail data itself is fetched by the client.
  return [
    { id: "santosh-mitra-square" },
    { id: "college-square" },
    { id: "baghbazar-sarbojanin" },
  ];
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
