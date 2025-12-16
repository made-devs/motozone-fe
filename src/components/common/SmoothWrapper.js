"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothWrapper({ children }) {
  const mainRef = useRef(null);
  const smootherRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" ref={mainRef}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
