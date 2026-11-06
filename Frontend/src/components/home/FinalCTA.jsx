
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mountain,
  Compass,
  MoveDown
} from 'lucide-react';
import { finalCTAData } from '../../data/homeData';

const backgroundImage =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90';

const FinalCTA = () => {
  const {
    heading = 'WHERE DO YOU WANT THE MOUNTAINS TO TAKE YOU?',
    description = '',
    buttons = []
  } = finalCTAData || {};

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[750px] lg:min-h-[850px] flex items-center overflow-hidden bg-[#07111c] text-white">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: 'easeOut'
        }}
        className="absolute inset-0"
      >
        <img
          src={backgroundImage}
          alt="Himalayan mountain landscape"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 bg-[#07111c]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050b15]/95 via-[#07111c]/75 to-[#07111c]/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050b15] via-transparent to-[#050b15]/30" />

      {/* SUBTLE ACCENT */}
      <div className="absolute top-0 left-0 w-40 h-[2px] bg-cyan-400" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 py-28 lg:py-36">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-end">

          {/* MAIN CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-9"
          >

            {/* EYEBROW */}
            <motion.div
              variants={reveal}
              className="flex items-center gap-4 mb-10"
            >
              <span className="w-10 h-px bg-cyan-400" />

              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-cyan-300">
                Begin Your Journey
              </span>

            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={reveal}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[104px] font-semibold uppercase tracking-[-0.065em] leading-[0.94] max-w-6xl"
            >
              {heading}
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={reveal}
              className="mt-9 max-w-2xl text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* BUTTONS */}
            {buttons.length > 0 && (
              <motion.div
                variants={reveal}
                className="mt-12 flex flex-col sm:flex-row gap-4"
              >
                {buttons.map((btn, index) => {
                  const isPrimary = btn.variant === 'primary';

                  return (
                    <Link
                      key={index}
                      to={btn.link || '/contact'}
                      className={`group inline-flex items-center justify-center gap-5 px-8 py-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${isPrimary
                          ? 'bg-cyan-400 text-[#07111c] hover:bg-white'
                          : 'border border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-[#07111c] hover:border-white'
                        }`}
                    >
                      {btn.label}

                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  );
                })}
              </motion.div>
            )}

          </motion.div>

          {/* SIDE INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-3 lg:pb-3"
          >

            <div className="border-l border-cyan-400/50 pl-6 space-y-6">

              <Mountain className="w-7 h-7 text-cyan-400 stroke-[1.3]" />

              <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                Every mountain has a story. Every journey has something to teach.
                Find yours with us.
              </p>

              <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                <Compass className="w-4 h-4" />
                Beyond the familiar
              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM INFORMATION STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-7 border-t border-white/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5"
        >

          <div className="flex flex-wrap gap-x-8 gap-y-3">

            {['EXPLORE', 'LEARN', 'CLIMB', 'DISCOVER'].map((item) => (
              <span
                key={item}
                className="text-[9px] tracking-[0.25em] font-medium text-white/50"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase text-white/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Your next journey starts here
          </div>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute right-6 lg:right-12 bottom-28 hidden lg:flex flex-col items-center gap-3 text-white/40">
        <span className="text-[8px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
          Explore further
        </span>
        <MoveDown className="w-4 h-4 animate-bounce" />
      </div>

    </section>
  );
};

export default FinalCTA;
