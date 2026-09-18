"use client";

import React from "react";
import { Compass, Phone, Mail, MapPin } from "lucide-react";

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const IconYoutube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const SOCIAL_LINKS = [
  { href: "#", icon: IconInstagram, label: "Instagram" },
  { href: "#", icon: IconFacebook, label: "Facebook" },
  { href: "#", icon: IconTwitter, label: "Twitter" },
  { href: "#", icon: IconYoutube, label: "YouTube" },
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
                    <IconComponent />
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