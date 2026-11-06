import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { destinationsData } from '../../data/destinationsData';
import { formatCurrency } from '../../utils/formatters';

export const FeaturedDestinations = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              Explore The World
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Destinations
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Hand-picked mountain ranges and legendary trekking routes offering unmatched scenery and cultural depth.
            </p>
          </div>
          <Link
            to="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.slice(0, 4).map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-slate-800 shadow-xs">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{dest.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md flex items-center gap-1 text-xs font-medium text-white">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  <span>{dest.country}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-600">
                    {dest.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {dest.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Starting from</span>
                    <span className="text-lg font-bold text-slate-900">
                      {formatCurrency(dest.priceFrom)}
                    </span>
                  </div>
                  <Link
                    to={`/destinations/${dest.id}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

