"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pandals", href: "/pandals" },
  // { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // const onScroll = () => setScrolled(window.scrollY > 40);
    // window.addEventListener("scroll", onScroll, { passive: true });
    // return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/15 border border-gray-200"
          : "bg-black/50 backdrop-blur-xl shadow-2xl shadow-black/30 border border-white/25"
          }`}
        style={{ maxWidth: 640, width: "100%" }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 px-2">
          <img
            src="/logo/vamxm-horizontal.png"
            alt="VAMXM"
            className={`h-auto w-28 object-contain transition-all duration-300 brightness-0 invert ${scrolled ? "opacity-0 absolute" : "opacity-100"
              }`}
          />
          <img
            src="/logo/vamxm-horizontal.png"
            alt="VAMXM"
            className={`h-auto w-28 object-contain transition-all duration-300 brightness-0 ${scrolled ? "opacity-100" : "opacity-0 absolute"
              }`}
          />
        </Link>

        {/* Divider */}
        <div className={`w-px h-4 flex-shrink-0 ${scrolled ? "bg-gray-200" : "bg-white/30"}`} />

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 flex-1 justify-center">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200 ${active
                  ? scrolled
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                  : scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/15"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className={`w-px h-4 flex-shrink-0 ${scrolled ? "bg-gray-200" : "bg-white/30"}`} />

        {/* CTA */}
        <Link
          href="/contact"
          className="flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-saffron text-white hover:bg-deep-red transition-colors duration-200"
        >
          Get Started
        </Link>
      </header>
    </div>
  );
}
