'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 15, label: 'Tahun Pengalaman', suffix: '+' },
  { value: 5000, label: 'Motor Ditangani', suffix: '+' },
  { value: 98, label: 'Kepuasan Pelanggan', suffix: '%' },
  { value: 12, label: 'Teknisi Bersertifikat', suffix: '' },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const numbersRef = useRef([]);

  useGSAP(
    () => {
      // 1. Parallax Image (Diperhalus)
      // Kita gerakkan gambarnya (img), bukan wrappernya, biar lebih aman
      gsap.fromTo(
        '.about-img',
        { scale: 1.2, yPercent: -10 }, // Start: Agak zoom & geser atas dikit
        {
          yPercent: 10, // End: Geser ke bawah dikit
          scale: 1.2, // Tetap zoom biar ga bocor
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // 2. Counter Animation (Sama)
      numbersRef.current.forEach((el, index) => {
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: 'power3.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            this.targets()[0].innerHTML = Math.ceil(
              this.targets()[0].textContent
            ).toLocaleString('id-ID');
          },
        });
      });

      // 3. Content Reveal (Sama)
      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        y: 50,
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
      className="py-24 bg-canvas relative z-10 border-b border-neutral-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT COLUMN: VISUAL */}
        {/* REVISI: Pakai fixed height (h-[500px]) biar ga kegedean */}
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
          <div className="about-image-wrapper relative z-10 w-full h-[400px] lg:h-[600px] bg-neutral-900 border-2 border-neutral-800 overflow-hidden">
            {/* Image dengan class target baru '.about-img' */}
            <img
              src="/about.jpg"
              alt="TJM Motozone Workshop Activity"
              className="about-img w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none"></div>
          </div>

          {/* Background Decoration */}
          {/* Disesuaikan posisinya biar ga keluar section */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-signal/20 z-0 hidden lg:block pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-dots-pattern opacity-30 z-0 pointer-events-none"></div>
        </div>

        {/* RIGHT COLUMN: CONTENT & STATS (Sama) */}
        <div className="w-full lg:w-1/2 about-content order-1 lg:order-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-10 h-[2px] bg-signal"></span>
            <span className="text-xs font-mono text-signal uppercase tracking-widest">
              The Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-8">
            Lebih Dari Sekadar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-yellow-700">
              Ganti Oli
            </span>
            .
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed mb-12 border-l-2 border-neutral-800 pl-6">
            Di TJM Motozone, kami memadukan keahlian mekanik veteran dengan
            teknologi diagnostik modern. Setiap baut yang kami kencangkan adalah
            komitmen terhadap performa dan keselamatan motor Anda. Kami tidak
            hanya memperbaiki; kami mengoptimalkan.
          </p>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-4">
            {stats.map((item, i) => (
              <div key={i} className="border-t border-neutral-800 pt-6">
                <div className="text-4xl md:text-5xl font-black text-white flex items-baseline">
                  <span ref={(el) => (numbersRef.current[i] = el)}>
                    {item.value}
                  </span>
                  <span className="text-signal ml-1">{item.suffix}</span>
                </div>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
