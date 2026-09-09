"use client";

import Link from "next/link";
import { Eye, Flame } from "lucide-react";
import { Pandal } from "@/types";

export default function PandalCard({ pandal, rank }: { pandal: Pandal; rank?: number }) {
  const isTop3 = rank != null && rank <= 3;

  return (
    <Link href={`/pandals/${pandal.id}`} className="group block bg-white hover:bg-gray-50 transition-colors">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={pandal.thumbnail}
          alt={pandal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/800x450/FF6B00/fff?text=${encodeURIComponent(pandal.name)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Rank badge */}
        {rank != null && (
          <div className={`absolute top-3 left-3 w-8 h-8 flex items-center justify-center text-sm font-black rounded ${rank === 1 ? "bg-saffron text-white" :
            rank === 2 ? "bg-gray-600 text-white" :
              rank === 3 ? "bg-amber-700 text-white" :
                "bg-black/50 text-white/60"
            }`}>
            {rank}
          </div>
        )}

        {isTop3 && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-saffron rounded-full px-2 py-1">
            <Flame className="w-2.5 h-2.5 text-white" />
            <span className="text-white text-[9px] font-black uppercase tracking-wide">Trending</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-saffron/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-xs font-black uppercase tracking-widest border-2 border-white px-5 py-2">
            View 360°
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4 border-t border-gray-100">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-gray-900 text-sm leading-tight">{pandal.name}</h3>
            {pandal.nameBengali && (
              <p className="text-white text-xs mt-0.5">{pandal.nameBengali}</p>
            )}
          </div>
          {pandal.views != null && (
            <div className={`flex items-center gap-1 flex-shrink-0 ${isTop3 ? "text-saffron" : "text-white"}`}>
              <Eye className="w-3 h-3" />
              <span className="text-xs font-black">{pandal.views.toLocaleString()}</span>
            </div>
          )}
        </div>
        <p className="text-gray-300 text-xs mt-2 uppercase tracking-wide">{pandal.location}</p>
      </div>
    </Link>
  );
}
