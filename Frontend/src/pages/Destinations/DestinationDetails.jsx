import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import { travelService } from '../../services/travelService';
import { formatCurrency } from '../../utils/formatters';
import { MapPin, Star, Calendar, Activity, Check, ArrowRight } from 'lucide-react';

export const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    travelService.getDestinationById(id).then((data) => {
      setDestination(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader fullScreen />;

  if (!destination) {
    return (
      <PageContainer>
        <div className="text-center py-24">
          <h2 className="text-2xl font-bold text-slate-800">Destination Not Found</h2>
          <p className="text-sm text-slate-500 mt-2">The destination you are looking for does not exist or has been relocated.</p>
          <Link to="/destinations" className="mt-4 inline-block">
            <Button variant="primary">Back to Destinations</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb
          items={[
            { name: 'Destinations', path: '/destinations' },
            { name: destination.title },
          ]}
        />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white my-6 h-[400px]">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {destination.category}
                </span>
                <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{destination.rating} ({destination.reviewsCount} reviews)</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {destination.title}
              </h1>
              <div className="flex items-center gap-2 text-slate-300 text-sm mt-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{destination.country}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-right">
              <span className="text-xs text-slate-300 block">Starting from</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {formatCurrency(destination.priceFrom)}
              </span>
            </div>
          </div>
        </div>

        {/* Overview & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About this Region</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.description}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">
                Our expeditions through this region are fully supported by high-altitude specialists, offering comprehensive gear support, luxury teahouse/lodge bookings, and custom acclimatization schedules for an optimal experience.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-4">What's Included in Expeditions</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified High-Altitude Sherpa Guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All Conservation & National Park Permits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Luggage Porter Support (15kg allowance)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Satellite Communications & Emergency Oxygen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">Key Information</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-sky-600" />
                    <span>Trek Grade</span>
                  </span>
                  <span className="font-semibold text-slate-800">{destination.difficulty}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-sky-600" />
                    <span>Best Window</span>
                  </span>
                  <span className="font-semibold text-slate-800">{destination.bestSeason}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    <span>Country</span>
                  </span>
                  <span className="font-semibold text-slate-800">{destination.country}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/booking" className="block w-full">
                  <Button variant="primary" className="w-full justify-center">
                    Book This Expedition
                  </Button>
                </Link>
                <Link to="/packages" className="block w-full mt-2">
                  <Button variant="outline" className="w-full justify-center">
                    Browse All Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default DestinationDetails;

