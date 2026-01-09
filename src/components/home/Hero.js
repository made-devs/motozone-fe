'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Marquee from 'react-fast-marquee';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, SplitText);
}

export default function Hero() {
  const container = useRef();
  const headlineRef = useRef();
  const bikeRef = useRef();

  // Refs untuk efek Glitch
  const glitchMainRef = useRef();
  const glitchSlicesRef = useRef([]); // Array ref untuk potongan gambar

  const [isAfter, setIsAfter] = useState(false); // State ganti gambar
  const [isGlitching, setIsGlitching] = useState(false); // State status animasi

  // Konfigurasi potongan "Slices" untuk efek patah-patah
  const slices = [
    { top: '10%', height: '10%' },
    { top: '30%', height: '15%' },
    { top: '55%', height: '8%' },
    { top: '75%', height: '12%' },
    { top: '90%', height: '5%' },
  ];

  // 1. GSAP Hero Animation (Intro Masuk - Tetap Sesuai Code Lama)
  useGSAP(
    () => {
      const split = new SplitText(headlineRef.current, { type: 'lines,words' });
      gsap.set(container.current, { visibility: 'visible' });

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.from('.racing-slant', { xPercent: 100, duration: 1.5 })
        .from(
          '.silhouette-text',
          { opacity: 0, y: 100, stagger: 0.2, duration: 1.5 },
          '-=1'
        )
        .from(
          split.words,
          { y: 60, opacity: 0, rotateX: -30, stagger: 0.02, duration: 1.2 },
          '-=1'
        )
        .from(
          bikeRef.current,
          { x: 150, opacity: 0, filter: 'blur(10px)', duration: 1.5 },
          '-=1'
        )
        .from('.hero-btns', { y: 20, opacity: 0, duration: 0.8 }, '-=0.8');

      const handleMouseMove = (e) => {
        const { clientX } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        gsap.to('.silhouette-text', {
          x: xPos,
          duration: 1.5,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    },
    { scope: container }
  );

  // 2. Logic & Animation Glitch CHAOS
  useEffect(() => {
    let glitchTimeout;

    const triggerGlitch = () => {
      setIsGlitching(true);

      // A. Animasi Gambar Utama (Guncangan & Perubahan Warna Ekstrem)
      const tl = gsap.timeline();
      tl.to(glitchMainRef.current, {
        keyframes: [
          { x: -5, filter: 'contrast(1.5) hue-rotate(90deg)', duration: 0.05 },
          {
            x: 5,
            filter: 'contrast(2) hue-rotate(-90deg) invert(0.1)',
            duration: 0.05,
          },
          {
            x: -5,
            y: 2,
            filter: 'contrast(1.5) hue-rotate(45deg)',
            duration: 0.05,
          },
          { x: 0, y: 0, filter: 'none', duration: 0.05 },
        ],
        repeat: 1,
      });

      // B. Animasi Potongan "Slices" (Bergerak Acak)
      glitchSlicesRef.current.forEach((el, i) => {
        if (!el) return;
        const randomX = Math.random() * 40 - 20; // Geser kiri/kanan acak
        const randomOp = Math.random() * 0.5 + 0.5; // Opacity acak

        gsap.fromTo(
          el,
          { x: 0, opacity: 0, display: 'block' },
          {
            x: randomX,
            opacity: randomOp,
            duration: 0.1,
            yoyo: true, // Bolak balik
            repeat: 3,
            ease: 'steps(2)', // Gerakan patah-patah
            onComplete: () => gsap.set(el, { opacity: 0 }), // Sembunyikan setelah selesai
          }
        );
      });

      // C. Animasi Lower Third Text (Distorsi Skew)
      gsap.fromTo(
        '.lower-third-anim',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      // D. SWAP GAMBAR (Di tengah-tengah kekacauan animasi)
      glitchTimeout = setTimeout(() => {
        setIsAfter((prev) => !prev);
        setIsGlitching(false);
      }, 250); // Ganti gambar setelah 250ms
    };

    // Jalankan setiap 4 detik
    const interval = setInterval(triggerGlitch, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(glitchTimeout);
    };
  }, []);

  return (
    <section
      ref={container}
      className="invisible relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-32 pb-20 select-none font-sora"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`,
        }}
      />

      {/* Vertical Silhouette Text - TJM (Left Side / Black Side) */}
      <div className="silhouette-text absolute left-[0%] top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <h2
          className="text-[14vw] font-black leading-none text-tjm-yellow/10 uppercase italic tracking-tighter font-sora"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          TJM
        </h2>
      </div>

      {/* Racing Slant (The Yellow Block) */}
      <div className="racing-slant absolute right-0 top-0 h-full w-[45%] bg-tjm-yellow skew-x-[-12deg] translate-x-24 z-0 hidden lg:block overflow-hidden">
        {/* Vertical Silhouette Text - MOTOZONE (Inside Yellow Side) */}
        <div className="silhouette-text absolute right-[15%] top-1/2 -translate-y-1/2 skew-x-[12deg]">
          <h2
            className="text-[12vw] font-black leading-none text-black/10 uppercase italic tracking-tighter font-sora"
            style={{ writingMode: 'vertical-lr' }}
          >
            MOTOZONE
          </h2>
        </div>
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
          {/* LEFT CONTENT (TEXT) */}
          <div className="lg:col-span-7">
            <div className="hero-content-anim relative inline-flex items-center gap-3 mb-6 bg-tjm-yellow text-black px-4 py-1 font-sora">
              <span className="font-black text-[11px] tracking-[0.3em] uppercase italic font-sora">
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
              className="text-4xl md:text-6xl lg:text-[4.2rem] font-black leading-[0.85] mb-8 uppercase italic text-white font-sora"
            >
              Servis Motor di Bawah{' '}
              <span className="text-tjm-yellow font-sora">100 Ribu</span>
              <br />
              Dapat Promo Hingga{' '}
              <span className="text-tjm-yellow font-sora">2 Juta Rupiah</span>!
            </h1>

            <p className="hero-content-anim text-gray-400 text-lg md:text-xl max-w-xl mb-12 border-l-4 border-tjm-yellow pl-6 leading-relaxed font-sora">
              Nikmati layanan servis motor profesional dengan biaya terjangkau,
              mulai di bawah{' '}
              <span className="text-tjm-yellow font-bold font-sora">
                100 ribu
              </span>{' '}
              rupiah. Dapatkan juga berbagai promo eksklusif dengan total nilai
              hingga{' '}
              <span className="text-tjm-yellow font-bold font-sora">
                2 juta rupiah!
              </span>
            </p>

            <div className="hero-btns flex flex-nowrap gap-4 font-sora">
              <button className="group relative bg-tjm-yellow text-black px-6 py-3 md:px-10 md:py-5 font-black uppercase italic tracking-tighter overflow-hidden transition-all hover:bg-white flex items-center gap-3 text-sm md:text-lg font-sora">
                Lihat Paket{' '}
                <span className="text-lg md:text-xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
              <button className="px-6 py-3 md:px-10 md:py-5 border-2 border-white/20 text-white font-black uppercase italic tracking-tighter hover:border-tjm-yellow hover:text-tjm-yellow transition-all group relative text-sm md:text-lg font-sora">
                <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-tjm-yellow" />
                Ambil Promo
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT: GLITCH MOTOR IMAGE */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glow Effect di belakang motor */}
            <div className="absolute inset-0 bg-tjm-yellow/20 blur-[120px] rounded-full scale-90" />

            <div
              ref={bikeRef}
              className="relative z-10 transition-transform duration-700 ml-[-75vw] md:ml-0 w-[90vw] md:w-full"
            >
              <div className="relative w-full h-[340px] md:h-[520px] flex items-center justify-center">
                {/* 1. GAMBAR UTAMA DENGAN SHADOW DIMENSI */}
                <Image
                  ref={glitchMainRef}
                  src={isAfter ? '/motor1.webp' : '/motor3.webp'}
                  alt="Motor Service TJM"
                  fill
                  className="object-contain w-full h-full select-none pointer-events-none drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0px 20px 20px rgba(0,0,0,0.6))', // Menambah dimensi ekstra
                  }}
                  priority
                />

                {/* 2. OVERLAY SLICES (Potongan Gambar untuk Efek Glitch) */}
                {slices.map((slice, i) => (
                  <div
                    key={i}
                    ref={(el) => (glitchSlicesRef.current[i] = el)}
                    className="absolute w-full left-0 overflow-hidden opacity-0 pointer-events-none z-20"
                    style={{ top: slice.top, height: slice.height }}
                  >
                    <div
                      className="relative w-full h-[420px]"
                      style={{ top: `-${slice.top}` }}
                    >
                      <Image
                        src={isAfter ? '/motor1.webp' : '/motor3.webp'}
                        alt="Glitch Slice"
                        fill
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 mix-blend-color-dodge ${
                        i % 2 === 0 ? 'bg-red-500/50' : 'bg-cyan-500/50'
                      }`}
                    />
                  </div>
                ))}

                {/* Lower Third */}
                <div className="absolute bottom-4 left-0 w-full z-30 px-2 lg:px-0 md:ml-0">
                  <div className="lower-third-anim relative group">
                    {/* Background Panel (Gradient Dark) */}
                    <div className="absolute inset-0 bg-black/80 -skew-x-12 border-l-4 border-tjm-yellow backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />

                    <div className="relative z-10 p-4 flex items-center justify-between">
                      {/* Left Side: Status */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              isAfter
                                ? 'bg-green-500 shadow-[0_0_10px_#22c55e]'
                                : 'bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]'
                            }`}
                          />
                          <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                            System Status:{' '}
                            {isAfter ? 'OPTIMIZED' : 'DIRTY_DETECTED'}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black italic uppercase text-white font-sora leading-none -ml-1">
                          {isAfter ? 'AFTER' : 'BEFORE'}
                          <span
                            className={`text-base align-top ml-1 font-normal font-mono ${
                              isAfter ? 'text-tjm-yellow' : 'text-red-500'
                            }`}
                          >
                            //V.0{isAfter ? '2' : '1'}
                          </span>
                        </h3>
                      </div>

                      {/* Right Side: Decorative Bar code / Lines */}
                      <div className="hidden md:flex flex-col items-end gap-1 opacity-50">
                        <div
                          className={`h-1 w-12 ${
                            isAfter ? 'bg-tjm-yellow' : 'bg-red-500'
                          }`}
                        />
                        <div className="h-1 w-8 bg-gray-500" />
                        <div className="h-1 w-12 bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER MARQUEE TETAP SAMA */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t-4 border-black bg-tjm-yellow font-sora">
        <Marquee
          autoFill
          speed={60}
          className="h-14 overflow-hidden flex items-center"
          gradient={false}
        >
          <div className="flex items-center gap-8 pl-8 select-none">
            <span className="text-3xl font-black italic tracking-tighter text-black skew-x-[-10deg] font-sora">
              MOTOZONE
            </span>
            {/* ... ornaments ... */}
            <div className="flex gap-1">
              <div className="w-3 h-6 bg-black skew-x-[-20deg]" />
              <div className="w-3 h-6 bg-transparent border-2 border-black skew-x-[-20deg]" />
              <div className="w-3 h-6 bg-black skew-x-[-20deg]" />
            </div>
            <span className="text-sm font-mono font-bold tracking-[0.2em] text-black font-sora">
              HIGH PRECISION // RACING DIVISION
            </span>
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
