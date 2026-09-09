import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/pandals" },
  { label: "Durga Puja", href: "/pandals" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="/logo/vamxm-horizontal.png" alt="VAMXM" width={1920} height={1080} className="h-40 w-auto mb-4 brightness-0 invert opacity-80" />
          <p className="text-white text-sm leading-relaxed">
            Crafting immersive virtual reality experiences.<br />Bringing Durga Puja to the world.
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4">Navigate</p>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="text-white hover:text-saffron text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4">Contact</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
              <p className="text-white text-sm leading-relaxed">
                10, Sitanath Banerjee Lane, Nirmala Garden,<br />
                Block C, 3rd Floor, Flat No. 301 & 302,<br />
                Howrah 711103
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-saffron flex-shrink-0" />
              <a href="mailto:info.vamxm@gmail.com" className="text-white hover:text-saffron text-sm transition-colors">
                info.vamxm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-4 flex items-center justify-between">
        <p className="text-gray-600 text-xs">© 2025 VAMXM. All rights reserved</p>
        <p className="text-gray-700 text-xs">VAMXM.com</p>
      </div>
    </footer>
  );
}
