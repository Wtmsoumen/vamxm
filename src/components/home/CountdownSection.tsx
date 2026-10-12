"use client";

import { useEffect, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import dhaki1 from "../../../public/dhaki1.png"
import dhaki2 from "../../../public/dhaki2.png"
import mayerMukh from "../../../public/mayerMukh.png"
import Image from "next/image";

// const PUJA_DATE = new Date("2026-10-16T00:00:00+05:30").getTime();

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function CountdownSection({ data }: { data?: any }) {
  const [time, setTime] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    function tick() {
      // const remaining = PUJA_DATE - Date.now();
      const remaining = new Date(data?.countdown?.target_at).getTime() - Date.now();
      if (remaining <= 0) { setTime({ days: "00", hours: "00", minutes: "00", seconds: "00" }); return; }
      setTime({
        days: pad(Math.floor(remaining / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((remaining / (1000 * 60 * 60)) % 24)),
        minutes: pad(Math.floor((remaining / (1000 * 60)) % 60)),
        seconds: pad(Math.floor((remaining / 1000) % 60)),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [data?.countdown?.target_at]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  console.log(data, "todays_ritual");

  return (
    <section id="countdown" className="relative overflow-hidden px-5 py-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1000px] text-center flex flex-col items-center">
        <AnimateOnScroll anim="up">
          <h2 className="section-kicker text-black! text-sm! lg:text-lg!">
            The Countdown Begins
          </h2>
        </AnimateOnScroll>

        <div className={`mx-auto w-full flex justify-center gap-4 sm:gap-12 md:gap-20 ${data?.show === "ritual" ? "mt-6" : "mt-12"}`}>
          {data?.show === "ritual" ?
            <div className="display-gradient sm:text-[30px] md:text-[50px] hero-h1 capitalize flex items-center gap-2">
              <Image src={dhaki1} alt="dhaki1" width={24} height={24} className="w-auto h-16 mr-4" />
              {data?.todays_ritual?.title}
              <Image src={dhaki2} alt="dhaki2" width={24} height={24} className="w-auto h-16 ml-4" />
            </div>
            :
            units.map(({ label, value }, i) => (
              <AnimateOnScroll key={label} anim="scale" delay={i * 80} className="flex flex-col items-center">
                <div className="rounded-full border border-utsav/20 bg-white shadow-sm w-14 h-14 sm:w-20 sm:h-20 flex justify-center items-center">
                  <div className="section-title display-gradient text-lg sm:text-2xl md:text-4xl pb-0!">{value}</div>
                </div>
                <p className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[2px]">{label}</p>
              </AnimateOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
}
