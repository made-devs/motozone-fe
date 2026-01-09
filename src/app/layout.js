import { Sora } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Ganti ke font Sora
const fontSora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sora', // Untuk Tailwind v4 @theme
});

export const metadata = {
  title:
    'MOTOZONE - Bengkel Motor Premium Indonesia | Dyno, Tuning, Detailing, Rebuild',
  description:
    'Bengkel motor modern dengan dyno test, remap ECU, suspension rebuild, detailing nano ceramic, tire balancing, helm spa foam+. Garansi 14 hari. Promo grand opening total 2 juta.',
};

// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${fontSora.variable} antialiased`}>
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
