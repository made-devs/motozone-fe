"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageHero({
  subtitle = "Catalogue",
  titleTop = "Judul",
  titleMain = "Halaman",
  description = "Deskripsi singkat halaman Anda.",
  bgImage = "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1600", // Default image
}) {
  const container = useRef();
  const bgRef = useRef();

  useGSAP(
    () => {
      // Efek zoom in pelan pada background saat load
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, filter: "brightness(0) blur(10px)" },
        {
          scale: 1,
          filter: "brightness(1) blur(0px)",
          duration: 2,
          ease: "expo.out",
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative pt-52 pb-32 bg-carbon-black overflow-hidden border-b border-white/5"
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="relative w-full h-full">
          <Image
            src={bgImage}
            alt={titleMain}
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Overlay Gradasi: Menjamin teks di kiri bawah terbaca jelas */}
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent" />
        </div>
      </div>

      {/* 2. TECHNICAL ORNAMENT (Grid Overlay) */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3. CONTENT LAYER */}
      <div className="layout-container relative z-20">
        <div className="max-w-4xl">
          {/* Label / Subtitle */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-tjm-yellow" />
            <span className="text-tjm-yellow font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">
              {subtitle}
            </span>
          </div>

          {/* Judul Utama */}
          <h1 className="text-6xl md:text-[7rem] font-montserrat font-black uppercase leading-[0.8] mb-10 tracking-tighter">
            {titleTop} <br />
            <span className="text-tjm-yellow italic">{titleMain}</span>
          </h1>

          {/* Deskripsi & Ornamen Siku */}
          <div className="relative inline-block">
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-tjm-yellow/30" />
            <p className="text-gray-400 text-lg md:text-xl font-inter max-w-2xl leading-relaxed pl-4">
              {description}
            </p>
            {/* Ornamen "L-Shape" teknis di ujung deskripsi */}
            <div className="absolute -bottom-4 -right-4 w-4 h-4 border-r-2 border-b-2 border-tjm-yellow/20" />
          </div>
        </div>
      </div>

      {/* 4. SCANLINE EFFECT (Garis bergerak tipis) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 animate-scanline z-20" />
    </section>
  );
}
