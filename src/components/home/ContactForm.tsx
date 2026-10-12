"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { submitContact } from "@/lib/contact";
import { validateContactForm, type ContactFormErrors } from "@/lib/contactValidation";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service_id: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      toast.error("Please check the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      await submitContact({ ...form, service_id: form.service_id || null, name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), subject: form.subject.trim(), message: form.message.trim() });
      setForm({ name: "", email: "", phone: "", service_id: "", subject: "", message: "" });
      setErrors({});
      toast.success("Thanks for reaching out. We’ll get back to you soon.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end flex-col gap-2">
      {/* <p className="text-black text-xs font-black uppercase tracking-[0.3em] mb-2">Send a Message</p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
        <input
          type="text"
          required
          minLength={2}
          maxLength={100}
          value={form.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "home-name-error" : undefined}
          onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(v => ({ ...v, name: undefined })); }}
          className="border border-gray-400 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-600 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Your Name"
        />
        {errors.name && <p id="home-name-error" className="text-xs text-red-600 sm:col-span-2">{errors.name}</p>}
        <input
          type="email"
          required
          maxLength={254}
          value={form.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "home-email-error" : undefined}
          onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(v => ({ ...v, email: undefined })); }}
          className="border border-gray-400 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-600 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Email Address *"
        />
        {errors.email && <p id="home-email-error" className="text-xs text-red-600 sm:col-span-2">{errors.email}</p>}
        <input
          type="tel"
          required
          inputMode="tel"
          maxLength={30}
          value={form.phone}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "home-phone-error" : undefined}
          onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(v => ({ ...v, phone: undefined })); }}
          className="border border-gray-400 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-600 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Phone Number *"
        />
        {errors.phone && <p id="home-phone-error" className="text-xs text-red-600 sm:col-span-2">{errors.phone}</p>}
        {/* <select
          value={form.service_id}
          onChange={e => setForm(f => ({ ...f, service_id: e.target.value }))}
          className="border border-gray-400 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:outline-none focus:border-saffron transition-colors bg-white"
        >
          <option value="">Select a service (optional)</option>
          {contactServices.map(service => <option key={service.id} value={service.id}>{service.label}</option>)}
        </select> */}
        <input
          type="text"
          maxLength={150}
          value={form.subject}
          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
          className="w-full border border-gray-400 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-600 text-sm focus:outline-none focus:border-saffron transition-colors"
          placeholder="Subject (optional)"
        />
      </div>


      <textarea
        required
        minLength={10}
        maxLength={5000}
        rows={2}
        value={form.message}
        aria-invalid={!!errors.message}
        aria-describedby={errors.message ? "home-message-error" : undefined}
        onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(v => ({ ...v, message: undefined })); }}
        className="w-full border border-gray-400 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-600 text-sm focus:outline-none focus:border-saffron transition-colors resize-none"
        placeholder="Your Message"
      />

      {errors.message && <p id="home-message-error" className="w-full text-xs text-red-600">{errors.message}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-fit red-gradient shrink-0 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110 inline-flex gap-2 items-center"
      >
        <Send className="w-4 h-4" /> {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
