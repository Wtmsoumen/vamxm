import Link from "next/link";
import { Eye, ArrowUpRight } from "lucide-react";
import { pandals } from "@/data/pandals";

const sorted = [...pandals].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
const maxViews = sorted[0]?.views ?? 1;

const rankColors = ["bg-saffron", "bg-deep-red", "bg-gold"];

export default function FeaturedPandals() {
  return (
    <section className="bg-orange-50 border-t border-orange-100">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-saffron text-xs font-black uppercase tracking-[0.3em] mb-4">
              Virtual 360° Experience
            </p>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-none">
              Durga Puja<br />Pandals
            </h2>
            <p className="text-gray-500 text-sm mt-4 max-w-sm leading-relaxed">
              Explore stunning 360° virtual tours of Kolkata's iconic Durga Puja pandals. Winners revealed on Navami evening.
            </p>
          </div>


          <div className="bg-deep-red pb-4 rounded-2xl">
            <img src="/logo/utsavverse-logo.png" alt="VAMXM" className="h-40 w-auto" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center sm:justify-between justify-center mt-10">
          <div className="sm:block hidden w-[80%] h-px bg-gradient-to-r from-saffron via-orange-200 to-transparent" />
          <Link
            href="/pandals"
            className="rounded group inline-flex items-center gap-3 border border-saffron text-saffron hover:bg-saffron hover:text-white px-6 py-3.5 transition-all text-xs font-black uppercase tracking-widest w-fit"
          >
            View All {pandals.length}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── Card Grid ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "2px" }}>
          {sorted.slice(0, 6).map((p, i) => (
            <div key={p.id} className="group relative overflow-hidden bg-white rounded-xl">

              {/* Image — tall */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Rank badge */}
                {i < 3 && (
                  <div className={`absolute top-5 left-5 ${rankColors[i]} text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full`}>
                    #{i + 1} Trending
                  </div>
                )}

                {/* View count — top right */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/40 text-white text-[10px] font-black px-3 py-1.5 backdrop-blur-sm rounded-full">
                  <Eye className="w-3 h-3" />
                  {(p.views ?? 0).toLocaleString()}
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-black text-white text-xl leading-tight mb-1">{p.name}</h3>
                  <p className="text-white text-sm mb-5">{p.nameBengali}</p>

                  {/* Progress bar */}
                  <div className="w-full h-0.5 bg-white/20 mb-5">
                    <div
                      className="h-full bg-saffron"
                      style={{ width: `${((p.views ?? 0) / maxViews) * 100}%` }}
                    />
                  </div>

                  {/* View button */}
                  <Link
                    href={`/pandals/${p.id}`}
                    className="inline-flex items-center gap-2.5 bg-white text-gray-900 font-black text-xs uppercase tracking-widest px-5 py-3 hover:bg-saffron hover:text-white transition-colors rounded-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View 360°
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
