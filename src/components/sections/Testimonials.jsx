import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonialData = [
  {
    name: "Paul",
    text: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
    rating: 5,
  },
  {
    name: "Amanda",
    text: "Better's service made refinancing straightforward and stress-free. The team was very responsive and helpful throughout!",
    rating: 4,
  },
  {
    name: "Tiara",
    text: "The HELOC process was smooth and fast thanks to Better. Highly recommend their services to anyone looking for hassle-free loans.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white py-16 px-6 text-black">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-24 items-center justify-between">
        {/* Left: Video + Selector */}
        <div className="space-y-8 bg-white">
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="aspect-[2/3] w-full">
              <iframe
                src="https://www.youtube.com/embed/pKy7cNtaJ0c"
                title="Better Mortgage Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                frameBorder="0"
              />
            </div>

            {/* Overlay testimonial text */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-base leading-relaxed text-white">
              <p className="italic">
                &quot;{testimonialData[selected].text}&quot;
              </p>
              <span className="block mt-3 font-semibold text-green-400">
                — {testimonialData[selected].name}, Better Mortgage customer
              </span>
              <div className="flex items-center mt-2 text-green-400">
                {[...Array(testimonialData[selected].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {testimonialData.map(({ name }, idx) => (
              <button
                key={name}
                onClick={() => setSelected(idx)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  selected === idx
                    ? "bg-green-700 text-white shadow-lg"
                    : "bg-green-200 text-green-900 hover:bg-green-300"
                } focus:outline-none focus:ring-2 focus:ring-green-500`}
                aria-pressed={selected === idx}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Headline + CTA + Rating */}
        <div className="text-center md:text-left space-y-8">
          <h2 className="text-4xl font-extrabold leading-tight">
            Find out why we’re{" "}
            <span className="text-green-600 underline decoration-green-300 decoration-4">
              better
            </span>
          </h2>

          <button className="bg-green-500 text-black font-semibold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400">
            See all our stories
          </button>

          <div className="text-green-700 text-lg font-semibold flex items-center justify-center md:justify-start gap-2">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.492 6.492 0 0119.5 3C22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>
              Trustpilot: Excellent{" "}
              <strong className="text-green-900">4.4</strong> out of 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
