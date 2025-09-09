import React from "react";
import { FaRegClock } from "react-icons/fa";
import Testimonials from "./Testimonials";
import { FAQSection } from "./FAQSection";
import Link from "next/link";

const Hero = () => (
  <>
    <section className="bg-[#004336] min-h-screen flex flex-col items-center justify-center px-4 py-15 text-white font-sans">
      <div className="max-w-5xl mx-auto text-center px-6 py-16 rounded-3xl">
        <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
          <span className="block mb-4">The first</span>
          <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-purple-400 font-extrabold drop-shadow-xl">
            AI-powered
          </span>{" "}
          <span className="inline text-white">Mortgage</span>
        </h1>

        <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
          Our tech unlocks lower rates, higher chances of approval, and a
          lightning-fast process from approval to closing.
          <span className="font-semibold text-green-200">
            Over $100 billion funded.
          </span>
        </p>

        <button className="bg-green-500 text-black font-semibold rounded-full px-8 py-4 cursor-pointer text-lg shadow-lg hover:bg-green-500 transition duration-300 mb-4">
          <Link href="/start">Start my pre-approval</Link>
        </button>

        <div className="flex items-center justify-center gap-4 text-green-100 text-sm">
          <span className="inline-flex items-center gap-2">
            <FaRegClock /> 2 min
          </span>
          <span>|</span>
          <span>No hard credit check</span>
        </div>
      </div>

      <img
        alt="Better Mortgage"
        width="510"
        height="810"
        src="/ai-powered-fico.webp"
      ></img>
    </section>

    <Testimonials />
    <FAQSection/>
    
  </>
);

export default Hero;
