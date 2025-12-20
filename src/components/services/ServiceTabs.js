'use client';

import { useState, useRef } from 'react';
import { serviceCategories, servicePackages } from '@/data/packages';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('maintenance');
  const contentRef = useRef(null);

  useGSAP(() => {
    // Animasi saat ganti tab
    gsap.fromTo(
      '.package-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' }
    );
  }, [activeTab]);

  return (
    <section className="py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-white uppercase mb-12 italic border-l-8 border-signal pl-6">
          Service <span className="text-signal">Packages_</span>
        </h2>

        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-4">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 text-sm font-black uppercase tracking-widest transition-all rounded-none ${
                activeTab === cat.id
                  ? 'bg-signal text-black'
                  : 'bg-metal text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PACKAGE GRID */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePackages[activeTab].map((pkg, idx) => (
            <div
              key={idx}
              className={`package-card p-10 border transition-all duration-500 rounded-none relative overflow-hidden flex flex-col ${
                pkg.isPopular
                  ? 'border-signal bg-metal'
                  : 'border-border bg-metal/50'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-signal text-black text-[10px] font-black px-4 py-1 uppercase tracking-tighter transform rotate-0">
                  RECOMMENDED
                </div>
              )}

              <h3 className="text-xs font-bold text-signal tracking-[0.3em] mb-2 uppercase">
                Package_{idx + 1}
              </h3>
              <h4 className="text-3xl font-black text-white uppercase mb-6">
                {pkg.name}
              </h4>

              <div className="mb-8">
                <span className="text-4xl font-black text-white italic">
                  IDR {pkg.price}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-neutral-400 text-sm font-body"
                  >
                    <svg
                      className="w-4 h-4 text-signal shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="square"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 font-black uppercase text-xs tracking-[0.2em] transition-all rounded-none ${
                  pkg.isPopular
                    ? 'bg-signal text-black hover:bg-white'
                    : 'border border-white text-white hover:bg-signal hover:text-black hover:border-signal'
                }`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
