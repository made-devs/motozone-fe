"use client";

export default function SubBrandMarquee({ brands }) {
  return (
    <section className="py-10 bg-yellow-400 border-y-4 border-black overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render 2x untuk loop mulus */}
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center mx-12">
            <span className="text-black font-montserrat font-black text-5xl md:text-7xl uppercase italic tracking-tighter">
              {brand.name}
            </span>
            <div className="mx-8 w-4 h-4 bg-black rotate-45" />{" "}
            {/* Diamond Separator */}
            <span className="text-black/60 font-inter font-bold text-xs uppercase tracking-widest hidden md:block">
              {brand.slogan}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
