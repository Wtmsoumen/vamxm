"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const data = useSelector((state: RootState) => state.home.data) as any;
  const settingsPayload = useSelector((state: RootState) => state.publicContent.settings.data) as any;
  const settings = settingsPayload?.data ?? data?.data?.settings ?? {};
  const socialLinks = settings.social_links ?? Object.entries(settings.social ?? {}).map(([platform, url]) => ({ platform, url, icon: platform }));
  const [count, setCount] = useState(0);


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setName("");
    setEmail("");
  }

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Pandal 360°", href: "/pandals" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const ourServices = [
    { label: "Cyber Security", href: "#" },
    { label: "AI-Driven Agency", href: "#" },
    { label: "Website Development", href: "#" },
    { label: "Mobile App Development", href: "#" },
  ];


  useEffect(() => {
    const target = Number(data?.meta?.site_visitor_count || 0);

    if (!target) {
      setCount(0);
      return;
    }

    const duration = 1500;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [data?.meta?.site_visitor_count]);

  return (
    <footer id="footer" className="bg-[#0a1014] text-white">
      <div className="px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr_0.9fr] lg:gap-x-10 lg:py-14">
          {/* Brand */}
          <div className="w-full">
            <img
              src={settings.logo || "/logo/vamxm-horizontal.png"}
              alt="Utsav Verse logo"
              width={1920}
              height={1080}
              className="mb-5 h-auto w-[min(100%,260px)]"
            />
            <p className=" text-sm leading-6 text-white">
              {settings.seo?.description}
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks?.length ? socialLinks.map((item: any, idx: number) =>
                <Link key={idx} href={item?.url} target="_blank" aria-label={item?.platform} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition text-black hover:text-white bg-white hover:bg-utsav">
                  {item?.icon === "facebook" && <FontAwesomeIcon icon={faFacebookF} />}
                  {item?.icon === "instagram" && <FontAwesomeIcon icon={faInstagram} />}
                  {item?.icon === "linkedin" && <FontAwesomeIcon icon={faLinkedinIn} />}
                  {item?.icon === "youtube" && <FontAwesomeIcon icon={faYoutube} />}
                  {item?.icon === "twitter" && <FontAwesomeIcon icon={faXTwitter} />}
                </Link>
              ) : null}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white">
              {links.map((link, idx) => <li key={idx}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}
              {/* <li><Link href="#pandals" className="transition hover:text-white">Famous Pandals</Link></li>
            <li><Link href="#guide" className="transition hover:text-white">Puja Guide</Link></li>
            <li><Link href="#gallery" className="transition hover:text-white">Gallery</Link></li> */}
            </ul>
          </div>

          {/* Explore */}
          <div className="w-full">
            <h3 className="mb-5 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm text-white">
              {ourServices.map((link, idx) => <li key={idx}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}
              {/* <li><Link href="#app" className="transition hover:text-white">Mobile App</Link></li>
            <li><Link href="#pandals" className="transition hover:text-white">Pandal 360°</Link></li>
            <li><Link href="#services" className="transition hover:text-white">Our Services</Link></li> */}
            </ul>
          </div>

          {/* Contact form */}
          <div className="w-full min-w-0">
            <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
              <p className="break-words transition hover:text-white">{settings.address || "Kolkata, West Bengal, India"}</p>
              <Link href={`mailto:${settings.email}`} className="break-all transition hover:text-white">{settings.email || "[EMAIL_ADDRESS]"}</Link>
              <Link href={`tel:${settings.phone}`} className="transition hover:text-white">{settings.phone || "+91 98765 43210"}</Link>
              {/* <button
              type="submit"
              className="red-gradient w-full rounded-md px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 mt-8"
            >
              Download Brochure
            </button> */}
            </form>
          </div>

          <div className="flex w-full justify-start sm:col-span-2 sm:justify-center lg:col-span-1">
            <div className="flex flex-col items-center gap-4">
              <Image src="/logo/utsavverse-logo.png" alt="VAMXM LOGO" width={1920} height={1080} className="w-[186px] h-[93px]" />
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span className="text-3xl md:text-5xl font-bold text-white tabular-nums">
                    {count.toLocaleString()}
                  </span>
                  <span className="ml-1 text-2xl font-bold text-white/60">+</span>
                </div>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                  Website Visitors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#484E54] px-6 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-3 py-4 text-center text-sm sm:text-base md:grid-cols-[1fr_auto_1fr]">
          <div className="text-white md:text-left">
            {settings.copyright_text || data?.data?.settings?.copyright_text}
          </div>
          <img src={"/durgaLotus.png"} alt="durgaLotus" width={1920} height={1080} className="mx-auto h-14 w-14 md:h-20 md:w-20 md:-mt-8" />
          <div className="text-center md:text-right">
            <Link href="/privacy-policy" className="text-white">Privacy Policy</Link><span aria-hidden="true" className="mx-2">|</span><Link href="/terms-and-conditions" className="text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
