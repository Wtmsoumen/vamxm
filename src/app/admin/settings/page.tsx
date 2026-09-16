"use client";

import { useState } from "react";
import { Save, Globe, Mail, Calendar, Eye, EyeOff } from "lucide-react";

const inputCls = "w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-utsav/60 transition-colors";
const labelCls = "text-black/50 text-xs font-medium mb-1.5 block";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? "bg-utsav" : "bg-black/15"}`}
    >
      <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

export default function AdminSettingsPage() {
  const [form, setForm] = useState({
    platformName: "UtsavVerse",
    year: "2025",
    contactEmail: "hello@utsavverse.in",
    siteUrl: "https://utsavverse.in",
    maintenanceMode: false,
    showNodeCount: true,
    allowEmbeds: true,
  });

  function set(key: string, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Settings</h1>
        <p className="text-black/40 text-sm mt-1">Configure platform settings</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* General */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">General</h2>
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Platform Name</label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input type="text" className={`${inputCls} pl-10`} value={form.platformName}
                  onChange={(e) => set("platformName", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Festival Year</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input type="number" className={`${inputCls} pl-10`} value={form.year}
                    onChange={(e) => set("year", e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Site URL</label>
                <input type="url" className={inputCls} value={form.siteUrl}
                  onChange={(e) => set("siteUrl", e.target.value)} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Contact Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input type="email" className={`${inputCls} pl-10`} value={form.contactEmail}
                  onChange={(e) => set("contactEmail", e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Tour Display */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Tour Display</h2>
          <div className="space-y-3">
            {[
              {
                key: "showNodeCount",
                label: "Show 360° View Count",
                desc: "Display node count badge on tour cards",
              },
              {
                key: "allowEmbeds",
                label: "Allow External Embeds",
                desc: "Let the tour viewer be embedded on other sites",
              },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-black/[0.07] hover:bg-black/[0.02] transition-colors">
                <div>
                  <p className="text-black text-sm font-medium">{item.label}</p>
                  <p className="text-black/40 text-xs mt-0.5">{item.desc}</p>
                </div>
                <Toggle
                  checked={form[item.key as keyof typeof form] as boolean}
                  onChange={(v) => set(item.key, v)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Site Visibility</h2>
          <div className="flex items-center justify-between p-4 rounded-xl border border-black/[0.07]">
            <div className="flex items-center gap-3">
              {form.maintenanceMode
                ? <EyeOff className="w-5 h-5 text-yellow-600" />
                : <Eye className="w-5 h-5 text-emerald-600" />}
              <div>
                <p className="text-black text-sm font-medium">Maintenance Mode</p>
                <p className="text-black/40 text-xs mt-0.5">
                  {form.maintenanceMode ? "Site is hidden from public" : "Site is live and visible"}
                </p>
              </div>
            </div>
            <Toggle checked={form.maintenanceMode} onChange={(v) => set("maintenanceMode", v)} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-utsav text-white font-bold py-3 rounded-xl hover:bg-utsav-dark transition-colors"
        >
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </form>
    </div>
  );
}
