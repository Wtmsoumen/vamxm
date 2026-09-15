"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Puja Guide", href: "#guide" },
  { label: "Pandal 360°", href: "/tour" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Contact Us", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-white/35 ">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 md:px-10 xl:px-[7.5%] py-2 md:py-3">

        <Link href="/" className="shrink-0">
          <img src="/logo/vamxm-horizontal-black.png" alt="UtsavVerse" className="h-auto w-[215px]" />
        </Link>

        <nav className="hidden items-center gap-7 text-[16px] font-medium lg:flex">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-[#D88418] transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="#pandals"
          className="red-gradient hidden shrink-0 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110 md:inline-flex"
        >
          Explore Pandals <span className="ml-3">→</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-black/10 px-3 py-2 text-2xl lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/40 bg-white/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {links.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
