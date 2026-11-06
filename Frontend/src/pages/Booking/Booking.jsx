import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/common/Button';
import { packagesData } from '../../data/packagesData';
import { formatCurrency } from '../../utils/formatters';
import { CheckCircle2, Shield, Calendar, Users, MapPin, CreditCard } from 'lucide-react';

export const Booking = () => {
  const [selectedPackageId, setSelectedPackageId] = useState(packagesData[0].id);
  const [travelersCount, setTravelersCount] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: '',
  });

  const currentPackage = packagesData.find((p) => p.id === selectedPackageId) || packagesData[0];
  const totalPrice = currentPackage.price * Number(travelersCount);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb items={[{ name: 'Trip Booking' }]} />

        <SectionHeader
          badge="Expedition Reservation"
          title="Reserve Your Spot on the Trail"
          subtitle="Lock in your departure date with no upfront risk. Full refund available up to 45 days prior."
        />

        {submitted ? (
          <div className="max-w-2xl mx-auto my-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-bold text-slate-900">Reservation Request Confirmed!</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. We have received your booking request for{' '}
              <strong className="text-sky-700">{currentPackage.title}</strong> for {travelersCount} traveler(s).
            </p>
            <p className="text-xs text-slate-500">
              A preliminary itinerary, gear checklist, and invoice details have been dispatched to <strong>{formData.email}</strong>.
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                Make Another Reservation
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-8">
                {/* Step 1: Package Selection */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">1</span>
                    Select Your Travel Package
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {packagesData.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          selectedPackageId === pkg.id
                            ? 'border-sky-600 bg-sky-50/50 ring-2 ring-sky-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                            {pkg.destination}
                          </span>
                          <span className="text-sm font-extrabold text-slate-900">
                            {formatCurrency(pkg.price)}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">{pkg.title}</h4>
                        <span className="text-xs text-slate-500 mt-1 block">{pkg.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2: Trip Parameters */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">2</span>
                    Date & Group Size
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Preferred Departure Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Number of Travelers *
                      </label>
                      <select
                        value={travelersCount}
                        onChange={(e) => setTravelersCount(Number(e.target.value))}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Traveler' : 'Travelers'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Traveler Details */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">3</span>
                    Lead Traveler Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="United States, Canada, etc."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Special Requests / Dietary Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Vegetarian meals, sleeping bag rental needed, prior altitude experience, etc."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  Confirm Reservation Request
                </Button>
              </form>
            </div>

            {/* Price Summary Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-5 sticky top-28">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Reservation Summary
                </h3>

                <div className="flex gap-3">
                  <img
                    src={currentPackage.image}
                    alt={currentPackage.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{currentPackage.title}</h4>
                    <span className="text-xs text-sky-600 font-medium block mt-1">
                      {currentPackage.destination}
                    </span>
                    <span className="text-xs text-slate-400 block">{currentPackage.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs border-t border-slate-100 pt-4">
                  <div className="flex justify-between text-slate-600">
                    <span>Base Price per person:</span>
                    <span>{formatCurrency(currentPackage.price)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Travelers:</span>
                    <span>{travelersCount}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Permits & National Park Fees:</span>
                    <span className="text-emerald-600 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Certified Sherpa Guide:</span>
                    <span className="text-emerald-600 font-medium">Included</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Estimated Total</span>
                    <span className="text-2xl font-extrabold text-slate-900">
                      {formatCurrency(totalPrice)}
                    </span>
                  </div>
                </div>

                <div className="bg-sky-50 p-3.5 rounded-xl text-[11px] text-sky-800 flex items-start gap-2">
                  <Shield className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    No upfront payment required today. An expedition coordinator will confirm departure dates and process secure payment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default Booking;

