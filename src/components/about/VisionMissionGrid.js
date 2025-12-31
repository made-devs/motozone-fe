"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionGrid({ values }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-32 bg-black relative overflow-hidden px-6"
    >
      {/* Ornamen Background: Garis Diagonal Tipis */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)`,
        }}
      />

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="value-card group relative bg-zinc-900/50 p-12 border border-white/5 hover:border-tjm-yellow transition-colors duration-500"
            >
              {/* Ornamen Nomor Stencil Besar */}
              <div className="absolute top-4 right-8 text-8xl font-montserrat font-black text-white/[0.03] group-hover:text-tjm-yellow/10 transition-colors italic">
                0{idx + 1}
              </div>

              {/* Ornamen Siku Kuning (Caution Tape Style) */}
              <div className="absolute top-0 left-0 w-2 h-16 bg-tjm-yellow scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <div className="absolute top-0 left-0 w-16 h-2 bg-tjm-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="relative z-10">
                <h3 className="text-3xl font-montserrat font-black uppercase italic mb-6 tracking-tighter text-white">
                  {item.title}
                  <span className="text-tjm-yellow">.</span>
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Ornamen Garis Bawah Dekoratif */}
              <div className="mt-8 flex gap-1">
                <div className="w-8 h-1 bg-tjm-yellow/20 group-hover:bg-tjm-yellow transition-colors" />
                <div className="w-2 h-1 bg-tjm-yellow/20 group-hover:bg-tjm-yellow transition-colors" />
                <div className="w-2 h-1 bg-tjm-yellow/20 group-hover:bg-tjm-yellow transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
