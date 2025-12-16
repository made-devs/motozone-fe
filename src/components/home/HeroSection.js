"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText"; // Club GSAP Plugin
import Link from "next/link";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Split Text Animation untuk Headline
      const split = new SplitText(".hero-title", { type: "chars, words" });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-bg", { scale: 1.2, duration: 2, ease: "none" }) // Parallax effect handled by Smoother separately
        .from(".promo-badge", { y: -50, opacity: 0, duration: 0.8 }, "-=1.5")
        .from(
          split.chars,
          {
            y: 100,
            opacity: 0,
            stagger: 0.02,
            duration: 1,
          },
          "-=1"
        )
        .from(
          ".hero-values span",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".cta-group a",
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-canvas"
    >
      {/* BACKGROUND (Parallax) */}
      <div
        className="hero-bg absolute inset-0 w-full h-full z-0"
        data-speed="0.5"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-black/60 to-black/40 z-10"></div>
        {/* Pastikan ada gambar di public/images */}
        <img
          src="/hero.webp"
          alt="Workshop Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* CONTENT */}
      <div
        className="container mx-auto px-6 relative z-20 text-center"
        data-speed="1.1"
      >
        {/* HIGHLIGHT PROMO */}
        <div className="promo-badge inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-signal/50 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
          <span className="text-signal text-sm font-bold tracking-widest uppercase">
            Promo: Diskon 20% Tune Up Bulan Ini
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.85] mb-6">
          High
          <br />
          <span className="text-signal">Performance</span>
          <br />
          Workshop
        </h1>

        {/* VALUE PROPOSITION */}
        <div className="hero-values flex flex-wrap justify-center gap-4 md:gap-8 text-neutral-400 text-lg md:text-xl font-medium tracking-wide mb-10 uppercase">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-signal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Cepat
          </span>
          <span className="hidden md:inline text-neutral-700">/</span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-signal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Presisi
          </span>
          <span className="hidden md:inline text-neutral-700">/</span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-signal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Bergaransi
          </span>
        </div>

        {/* CTA GROUP */}
        <div className="cta-group flex flex-col md:flex-row items-center justify-center gap-4">
          {/* CTA 1: Booking (Primary) */}
          <Link
            href="/booking"
            className="w-full md:w-auto px-8 py-4 bg-signal text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Booking Service
          </Link>

          {/* CTA 2: WhatsApp (Secondary) */}
          <a
            href="https://wa.me/62812345678"
            target="_blank"
            className="w-full md:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c.969.58 2.054.912 3.193.912h.001c3.178 0 5.765-2.587 5.765-5.766.001-3.18-2.587-5.766-5.766-5.766zm-9.015 17.811l3.336-.874c1.365.744 2.922 1.157 4.542 1.157 5.378 0 9.752-4.374 9.752-9.753 0-5.378-4.375-9.752-9.752-9.752s-9.753 4.375-9.753 9.752c0 1.638.423 3.21 1.185 4.591l-.893 3.298z" />
            </svg>
            WhatsApp
          </a>

          {/* CTA 3: Lihat Paket (Tertiary) */}
          <Link
            href="/paket"
            className="w-full md:w-auto px-8 py-4 text-neutral-400 font-bold uppercase tracking-widest hover:text-signal transition-colors duration-300 underline decoration-neutral-700 underline-offset-4 hover:decoration-signal"
          >
            Lihat Paket
          </Link>
        </div>
      </div>
    </section>
  );
}
