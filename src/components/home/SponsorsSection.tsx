import { ExternalLink } from "lucide-react";
import Link from "next/link";

const sponsors = [
  { name: "Bengal Heritage", color: "#FF6B00" },
  { name: "Kolkata Times", color: "#F39C12" },
  { name: "Puja Bazar", color: "#E74C3C" },
  { name: "Eastern Railways", color: "#FF6B00" },
  { name: "Mishti Hub", color: "#F39C12" },
  { name: "Ananda Bazaar", color: "#E74C3C" },
];

export default function SponsorsSection() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-saffron text-sm font-semibold uppercase tracking-widest mb-2">
            Our Supporters
          </p>
          <h2 className="text-3xl font-bold text-white">
            Proud Sponsors
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex flex-col items-center justify-center gap-2 hover:border-saffron/40 transition-all group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ background: `${sponsor.color}30`, color: sponsor.color }}
              >
                {sponsor.name[0]}
              </div>
              <span className="text-white/60 text-xs text-center group-hover:text-white transition-colors">
                {sponsor.name}
              </span>
              <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-saffron transition-colors" />
            </Link>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          Interested in sponsoring?{" "}
          <Link href="/contact" className="text-saffron hover:underline">
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
