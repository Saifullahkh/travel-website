"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";

export default function TravelNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 border border-slate-800 text-center">
          <div className="w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-slate-700">
            <Mail size={24} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Subscribe To Our Newsletter
          </h2>

          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8">
            Get private travel guides, destination discounts, and seasonal updates directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 inline-flex items-center gap-3">
              <CheckCircle2 size={20} />
              <span className="text-xs font-semibold">Thank you! You are now subscribed.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 font-medium"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}