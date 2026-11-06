import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import { packagesData } from '../../data/packagesData';
import { formatCurrency } from '../../utils/formatters';
import { Clock, Users, Star, ArrowRight, Search } from 'lucide-react';

export const Packages = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [selectedDestination, setSelectedDestination] = useState('All');

  const destinations = ['All', 'Nepal', 'Iceland', 'Italy'];

  const filteredPackages = packagesData.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDest =
      selectedDestination === 'All' || pkg.destination === selectedDestination;
    return matchesSearch && matchesDest;
  });

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb items={[{ name: 'Travel Packages' }]} />

        <SectionHeader
          badge="Curated Itineraries"
          title="All-Inclusive Travel & Trekking Packages"
          subtitle="Fixed departure dates and private custom departures tailored to your mountain aspirations."
        />

        {/* Filter bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search packages..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {destinations.map((dest) => (
              <button
                key={dest}
                onClick={() => setSelectedDestination(dest)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                  selectedDestination === dest
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
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

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
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

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
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

        {filteredPackages.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-base text-slate-600">No packages match your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDestination('All');
              }}
              className="mt-3 text-xs font-semibold text-sky-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default Packages;

