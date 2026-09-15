export default function HeroSection() {
  return (
    <section
      className="relative pt-24 md:min-h-[900px] md:pt-[220px]"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,.04), transparent), url('/maaAschen.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 xl:px-[8.75%]">
        <div className="max-w-[750px]">

          <h1 className="section-title text-[36px] sm:text-[56px] md:text-[90px] hero-h1">
            Experience
            <span className="display-gradient block">Durga Puja</span>
          </h1>

          <div className="ornament ml-0" />

          <p className="section-title mt-2 text-[24px] sm:text-[38px] md:text-[67px] hero-desc">
            Like Never Before
          </p>

          <p className="mt-4 max-w-[580px] text-sm leading-7 md:text-[19px] hero-desc">
            Explore Kolkata&apos;s iconic pandals with immersive 360° tours,
            real-time updates and a complete puja guide — all in one place.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 hero-btns">
            <a
              href="#pandals"
              className="red-gradient inline-flex h-[54px] items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Explore Pandals <span className="ml-4">→</span>
            </a>
            <a
              href="#guide"
              className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full border border-utsav bg-white px-6 text-sm font-semibold text-black transition hover:bg-red-50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-utsav text-white text-xs">▶</span>
              Watch Video
            </a>
          </div>
        </div>
      </div>

      {/* Service strip */}
      <div className="relative mt-10 px-4 md:absolute md:bottom-0 md:left-0 md:mt-0 md:-mb-18 md:w-full md:px-6 z-20 hero-strip">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 overflow-hidden rounded-[19px] shadow-lg sm:grid-cols-3">

          <div className="flex items-center gap-4 bg-gradient-to-b from-[#d80117] to-[#a80202] px-6 py-6 text-white md:px-10">
            <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">
              <img src={"/website.svg"} alt="website" width={192} height={108} className="w-[34px] h-auto" />
            </div>
            <p className="text-lg font-medium leading-6">Website<br />Development</p>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-b from-[#fa9d00] to-[#cd8205] px-6 py-6 text-white md:px-10">
            <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">
              <img src={"/mobileApp.svg"} alt="mobileApp" width={192} height={108} className="w-[28px] h-auto" />
            </div>
            <p className="text-lg font-medium leading-6">Mobile App<br />Development</p>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-b from-[#38c045] to-[#02a230] px-6 py-6 text-white md:px-10">
            <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">
              <img src={"/cyber.svg"} alt="cyber" width={192} height={108} className="w-[38px] h-[38px]" />
            </div>
            <p className="text-lg font-medium leading-6">Cyber<br />Security</p>
          </div>

        </div>
      </div>
    </section>
  );
}
