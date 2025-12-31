"use client";

export default function TeamGrid({ team }) {
  return (
    <section className="py-32 px-6">
      <div className="layout-container">
        <div className="text-center mb-20">
          <span className="text-tjm-yellow font-black text-xs tracking-widest block mb-4 uppercase">
            Meet the Experts
          </span>
          <h2 className="text-5xl font-montserrat font-black uppercase italic tracking-tighter leading-none">
            ENGINEERING <span className="text-tjm-yellow">TEAM.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-montserrat font-black uppercase italic text-white leading-none">
                    {member.name.split(" ")[0]} <br />
                    <span className="text-tjm-yellow">
                      {member.name.split(" ")[1]}
                    </span>
                  </h3>
                </div>
              </div>
              <p className="text-tjm-yellow font-mono text-xs uppercase tracking-widest font-bold">
                _{member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
