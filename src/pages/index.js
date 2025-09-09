import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Customize weights as needed
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer/>
    </>
  );
}
