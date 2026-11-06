
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Play,
} from 'lucide-react';
import { instagramData } from '../../data/homeData';

const fallbackReels = [
  {
    id: 'reel-1',
    title: 'Into the Himalayas',
    category: 'MOUNTAIN EXPEDITIONS',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'reel-2',
    title: 'Life on the Trail',
    category: 'TREKKING',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'reel-3',
    title: 'Beyond the Mountains',
    category: 'EXPLORATION',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'reel-4',
    title: 'Chasing Summits',
    category: 'ADVENTURE',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=85',
  },
];

const InstagramSection = () => {
  const { heading, description, handle, url, reels = [] } = instagramData || {};

  const sliderRef = useRef(null);
  const items = reels.length ? reels : fallbackReels;

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.7,
      behavior: 'smooth',
    });
  };

  const getEmbedUrl = (reelUrl) => {
    if (!reelUrl) return null;

    const cleanUrl = reelUrl.split('?')[0].replace(/\/$/, '');
    return `${cleanUrl}/embed`;
  };

  return (
    <section className="relative overflow-hidden bg-[#101d24] text-white py-24 sm:py-32 lg:py-40">

      {/* Background atmosphere */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="flex items-center gap-3 mb-6">

              <Instagram className="w-4 h-4 text-teal-400" />

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-teal-300">
                Visual Field Notes
              </span>

            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[84px] uppercase font-semibold tracking-[-0.055em] leading-[0.95]">
              {heading || 'FOLLOW THE JOURNEY'}
              <span className="text-teal-400">.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm sm:text-base text-white/55 leading-relaxed">
              {description || 'Expeditions. Training. Mountains. People. Stories from the field.'}
            </p>

          </motion.div>

          {/* INSTAGRAM PROFILE */}
          <a
            href={url || 'https://www.instagram.com/indiahikes/'}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 self-start lg:self-auto border-b border-white/30 pb-3 hover:border-teal-400 transition-colors"
          >

            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              {handle || '@INDIAHIKES'}
            </span>

            <ArrowUpRight className="w-4 h-4 text-teal-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

          </a>

        </div>


        {/* CAROUSEL CONTROLS */}
        <div className="flex justify-between items-center mb-7">

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            EXPLORE THE FEED
          </span>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous reels"
              className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-teal-400 hover:text-[#101d24] hover:border-teal-400 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next reels"
              className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-teal-400 hover:text-[#101d24] hover:border-teal-400 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>


        {/* REELS CAROUSEL */}
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
          style={{ scrollbarWidth: 'none' }}
        >

          {items.map((item, index) => {

            const embedUrl = getEmbedUrl(item.reelUrl);

            return (

              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative flex-none w-[75vw] sm:w-[280px] lg:w-[300px] snap-start"
              >

                <div className="relative aspect-[9/16] overflow-hidden bg-[#253840] rounded-sm">

                  {embedUrl ? (

                    <iframe
                      src={embedUrl}
                      title={item.title || 'Instagram Reel'}
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    />

                  ) : (

                    <a
                      href={item.link || url || 'https://www.instagram.com/indiahikes/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 block"
                      aria-label={`View ${item.title} on Instagram`}
                    >

                      <img
                        src={item.image}
                        alt={item.title || 'Mountain adventure'}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20" />

                      <div className="absolute top-5 left-5">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/80">
                          REEL / 0{index + 1}
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="w-14 h-14 rounded-full border border-white/60 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-400 group-hover:border-teal-400 transition-all duration-500">
                          <Play className="w-5 h-5 fill-white group-hover:fill-[#101d24] group-hover:text-[#101d24] ml-1" />
                        </div>

                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">

                        <span className="text-[9px] tracking-[0.2em] uppercase text-teal-300">
                          {item.category || 'FIELD NOTES'}
                        </span>

                        <h3 className="mt-3 text-xl sm:text-2xl font-semibold uppercase tracking-tight">
                          {item.title}
                        </h3>

                        <span className="inline-flex items-center gap-2 mt-5 text-[9px] uppercase tracking-[0.2em] text-white/75">
                          VIEW ON INSTAGRAM
                          <ArrowUpRight className="w-3 h-3" />
                        </span>

                      </div>

                    </a>

                  )}

                </div>

              </motion.div>

            );
          })}

        </div>


        {/* FOOTER */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-5">

          <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
            STORIES FROM THE MOUNTAINS
          </span>

          <a
            href={url || 'https://www.instagram.com/indiahikes/'}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300"
          >
            FOLLOW THE ADVENTURE
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
