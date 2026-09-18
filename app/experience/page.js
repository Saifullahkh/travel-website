"use client";

import { Star, MapPin, Globe, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    rating: 5,
    content: "TravelX curated our vacation in Bali down to the finest detail. The infinity villa and private tour made it magical.",
    author: "Jennifer Wilson",
    role: "Verified Traveler",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "J"
  },
  {
    id: 2,
    rating: 5,
    content: "The Swiss Alps tour was beyond expectations. Flawless transfers, great lodge, and breathtaking views!",
    author: "David Vance",
    role: "Adventure Traveler",
    destination: "Zermatt, Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "D"
  },
  {
    id: 3,
    rating: 5,
    content: "Sailing around Santorini on a private boat was unforgettable. Customer service was helpful 24/7.",
    author: "Sophia Martinez",
    role: "Travel Enthusiast",
    destination: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "S"
  },
  {
    id: 4,
    rating: 5,
    content: "Our cultural tour through Japan was seamlessly organized. From tea ceremonies to bullet train passes!",
    author: "Alexander Chen",
    role: "Family Traveler",
    destination: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    avatar: "A"
  },
];

export default function ExperienceTestimonials() {
  return (
    <section id="experiences" className="py-20 md:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <Globe size={14} />
            <span>Traveler Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Read authentic reviews from guests who explored the world with TravelX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-800/90 rounded-xl p-5 border border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 rounded-lg overflow-hidden mb-4">
                  <img
                    src={exp.image}
                    alt={exp.destination}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded text-[11px] font-medium text-emerald-400 border border-slate-700">
                    <MapPin size={12} />
                    <span>{exp.destination}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 italic">
                  &ldquo;{exp.content}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                  {exp.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs flex items-center gap-1">
                    <span>{exp.author}</span>
                    <CheckCircle2 size={12} className="text-emerald-400" />
                  </h4>
                  <p className="text-slate-400 text-[10px]">{exp.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}