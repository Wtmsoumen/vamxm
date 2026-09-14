"use client";

import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setName("");
    setEmail("");
  }

  return (
    <footer id="footer" className="bg-[#0a1014] text-white">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 md:grid-cols-4 md:px-10">

        {/* Brand */}
        <div>
          <img
            src="/logo/vamxm-white.png"
            alt="Utsav Verse logo"
            className="mb-5 w-[180px]"
          />
          <p className="max-w-[280px] text-sm leading-6 text-white/65">
            Celebrate Durga Puja with immersive experiences, pandal guides
            and cultural discoveries.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition hover:bg-utsav">f</a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition hover:bg-utsav">◎</a>
            <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition hover:bg-utsav">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/65">
            <li><a href="#about"   className="transition hover:text-white">About Us</a></li>
            <li><a href="#pandals" className="transition hover:text-white">Famous Pandals</a></li>
            <li><a href="#guide"   className="transition hover:text-white">Puja Guide</a></li>
            <li><a href="#gallery" className="transition hover:text-white">Gallery</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-5 text-sm font-semibold">Explore</h3>
          <ul className="space-y-3 text-sm text-white/65">
            <li><a href="#events"   className="transition hover:text-white">Cultural Events</a></li>
            <li><a href="#app"      className="transition hover:text-white">Mobile App</a></li>
            <li><a href="#pandals"  className="transition hover:text-white">Pandal 360°</a></li>
            <li><a href="#services" className="transition hover:text-white">Our Services</a></li>
          </ul>
        </div>

        {/* Contact form */}
        <div>
          <h3 className="mb-5 text-sm font-semibold">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-utsav"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-utsav"
            />
            <button
              type="submit"
              className="red-gradient w-full rounded-md px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Send Message →
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
        © 2026 Utsav Verse. All rights reserved.
      </div>
    </footer>
  );
}
