import Link from "next/link";
import { ExternalLink } from "lucide-react";
import MobileAppSection from "@/components/home/MobileAppSection";
import ContactSection from "@/components/home/ContactSection";

const sponsors = [
  { name: "Bengal Heritage Foundation", tier: "Platinum", desc: "Cultural preservation partner." },
  { name: "Kolkata Times", tier: "Gold", desc: "Media partner for Durga Puja coverage." },
  { name: "Puja Bazar", tier: "Gold", desc: "Official retail sponsor." },
  { name: "Eastern Railways", tier: "Silver", desc: "Transportation partner." },
  { name: "Mishti Hub", tier: "Silver", desc: "Sweet sponsor of the festival." },
  { name: "Ananda Bazaar Digital", tier: "Bronze", desc: "Digital media partner." },
];

const tierColor: Record<string, string> = {
  Platinum: "text-blue-300 bg-blue-300/10 border-blue-300/30",
  Gold: "text-gold bg-gold/10 border-gold/30",
  Silver: "text-slate-400 bg-slate-400/10 border-slate-400/30",
  Bronze: "text-orange-400 bg-orange-400/10 border-orange-400/30",
};

export default function SponsorsPage() {
  return (
    <>
      <div className="min-h-screen bg-white px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-saffron text-sm font-semibold uppercase tracking-widest mb-2">Our Partners</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">Sponsors</h1>
            <p className="text-black max-w-xl mx-auto">
              These organizations make the VaMax virtual Durga Puja experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {sponsors.map((s) => (
              <div key={s.name} className="bg-black/5 border border-black/10 hover:border-saffron/30 rounded-2xl p-6 transition-all">
                <span className={`inline-block text-xs font-bold uppercase tracking-widest border rounded-full px-2 py-0.5 mb-3 ${tierColor[s.tier]}`}>
                  {s.tier}
                </span>
                <h3 className="text-black font-semibold mb-2">{s.name}</h3>
                <p className="text-black/50 text-sm mb-4">{s.desc}</p>
                <Link href="#" className="flex items-center gap-1 text-saffron text-sm hover:underline">
                  Visit website <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center bg-black/5 border border-black/10 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-black mb-3">Become a Sponsor</h2>
            <p className="text-black/50 max-w-md mx-auto mb-6">
              Reach millions of Durga Puja enthusiasts worldwide by sponsoring VaMax&apos;s virtual experience platform.
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
