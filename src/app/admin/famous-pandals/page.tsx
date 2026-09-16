"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Save, X, MapPin, Eye, GripVertical } from "lucide-react";
import { famousPandals as initial, type FamousPandal } from "@/data/famousPandals";

const inputCls = "w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-utsav/60 transition-colors";
const labelCls = "text-black/50 text-xs font-medium mb-1.5 block";

const empty = (): FamousPandal => ({ id: Date.now().toString(), name: "", location: "", views: "", img: "", link: "#" });

export default function AdminFamousPandalsPage() {
  const [items, setItems] = useState<FamousPandal[]>(initial);
  const [editing, setEditing] = useState<FamousPandal | null>(null);
  const [isNew, setIsNew] = useState(false);

  function openNew() { setEditing(empty()); setIsNew(true); }
  function openEdit(item: FamousPandal) { setEditing({ ...item }); setIsNew(false); }
  function closeEdit() { setEditing(null); setIsNew(false); }

  function save() {
    if (!editing) return;
    setItems((prev) =>
      isNew ? [...prev, editing] : prev.map((p) => (p.id === editing.id ? editing : p))
    );
    closeEdit();
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function setField(key: keyof FamousPandal, value: string) {
    setEditing((e) => e ? { ...e, [key]: value } : e);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">Famous Pandals</h1>
          <p className="text-black/40 text-sm mt-1">Manage the featured pandals shown on the home page</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-utsav text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-utsav-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Pandal
        </button>
      </div>

      {/* Card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {items.map((p) => (
          <div key={p.id} className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm group">
            <div className="relative h-44 bg-black/5">
              {p.img ? (
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-black/20 text-sm">No image</div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button onClick={() => openEdit(p)} className="p-2.5 bg-white rounded-xl text-black hover:text-utsav transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => remove(p.id)} className="p-2.5 bg-white rounded-xl text-black hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold text-black text-sm truncate">{p.name || <span className="text-black/30">Untitled</span>}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="flex items-center gap-1 text-black/40 text-xs"><MapPin className="w-3 h-3" />{p.location || "—"}</span>
                <span className="flex items-center gap-1 text-black/40 text-xs"><Eye className="w-3 h-3" />{p.views || "—"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit drawer */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30" onClick={closeEdit}>
          <div className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-xl p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-black text-lg">{isNew ? "Add Pandal" : "Edit Pandal"}</h2>
              <button onClick={closeEdit} className="p-1.5 rounded-lg text-black/40 hover:text-black hover:bg-black/5 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div>
              <label className={labelCls}>Pandal Name *</label>
              <input type="text" className={inputCls} value={editing.name} onChange={(e) => setField("name", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Location</label>
                <input type="text" className={inputCls} placeholder="e.g. North Kolkata" value={editing.location} onChange={(e) => setField("location", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Views (display)</label>
                <input type="text" className={inputCls} placeholder="e.g. 2.1M" value={editing.views} onChange={(e) => setField("views", e.target.value)} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Image Path / URL</label>
              <input type="text" className={inputCls} placeholder="/pandals/pandal1.jpg" value={editing.img} onChange={(e) => setField("img", e.target.value)} />
              {editing.img && (
                <div className="mt-2 h-24 rounded-xl overflow-hidden border border-black/10">
                  <img src={editing.img} alt="preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div>
              <label className={labelCls}>Link URL</label>
              <input type="text" className={inputCls} placeholder="#" value={editing.link} onChange={(e) => setField("link", e.target.value)} />
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={save} className="flex-1 flex items-center justify-center gap-2 bg-utsav text-white font-bold py-3 rounded-xl hover:bg-utsav-dark transition-colors">
                <Save className="w-4 h-4" /> {isNew ? "Add" : "Save Changes"}
              </button>
              <button onClick={closeEdit} className="px-5 py-3 rounded-xl border border-black/10 text-black/60 hover:bg-black/5 transition-colors text-sm font-medium">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
