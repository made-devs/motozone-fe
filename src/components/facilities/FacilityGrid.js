"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function FacilityGrid({ items }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".facility-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-24 px-6 relative">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="facility-card group relative bg-zinc-900 p-8 border border-white/5 hover:border-tjm-yellow transition-all duration-500"
            >
              {/* Technical Ornaments (Corners) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tjm-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tjm-yellow opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-6">
                <span className="text-tjm-yellow font-mono text-[10px] tracking-widest uppercase opacity-50 block mb-2">
                  FACILITY_0{idx + 1}
                </span>
                <h3 className="text-lg font-montserrat font-black uppercase leading-tight text-white group-hover:text-tjm-yellow transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-500 font-inter text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
