"use client";

import { useEffect, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const PUJA_DATE = new Date("2026-10-17T00:00:00+05:30").getTime();

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function CountdownSection() {
  const [time, setTime] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    function tick() {
      const remaining = PUJA_DATE - Date.now();
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
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section id="countdown" className="relative overflow-hidden px-5 py-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1000px] text-center flex flex-col items-center">

        <AnimateOnScroll anim="up">
          {/* <p className="section-kicker">The Celebration Awaits</p> */}
          <h2 className="section-kicker text-black!">
            The Countdown Begins
          </h2>
          {/* <div className="ornament"></div> */}
        </AnimateOnScroll>

        <div className="mx-auto mt-12 w-full flex justify-center gap-20">
          {units.map(({ label, value }, i) => (
            <AnimateOnScroll key={label} anim="scale" delay={i * 80} className="flex flex-col items-center">
              <div className="rounded-full border border-utsav/20 bg-white shadow-sm w-20 h-20 flex justify-center items-center">
                <div className="section-title display-gradient text-2xl md:text-4xl pb-0!">{value}</div>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[2px]">{label}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
