import React, { useState } from "react";

const FounderStorySection = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly gap-8 px-6 py-16 bg-white rounded-2xl min-h-screen">
      {/* Text Block */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004336] mb-4">
          The status quo is broken.
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
          The traditional processes around homeownership are opaque and
          stressful. Fees aren’t transparent and some are simply outrageous in
          size. Traditional mortgage lending is rife with unnecessary fees and
          slow, painful processes. It’s a system set up to benefit insiders –
          not you. But Better.com CEO, Vishal Garg, set out to change that.
        </p>
        <a
          href="#"
          className="inline-block bg-[#004336] text-white px-6 py-2 rounded-full text-sm hover:bg-[#00694e] transition"
        >
          Read Vishal's story
        </a>
      </div>

      {/* Video Block */}
      <div className="w-full md:w-1/2">
        {isPlaying ? (
          <div className="aspect-video w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`${videoUrl}?autoplay=1`}
              title="Vishal Garg Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://media.better.com/video/vishal-mission.jpg"
              alt="Vishal Garg video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default FounderStorySection;