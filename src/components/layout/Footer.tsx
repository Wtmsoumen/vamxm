"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setName("");
    setEmail("");
  }

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Puja Guide", href: "#guide" },
    { label: "Pandal 360°", href: "/tour" },
    { label: "Services", href: "#services" },
    { label: "Events", href: "#events" },
    { label: "Contact Us", href: "#footer" },
  ];

  const ourServices = [
    { label: "Website Development", href: "#" },
    { label: "Mobile Application Development", href: "#" },
    { label: "Cyber Security", href: "#" },
    { label: "Digital Marketing", href: "#" },
    { label: "Branding & Design", href: "#" },
    { label: "IT Consulting", href: "#" },
  ];

  return (
    <footer id="footer" className="bg-[#0a1014] text-white">
      <div className="mx-auto max-w-[1600px] gap-5 px-6 py-14 md:px-10 flex items-start justify-between">

        {/* Brand */}
        <div className="w-[30%]">
          <img
            src="/logo/vamxm-horizontal.png"
            alt="Utsav Verse logo"
            width={1920}
            height={1080}
            className="mb-5 w-[260px]"
          />
          <p className=" text-sm leading-6 text-white">
            Building digital experiences for a brighter tomorrow.
            Proudly based in Kolkata, for a connected world.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition text-black hover:text-white bg-white hover:bg-utsav">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition text-black hover:text-white bg-white hover:bg-utsav">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#" aria-label="Linkedin In" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition text-black hover:text-white bg-white hover:bg-utsav">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition text-black hover:text-white bg-white hover:bg-utsav">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition text-black hover:text-white bg-white hover:bg-utsav">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </div>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        {/* Quick Links */}
        <div className="w-[10%]">
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white">
            {links.map((link) => <li><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}
            {/* <li><Link href="#pandals" className="transition hover:text-white">Famous Pandals</Link></li>
            <li><Link href="#guide" className="transition hover:text-white">Puja Guide</Link></li>
            <li><Link href="#gallery" className="transition hover:text-white">Gallery</Link></li> */}
          </ul>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        {/* Explore */}
        <div className="w-[20%]">
          <h3 className="mb-5 text-lg font-semibold">Our Services</h3>
          <ul className="space-y-3 text-sm text-white">
            {ourServices.map((link) => <li><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>)}
            {/* <li><Link href="#app" className="transition hover:text-white">Mobile App</Link></li>
            <li><Link href="#pandals" className="transition hover:text-white">Pandal 360°</Link></li>
            <li><Link href="#services" className="transition hover:text-white">Our Services</Link></li> */}
          </ul>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        {/* Contact form */}
        <div className="w-[23%] h-[-webkit-fill-available]">
          <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
            <Link href={"#"} className="transition hover:text-white">Kolkata, West Bengal, India</Link>
            <Link href={"#"} className="transition hover:text-white">hello@vamxm.com</Link>
            <Link href={"#"} className="transition hover:text-white">+91 98765 43210</Link>
            <button
              type="submit"
              className="red-gradient w-full rounded-md px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 mt-8"
            >
              Download Brochure
            </button>
          </form>
        </div>

        <div className="border-l border-[#484E54] h-[-webkit-fill-available]" />

        <div className="w-[22%] h-[-webkit-fill-available] flex items-center justify-center">
          <img src="/logo/utsavverse-logo.png" alt="VAMXM LOGO" width={1920} height={1080} className="w-[186px] h-[93px]" />
        </div>
      </div>

      <div className="border-t border-[#484E54]">
        <div className="relative flex items-center justify-between mx-auto max-w-[1600px] gap-10 px-6 py-5">
          <div className="text-center text-white">
            © 2026 VAMXM. All rights reserved.
          </div>
          <img src={"/durgaLotus.png"} alt="durgaLotus" width={1920} height={1080} className="w-[80px] h-[80px] absolute -top-6 left-[50%] right-[50%]" />
          <div className="text-center">
            <Link href="#" className="text-white">Privacy Policy</Link>  |  <Link href="#" className="text-white">Terms of Service</Link> | <Link href="#" className="text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
