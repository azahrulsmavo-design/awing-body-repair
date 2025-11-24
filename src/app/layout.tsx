import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AWING Body Repair & Cat | Bengkel Cat Mobil Depok",
  description: "Bengkel Cat Mobil Pak Awing (Caswin). Layanan body repair dan pengecatan premium di Cimanggis, Depok. Hasil presisi, kilau showroom, dan bergaransi.",
  keywords: "body repair, cat mobil, bengkel cat depok, awing body repair, perbaikan bodi mobil, cat mobil premium, cimanggis",
  verification: {
    google: "google-site-verification=lVgyLSV52I5g5J36iU5ZscnpdcQXSU9jsYoBZXIpEPQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
