import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="bg-white">
      <div className="mx-auto grid max-w-[1450px] gap-10 px-6 py-11 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10 relative">
        <hr className="w-full border-2 border-[#df151b] absolute top-0" />
        <div>
          <img src="/pandals/vamxm-horizontal.png" className="w-[160px]" alt="VAMXM" />
          <p className="mt-3 max-w-sm text-[12px] leading-5 text-black">
            Building immersive experiences for a smarter, connected tomorrow. Proud to power UtsavVerse and many more.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-black">●　◎　◉　in　𝕏</div>
        </div>
        <div>
          <h4 className="text-xs font-bold">Quick Links</h4>
          <div className="mt-4 space-y-2 text-[12px] text-black">
            <Link className="block" href="#">Home</Link>
            <Link className="block" href="#pandals">Pandals</Link>
            <Link className="block" href="#tours">360° Tours</Link>
            <Link className="block" href="#countdown">Post Puja</Link>
            <Link className="block" href="#about">About</Link>
            <Link className="block" href="#services">Services</Link>
            <Link className="block" href="#contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold">Our Services</h4>
          <div className="mt-4 space-y-2 text-[12px] text-black">
            <p>Website Development</p>
            <p>Mobile App Development</p>
            <p>Cyber Security</p>
            <p>Digital Marketing</p>
            <p>Metaverse Solutions</p>
            <p>Consulting</p>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold">Contact Us</h4>
          <div className="mt-4 space-y-2 text-[12px] text-black">
            <p>⌖ Kolkata, West Bengal, India</p>
            <p>✉ info@vamxm.com</p>
            <p>☎ +91 98765 43210</p>
          </div>
          <button className="mt-5 w-full rounded-lg py-3 text-[12px] font-bold text-white" style={{ background: "#df151b" }}>
            ▣ &nbsp; Download App &nbsp; &nbsp; ▶
          </button>
        </div>
      </div>
      <div className="border-t px-6 py-5 text-[9px] text-slate-400">
        <div className="mx-auto flex max-w-[1450px] justify-between">
          <span>© 2026 VAMXM. All rights reserved.</span>
          <span>Tradition &nbsp;|&nbsp; Technology &nbsp;|&nbsp; Together</span>
        </div>
      </div>
    </footer>
  );
}
