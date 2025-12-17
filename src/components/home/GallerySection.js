'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// DATA GALERI (Bento Grid Config)
// spanClass menentukan ukuran kotak di grid (CSS Grid)
const galleryItems = [
  {
    id: 1,
    title: 'ZX-25R Carbon',
    category: 'Full Modif',
    image: '/zx25r.jpg',
    spanClass: 'col-span-1 md:col-span-2 md:row-span-2', // KOTAK BESAR (Utama)
  },
  {
    id: 2,
    title: 'XMAX 300',
    category: 'Engine Upgrade',
    image: '/xmax.jpg',
    spanClass: 'col-span-1 md:col-span-1 md:row-span-1', // Kotak Biasa
  },
  {
    id: 3,
    title: 'Vespa Sprint',
    category: 'Repaint & Detailing',
    image: '/vespa.avif',
    spanClass: 'col-span-1 md:col-span-1 md:row-span-2', // KOTAK TINGGI (Portrait)
  },
  {
    id: 4,
    title: 'CBR 1000RR',
    category: 'Dyno Tuning',
    image: '/cbr.jpg',
    spanClass: 'col-span-1 md:col-span-1 md:row-span-1', // Kotak Biasa
  },
  {
    id: 5,
    title: 'Harley Sportster',
    category: 'Custom Build',
    image: '/harley.jpg',
    spanClass: 'col-span-1 md:col-span-2 md:row-span-1', // KOTAK LEBAR (Landscape)
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animasi Masuk (Staggered Fade Up)
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%', // Mulai animasi saat section agak naik
        },
        y: 100,
        opacity: 0,
        stagger: 0.1, // Muncul berurutan
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-canvas border-b border-neutral-800"
    >
      <div className="container mx-auto px-6">
        {/* HEADLINE */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-signal rounded-none"></span>
              <span className="text-xs font-mono text-signal uppercase tracking-widest">
                Project Archive
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
              The Vault
            </h2>
          </div>

          <div className="hidden md:block">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-neutral-500 hover:text-white text-sm font-mono uppercase tracking-widest flex items-center gap-2 transition-colors"
            >
              Lihat Selengkapnya di Instagram
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item group relative bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer ${item.spanClass}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>

              {/* Overlay Gradient (Biar teks kebaca pas hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content Overlay (Hidden by default, Show on Hover) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Garis Dekorasi */}
                <div className="w-12 h-[2px] bg-signal mb-4 w-0 group-hover:w-12 transition-all duration-500 delay-100"></div>

                <span className="text-signal font-mono text-xs uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold text-white uppercase leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  {item.title}
                </h3>

                {/* Corner Accents (Hiasan Pojok) */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Link (Hanya muncul di HP) */}
        <div className="mt-8 md:hidden text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 border border-neutral-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
