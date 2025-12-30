import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat", // Dikenali oleh Tailwind v4 @theme
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter", // Dikenali oleh Tailwind v4 @theme
});

export const metadata = {
  title:
    "TJM MOTOZONE - Bengkel Motor Premium Indonesia | Dyno, Tuning, Detailing, Rebuild",
  description:
    "Bengkel motor modern dengan dyno test, remap ECU, suspension rebuild, detailing nano ceramic, tire balancing, helm spa foam+. Garansi 14 hari. Promo grand opening total 2 juta.",
};

// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${fontMontserrat.variable} ${fontInter.variable} antialiased`}
      >
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
          <Footer /> {/* ← Letakkan di sini, setelah SmoothScroll */}
        </SmoothScroll>
      </body>
    </html>
  );
}
