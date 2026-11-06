import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  PhoneCall,
  ArrowUpRight,
} from 'lucide-react';

import {
  NAV_LINKS,
  SITE_NAME,
  CONTACT_INFO
} from '../../utils/constants';

import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 25;

  // Automatically close mobile menu when navigating to a new route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Dynamic styling based on current page and scroll position:
  // - Homepage: Starts transparent at the top, turns dark on scroll (preserving original design)
  // - Internal pages: Always dark navy (#07111c) so it never blends into light page backgrounds
  const headerBackground = isHomePage
    ? isScrolled
      ? 'bg-[#07111c]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
      : 'bg-transparent border-b border-transparent'
    : isScrolled
      ? 'bg-[#07111c]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30'
      : 'bg-[#07111c] border-b border-white/10 shadow-md shadow-black/25 backdrop-blur-xl';

  const headerPadding = isHomePage
    ? isScrolled ? 'py-3' : 'py-6'
    : isScrolled ? 'py-3' : 'py-4';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBackground}`}
    >
      {/* MAIN NAVBAR */}
      <div
        className={`max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-300 ${headerPadding}`}
      >
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5 text-white"
          >
            {/* Logo Image */}
            <img
              src="/images/logo.png"
              alt="Sherpa Escapes"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Brand Name */}
            <div className="flex flex-col justify-center gap-0">
              <span className="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase leading-none font-display text-white">
                {SITE_NAME}
              </span>

              <span className="text-[8px] tracking-[0.12em] uppercase text-white/60 leading-none mt-1">
                Mountains · People · Exploration
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 group ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-cyan-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              to="/booking"
              className="group flex items-center gap-2.5 px-5 py-2.5 border border-cyan-400/50 text-white hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                Plan Your Journey
              </span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white border border-white/30 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#07111c]/98 backdrop-blur-2xl border-t border-white/10 px-7 py-8 shadow-2xl">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 border-b border-white/10 text-xs sm:text-sm uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-white/70 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 space-y-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-3 text-xs text-white/70 hover:text-cyan-400 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <Link
              to="/booking"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-3 w-full bg-cyan-400 text-slate-950 py-3.5 text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-cyan-400/20"
            >
              <span>Plan Your Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
