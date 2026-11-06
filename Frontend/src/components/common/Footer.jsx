import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';
import { SITE_NAME, CONTACT_INFO, NAV_LINKS } from '../../utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center shadow-lg shadow-sky-600/30">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block">
                  {SITE_NAME}
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-sky-400 block">
                  Authentic High-Altitude Journeys
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Curating responsible, authentic, and awe-inspiring travel experiences
              across the world’s most spectacular mountain ranges and natural wonders.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-sky-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Regions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Top Regions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/destinations" className="hover:text-sky-400 transition-colors">
                  Himalayas (Nepal)
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-sky-400 transition-colors">
                  Swiss & French Alps
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-sky-400 transition-colors">
                  Patagonia & Andes
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-sky-400 transition-colors">
                  Dolomites (Italy)
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-sky-400 transition-colors">
                  Kyoto & Mount Fuji
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive handpicked expedition guides, secret trails, and early-bird seasonal discounts.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Sherpa Travels updates!');
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with care for global adventurers</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

