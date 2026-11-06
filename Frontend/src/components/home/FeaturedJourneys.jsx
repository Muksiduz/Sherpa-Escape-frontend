
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { featuredJourneysData } from '../../data/homeData';

const fallbackImages = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1800&q=85'
];

const cardLayouts = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7'
];

const JourneyShowcaseCard = ({ category, index }) => {
  const image = category.image || fallbackImages[index % 4];

  const tags =
    category.tags ||
    category.journeys ||
    category.highlights ||
    category.items ||
    [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`group relative ${cardLayouts[index % 4]} h-[430px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-[#17232d]`}
    >
      <Link
        to={category.link || '/experiences'}
        className="absolute inset-0 block"
        aria-label={`Explore ${category.title}`}
      >

        {/* BACKGROUND IMAGE */}
        <motion.img
          src={image}
          alt={category.imageAlt || category.title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackImages[index % 4];
          }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c15] via-[#050c15]/35 to-black/10 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />


        {/* CARD CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-9 lg:p-11">

          {/* TOP ROW */}
          <div className="flex justify-between items-start">

            <div className="flex items-center gap-3">

              <span className="w-7 h-px bg-emerald-300" />

              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium text-white/80">
                EXPEDITION / {String(index + 1).padStart(2, '0')}
              </span>

            </div>

            <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#101820] group-hover:border-white group-hover:rotate-45">

              <ArrowUpRight className="w-5 h-5" />

            </span>

          </div>


          {/* BOTTOM CONTENT */}
          <div className="max-w-2xl">

            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="block text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-emerald-200 mb-4"
            >
              {category.eyebrow || 'EXPLORE THE HIMALAYAS'}
            </motion.span>


            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-[-0.045em] leading-[0.98] text-white transition-transform duration-700 group-hover:-translate-y-2">
              {category.title}
            </h3>


            {category.description && (
              <p className="mt-5 max-w-lg text-sm sm:text-base text-white/75 leading-relaxed">
                {category.description}
              </p>
            )}


            {/* JOURNEY TAGS */}
            {tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">

                {tags.slice(0, 5).map((tag, tagIndex) => {

                  const label =
                    typeof tag === 'string'
                      ? tag
                      : tag.title || tag.name || '';

                  return (
                    <span
                      key={tag.id || tagIndex}
                      className="px-3 py-2 border border-white/25 bg-black/20 backdrop-blur-sm text-[8px] sm:text-[9px] uppercase tracking-[0.12em] text-white/85 transition-colors group-hover:border-white/50"
                    >
                      {label}
                    </span>
                  );
                })}

              </div>
            )}


            {/* EXPLORE LINK */}
            <div className="mt-8 flex items-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white">

              <span className="border-b border-white/60 pb-2">
                EXPLORE {category.title}
              </span>

              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

          </div>

        </div>

      </Link>
    </motion.article>
  );
};


const FeaturedJourneys = () => {

  const {
    heading = 'CHOOSE YOUR NEXT EXPERIENCE',
    categories = []
  } = featuredJourneysData || {};

  return (

    <section className="relative bg-[#080e18] text-white py-24 sm:py-32 lg:py-40 overflow-hidden">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[140px] rounded-full" />

      </div>


      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">

          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-7"
            >

              <span className="w-9 h-px bg-emerald-300" />

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                EXPEDITION ROUTES & PORTFOLIOS
              </span>

            </motion.div>


            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold uppercase tracking-[-0.055em] leading-[0.95]"
            >
              {heading}
            </motion.h2>

          </div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xs lg:pb-2"
          >

            <p className="text-sm sm:text-base text-white/45 leading-relaxed">
              From high-altitude summits to remote Himalayan valleys.
              Find the journey that calls to you.
            </p>

          </motion.div>

        </div>


        {/* ASYMMETRIC EXPEDITION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">

          {categories.map((category, index) => (

            <JourneyShowcaseCard
              key={category.id || index}
              category={category}
              index={index}
            />

          ))}

        </div>


        {/* BOTTOM EDITORIAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4"
        >

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            BEYOND THE KNOWN
          </span>

          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60">
            NEW VALLEYS. NEW ROUTES. NEW STORIES.
          </span>

        </motion.div>

      </div>

    </section>

  );
};

export default FeaturedJourneys;
