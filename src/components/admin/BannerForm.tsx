"use client";

import { useRef, useState } from "react";
import { Loader2, UploadCloud, X } from "lucide-react";
import { Banner } from "@/lib/bannerService";

interface BannerFormProps {
  initial?: Partial<Banner>;
  onSubmit: (fd: FormData) => Promise<void>;
  onCancel: () => void;
  submitLabel?: string;
}

export default function BannerForm({
  initial,
  onSubmit,
  onCancel,
  submitLabel = "Save Banner",
}: BannerFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [subtitle, setSubtitle] = useState(initial?.subtitle ?? "");
  const [preview, setPreview] = useState<string | null>(initial?.image ?? null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!file && !initial?.image) {
      setError("Please select a banner image.");
      return;
    }
    const fd = new FormData();
    fd.append("title", title);
    fd.append("subtitle", subtitle);
    if (file) fd.append("image", file);

    setLoading(true);
    try {
      await onSubmit(fd);
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string } } };
      setError(axiosErr?.response?.data?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-black/60">Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Banner title"
          className="w-full px-4 py-3 rounded-xl border border-black/10 text-black text-sm placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-utsav/30 focus:border-utsav transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-black/60">Subtitle</label>
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Banner subtitle (optional)"
          className="w-full px-4 py-3 rounded-xl border border-black/10 text-black text-sm placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-utsav/30 focus:border-utsav transition-all"
        />
      </div>

      {/* Image upload */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-black/60">Image</label>
        {preview ? (
          <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-[16/5]">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => {
                setPreview(null);
                setFile(null);
              }}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => inputRef.current?.click()}
            className="border-2 border-dashed border-black/10 hover:border-utsav/40 rounded-2xl p-10 flex flex-col items-center gap-3 cursor-pointer transition-colors"
          >
            <div className="w-12 h-12 bg-utsav/10 rounded-xl flex items-center justify-center">
              <UploadCloud className="w-6 h-6 text-utsav" />
            </div>
            <p className="text-black/40 text-sm text-center">
              Drag & drop or{" "}
              <span className="text-utsav font-medium">click to upload</span>
              <br />
              <span className="text-xs">PNG, JPG, WEBP up to 10 MB</span>
            </p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
        />
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 rounded-xl border border-black/10 text-black/60 hover:text-black hover:border-black/20 text-sm font-medium transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-utsav hover:bg-utsav-dark disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Saving…
            </>
          ) : (
            submitLabel
          )}
        </button>
      </div>
    </form>
  );
}
