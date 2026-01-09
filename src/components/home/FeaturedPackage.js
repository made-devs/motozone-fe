'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Data services diadaptasi untuk featured package
const services = [
  {
    slug: 'inspeksi-motor',
    title: 'Inspeksi 30/55/110',
    subtitle: '32-110 Titik pengecekan presisi.',
    image:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800',
    size: 'md:col-span-2 md:row-span-2',
    badge: 'Best Value',
  },
  {
    slug: 'engine-service',
    title: 'Engine Service',
    subtitle: 'Tune up & optimalisasi performa.',
    image:
      'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=800',
    size: 'md:col-span-1',
    badge: 'Recommended',
  },
  {
    slug: 'suspension-chassis',
    title: 'Suspension & Chassis',
    subtitle: 'Kalibrasi kenyamanan & stabilitas.',
    image:
      'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800',
    size: 'md:col-span-1',
  },
  {
    slug: 'dyno-performance',
    title: 'Dyno Performance',
    subtitle: 'Uji tenaga & torsi real-time.',
    image:
      'https://images.unsplash.com/photo-1591438200350-1df5c312784d?q=80&w=800',
    size: 'md:col-span-1',
  },
  {
    slug: 'detailing-coating',
    title: 'Detailing & Coating',
    subtitle: 'Proteksi cat hingga 9H Hardness.',
    image:
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800',
    size: 'md:col-span-1',
  },
  {
    slug: 'helm-spa',
    title: 'Helm Spa Foam+',
    subtitle: 'Sanitasi & perawatan riding gear.',
    image:
      'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?q=80&w=800',
    size: 'md:col-span-2',
  },
];

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function FeaturedPackages() {
  const container = useRef();

  useGSAP(
    () => {
      // Card Animation
      gsap.from('.package-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Floating Ornament Animation
      gsap.to('.floating-gear', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        rotation: 360,
        ease: 'none',
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-tjm-yellow py-24 relative overflow-hidden font-sora"
    >
      {/* --- BACKGROUND LAYERS --- */}

      {/* 0. Noise Texture (Supaya warna kuning tidak terlihat flat/plastik) */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 1. Large Watermark Text (Top Right) */}
      <div className="absolute top-10 right-[-5%] z-0 pointer-events-none select-none opacity-[0.05]">
        <h1 className="text-[15vw] font-montserrat font-black italic uppercase leading-none text-black tracking-tighter">
          Services
        </h1>
      </div>

      {/* 2. Checkered Flag Pattern (Top Left) */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10 pointer-events-none z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tjm-yellow" />
      </div>

      {/* 3. NEW: Diagonal Speed Lines (Middle Filler) */}
      {/* Garis-garis diagonal besar yang membelah layout di belakang kartu */}
      <div className="absolute top-1/3 -left-[10%] w-[120%] h-[500px] pointer-events-none opacity-[0.03] z-0 -rotate-12 flex flex-col gap-12">
        <div className="w-full h-24 bg-black" />
        <div className="w-[80%] h-12 bg-black ml-[20%]" />
        <div className="w-[90%] h-6 bg-black ml-[5%]" />
      </div>

      {/* 4. NEW: Bottom Tech Specs (Bottom Filler) */}
      {/* Teks dekoratif teknikal di bagian bawah untuk mengisi ruang kosong */}
      <div className="absolute bottom-10 right-0 left-0 hidden md:flex justify-between px-12 pointer-events-none opacity-20 z-0">
        <div className="flex flex-col gap-1 text-[10px] font-mono text-black">
          <span>COORD: 06°12'S 106°49'E</span>
          <span>ZONE: TJM_MOTO_WS_01</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-32 bg-black/50" />
          <span className="text-[10px] font-montserrat font-bold text-black tracking-[0.5em] uppercase">
            High Performance Garage
          </span>
          <div className="h-[1px] w-32 bg-black/50" />
        </div>
      </div>

      {/* 5. Floating Abstract Gear (Bottom Left) */}
      <div className="floating-gear absolute -bottom-24 -left-24 w-64 h-64 opacity-[0.07] pointer-events-none z-0">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full text-black"
        >
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.04 4.95,18.95L7.44,17.95C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
        </svg>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="layout-container mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-black" />
          <span className="text-black font-bold text-xs tracking-[0.3em] uppercase font-sora">
            Service Menu
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold uppercase text-black leading-none font-sora">
          PILIHAN PAKET <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '2px black' }}
          >
            UNGGULAN
          </span>
          <span className="text-black">.</span>
        </h2>
      </div>

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {services.map((item, idx) => (
            <Link
              href={`/services/${item.slug}`}
              key={item.slug}
              className={`package-card group relative overflow-hidden bg-black ${item.size} font-sora`}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-tjm-yellow/60 tracking-widest group-hover:text-tjm-yellow transition-colors bg-white/5 px-2 py-1 rounded font-sora">
                    0{idx + 1}
                  </span>
                  {item.badge && (
                    <span className="bg-tjm-yellow text-black px-2 py-1 text-[8px] font-black uppercase shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-pulse font-sora">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white group-hover:text-tjm-yellow transition-colors italic font-sora">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-sora">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover Line Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-[6px] bg-tjm-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/layanan"
            className="group relative inline-flex items-center gap-2 bg-black text-white border border-black px-12 py-5 font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-16 font-sora"
          >
            <span className="relative z-10 group-hover:text-tjm-yellow transition-colors">
              Lihat Semua Layanan
            </span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 text-tjm-yellow text-xl">
              →
            </span>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
