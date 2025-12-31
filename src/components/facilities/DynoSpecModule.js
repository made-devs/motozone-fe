"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function DynoSpecModule({ specs }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".spec-line", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        scaleX: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        transformOrigin: "left",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Background Graphic: Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="layout-container relative z-10 border-2 border-tjm-yellow/20 p-1 md:p-12">
        <div className="bg-zinc-950 p-8 md:p-16 border border-tjm-yellow/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-tjm-yellow font-black italic text-xs tracking-[0.4em] uppercase block mb-4">
                Analysis Lab Standards
              </span>
              <h2 className="text-5xl md:text-7xl font-montserrat font-black uppercase italic tracking-tighter leading-none">
                DYNO ROOM <br />{" "}
                <span className="text-tjm-yellow">SPECIFICATIONS_</span>
              </h2>
            </div>
            {/* Ornamen "EMERGENCY STOP" Visual */}
            <div className="flex items-center gap-4 bg-red-600/10 border border-red-600/50 px-6 py-3">
              <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
              <span className="text-red-600 font-montserrat font-black text-xs uppercase italic">
                Emergency Stop Ready
              </span>
            </div>
          </div>

          <div className="space-y-12">
            {specs.map((spec, i) => (
              <div key={i} className="group">
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <h4 className="text-tjm-yellow font-montserrat font-black text-xl uppercase italic">
                    {spec.label}
                  </h4>
                  <p className="text-white font-inter font-bold uppercase tracking-widest text-sm">
                    {spec.value}
                  </p>
                </div>
                {/* Visual Blueprint Line */}
                <div className="spec-line h-[1px] bg-tjm-yellow/30 w-full relative">
                  <div className="absolute top-0 left-0 h-full bg-tjm-yellow w-24" />
                </div>
              </div>
            ))}
          </div>

          {/* Technical Note Footer */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 opacity-40">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
              CCTV_MONITORING_ACTIVE
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
              D_ROOM_ID: TJM_01_LAB
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
              CALIBRATED: 2024_Q4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
