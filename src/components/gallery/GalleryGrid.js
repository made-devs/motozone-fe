"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const container = useRef();
  const modalRef = useRef();

  // Fungsi Navigasi
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const handleClose = () => setActiveIndex(null);

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  // GSAP untuk Animasi Modal
  useGSAP(() => {
    if (activeIndex !== null) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  return (
    <div ref={container}>
      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group relative cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-tjm-yellow z-20 opacity-0 group-hover:opacity-100 transition-all" />
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-tjm-yellow px-2 py-0.5 z-10">
                <span className="text-[9px] font-mono font-black text-black">
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          ref={modalRef}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-10 right-10 text-white hover:text-tjm-yellow z-[10000] font-montserrat font-black text-xl uppercase tracking-widest"
          >
            Close [Esc]
          </button>

          {/* Nav Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-10 p-4 text-white hover:text-tjm-yellow z-[10000]"
          >
            <span className="text-4xl">←</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 p-4 text-white hover:text-tjm-yellow z-[10000]"
          >
            <span className="text-4xl">→</span>
          </button>

          {/* Image Display */}
          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9]">
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              fill
              className="object-contain"
              priority
            />
            {/* Info Box */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <span className="text-tjm-yellow font-mono text-xs tracking-widest uppercase block mb-2">
                {items[activeIndex].tag} | {items[activeIndex].category}
              </span>
              <h3 className="text-2xl font-montserrat font-black text-white uppercase italic">
                {items[activeIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
