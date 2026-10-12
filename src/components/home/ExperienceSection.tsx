import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export type HomePromo = {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  image?: string | null;
  button_text?: string | null;
  button_url?: string | null;
  open_in_new_tab?: boolean;
  background_color?: string | null;
};

export type HomePromos = { featured?: HomePromo | null; top?: HomePromo | null; bottom?: HomePromo | null };

function PromoButton({ promo, fallbackText, fallbackUrl }: { promo: HomePromo; fallbackText: string; fallbackUrl: string }) {
  const text = promo.button_text || fallbackText;
  const url = promo.button_url || fallbackUrl;
  const className = "mt-4 inline-flex items-center gap-2 rounded-full bg-utsav px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-utsav-dark";

  return promo.open_in_new_tab ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>{text}<span>→</span></a>
  ) : (
    <Link href={url} className={className}>{text}<span>→</span></Link>
  );
}

export default function ExperienceSection({ promos }: { promos?: HomePromos | null }) {
  const featured = promos?.featured ?? {};
  const top = promos?.top ?? {};
  const bottom = promos?.bottom ?? {};

  return (
    <section id="guide" className="px-4 py-6 sm:px-6 sm:py-10 md:px-10 md:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[1.15fr_1fr]">
        <AnimateOnScroll anim="left">
          <div className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[25px] p-7 text-white transition-all duration-500 hover:scale-103 sm:min-h-[420px] sm:justify-center" style={{ backgroundColor: featured.background_color || "#f97316" }}>
            <img src={featured.image || "/pvt360.png"} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="relative z-10 max-w-[380px]">
              <p className="text-xs font-semibold uppercase tracking-[2px]">{featured.eyebrow || "Immersive 360° Experience"}</p>
              <h2 className="section-title mt-4 text-[28px] sm:text-[38px] md:text-[44px]">{featured.title || "Pandal 360° Virtual Tours"}</h2>
              <p className="mt-4 max-w-[290px] text-sm leading-7 sm:text-base">{featured.description || "Walk through the magic, from anywhere in the world."}</p>
              <Link href={featured.button_url || "/pandals"} target={featured.open_in_new_tab ? "_blank" : undefined} rel={featured.open_in_new_tab ? "noopener noreferrer" : undefined} className="mt-6 inline-flex h-[48px] items-center gap-4 rounded-full bg-white px-6 text-sm font-semibold text-utsav transition hover:bg-red-50 sm:h-[52px]">
                {featured.button_text || "Start 360° Tour"}<span>→</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <AnimateOnScroll anim="right" delay={100}>
            <article className="relative flex min-h-[180px] items-end overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:scale-103 sm:min-h-[200px] sm:items-center" style={{ backgroundColor: top.background_color || "#ffffff" }}>
              <img src={top.image || "/nnAI.png"} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6 max-w-2/3">
                <h3 className="section-title text-[20px] sm:text-[28px]">{top.title || "Neural Networks in AI"}</h3>
                <p className="mt-2 text-base leading-6 text-black">{top.description || "We're a full-service AI automation agency."}</p>
                <PromoButton promo={top} fallbackText="Consult Us" fallbackUrl="/contact" />
              </div>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll anim="right" delay={200}>
            <article id="gallery" className="relative flex min-h-[180px] items-end overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:scale-103 sm:min-h-[200px] sm:items-center" style={{ backgroundColor: bottom.background_color || "#ffffff" }}>
              <img src={bottom.image || "/dfbwAInc.png"} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6 max-w-2/3">
                <h3 className="section-title text-[20px] sm:text-[28px]">{bottom.title || "Discover future business with AI Neuro Consulting"}</h3>
                <p className="mt-2 text-base leading-6 text-black">{bottom.description || "Where we merge cutting-edge AI technology with innovative solutions."}</p>
                <PromoButton promo={bottom} fallbackText="Consult Us" fallbackUrl="/contact" />
              </div>
            </article>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
