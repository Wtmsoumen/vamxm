"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/home/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex justify-end overflow-hidden">
      <div className="absolute top-0 left-0 h-[-webkit-fill-available] w-full -mt-60">
        <img src="/pandals/ganga-flower.png" className="h-full w-full object-cover" alt="ganga-flower" />
      </div>
      <div className="absolute top-0 right-0 w-[80%] h-full bg-linear-to-r to-white via-white form-transparent" />
      <div className="relative grid w-full items-center gap-8 px-5 py-10 sm:px-8 md:w-5/6 md:px-10 lg:w-2/3 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
        <AnimateOnScroll anim="left">
          {/* <div className="serif text-3xl italic red">Feel Bengal</div> */}
          <h2 className="serif mt-2 text-3xl font-semibold sm:text-4xl">Let&apos;s Build Something Amazing <span className="red">Together</span></h2>
          <p className="mt-3 text-lg text-black">Have a project in mind? Let's create<br />something extraordinary.</p>
        </AnimateOnScroll>
        <AnimateOnScroll anim="right">
          <ContactForm />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
