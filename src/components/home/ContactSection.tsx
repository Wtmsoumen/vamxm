"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-[-webkit-fill-available] w-full -mt-60">
        <img src="/pandals/ganga-flower.png" className="h-full w-full object-cover" alt="ganga-flower" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent" />
      <div className="relative mx-auto grid max-w-[1450px] items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <div>
          <div className="serif text-3xl italic red">Feel Bengal</div>
          <h2 className="serif mt-2 text-4xl font-semibold">Let&apos;s Build Something Amazing <span className="red">Together</span></h2>
          <p className="mt-3 text-xs text-slate-600">Have a project in mind? Get in touch with us today.</p>
        </div>
        {sent ? (
          <div className="py-12 text-center">
            <p className="serif text-2xl font-semibold">Message Sent!</p>
            <p className="mt-2 text-xs text-black">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="grid gap-3 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input className="rounded-lg border bg-white px-4 py-3 text-xs" placeholder="Your Name" required />
            <input type="email" className="rounded-lg border bg-white px-4 py-3 text-xs" placeholder="Your Email" required />
            <input className="rounded-lg border bg-white px-4 py-3 text-xs" placeholder="+91 98765 43210" />
            <select className="rounded-lg border bg-white px-4 py-3 text-xs">
              <option>Select Service</option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>Cyber Security</option>
            </select>
            <textarea className="sm:col-span-2 rounded-lg border bg-white px-4 py-3 text-xs" rows={3} placeholder="Your Message" />
            <button type="submit" className="sm:col-span-2 rounded-lg py-3 text-xs font-bold text-white shadow-lg" style={{ background: "#df151b" }}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
