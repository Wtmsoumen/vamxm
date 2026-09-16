"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Upload, Eye, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Tour } from "@/data/tours";

const inputCls = "w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-utsav/60 transition-colors";
const labelCls = "text-black/50 text-xs font-medium mb-1.5 block";

export default function EditTourForm({ tour }: { tour: Tour }) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: tour.title,
    location: tour.location,
    description: tour.description,
    nodes: tour.nodes,
    preview: tour.preview,
    path: tour.path,
    featured: tour.featured,
    published: tour.published,
  });

  function set(key: string, value: string | boolean | number) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/pandals" className="p-2 rounded-xl border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-black/40 text-xs uppercase tracking-wider font-semibold mb-0.5">Editing Tour</p>
          <h1 className="text-2xl font-bold text-black truncate">{tour.title}</h1>
        </div>
        <Link
          href={`/tour/${tour.id}`}
          target="_blank"
          className="flex items-center gap-2 border border-black/15 text-black/60 hover:text-black text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <Eye className="w-4 h-4" /> Preview
        </Link>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push("/admin/pandals"); }}>
        {/* Basic Info */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Tour Title *</label>
              <input type="text" className={inputCls} value={form.title}
                onChange={(e) => set("title", e.target.value)} required />
            </div>
            <div>
              <label className={labelCls}>Location *</label>
              <input type="text" className={inputCls} value={form.location}
                onChange={(e) => set("location", e.target.value)} required />
            </div>
            <div>
              <label className={labelCls}>Description</label>
              <textarea rows={4} className={`${inputCls} resize-none`} value={form.description}
                onChange={(e) => set("description", e.target.value)} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className={labelCls}>360° View Nodes</label>
                <input type="number" min={1} max={20} className={inputCls} value={form.nodes}
                  onChange={(e) => set("nodes", parseInt(e.target.value) || 1)} />
              </div>
              <div>
                <label className={labelCls}>Status</label>
                <select className={`${inputCls} cursor-pointer`}
                  value={form.published ? "published" : "draft"}
                  onChange={(e) => set("published", e.target.value === "published")}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 border border-black/15 rounded-xl">
                <input type="checkbox" id="featured" className="accent-utsav w-4 h-4"
                  checked={form.featured} onChange={(e) => set("featured", e.target.checked)} />
                <label htmlFor="featured" className="text-black/60 text-sm cursor-pointer select-none">Featured</label>
              </div>
            </div>
          </div>
        </div>

        {/* Tour path */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Tour Source</h2>
          <div>
            <label className={labelCls}>Tour Path / Embed URL *</label>
            <div className="relative">
              <input type="text" className={`${inputCls} pr-10`} value={form.path}
                onChange={(e) => set("path", e.target.value)}
                placeholder="/tours/tour-id/index.html or https://…" required />
              {form.path && (
                <a href={form.path} target="_blank" rel="noreferrer"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/30 hover:text-utsav transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-black/30 text-xs mt-1">Local path (e.g. /tours/name/index.html) or external embed URL</p>
          </div>
        </div>

        {/* Preview image */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Preview Image</h2>
          <div className="space-y-4">
            {form.preview && (
              <div className="rounded-xl overflow-hidden border border-black/10 aspect-video bg-black/5">
                <img src={form.preview} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <label className={labelCls}>Image Path / URL</label>
              <input type="text" placeholder="/tours/tour-id/preview.jpg" className={inputCls}
                value={form.preview} onChange={(e) => set("preview", e.target.value)} />
            </div>
            <div>
              <p className="text-black/30 text-xs text-center mb-3">— or upload a new file —</p>
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-black/15 hover:border-utsav/40 rounded-xl p-6 text-center cursor-pointer transition-colors">
                <Upload className="w-7 h-7 text-black/20 mb-2" />
                <p className="text-black/40 text-sm">Drop file here or click to browse</p>
                <p className="text-black/25 text-xs mt-1">JPG/PNG, recommended 1200×800px</p>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pb-6">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-utsav text-white font-bold py-3 rounded-xl hover:bg-utsav-dark transition-colors"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
          <Link
            href="/admin/pandals"
            className="flex items-center gap-2 bg-black/5 border border-black/10 text-black/70 px-6 py-3 rounded-xl hover:bg-black/10 transition-colors text-sm font-medium"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
