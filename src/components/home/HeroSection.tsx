"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection(data: any) {

  // const images = ["/maaAschen.png", "/AIRobo.png", "/maaAschenMob.png", "/AIRoboMob.png"];
  const images = ["/maaAschen.png", "/AIRobo.png"];
  const innerhtml = [
    <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 xl:px-[8.75%]">
      <div className="max-w-[750px]">

        <h1 className="section-title text-[32px] xs:text-[40px] sm:text-[56px] md:text-[90px] hero-h1">
          Experience
          <span className="display-gradient block">Durga Puja</span>
        </h1>

        <p className="section-title mt-2 text-[22px] xs:text-[28px] sm:text-[38px] md:text-[67px] hero-desc">
          Like Never Before
        </p>

        <p className="mt-4 max-w-[650px] text-sm md:text-[19px] hero-desc text-black">
          Explore Kolkata&apos;s iconic pandals with immersive 360° tours,
          real-time updates and a complete puja guide — all in one place.
        </p>

        <div className="mt-8 flex flex-nowrap items-center gap-3 hero-btns">
          <a
            href="#pandals"
            className="red-gradient inline-flex h-12 sm:h-[54px] items-center justify-center rounded-full px-6 sm:px-8 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Explore Pandals <span className="ml-3">→</span>
          </a>
          <a
            href="#guide"
            className="inline-flex h-12 sm:h-[54px] items-center justify-center gap-3 rounded-full border border-utsav bg-white px-5 sm:px-6 text-xs sm:text-sm font-semibold text-black transition hover:bg-red-50"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-utsav text-white text-xs">▶</span>
            Watch Video
          </a>
        </div>
      </div>
    </div>
    ,

    <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 xl:px-[8.75%]">
      <div className="max-w-[750px]">

        <h1 className="section-title text-[32px] xs:text-[40px] sm:text-[56px] md:text-[90px] hero-h1">
          Where Data
          <span className="block">Meets <span className="text-[#FA9D00]">AI</span></span>
        </h1>

        <p className="section-title text-[#38C045] mt-2 text-[32px] xs:text-[40px] sm:text-[56px] md:text-[90px] hero-desc">
          Intelligence
        </p>

        <p className="mt-4 max-w-[650px] text-sm md:text-[19px] hero-desc text-black">
          Our AI-driven agency, where innovation meets precision & we transform your data into actionable insights that drive success.
        </p>

        <div className="mt-8 flex flex-nowrap items-center gap-3 hero-btns">
          <a
            href="#pandals"
            className="red-gradient inline-flex h-12 sm:h-[54px] items-center justify-center rounded-full px-6 sm:px-8 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Explore Pandals <span className="ml-3">→</span>
          </a>
          <a
            href="#guide"
            className="inline-flex h-12 sm:h-[54px] items-center justify-center gap-3 rounded-full border border-utsav bg-white px-5 sm:px-6 text-xs sm:text-sm font-semibold text-black transition hover:bg-red-50"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-utsav text-white text-xs">▶</span>
            Watch Video
          </a>
        </div>
      </div>
    </div>

  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const banners = Array.isArray(data?.data) ? data.data : [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="relative pt-24 md:min-h-[900px] md:pt-[220px]">
      <div className="h-full w-3/4 bg-linear-to-r from-white via-white/90 to-transparent absolute left-0 top-0 z-10" />
      {banners.length ? banners.map((item: any, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.04), transparent), url('${item.image}')`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
      )) : null}

      {/* <div className="relative z-10" dangerouslySetInnerHTML={{ __html: innerhtml[0] }} /> */}
      <div className="relative z-10 grid">
        {/* {innerhtml.map((ii, idx) => (
          <div
            key={idx}
            className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
          >
            {ii}
          </div>
        ))} */}
        {banners.length ? banners.map((item: any, index: number) => (<div
          key={index}
          className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 xl:px-[8.75%]">
            <div className="max-w-[750px]">

              <h1 className="section-title text-[32px] xs:text-[40px] sm:text-[56px] md:text-[90px] hero-h1 capitalize">
                {(item?.title || "").split(" ")[0]}
                <span className="display-gradient block capitalize">{(item?.title || "").split(" ").slice(1, 3).join(" ")}</span>
              </h1>

              <p className="section-title mt-2 text-[22px] xs:text-[28px] sm:text-[38px] md:text-[67px] hero-desc capitalize">
                {(item?.title || "").split(" ").slice(3).join(" ")}
              </p>

              <p className="mt-4 max-w-[650px] text-sm md:text-[19px] hero-desc text-black">
                Explore Kolkata&apos;s iconic pandals with immersive 360° tours,
                real-time updates and a complete puja guide — all in one place.
              </p>

              <div className="mt-8 flex flex-nowrap items-center gap-3 hero-btns">
                <Link
                  href="#pandals"
                  className="red-gradient inline-flex h-12 sm:h-[54px] items-center justify-center rounded-full px-6 sm:px-8 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                >
                  Explore Pandals <span className="ml-3">→</span>
                </Link>
                {/* <a
                  href="#guide"
                  className="inline-flex h-12 sm:h-[54px] items-center justify-center gap-3 rounded-full border border-utsav bg-white px-5 sm:px-6 text-xs sm:text-sm font-semibold text-black transition hover:bg-red-50"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-utsav text-white text-xs">▶</span>
                  Watch Video
                </a> */}
              </div>
            </div>
          </div>
        </div>)) : null}
      </div>

      {/* Service strip */}
      <div className="relative mt-10 px-4 pb-10 sm:pb-0 md:absolute md:bottom-0 md:left-0 md:mt-0 md:-mb-18 md:w-full md:px-6 z-20 hero-strip">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 overflow-hidden rounded-[19px] gap-2 sm:gap-0 shadow-lg lg:grid-cols-4">

          <div className="flex items-center justify-center sm:justify-start sm:rounded-none rounded-[19px] gap-4 bg-gradient-to-b from-[#d80117] to-[#a80202] px-6 py-5 sm:py-6 text-white md:px-10">
            <div className="flex h-14 w-14 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-white/15">
              <img src="/cyber.svg" alt="cyber" width={192} height={108} className="w-[34px] sm:w-[38px] h-auto" />
            </div>
            <p className="text-base sm:text-lg font-medium leading-6 hidden sm:block">Cyber<br />Security</p>
          </div>

          <div className="flex items-center justify-center sm:justify-start sm:rounded-none rounded-[19px] gap-4 bg-gradient-to-b from-[#00bfa5] to-[#018F7C] px-6 py-5 sm:py-6 text-white md:px-10">
            <div className="flex h-14 w-14 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-white/15">
              <img src="/AIDA.svg" alt="mobileApp" width={192} height={108} className="w-[24px] sm:w-[28px] h-auto" />
            </div>
            <p className="text-base sm:text-lg font-medium leading-6 hidden sm:block">Artificial<br />Intelligence</p>
          </div>

          <div className="flex items-center justify-center sm:justify-start sm:rounded-none rounded-[19px] gap-4 bg-gradient-to-b from-[#fa9d00] to-[#cd8205] px-6 py-5 sm:py-6 text-white md:px-10">
            <div className="flex h-14 w-14 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-white/15">
              <img src="/website.svg" alt="website" width={192} height={108} className="w-[30px] sm:w-[34px] h-auto" />
            </div>
            <p className="text-base sm:text-lg font-medium leading-6 hidden sm:block">Website & App<br />Development</p>
          </div>

          <div className="flex items-center justify-center sm:justify-start sm:rounded-none rounded-[19px] gap-4 bg-gradient-to-b from-[#38c045] to-[#02a230] px-6 py-5 sm:py-6 text-white md:px-10">
            <div className="flex h-14 w-14 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-white/15">
              <img src="/digitalmarketing.svg" alt="website" width={192} height={108} className="w-[30px] sm:w-[34px] h-auto" />
            </div>
            <p className="text-base sm:text-lg font-medium leading-6 hidden sm:block">Digital<br />Marketing</p>
          </div>

        </div>
      </div>
    </section>
  );
}
