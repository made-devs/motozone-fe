'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable, ScrollTrigger);
}

// ... (DATA PROMO SAMA, TIDAK BERUBAH) ...
const promos = [
  {
    id: '01',
    title: 'YEAR END RIOT',
    desc: 'Diskon Jasa 20%',
    valid: 'Valid: 31 Dec',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80', // Motor sport
    color: 'bg-signal',
  },
  {
    id: '02',
    title: 'MATiC MASTER',
    desc: 'Paket CVT + Oli',
    valid: 'Valid: 25 Dec',
    image:
      'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=600&q=80', // Motor matic
    color: 'bg-white',
  },
  {
    id: '03',
    title: 'FULL SYSTEM',
    desc: 'Bore Up Kit Deal',
    valid: 'Valid: Limited',
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // Motor custom
    color: 'bg-signal',
  },
  {
    id: '04',
    title: 'OIL PARTY',
    desc: 'Beli 3 Gratis 1',
    valid: 'Valid: Stock Habis',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80', // Motor klasik
    color: 'bg-white',
  },
  {
    id: '05',
    title: 'BRAKE CLINIC',
    desc: 'Free Check Rem',
    valid: 'Valid: Forever',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // Motor adventure
    color: 'bg-signal',
  },
];

export default function PromoCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // DRAGGABLE DENGAN FIXED BOUNDS
      Draggable.create(trackRef.current, {
        type: 'x',
        inertia: true,
        edgeResistance: 0.65,
        dragResistance: 0.4,
        cursor: 'grab',
        activeCursor: 'grabbing',

        // --- BAGIAN INI YANG DIPERBAIKI ---
        onPress: function () {
          const trackWidth = this.target.scrollWidth;
          const containerWidth = containerRef.current.offsetWidth;

          // Ambil padding kiri dari elemen pembungkus (parent)
          // Ini kunci agar GSAP tahu start posisinya menjorok ke dalam
          const wrapper = this.target.parentElement;
          const style = window.getComputedStyle(wrapper);
          const paddingLeft = parseFloat(style.paddingLeft) || 0;

          // Rumus Baru: Lebar Konten - Lebar Layar + Padding Kiri + Buffer Kanan
          const totalScrollableWidth =
            trackWidth - containerWidth + paddingLeft + 48;

          if (totalScrollableWidth > 0) {
            this.applyBounds({
              minX: -totalScrollableWidth,
              maxX: 0,
            });
          } else {
            this.applyBounds({ minX: 0, maxX: 0 });
          }
        },
        // ----------------------------------
      });

      // ENTRANCE ANIMATION
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: 300,
        opacity: 0,
        rotationY: 45,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-metal overflow-hidden border-b border-neutral-800 relative"
    >
      {/* ... (BACKGROUND DECORATION SAMA) ... */}
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="animate-spin-slow"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
      </div>

      {/* HEADER */}
      <div className="container mx-auto px-6 mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
        {/* ... (HEADER TEXT SAMA) ... */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-signal rounded-none animate-pulse"></span>
            <span className="text-xs font-mono text-signal uppercase tracking-widest">
              Offers Database
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
            Promo Bulan Ini
          </h2>
        </div>

        {/* Navigation Hint */}
        <div className="hidden md:flex items-center gap-2 text-neutral-500 text-sm font-mono uppercase">
          <svg
            className="w-4 h-4 animate-bounce-x"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Drag to Explore
          <svg
            className="w-4 h-4 animate-bounce-x-reverse"
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
        </div>
      </div>

      {/* CAROUSEL TRACK */}
      {/* NOTE: Class CSS di bawah ini yang bikin posisi "agak ke kanan". 
         Ini bertujuan agar kartu pertama sejajar lurus (align) dengan teks "PROMO BULAN INI" di atasnya.
         Jangan dihapus kalau mau tetap rapi, tapi bound logic di atas sudah menghandle efek sampingnya.
      */}
      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2))] overflow-visible">
        <div ref={trackRef} className="inline-flex gap-6 md:gap-8 pb-10 pr-6">
          {promos.map((promo, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[4/5] bg-neutral-900 border border-neutral-800 hover:border-signal transition-colors duration-300 select-none"
            >
              {/* ... (CARD CONTENT SAMA PERSIS) ... */}
              <div className="absolute inset-2 overflow-hidden bg-neutral-800">
                <img
                  src={promo.image}
                  alt={promo.title}
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                <div className="flex justify-between items-end border-b border-white/20 pb-2 mb-2">
                  <span className="text-3xl font-black text-white italic uppercase">
                    {promo.id}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-1 text-black uppercase tracking-widest ${promo.color}`}
                  >
                    {promo.valid}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase leading-none mb-1">
                  {promo.title}
                </h3>
                <p className="text-sm text-neutral-400">{promo.desc}</p>
              </div>

              <a
                href={`https://wa.me/62812345678?text=Halo TJM, mau tanya promo ${promo.title}`}
                target="_blank"
                className="absolute inset-0 z-20 pointer-events-auto"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Klaim {promo.title}</span>
              </a>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-transparent group-hover:border-signal transition-colors pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
