"use client";

import { Upload, Save, Eye } from "lucide-react";

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-saffron/50 transition-colors";

export default function NewPandalPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Add New Pandal</h1>
        <p className="text-white/40 text-sm mt-1">Upload content and configure the 360° experience</p>
      </div>

      <form className="space-y-6">
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Pandal Name *</label>
              <input type="text" placeholder="e.g. Kumartuli Park Sarbojanin" className={inputCls} />
            </div>
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Location *</label>
              <input type="text" placeholder="e.g. Kumartuli, Kolkata" className={inputCls} />
            </div>
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Description</label>
              <textarea rows={3} placeholder="Describe this pandal..." className={`${inputCls} resize-none`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white/50 text-xs mb-1.5 block">Status</label>
                <select className={`${inputCls} appearance-none cursor-pointer`}>
                  <option value="draft" className="bg-zinc-900">Draft</option>
                  <option value="published" className="bg-zinc-900">Published</option>
                </select>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                <input type="checkbox" id="featured" className="accent-saffron w-4 h-4" />
                <label htmlFor="featured" className="text-white/60 text-sm cursor-pointer">Featured</label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">Media & 360° Content</h2>
          <div className="space-y-4">
            {[
              { label: "Thumbnail Image *", hint: "JPG/PNG, recommended 800×600px" },
              { label: "360° Pandal Image *", hint: "Equirectangular JPG, min 4096×2048px" },
              { label: "360° Idol Image (Optional)", hint: "Same format as pandal image" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-white/50 text-xs mb-2 block">{f.label}</label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 hover:border-saffron/40 rounded-xl p-8 text-center cursor-pointer transition-colors">
                  <Upload className="w-8 h-8 text-white/20 mb-2" />
                  <p className="text-white/40 text-sm">Drop file here or click to browse</p>
                  <p className="text-white/20 text-xs mt-1">{f.hint}</p>
                  <input type="file" className="hidden" />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Save className="w-4 h-4" /> Save Pandal
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Eye className="w-4 h-4" /> Preview
          </button>
        </div>
      </form>
    </div>
  );
}
