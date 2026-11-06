
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDownRight,
  BookOpen,
  Compass,
  Mountain,
} from 'lucide-react';
import { storiesData } from '../../data/homeData';

const fallbackImages = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85',
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const StoriesSection = () => {
  const {
    heading = 'FROM THE FIELD',
    categories = [],
    button,
    articles = [],
  } = storiesData || {};

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  const getCategory = (category) => {
    return typeof category === 'string'
      ? category
      : category?.title || category?.name || '';
  };

  return (
    <section className="relative overflow-hidden bg-[#eae9e2] text-[#17252b] py-24 sm:py-32 lg:py-40">

      {/* SUBTLE BACKGROUND DETAIL */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#a9c5bc]/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="lg:col-span-8"
          >

            <div className="flex items-center gap-3 mb-7">

              <span className="w-9 h-px bg-[#398b7a]" />

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-[#398b7a]">
                The Sherpa Field Journal
              </span>

            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[100px] uppercase font-semibold tracking-[-0.065em] leading-[0.9]">
              {heading}
              <span className="text-[#398b7a]">.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm sm:text-base text-[#53636a] leading-relaxed">
              Stories from the mountains, knowledge from the trail
              and experiences worth carrying home.
            </p>

          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 lg:flex lg:justify-end"
          >

            <Link
              to={button?.link || '/blog'}
              className="group inline-flex items-center gap-4 border-b border-[#17252b]/30 pb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#398b7a] transition-colors"
            >
              {button?.label || 'EXPLORE THE JOURNAL'}

              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

          </motion.div>

        </div>


        {/* JOURNAL CONTENT */}
        {featuredArticle ? (

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* FEATURED STORY */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-7"
            >

              <Link
                to={featuredArticle.link || '/blog'}
                className="group block"
              >

                {/* FEATURE IMAGE */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#263b42]">

                  <img
                    src={featuredArticle.image || fallbackImages[0]}
                    alt={featuredArticle.imageAlt || featuredArticle.title || 'Mountain expedition journal'}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = fallbackImages[0];
                    }}
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07151b]/80 via-transparent to-black/10" />

                  {/* IMAGE LABEL */}
                  <div className="absolute top-5 left-5 sm:top-7 sm:left-7">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eae9e2] text-[#17252b] text-[9px] font-semibold tracking-[0.2em] uppercase">
                      <BookOpen className="w-3 h-3" />
                      FEATURED STORY
                    </span>
                  </div>

                  {/* IMAGE BOTTOM TEXT */}
                  <div className="absolute bottom-6 left-6 sm:bottom-9 sm:left-9 right-6 text-white">

                    <span className="text-[9px] uppercase tracking-[0.25em] text-teal-200">
                      {featuredArticle.category || 'EXPEDITION JOURNAL'}
                    </span>

                    <h3 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.04em] leading-tight">
                      {featuredArticle.title}
                    </h3>

                    <div className="mt-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]">
                      READ THE STORY
                      <span className="w-8 h-px bg-white/70 group-hover:w-14 transition-all duration-500" />
                    </div>

                  </div>

                </div>

                {/* FEATURE DESCRIPTION */}
                <div className="flex flex-col sm:flex-row justify-between gap-5 py-6 border-b border-[#17252b]/20">

                  <p className="max-w-xl text-sm sm:text-base text-[#53636a] leading-relaxed">
                    {featuredArticle.excerpt || featuredArticle.description || 'Discover the people, experiences and journeys behind this story.'}
                  </p>

                  <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full border border-[#17252b]/25 group-hover:bg-[#398b7a] group-hover:border-[#398b7a] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                </div>

              </Link>

            </motion.div>


            {/* SECONDARY STORIES */}
            <div className="lg:col-span-5 flex flex-col">

              <div className="flex justify-between items-center pb-5 border-b border-[#17252b]/20">

                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#398b7a]">
                  MORE FROM THE FIELD
                </span>

                <span className="text-[10px] font-mono text-[#83918f]">
                  01 — 0{otherArticles.length}
                </span>

              </div>

              <div className="flex-1">

                {otherArticles.map((article, index) => (

                  <motion.div
                    key={article.id || index}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.12 }}
                    className="border-b border-[#17252b]/20"
                  >

                    <Link
                      to={article.link || '/blog'}
                      className="group flex gap-5 sm:gap-6 py-6"
                    >

                      {/* THUMBNAIL */}
                      <div className="relative shrink-0 w-[112px] sm:w-[145px] aspect-[4/3] overflow-hidden bg-[#263b42]">

                        <img
                          src={article.image || fallbackImages[(index + 1) % fallbackImages.length]}
                          alt={article.imageAlt || article.title || 'Mountain story'}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = fallbackImages[(index + 1) % fallbackImages.length];
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                      </div>

                      {/* ARTICLE INFORMATION */}
                      <div className="flex flex-col justify-center min-w-0 flex-1">

                        <span className="text-[9px] uppercase tracking-[0.18em] text-[#398b7a]">
                          {article.category || 'FIELD NOTES'}
                        </span>

                        <h3 className="mt-2 text-base sm:text-xl font-semibold uppercase tracking-[-0.025em] leading-tight group-hover:text-[#398b7a] transition-colors">
                          {article.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-[#647278] leading-relaxed line-clamp-2">
                          {article.excerpt || article.description || 'Explore this story from the field.'}
                        </p>

                        <span className="mt-3 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] font-semibold">
                          READ MORE
                          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>

                      </div>

                    </Link>

                  </motion.div>

                ))}

                {otherArticles.length === 0 && (
                  <div className="py-12 text-sm text-[#647278] leading-relaxed">
                    More stories from the mountains are coming soon.
                  </div>
                )}

              </div>

            </div>

          </div>

        ) : (

          /* EMPTY JOURNAL STATE */
          <div className="border-y border-[#17252b]/20 py-16 sm:py-24 text-center">

            <Mountain className="w-10 h-10 mx-auto text-[#398b7a]" />

            <h3 className="mt-6 text-2xl sm:text-4xl font-semibold uppercase tracking-tight">
              STORIES FROM THE MOUNTAINS.
            </h3>

            <p className="mt-4 text-sm text-[#647278]">
              Our expedition journal is being prepared.
            </p>

          </div>

        )}


        {/* EDITORIAL CATEGORY INDEX */}
        {categories.length > 0 && (

          <div className="mt-24 sm:mt-32">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">

              <div className="flex items-center gap-3">

                <span className="w-7 h-px bg-[#398b7a]" />

                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#398b7a]">
                  EXPLORE BY SUBJECT
                </span>

              </div>

              <span className="text-[9px] tracking-[0.2em] uppercase text-[#83918f]">
                KNOWLEDGE / EXPERIENCE / EXPLORATION
              </span>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {categories.map((category, index) => (

                <motion.div
                  key={index}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >

                  <Link
                    to={typeof category === 'object' ? category.link || '/blog' : '/blog'}
                    className="relative flex items-center justify-between gap-4 p-5 sm:p-6 bg-[#f4f3ed] border border-[#17252b]/10 hover:bg-[#172d35] hover:border-[#172d35] transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <span className="text-[10px] font-mono text-[#398b7a] group-hover:text-teal-300">
                        0{index + 1}
                      </span>

                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] text-[#17252b] group-hover:text-white transition-colors">
                        {getCategory(category)}
                      </span>

                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[#398b7a] group-hover:text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  </Link>

                </motion.div>

              ))}

            </div>

          </div>

        )}


        {/* BOTTOM SIGNATURE */}
        <div className="mt-20 pt-8 border-t border-[#17252b]/20 flex flex-col sm:flex-row justify-between gap-4">

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#83918f]">
            THE SHERPA ESCAPES JOURNAL
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-[#398b7a]">
            WRITTEN BY THE MOUNTAINS. SHARED WITH THE WORLD.
          </span>

        </div>

      </div>

    </section>
  );
};

export default StoriesSection;
