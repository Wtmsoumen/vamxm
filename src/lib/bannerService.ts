import api from "@/lib/axios";

export interface Banner {
  id: number | string;
  title: string;
  subtitle: string;
  image: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface BannerListResponse {
  data: Banner[];
  meta?: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

// ─── Desktop Banners ────────────────────────────────────────────────────────

export async function fetchBanners(
  page = 1,
  perPage = 12,
  status = "active"
): Promise<BannerListResponse> {
  const { data } = await api.get(
    `/admin/banners?page=${page}&per_page=${perPage}&status=${status}`
  );
  return data;
}

export async function createBanner(formData: FormData): Promise<Banner> {
  const { data } = await api.post("/admin/banners", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data?.data ?? data;
}

export async function updateBanner(
  id: number | string,
  formData: FormData
): Promise<Banner> {
  const { data } = await api.put(`/admin/banners/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data?.data ?? data;
}

export async function deleteBanner(id: number | string): Promise<void> {
  await api.delete(`/admin/banners/${id}`);
}

// ─── Mobile Banners ──────────────────────────────────────────────────────────

export async function fetchMobileBanners(
  page = 1,
  perPage = 12,
  status = "active"
): Promise<BannerListResponse> {
  const { data } = await api.get(
    `/admin/mobile-banners?page=${page}&per_page=${perPage}&status=${status}`
  );
  return data;
}

export async function createMobileBanner(formData: FormData): Promise<Banner> {
  const { data } = await api.post("/admin/mobile-banners", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data?.data ?? data;
}

export async function updateMobileBanner(
  id: number | string,
  formData: FormData
): Promise<Banner> {
  const { data } = await api.put(`/admin/mobile-banners/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data?.data ?? data;
}

export async function deleteMobileBanner(id: number | string): Promise<void> {
  await api.delete(`/admin/mobile-banners/${id}`);
}
