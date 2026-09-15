import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
// public/appStore.svg public/googlePlay.svg

export default function MobileAppSection() {
  return (
    <section
      id="app"
      className="relative overflow-hidden px-5 md:px-10 py-20 md:py-28"
    >
      {/* Textured background */}
      <img
        src="/MobileAppBg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 grid-cols-1 md:grid-cols-3">

        {/* Phone mockup 1 */}
        <AnimateOnScroll anim="left" className="order-2 hidden justify-center md:order-1 md:flex">
          <img
            src="/MobileApp1.png"
            alt="Utsav Verse app splash screen"
            className="max-h-[480px] w-auto object-contain drop-shadow-2xl md:-mb-56"
          />
        </AnimateOnScroll>

        {/* Center text */}
        <AnimateOnScroll anim="up" className="order-1 text-center md:order-2">
          <p className="section-kicker">Mobile App</p>

          <h2 className="section-title mt-5 text-[38px] sm:text-[52px]">
            Download Pandal
            <span className="display-gradient block">Explorer</span>
          </h2>

          {/* <div className="ornament" /> */}

          <p className="mx-auto mt-2 max-w-[420px] text-[15px] leading-7 text-black/75">
            Live crowd updates, favorites, reviews and photo uploads — free on{" "}
            <strong>Android and iOS.</strong>
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              {/* <svg viewBox="0 0 24 24" width="24" fill="currentColor" className="shrink-0">
                <path d="M3.18 23.76c.3.17.64.24.98.21l12.09-12.09L12.96 8.6 3.18 23.76zM20.5 10.56l-2.34-1.35-3.64 3.64 3.64 3.64 2.37-1.37c.67-.39.67-1.18-.03-1.56zM3 1.24 12.96 11.2 16.25 7.9 4.01 1.04A1.1 1.1 0 0 0 3 1.24zM1.5 2.4C1.19 2.77 1 3.3 1 4v16c0 .7.19 1.23.5 1.6l.09.08 8.96-8.96v-.21L1.59 2.32 1.5 2.4z" />
              </svg>
              <span>
                <span className="block text-[10px] text-white/70">GET IT ON</span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span> */}
              <img src={"/googlePlay.svg"} alt="App Store" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              {/* <svg viewBox="0 0 24 24" width="24" fill="currentColor" className="shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.36 2.78M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>
                <span className="block text-[10px] text-white/70">Download on the</span>
                <span className="block text-sm font-semibold">App Store</span>
              </span> */}
              <img src={"/appStore.svg"} alt="App Store" />
            </a>
          </div>
        </AnimateOnScroll>

        {/* Phone mockup 2 */}
        <AnimateOnScroll anim="right" className="order-3 flex justify-center">
          <img
            src="/MobileApp2.png"
            alt="Utsav Verse app home screen"
            className="max-h-[380px] w-auto object-contain drop-shadow-2xl md:max-h-[480px] md:-mt-[124px]"
          />
        </AnimateOnScroll>

      </div>
    </section>
  );
}
