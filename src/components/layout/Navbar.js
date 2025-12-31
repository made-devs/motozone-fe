"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const menuItems = [
  { name: "Paket & Layanan", href: "/services" },
  { name: "Promo", href: "/promo" },
  { name: "Booking", href: "/booking" },
  { name: "Komunitas", href: "/community" },
  { name: "Galeri", href: "/gallery" },
  { name: "Tentang", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Matikan scroll saat menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".nav-anim");

      // Safety: jangan sampai ada yang ke-lock opacity 0
      gsap.set(items, { autoAlpha: 1 });

      const st = ScrollTrigger.create({
        start: "top -50",
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 215, 0, 0.2)",
            paddingTop: "12px",
            paddingBottom: "12px",
            duration: 0.4,
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            borderBottom: "1px solid transparent",
            paddingTop: "24px",
            paddingBottom: "24px",
            duration: 0.4,
          });
        },
      });

      const reveal = gsap.fromTo(
        items,
        { y: -20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 1,
          ease: "expo.out",
          delay: 0.2,
          immediateRender: false,
          clearProps: "opacity,visibility",
        }
      );

      return () => {
        reveal.kill();
        st.kill();
      };
    },
    { scope: navRef, dependencies: [], revertOnUpdate: true }
  );

  console.log(
    "[Navbar] mounted, promo href =",
    menuItems.find((m) => m.name === "Promo")?.href
  );

  return (
    <>
      <nav
        ref={navRef}
        data-navbar-version="2025-12-31"
        className="fixed top-0 left-0 w-full z-[200] transition-all duration-300 pt-6 pb-6"
      >
        <div className="layout-container flex items-center justify-between">
          {/* LOGO AREA */}
          <Link href="/" className="nav-anim flex items-center gap-2 group">
            <div className="w-10 h-10 bg-tjm-yellow flex items-center justify-center font-black text-black text-xl italic">
              T
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-montserrat font-bold tracking-tighter group-hover:text-tjm-yellow transition-colors">
                MOTOZONE
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                TJM Group
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-anim text-[11px] font-montserrat font-bold uppercase tracking-[0.15em] text-white/70 hover:text-tjm-yellow transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tjm-yellow transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="nav-anim flex items-center gap-4">
            <Link
              href="https://wa.me/yournumber"
              target="_blank"
              className="hidden md:flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/50 px-5 py-2 text-[#25D366] font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all group"
            >
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse group-hover:bg-white" />
              WhatsApp
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 relative z-[105]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={`h-[2px] bg-white transition-all ${
                  isMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"
                }`}
              />
              <div
                className={`h-[2px] bg-tjm-yellow transition-all ${
                  isMenuOpen ? "opacity-0" : "w-5"
                }`}
              />
              <div
                className={`h-[2px] bg-white transition-all ${
                  isMenuOpen ? "w-8 -rotate-45 -translate-y-2" : "w-6"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-carbon-black z-[150] flex flex-col items-center justify-center transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-montserrat font-bold uppercase tracking-widest hover:text-tjm-yellow transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/yournumber"
            target="_blank"
            className="mt-4 bg-[#25D366] text-white px-10 py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
