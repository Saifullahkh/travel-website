"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Star, 
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Globe,
  Shield
} from "lucide-react";

const Home = ({
  featureBadge = { text: "Limited time offer: Save 20% on summer destinations →", href: "/summer-sale" },
  heading = "Discover Your Next Adventure",
  subheading = "Explore curated travel experiences and exclusive destinations tailored to your wanderlust.",
  ctaPrimary = "Book Now",
  ctaSecondary = "Watch Video Tour",
  trustedText = "TRUSTED BY TRAVELERS WORLDWIDE",
  logoImages = ["Lonely Planet", "National Geographic", "Travel + Leisure", "Airbnb", "TripAdvisor"],
  heroImage = {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60",
    alt: "Breathtaking mountain landscape at sunrise",
  },
  className = "",
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className={`relative w-full max-w-7xl mx-auto px-4 py-20 sm:py-28 lg:py-32 ${className}`}>
        {/* Background blobs */}
        <div className="absolute top-10 left-5 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-5 w-48 sm:w-72 h-48 sm:h-72 bg-green-100 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          {/* Offer Badge */}
          {featureBadge && (
            <nav aria-label="Special offers">
              <div className="flex md:justify-start justify-center  mb-6 sm:mb-10">
                <a
                  href={featureBadge.href}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-700 hover:shadow-md transition-all"
                >
                  <Sparkles size={14} className="text-blue-600" />
                  {featureBadge.text}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </nav>
          )}

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                {heading}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {subheading}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs sm:text-sm font-medium text-gray-700">4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">100+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Verified Stays</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  {ctaPrimary}
                  <ArrowRight size={18} />
                </a>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:shadow-lg hover:bg-gray-50 transition-all"
                >
                  <Play size={18} className="text-blue-600" />
                  {ctaSecondary}
                </button>
              </div>

              {/* Logos */}
              <aside aria-label="Trusted by travelers">
                <p className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">
                  {trustedText}
                </p>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                  {logoImages.map((logo, index) => (
                    <div
                      key={index}
                      className="text-gray-700 font-bold text-sm sm:text-base bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            {/* Right image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
              <div className="relative w-full max-w-md sm:max-w-lg">
                <img
                  className="rounded-2xl w-full object-cover shadow-xl"
                  src={heroImage.src}
                  alt={heroImage.alt}
                />

                {/* Floating card bottom-left */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">Traveler Stories</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">10K+ happy travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-gray-700"
        >
          <span className="text-xs sm:text-sm mb-2">Explore destinations</span>
          <ChevronDown size={22} className="animate-bounce" />
        </button>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl aspect-video relative">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-sm"
            >
              Close
            </button>
            <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-2xl">
              <div className="text-center">
                <Play size={60} className="text-white/80 mx-auto" />
                <p className="text-white mt-4 font-medium">Destination video tour</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
