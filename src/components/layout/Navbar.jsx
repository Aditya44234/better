import { useEffect, useState } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this selector or offset as needed to match your Hero section
      const hero = document.getElementById("hero-section");
      const heroHeight = hero ? hero.offsetHeight : 100; // fallback height
      if (window.scrollY > heroHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`transition-colors duration-500 px-6 py-4 flex items-center justify-between max-w-full fixed top-0 w-full shadow-xl z-10
        ${scrolled ? "bg-white text-black" : "bg-[#004336] text-white"}
      `}
    >
      <div className="flex items-center space-x-8 gap-3">
        <div
          className={`font-bold text-3xl cursor-pointer transition-colors duration-500 ${
            scrolled ? "text-[#004336]" : ""
          }`}
        >
          Better
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className={`transition-all ease-linear rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            Buy
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            Refinance
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            HELOC
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            Rates
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            Better+
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button
          aria-label="Call"
          className={`border rounded-full p-2 flex items-center justify-center transition
            ${
              scrolled
                ? "border-[#004336] text-[#004336] hover:bg-[#004336] hover:text-white"
                : "border-white hover:bg-white hover:text-[#004336]"
            }
          `}
        >
          <FaPhone />
        </button>

        <a
          href="#"
          className={`hover:underline cursor-pointer hidden md:block transition-colors duration-500 ${
            scrolled ? "text-black" : ""
          }`}
        >
          Sign in
        </a>
        {scrolled && (
          <Link href="/start">
            <span className="text-white bg-[#0a5748] px-4 py-3 rounded-full  cursor-pointer hidden md:inline-block transition-colors duration-500">
              Get Started
            </span>
          </Link>
        )}

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full p-4 md:hidden flex flex-col space-y-3 z-20 transition-colors duration-500
          ${scrolled ? "bg-white text-black" : "bg-[#004336] text-white"}
        `}
        >
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Buy
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Refinance
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HELOC
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rates
          </a>
          <a
            href="#"
            className={`transition-all rounded-full py-3 px-4 cursor-pointer text-[15px] ${
              scrolled
                ? "hover:bg-[#004336] hover:text-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Better+
          </a>
          <a
            href="#"
            className={`hover:underline cursor-pointer text-[15px] ${
              scrolled ? "text-black" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign in
          </a>
        </div>
      )}
    </nav>
  );
}
