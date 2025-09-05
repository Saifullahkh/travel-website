"use client";
import React, { useState } from "react";
import { Send, Globe, Users, Award, MapPin, Sparkles } from "lucide-react";

export default function TravelNewsletter({
  sectionId = "newsletter",
  heading = {
    text: "Never Miss a Travel Opportunity",
    className: "text-gray-800 dark:text-white"
  },
  subheading = {
    text: "Get exclusive deals, new destination alerts, and travel tips delivered straight to your inbox",
    className: "text-gray-600 dark:text-gray-300"
  },
  button = {
    text: "Subscribe Now",
    className: "bg-blue-600 hover:bg-blue-700 text-white"
  },
  featureBadge = {
    text: "Travel Updates",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
  },
  inputElement = {
    placeholder: "Enter your email address...",
    caption: "We respect your privacy. Unsubscribe at any time.",
    className: "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
  },
  stats = [
    {
      count: "50K+",
      title: "Happy Travelers",
      description: "Join our community of adventure seekers",
      icon: <Users size={20} />
    },
    {
      count: "100+",
      title: "Destinations",
      description: "Discover new places every month",
      icon: <Globe size={20} />
    }
  ],
}) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log("Subscribed with email:", email);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id={sectionId} className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-green-50/50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute right-10 top-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute left-10 bottom-10 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl"></div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              {/* Left column - content and form */}
              <div className="lg:w-1/2">
                {/* Badge */}
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${featureBadge.className}`}>
                  <Sparkles size={16} className="mr-2" />
                  {featureBadge.text}
                </span>

                <hgroup className="mb-8">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${heading.className}`}>
                    {heading.text}
                  </h2>
                  <p className={`text-lg ${subheading.className}`}>
                    {subheading.text}
                  </p>
                </hgroup>

                {isSubscribed ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <Send size={16} className="text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-green-800 dark:text-green-200 font-medium">
                          Welcome to our travel community!
                        </h3>
                        <p className="text-green-600 dark:text-green-300 text-sm mt-1">
                          Check your inbox for our welcome email.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <label htmlFor="email-input" className="sr-only">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        placeholder={inputElement.placeholder}
                        className={`flex-grow px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ${inputElement.className}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${button.className}`}
                      >
                        {button.text}
                        <Send size={16} className="ml-2" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {inputElement.caption}
                    </p>
                  </form>
                )}
              </div>

              {/* Right column - stats */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 text-center group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                        <div className="text-blue-600 dark:text-blue-400">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                        {stat.count}
                      </div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        {stat.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-green-500 rounded-bl-2xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}