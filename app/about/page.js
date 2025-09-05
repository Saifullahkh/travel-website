"use client";
import React from "react";
import { Users, Target, Globe, Heart, Award, Clock, Star, MapPin } from "lucide-react";

export default function AboutUs(props) {
  const {
    title = "About Our Travel Company",
    description = "Discover the story behind our passion for creating unforgettable travel experiences and connecting people with the world.",
    mission = "To inspire and enable extraordinary travel experiences that create lasting memories and meaningful connections across cultures.",
    vision = "To be the world's most trusted travel companion, making global exploration accessible, sustainable, and transformative for everyone.",
    team = [
      {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        bio: "Travel enthusiast with 15+ years in the industry, passionate about sustainable tourism.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Michael Chen",
        role: "Travel Director",
        bio: "Expert in curating unique experiences across Asia and Europe.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Emily Rodriguez",
        role: "Adventure Specialist",
        bio: "Former tour guide who knows the best hidden gems in South America.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "David Thompson",
        role: "Customer Experience",
        bio: "Dedicated to ensuring every traveler has a seamless journey.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      }
    ],
  } = props;

  return (
    <div id="about" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 mb-6">
            <MapPin size={16} className="mr-2" />
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 mb-4">
            {title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">{mission}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">{vision}</p>
          </div>
        </div>


        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}