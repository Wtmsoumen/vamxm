"use client";

import Link from "next/link";
import { MapPin, Eye, FileX, Users, Bell, Plus, ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";

export default function AdminDashboard() {
  const total = tours.length;
  const published = tours.filter((t) => t.published).length;
  const drafts = tours.filter((t) => !t.published).length;
  const featured = tours.filter((t) => t.featured).length;

  const stats = [
    { label: "Total Pandals", value: total, icon: MapPin, color: "text-utsav" },
    { label: "Published", value: published, icon: Eye, color: "text-emerald-600" },
    { label: "Drafts", value: drafts, icon: FileX, color: "text-yellow-600" },
    { label: "Featured", value: featured, icon: Users, color: "text-blue-600" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
          <p className="text-black/40 text-sm mt-1">Welcome back, Admin</p>
        </div>
        <Link
          href="/admin/pandals/new"
          className="flex items-center gap-2 bg-utsav text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-utsav-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Pandal
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm">
            <s.icon className={`w-6 h-6 ${s.color} mb-3`} />
            <p className="text-3xl font-bold text-black mb-1">{s.value}</p>
            <p className="text-black/40 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-black/10 rounded-2xl p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-black">Recent Pandals</h2>
          <Link href="/admin/pandals" className="flex items-center gap-1 text-utsav text-sm hover:text-utsav-dark transition-colors">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-1">
          {tours.slice(0, 4).map((t) => (
            <div key={t.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black/5 flex-shrink-0">
                <img src={t.preview} alt={t.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-black text-sm font-medium truncate">{t.title}</p>
                <p className="text-black/40 text-xs">{t.location}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${t.published ? "bg-emerald-500/10 text-emerald-700" : "bg-yellow-400/10 text-yellow-700"}`}>
                {t.published ? "Published" : "Draft"}
              </span>
              <Link href={`/tour/${t.id}`} target="_blank" className="text-black/30 hover:text-black transition-colors">
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/admin/pandals/new" className="bg-white border border-black/10 hover:border-utsav/30 rounded-xl p-4 flex items-center gap-3 transition-all group shadow-sm">
          <div className="w-9 h-9 bg-utsav/10 group-hover:bg-utsav/20 rounded-lg flex items-center justify-center transition-colors">
            <MapPin className="w-4 h-4 text-utsav" />
          </div>
          <span className="text-black/60 group-hover:text-black text-sm font-medium transition-colors">Add New Pandal</span>
        </Link>
      </div>
    </div>
  );
}
