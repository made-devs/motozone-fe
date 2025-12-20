export default function MapSection() {
  return (
    <section className="h-[500px] w-full bg-metal grayscale contrast-125 border-b border-border relative">
      {/* Overlay dekoratif industrial */}
      <div className="absolute top-8 left-8 z-10 bg-canvas p-6 border border-border hidden md:block">
        <p className="text-signal font-black text-[10px] tracking-[0.3em] uppercase mb-2">
          GPS_COORDINATES
        </p>
        <p className="text-white font-mono text-xs">-6.2088° S, 106.8456° E</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24108869852!2d106.75947798369654!3d-6.229746465492984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e3faad%3A0x71e1ad2ad12d2828!2sJakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
