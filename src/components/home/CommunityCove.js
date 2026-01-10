'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// Data Dummy repeated to fill grid
const allItems = [
  {
    id: 1,
    src: '/cave1.webp',
    category: 'PROJECTS',
    title: 'ZX-25R Rebuild',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: '/cave2.webp',
    category: 'DETAILS',
    title: 'Engine Bay',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    src: '/cave3.webp',
    category: 'ON TRACK',
    title: 'Sentul Track Day',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    src: '/cave2.webp',
    category: 'PROJECTS',
    title: 'Carbon Parts',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    src: '/cave1.webp',
    category: 'WORKSHOP',
    title: 'Dyno Test',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 6,
    src: '/cave3.webp',
    category: 'ON TRACK',
    title: 'Cornering Art',
    span: 'md:col-span-2 md:row-span-1',
  },
];

const categories = ['ALL', 'PROJECTS', 'ON TRACK', 'DETAILS', 'WORKSHOP'];

export default function GallerySection() {
  const container = useRef();
  const [activeTab, setActiveTab] = useState('ALL');
  const [displayItems, setDisplayItems] = useState(allItems);

  // Filter Logic
  const handleTabChange = (cat) => {
    setActiveTab(cat);
    if (cat === 'ALL') {
      setDisplayItems(allItems);
    } else {
      setDisplayItems(allItems.filter((item) => item.category === cat));
    }
  };

  useGSAP(
    () => {
      // 1. Marquee Animation
      gsap.to('.marquee-text', {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'linear',
      });

      // 2. Entrance Animation for Grid Items
      gsap.fromTo(
        '.gallery-item',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          overwrite: 'auto',
        }
      );
    },
    { scope: container, dependencies: [displayItems] } // Re-run when items change
  );

  return (
    <section
      ref={container}
      className="bg-[#050505] py-24 relative overflow-hidden min-h-screen"
    >
      {/* 1. NEW: Technical Grid Pattern Background */}
      {/* Memberikan kesan 'blueprint' atau teknikal tanpa terlalu ramai */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* 2. NEW: Ambient Yellow Glow (Spotlight Effect) */}
      {/* Memberikan dimensi kedalaman di tengah layar dengan warna brand */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-tjm-yellow rounded-full blur-[180px] opacity-[0.08] pointer-events-none z-0" />

      {/* 3. DECORATION: Checkerboard Strip (Left Side) */}
      <div
        className="absolute top-0 left-0 w-8 h-full z-10 hidden md:block opacity-100"
        style={{
          backgroundImage:
            'conic-gradient(#FACC15 90deg, transparent 90deg 180deg, #FACC15 180deg 270deg, transparent 270deg)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 4. BACKGROUND: Running Text */}
      <div className="absolute top-[20%] w-full opacity-[0.03] pointer-events-none select-none overflow-hidden z-0">
        <div className="marquee-text whitespace-nowrap text-[15vw] font-black italic text-white leading-none">
          SPEED • PRECISION • PASSION • ENGINEERING • SPEED • PRECISION •
          PASSION • ENGINEERING •
        </div>
      </div>

      <div className="layout-container relative z-10 pl-4 md:pl-16">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-tjm-yellow font-mono text-xs tracking-[0.3em] uppercase mb-2 block">
              Our Masterpieces
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter">
              GALLERY{' '}
              <span className="text-transparent text-stroke-1">ZONE</span>
            </h2>
          </div>

          {/* TABS (Race Car Dashboard Style) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`px-6 py-2 text-sm font-bold skew-x-[-10deg] border border-white/20 transition-all duration-300 uppercase tracking-wider
                  ${
                    activeTab === cat
                      ? 'bg-tjm-yellow text-black border-tjm-yellow shadow-[0_0_20px_rgba(250,204,21,0.4)]'
                      : 'bg-transparent text-gray-400 hover:text-white hover:border-white'
                  }`}
              >
                <span className="block skew-x-[10deg]">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID (Masonry) */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item group relative overflow-hidden bg-gray-900 border border-white/5 cursor-pointer ${
                activeTab === 'ALL' ? item.span : 'md:col-span-1 md:row-span-1'
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />

              {/* OVERLAY EFFECT */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />

              {/* BORDER ACCENT ON HOVER */}
              <div className="absolute inset-0 border-4 border-tjm-yellow opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20" />

              {/* CONTENT INFO */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-[10px] font-mono text-tjm-yellow uppercase tracking-widest mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold italic text-white uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
