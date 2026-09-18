"use client";

import React, { useState } from "react";
import { Play, ArrowRight, MapPin, Calendar, Globe, Compass, ShieldCheck } from "lucide-react";

export default function ToursComponent({
  steps = [
    {
      number: "01",
      title: "Choose Your Destination",
      description: "Browse our curated collection of luxury destinations and select your dream trip.",
      icon: <Compass size={20} />,
    },
    {
      number: "02",
      title: "Customize Your Travel Plan",
      description: "Work with dedicated travel specialists to tailor accommodations and activities.",
      icon: <Calendar size={20} />,
    },
    {
      number: "03",
      title: "Enjoy Your Voyage",
      description: "Travel stress-free with 24/7 concierge assistance and verified luxury stays.",
      icon: <Globe size={20} />,
    },
  ],
  ctaText = "Explore Tours",
}) {
  const [hoveredStep, setHoveredStep] = useState(0);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="tours" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Process Steps */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
              <Compass size={14} />
              <span>How It Works</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Plan Your Trip in 3 Easy Steps
            </h2>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => {
                const isSelected = hoveredStep === index;
                return (
                  <div
                    key={index}
                    onClick={() => setHoveredStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    className={`p-5 rounded-xl transition-colors cursor-pointer border ${isSelected
                        ? "bg-slate-800 border-emerald-500"
                        : "bg-slate-900 border-slate-800 hover:border-slate-700"
                      }`}
                  >
                    <div className="flex gap-4 items-start">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${isSelected
                            ? "bg-emerald-500 text-slate-950"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                          }`}
                      >
                        {step.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`font-bold text-base ${isSelected ? "text-emerald-400" : "text-white"
                              }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => scrollToSection("destinations")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Media Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Swiss Alps Expedition"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-5 border-t border-slate-800 bg-slate-900">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-base">Swiss Alps Expedition</h4>
                  <span className="text-xs font-bold text-emerald-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                    10 Days
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>Zermatt, Switzerland</span>
                  </div>
                  <span className="font-bold text-white">$1,399 / guest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}