import { servicesData } from '@/data/services';
import ServiceCard from './ServiceCard';

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-metal/30 border-y border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-white uppercase mb-16 italic">
          Service <span className="text-signal">Catalog_</span>
        </h2>

        {/* Grid with “workflow-style” separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-10 bg-metal/30 hover:bg-metal transition-colors"
            >
              <ServiceCard data={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
