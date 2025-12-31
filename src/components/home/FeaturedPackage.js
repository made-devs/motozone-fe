"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const packages = [
  {
    id: "PKG-01",
    title: "Master Engine Service",
    subtitle:
      "3 Pilihan paket (Standard, Pro, Elite) untuk mengembalikan performa mesin ke titik puncak.",
    image: "/service1.webp",
    size: "md:col-span-2 md:row-span-2",
    badge: "Most Popular",
  },
  {
    id: "PKG-02",
    title: "Suspension Rebuild",
    subtitle:
      "Restorasi total sistem kaki-kaki dan chassis untuk stabilitas berkendara maksimal.",
    image: "/service2.webp",
    size: "md:col-span-1",
  },
  {
    id: "PKG-03",
    title: "Dyno Performance",
    subtitle:
      "Optimasi mapping dan validasi tenaga mesin di atas mesin Dyno kelas dunia.",
    image: "/service3.webp",
    size: "md:col-span-1",
  },
  {
    id: "PKG-04",
    title: "Premium Detailing",
    subtitle:
      "Proteksi cat dan pembersihan mendalam hingga ke baut terkecil dengan standar showroom.",
    image: "/service4.webp",
    size: "md:col-span-1",
  },
  {
    id: "PKG-05",
    title: "Tire Pit+ & Balance",
    subtitle:
      "Layanan ganti ban dan balancing presisi menggunakan teknologi sensor laser.",
    image: "/service5.webp",
    size: "md:col-span-1",
  },
  {
    id: "PKG-06",
    title: "Helm Spa Foam+",
    subtitle:
      "Pembersihan gear helm dengan teknologi Foam+ Quick Dry, higienis dan wangi instan.",
    image: "/service6.webp",
    size: "md:col-span-2",
  },
];

export default function FeaturedPackages() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".package-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-carbon-black py-24 relative">
      <div className="layout-container mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-tjm-yellow" />
          <span className="text-tjm-yellow font-montserrat font-black text-xs tracking-[0.3em] uppercase">
            Service Menu
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-montserrat font-bold uppercase">
          PILIHAN PAKET <span className="text-tjm-yellow">UNGGULAN.</span>
        </h2>
      </div>

      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {packages.map((item) => (
            <Link
              href="/layanan"
              key={item.id}
              className={`package-card group relative overflow-hidden border border-white/5 bg-metallic-gray/20 ${item.size}`}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-white/30 tracking-widest group-hover:text-tjm-yellow transition-colors">
                    {item.id}
                  </span>
                  {item.badge && (
                    <span className="bg-tjm-yellow text-black px-2 py-1 text-[8px] font-black uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-montserrat font-bold uppercase mb-2 group-hover:text-tjm-yellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-inter leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover Line Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tjm-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/layanan"
            className="inline-block border border-tjm-yellow text-tjm-yellow px-12 py-4 font-montserrat font-bold uppercase tracking-widest hover:bg-tjm-yellow hover:text-black transition-all"
          >
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
