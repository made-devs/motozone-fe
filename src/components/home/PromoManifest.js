'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const promoItems = [
  { name: 'Free Detailing Body', val: 'Rp 150rb' },
  { name: 'Voucher Oli Mesin', val: 'Rp 100rb' },
  { name: 'Cek Kelistrikan', val: 'Rp 75rb' },
  { name: 'Nitrogen Selamanya', val: 'Rp 50rb' },
  { name: 'Free Cuci Motor', val: 'Rp 40rb' },
  { name: 'Voucher Ban Baru', val: 'Rp 200rb' },
  { name: 'Pembersihan Injeksi', val: 'Rp 125rb' },
  { name: 'Sticker Limited TJM', val: 'Rp 30rb' },
  { name: 'Scanner Diagnostic', val: 'Rp 100rb' },
  { name: 'Setting Suspensi', val: 'Rp 150rb' },
  { name: 'Voucher Apparel', val: 'Rp 300rb' },
  { name: 'Pembersihan CVT', val: 'Rp 100rb' },
  { name: 'Cek Rem & Cairan', val: 'Rp 50rb' },
  { name: 'Voucher Aksesoris', val: 'Rp 400rb' },
  { name: 'Free Kopi Lounge', val: 'Rp 30rb' },
];

export default function PromoManifest() {
  const container = useRef();
  const gridRef = useRef();
  const bgRef = useRef(); // Ref untuk element background

  useGSAP(
    () => {
      // 1. Reveal Title
      gsap.from('.promo-header', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });

      // 2. Parallax Effect Background
      // Gambar bergerak perlahan (yPercent) saat user scroll
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, yPercent: -5 }, // Scale up dikit biar gak bolong pas gerak
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true, // Movement follows scroll bar
          },
        }
      );

      // 3. Staggered Grid Reveal
      gsap.from('.promo-item', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.05,
          grid: 'auto',
          from: 'start',
        },
        duration: 0.8,
        ease: 'back.out(1.2)',
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-carbon-black py-24 relative overflow-hidden border-t border-white/5"
    >
      {/* --- BACKGROUND IMAGE LAYER WITH PARALLAX --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={bgRef} className="absolute inset-0 w-full h-full">
          <Image
            src="/motor2.webp"
            alt="Motozone Workshop Background"
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>
        {/* Gradient Overlay: Memastikan teks tetap terbaca di atas background */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/30 via-carbon-black/20 to-carbon-black/30" />
        {/* <div className="absolute inset-0 bg-tjm-yellow/5 mix-blend-overlay" /> */}
      </div>

      <div className="layout-container relative z-10">
        {/* Header Promo */}
        <div className="promo-header mb-16 text-center md:text-left">
          <div className="inline-block bg-tjm-yellow text-black px-4 py-1 font-montserrat font-black text-[10px] tracking-[0.3em] uppercase mb-4">
            Grand Opening Special
          </div>
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold uppercase mb-6">
            23 PROMO GRATIS <br />
            <span className="text-tjm-yellow italic">VALUE Rp 2.000.000,-</span>
          </h2>
          <p className="text-gray-400 font-inter max-w-xl">
            Ambil semua keuntungan eksklusif ini hanya selama periode Grand
            Opening TJM Motozone. Tanpa diundi, langsung klaim untuk motor
            kesayangan Anda.
          </p>
        </div>

        {/* Promo Grid (Card Styling Reinforced: Black & Yellow) */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mb-16"
        >
          {promoItems.map((item, index) => (
            <div
              key={index}
              className="promo-item group relative bg-black border-l-[3px] border-l-transparent border-r border-t border-b border-white/10 p-4 md:p-6 transition-all duration-300 hover:border-l-tjm-yellow hover:border-white/20 hover:shadow-[inset_0_0_30px_rgba(250,204,21,0.05)] hover:-translate-y-1"
            >
              {/* Decorative Number */}
              <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-mono text-tjm-yellow font-bold">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              <div className="flex flex-col justify-between h-full">
                <h3 className="font-montserrat font-bold text-xs md:text-sm uppercase mb-4 tracking-tighter leading-tight text-white group-hover:text-tjm-yellow transition-colors">
                  {item.name}
                </h3>
                <div className="relative">
                  {/* Line Separator */}
                  <div className="h-[1px] w-full bg-white/10 mb-2 group-hover:bg-tjm-yellow/50 transition-colors" />
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      Value
                    </span>
                    <span className="text-[11px] font-mono font-bold text-white group-hover:text-tjm-yellow transition-colors">
                      {item.val}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Area */}
        <div className="relative overflow-hidden border border-white/10 bg-black">
          {/* subtle grid + glow */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-tjm-yellow/10 blur-[100px]" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 relative z-10">
            <div className="text-white">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="inline-block w-2 h-2 bg-tjm-yellow animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/60">
                  Grand Opening Offer
                </span>
              </div>

              <h4 className="text-2xl md:text-3xl font-montserrat font-black uppercase leading-none">
                Tunggu Apa Lagi?
              </h4>
              <p className="font-inter text-sm text-white/70 max-w-xl mt-2">
                Klaim paket lengkap{' '}
                <span className="text-tjm-yellow font-bold bg-white/5 px-1">
                  value Rp 2 Juta
                </span>{' '}
                ini sekarang sebelum periode berakhir.
              </p>
            </div>

            <button className="group w-full md:w-auto bg-tjm-yellow text-black px-10 md:px-12 py-4 md:py-5 font-montserrat font-black uppercase tracking-widest transition-all active:scale-95 hover:bg-white hover:text-black shadow-[0_10px_30px_rgba(250,204,21,0.2)]">
              <span className="inline-flex items-center justify-center gap-3">
                Ambil Semua Promo
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
