"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-carbon-black border-t border-white/5 pt-20 pb-10"
    >
      <div className="layout-container">
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* 1. ABOUT SECTION */}
          <div className="footer-content">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-tjm-yellow flex items-center justify-center font-black text-black italic">
                T
              </div>
              <span className="text-lg font-montserrat font-bold tracking-tighter">
                MOTOZONE
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-inter">
              Bagian dari TJM GROUP, kami adalah spesialis restorasi dan
              performa motor dengan standar presisi industri. Kami percaya pada
              kualitas yang bertahan lama: We Rebuild, Not Replace.
            </p>
          </div>

          {/* 2. QUICK MENU */}
          <div className="footer-content lg:pl-10">
            <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-widest mb-6 border-b border-tjm-yellow/30 pb-2 inline-block">
              Menu Cepat
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Paket & Layanan",
                "Promo",
                "Booking",
                "Komunitas",
                "Galeri",
                "Tentang",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-tjm-yellow text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-tjm-yellow scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. ALAMAT & OPERASIONAL */}
          <div className="footer-content">
            <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-widest mb-6 border-b border-tjm-yellow/30 pb-2 inline-block">
              Lokasi Kami
            </h4>
            <div className="text-gray-500 text-sm flex flex-col gap-4">
              <div>
                <span className="block text-white font-bold mb-1">
                  TJM MOTOZONE INDONESIA
                </span>
                <p>
                  Premium Performance Garage <br /> Area POSH, Bekasi
                </p>
              </div>
              <div>
                <span className="block text-tjm-yellow font-bold mb-1 uppercase text-[10px] tracking-widest">
                  Jam Operasional
                </span>
                <p>Setiap Hari: 09.00 – 19.00 WIB</p>
              </div>
            </div>
          </div>

          {/* 4. KONTAK */}
          <div className="footer-content">
            <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-widest mb-6 border-b border-tjm-yellow/30 pb-2 inline-block">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <Link href="tel:0800000000" className="flex flex-col group">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                  WhatsApp / Telp
                </span>
                <span className="text-gray-400 group-hover:text-tjm-yellow transition-colors font-bold tracking-wider">
                  08xx-xxxx-xxxx
                </span>
              </Link>
              <Link
                href="https://instagram.com/tjmmotozone.id"
                className="flex flex-col group"
              >
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                  Instagram
                </span>
                <span className="text-gray-400 group-hover:text-tjm-yellow transition-colors font-bold tracking-wider">
                  @tjmmotozone.id
                </span>
              </Link>
              <Link
                href="mailto:admin@tjmmotozone.co.id"
                className="flex flex-col group"
              >
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                  Email
                </span>
                <span className="text-gray-400 group-hover:text-tjm-yellow transition-colors font-bold tracking-wider underline">
                  admin@tjmmotozone.co.id
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: DISCLAIMER & COPYRIGHT */}
        <div className="footer-content pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tjm-yellow animate-pulse" />
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed text-center md:text-left">
              Disclaimer: Garansi Jasa 14 Hari berlaku sesuai Syarat & Ketentuan
              standar TJM Group.
            </p>
          </div>

          <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
            © 2025 TJM MOTOZONE INDONESIA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
