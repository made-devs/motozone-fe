import { aboutData } from '@/data/about';

export default function TeamSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-white uppercase mb-16 italic">
          Expert <span className="text-signal">Mechanics_</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.team.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-metal border border-border rounded-none"
            >
              <div className="h-96 overflow-hidden">
                <img
                  src={member.img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={member.name}
                />
              </div>
              <div className="p-6 bg-metal border-t border-border group-hover:border-signal transition-colors">
                <h4 className="text-white font-black uppercase text-xl italic">
                  {member.name}
                </h4>
                <p className="text-signal font-bold text-xs uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
