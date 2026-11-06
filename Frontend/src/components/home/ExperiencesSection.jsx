
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  MapPin
} from 'lucide-react';

import { experiencesData } from '../../data/homeData';

const fallbackImage =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85';


/* =========================================
   INDIVIDUAL EXPERIENCE SHOWCASE
========================================= */

const ExperienceShowcase = ({ experience, index, total }) => {

  const carouselRef = useRef(null);

  const journeys = experience.journeys || [];

  const [selectedJourney, setSelectedJourney] = useState(
    journeys[0] || null
  );

  // Carousel navigation
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction * 260,
      behavior: 'smooth'
    });
  };

  return (

    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative min-h-[760px] sm:min-h-[780px] lg:min-h-[820px] overflow-hidden bg-[#18232b]"
    >

      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">

        <motion.img
          key={experience.image}
          src={experience.image || fallbackImage}
          alt={experience.imageAlt || experience.title}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackImage;
          }}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

      </AnimatePresence>


      {/* BACKGROUND OVERLAYS */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-black/20 to-transparent" />


      {/* EXPERIENCE CONTENT */}
      <div className="relative z-10 min-h-[760px] sm:min-h-[780px] lg:min-h-[820px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">

        {/* TOP LABEL */}
        <div className="flex items-center justify-between">

          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/80">
            EXPERIENCE / 0{index + 1}
          </span>

          <span className="text-[10px] sm:text-xs tracking-widest text-white/70">
            0{index + 1} — 0{total}
          </span>

        </div>


        {/* EXPERIENCE HEADING */}
        <div className="max-w-3xl mt-16 mb-14">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/65 mb-5"
          >
            {experience.eyebrow || 'DISCOVER THE MOUNTAINS'}
          </motion.span>

          <h3 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-semibold uppercase tracking-[-0.05em] leading-[0.95]">
            {experience.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            {experience.shortDescription}
          </p>

          <Link
            to={experience.link || '/experiences'}
            className="inline-flex items-center gap-3 mt-7 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white border-b border-white/50 pb-2 hover:border-white transition-colors"
          >
            DISCOVER THIS EXPERIENCE
            <ArrowUpRight className="w-4 h-4" />
          </Link>

        </div>


        {/* JOURNEY CAROUSEL */}
        {journeys.length > 0 && (

          <div className="bg-[#101820]/75 backdrop-blur-xl border border-white/15 p-5 sm:p-7 lg:p-8">

            {/* CAROUSEL HEADER */}
            <div className="flex items-center justify-between gap-4 mb-6">

              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/45">
                  EXPLORE THE JOURNEYS
                </span>

                <h4 className="mt-2 text-lg sm:text-xl font-medium uppercase tracking-wide">
                  FIND YOUR NEXT EXPERIENCE
                </h4>
              </div>


              {/* CAROUSEL CONTROLS */}
              <div className="flex items-center gap-2 shrink-0">

                <button
                  type="button"
                  onClick={() => scrollCarousel(-1)}
                  aria-label="Previous journeys"
                  className="w-10 h-10 flex items-center justify-center border border-white/25 text-white hover:bg-white hover:text-[#101820] transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollCarousel(1)}
                  aria-label="Next journeys"
                  className="w-10 h-10 flex items-center justify-center border border-white/25 text-white hover:bg-white hover:text-[#101820] transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

            </div>


            {/* JOURNEY THUMBNAILS */}
            <div
              ref={carouselRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#64748b transparent'
              }}
            >

              {journeys.map((journey, journeyIndex) => {

                const isSelected =
                  selectedJourney?.id === journey.id;

                return (

                  <button
                    type="button"
                    key={journey.id || journeyIndex}
                    onClick={() => setSelectedJourney(journey)}
                    aria-pressed={isSelected}
                    className={`group relative flex-none w-[180px] sm:w-[210px] text-left snap-start transition-all duration-300 ${isSelected
                        ? 'opacity-100'
                        : 'opacity-55 hover:opacity-100'
                      }`}
                  >

                    {/* THUMBNAIL */}
                    <div className={`relative h-[115px] sm:h-[140px] overflow-hidden border transition-colors duration-300 ${isSelected
                        ? 'border-white'
                        : 'border-white/15'
                      }`}>

                      <img
                        src={journey.image || fallbackImage}
                        alt={journey.imageAlt || journey.title}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = fallbackImage;
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />

                      {isSelected && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white" />
                      )}

                    </div>


                    {/* THUMBNAIL TITLE */}
                    <div className="mt-3">

                      <span className="text-[9px] text-white/45 tracking-widest">
                        JOURNEY / 0{journeyIndex + 1}
                      </span>

                      <h5 className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white">
                        {journey.title}
                      </h5>

                      {journey.location && (
                        <span className="mt-1 flex items-center gap-1 text-[9px] text-white/50">
                          <MapPin className="w-3 h-3" />
                          {journey.location}
                        </span>
                      )}

                    </div>

                  </button>

                );
              })}

            </div>


            {/* SELECTED JOURNEY DETAILS */}
            <AnimatePresence mode="wait">

              {selectedJourney && (

                <motion.div
                  key={selectedJourney.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6 pt-6 mt-3 border-t border-white/15"
                >

                  <div className="max-w-2xl">

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                      SELECTED JOURNEY
                    </span>

                    <h4 className="mt-2 text-xl sm:text-2xl font-semibold uppercase tracking-tight">
                      {selectedJourney.title}
                    </h4>

                    {selectedJourney.location && (
                      <span className="flex items-center gap-2 mt-2 text-xs text-white/55">
                        <MapPin className="w-3.5 h-3.5" />
                        {selectedJourney.location}
                      </span>
                    )}

                    <p className="mt-3 text-sm text-white/70 leading-relaxed">
                      {selectedJourney.description}
                    </p>

                  </div>


                  <Link
                    to={selectedJourney.link || experience.link || '/experiences'}
                    className="inline-flex items-center justify-center gap-3 px-5 py-3.5 border border-white/50 text-[10px] sm:text-xs uppercase tracking-[0.15em] whitespace-nowrap hover:bg-white hover:text-[#101820] transition-all"
                  >
                    EXPLORE JOURNEY
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        )}

      </div>

    </motion.article>

  );
};


/* =========================================
   MAIN EXPERIENCES SECTION
========================================= */

const ExperiencesSection = () => {

  const {
    heading = 'OUR EXPERIENCES',
    experiences = [],
    additionalExperiences = [],
    button
  } = experiencesData || {};

  return (

    <section className="relative bg-[#101820] text-white py-24 sm:py-32 overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">


        {/* SECTION INTRODUCTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">

          <div className="max-w-3xl">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-6"
            >
              <span className="w-8 h-px bg-white/50" />
              WHAT WE DO
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-semibold uppercase tracking-[-0.05em] leading-[0.95]"
            >
              {heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-7 max-w-xl text-base sm:text-lg text-white/55 leading-relaxed"
            >
              Different ways to experience the mountains.
              One shared connection with the landscape.
            </motion.p>

          </div>


          {button && (

            <Link
              to={button.link}
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white border-b border-white/30 hover:border-white pb-3 transition-all self-start md:self-auto"
            >
              {button.label}

              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

          )}

        </div>


        {/* EXPERIENCE SHOWCASES */}
        <div className="space-y-12 sm:space-y-16">

          {experiences.map((experience, index) => (

            <ExperienceShowcase
              key={experience.id || index}
              experience={experience}
              index={index}
              total={experiences.length}
            />

          ))}

        </div>


        {/* ADDITIONAL EXPERIENCES */}
        {additionalExperiences.length > 0 && (

          <div className="mt-24 sm:mt-32 pt-10 border-t border-white/15">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

              <div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  BEYOND THE FOUR DISCIPLINES
                </span>

                <h3 className="mt-3 text-xl sm:text-2xl font-medium uppercase tracking-tight">
                  AND THERE'S MORE TO EXPLORE.
                </h3>

              </div>


              <div className="flex flex-wrap gap-x-7 gap-y-4">

                {additionalExperiences.map((item) => (

                  <Link
                    key={item.id}
                    to={item.link}
                    className="group flex items-center gap-2 text-xs sm:text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {item.title}

                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                  </Link>

                ))}

              </div>

            </div>

          </div>

        )}

      </div>

    </section>

  );

};

export default ExperiencesSection;
