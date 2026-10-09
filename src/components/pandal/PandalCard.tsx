"use client";

import Link from "next/link";
import { ArrowUpRight, Eye, MapPin } from "lucide-react";

export default function PandalCard({ pandal, rank }: { pandal: any; rank?: number }) {
  const linkedPandal = pandal.pandal ?? pandal.tour?.pandal ?? pandal;
  const title = pandal.title ?? pandal.name ?? linkedPandal.name ?? "Durga Puja Pandal";
  const slug = linkedPandal.slug ?? pandal.slug ?? pandal.tour?.slug ?? linkedPandal.id ?? pandal.id;
  const image = pandal.thumbnail ?? pandal.image ?? linkedPandal.thumbnail ?? linkedPandal.image ?? "/pandals/pandal1.jpg";
  const location = linkedPandal.location ?? linkedPandal.area ?? pandal.location ?? "Kolkata";
  const views = pandal.views ?? linkedPandal.views ?? linkedPandal.visitor_count;
  const tourUrl = pandal.index_url ?? pandal.tour_url;

  return (
    <Link
      href={`/${slug}`}
      onClick={() => {
        if (tourUrl) localStorage.setItem("pandal_index_url", tourUrl);
      }}
      className="group block h-full overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_8px_28px_rgba(20,20,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(20,20,20,0.14)]"
    >
      <div className="relative aspect-[1.5] overflow-hidden bg-[#eee9e2]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/pandals/pandal1.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />
        {rank != null && (
          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {String(rank).padStart(2, "0")}
          </span>
        )}
        <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          360° virtual tour
        </span>
        <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      <div className="flex min-h-[142px] flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#171717] transition-colors group-hover:text-[#b60017] sm:text-lg">{title}</h3>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-black/55">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{location}</span>
            </p>
          </div>
          {views != null && (
            <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#f7f4ef] px-2.5 py-1.5 text-xs font-semibold text-black/60">
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{Number(views).toLocaleString()}</span>
            </div>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-black/[0.07] pt-3 mt-4 text-xs font-semibold text-black/65">
          <span>Explore this pandal</span>
          <span className="text-[#b60017] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
