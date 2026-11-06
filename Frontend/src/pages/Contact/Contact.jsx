import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Breadcrumb from '../../components/shared/Breadcrumb';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/common/Button';
import { CONTACT_INFO } from '../../utils/constants';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 py-4 sm:py-8">
      <PageContainer>
        <Breadcrumb items={[{ name: 'Contact Us' }]} />

        <SectionHeader
          badge="Get in Touch"
          title="Plan Your Next High-Altitude Journey"
          subtitle="Our mountain specialists and expedition planners are here to craft your dream adventure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Contact Information</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Whether you have questions about fitness prep, custom group bookings, or permit requirements, reach out anytime.
              </p>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Expedition Office</span>
                    <span className="text-slate-500">{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Direct Phone</span>
                    <span className="text-slate-500">{CONTACT_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Email Inquiries</span>
                    <span className="text-slate-500">{CONTACT_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Operating Hours</span>
                    <span className="text-slate-500">{CONTACT_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for contacting Sherpa Travels. One of our expedition coordinators will review your inquiry and get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
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
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Destination of Interest
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Everest, Swiss Alps, Iceland"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Tell Us About Your Plans & Questions *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Estimated travel window, party size, fitness level, or specific requirements..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full sm:w-auto">
                    Send Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default Contact;

