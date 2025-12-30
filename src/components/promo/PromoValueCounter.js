"use client";
import { useEffect, useState } from "react";
import { promoData } from "@/data/promo";

export default function PromoValueCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 2000000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 border-b border-white/5">
      <div className="layout-container text-center">
        <span className="text-tjm-yellow font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
          Total Benefit Value
        </span>
        <div className="text-6xl md:text-9xl font-montserrat font-black text-white">
          RP {count.toLocaleString("id-ID")}*
        </div>
        <p className="text-gray-500 mt-6 font-inter italic">
          *Akumulasi nilai dari 15 item promo eksklusif TJM Motozone
        </p>
      </div>
    </section>
  );
}
