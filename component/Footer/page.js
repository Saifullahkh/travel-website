"use client";
import React from "react";
import { Heart, MapPin, Phone, Mail, Plane } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,

} from "react-icons/fa";

const DEFAULT_SOCIAL_LINKS = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebook, label: "Facebook" },
  { href: "#", icon: FaTwitter, label: "Twitter" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
];

const DEFAULT_FOOTER_NAVIGATION = {
  "Destinations": [
    { label: "Beach Getaways", href: "#" },
    { label: "Mountain Adventures", href: "#" },
    { label: "City Breaks", href: "#" },
    { label: "Cultural Tours", href: "#" },
  ],
  "Services": [
    { label: "Flight Booking", href: "#" },
    { label: "Hotel Reservations", href: "#" },
    { label: "Tour Packages", href: "#" },
    { label: "Travel Insurance", href: "#" },
  ],
  "Support": [
    { label: "Help Center", href: "#" },
    { label: "Travel Guides", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ]
};

export default function TravelFooter({
  socialLinks = DEFAULT_SOCIAL_LINKS,
  footerNavigation = DEFAULT_FOOTER_NAVIGATION,
  classname,
}) {
  

  function LeftSection() {
    return (
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
           <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Plane size={24} className="text-white transform -rotate-45" />
            </div>
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              TravelX
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed max-w-md">
            Explore the world with TravelX. Your adventure starts here.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Phone className="h-4 w-4 mr-3 text-blue-500" />
              <span className="text-sm"> phone: +92335 9199919</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail className="h-4 w-4 mr-3 text-blue-500" />
              <span className="text-sm"> email: atifullahkhan47@gmail.com</span>
            </div>
            <div className="flex items-start text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
              <span className="text-sm"> address: 123 Satellite Town, Rawalpindi, PC 12345  </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Follow Our Journey</h4>
          <div className="flex items-center space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 group"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function RightSection() {
    return (
      <div className="w-full lg:w-1/2">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {Object.entries(footerNavigation).map(([title, links]) => (
            <div key={title} className="min-w-0">
              <div className="mb-4 font-semibold text-gray-800 dark:text-white text-md">
                {title}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-all duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 group-hover:w-2 transition-all duration-200"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <footer
      id="footer"
      className={`w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 ${classname || ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 mb-10">
          <LeftSection />
          <RightSection />
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <div className="text-center sm:text-left">
            <span className="font-semibold text-gray-700 dark:text-gray-300">TravelX</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1">&copy; 2025 All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-center sm:text-right text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 h-4 w-4 fill-current mx-1" />
            <span>by</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300 ml-1">@travelx</span>
          </div>
        </div>
      </div>
    </footer>
  );
}