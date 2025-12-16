import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import SmoothWrapper from "@/components/common/SmoothWrapper";
import Navbar from "@/components/common/Navbar"; // Import Navbar
import Footer from "@/components/common/Footer"; // Import Footer

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "TJM Motozone | High Performance Workshop",
  description: "Bengkel motor modern dengan standar presisi tinggi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <SmoothWrapper>
          <Navbar /> {/* Render Navbar di sini */}
          <main>{children}</main>
          <Footer /> {/* Render Footer di sini */}
        </SmoothWrapper>
      </body>
    </html>
  );
}
