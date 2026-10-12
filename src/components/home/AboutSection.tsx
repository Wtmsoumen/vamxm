import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export type AboutContent = {
  heading?: string | null;
  highlight?: string | null;
  content?: string | null;
  paragraphs?: string[] | null;
  image?: string | null;
  background_image?: string | null;
  button_text?: string | null;
  button_url?: string | null;
  open_in_new_tab?: boolean;
};

export default function AboutSection({ content, forAboutPage = false }: { content?: AboutContent | null; forAboutPage?: boolean }) {
  const paragraphs = content?.paragraphs?.filter((paragraph) => typeof paragraph === "string" && paragraph.trim())
    ?? content?.content?.split(/\n\s*\n/).filter((paragraph) => paragraph.trim())
    ?? [];
  const heading = content?.heading?.trim() || "Welcome to";
  const highlight = content?.highlight?.trim() || "Vamxm";
  const image = content?.image || "";
  const backgroundImage = content?.background_image || "/wellcomeVamxmbg.png";
  const buttonText = content?.button_text || "About More";
  const buttonUrl = content?.button_url || "/about";

  return (
    <section id="about" className={`relative overflow-hidden ${forAboutPage ? " pt-14 sm:pt-20 md:pt-28" : " py-14 sm:py-20 md:py-28"}`}>
      <img src={backgroundImage} alt="" aria-hidden="true" className="absolute -bottom-30 left-0 hidden h-full w-3/4 pointer-events-none opacity-60 md:flex" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16 md:px-10">

        <AnimateOnScroll anim="left">
          <div className="relative mx-auto w-full max-w-[480px] md:max-w-[520px]">
            {image ? <img
              src={image}
              alt="Durga Puja celebration"
              className="relative z-10 w-full rounded-2xl object-cover hover:scale-105 transition-all duration-300"
            /> : null}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll anim="right">
          <h2 className="section-title text-[40px] sm:text-[52px] md:text-[72px] lg:text-[80px]">
            {heading}
            <span className="display-gradient block">{highlight}</span>
          </h2>

          {(paragraphs.length ? paragraphs : [
            "VAMXM Technologies is a Kolkata-based technology company building cybersecurity skills and protection, AI capability, and digital solutions for individuals and businesses. Our work spans training and services, digital tools, marketing and web applications, through to the immersive VR experiences where we started.",
            "We believe technology creates value when people know how to use it well. We bring training, services and products together under one roof, and act as a long-term partner to our clients.",
          ]).map((paragraph, index) => (
            <p key={index} className={`${index === 0 ? "mt-6" : "mt-4"} text-[15px] leading-7 text-black/80`}>
              {paragraph}
            </p>
          ))}

          {forAboutPage ? null : <Link
            href={buttonUrl}
            target={content?.open_in_new_tab ? "_blank" : undefined}
            rel={content?.open_in_new_tab ? "noopener noreferrer" : undefined}
            className="mt-8 inline-flex h-[48px] items-center gap-4 rounded-full bg-utsav px-7 text-sm font-semibold text-white transition hover:bg-utsav-dark"
          >
            {buttonText} <span>→</span>
          </Link>}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
