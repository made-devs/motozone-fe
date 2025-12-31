"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ServiceSOP({ steps }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".sop-step", {
        scrollTrigger: { trigger: container.current, start: "top 70%" },
        x: -50,
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
      className="py-32 px-6 bg-zinc-950 border-y border-white/5"
    >
      <div className="layout-container">
        <div className="mb-20">
          <h2 className="text-5xl font-montserrat font-black uppercase italic tracking-tighter">
            SERVICE <span className="text-tjm-yellow">SOP_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Ornamen Garis Background (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-tjm-yellow/20 -translate-y-1/2" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="sop-step relative z-10 bg-black p-8 border border-white/5 group hover:border-tjm-yellow transition-all"
            >
              <span className="text-6xl font-montserrat font-black text-white/5 absolute top-4 right-6 group-hover:text-tjm-yellow/10">
                {item.step}
              </span>
              <div className="w-12 h-1 bg-tjm-yellow mb-6" />
              <h4 className="text-xl font-montserrat font-black uppercase mb-4 text-white">
                {item.title}
              </h4>
              <p className="text-gray-500 font-inter text-sm leading-relaxed group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
