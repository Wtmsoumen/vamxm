"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pandals", href: "/pandals" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo/vamxm-horizontal.png"
            alt="VAMXM"
            className={`h-24 w-auto object-contain transition-all duration-300 ${scrolled ? "brightness-0" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-xs font-black uppercase tracking-[0.15em] transition-colors ${scrolled
                  ? active
                    ? "text-saffron"
                    : "text-gray-600 hover:text-gray-900"
                  : active
                    ? "text-saffron"
                    : "text-white hover:text-white"
                  }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-saffron" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center text-xs font-black uppercase tracking-widest px-5 py-2.5 transition-all ${scrolled
            ? "bg-saffron text-white hover:bg-deep-red"
            : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-gray-900"
            }`}
        >
          Get Started
        </Link>

        {/* Mobile — compact links (no hamburger) */}
        <nav className="flex md:hidden items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[10px] font-black uppercase tracking-wider transition-colors ${scrolled
                ? pathname === item.href ? "text-saffron" : "text-gray-500 hover:text-gray-900"
                : pathname === item.href ? "text-saffron" : "text-white/70 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
