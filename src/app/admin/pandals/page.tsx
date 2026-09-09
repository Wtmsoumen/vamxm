"use client";

import Link from "next/link";
import { Plus, Eye, Pencil, Trash2, MapPin } from "lucide-react";
import { pandals } from "@/data/pandals";

export default function AdminPandalsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Pandals</h1>
          <p className="text-white/40 text-sm mt-1">Manage all pandals and their 360° content</p>
        </div>
        <Link
          href="/admin/pandals/new"
          className="flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" /> Add Pandal
        </Link>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {["Pandal", "Location", "Status", "Sponsors", ""].map((h) => (
                <th key={h} className={`text-left px-6 py-4 text-white/40 text-xs font-medium uppercase tracking-wider ${h === "Location" ? "hidden sm:table-cell" : ""} ${h === "Status" ? "hidden md:table-cell" : ""} ${h === "Sponsors" ? "hidden lg:table-cell" : ""}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {pandals.map((p) => (
              <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-saffron/10 rounded-lg flex items-center justify-center text-saffron font-bold text-sm flex-shrink-0">
                      {p.name[0]}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{p.name}</p>
                      {p.featured && <span className="text-xs text-gold">Featured</span>}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <div className="flex items-center gap-1 text-white/50 text-sm">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${p.published ? "bg-emerald-400/10 text-emerald-400" : "bg-yellow-400/10 text-yellow-400"}`}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell text-white/50 text-sm">{p.sponsors.length}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 justify-end">
                    <Link href={`/view/${p.id}`} target="_blank" className="p-2 text-white/30 hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-white/30 hover:text-saffron transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-white/30 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
