"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function PerksAndEvents({ perks, events }) {
  const container = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      gsap.from(q(".perk-item"), {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          invalidateOnRefresh: true,
          // kalau mau cuma sekali jalan, aktifin:
          // once: true,
        },
      });

      // bantu App Router/CLS biar trigger kebaca bener tanpa reload
      requestAnimationFrame(() => ScrollTrigger.refresh());
      setTimeout(() => ScrollTrigger.refresh(), 100);
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 px-6 bg-black">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* LEFT: Member Perks (Grid 7) */}
        <div className="lg:col-span-7">
          <h3 className="text-yellow-400 font-montserrat font-black text-4xl mb-16 uppercase italic">
            Exclusive Perks_
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="perk-item group relative bg-zinc-900 p-8 border-b-4 border-transparent hover:border-yellow-400 transition-all"
              >
                <span className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-yellow-400/10 transition-colors">
                  0{i + 1}
                </span>
                <h4 className="text-white font-montserrat font-bold text-xl mb-4 uppercase tracking-wide">
                  {perk.title}
                </h4>
                <p className="text-zinc-500 font-inter text-sm leading-relaxed">
                  {perk.detail}
                </p>
                {/* Ornamen Siku Kuning */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Schedule (Grid 5) */}
        <div className="lg:col-span-5">
          <div className="bg-yellow-400 p-1 font-black text-black text-center text-xs tracking-[0.5em] uppercase mb-1">
            Official Schedule
          </div>
          <div className="border-2 border-yellow-400 p-8">
            <h3 className="text-white font-montserrat font-black text-3xl mb-10 uppercase italic">
              Upcoming_Events
            </h3>
            <div className="space-y-8">
              {events.map((ev, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2 border-yellow-400/30 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="text-white font-bold uppercase text-lg">
                      {ev.title}
                    </h5>
                    <span className="bg-white text-black text-[10px] font-black px-2 py-0.5">
                      {ev.time}
                    </span>
                  </div>
                  <p className="text-yellow-400 font-inter font-bold text-xs uppercase tracking-widest">
                    {ev.date}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full mt-12 group relative overflow-hidden bg-white text-black font-montserrat font-black uppercase py-5 tracking-tighter text-xl">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Daftar Komunitas
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
