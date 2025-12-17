'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// DUMMY DATA BLOG
const articles = [
  {
    id: 1,
    date: '12 DEC 2025',
    category: 'TECH TIPS',
    title: 'Mitos vs Fakta: Remap ECU Bikin Mesin Jebol?',
    excerpt:
      'Banyak anggapan salah kaprah soal remap ECU. Simak penjelasan teknis kenapa justru bikin efisien jika settingannya pas.',
    image: '/remap.png',
    slug: '/blog/remap-ecu-myth',
  },
  {
    id: 2,
    date: '05 DEC 2025',
    category: 'EVENT',
    title: 'TJM Track Day: Sentul International Circuit',
    excerpt:
      'Dokumentasi keseruan komunitas TJM menjajal aspal Sentul. Full throttle, cornering, dan adu mekanik di lintasan.',
    image: '/sentul.jpg',
    slug: '/blog/tjm-track-day',
  },
  {
    id: 3,
    date: '28 NOV 2025',
    category: 'MAINTENANCE',
    title: 'Waspada Oli Palsu: Ciri Fisik & Dampaknya',
    excerpt:
      'Peredaran oli palsu makin canggih. Ini cara membedakan botol asli vs palsu agar piston motor lo gak nangis.',
    image: '/oli.webp',
    slug: '/blog/oli-palsu',
  },
];

export default function BlogSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Stagger Animation untuk Kartu Blog
      gsap.from('.blog-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-metal border-b border-neutral-800 relative"
    >
      <div className="container mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-signal rounded-none animate-pulse"></span>
              <span className="text-xs font-mono text-signal uppercase tracking-widest">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
              Garage Intel
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              View All Articles
            </span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </Link>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              className="blog-card group flex flex-col h-full bg-canvas border border-neutral-800 hover:border-signal transition-colors duration-300"
            >
              {/* Image Wrapper */}
              <Link
                href={item.slug}
                className="block relative overflow-hidden aspect-[16/9] border-b border-neutral-800"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Badge Category */}
                <div className="absolute top-4 left-4 bg-signal text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {item.category}
                </div>
              </Link>

              {/* Content Wrapper */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-4">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                  <span>By Admin</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white uppercase leading-tight mb-4 group-hover:text-signal transition-colors line-clamp-2">
                  <Link href={item.slug}>{item.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Footer / Link */}
                <div className="mt-auto pt-6 border-t border-neutral-800 flex justify-between items-center">
                  <Link
                    href={item.slug}
                    className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Read Report
                    <svg
                      className="w-4 h-4 text-signal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Button View All */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest border border-neutral-700 hover:bg-neutral-700 hover:border-signal"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
