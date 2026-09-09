import { notFound } from "next/navigation";
import { pandals } from "@/data/pandals";
import ViewerPage from "@/components/viewer/ViewerPage";

export function generateStaticParams() {
  return pandals.map((p) => ({ id: p.id }));
}

export default async function ViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pandal = pandals.find((p) => p.id === id);
  if (!pandal || !pandal.published) notFound();
  return <ViewerPage pandal={pandal} />;
}
