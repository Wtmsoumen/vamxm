"use client";

import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import Link from "next/link";
import MobileAppSection from "@/components/home/MobileAppSection";
import { contactServices, submitContact } from "@/lib/contact";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service_id: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await submitContact({ ...form, service_id: form.service_id || null, name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), subject: "", message: form.message.trim() });
      setForm({ name: "", email: "", phone: "", service_id: "", subject: "", message: "" });
      // setSent(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Teal accent bar — right edge */}
      {/* <div className="fixed right-0 top-0 bottom-0 w-1.5 bg-teal z-50" /> */}

      {/* Dot grid background */}
      {/* <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} /> */}
      {/* <div className="absolute top-0 left-0 h-[-webkit-fill-available] w-full -mt-60">
        <img src="/pandals/ganga-flower.png" className="h-full w-full object-cover" alt="ganga-flower" />
      </div> */}
      <div className="max-w-[1320px] mx-auto pt-20 bg-white/90">
        <div className="mt-12">
          <p className="text-black text-xs font-bold uppercase tracking-[0.3em] mb-2">Questions?</p>
          <h1 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Let's Get In Touch
          </h1>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-8">
          {/* ── LEFT — form + footer ── */}
          <div className="py-10 flex flex-col w-full">

            {/* {sent ? (
              <div className="flex flex-col gap-4 py-16 text-center">
                <Send className="w-10 h-10 text-lime mx-auto" />
                <h3 className="text-2xl font-black text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you soon.</p>
              </div>
            ) : ( */}
            <form onSubmit={handleSubmit} className="flex flex-col items-end gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                {/* Left column — stacked inputs */}
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="border rounded border-black/80 px-5 py-4 text-gray-900 placeholder:text-black/40 text-sm focus:outline-none focus:border-black/80 transition-colors"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="border rounded border-black/80 px-5 py-4 text-gray-900 placeholder:text-black/40 text-sm focus:outline-none focus:border-black/80 transition-colors"
                    placeholder="Email Address *"
                  />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="border rounded border-black/80 px-5 py-4 text-gray-900 placeholder:text-black/40 text-sm focus:outline-none focus:border-black/80 transition-colors"
                    placeholder="Phone Number *"
                  />
                  <select
                    value={form.service_id}
                    onChange={e => setForm(f => ({ ...f, service_id: e.target.value }))}
                    className="border rounded border-black/80 px-5 py-4 text-gray-900 text-sm focus:outline-none focus:border-black/80 transition-colors bg-white"
                  >
                    <option value="">Select a service (optional)</option>
                    {contactServices.map(service => <option key={service.id} value={service.id}>{service.label}</option>)}
                  </select>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="border rounded border-black/80 px-5 py-4 text-gray-900 placeholder:text-black/40 text-sm focus:outline-none focus:border-black/80 transition-colors"
                    placeholder="Subject (optional)"
                  />
                </div>

                {/* Right column — message */}
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="border rounded border-black/80 px-5 py-4 text-gray-900 placeholder:text-black/40 text-sm focus:outline-none focus:border-black/80 transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>

              {error && <p role="alert" className="w-full text-sm text-red-600">{error}</p>}
              {sent ? <p className="text-green-500 text-sm">Thank you for contacting us. We will get back to you soon.</p> : null}

              <button
                type="submit"
                disabled={submitting}
                className="w-1/2! red-gradient rounded-full px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
            {/* )} */}
          </div>

          {/* ── RIGHT — contact info + VR headset ── */}
          <div className="w-1/2 py-10 flex flex-col relative">
            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                <MapPin className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-black text-base leading-relaxed">
                  10, Sitanath Banerjee Lane,
                  Nirmala Garden, Block C, 3rd
                  Floor, Flat No- 301 &amp; 302,
                  Howrah 711103
                </p>
              </div>
              <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
                <Send className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <Link href="mailto:info.vamxm@gmail.com" className="text-black text-base hover:text-blue-500 transition-colors">
                  info.vamxm@gmail.com
                </Link>
              </div>
            </div>

            {/* VR Headset */}
            {/* <div className="mt-auto pt-12 flex justify-center lg:justify-start">
            <img
              src="/vr-headset2.png"
              alt="VR Headset"
              className="w-64 object-contain drop-shadow-xl"
            />
          </div> */}
          </div>
        </div>
      </div>
      <MobileAppSection />

    </div>
  );
}
