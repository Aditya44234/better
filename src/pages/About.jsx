import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BackedBySection from "@/components/sections/BackedBySection";
import FounderStorySection from "@/components/sections/FounderStorySection";
import ImpactStatementSection from "@/components/sections/ImpactStatementSection";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center">
      <Navbar />
      {/* About Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-screen px-6 pt-24 pb-16 bg-white text-center">
        <h1 className="text-4xl md:text-3xl font-semibold  text-[#026506] mb-6">
          Our mission
        </h1>
        <p className="max-w-6xl text-lg md:text-5xl text-gray-700 font-semibold leading-relaxed">
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </section>
      <FounderStorySection videoUrl="https://www.youtube.com/embed/1KjYlLBM9j4" />

      <ImpactStatementSection/>
      <BackedBySection/>

      <Footer />
    </div>
  );
}
