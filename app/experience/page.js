"use client";

import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Globe } from "lucide-react";
import { useState, useEffect } from "react";

function ExperienceCard({ rating, content, author, destination, image }) {
  return (
    <div className="p-6 rounded-xl shadow-md border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
      {/* Destination Image */}
      {image && (
        <div className="mb-4 -mx-6 -mt-6">
          <img 
            src={image} 
            alt={destination} 
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      
      {/* Destination Tag */}
      <div className="flex items-center mb-3 text-blue-600 dark:text-blue-400 text-sm">
        <MapPin size={14} className="mr-1" />
        <span>{destination}</span>
      </div>
      
      {/* Rating */}
      {rating && (
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {content}
      </p>

      {/* Author */}
      {author && (
        <div className="flex items-center pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">
            {author.charAt(0)}
          </div>
          <div className="ml-3">
            <h4 className="font-medium text-gray-900 dark:text-white text-sm">{author}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

const experiences = [
  {
    id: 1,
    rating: 5,
    content: "Our family vacation to Bali was absolutely magical! The curated experiences exceeded all our expectations.",
    author: "Jennifer Wilson",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    rating: 5,
    content: "The Swiss Alps tour was the adventure of a lifetime! Every detail was perfectly planned.",
    author: "Mark Thompson",
    destination: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    rating: 5,
    content: "Santorini exceeded all our honeymoon dreams! The sunset cruise and private wine tasting were unforgettable.",
    author: "Sarah & Michael",
    destination: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    rating: 5,
    content: "Our cultural tour through Japan was incredibly enriching. From ancient temples to bustling streets.",
    author: "David Chen",
    destination: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
];

export default function ExperienceTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % experiences.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  const goTo = (index) => setCurrentIndex(index);

  return (
    <section id="experiences" className="py-12 md:py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 mb-4">
            <Globe size={14} className="mr-1" />
            Traveler Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 mb-3">
            Travel Experiences That Inspire
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover unforgettable journeys from travelers who explored the world with us
          </p>
        </div>

        {/* Experience Grid - Desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}