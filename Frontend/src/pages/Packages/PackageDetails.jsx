import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import { travelService } from '../../services/travelService';
import { formatCurrency } from '../../utils/formatters';
import { Clock, Users, Star, Check, X, Shield, Calendar, ArrowRight } from 'lucide-react';

export const PackageDetails = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    travelService.getPackageById(id).then((data) => {
      setPkg(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader fullScreen />;

  if (!pkg) {
    return (
      <PageContainer>
        <div className="text-center py-24">
          <h2 className="text-2xl font-bold text-slate-800">Package Not Found</h2>
          <p className="text-sm text-slate-500 mt-2">The package you requested does not exist.</p>
          <Link to="/packages" className="mt-4 inline-block">
            <Button variant="primary">Browse Packages</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const sampleItinerary = [
    { day: 'Day 01', title: 'Arrival & Welcome Dinner', desc: 'Transfer from airport to hotel, orientation briefing and gear inspection with lead Sherpa guide.' },
    { day: 'Day 02-04', title: 'Trek Launch & Lower Valley Trail', desc: 'Acclimatization trek through pine forests, suspension bridges, and Sherpa cultural villages.' },
    { day: 'Day 05-08', title: 'Alpine Ascent & High Pass Crossing', desc: 'Crossing high mountain passes with panoramic 360-degree views of Himalayan giants.' },
    { day: 'Day 09-12', title: 'Destination Summit / Base Camp', desc: 'Reaching the highlight landmark, exploration, sunrise vistas, and safe descent.' },
  ];

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb
          items={[
            { name: 'Packages', path: '/packages' },
            { name: pkg.title },
          ]}
        />

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white my-6 h-[400px]">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {pkg.destination}
                </span>
                <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{pkg.rating} ({pkg.reviewsCount} reviews)</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {pkg.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-300 text-sm mt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-sky-400" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-sky-400" />
                  {pkg.groupSize}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-right">
              <span className="text-xs text-slate-300 block">Total per person</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {formatCurrency(pkg.price)}
              </span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Expedition Overview</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pkg.description}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                Experience world-class guiding, authentic mountain hospitality, and the sheer thrill of remote wilderness with our handpicked expedition team.
              </p>
            </div>

            {/* Daily Itinerary */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Outline Itinerary</h2>
              <div className="space-y-6">
                {sampleItinerary.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-20 text-xs font-bold text-sky-600 uppercase tracking-wider pt-0.5">
                      {item.day}
                    </div>
                    <div className="border-l-2 border-slate-100 pl-4 space-y-1">
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>All lodge accommodation during trek</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>All meals (Breakfast, Lunch, Dinner)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Licensed high-altitude English guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>All permits & national park fees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  What's Not Included
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>International airfare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Travel & medical rescue insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Personal trekking gear & snacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Tipping for guides and porters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Widget */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Starting from</span>
                  <span className="text-2xl font-extrabold text-slate-900">
                    {formatCurrency(pkg.price)}
                  </span>
                </div>
                <span className="text-xs text-slate-500">per traveler</span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-sky-600" />
                  <span>Free cancellation up to 45 days prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span>Flexible date rescheduling available</span>
                </div>
              </div>

              <Link to="/booking" className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Reserve Your Spot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default PackageDetails;

