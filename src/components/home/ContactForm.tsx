"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactServices, submitContact } from "@/lib/contact";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service_id: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await submitContact({ ...form, name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), subject: form.subject.trim(), message: form.message.trim() });
      setSent(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {/* <p className="text-black text-xs font-black uppercase tracking-[0.3em] mb-2">Send a Message</p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
        <input
          type="tel"
          required
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Phone Number *"
        />
        <select
          required
          value={form.service_id}
          onChange={e => setForm(f => ({ ...f, service_id: e.target.value }))}
          className="border border-gray-200 px-4 py-3.5 text-gray-900 text-sm focus:outline-none focus:border-saffron transition-colors bg-white"
        >
          <option value="">Select a service *</option>
          {contactServices.map(service => <option key={service.id} value={service.id}>{service.label}</option>)}
        </select>
      </div>

      <input
        type="text"
        required
        value={form.subject}
        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
        className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors"
        placeholder="Subject *"
      />

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <textarea
        required
        rows={2}
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className="border border-gray-200 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-saffron transition-colors resize-none"
        placeholder="Your Message"
      />

      <button
        type="submit"
        disabled={submitting}
        className="flex items-center justify-center gap-2 bg-saffron text-white font-black text-xs uppercase tracking-widest py-4 hover:bg-gray-900 transition-colors"
      >
        <Send className="w-4 h-4" />
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
