import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const tiles = [
  { src: "/pandals/pandal1.jpg", alt: "Durga Puja pandal", span: 1 },
  { src: "/pandals/pandal2.jpg", alt: "Puja artwork", span: 1 },
  { src: "/pandals/pandal3.jpg", alt: "Durga Puja celebration", span: 1 },
  { src: "/pandals/pandal4.jpg", alt: "Durga Puja pandal", span: 1 },
  { src: "/pandals/pandal1.jpg", alt: "Puja decorations", span: 1 },
  { src: "/pandals/pandal2.jpg", alt: "Durga Puja pandal", span: 2 },
  { src: "/pandals/pandal3.jpg", alt: "Durga Puja celebration", span: 1 },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="px-5 py-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1320px]">

        <AnimateOnScroll anim="up">
          <div className="text-center">
            <p className="section-kicker">Our Collections</p>
            <h2 className="section-title mt-4 text-[44px] sm:text-[60px] md:text-[80px]">
              Explore Our <span className="text-utsav">Gallery</span>
            </h2>
            {/* <div className="ornament"></div> */}
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {tiles.map(({ src, alt, span }, i) => (
            <AnimateOnScroll
              key={i}
              anim="scale"
              delay={i * 60}
              className={span === 2 ? "col-span-2" : ""}
            >
              <div className="gallery-tile h-[190px] md:h-[300px]">
                <img src={src} alt={alt} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
