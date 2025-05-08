import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MissionSection from './components/MissionSection';
import TyreBrandsSection from "./components/TyreBrandsSection";
import StatsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import HowToBuySection from "./components/HowToBuySection";
import FaqSection from "./components/FaqSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CLM Tyres",
  description: "CLM Tyres is a tyre company that sells tyres online and in-store. We offer a wide range of tyres for cars, vans, and motorcycles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <Nav />
        {children}
        <MissionSection />
        <TyreBrandsSection />
        <StatsSection />
        <WhyChooseUsSection />
        <HowToBuySection />
        <FaqSection />
        <Footer />
      </body>
    </html>
  );
}
