"use client";

import { MapPin, Compass, Globe, Mountain, ArrowRight, Star, Users, Award, Clock, Heart, Search } from "lucide-react";
import { useState } from "react";

const ALL_DESTINATIONS = [
  {
    id: 1,
    category: "beach",
    title: "Bali Tropical Sanctuary",
    location: "Indonesia",
    description: "Vibrant volcanic beaches, sacred cliffside temples, and private villa retreats surrounded by lush rainforests.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 320,
    price: "$899",
    duration: "7 Days / 6 Nights",
    badge: "Popular"
  },
  {
    id: 2,
    category: "mountain",
    title: "Swiss Alps Pinnacle Escape",
    location: "Switzerland",
    description: "Breathtaking snow-capped peaks, luxury chalets, private skiing, and scenic glacier express train rides.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 450,
    price: "$1,399",
    duration: "10 Days / 9 Nights",
    badge: "Featured"
  },
  {
    id: 3,
    category: "beach",
    title: "Santorini Sunset Horizon",
    location: "Greece",
    description: "Iconic blue-domed architecture, private catamaran cruises, and romantic cliffside dining.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 290,
    price: "$1,199",
    duration: "8 Days / 7 Nights",
    badge: "Honeymoon"
  },
  {
    id: 4,
    category: "culture",
    title: "Kyoto Ancient Blossom",
    location: "Japan",
    description: "Immerse in serene bamboo groves, traditional tea ceremonies, historic shrines, and world-class dining.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 510,
    price: "$1,599",
    duration: "12 Days / 11 Nights",
    badge: "Culture"
  },
  {
    id: 5,
    category: "beach",
    title: "Maldives Private Atoll",
    location: "Maldives",
    description: "Glass-floor overwater bungalows, crystal lagoon coral reefs, and private butler service in paradise.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviews: 620,
    price: "$2,199",
    duration: "6 Days / 5 Nights",
    badge: "Luxury"
  },
  {
    id: 6,
    category: "mountain",
    title: "Patagonia Wild Frontier",
    location: "Argentina & Chile",
    description: "Dramatic granite peaks, turquoise glacial lakes, and guided trekking across unblemished wilderness.",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 180,
    price: "$1,799",
    duration: "11 Days / 10 Nights",
    badge: "Adventure"
  }
];

const STATS = [
  { value: "100+", label: "World Destinations", icon: <Globe size={20} className="text-emerald-400" /> },
  { value: "25K+", label: "Delighted Travelers", icon: <Users size={20} className="text-emerald-400" /> },
  { value: "99.4%", label: "Satisfaction Rate", icon: <Award size={20} className="text-emerald-400" /> },
  { value: "24/7", label: "Global Support", icon: <Clock size={20} className="text-emerald-400" /> },
];

export default function DestinationSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDestinations = ALL_DESTINATIONS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="destinations" className="py-20 md:py-28 bg-slate-900 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <Compass size={14} />
            <span>Top Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore Popular Destinations
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Handpicked travel packages offering unforgettable experiences across the world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 text-center flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Destinations" },
              { id: "beach", label: "Beaches & Islands" },
              { id: "mountain", label: "Mountains" },
              { id: "culture", label: "Culture" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${activeCategory === tab.id
                    ? "bg-emerald-500 text-slate-950 font-bold"
                    : "bg-slate-800 text-slate-300 hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700 flex flex-col justify-between hover:border-emerald-500/50 transition-colors group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-slate-700">
                  {destination.badge}
                </div>
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 text-white hover:text-emerald-400 border border-slate-700"
                >
                  <Heart
                    size={16}
                    className={favorites[destination.id] ? "fill-emerald-400 text-emerald-400" : ""}
                  />
                </button>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded text-xs font-bold text-white border border-slate-700">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span>{destination.rating}</span>
                  <span className="text-slate-400 font-normal">({destination.reviews})</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-2">
                    <MapPin size={14} />
                    <span>{destination.location}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{destination.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {destination.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-medium">Starting From</span>
                    <div className="text-xl font-bold text-white">
                      {destination.price}
                      <span className="text-xs text-slate-400 font-normal"> / guest</span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold transition-colors"
                  >
                    <span>Book</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}