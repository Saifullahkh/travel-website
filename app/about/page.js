"use client";
import React from "react";
import { Target, Globe, Award, ShieldCheck, MapPin } from "lucide-react";

export default function AboutUs(props) {
  const {
    title = "About TravelX",
    description = "Founded in 2012, TravelX creates exceptional travel experiences connecting people with authentic cultures and luxury destinations.",
    mission = "To inspire extraordinary travel experiences that create lasting memories and meaningful connections worldwide.",
    vision = "To be the most trusted travel companion, making global exploration seamless, sustainable, and accessible.",
    team = [
      {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        bio: "Travel veteran with 15+ years curating high-end expeditions worldwide.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
      },
      {
        name: "Michael Chen",
        role: "Travel Director",
        bio: "Expert in curating unique experiences across Asia and Europe.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
      },
      {
        name: "Emily Rodriguez",
        role: "Adventure Specialist",
        bio: "Explorer passionate about authentic cultural immersion tours.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
      },
      {
        name: "David Thompson",
        role: "Guest Experience",
        bio: "Dedicated to ensuring every traveler has a seamless journey.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
      }
    ],
  } = props;

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <MapPin size={14} />
            <span>Our Company</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{mission}</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{vision}</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-10">Our Leadership Team</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-5 border border-slate-800 text-center flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border border-slate-700"
                />
                <h4 className="font-bold text-white text-base mb-0.5">{member.name}</h4>
                <p className="text-xs font-semibold text-emerald-400 mb-2">{member.role}</p>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}