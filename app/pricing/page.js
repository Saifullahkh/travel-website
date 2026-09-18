"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

const TRAVEL_PLANS = [
  {
    id: "starter",
    name: "Starter Package",
    price: 299,
    description: "Ideal for short weekend breaks and city getaways.",
    features: [
      "3 Days / 2 Nights Hotel Stay",
      "Daily Breakfast Included",
      "Airport Transfer",
      "City Tour Pass",
      "24/7 Digital Support",
    ],
    buttonText: "Book Package",
  },
  {
    id: "explorer",
    name: "Explorer Package",
    price: 799,
    description: "Our most popular tier featuring 5-star resorts and guided tours.",
    features: [
      "7 Days / 6 Nights 5-Star Stay",
      "Breakfast & Lunch Included",
      "Private Chauffeur Transfer",
      "Guided Excursions Included",
      "Travel Protection",
      "Priority VIP Check-In",
    ],
    buttonText: "Book Package",
    isPopular: true,
  },
  {
    id: "luxury",
    name: "Luxury Package",
    price: 1499,
    description: "Exclusive villa stays, private transfers, and personal concierge.",
    features: [
      "10 Days / 9 Nights Private Villa",
      "All-Inclusive Dining",
      "Private Yacht Charter",
      "Private Helicopter Transfers",
      "Spa & Wellness Session",
      "Personal Concierge",
    ],
    buttonText: "Book Package",
  },
];

export default function TravelPricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <ShieldCheck size={14} />
            <span>Pricing & Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple & Transparent Pricing
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Choose the package that best fits your travel expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TRAVEL_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between border ${isPopular
                    ? "bg-slate-800 border-emerald-500 shadow-lg"
                    : "bg-slate-900 border-slate-800"
                  }`}
              >
                <div>
                  {isPopular && (
                    <span className="inline-block bg-emerald-500 text-slate-950 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mb-6 min-h-[32px]">{plan.description}</p>

                  <div className="mb-6 pb-6 border-b border-slate-800 flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                    <span className="ml-2 text-xs text-slate-400">/ guest</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-400 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${isPopular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-slate-950"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}