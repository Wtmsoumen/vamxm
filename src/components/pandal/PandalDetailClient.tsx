"use client";

import Link from "next/link";
import { MapPin, Eye, ArrowLeft, Star, Image as ImageIcon } from "lucide-react";
import { Pandal } from "@/types";

export default function PandalDetailClient({ pandal }: { pandal: Pandal }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden bg-zinc-900">
        <img
          src={pandal.thumbnail}
          alt={pandal.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="absolute top-20 left-6">
          <Link
            href="/pandals"
            className="flex items-center justify-center w-9 h-9 bg-black/50 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {pandal.featured && (
              <span className="inline-flex items-center gap-1 bg-gold text-black text-xs font-bold px-2.5 py-1 rounded-full">
                <Star className="w-3 h-3 fill-black" /> Featured
              </span>
            )}
            <span className="bg-saffron/20 text-saffron border border-saffron/30 text-xs font-medium px-2.5 py-1 rounded-full">
              360° Available
            </span>
            {pandal.idolPanoramaUrl && (
              <span className="bg-white/10 text-white/70 border border-white/20 text-xs px-2.5 py-1 rounded-full">
                Idol View
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{pandal.name}</h1>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="w-4 h-4 text-saffron" />
            <span>{pandal.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">About this Pandal</h2>
            <p className="text-white/60 leading-relaxed mb-8">{pandal.description}</p>

            {/* 360° CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-white font-bold text-lg mb-2">Experience in 360°</h3>
              <p className="text-white/50 text-sm mb-5">
                Step inside this pandal virtually. Explore every corner and witness the divine artistry of the Durga idol up close.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/view/${pandal.id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-4 h-4" />
                  Enter 360° Experience
                </Link>
                {pandal.idolPanoramaUrl && (
                  <Link
                    href={`/view/${pandal.id}?view=idol`}
                    className="inline-flex items-center gap-2 border border-saffron/40 text-saffron hover:bg-saffron/10 px-6 py-3 rounded-xl transition-all"
                  >
                    <ImageIcon className="w-4 h-4" />
                    View Idol
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
              <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider text-white/40">
                Pandal Info
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Location", value: pandal.location },
                  { label: "360° Views", value: pandal.idolPanoramaUrl ? "Pandal + Idol" : "Pandal" },
                  { label: "Sponsors", value: String(pandal.sponsors.length) },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4">
                    <span className="text-white/40">{row.label}</span>
                    <span className="text-white text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {pandal.sponsors.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white/40 font-semibold mb-4 text-xs uppercase tracking-wider">
                  Sponsors
                </h3>
                <div className="space-y-2">
                  {pandal.sponsors.map((s) => (
                    <Link
                      key={s.id}
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 bg-saffron/20 rounded-lg flex items-center justify-center text-saffron font-bold text-sm">
                        {s.name[0]}
                      </div>
                      <span className="text-white/60 group-hover:text-white text-sm transition-colors">
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
