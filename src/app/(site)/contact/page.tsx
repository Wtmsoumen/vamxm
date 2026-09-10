"use client";

import { useState } from "react";
import { MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#f5a623]/20 via-[#f5a623]/80 to-[#f5a623] relative overflow-hidden">
      {/* Teal accent bar — right edge */}
      <div className="fixed right-0 top-0 bottom-0 w-1.5 bg-teal z-50" />

      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row pt-20">

        {/* ── LEFT — form + footer ── */}
        <div className="flex-1 px-10 sm:px-16 py-16 flex flex-col">
          <div className="mb-12">
            <p className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-2">Questions?</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Let's Get In Touch
            </h1>
          </div>

          {sent ? (
            <div className="flex flex-col gap-4 py-16 text-center">
              <Send className="w-10 h-10 text-lime mx-auto" />
              <h3 className="text-2xl font-black text-gray-900">Message Sent!</h3>
              <p className="text-gray-500 text-sm">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Left column — stacked inputs */}
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="border rounded border-white px-5 py-4 text-gray-900 placeholder:text-white text-sm focus:outline-none focus:border-white transition-colors"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="border rounded border-white px-5 py-4 text-gray-900 placeholder:text-white text-sm focus:outline-none focus:border-white transition-colors"
                    placeholder="Email Address *"
                  />
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="border rounded border-white px-5 py-4 text-gray-900 placeholder:text-white text-sm focus:outline-none focus:border-white transition-colors"
                    placeholder="Subject"
                  />
                </div>

                {/* Right column — message */}
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="border rounded border-white px-5 py-4 text-gray-900 placeholder:text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="bg-lime text-white font-black text-sm uppercase tracking-widest py-4 px-8 rounded-full hover:bg-[#6aaa1e] transition-colors mt-4 w-full sm:w-auto self-stretch sm:self-auto"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-auto pt-16">
            <div className="flex items-center gap-5 mb-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Pinterest icon (lucide doesn't have it, use SVG) */}
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2022 VAMXM. All rights reserved VAMXM.com</p>
          </div>
        </div>

        {/* ── RIGHT — contact info + VR headset ── */}
        <div className="w-full lg:w-96 xl:w-[420px] px-10 sm:px-16 lg:px-12 py-16 flex flex-col relative">
          {/* Contact info */}
          <div className="mt-32 lg:mt-40 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="text-white text-sm leading-relaxed">
                10, Sitanath Banerjee Lane,<br />
                Nirmala Garden, Block C, 3rd<br />
                Floor, Flat No- 301 &amp; 302,<br />
                Howrah 711103
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Send className="w-5 h-5 text-white mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <a href="mailto:info.vamxm@gmail.com" className="text-white text-sm hover:text-white transition-colors">
                info.vamxm@gmail.com
              </a>
            </div>
          </div>

          {/* VR Headset */}
          <div className="mt-auto pt-12 flex justify-center lg:justify-start">
            <img
              src="/vr-headset2.png"
              alt="VR Headset"
              className="w-64 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
