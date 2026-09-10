"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-3 lg:px-10">
        <Link href="/" className="block w-[145px] sm:w-[165px]">
          <img src="/pandals/vamxm-horizontal.png" alt="VAMXM" className="w-full" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-slate-700">
          {[
            { label: "Home", href: "/" },
            { label: "Pandals", href: "#pandals" },
            { label: "360° Tours", href: "#tours" },
            { label: "Post Puja", href: "#countdown" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={pathname === href ? "" : ""}
              style={pathname === href ? { borderColor: "#df151b", color: "#df151b" } : {}}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <button className="hidden h-9 w-9 rounded-full border border-black/10 text-lg sm:grid place-items-center">⌕</button> */}
          <button className="rounded-full px-5 py-2.5 text-[12px] font-bold text-white shadow-md" style={{ background: "#df151b" }}>
            Download App
          </button>
        </div>
      </div>
    </header>
  );
}
