"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Promo", href: "/promo" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // 1. Scroll Logic (Show/Hide)
  useGSAP(() => {
    const showNav = gsap
      .from(navRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: "power3.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });
  });

  // 2. Mobile Menu Animation
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(menuRef.current, {
      xPercent: 100, // Geser dari kiri (-100) ke 0
      duration: 0.6,
      ease: "expo.inOut",
    }).from(
      linksRef.current,
      {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power3.out",
      },
      "-=0.3"
    );

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-canvas/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-black uppercase tracking-tighter text-white"
          >
            TJM<span className="text-signal">.Motozone</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-signal transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-signal group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}

            {/* CTA Button Kecil */}
            <Link
              href="/booking"
              className="px-6 py-2 bg-signal text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* BURGER BUTTON (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 text-white focus:outline-none"
          >
            <div
              className={`w-8 h-[2px] bg-white mb-2 transition-transform ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] bg-white mt-2 transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black z-40 transform -translate-x-full md:hidden flex flex-col justify-center px-10"
      >
        {/* Background Decoration */}
        <div className="absolute right-0 top-0 p-10 opacity-10 pointer-events-none">
          <h1 className="text-9xl font-black text-white rotate-90 origin-top-right">
            MENU
          </h1>
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black text-white uppercase hover:text-signal hover:pl-4 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
