import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import { destinationsData } from '../../data/destinationsData';
import { formatCurrency } from '../../utils/formatters';
import { Star, MapPin, Search } from 'lucide-react';

export const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Trekking & Mountains', 'Scenic & Hiking', 'Cultural & Heritage', 'Expedition & Wilderness'];

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesSearch =
      dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb items={[{ name: 'Destinations' }]} />

        <SectionHeader
          badge="Global Footprint"
          title="Iconic Mountain & Wilderness Destinations"
          subtitle="Explore the world’s most legendary summits, valleys, and ancient paths curated for high-altitude dreamers."
        />

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by country or peak..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
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

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-600 mb-1">
                    <span>{dest.category}</span>
                    <span className="text-slate-400 font-normal">Best: {dest.bestSeason}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Starting from</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {formatCurrency(dest.priceFrom)}
                    </span>
                  </div>
                  <Link
                    to={`/destinations/${dest.id}`}
                    className="text-xs font-semibold px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors"
                  >
                    Explore Region
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-base text-slate-600">No destinations match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
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

export default Destinations;

