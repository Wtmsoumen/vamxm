import Link from "next/link";
import Image from "next/image";
import MobileAppSection from "@/components/home/MobileAppSection";
import ContactSection from "@/components/home/ContactSection";
import CHAANGHANI from "../../../../public/logoSponsor/CHAANGHANI.png"
import CORPORATENEST from "../../../../public/logoSponsor/CORPORATE NEST.png"
import DURABLE from "../../../../public/logoSponsor/DURABLE.png"
import GHAR from "../../../../public/logoSponsor/GHAR.png"
import MRSKITCHEN from "../../../../public/logoSponsor/MRS KITCHEN.png"
import OEMLINKER from "../../../../public/logoSponsor/oem linker.png"
import REVOLUCION from "../../../../public/logoSponsor/REVOLUCION.png"
import SLICKCLICK from "../../../../public/logoSponsor/SLICK & CLICK.png"
import Sthaal from "../../../../public/logoSponsor/Sthaal.png"
import WTM from "../../../../public/logoSponsor/WTM.png"

const sponsors = [
  { name: "Durable", logo: DURABLE },
  { name: "OEM Linker", logo: OEMLINKER },
  { name: "Webtechnomind", logo: WTM },
  { name: "Corporate Nest", logo: CORPORATENEST },
  { name: "Mrs Kitchen", logo: MRSKITCHEN },
  { name: "Ghar", logo: GHAR },
  { name: "Sthaal", logo: Sthaal },
  { name: "Chaanghani", logo: CHAANGHANI },
  { name: "Slick & Click", logo: SLICKCLICK },
  { name: "Revolucion", logo: REVOLUCION },
];

export default function SponsorsPage() {
  return (
    <>
      <div className="min-h-screen bg-white px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-saffron text-sm font-semibold uppercase tracking-widest mb-2">Our Partners</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">Our Sponsors</h1>
            <p className="text-black/65 max-w-2xl mx-auto leading-relaxed">
              Meet the organizations and businesses partnering with VAMXM. Their support helps us create meaningful technology and immersive cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="group flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-saffron/40 hover:shadow-lg">
                <div className="relative h-20 w-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 18vw"
                    className="object-contain"
                  />
                </div>
                <h2 className="mt-4 text-center text-sm font-semibold text-black/80 group-hover:text-saffron transition-colors">{sponsor.name}</h2>
              </div>
            ))}
          </div>

          <div className="text-center bg-black/5 border border-black/10 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-black mb-3">Become a Sponsor</h2>
            <p className="text-black/50 max-w-md mx-auto mb-6">
              Partner with VAMXM to support technology, training and immersive cultural experiences reaching audiences around the world.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <MobileAppSection />
      <ContactSection />
    </>
  );
}
