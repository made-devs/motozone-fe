"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText);
}

export default function FinalCTA() {
  const container = useRef();
  const titleRef = useRef();

  useGSAP(
    () => {
      const split = new SplitText(titleRef.current, { type: "chars,words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "expo.out",
      })
        .from(
          ".cta-content",
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".cta-button",
          {
            opacity: 0,
            scale: 0.9,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative py-32 overflow-hidden bg-carbon-black border-t border-white/5"
    >
      {/* BACKGROUND ELEMENTS */}
      {/* Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-tjm-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Industrial Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="layout-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="cta-content inline-block mb-8">
            <span className="text-tjm-yellow font-montserrat font-black text-xs tracking-[0.6em] uppercase border-y border-tjm-yellow/30 py-2 px-4">
              Ready for the next level?
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold uppercase leading-none mb-10"
          >
            SAATNYA MOTOR ANDA <br />
            <span className="text-tjm-yellow italic text-outline">
              MENJADI PRESISI.
            </span>
          </h2>

          <p className="cta-content text-gray-400 font-inter text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Jangan biarkan performa motor Anda menurun. Klaim{" "}
            <span className="text-white font-bold">
              Promo Grand Opening senilai Rp 2 Juta
            </span>{" "}
            sekarang dan rasakan standar servis kelas dunia.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* 1. Booking Sekarang (Primary) */}
            <button className="cta-button group relative bg-tjm-yellow text-black px-10 py-5 font-montserrat font-black uppercase tracking-widest transition-all hover:bg-white overflow-hidden w-full md:w-auto">
              <span className="relative z-10">Booking Sekarang</span>
              {/* Notched Corner Effect */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-carbon-black rotate-45 translate-x-2 -translate-y-2" />
            </button>

            {/* 2. Lihat Paket (Ghost) */}
            <Link
              href="/layanan"
              className="cta-button px-10 py-5 border border-white/20 text-white font-montserrat font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto"
            >
              Lihat Paket Lengkap
            </Link>

            {/* 3. Chat Admin (WhatsApp Styled) */}
            <Link
              href="https://wa.me/yournumber"
              className="cta-button flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-montserrat font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all w-full md:w-auto group"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] group-hover:bg-white"></span>
              </span>
              Chat Admin
            </Link>
          </div>

          {/* Decorative Technical Line */}
          <div className="cta-content mt-24 flex items-center justify-center gap-6 opacity-20">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-white" />
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase whitespace-nowrap">
              Authorized TJM Group Ecosystem
            </span>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
