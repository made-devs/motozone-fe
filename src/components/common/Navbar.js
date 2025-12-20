'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Promo', href: '/promo' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-canvas/95 backdrop-blur-md border-b border-white/10">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${
                  pathname === link.href
                    ? 'text-signal'
                    : 'text-neutral-400 hover:text-signal'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-signal transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}

            <Link
              href="/booking"
              className="px-6 py-2 bg-signal text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* BURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU - Simple Slide Down */}
      <div
        className={`fixed top-20 left-0 w-full bg-black/98 backdrop-blur-lg border-b border-white/10 z-40 md:hidden transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-4 px-6 text-2xl font-black uppercase border-l-4 transition-all duration-300 ${
                pathname === link.href
                  ? 'border-signal text-signal bg-signal/10'
                  : 'border-transparent text-white hover:border-signal hover:text-signal hover:bg-signal/5'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA di Mobile Menu */}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="mt-4 py-4 px-6 bg-signal text-black text-center font-black uppercase tracking-widest hover:bg-white transition-colors"
          >
            Book Now
          </Link>
        </nav>
      </div>

      {/* Overlay backdrop (tutup pas klik di luar) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}
