"use client"

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function MobileAppSection({ data }: { data?: any } = {}) {
  const homeData = useSelector((state: RootState) => state.home.data) as any;
  const settingsPayload = useSelector((state: RootState) => state.publicContent.settings.data) as any;
  const settingsApps = settingsPayload?.data?.apps;
  const appLinks = settingsApps
    ? [
      settingsApps.play_store && { platform: "Android", url: settingsApps.play_store },
      settingsApps.app_store && { platform: "iOS", url: settingsApps.app_store },
    ].filter(Boolean)
    : data?.data ?? homeData?.data?.app_downloads;
  console.log(appLinks, "appLinks");
  return (
    <section
      id="app"
      className="relative overflow-hidden px-5 md:px-10 py-16 sm:py-20 md:py-28"
    >
      <img src="/MobileAppBg.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />

      <div className="relative mx-auto max-w-[1400px] grid items-center gap-8 grid-cols-1 md:grid-cols-3">

        {/* Phone mockup 1 — hidden on mobile */}
        <AnimateOnScroll anim="left" className="order-2 justify-center md:order-1 hidden md:flex">
          <img src="/MobileApp1.png" alt="Utsav Verse app splash screen" className="max-h-[480px] w-auto object-contain drop-shadow-2xl md:-mb-56" />
        </AnimateOnScroll>

        {/* Center text */}
        <AnimateOnScroll anim="up" className="order-1 text-center md:order-2">
          <p className="section-kicker">Mobile App</p>
          <h2 className="section-title mt-5 text-[34px] sm:text-[44px] md:text-[52px]">
            Download
            <span className="display-gradient block uppercase">Utsavverse</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[360px] text-[15px] leading-7 text-black/75">
            Live crowd updates, favorites, reviews and photo uploads — free on{" "}
            <strong>Android and iOS.</strong>
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            {appLinks?.length ? appLinks.map((v: any, i: number) =>
              <Link key={i} target="_blank" href={v?.url} className="inline-flex items-center">
                <img src={v?.platform === "Android" ? "/googlePlay.svg" : "/appStore.svg"} alt="Get it on Google Play" className="h-10 sm:h-12 w-auto" />
              </Link>) : null}
            {/* <Link href={data?.data?.[1]?.url} className="inline-flex items-center">
              <img src="/appStore.svg" alt="Download on the App Store" className="h-10 sm:h-12 w-auto" />
            </Link> */}
          </div>
        </AnimateOnScroll>

        {/* Phone mockup 2 */}
        <AnimateOnScroll anim="right" className="order-3 hidden md:flex justify-center">
          <img
            src="/MobileApp2.png"
            alt="Utsav Verse app home screen"
            className="max-h-[300px] w-auto object-contain drop-shadow-2xl sm:max-h-[380px] md:max-h-[480px] md:-mt-[124px]"
          />
        </AnimateOnScroll>

      </div>
    </section>
  );
}
