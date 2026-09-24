"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Loader2,
  ImageOff,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import BannerForm from "./BannerForm";
import { Banner, BannerListResponse } from "@/lib/bannerService";

interface BannerManagerProps {
  title: string;
  description: string;
  fetchFn: (page: number, perPage: number, status: string) => Promise<BannerListResponse>;
  createFn: (fd: FormData) => Promise<Banner>;
  updateFn: (id: number | string, fd: FormData) => Promise<Banner>;
  deleteFn: (id: number | string) => Promise<void>;
}

export default function BannerManager({
  title,
  description,
  fetchFn,
  createFn,
  updateFn,
  deleteFn,
}: BannerManagerProps) {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PER_PAGE = 12;

  // Modal state
  const [modalMode, setModalMode] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<Banner | null>(null);

  // Delete confirmation
  const [deleting, setDeleting] = useState<Banner | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetchFn(page, PER_PAGE, "active");
      const list: Banner[] = res?.data ?? (Array.isArray(res) ? (res as unknown as Banner[]) : []);
      setBanners(list);
      const meta = res?.meta;
      if (meta?.last_page) setTotalPages(meta.last_page);
    } catch {
      setError("Failed to load banners. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [fetchFn, page]);

  useEffect(() => {
    load();
  }, [load]);

  const handleCreate = async (fd: FormData) => {
    await createFn(fd);
    setModalMode(null);
    load();
  };

  const handleUpdate = async (fd: FormData) => {
    if (!editing) return;
    await updateFn(editing.id, fd);
    setModalMode(null);
    setEditing(null);
    load();
  };

  const handleDelete = async () => {
    if (!deleting) return;
    setDeleteLoading(true);
    try {
      await deleteFn(deleting.id);
      setDeleting(null);
      load();
    } catch {
      setError("Failed to delete banner.");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
          <p className="text-black/40 text-sm mt-1">{description}</p>
        </div>
        <button
          id="add-banner-btn"
          onClick={() => { setEditing(null); setModalMode("create"); }}
          className="flex items-center gap-2 bg-utsav text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-utsav-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Banner
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
          {error}
          <button onClick={() => setError("")} className="ml-auto"><X className="w-3 h-3" /></button>
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 animate-spin text-utsav/40" />
        </div>
      ) : banners.length === 0 ? (
        <div className="bg-white border border-black/10 rounded-2xl p-16 flex flex-col items-center gap-4 text-center shadow-sm">
          <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center">
            <ImageOff className="w-7 h-7 text-black/20" />
          </div>
          <div>
            <p className="font-semibold text-black/60">No banners yet</p>
            <p className="text-black/30 text-sm mt-1">Click "Add Banner" to create your first one.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {banners.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[16/7] bg-black/5 overflow-hidden">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageOff className="w-8 h-8 text-black/20" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="font-semibold text-black text-sm truncate">{b.title}</p>
                {b.subtitle && (
                  <p className="text-black/40 text-xs mt-0.5 truncate">{b.subtitle}</p>
                )}
                {b.status && (
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium ${
                    b.status === "active"
                      ? "bg-emerald-500/10 text-emerald-700"
                      : "bg-yellow-400/10 text-yellow-700"
                  }`}>
                    {b.status}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="px-4 pb-4 flex items-center gap-2">
                <button
                  onClick={() => { setEditing(b); setModalMode("edit"); }}
                  className="flex items-center gap-1.5 text-xs font-medium text-black/50 hover:text-utsav px-3 py-2 rounded-lg hover:bg-utsav/5 transition-all flex-1 justify-center"
                >
                  <Pencil className="w-3.5 h-3.5" /> Edit
                </button>
                <button
                  onClick={() => setDeleting(b)}
                  className="flex items-center gap-1.5 text-xs font-medium text-black/50 hover:text-red-500 px-3 py-2 rounded-lg hover:bg-red-50 transition-all flex-1 justify-center"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded-lg border border-black/10 text-black/40 hover:text-black hover:border-black/20 disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm text-black/50 px-2">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-2 rounded-lg border border-black/10 text-black/40 hover:text-black hover:border-black/20 disabled:opacity-30 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Create / Edit Modal */}
      {modalMode && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) { setModalMode(null); setEditing(null); } }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-black/10 flex items-center justify-between">
              <h2 className="font-bold text-lg text-black">
                {modalMode === "create" ? "Add New Banner" : "Edit Banner"}
              </h2>
              <button
                onClick={() => { setModalMode(null); setEditing(null); }}
                className="p-2 text-black/30 hover:text-black rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <BannerForm
                initial={editing ?? undefined}
                onSubmit={modalMode === "create" ? handleCreate : handleUpdate}
                onCancel={() => { setModalMode(null); setEditing(null); }}
                submitLabel={modalMode === "create" ? "Add Banner" : "Update Banner"}
              />
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleting && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6">
            <h2 className="font-bold text-lg text-black mb-2">Delete Banner</h2>
            <p className="text-black/50 text-sm mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-black">"{deleting.title}"</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleting(null)}
                className="flex-1 py-2.5 rounded-xl border border-black/10 text-black/60 hover:text-black text-sm font-medium transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                {deleteLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
