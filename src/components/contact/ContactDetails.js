'use client';
import { contactInfo } from '@/data/contact';

export default function ContactDetails() {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* COLUMN 1: ADDRESS & CONTACT */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-black text-signal tracking-[0.3em] mb-6 uppercase">
                // LOCATION_
              </h3>
              <p className="text-white text-xl font-black uppercase italic leading-tight mb-2">
                {contactInfo.address}
              </p>
              <p className="text-neutral-500 text-sm uppercase">
                {contactInfo.landmark}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black text-signal tracking-[0.3em] mb-6 uppercase">
                // DIRECT_LINE_
              </h3>
              <p className="text-white text-2xl font-black italic mb-2">
                {contactInfo.whatsapp}
              </p>
              <p className="text-neutral-500 text-sm uppercase">
                {contactInfo.email}
              </p>
            </div>
          </div>

          {/* COLUMN 2: OPERATING HOURS */}
          <div className="bg-metal p-10 border border-border relative">
            <h3 className="text-xs font-black text-signal tracking-[0.3em] mb-8 uppercase">
              // WORK_HOURS_
            </h3>
            <div className="space-y-6">
              {contactInfo.hours.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-white/5 pb-4 last:border-0"
                >
                  <span className="text-neutral-400 text-xs font-bold uppercase">
                    {item.days}
                  </span>
                  <span className="text-white text-xs font-black italic">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3: SOCIALS & ACTION */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black text-signal tracking-[0.3em] mb-8 uppercase">
                // CONNECT_
              </h3>
              <div className="flex flex-col gap-4">
                {contactInfo.socials.map((soc, i) => (
                  <a
                    key={i}
                    href={soc.link}
                    className="text-white font-black text-3xl italic hover:text-signal transition-colors uppercase"
                  >
                    {soc.name}.
                  </a>
                ))}
              </div>
            </div>
            <button className="mt-12 w-full py-5 bg-signal text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all rounded-none">
              Start WhatsApp Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
