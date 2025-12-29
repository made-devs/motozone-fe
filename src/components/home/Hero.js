"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText);
}

export default function Hero() {
  const container = useRef();
  const headlineRef = useRef();
  const bikeRef = useRef();

  useGSAP(
    () => {
      const split = new SplitText(headlineRef.current, { type: "lines,words" });
      gsap.set(container.current, { visibility: "visible" });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".bg-grid", { opacity: 0, duration: 2 })
        .from(
          split.words,
          {
            y: 60,
            opacity: 0,
            rotateX: -30,
            stagger: 0.02,
            duration: 1.2,
          },
          "-=1.5"
        )
        .from(
          bikeRef.current,
          {
            x: 100,
            opacity: 0,
            filter: "blur(20px)",
            duration: 1.5,
          },
          "-=1"
        )
        .from(
          ".detail-label",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .from(
          ".hero-btns",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8"
        );

      // Efek Floating pada motor (Opsi 1)
      gsap.to(bikeRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="invisible relative min-h-screen flex items-center overflow-hidden bg-carbon-black pt-32 pb-20"
    >
      {/* BACKGROUND ELEMENTS */}
      <div
        className="bg-grid absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient Glow di belakang motor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tjm-yellow/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="layout-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT: COPYWRITING */}
          <div className="lg:col-span-7">
            <div className="hero-content-anim relative inline-block mb-6">
              <span className="bg-tjm-yellow text-black px-4 py-1 font-montserrat font-bold text-[10px] tracking-[0.3em] uppercase">
                PERTAMA DI INDONESIA
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl md:text-6xl lg:text-[5rem] font-montserrat font-bold leading-[0.9] mb-8 uppercase"
            >
              SERVICE MOTOR
              <span className="text-tjm-yellow italic">100 RIBUAN,</span> <br />
              BONUS SENILAI <span className="text-tjm-yellow">2 JUTA.</span>
            </h1>

            <p className="hero-content-anim font-inter text-gray-400 text-lg md:text-xl max-w-xl mb-12 border-l-2 border-tjm-yellow/30 pl-6">
              Bengkel komunitas modern dengan{" "}
              <span className="text-white">standar presisi industri</span>.
              Harga transparan, layanan premium sekelas showroom luar negeri.
            </p>

            <div className="hero-btns flex flex-nowrap gap-2 md:gap-4">
              <button className="group relative bg-tjm-yellow text-black px-4 md:px-8 py-3 md:py-4 font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-white text-xs md:text-base">
                Lihat Paket
              </button>
              <button className="px-4 md:px-8 py-3 md:py-4 border border-white/20 font-bold uppercase tracking-widest hover:border-tjm-yellow transition-all group relative text-xs md:text-base">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-tjm-yellow opacity-0 group-hover:opacity-100" />
                Ambil Promo
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT: THE MOTOR (Opsi 1 & 2) */}
          <div
            className="lg:col-span-5 ml-[-25px] lg:ml-0 relative"
            data-speed="1.1"
          >
            <div
              ref={bikeRef}
              className="relative z-10 transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/motor1.webp"
                alt="TJM Motozone Precision Rebuild"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                priority
              />

              {/* DETAIL CALLOUTS (Opsi 2) */}
              {/* Point 1: Engine Area */}
              <div className="detail-label absolute top-[40%] left-[10%] md:left-[20%] flex items-center gap-3">
                <div className="bg-black/80 backdrop-blur-md border border-tjm-yellow/50 p-2">
                  <span className="block text-[8px] text-tjm-yellow font-mono uppercase tracking-widest leading-none mb-1">
                    System Check
                  </span>
                  <span className="text-[10px] text-white font-bold uppercase">
                    Engine Precision
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-tjm-yellow" />
              </div>

              {/* Point 2: Wheel/Suspension Area */}
              <div className="detail-label hidden md:flex absolute top-[20%] right-[-10%] items-center gap-3">
                <div className="w-8 h-[1px] bg-tjm-yellow" />
                <div className="bg-black/80 backdrop-blur-md border border-tjm-yellow/50 p-2 text-right">
                  <span className="block text-[8px] text-tjm-yellow font-mono uppercase tracking-widest leading-none mb-1">
                    Standardized
                  </span>
                  <span className="text-[10px] text-white font-bold uppercase">
                    Aero-Dynamics
                  </span>
                </div>
              </div>

              {/* Point 3: Wheel/Suspension Area Mobile */}
              <div className="detail-label flex md:hidden absolute top-[20%] right-[20%] items-center gap-3">
                <div className="bg-black/80 backdrop-blur-md border border-tjm-yellow/50 p-2 text-right">
                  <span className="block text-[8px] text-tjm-yellow font-mono uppercase tracking-widest leading-none mb-1">
                    Standardized
                  </span>
                  <span className="text-[10px] text-white font-bold uppercase">
                    Aero-Dynamics
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-tjm-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER DECORATION */}
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-center gap-4 opacity-20">
        <div className="h-[1px] flex-1 max-w-[80px] bg-white" />
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] whitespace-nowrap">
          TJM Group Ecosystem
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-white" />
      </div>
    </section>
  );
}
