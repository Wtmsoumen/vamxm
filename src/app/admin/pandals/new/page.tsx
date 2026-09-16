"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

const inputCls = "w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-utsav/60 transition-colors";
const labelCls = "text-black/50 text-xs font-medium mb-1.5 block";

export default function NewPandalPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    nameBengali: "",
    location: "",
    description: "",
    panoramaUrl: "",
    idolPanoramaUrl: "",
    featured: false,
    published: false,
  });

  function set(key: string, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/pandals" className="p-2 rounded-xl border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-black">Add New Pandal</h1>
          <p className="text-black/40 text-sm mt-0.5">Configure the pandal and its 360° experience</p>
        </div>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push("/admin/pandals"); }}>
        {/* Basic Info */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Basic Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Pandal Name *</label>
                <input type="text" placeholder="e.g. Kumartuli Park Sarbojanin" className={inputCls}
                  value={form.name} onChange={(e) => set("name", e.target.value)} required />
              </div>
              <div>
                <label className={labelCls}>Bengali Name</label>
                <input type="text" placeholder="e.g. কুমারটুলি পার্ক সার্বোজানিন" className={inputCls}
                  value={form.nameBengali} onChange={(e) => set("nameBengali", e.target.value)} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Location *</label>
              <input type="text" placeholder="e.g. Kumartuli, Kolkata" className={inputCls}
                value={form.location} onChange={(e) => set("location", e.target.value)} required />
            </div>
            <div>
              <label className={labelCls}>Description</label>
              <textarea rows={3} placeholder="Describe this pandal and its significance..." className={`${inputCls} resize-none`}
                value={form.description} onChange={(e) => set("description", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <label htmlFor="featured" className="text-black/60 text-sm cursor-pointer select-none">Mark as Featured</label>
              </div>
            </div>
          </div>
        </div>

        {/* 360° URLs */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">360° Tour URLs</h2>
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Pandal 360° Tour URL *</label>
              <input type="url" placeholder="https://example.com/tours/pandal-name" className={inputCls}
                value={form.panoramaUrl} onChange={(e) => set("panoramaUrl", e.target.value)} required />
              <p className="text-black/30 text-xs mt-1">Embed URL for the pandal exterior/interior panorama</p>
            </div>
            <div>
              <label className={labelCls}>Idol 360° Tour URL (Optional)</label>
              <input type="url" placeholder="https://example.com/tours/pandal-name-idol" className={inputCls}
                value={form.idolPanoramaUrl} onChange={(e) => set("idolPanoramaUrl", e.target.value)} />
              <p className="text-black/30 text-xs mt-1">Separate tour focused on the idol</p>
            </div>
          </div>
        </div>

        {/* Media Upload */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
          <h2 className="text-black font-semibold mb-5">Thumbnail Image</h2>
          <div>
            <label className={labelCls}>Cover Image *</label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-black/15 hover:border-utsav/40 rounded-xl p-8 text-center cursor-pointer transition-colors">
              <Upload className="w-8 h-8 text-black/20 mb-2" />
              <p className="text-black/40 text-sm">Drop file here or click to browse</p>
              <p className="text-black/25 text-xs mt-1">JPG/PNG, recommended 800×600px</p>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
        </div>

        <div className="flex gap-3 pb-6">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-utsav text-white font-bold py-3 rounded-xl hover:bg-utsav-dark transition-colors"
          >
            <Save className="w-4 h-4" /> Save Pandal
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
