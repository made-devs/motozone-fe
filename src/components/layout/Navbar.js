'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const menuItems = [
  { name: 'Paket', href: '/services' },
  { name: 'Promo', href: '/promo' },
  { name: 'Booking', href: '/booking' },
  { name: 'Komunitas', href: '/community' },
  { name: 'Galeri', href: '/gallery' },
];

export default function Navbar() {
  const navRef = useRef();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [isMenuOpen]);

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.nav-anim');
      gsap.set(items, { autoAlpha: 1 }); // Ensure visibility start

      // Scroll Effect: "Solid Tech Deck"
      ScrollTrigger.create({
        start: 'top -50',
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: '#0a0a0a',
            borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
            paddingTop: '12px',
            paddingBottom: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: 'transparent',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
            paddingBottom: '24px',
            boxShadow: 'none',
            duration: 0.3,
          });
        },
      });

      // Intro Animation
      gsap.fromTo(
        items,
        { y: -20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    },
    { scope: navRef }
  );

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[200] pt-6 pb-6 border-b border-white/5 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent"
      >
        <div className="layout-container flex items-center justify-between">
          {/* LOGO: Clean & Impactful */}
          <Link href="/" className="nav-anim flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-tjm-yellow skew-x-[-10deg] flex items-center justify-center border border-transparent group-hover:border-white transition-all">
              <span className="font-black text-black text-xl italic font-montserrat skew-x-[10deg]">
                T
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black italic uppercase tracking-tighter text-white">
                MOTOZONE
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU: Clean Lines */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-anim relative group py-2"
                >
                  <span
                    className={`text-sm font-black italic uppercase tracking-wider transition-colors duration-300 ${
                      isActive
                        ? 'text-tjm-yellow'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-tjm-yellow transition-all duration-300 ease-out skew-x-[-20deg] ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />

                  {/* Glow Effect on Hover */}
                  <span className="absolute inset-0 bg-tjm-yellow/20 filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE: Action & Mobile Toggle */}
          <div className="nav-anim flex items-center gap-4">
            {/* Desktop WhatsApp Button */}
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="hidden md:flex items-center gap-2 px-5 py-2 border border-tjm-yellow text-tjm-yellow font-black italic uppercase text-sm tracking-wider hover:bg-tjm-yellow hover:text-black transition-all duration-300 skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg]">HUBUNGI KAMI</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col justify-center gap-1.5 items-end z-[205]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block h-[3px] bg-tjm-yellow transition-all duration-300 ${
                  isMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'
                }`}
              />
              <span
                className={`block h-[3px] bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 translate-x-4' : 'w-6'
                }`}
              />
              <span
                className={`block h-[3px] bg-tjm-yellow transition-all duration-300 ${
                  isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU: Fullscreen Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[200] flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen
            ? 'clip-path-full opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative flex flex-col items-center gap-8 z-10 w-full px-6 text-center">
          {menuItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black italic uppercase tracking-tighter text-white hover:text-tjm-yellow transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}

          <div className="w-12 h-1 bg-tjm-yellow rounded-full my-4" />

          <Link
            href="https://wa.me/6281234567890"
            className="text-lg font-mono text-gray-400 hover:text-white tracking-widest uppercase border border-white/20 px-8 py-3 rounded-full"
          >
            WhatsApp Support
          </Link>
        </div>
      </div>
    </>
  );
}
