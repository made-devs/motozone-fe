'use client';
import Link from 'next/link';

export default function ServiceCard({ data }) {
  return (
    <div className="group relative bg-metal border border-border overflow-hidden rounded-none transition-all duration-500 hover:border-signal">
      {/* Image Overlay - Grayscale to Color */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-canvas/40 group-hover:bg-transparent transition-colors duration-500"></div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4 bg-signal text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest">
          {data.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-3xl font-black text-white uppercase leading-none mb-3">
          {data.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-6 font-body leading-relaxed line-clamp-2">
          {data.desc}
        </p>

        {/* Technical Data */}
        <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-border/50">
          <div>
            <span className="block text-[10px] text-neutral-500 uppercase font-bold tracking-tighter">
              Mulai Dari
            </span>
            <span className="text-white font-black uppercase tracking-tight italic">
              IDR {data.price}
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[10px] text-neutral-500 uppercase font-bold tracking-tighter">
              Est. Durasi
            </span>
            <span className="text-white font-black uppercase tracking-tight italic">
              {data.duration}
            </span>
          </div>
        </div>

        {/* Action Button - No bounce/elastic */}
        <Link
          href={`/booking?service=${data.id}`}
          className="block w-full text-center py-4 bg-transparent border border-white text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-signal hover:text-black hover:border-signal transition-all duration-300"
        >
          Booking Inspeksi
        </Link>
      </div>
    </div>
  );
}
