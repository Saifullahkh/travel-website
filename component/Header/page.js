"use client";

import { useState, useEffect } from "react";
import { Compass, Menu, X, Phone } from "lucide-react";
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
  brandName = "TravelX",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const currentScroll = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const smoothScroll = (href) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("#home");
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-sm">
            <Compass size={20} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            {brandName}
          </span>
        </Link>

        {/* Desktop Navigation Links (Visible on >= 1024px lg) */}
        <nav aria-label="Desktop Navigation" className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => smoothScroll(link.href)}
                className={`text-sm font-medium transition-colors py-1 relative ${isActive
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Phone, Book Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+923359199919"
            className="hidden lg:flex text-xs text-slate-300 hover:text-emerald-400 font-medium items-center gap-1.5 transition-colors"
          >
            <Phone size={14} className="text-emerald-400" />
            <span>+92 335 9199919</span>
          </a>

          <button
            onClick={() => smoothScroll("#pricing")}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle Button (Visible on < 1024px lg) */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white focus:outline-none cursor-pointer z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={22} className="text-emerald-400" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-3 shadow-2xl z-[105]">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => smoothScroll(link.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white font-semibold transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => smoothScroll("#pricing")}
              className="w-full py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm text-center uppercase tracking-wider transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
