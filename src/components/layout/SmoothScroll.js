"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      // Hindari instance dobel (StrictMode dev bisa mount/unmount 2x)
      const existing = ScrollSmoother.get();
      if (existing) existing.kill();

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });

      // Refresh setelah inisialisasi untuk mastiin tinggi konten akurat
      ScrollTrigger.refresh();

      return () => {
        smoother.kill(); // Cleanup saat unmount
      };
    },
    { scope: wrapperRef, dependencies: [], revertOnUpdate: true }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
