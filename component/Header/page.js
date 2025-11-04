"use client";

import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";
import Link from "next/link";

const Header = ({
  navLinks = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Tours", href: "#tours" },
    { name: "Experiences", href: "#experiences" },
    { name: "About", href: "#about" },
    { name: "Packages", href: "#pricing" },
  ],
  authLinks = {
    login: { text: "Login", href: "#" },
  },
  className = "",
  brandName = "TravelX",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll header effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const smoothScroll = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent"
      } ${className}`}
    >
      {/* Logo + Brand */}
      <Link
        href="#home"
        className="flex items-center gap-2 z-10"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
          <Plane size={24} className="text-white transform -rotate-45" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          {brandName}
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1 text-sm font-medium">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => smoothScroll(link.href)}
            className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors relative group font-medium"
          >
            {link.name}
            <span className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </button>
        ))}
      </div>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center space-x-3">
        <Link
          href={authLinks.login.href}
          className="px-5 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium border border-gray-300 rounded-lg hover:border-blue-300"
        >
          {authLinks.login.text}
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50 z-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ minHeight: "86vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <X size={22} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="bg-white flex flex-col h-full pt-6 px-6">
          <div className="flex-1 space-y-2 overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  smoothScroll(link.href);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg text-base font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Auth Section */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              href={authLinks.login.href}
              className="w-full text-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-blue-50 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {authLinks.login.text}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
