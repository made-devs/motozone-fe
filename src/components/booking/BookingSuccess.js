"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BookingSuccess({ data }) {
  const scannerRef = useRef();

  useGSAP(() => {
    // Animasi garis scanner yang naik turun
    gsap.to(scannerRef.current, {
      top: "100%",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  const sendToWA = () => {
    const text = `Halo TJM Motozone, saya ${data.name} ingin konfirmasi booking antrean online.\n\nMotor: ${data.motor}\nPaket: ${data.package}\nJadwal: ${data.date} jam ${data.time}\n\nMohon kirimkan barcode antrean saya.`;
    window.open(
      `https://wa.me/628123456789?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="text-center py-10">
      <div className="inline-block relative p-4 bg-white mb-8 group">
        {/* Placeholder Barcode */}
        <div className="w-48 h-48 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TJM-MOTOZONE')] bg-cover opacity-80" />

        {/* Garis Scanner GSAP */}
        <div
          ref={scannerRef}
          className="absolute left-0 top-0 w-full h-[2px] bg-red-600 shadow-[0_0_10px_red] z-10"
        />
      </div>

      <h2 className="text-3xl font-montserrat font-black uppercase mb-4">
        Booking Confirmed!
      </h2>
      <p className="text-gray-400 font-inter text-sm mb-10 max-w-md mx-auto">
        Barcode antrean di atas telah didaftarkan ke sistem. Klik tombol di
        bawah untuk klaim barcode via WhatsApp.
      </p>

      <button onClick={sendToWA} className="btn-precision px-12 py-4 text-lg">
        Chat Admin & Klaim Barcode
      </button>
    </div>
  );
}
