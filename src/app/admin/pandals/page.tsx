"use client";

import Link from "next/link";
import { Plus, Eye, Pencil, Trash2, MapPin } from "lucide-react";
import { tours } from "@/data/tours";

export default function AdminPandalsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">Pandals</h1>
          <p className="text-black/40 text-sm mt-1">Manage all 360° virtual tours</p>
        </div>
        <Link
          href="/admin/pandals/new"
          className="flex items-center gap-2 bg-utsav text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-utsav-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Tour
        </Link>
      </div>

      <div className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/10 bg-black/[0.02]">
              {["Tour", "Location", "Nodes", "Status", ""].map((h) => (
                <th
                  key={h}
                  className={`text-left px-6 py-4 text-black/40 text-xs font-semibold uppercase tracking-wider
                    ${h === "Location" ? "hidden sm:table-cell" : ""}
                    ${h === "Nodes" ? "hidden md:table-cell" : ""}
                    ${h === "Status" ? "hidden lg:table-cell" : ""}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.06]">
            {tours.map((t) => (
              <tr key={t.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-black/5 flex-shrink-0">
                      <img src={t.preview} alt={t.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-black text-sm font-medium">{t.title}</p>
                      {t.featured && <span className="text-xs text-utsav font-medium">Featured</span>}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <div className="flex items-center gap-1 text-black/50 text-sm">
                    <MapPin className="w-3 h-3 flex-shrink-0" /> {t.location}
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell text-black/50 text-sm">
                  {t.nodes} × 360°
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${t.published ? "bg-emerald-500/10 text-emerald-700" : "bg-yellow-400/10 text-yellow-700"}`}>
                    {t.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 justify-end">
                    <Link href={`/tour/${t.id}`} target="_blank" className="p-2 text-black/30 hover:text-black transition-colors" title="View">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link href={`/admin/pandals/${t.id}/edit`} className="p-2 text-black/30 hover:text-utsav transition-colors" title="Edit">
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-black/30 hover:text-red-500 transition-colors" title="Delete">
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
