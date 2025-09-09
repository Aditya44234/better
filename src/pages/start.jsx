import React from "react";
import { FaPhone } from "react-icons/fa";
const start = () => {
  const options = [
    { label: "Buying a home", icon: "🏠" },
    { label: "Refinancing my mortgage", icon: "🔁" },
    { label: "Get cash from my home", icon: "💰" },
  ];

  return (
    <>
      <header className="flex items-center justify-evenly px-6 py-4 bg-white shadow-sm fixed top-0 w-full">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-green-600">Better</span>
          <span className="text-sm text-gray-500 -mt-1">Mortgage</span>
        </div>

        {/* Help Line */}
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <FaPhone />
          <span>
            Need help? Call <strong>415-523-8837</strong>
          </span>
        </div>
      </header>

      <section className="min-h-screen bg-gradient-to-br from-white to-green-50 flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Greeting */}
        {/* Glowing Divider with House Icon */}
        <div className="relative w-full max-w-4xl h-1 bg-gray-300 mb-10 rounded-full">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-300 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#004336] mb-6">
          Hi, I'm Betsy! What can I help you with?
        </h1>

        {/* Options */}
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {options.map((option) => (
            <button
              key={option.label}
              className="bg-white  rounded-xl px-6 py-5 shadow-md hover:shadow-lg hover:border border-green-900  transition flex items-center gap-4 text-[#004336] text-lg font-medium"
            >
              <span className="text-3xl">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        {/* Contact Info */}
        <p className="mt-10 text-sm text-gray-600">
          Need help? Call{" "}
          <span className="font-semibold text-[#004336]">415-523-8837</span>
        </p>

        {/* Stats */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 text-gray-700 text-sm">
          <div className="bg-white rounded-xl px-6 py-10  text-center">
            <strong className="text-[#000] text-[40px] block mb-1">
              $100B+
            </strong>
            Home loans funded entirely online
          </div>
          <div className="bg-white rounded-xl px-6 py-10  text-center">
            <strong className="text-[#000] text-[40px] block mb-1">
              400K+
            </strong>
            Customers chose Better Mortgage
          </div>
        </div>

        <div className="mt-12 w-full max-w-md mx-auto text-center">
          <p className="text-[#004336] font-semibold text-lg mb-6">
            Unlock these benefits by answering a few quick questions:
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-white border border-[#004336] rounded-xl px-4 py-3 shadow">
              <span className="text-2xl">🎯</span>
              <span className="text-[#004336] font-medium">
                Custom mortgage rates
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white border border-[#004336] rounded-xl px-4 py-3 shadow">
              <span className="text-2xl">💵</span>
              <span className="text-[#004336] font-medium">
                Exclusive offers
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white border border-[#004336] rounded-xl px-4 py-3 shadow">
              <span className="text-2xl">📱</span>
              <span className="text-[#004336] font-medium">
                A personalized dashboard
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#fff] text-black px-6 py-12 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Better</h3>
            <p className="text-black/80 leading-relaxed">
              Better Mortgage Corporation is a direct lender dedicated to
              providing a fast, transparent digital mortgage experience backed
              by superior customer support.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-black/80">
              <li>
                <a href="#" className="hover:underline">
                  Schedule a conversation
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:hello@better.com" className="underline">
                  hello@better.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:4155238837" className="underline">
                  415-523-8837
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-black/80">
              <li>
                <a href="#" className="hover:underline">
                  NMLS Consumer Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Disclosures & Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliated Business
                </a>
              </li>
            </ul>

            {/* Legal Icons (Placeholder) */}
            <div className="mt-4 flex gap-3">
              <span className="w-6 h-6 bg-white rounded-full" />
              <span className="w-6 h-6 bg-white rounded-full" />
              <span className="w-6 h-6 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-6xl mx-auto text-black/70 leading-relaxed text-xs">
          <p className="mb-4">
            © 2023 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans; Better Real Estate, LLC and Better Real Estate
            California Inc License # 02083396 provide real estate services;
            Better Cover, LLC provides insurance services; Better Settlement
            Services provides title insurance and settlement services; Better
            Services, LLC provides other services. See{" "}
            <a
              href="https://better.com/about-us#licenses"
              className="underline"
            >
              https://better.com/about-us#licenses
            </a>{" "}
            for full details. All rights reserved.
          </p>
          <p>
            NMLS #330511. World Trade Center, 60th Floor, New York, NY 10007.
            Not intended for use by residents of New York. Better Mortgage
            Corporation is licensed and regulated by the California Department
            of Financial Protection and Innovation under the California
            Residential Mortgage Lending Act License #4130575. Equal Housing
            Lender. NMLS Consumer Access.
          </p>
        </div>
      </footer>
    </>
  );
};

export default start;
