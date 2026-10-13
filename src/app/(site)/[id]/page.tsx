import PandalDetailRoute from "@/components/pandal/PandalDetailRoute";

export default async function PandalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PandalDetailRoute />;
}
