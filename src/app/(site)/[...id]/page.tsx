import PandalDetailRoute from "@/components/pandal/PandalDetailRoute";

// Export a single placeholder so the catch-all route template is included
// in the static export. The actual ID is read client-side via useParams.
export function generateStaticParams() {
  return [{ id: ["_"] }];
}

export default async function PandalDetailPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  await params;
  return <PandalDetailRoute />;
}
