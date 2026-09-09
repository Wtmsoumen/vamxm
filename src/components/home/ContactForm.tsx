"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 bg-saffron flex items-center justify-center mb-5">
          <Send className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-black text-sm">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-black text-xs font-black uppercase tracking-[0.3em] mb-2">Send a Message</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Your Name"
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Email Address *"
        />
      </div>

      <input
        type="text"
        value={form.subject}
        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
        className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors"
        placeholder="Subject"
      />

      <textarea
        required
        rows={5}
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors resize-none"
        placeholder="Your Message"
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-saffron text-white font-black text-xs uppercase tracking-widest py-4 hover:bg-gray-900 transition-colors"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}
