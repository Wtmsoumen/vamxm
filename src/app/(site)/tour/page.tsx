import Link from "next/link";
import { tours } from "@/data/tours";

export default function TourListPage() {
  return (
    <main className="mx-auto max-w-[1320px] py-24">
      <div className="text-center">
        <p className="section-kicker">Virtual Experiences</p>
        <h1 className="section-title mt-4 text-[48px] sm:text-[64px] md:text-[80px]">
          Pandal <span className="display-gradient">360°</span>
        </h1>
        <div className="ornament"></div>
        <p className="mx-auto mt-6 max-w-[540px] text-base leading-7 text-black/70">
          Walk through Kolkata's iconic Durga Puja pandals from anywhere in the world — fully immersive, multi-node 360° tours.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {tours.map((tour) => (
          <Link key={tour.id} href={`/tour/${tour.id}`} className="group block">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition group-hover:shadow-md">
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={tour.preview}
                  alt={tour.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-utsav shadow-lg">
                    <svg viewBox="0 0 24 24" width="28" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute top-3 right-3 rounded-full bg-utsav px-3 py-1 text-xs font-semibold text-white">
                  {tour.nodes} Views
                </span>
              </div>
              <div className="p-5">
                <h2 className="section-title text-[22px]">{tour.title}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-black/60">
                  <span className="text-utsav">⌖</span> {tour.location}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-utsav">
                  Start 360° Tour <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
