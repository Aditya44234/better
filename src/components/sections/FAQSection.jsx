import React from "react";

export function FAQSection() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading + Nav Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-0 text-center md:text-left">
            Got questions?<br />We’ve got answers
          </h2>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              Our products
            </button>
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Calculators
            </button>
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Guides & FAQs
            </button>
          </div>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-green-50 rounded-2xl p-6 flex flex-col justify-between">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-green-900">
                How AI Mortgage Lending is Transforming the Home Loan Process
              </h3>
              <button className="p-2 border rounded-full hover:bg-green-100 transition">
                →
              </button>
            </div>
            <img
              src="https://media.better.com/better-com/homepage/learning-center/ai-mortgage.webp"
              alt="AI Mortgage"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                One Day Mortgage<sup>1</sup>
              </h3>
              <p className="mt-2 text-gray-700">
                Kick your home loan into hyperdrive… (continued text)…<sup>1</sup>
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="p-2 border rounded-full hover:bg-green-100 transition">
                →
              </button>
              <img
                src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                alt="One Day Mortgage"
                className="w-1/2 h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Card 3: Better HELOC */}
          <div className="bg-green-50 rounded-2xl p-6 flex flex-col md:flex-row justify-between">
            <img
              src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
              alt="Better HELOC"
              className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-green-900">Better HELOC</h3>
              <p className="mt-2 text-gray-700">
                Introducing One Day HELOC™—your express lane… (continued text)…
              </p>
              <button className="mt-4 p-2 border rounded-full hover:bg-green-100 transition">
                →
              </button>
            </div>
          </div>

          {/* Card 4: Insurance */}
          <div className="bg-green-50 rounded-2xl p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Insurance</h3>
            <div className="flex items-center justify-between">
              <button className="p-2 border rounded-full hover:bg-green-100 transition">
                →
              </button>
              <img
                src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
                alt="Insurance"
                className="w-1/2 h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
