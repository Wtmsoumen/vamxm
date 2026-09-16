"use client";

import { useState } from "react";
import { Plus, Trash2, Save, X, Upload, LayoutGrid } from "lucide-react";
import { galleryTiles as initial, type GalleryTile } from "@/data/gallery";

const inputCls = "w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-utsav/60 transition-colors";
const labelCls = "text-black/50 text-xs font-medium mb-1.5 block";

const emptyTile = (): GalleryTile => ({ id: Date.now().toString(), src: "", alt: "", span: 1 });

export default function AdminGalleryPage() {
  const [tiles, setTiles] = useState<GalleryTile[]>(initial);
  const [adding, setAdding] = useState<GalleryTile | null>(null);

  function remove(id: string) { setTiles((t) => t.filter((x) => x.id !== id)); }
  function toggleSpan(id: string) {
    setTiles((t) => t.map((x) => x.id === id ? { ...x, span: x.span === 2 ? 1 : 2 } : x));
  }
  function setField(key: keyof GalleryTile, value: string | number) {
    setAdding((a) => a ? { ...a, [key]: value } : a);
  }
  function saveNew() {
    if (!adding || !adding.src) return;
    setTiles((t) => [...t, adding]);
    setAdding(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">Gallery</h1>
          <p className="text-black/40 text-sm mt-1">Manage the photo gallery shown on the home page</p>
        </div>
        <button
          onClick={() => setAdding(emptyTile())}
          className="flex items-center gap-2 bg-utsav text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-utsav-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Image
        </button>
      </div>

      {/* Live grid preview */}
      <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <LayoutGrid className="w-4 h-4 text-black/40" />
          <span className="text-black/50 text-xs font-semibold uppercase tracking-wider">Grid Preview</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {tiles.map((t) => (
            <div
              key={t.id}
              className={`relative group rounded-xl overflow-hidden bg-black/5 h-28 ${t.span === 2 ? "col-span-2" : ""}`}
            >
              {t.src ? (
                <img src={t.src} alt={t.alt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-black/20 text-xs">No image</div>
              )}
              {/* Overlay controls */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => toggleSpan(t.id)}
                  title={t.span === 2 ? "Make normal width" : "Make wide (2 cols)"}
                  className="px-2 py-1 bg-white/90 rounded-lg text-black text-xs font-semibold hover:bg-white transition-colors"
                >
                  {t.span === 2 ? "1×" : "2×"}
                </button>
                <button onClick={() => remove(t.id)} className="p-1.5 bg-white/90 rounded-lg text-red-500 hover:bg-white transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              {t.span === 2 && (
                <span className="absolute top-1.5 left-1.5 bg-utsav text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">Wide</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-black/30 text-xs mt-3">Hover over an image to edit. Click <strong>2×</strong> to toggle wide span.</p>
      </div>

      {/* Table list */}
      <div className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/10 bg-black/[0.02]">
              <th className="text-left px-5 py-3.5 text-black/40 text-xs font-semibold uppercase tracking-wider">Image</th>
              <th className="text-left px-5 py-3.5 text-black/40 text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">Alt Text</th>
              <th className="text-left px-5 py-3.5 text-black/40 text-xs font-semibold uppercase tracking-wider hidden md:table-cell">Span</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.06]">
            {tiles.map((t) => (
              <tr key={t.id} className="hover:bg-black/[0.02] transition-colors">
                <td className="px-5 py-3">
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-black/5 flex-shrink-0">
                    {t.src ? <img src={t.src} alt={t.alt} className="w-full h-full object-cover" /> : null}
                  </div>
                </td>
                <td className="px-5 py-3 hidden sm:table-cell text-black/60 text-sm truncate max-w-[200px]">{t.alt || "—"}</td>
                <td className="px-5 py-3 hidden md:table-cell">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${t.span === 2 ? "bg-utsav/10 text-utsav" : "bg-black/5 text-black/50"}`}>
                    {t.span === 2 ? "Wide (2 cols)" : "Normal"}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button onClick={() => toggleSpan(t.id)} className="p-2 text-black/30 hover:text-utsav transition-colors" title="Toggle span">
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button onClick={() => remove(t.id)} className="p-2 text-black/30 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add image modal */}
      {adding && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30" onClick={() => setAdding(null)}>
          <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-xl p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-black text-lg">Add Image</h2>
              <button onClick={() => setAdding(null)} className="p-1.5 rounded-lg text-black/40 hover:text-black hover:bg-black/5 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div>
              <label className={labelCls}>Image Path / URL *</label>
              <input type="text" className={inputCls} placeholder="/pandals/pandal1.jpg or https://…"
                value={adding.src} onChange={(e) => setField("src", e.target.value)} />
              {adding.src && (
                <div className="mt-2 h-32 rounded-xl overflow-hidden border border-black/10">
                  <img src={adding.src} alt="preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div>
              <label className={labelCls}>Alt Text</label>
              <input type="text" className={inputCls} placeholder="Describe the image"
                value={adding.alt} onChange={(e) => setField("alt", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Column Span</label>
              <select className={`${inputCls} cursor-pointer`}
                value={adding.span} onChange={(e) => setField("span", parseInt(e.target.value) as 1 | 2)}>
                <option value={1}>Normal (1 col)</option>
                <option value={2}>Wide (2 cols)</option>
              </select>
            </div>
            <div>
              <p className="text-black/30 text-xs text-center mb-3">— or upload a file —</p>
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-black/15 hover:border-utsav/40 rounded-xl p-5 cursor-pointer transition-colors">
                <Upload className="w-6 h-6 text-black/20 mb-1.5" />
                <p className="text-black/40 text-sm">Click to browse</p>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={saveNew} disabled={!adding.src}
                className="flex-1 flex items-center justify-center gap-2 bg-utsav text-white font-bold py-3 rounded-xl hover:bg-utsav-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <Save className="w-4 h-4" /> Add to Gallery
              </button>
              <button onClick={() => setAdding(null)} className="px-5 py-3 rounded-xl border border-black/10 text-black/60 hover:bg-black/5 transition-colors text-sm font-medium">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
