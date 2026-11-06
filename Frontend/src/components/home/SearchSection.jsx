import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Compass } from 'lucide-react';
import Button from '../common/Button';

export const SearchSection = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (destination) query.set('q', destination);
    if (category) query.set('cat', category);
    if (duration) query.set('dur', duration);

    navigate(`/packages?${query.toString()}`);
  };

  return (
    <div className="relative -mt-10 sm:-mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 sm:p-6 border border-slate-100">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Destination Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Destination</span>
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Nepal, Alps, Iceland"
              className="w-full px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          {/* Activity Category Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              <span>Activity Type</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
            >
              <option value="">All Activities</option>
              <option value="trekking">Mountain Trekking</option>
              <option value="hiking">Alpine Hiking</option>
              <option value="cultural">Cultural Trails</option>
              <option value="expedition">Glacier Expedition</option>
            </select>
          </div>

          {/* Duration Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              <span>Duration</span>
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
            >
              <option value="">Any Duration</option>
              <option value="1-7">1 - 7 Days</option>
              <option value="8-14">8 - 14 Days</option>
              <option value="15+">15+ Days</option>
            </select>
          </div>

          {/* Submit Action */}
          <div className="pt-2 md:pt-4">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full justify-center h-[42px]"
              icon={Search}
            >
              Find Adventures
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;

