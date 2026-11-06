
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroData } from '../../data/homeData';

const HeroSection = () => {
  const {
    eyebrow,
    heading,
    description,
    primaryButton,
    secondaryButton,
    backgroundImage,
    backgroundVideo,
  } = heroData;

  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);



  // Animation settings
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.25,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingLines = Array.isArray(heading)
    ? heading
    : [heading];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#101820] text-white flex items-center justify-center -mt-20">

      {/* FALLBACK IMAGE */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${videoReady && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* BACKGROUND VIDEO */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={backgroundImage}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoError(true)}
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady && !videoError ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/65" />

      <div className="absolute inset-0 bg-black/15" />

      {/* HERO CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center justify-center py-32"
      >

        {/* EYEBROW */}
        {eyebrow && (
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-white/70" />

            <span className="text-[10px] sm:text-xs font-medium tracking-[0.35em] uppercase text-white/85">
              {eyebrow}
            </span>

            <span className="w-8 h-px bg-white/70" />
          </motion.div>
        )}

        {/* MAIN HEADING */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-semibold uppercase tracking-[-0.045em] leading-[1.08] max-w-5xl"
        >
          {headingLines.map((line, index) => (
            <span key={index} className="block overflow-hidden pb-1">
              <motion.span
                variants={fadeUp}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-sans font-normal"
        >
          {description}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {primaryButton && (
            <Link
              to={primaryButton.link}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#17212b] hover:bg-[#dce4e8] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            >
              {primaryButton.label}

              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}

          {secondaryButton && (
            <Link
              to={secondaryButton.link}
              className="group inline-flex items-center justify-center px-8 py-4 border border-white/60 text-white hover:bg-white hover:text-[#17212b] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            >
              {secondaryButton.label}
            </Link>
          )}
        </motion.div>

      </motion.div>

      {/* BOTTOM EDITORIAL LABEL */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/55">
          EXPLORE • LEARN • EXPERIENCE
        </span>
      </div>

    </section>
  );
};

export default HeroSection;
