"use client";

import Link from "next/link";
import { MapPin, Eye, FileX, Users, Bell, Plus, ArrowRight } from "lucide-react";
import { pandals } from "@/data/pandals";

export default function AdminDashboard() {
  const total = pandals.length;
  const published = pandals.filter((p) => p.published).length;
  const drafts = pandals.filter((p) => !p.published).length;
  const featured = pandals.filter((p) => p.featured).length;

  const stats = [
    { label: "Total Pandals", value: total, icon: MapPin, color: "text-saffron" },
    { label: "Published", value: published, icon: Eye, color: "text-emerald-400" },
    { label: "Drafts", value: drafts, icon: FileX, color: "text-yellow-400" },
    { label: "Featured", value: featured, icon: Users, color: "text-blue-400" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-white/40 text-sm mt-1">Welcome back, Admin</p>
        </div>
        <Link
          href="/admin/pandals/new"
          className="flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" /> Add Pandal
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-zinc-900 border border-white/10 rounded-2xl p-5">
            <s.icon className={`w-6 h-6 ${s.color} mb-3`} />
            <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
            <p className="text-white/40 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-white">Recent Pandals</h2>
          <Link href="/admin/pandals" className="flex items-center gap-1 text-saffron text-sm hover:text-white transition-colors">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-2">
          {pandals.slice(0, 4).map((p) => (
            <div key={p.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron font-bold flex-shrink-0">
                {p.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{p.name}</p>
                <p className="text-white/40 text-xs">{p.location}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${p.published ? "bg-emerald-400/10 text-emerald-400" : "bg-yellow-400/10 text-yellow-400"}`}>
                {p.published ? "Published" : "Draft"}
              </span>
              <Link href={`/view/${p.id}`} className="text-white/30 hover:text-white transition-colors">
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Add New Pandal", href: "/admin/pandals/new", icon: MapPin },
          { label: "Send Notification", href: "/admin/notifications", icon: Bell },
          { label: "Manage Sponsors", href: "/admin/sponsors", icon: Users },
        ].map((action) => (
          <Link key={action.label} href={action.href} className="bg-zinc-900 border border-white/10 hover:border-saffron/30 rounded-xl p-4 flex items-center gap-3 transition-all group">
            <div className="w-9 h-9 bg-saffron/10 group-hover:bg-saffron/20 rounded-lg flex items-center justify-center transition-colors">
              <action.icon className="w-4 h-4 text-saffron" />
            </div>
            <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
