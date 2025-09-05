"use client";

import { MapPin, Compass, Globe, Mountain, Camera, ArrowRight, Star, Users, Award, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const destinations = [
  {
    title: "Bali Paradise",
    description: "Experience the perfect blend of stunning beaches, vibrant culture, and spiritual retreats in the Island of Gods.",
    icon: <Globe />,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    price: "$899",
    duration: "7 days"
  },
  {
    title: "Swiss Alps Adventure",
    description: "Breathtaking mountain vistas, charming villages, and world-class skiing in the heart of the Alps.",
    icon: <Mountain />,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    price: "$1,299",
    duration: "10 days"
  },
  {
    title: "Santorini Escape",
    description: "White-washed buildings, crystal blue waters, and spectacular sunsets in this Greek island paradise.",
    icon: <Compass />,
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    price: "$1,099",
    duration: "8 days"
  },
  {
    title: "Japanese Culture Tour",
    description: "Immerse yourself in ancient traditions, modern innovations, and exquisite cuisine across Japan.",
    icon: <MapPin />,
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    price: "$1,499",
    duration: "12 days"
  },
];

const stats = [
  { value: "50+", label: "Destinations", icon: <Globe size={20} /> },
  { value: "10K+", label: "Happy Travelers", icon: <Users size={20} /> },
  { value: "24/7", label: "Support", icon: <Clock size={20} /> },
  { value: "4.8/5", label: "Rating", icon: <Award size={20} /> },
];

const DestinationCard = ({ title, description, icon, color, hoverColor, image, rating, price, duration, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex flex-col p-0 text-center rounded-xl shadow-lg transition-all duration-300 transform ${isHovered ? 'scale-105 shadow-xl -translate-y-2' : ''} bg-white dark:bg-gray-800 overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Destination Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center text-sm font-bold">
          <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
          {rating}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className={`w-16 h-16 text-xl flex items-center justify-center rounded-full ${color} text-white mb-4 mx-auto relative z-10 transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 relative z-10 text-gray-800 dark:text-white">{title}</h3>
        <p className="opacity-80 mb-4 relative z-10 text-gray-600 dark:text-gray-300 text-sm h-12 overflow-hidden">
          {description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{price}</div>
          <div className="text-sm text-gray-500">{duration}</div>
        </div>
        
        <button className={`w-full flex items-center justify-center text-sm font-medium py-3 px-4 rounded-lg ${color} text-white hover:shadow-md transition-all ${hoverColor}`}>
          Explore Destination
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Decorative element */}
      <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
    </div>
  );
};

function DestinationSection({
  featureBadge = { text: "Popular Destinations", icon: <Compass size={16} /> },
  mainHeading = { text: "Where Every Journey is Uniquely Yours" },
  subHeading = {
    text: "Explore our handpicked destinations offering unforgettable experiences and breathtaking landscapes around the world",
  },
  destinationsArray = destinations,
}) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  let lgGridColsClass = "lg:grid-cols-4";
  if (destinationsArray.length === 1) {
    lgGridColsClass = "lg:grid-cols-1";
  } else if (destinationsArray.length === 2) {
    lgGridColsClass = "lg:grid-cols-2";
  } else if (destinationsArray.length === 3) {
    lgGridColsClass = "lg:grid-cols-3";
  }

  return (
    <div id="destinations" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center items-center mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 shadow-sm">
            {featureBadge.icon}
            <span className="ml-2">{featureBadge.text}</span>
          </span>
        </div>

        {/* Headings */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400">
            {mainHeading.text}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subHeading.text}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${lgGridColsClass} gap-8`}>
          {destinationsArray.map((destination, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <DestinationCard
                title={destination.title}
                description={destination.description}
                icon={destination.icon}
                color={destination.color}
                hoverColor={destination.hoverColor}
                image={destination.image}
                rating={destination.rating}
                price={destination.price}
                duration={destination.duration}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationSection;