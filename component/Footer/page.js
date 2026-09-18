"use client";

import React from "react";
import { Compass, Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const SOCIAL_LINKS = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebook, label: "Facebook" },
  { href: "#", icon: FaTwitter, label: "Twitter" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
];

export default function TravelFooter() {
  const smoothScroll = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="footer" className="w-full bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Compass size={18} />
              </div>
              <span className="text-xl font-bold text-white">TravelX</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Handcrafted travel experiences, luxury stays, and private expeditions across the world&apos;s finest destinations.
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.label}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                  >
                    <IconComponent size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Destinations</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => smoothScroll("#destinations")} className="hover:text-emerald-400 transition-colors">Bali, Indonesia</button></li>
                <li><button onClick={() => smoothScroll("#destinations")} className="hover:text-emerald-400 transition-colors">Swiss Alps</button></li>
                <li><button onClick={() => smoothScroll("#destinations")} className="hover:text-emerald-400 transition-colors">Santorini, Greece</button></li>
                <li><button onClick={() => smoothScroll("#destinations")} className="hover:text-emerald-400 transition-colors">Kyoto, Japan</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => smoothScroll("#about")} className="hover:text-emerald-400 transition-colors">About Us</button></li>
                <li><button onClick={() => smoothScroll("#tours")} className="hover:text-emerald-400 transition-colors">How It Works</button></li>
                <li><button onClick={() => smoothScroll("#experiences")} className="hover:text-emerald-400 transition-colors">Reviews</button></li>
                <li><button onClick={() => smoothScroll("#pricing")} className="hover:text-emerald-400 transition-colors">Packages</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2"><Phone size={12} className="text-emerald-400" /> +92 335 9199919</li>
                <li className="flex items-center gap-2"><Mail size={12} className="text-emerald-400" /> atifullahkhan47@gmail.com</li>
                <li className="flex items-center gap-2"><MapPin size={12} className="text-emerald-400" /> Rawalpindi, Pakistan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} TravelX Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}