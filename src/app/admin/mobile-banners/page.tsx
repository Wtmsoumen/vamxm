"use client";

import BannerManager from "@/components/admin/BannerManager";
import {
  fetchMobileBanners,
  createMobileBanner,
  updateMobileBanner,
  deleteMobileBanner,
} from "@/lib/bannerService";

export default function AdminMobileBannersPage() {
  return (
    <BannerManager
      title="Mobile Banners"
      description="Manage banners displayed on mobile devices"
      fetchFn={fetchMobileBanners}
      createFn={createMobileBanner}
      updateFn={updateMobileBanner}
      deleteFn={deleteMobileBanner}
    />
  );
}
