import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { packagesData } from '../../data/packagesData';
import { formatCurrency } from '../../utils/formatters';

export const PopularPackages = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              Curated Expeditions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Travel Packages
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              All-inclusive trekking packages with certified local guides, permits, luxury lodges, and 24/7 mountain support.
            </p>
          </div>
          <Link
            to="/packages"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {pkg.destination}
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{pkg.rating} ({pkg.reviewsCount})</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-sky-600" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-sky-600" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Price per person</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {formatCurrency(pkg.price)}
                    </span>
                  </div>
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

export default PopularPackages;

