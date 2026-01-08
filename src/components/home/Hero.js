"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Marquee from "react-fast-marquee"; // Tambahkan import ini

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

      tl.from(".racing-slant", { xPercent: 100, duration: 1.5 })
        .from(
          ".silhouette-text",
          { opacity: 0, y: 100, stagger: 0.2, duration: 1.5 },
          "-=1"
        )
        .from(
          split.words,
          {
            y: 60,
            opacity: 0,
            rotateX: -30,
            stagger: 0.02,
            duration: 1.2,
          },
          "-=1"
        )
        .from(
          bikeRef.current,
          {
            x: 150,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.5,
          },
          "-=1"
        )
        .from(".hero-btns", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8");

      // Parallax effect untuk siluet teks saat mouse gerak
      const handleMouseMove = (e) => {
        const { clientX } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        gsap.to(".silhouette-text", {
          x: xPos,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="invisible relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-32 pb-20 select-none"
    >
      {/* --- BACKGROUND LAYER --- */}

      {/* Carbon Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`,
        }}
      />

      {/* Vertical Silhouette Text - TJM (Left Side / Black Side) */}
      <div className="silhouette-text absolute left-[0%] top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <h2
          className="text-[14vw] font-black leading-none text-tjm-yellow/10 uppercase italic tracking-tighter"
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        >
          TJM
        </h2>
      </div>

      {/* Racing Slant (The Yellow Block) */}
      <div className="racing-slant absolute right-0 top-0 h-full w-[45%] bg-tjm-yellow skew-x-[-12deg] translate-x-24 z-0 hidden lg:block overflow-hidden">
        {/* Vertical Silhouette Text - MOTOZONE (Inside Yellow Side) */}
        <div className="silhouette-text absolute right-[15%] top-1/2 -translate-y-1/2 skew-x-[12deg]">
          <h2
            className="text-[12vw] font-black leading-none text-black/10 uppercase italic tracking-tighter"
            style={{ writingMode: "vertical-lr" }}
          >
            MOTOZONE
          </h2>
        </div>

        {/* Speed Pattern inside Yellow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)`,
          }}
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="layout-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <div className="hero-content-anim relative inline-flex items-center gap-3 mb-6 bg-tjm-yellow text-black px-4 py-1">
              <span className="font-montserrat font-black text-[11px] tracking-[0.3em] uppercase italic">
                PERTAMA DI INDONESIA
              </span>
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-black/20 skew-x-[-20deg]" />
                <div className="w-1 h-3 bg-black/40 skew-x-[-20deg]" />
                <div className="w-1 h-3 bg-black/60 skew-x-[-20deg]" />
              </div>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl md:text-6xl lg:text-[5.2rem] font-montserrat font-black leading-[0.85] mb-8 uppercase italic text-white"
            >
              SERVICE MOTOR
              <span className="text-tjm-yellow block">100 RIBUAN,</span>
              BONUS SENILAI <span className="text-tjm-yellow">2 JUTA.</span>
            </h1>

            <p className="hero-content-anim font-inter text-gray-400 text-lg md:text-xl max-w-xl mb-12 border-l-4 border-tjm-yellow pl-6 leading-relaxed">
              Bengkel komunitas modern dengan{" "}
              <span className="text-white font-bold underline decoration-tjm-yellow/40">
                standar presisi industri
              </span>
              . Harga transparan, layanan premium sekelas showroom luar negeri.
            </p>

            <div className="hero-btns flex flex-nowrap gap-4">
              <button className="group relative bg-tjm-yellow text-black px-10 py-5 font-black uppercase italic tracking-tighter overflow-hidden transition-all hover:bg-white flex items-center gap-3">
                Lihat Paket
                <span className="text-xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
              <button className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase italic tracking-tighter hover:border-tjm-yellow hover:text-tjm-yellow transition-all group relative">
                <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-tjm-yellow" />
                Ambil Promo
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT: THE MOTOR */}
          <div className="lg:col-span-5 relative">
            {/* Glow for the bike */}
            <div className="absolute inset-0 bg-tjm-yellow/20 blur-[120px] rounded-full scale-90" />

            <div
              ref={bikeRef}
              className="relative z-10 transition-transform duration-700 hover:scale-105"
            >
              <Image
                src="/motor1.webp"
                alt="TJM Motozone Racing"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.9)]"
                priority
              />

              {/* RACING LABELS */}
              <div className="detail-label absolute top-[40%] -left-5 md:left-[30%]">
                <div className="bg-black/80 backdrop-blur-md border-l-4 border-tjm-yellow p-3 shadow-2xl skew-x-[-10deg]">
                  <p className="text-[10px] text-tjm-yellow font-mono font-bold leading-none mb-1">
                    DATA_LOG
                  </p>
                  <p className="text-[14px] text-white font-black uppercase italic">
                    Engine Precision
                  </p>
                </div>
              </div>

              <div className="detail-label absolute bottom-[15%] -right-5">
                <div className="bg-tjm-yellow border-r-4 border-black p-3 shadow-2xl skew-x-[-10deg]">
                  <p className="text-[10px] text-black/60 font-mono font-bold leading-none mb-1">
                    SUSP_KIT
                  </p>
                  <p className="text-[14px] text-black font-black uppercase italic">
                    Adjustable Suspension
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER DECORATION - RACING MARQUEE */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t-4 border-black bg-tjm-yellow">
        <Marquee
          autoFill
          speed={60}
          className="h-14 overflow-hidden flex items-center"
          gradient={false}
        >
          {/* Marquee Item Group */}
          <div className="flex items-center gap-8 pl-8 select-none">
            {/* Logo Text */}
            <span className="text-3xl font-black italic tracking-tighter text-black skew-x-[-10deg]">
              TJM MOTOZONE
            </span>

            {/* Racing Checkers Ornament */}
            <div className="flex gap-1">
              <div className="w-3 h-6 bg-black skew-x-[-20deg]" />
              <div className="w-3 h-6 bg-transparent border-2 border-black skew-x-[-20deg]" />
              <div className="w-3 h-6 bg-black skew-x-[-20deg]" />
            </div>

            {/* Industrial Tagline */}
            <span className="text-sm font-mono font-bold tracking-[0.2em] text-black">
              HIGH PRECISION // RACING DIVISION
            </span>

            {/* Separator Symbol */}
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="w-full h-[2px] bg-black rotate-45 absolute" />
              <div className="w-full h-[2px] bg-black -rotate-45 absolute" />
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
