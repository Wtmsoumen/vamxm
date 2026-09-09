"use client";

import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";

const sponsors = [
  { id: "1", name: "Bengal Heritage", website: "example.com", pandals: 3, tier: "Platinum" },
  { id: "2", name: "Kolkata Times", website: "example.com", pandals: 2, tier: "Gold" },
  { id: "3", name: "Puja Bazar", website: "example.com", pandals: 1, tier: "Silver" },
];

export default function AdminSponsorsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Sponsors</h1>
          <p className="text-white/40 text-sm mt-1">Manage sponsor partnerships</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Add Sponsor
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sponsors.map((s) => (
          <div key={s.id} className="bg-zinc-900 border border-white/10 rounded-2xl p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron font-bold text-xl">
                {s.name[0]}
              </div>
              <div className="flex gap-1">
                <button className="p-2 text-white/30 hover:text-saffron transition-colors"><Pencil className="w-4 h-4" /></button>
                <button className="p-2 text-white/30 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
            <h3 className="text-white font-semibold">{s.name}</h3>
            <div className="flex items-center gap-1 text-white/40 text-xs mt-1 mb-3">
              <ExternalLink className="w-3 h-3" /> {s.website}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40">{s.pandals} pandal{s.pandals !== 1 ? "s" : ""}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-saffron/10 text-saffron">{s.tier}</span>
            </div>
          </div>
        ))}

        <button className="border-2 border-dashed border-white/10 hover:border-saffron/30 rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer transition-colors group min-h-[140px]">
          <Plus className="w-8 h-8 text-white/20 group-hover:text-saffron mb-2 transition-colors" />
          <p className="text-white/30 group-hover:text-white/60 text-sm transition-colors">Add Sponsor</p>
        </button>
      </div>
    </div>
  );
}
