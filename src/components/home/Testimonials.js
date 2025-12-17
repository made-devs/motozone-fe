'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// DATA 1: TEXT TESTIMONIALS
const textReviews = [
  {
    name: 'Dimas Anggara',
    motor: 'Kawasaki ZX-25R',
    text: 'Gila sih, tarikan motor gue jadi beda banget abis remap ECU di sini. Presisi banget settingannya, mekaniknya juga enak diajak diskusi teknis.',
    image: '/dimas.png', // Ganti dengan foto user
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    motor: 'Yamaha XMAX 250',
    text: 'Persiapan touring ke Bali aman sentosa. Pengerjaan rapi, kabel-kabel dirapikan ulang standar pabrik. Recommended buat yang cari bengkel detail.',
    image: '/budi.webp',
    rating: 5,
  },
  {
    name: "Reza 'Arap' Oktovian",
    motor: 'Vespa Sprint S',
    text: 'Upgrade CVT di TJM emang nggak ada lawan. Anti gredek, akselerasi instan. Pelayanan bintang lima, harga masuk akal.',
    image: '/reza.webp',
    rating: 5,
  },
];

// DATA 2: VIDEO TESTIMONIALS
const videoReviews = [
  {
    id: 1,
    name: 'Aldi Taher',
    motor: 'Honda CBR250RR',
    desc: 'Dyno Run Result: +4 HP Increase!',
    thumbnail: '/aldi.jpg', // Ganti thumbnail video
    duration: '0:45',
  },
  {
    id: 2,
    name: 'Siska Kohl',
    motor: 'Ducati Panigale',
    desc: 'Service Besar & Detailing',
    thumbnail: '/sisca.jpg',
    duration: '1:20',
  },
  {
    id: 3,
    name: 'Deddy Corbuzier',
    motor: 'Harley Davidson',
    desc: 'Custom Kaki-kaki & Suspensi',
    thumbnail: '/deddy.jpg',
    duration: '2:10',
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Text Cards Stagger
      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      // 2. Video Cards Reveal
      gsap.from('.video-card', {
        scrollTrigger: {
          trigger: '.videos-grid',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-metal relative border-b border-neutral-800"
    >
      <div className="container mx-auto px-6">
        {/* --- PART 1: TEXT REVIEWS --- */}
        <div className="mb-24">
          {/* Header Text */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-signal rounded-none animate-pulse"></span>
                <span className="text-xs font-mono text-signal uppercase tracking-widest">
                  Client Verdicts
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
                Kata Mereka
              </h2>
            </div>
            <p className="text-neutral-400 max-w-md text-right md:text-left hidden md:block">
              Kepuasan pengendara adalah bahan bakar kami. Ini bukti nyata dari
              garasi TJM Motozone.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {textReviews.map((review, i) => (
              <div
                key={i}
                className="review-card bg-canvas border border-neutral-800 p-8 relative group hover:border-signal transition-colors duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-neutral-800 group-hover:text-signal/20 transition-colors">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 text-signal">
                  {[...Array(review.rating)].map((_, r) => (
                    <svg
                      key={r}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-neutral-400 mb-8 leading-relaxed relative z-10">
                  "{review.text}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-neutral-800 overflow-hidden border border-neutral-700">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                      {review.name}
                    </h4>
                    <span className="text-xs text-signal font-mono uppercase">
                      {review.motor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: VIDEO TESTIMONIALS --- */}
        <div className="videos-grid">
          <div className="flex items-center gap-2 mb-8 border-t border-neutral-800 pt-12">
            <span className="text-signal text-xl">●</span>
            <h3 className="text-2xl font-black text-white uppercase">
              Live Reactions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoReviews.map((video) => (
              <div key={video.id} className="video-card group cursor-pointer">
                {/* Thumbnail Container */}
                <div className="relative aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.motor}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-signal/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* UI Overlay (Kayak CCTV/Rec) */}
                  <div className="absolute top-2 left-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-mono text-white uppercase bg-black/50 px-1">
                      REC
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div>
                  <h4 className="text-white font-bold uppercase text-lg group-hover:text-signal transition-colors">
                    {video.name}
                  </h4>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-neutral-400 font-mono">
                      {video.motor}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs mt-2 border-l-2 border-neutral-800 pl-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
