import React from "react";

const start = () => {
  const options = [
    { label: "Buying a home", icon: "🏠" },
    { label: "Refinancing my mortgage", icon: "🔁" },
    { label: "Get cash from my home", icon: "💰" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-green-50 flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Greeting */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#004336] mb-4">
        Hi, I'm Betsy! What can I help you with?
      </h1>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        {options.map((option) => (
          <button
            key={option.label}
            className="bg-white border border-[#004336] rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center justify-center text-[#004336] text-lg font-medium"
          >
            <span className="text-3xl mb-2">{option.icon}</span>
            {option.label}
          </button>
        ))}
      </div>

      {/* Contact Info */}
      <p className="mt-10 text-sm text-gray-600">
        Need help? Call <span className="font-semibold text-[#004336]">415-523-8837</span>
      </p>

      {/* Stats */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 text-gray-700 text-sm">
        <div className="bg-white rounded-xl px-6 py-4 shadow">
          <strong className="text-[#004336] text-lg">$100B+</strong> home loans funded entirely online
        </div>
        <div className="bg-white rounded-xl px-6 py-4 shadow">
          <strong className="text-[#004336] text-lg">400K+</strong> customers chose Better Mortgage
        </div>
      </div>
    </section>
  );
};

export default start;