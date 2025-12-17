'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-metal text-white pt-20 pb-10 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">
              TJM<span className="text-signal">.Motozone</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Bengkel modern dengan standar presisi tinggi. Menggabungkan
              teknisi ahli dan peralatan diagnostik terkini untuk performa mesin
              maksimal.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {['IG', 'FB', 'YT', 'WA'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-xs font-bold hover:bg-signal hover:text-black hover:border-signal transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-l-4 border-signal pl-4">
              Menu
            </h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              {['Home', 'Layanan', 'Booking', 'Tentang Kami', 'Karir'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-signal transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-signal group-hover:w-4 transition-all"></span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-l-4 border-signal pl-4">
              Spesialisasi
            </h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li>Engine Tune Up</li>
              <li>Bore Up & Stroke Up</li>
              <li>Restorasi Total</li>
              <li>Electrical Diagnosis</li>
              <li>Suspension Rebuild</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-l-4 border-signal pl-4">
              Kontak
            </h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li className="flex flex-col">
                <span className="text-xs text-neutral-600 uppercase mb-1">
                  Alamat
                </span>
                <span>Jl. Otomotif No. 88, Jakarta Selatan</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-neutral-600 uppercase mb-1">
                  Telepon/WA
                </span>
                <span className="text-xl font-bold text-white tracking-widest">
                  0812-3456-7890
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-neutral-600 uppercase mb-1">
                  Jam Operasional
                </span>
                <span>Senin - Sabtu: 09.00 - 18.00</span>
                <span>Minggu: Appointment Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-neutral-800 mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-wider">
          <p>&copy; 2025 Mechanic Pro Garage. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
