import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Mountain,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Compass,
  Star,
} from 'lucide-react';
import { packagesData } from '../../data/packagesData';
import { formatCurrency } from '../../utils/formatters';

/**
 * FeaturedPackagesPopup Component
 *
 * Cinematic modal showcasing curated travel packages.
 * - Displays on initial entry and browser refresh.
 * - Stays closed during internal React Router client navigation.
 * - Uses in-memory state (no sessionStorage/localStorage suppression).
 * - Full carousel with touch swipe, keyboard arrows, and Framer Motion transitions.
 */
export const FeaturedPackagesPopup = () => {
  const navigate = useNavigate();

  // Controls modal visibility - true on initial app load and hard browser refresh
  const [isOpen, setIsOpen] = useState(true);

  // Active package index in carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide direction: 1 = forward (slide from right), -1 = backward (slide from left)
  const [direction, setDirection] = useState(1);

  // Touch tracking for mobile swipe gestures
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Curate 3 to 4 prioritized featured packages (Nepal, Iceland, Italian Dolomites)
  const featuredPackages = packagesData.slice(0, 4);
  const currentPkg = featuredPackages[currentIndex] || featuredPackages[0];

  // Carousel Navigation Handlers
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? featuredPackages.length - 1 : prev - 1));
  }, [featuredPackages.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === featuredPackages.length - 1 ? 0 : prev + 1));
  }, [featuredPackages.length]);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  // Keyboard controls: Escape to close, Left/Right arrows for carousel
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose, handlePrev, handleNext]);

  // Prevent background scrolling while modal is open, restoring cleanly on close
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Mobile Touch Swipe Handlers
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext(); // Left swipe -> next
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // Right swipe -> prev
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Animation variants for smooth horizontal package transitions
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Backdrop with high blur and subtle dark tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="featured-popup-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-4xl lg:max-w-5xl bg-[#07111c] border border-cyan-500/25 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan-950/60 text-white overflow-hidden my-auto max-h-[94vh] flex flex-col"
          >
            {/* Top Header Section */}
            <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4 bg-gradient-to-b from-[#0e1d2e] to-[#07111c]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase">
                    Featured Expeditions
                  </span>
                </div>
                <h2
                  id="featured-popup-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white"
                >
                  FIND YOUR NEXT ADVENTURE
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Explore our handpicked journeys across extraordinary landscapes.
                </p>
              </div>

              {/* Counter Indicator & Close Button */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="font-mono text-xs sm:text-sm text-cyan-300 font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(featuredPackages.length).padStart(2, '0')}
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close featured packages popup"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Carousel Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] sm:min-h-[420px]">
                {/* Left Side: Cinematic Package Image */}
                <div className="md:col-span-5 relative h-56 sm:h-72 md:h-full min-h-[220px] md:min-h-[380px] overflow-hidden bg-slate-900 group">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                      key={currentPkg.id}
                      src={currentPkg.image}
                      alt={currentPkg.title}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                  </AnimatePresence>

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111c] via-[#07111c]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#07111c]/60" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#07111c]/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-[11px] font-bold text-cyan-300 tracking-wider uppercase">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentPkg.destination}</span>
                  </div>

                  {currentPkg.rating && (
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#07111c]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs font-semibold text-white">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{currentPkg.rating}</span>
                      {currentPkg.reviewsCount && (
                        <span className="text-slate-400 text-[10px]">({currentPkg.reviewsCount})</span>
                      )}
                    </div>
                  )}

                  {/* On-image Quick Arrow Navigation (useful on tablets and mobile) */}
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between md:hidden pointer-events-none">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous package"
                      className="pointer-events-auto p-2 rounded-full bg-slate-950/70 text-white backdrop-blur-xs border border-white/10 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next package"
                      className="pointer-events-auto p-2 rounded-full bg-slate-950/70 text-white backdrop-blur-xs border border-white/10 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Editorial Package Details */}
                <div className="md:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-5">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentPkg.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-4"
                    >
                      {/* Package Title & Description */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                          {currentPkg.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                          {currentPkg.description}
                        </p>
                      </div>

                      {/* Vital Specs Grid */}
                      <div className="grid grid-cols-3 gap-2 py-2">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                          <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                            Duration
                          </span>
                          <span className="text-xs font-bold text-white block mt-0.5 truncate">
                            {currentPkg.duration}
                          </span>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                          <Mountain className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                            Difficulty
                          </span>
                          <span className="text-xs font-bold text-white block mt-0.5 truncate">
                            {currentPkg.difficulty || 'Moderate'}
                          </span>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                          <Users className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                            Group Size
                          </span>
                          <span className="text-xs font-bold text-white block mt-0.5 truncate">
                            {currentPkg.groupSize || 'Small Team'}
                          </span>
                        </div>
                      </div>

                      {/* Departure Dates (if available) */}
                      {currentPkg.departureDates && currentPkg.departureDates.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            Upcoming Departures
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {currentPkg.departureDates.map((date, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] sm:text-xs bg-cyan-950/60 text-cyan-200 border border-cyan-500/30 px-2.5 py-0.5 rounded-md font-medium"
                              >
                                {date}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Inclusions (if available) */}
                      {currentPkg.inclusions && currentPkg.inclusions.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                            Key Inclusions
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {currentPkg.inclusions.map((inclusion, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] bg-white/5 text-slate-300 border border-white/10 px-2 py-0.5 rounded-md"
                              >
                                {inclusion}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Price Highlight */}
                      <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 block font-medium">
                            Starting price in INR
                          </span>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
                              {formatCurrency(currentPkg.price)}
                            </span>
                            <span className="text-xs text-slate-400">/ person</span>
                          </div>
                        </div>

                        {/* Desktop Carousel Arrows & Dots */}
                        <div className="hidden sm:flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handlePrev}
                            aria-label="Previous package"
                            className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/10 hover:border-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <div className="flex items-center gap-1.5 px-1">
                            {featuredPackages.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  idx === currentIndex ? 'w-5 bg-cyan-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                              />
                            ))}
                          </div>
                          <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next package"
                            className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/10 hover:border-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Bottom Actions Section */}
            <div className="px-5 sm:px-8 py-3.5 sm:py-4 bg-slate-950/70 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="text-center sm:text-left">
                <button
                  type="button"
                  onClick={() => handleNavigate('/contact')}
                  className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 hover:text-cyan-400 transition-colors uppercase inline-flex items-center gap-1 group"
                >
                  <span>NOT SURE WHERE TO GO? TALK TO OUR TEAM.</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-cyan-400" />
                </button>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleNavigate(`/booking?package=${currentPkg.id}`)}
                  className="flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all text-center"
                >
                  ENQUIRE NOW
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate(`/packages/${currentPkg.id}`)}
                  className="flex-1 sm:flex-initial px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>VIEW PACKAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeaturedPackagesPopup;

