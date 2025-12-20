import { aboutData } from '@/data/about';

export default function StorySection() {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-white uppercase mb-8 italic">
            Obsesi pada <span className="text-signal">Presisi_</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-body">
            {aboutData.story}
          </p>
          <div className="grid grid-cols-3 gap-8 border-t border-border pt-10">
            {aboutData.stats.map((stat, i) => (
              <div key={i}>
                <span className="block text-4xl font-black text-white italic">
                  {stat.value}
                </span>
                <span className="text-[10px] text-signal font-bold tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square border-4 border-white/5">
          <img
            src="/sentul.jpg"
            className="w-full h-full object-cover grayscale opacity-70"
            alt="Workshop History"
          />
          <div className="absolute -bottom-8 -left-8 bg-signal p-8 hidden md:block">
            <p className="text-black font-black uppercase text-xl italic leading-none">
              SINCE
              <br />
              MMXII
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
