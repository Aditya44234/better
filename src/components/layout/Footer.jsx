import { LegalDisclosure } from "../sections/LegalDisclosure";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="bg-white py-12 px-6 h-full w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 justify-evenly">
          {/* Column 1: Brand & Description */}
          <div>
            <h3 className="text-3xl font-bold text-green-900 mb-4">Better</h3>
            <p className="text-gray-700 mb-6">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>
                <strong className="text-green-900">Better</strong> Mortgage
                <p className="text-gray-600 text-[12px]">
                  We can’t wait to say “Welcome home.” Apply 100% online, with
                  expert customer support.
                </p>
              </li>
              <li>
                <strong className="text-green-900">Better</strong> Real Estate
                <p className="text-gray-600 text-[12px]">
                  Connect with a local Better Real Estate Partner Agent to find
                  out all the ways you can save.
                </p>
              </li>
              <li>
                <strong className="text-green-900">Better</strong> Cover
                <p className="text-gray-600 text-[12px]">
                  Shop, bundle, and save on insurance coverage for home, auto,
                  life, and more.
                </p>
              </li>
              <li>
                <strong className="text-green-900">Better</strong> Inspect
                <p className="text-gray-600 text-[12px]">
                  Get free repair estimates, 24-hour turnarounds on reports, and
                  rest easy with our 100-day inspection guarantee.
                </p>
              </li>
              <li>
                <strong className="text-green-900">Better</strong> Settlement
                Services
                <p className="text-gray-600 text-[12px]">
                  Get transparent rates when you shop for title insurance all in
                  one convenient place.
                </p>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xl font-semibold text-green-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Home affordability calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Mortgage calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Free mortgage calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Mortgage calculator with taxes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Mortgage calculator with PMI
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Rent vs buy calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  HELOC payment calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  HELOC vs cash-out refinance calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Buy a home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Sell a home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Get home inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xl font-semibold text-green-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                <Link href="/About" className="hover:underline text-[12px]">
                  About Us
                </Link>
              </li>

              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Learning center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h4 className="text-xl font-semibold text-green-900 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-800 mb-6">
              <li>
                <a
                  href="mailto:hello@better.com"
                  className="hover:underline text-[12px]"
                >
                  hello@better.com
                </a>
              </li>
              <li>
                <a
                  href="tel:4155238837"
                  className="hover:underline text-[12px]"
                >
                  415-523-8837
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Glossary
                </a>
              </li>
            </ul>
            <h4 className="text-xl font-semibold text-green-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  NMLS Consumer Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Disclosures & Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Affiliated Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[12px]">
                  Browser Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <LegalDisclosure />
    </>
  );
}
