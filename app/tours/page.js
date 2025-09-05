"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Sparkles, MapPin, Calendar, Globe } from "lucide-react";

export default function ToursComponent({
  steps = [
    {
      number: 1,
      title: "Choose Your Destination",
      description: "Browse our curated collection of breathtaking destinations and find the perfect match for your travel dreams.",
      icon: <MapPin size={20} />,
    },
    {
      number: 2,
      title: "Customize Your Experience",
      description: "Tailor your itinerary with unique activities, accommodations, and experiences that match your preferences.",
      icon: <Calendar size={20} />,
    },
    {
      number: 3,
      title: "Embark on Your Journey",
      description: "Travel with confidence knowing every detail is handled, from flights to guided tours and local experiences.",
      icon: <Globe size={20} />,
    },
  ],
  ctaText = "Explore Our Tours",
  onCtaClick = () => {},
}) {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div id="tours" className="py-16 md:py-24 bg-gradient-to-br from-blue-50/50 to-green-50/50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 mb-6 shadow-sm">
              <Sparkles size={16} className="mr-2" />
              How Our Tours Work
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 mb-8">
              Plan Your Dream Vacation 
            </h1>

            {/* Steps */}
            <div className="space-y-8 mb-10">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex gap-6 items-start p-6 rounded-2xl transition-all duration-300 cursor-pointer
                    ${hoveredStep === index 
                      ? 'bg-white dark:bg-gray-800   dark:border-blue-900/50 ' 
                      : 'bg-white/70 dark:bg-gray-800/50 shadow-md'}`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={`flex-shrink-0 rounded-full w-14 h-14 flex justify-center items-center text-lg font-semibold transition-all duration-300
                    ${hoveredStep === index 
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white scale-110 shadow-lg' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-semibold text-lg ${hoveredStep === index ? 'text-blue-600' : 'text-gray-800 dark:text-white'}`}>
                        {step.title}
                      </h3>
                      <div className={`transition-opacity duration-300 ${hoveredStep === index ? 'opacity-100' : 'opacity-60'}`}>
                        {step.icon}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-101 shadow-lg hover:shadow-xl"
            >
              {ctaText}
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'}
                alt="Travel adventure in mountains"
                className="w-full h-auto object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Swiss Alps Adventure</h3>
                  <p className="text-sm">Experience breathtaking mountain vistas</p>
                </div>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play size={32} className="text-white fill-white" />
                </button>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm font-semibold">
                <Sparkles size={14} className="text-amber-500 mr-1" />
                Most Popular Tour
              </div>
            </div>

            {/* Additional tour card floating element */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Bali Package</p>
                  <p className="text-xs text-gray-500">$899 • 7 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}