'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const advantages = [
  {
    number: '01',
    label: 'PROTEKSI',
    title: 'Garansi Jasa 14 Hari',
    desc: 'Setiap pengerjaan di TJM Motozone dilindungi garansi selama 14 hari untuk memastikan hasil yang benar-benar presisi.',
    image:
      'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1200',
    feature: 'Guaranteed Precision',
  },
  {
    number: '02',
    label: 'KEJUJURAN',
    title: 'Harga & Waktu Transparan',
    desc: 'Tidak ada biaya tersembunyi. Estimasi harga dan durasi pengerjaan diinfokan secara jujur sejak awal di area tunggu.',
    image: '/advantage2.webp',
    feature: 'Fixed Price Policy',
  },
  {
    number: '03',
    label: 'PERALATAN',
    title: 'Lift Motor di Setiap Stall',
    desc: 'Kami tidak menggunakan standar samping. Semua motor dikerjakan di atas lift hidrolik profesional demi keamanan.',
    image: '/advantage3.webp',
    feature: 'Hydraulic System',
  },
  {
    number: '04',
    label: 'PELAPORAN',
    title: 'Update Progres via WhatsApp',
    desc: 'Anda bisa memantau setiap tahap pengerjaan melalui laporan digital dan foto yang dikirim langsung ke WhatsApp.',
    image: '/advantage4.webp',
    feature: 'Digital Logbook',
  },
  {
    number: '05',
    label: 'KENYAMANAN',
    title: 'Lounge AC & Coffee Corner',
    desc: 'Sembari menunggu motor Anda kembali ke performa terbaik, nikmati fasilitas ruang tunggu yang dingin dan kopi gratis.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
    feature: 'Premium Guest Experience',
  },
  {
    number: '06',
    label: 'DOKUMENTASI',
    title: 'Foto Before & After',
    desc: 'Kami mendokumentasikan kondisi motor sebelum dan sesudah diservis sebagai bukti nyata kualitas pengerjaan kami.',
    image:
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200',
    feature: 'Visual Documentation',
  },
];

// Style pattern untuk Caution Stripes
const cautionStripeStyle = {
  backgroundImage: `repeating-linear-gradient(
    -45deg,
    #FACC15,
    #FACC15 10px,
    #000000 10px,
    #000000 20px
  )`,
};

export default function Advantages() {
  const [activeTab, setActiveTab] = useState(0);
  const container = useRef();
  const displayRef = useRef();

  useGSAP(
    () => {
      // Animasi transisi konten (Image & Text)
      gsap.fromTo(
        displayRef.current,
        { opacity: 0, scale: 1.02, filter: 'brightness(2)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'brightness(1)',
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    },
    { dependencies: [activeTab], scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-carbon-black py-24 relative overflow-hidden font-sora"
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="layout-container">
        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-[2px] bg-tjm-yellow" />
              <span className="text-tjm-yellow font-bold text-xs tracking-[0.4em] uppercase font-sora">
                TJM Standards
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none font-sora">
              KENAPA HARUS SERVICE DI{' '}
              <span className="text-tjm-yellow">TJM MOTOZONE?</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-right max-w-[300px] italic font-sora">
            &quot;Selesai Hari Ini, Presisi Selamanya.&quot; — Integritas dalam
            setiap detail komponen.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-white/10 relative">
          {/* SIDEBAR NAVIGATION (Modified Layout for Stripe) */}
          <div className="lg:col-span-4 flex bg-metallic-gray/10 backdrop-blur-md">
            {/* 1. THE CAUTION STRIPE BAR (Vertical) */}
            <div
              className="w-8 md:w-10 h-full flex-shrink-0 border-r-4 border-black box-content"
              style={cautionStripeStyle}
            />

            {/* 2. MENU LIST */}
            <div className="flex flex-col flex-1">
              {advantages.map((item, index) => (
                <button
                  key={item.number}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex flex-1 items-center justify-between px-7 py-6 text-left transition-all duration-300 border-b border-white/5 last:border-b-0
                    ${
                      activeTab === index
                        ? 'bg-tjm-yellow text-black'
                        : 'text-white/40 hover:bg-white/5 hover:text-white'
                    } font-sora`}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xl font-bold ${
                        activeTab === index
                          ? 'text-black'
                          : 'text-tjm-yellow/40'
                      } font-sora`}
                    >
                      {item.number}
                    </span>
                    <span className="font-bold text-sm tracking-widest uppercase font-sora">
                      {item.label}
                    </span>
                  </div>

                  {activeTab === index ? (
                    <span className="text-xl font-sora">→</span>
                  ) : (
                    <div className="w-1 h-1 bg-tjm-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN MONITOR DISPLAY (With Image & Ornaments) */}
          <div className="lg:col-span-8 relative bg-black min-h-[500px] md:min-h-[600px] overflow-hidden flex flex-col justify-end p-8 md:p-16">
            {/* 1. Background Image with Dark Overlay */}
            <div ref={displayRef} className="absolute inset-0 z-0">
              <Image
                src={advantages[activeTab].image}
                alt={advantages[activeTab].title}
                fill
                className="object-cover opacity-70 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>

            {/* 2. Yellow Ornaments (Corners) */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-tjm-yellow z-10" />
            <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-tjm-yellow/40 z-10" />

            {/* 3. Ruler Marking (Side) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20 z-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-[1px] bg-white ${i % 5 === 0 ? 'w-4' : 'w-2'}`}
                />
              ))}
            </div>

            {/* 4. Content Content */}
            <div ref={displayRef} className="relative z-10 font-sora">
              <div className="inline-block bg-tjm-yellow text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6 font-sora">
                {advantages[activeTab].feature}
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-6 uppercase leading-tight font-sora">
                {advantages[activeTab].title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-sora">
                {advantages[activeTab].desc}
              </p>

              {/* Decorative Large Number (Yellow Outline) */}
              <div
                className="absolute -bottom-10 -right-6 text-[18vw] font-black opacity-[0.07] pointer-events-none select-none italic text-tjm-yellow font-sora"
                style={{
                  WebkitTextStroke: '2px #FFD700',
                  color: 'transparent',
                }}
              >
                {advantages[activeTab].number}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DASHBOARD INFO */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 font-sora">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Global Status
              </span>
              <span className="text-[11px] text-tjm-yellow font-bold uppercase">
                Operational // Excellent
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                PRECISION LEVEL
              </span>
              <span className="text-[11px] text-white font-bold uppercase">
                Industry Standard
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-gray-600">
              SPEC: MOTO-Z-PRO.2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
