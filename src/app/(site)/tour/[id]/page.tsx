import { notFound } from "next/navigation";
import PanoramaViewer from "@/components/ui/PanoramaViewer";
import Link from "next/link";
import { tours } from "@/data/tours";

export function generateStaticParams() {
  return tours.map((t) => ({ id: t.id }));
}

export default async function TourPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);
  if (!tour) notFound();

  return (
    <main className="mx-auto max-w-[1320px] px-5 py-20 md:px-10">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-black/50">
        <Link href="/" className="hover:text-utsav">Home</Link>
        <span>/</span>
        <Link href="/tour" className="hover:text-utsav">Pandal 360°</Link>
        <span>/</span>
        <span className="text-black">{tour.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <p className="section-kicker">Virtual Tour</p>
        <h1 className="section-title mt-2 text-[36px] sm:text-[48px] md:text-[60px]">
          {tour.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-black/60">
          <span className="flex items-center gap-2"><span className="text-utsav">⌖</span>{tour.location}</span>
          <span className="flex items-center gap-2"><span className="text-utsav">◉</span>{tour.nodes} 360° Views</span>
        </div>
        <p className="mt-4 max-w-[600px] text-base leading-7 text-black/70">{tour.description}</p>
      </div>

      {/* 360° Viewer */}
      <PanoramaViewer
        tourPath={tour.path}
        title={tour.title}
      />

      {/* Tips */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-black/55">
        <span>🖱 Drag to look around</span>
        <span>🔍 Scroll to zoom</span>
        <span>📍 Click hotspots to move</span>
        <span>⛶ Fullscreen button for immersive view</span>
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link
          href="/tour"
          className="inline-flex items-center gap-3 rounded-full border border-utsav px-6 py-3 text-sm font-semibold text-utsav transition hover:bg-utsav hover:text-white"
        >
          ← All Virtual Tours
        </Link>
      </div>
    </main>
  );
}
