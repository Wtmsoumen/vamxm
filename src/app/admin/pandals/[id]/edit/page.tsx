import { notFound } from "next/navigation";
import Link from "next/link";
import { tours } from "@/data/tours";
import EditTourForm from "./EditTourForm";

export default async function EditTourPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-2xl font-bold text-black mb-2">Tour not found</p>
        <p className="text-black/40 text-sm mb-6">No tour exists with ID "{id}"</p>
        <Link href="/admin/pandals" className="text-utsav text-sm hover:underline">← Back to Pandals</Link>
      </div>
    );
  }

  return <EditTourForm tour={tour} />;
}
