"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Play,
  Star,
  ChevronDown,
  ShieldCheck,
  Search,
  Calendar,
  Users,
  MapPin,
  X,
  Globe,
  Award
} from "lucide-react";
import DestinationSection from "./destination/page";
import ToursComponent from "./tours/page";
import ExperienceTestimonials from "./experience/page";
import AboutUs from "./about/page";
import Pricing from "./pricing/page";
import Newsletter1 from "./newsletter/page";

const Home = ({
  featureBadge = { text: "PREMIUM TRAVEL EXPEDITIONS 2025", href: "#pricing" },
  subheading = "Handcrafted private expeditions, luxury stay packages, and world-class tours tailored to your wanderlust.",
  ctaPrimary = "Explore Packages",
  ctaSecondary = "Watch Video Tour",
  trustedText = "TRUSTED BY TRAVELERS WORLDWIDE",
  logoImages = ["National Geographic", "Forbes Travel", "Lonely Planet", "Travel + Leisure", "TripAdvisor"],
  heroImage = {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=85",
    alt: "Luxurious resort over clear blue waters",
  },
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("Autumn 2025");
  const [guests, setGuests] = useState("2 Guests");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Top Badge */}
          <div className="flex justify-center lg:justify-start mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400">
              <Award size={14} className="text-emerald-400" />
              <span>{featureBadge.text}</span>
            </span>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                {"Discover The World's"} <br />
                <span className="text-emerald-400">Finest Luxury Destinations</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {subheading}
              </p>

              {/* Key Trust Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9/5</span>
                  <span className="text-slate-400 text-xs">(12K+ Reviews)</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
                  <Globe size={16} className="text-emerald-400" />
                  <span>100+ Verified Stays</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>24/7 Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition-colors text-sm uppercase tracking-wider"
                >
                  <span>{ctaPrimary}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-colors text-sm"
                >
                  <Play size={16} className="text-emerald-400 fill-emerald-400" />
                  <span>{ctaSecondary}</span>
                </button>
              </div>

              {/* Quick Search Widget */}
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700">
                    <MapPin size={16} className="text-emerald-400 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Destination (e.g. Bali)"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="bg-transparent text-xs text-white focus:outline-none placeholder:text-slate-500 font-medium w-full"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700">
                    <Calendar size={16} className="text-emerald-400 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Travel Month"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                      className="bg-transparent text-xs text-white focus:outline-none placeholder:text-slate-500 font-medium w-full"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700">
                    <Users size={16} className="text-emerald-400 flex-shrink-0" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-transparent text-xs text-white focus:outline-none font-medium cursor-pointer w-full [&>option]:bg-slate-900"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="4+ Guests">4+ Guests</option>
                    </select>
                  </div>

                  <button
                    onClick={() => scrollToSection("destinations")}
                    className="w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Search size={14} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image Presentation */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="p-4 bg-slate-800 border-t border-slate-700 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-white">Tropical Island Sanctuary</p>
                      <p className="text-xs text-slate-400">All-Inclusive Luxury Stays</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-sm">$899 / guest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Brands */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              {trustedText}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {logoImages.map((logo, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("destinations")}
          className="mx-auto mt-12 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium">Scroll down</span>
          <ChevronDown size={18} className="animate-bounce text-emerald-400" />
        </button>
      </section>

      {/* Page Content Sections */}
      <DestinationSection />
      <ToursComponent />
      <ExperienceTestimonials />
      <AboutUs />
      <Pricing />
      <Newsletter1 />

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <Play size={16} className="text-emerald-400" />
                Destination Video Tour
              </span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="w-full aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Travel Video Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
