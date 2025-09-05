"use client";

import React from "react";
import { CheckCircle, ArrowRight, Sparkles, Plane, Map, Hotel } from "lucide-react";

const TRAVEL_PLANS = [
  {
    id: "starter",
    name: "Starter Package",
    price: 299,
    description: "Perfect for quick getaways and short trips with essential travel services.",
    features: [
      "3 Days / 2 Nights stay",
      "Standard hotel accommodation",
      "Free breakfast included",
      "Local sightseeing tour",
      "Airport pickup & drop",
    ],
    buttonText: "Book Now",
    icon: <Plane size={20} />,
    color: "blue",
  },
  {
    id: "explorer",
    name: "Explorer Package",
    price: 799,
    description: "Ideal for adventurers who want premium experiences and guided tours.",
    features: [
      "7 Days / 6 Nights stay",
      "4-star hotel accommodation",
      "Daily meals included",
      "Guided city tours",
      "Adventure activities",
      "Travel insurance",
    ],
    buttonText: "Start Your Journey",
    isPopular: true,
    icon: <Map size={20} />,
    color: "purple",
  },
  {
    id: "luxury",
    name: "Luxury Package",
    price: 1499,
    description: "Premium travel experience with luxury hotels, private tours, and VIP support.",
    features: [
      "10 Days / 9 Nights stay",
      "5-star luxury hotels",
      "All-inclusive meals & drinks",
      "Private guided tours",
      "Spa & wellness sessions",
      "VIP airport lounge access",
      "24/7 personal support",
    ],
    buttonText: "Contact Us",
    icon: <Hotel size={20} />,
    color: "orange",
  },
];

export default function TravelPricing({
  badge = { title: "Travel Packages", icon: <Sparkles size={16} /> },
  plans = TRAVEL_PLANS,
  className = "",
}) {
  return (
    <div
      id="pricing"
      className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 mb-6 shadow-sm">
            {badge.icon}
            <span className="ml-2">{badge.title}</span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 mb-4">
            Premium Travel Experiences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated travel services designed to create unforgettable journeys and memories.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const getColorClasses = (color) => {
              switch (color) {
                case "purple":
                  return {
                    bg: "bg-purple-500",
                    hover: "hover:bg-purple-600",
                    text: "text-purple-600",
                    light: "bg-purple-50",
                    border: "border-purple-200",
                    gradient: "from-purple-500 to-purple-600",
                  };
                case "orange":
                  return {
                    bg: "bg-orange-500",
                    hover: "hover:bg-orange-600",
                    text: "text-orange-600",
                    light: "bg-orange-50",
                    border: "border-orange-200",
                    gradient: "from-orange-500 to-orange-600",
                  };
                default:
                  return {
                    bg: "bg-blue-500",
                    hover: "hover:bg-blue-600",
                    text: "text-blue-600",
                    light: "bg-blue-50",
                    border: "border-blue-200",
                    gradient: "from-blue-500 to-blue-600",
                  };
              }
            };

            const colorClasses = getColorClasses(plan.color);

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.isPopular
                    ? `border-2 ${colorClasses.border} shadow-xl dark:bg-gray-800 ring-2 ring-purple-500/20`
                    : "border border-gray-200 shadow-lg dark:bg-gray-800 hover:shadow-xl"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`px-4 py-1 text-xs font-bold bg-gradient-to-r ${colorClasses.gradient} text-white rounded-full shadow-md`}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg ${colorClasses.light} flex items-center justify-center mb-6`}
                >
                  <div className={colorClasses.text}>{plan.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="my-6 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400 text-sm">
                    /person
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle
                        size={18}
                        className={`${colorClasses.text} mr-3 mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`group w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    plan.isPopular
                      ? `bg-gradient-to-r ${colorClasses.gradient} ${colorClasses.hover} text-white shadow-md hover:shadow-lg`
                      : "border border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}