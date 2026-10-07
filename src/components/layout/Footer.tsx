"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublicHome } from "@/lib/publicApi";
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let active = true;
    getPublicHome().then((home) => { if (active) setData(home); });
    return () => { active = false; };
  }, []);

  console.log(data, "data__data");

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
    { label: "Events", href: "/#events" },
    { label: "Contact Us", href: "/contact" },
  ];

  const ourServices = [
    { label: "Cyber Security", href: "#" },
    { label: "AI-Driven Agency", href: "#" },
    { label: "Website Development", href: "#" },
    { label: "Mobile App Development", href: "#" },
  ];

  return (
    <footer id="footer" className="bg-[#0a1014] text-white">
      <div className="mx-auto max-w-[1600px] gap-5 px-6 py-14 md:px-10 flex sm:flex-row flex-col flex-wrap lg:flex-nowrap items-start justify-between">

        {/* Brand */}
        <div className="sm:w-[30%] w-full">
          <img
            src="/logo/vamxm-horizontal.png"
            alt="Utsav Verse logo"
            width={1920}
            height={1080}
            className="mb-5 w-[260px]"
          />
          <p className=" text-sm leading-6 text-white">
            {data?.data?.settings?.seo?.description}
          </p>

          <div className="mt-6 flex gap-3">
            {data?.data?.social_links?.length ? data?.data?.social_links.map((item: any, idx: number) =>
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

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        {/* Quick Links */}
        <div className="sm:w-[10%] w-full">
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white">
            {links.map((link, idx) => <li key={idx}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}
            {/* <li><Link href="#pandals" className="transition hover:text-white">Famous Pandals</Link></li>
            <li><Link href="#guide" className="transition hover:text-white">Puja Guide</Link></li>
            <li><Link href="#gallery" className="transition hover:text-white">Gallery</Link></li> */}
          </ul>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        {/* Explore */}
        <div className="sm:w-[20%] w-full">
          <h3 className="mb-5 text-lg font-semibold">Our Services</h3>
          <ul className="space-y-3 text-sm text-white">
            {ourServices.map((link, idx) => <li key={idx}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}
            {/* <li><Link href="#app" className="transition hover:text-white">Mobile App</Link></li>
            <li><Link href="#pandals" className="transition hover:text-white">Pandal 360°</Link></li>
            <li><Link href="#services" className="transition hover:text-white">Our Services</Link></li> */}
          </ul>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        {/* Contact form */}
        <div className="sm:w-[23%] w-full h-[-webkit-fill-available]">
          <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
            <p className="transition hover:text-white">{data?.data?.settings?.address || "Kolkata, West Bengal, India"}</p>
            <Link href={`mailto:${data?.data?.settings?.email}`} className="transition hover:text-white">{data?.data?.settings?.email || "[EMAIL_ADDRESS]"}</Link>
            <Link href={`tel:${data?.data?.settings?.phone}`} className="transition hover:text-white">{data?.data?.settings?.phone || "+91 98765 43210"}</Link>
            {/* <button
              type="submit"
              className="red-gradient w-full rounded-md px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 mt-8"
            >
              Download Brochure
            </button> */}
          </form>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        <div className="sm:w-[22%] w-full h-[-webkit-fill-available] flex items-center justify-center">
          <img src="/logo/utsavverse-logo.png" alt="VAMXM LOGO" width={1920} height={1080} className="w-[186px] h-[93px]" />
        </div>
      </div>

      <div className="border-t border-[#484E54]">
        <div className="relative flex items-center justify-between mx-auto max-w-[1600px] gap-10 px-6 py-5">
          <div className="text-center text-white">
            {data?.data?.settings?.copyright_text}
          </div>
          <img src={"/durgaLotus.png"} alt="durgaLotus" width={1920} height={1080} className="w-[80px] h-[80px] absolute -top-6 left-[50%] right-[50%]" />
          <div className="text-center">
            <Link href="/privacy-policy" className="text-white">Privacy Policy</Link>  |  <Link href="/terms-and-conditions" className="text-white">Terms of Service</Link> | <Link href="#" className="text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
