export default function PolicyGrid({ policies }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {policies.map((policy) => (
        <div
          key={policy.id}
          className="border-t-2 border-tjm-yellow pt-8 group"
        >
          <h3 className="text-2xl font-montserrat font-black uppercase italic mb-8 text-white group-hover:text-tjm-yellow transition-colors">
            {policy.title}
          </h3>
          <ul className="space-y-4">
            {policy.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-tjm-yellow mt-1.5" />
                <p className="text-gray-500 font-inter text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
