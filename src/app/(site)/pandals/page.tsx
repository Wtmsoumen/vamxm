"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { pandals } from "@/data/pandals";
import PandalCard from "@/components/pandal/PandalCard";

const allSorted = [...pandals].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
const maxViews = allSorted[0]?.views ?? 1;

export default function PandalsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = allSorted.filter((p) => {
    if (!p.published) return false;
    const q = search.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || (p.nameBengali?.toLowerCase().includes(q) ?? false) || p.location.toLowerCase().includes(q);
    const matchFilter = filter === "all" || (filter === "top" && (p.views ?? 0) >= 100000);
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Saffron header block */}
      <div className="bg-saffron px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
        <div className="max-w-7xl mx-auto relative z-10 pt-8">
          <p className="text-white/70 text-xs font-black uppercase tracking-[0.25em] mb-2">Virtual 360° Experience</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">Durga Puja Pandals</h1>
          <p className="text-white/70 text-sm">
            Views of Pandals and the winner will be displayed on Navami evening.
          </p>
        </div>
      </div>

      {/* Filters bar */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input
              type="text"
              placeholder="Search pandals or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 pl-10 pr-4 py-2.5 text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none focus:border-saffron transition-colors bg-white"
            />
          </div>
          <div className="flex gap-2">
            {[
              { v: "all", l: "All Pandals" },
              { v: "top", l: "Top Ranked" },
            ].map((f) => (
              <button
                key={f.v}
                onClick={() => setFilter(f.v)}
                className={`px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${
                  filter === f.v ? "bg-saffron text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {f.l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <p className="text-xs text-gray-300 uppercase tracking-widest">
          Showing {filtered.length} of {pandals.length} pandals
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
          {filtered.map((p, i) => {
            const rank = allSorted.findIndex((x) => x.id === p.id) + 1;
            return (
              <div key={p.id} className="border-b border-r border-gray-200 [&:nth-child(3n)]:border-r-0">
                <PandalCard pandal={p} rank={rank} />
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 border border-gray-200">
            <Eye className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-gray-300 font-black uppercase tracking-widest text-sm">No pandals found</p>
          </div>
        )}
      </div>
    </div>
  );
}
