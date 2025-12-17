'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const marqueeTopRef = useRef(null);
  const marqueeBottomRef = useRef(null);

  useGSAP(
    () => {
      // 1. Marquee Animation (Gerak berlawanan arah)
      gsap.to(marqueeTopRef.current.querySelector('.marquee-inner'), {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'linear',
      });

      gsap.to(marqueeBottomRef.current.querySelector('.marquee-inner'), {
        xPercent: 50, // Gerak ke kanan
        repeat: -1,
        duration: 20,
        ease: 'linear',
      });

      // 2. Text Entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });

      tl.from('.cta-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      })
        .from(
          '.cta-desc',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.cta-btn',
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-metal overflow-hidden flex flex-col justify-center items-center text-center min-h-[80vh]"
    >
      {/* BACKGROUND IMAGE (Parallax) */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40">
        <div className="absolute inset-0 bg-neutral-900/80 z-10"></div>
        <img
          src="/images/workshop-wide.jpg"
          alt="Workshop Background"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* MARQUEE TOP (Caution Tape Style) */}
      <div
        ref={marqueeTopRef}
        className="absolute top-0 left-0 w-full py-3 bg-signal text-black overflow-hidden z-20 rotate-1 scale-105 border-y-2 border-black"
      >
        <div className="marquee-inner flex whitespace-nowrap font-black uppercase text-sm tracking-widest">
          {Array(10)
            .fill('BOOKING OPEN // SLOT TERBATAS // PERFORMANCE UPGRADE // ')
            .map((item, i) => (
              <span key={i} className="mx-4">
                {item}
              </span>
            ))}
        </div>
      </div>

      {/* MARQUEE BOTTOM */}
      <div
        ref={marqueeBottomRef}
        className="absolute bottom-0 left-0 w-full py-3 bg-black text-neutral-500 overflow-hidden z-20 -rotate-1 scale-105 border-t border-neutral-800"
      >
        <div className="marquee-inner flex whitespace-nowrap font-black uppercase text-sm tracking-widest">
          {Array(10)
            .fill('TJM MOTOZONE // EST. 2025 // PROFESSIONAL GARAGE // ')
            .map((item, i) => (
              <span key={i} className="mx-4">
                {item}
              </span>
            ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-30 max-w-4xl px-6">
        <div className="inline-block border border-neutral-600 rounded-full px-4 py-1 mb-8 bg-black/50 backdrop-blur-sm">
          <span className="text-signal text-xs font-mono uppercase tracking-[0.2em] animate-pulse">
            ● System Ready
          </span>
        </div>

        <h2 className="cta-title text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-8">
          Siap Maksimalkan
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
            Potensi Motor Lo?
          </span>
        </h2>

        <p className="cta-desc text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Jangan biarkan performa tertahan. Konsultasikan kebutuhan mesin lo
          sekarang. Slot harian terbatas untuk menjaga kualitas pengerjaan.
        </p>

        <div className="cta-btn">
          <a
            href="https://wa.me/62812345678?text=Halo%20TJM,%20saya%20mau%20booking%20service%20untuk%20motor%20saya."
            target="_blank"
            className="group relative inline-flex items-center justify-center px-10 py-6 bg-signal text-black font-black uppercase tracking-widest text-lg overflow-hidden hover:text-white transition-colors duration-300"
          >
            {/* Hover Fill Effect */}
            <span className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

            <span className="relative z-10 flex items-center gap-3">
              Booking Via WhatsApp
              <svg
                className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.888.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.978zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </span>
          </a>
        </div>

        <p className="text-neutral-600 text-xs font-mono mt-6 uppercase tracking-widest">
          *Estimasi waktu tunggu dibalas 5-10 menit
        </p>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
