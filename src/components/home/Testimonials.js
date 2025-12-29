"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const reviews = [
  {
    quote: "Motor saya balik bertenaga, grafik dyno naik signifikan.",
    author: "Aditya Pratama",
    unit: "Kawasaki ZX-25R",
    service: "Performance Tuning",
    stat: "+4.2 HP Increase",
  },
  {
    quote: "Bengkel paling bersih, teknisinya komunikatif.",
    author: "Rizky Ramadhan",
    unit: "Honda CBR250RR",
    service: "General Rebuild",
    stat: "Standardized Clean",
  },
  {
    quote: "Value-nya gila, 100 ribuan dapat bonus seabrek.",
    author: "Dimas Setiawan",
    unit: "Yamaha XMAX",
    service: "Grand Opening Promo",
    stat: "Rp 2M Value Claimed",
  },
];

export default function Testimonials() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".testi-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
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
      className="bg-carbon-black py-24 relative overflow-hidden border-b border-white/5"
    >
      {/* Background Decals */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none flex items-center justify-center font-montserrat font-black text-[30vw]">
        REVIEWS
      </div>

      <div className="layout-container relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-tjm-yellow font-montserrat font-black text-xs tracking-[0.5em] uppercase mb-4 block">
            Verified Logs
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold uppercase">
            SUARA <span className="text-tjm-yellow italic">KOMUNITAS.</span>
          </h2>
        </div>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="testi-card group relative bg-metallic-gray/10 border border-white/10 p-8 flex flex-col justify-between min-h-[320px] hover:border-tjm-yellow/50 transition-all duration-500"
            >
              {/* Top Ornaments */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-tjm-yellow text-4xl font-serif">“</span>
                <div className="bg-tjm-yellow/10 px-2 py-1 border border-tjm-yellow/20">
                  <span className="text-[9px] font-mono text-tjm-yellow tracking-widest uppercase">
                    {item.stat}
                  </span>
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-white text-xl md:text-2xl font-montserrat font-bold italic leading-tight mb-8 group-hover:text-tjm-yellow transition-colors">
                {item.quote}
              </p>

              {/* Author & Technical Details */}
              <div className="border-t border-white/5 pt-6">
                <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-wider mb-1">
                  {item.author}
                </h4>
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <span>{item.unit}</span>
                  <span className="w-1 h-1 bg-tjm-yellow rounded-full" />
                  <span>{item.service}</span>
                </div>
              </div>

              {/* Industrial Bracket (Hover Only) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tjm-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>

        {/* Technical Footer Decoration */}
        <div className="mt-12 flex items-center justify-center gap-4 opacity-20">
          <div className="h-[1px] flex-grow bg-white" />
          <span className="text-[9px] font-mono uppercase tracking-[0.5em]">
            TJM_LOG_SYSTEM_ACTIVE
          </span>
          <div className="h-[1px] flex-grow bg-white" />
        </div>
      </div>
    </section>
  );
}
