'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';

export default function PageHero({
  title,
  subtitle,
  bgImage = '/hero.webp',
  category,
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText('.hero-title', { type: 'chars, words' });
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-bg', {
        scale: 1.1,
        duration: 2,
        ease: 'power2.out',
      })
        .from(
          split.chars,
          {
            y: 100,
            opacity: 0,
            stagger: 0.02,
            duration: 1,
          },
          '-=1.5'
        )
        .from(
          '.hero-sub',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.8'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] min-h-[500px] w-full flex items-center overflow-hidden bg-canvas"
    >
      {/* BACKGROUND WITH PARALLAX & OVERLAY */}
      <div
        className="hero-bg absolute inset-0 w-full h-full z-0"
        data-speed="0.6"
      >
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-black/40 z-10"></div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 relative z-20" data-speed="1.1">
        <div className="max-w-4xl">
          {category && (
            <div className="inline-block bg-signal text-black px-3 py-1 text-xs font-black uppercase mb-6 rounded-none">
              // {category}
            </div>
          )}

          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.85] italic mb-6">
            {title}
          </h1>

          {subtitle && (
            <p className="hero-sub text-neutral-400 text-lg md:text-xl font-medium tracking-widest uppercase border-l-4 border-signal pl-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* DECORATIVE LINE (Industrial Style) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
    </section>
  );
}
