"use client";

import BannerManager from "@/components/admin/BannerManager";
import {
  fetchBanners,
  createBanner,
  updateBanner,
  deleteBanner,
} from "@/lib/bannerService";

export default function AdminBannersPage() {
  return (
    <BannerManager
      title="Banners"
      description="Manage desktop hero banners displayed on the website"
      fetchFn={fetchBanners}
      createFn={createBanner}
      updateFn={updateBanner}
      deleteFn={deleteBanner}
    />
  );
}
