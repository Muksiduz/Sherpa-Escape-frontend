
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mountain,
  Compass,
  MoveUpRight,
} from 'lucide-react';

import { outdoorEducationData } from '../../data/homeData';

const fallbackImage =
  'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1800&q=85';

const revealUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const OutdoorEducation = () => {
  const {
    heading = 'LEARNING BEYOND THE CLASSROOM',
    paragraphs = [],
    closingStatement = '',
    image,
    cta,
  } = outdoorEducationData || {};

  const [imgSrc, setImgSrc] = useState(
    image || fallbackImage
  );

  const storyParagraphs = Array.isArray(paragraphs)
    ? paragraphs
    : [];

  const closingLines = Array.isArray(closingStatement)
    ? closingStatement
    : typeof closingStatement === 'string'
      ? closingStatement.split('\n').filter(Boolean)
      : [];

  return (
    <section className="relative overflow-hidden bg-[#101b23] text-white">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-teal-900/[0.08] blur-[150px]" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-900/[0.07] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(#ffffff 0.7px, transparent 0.7px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40">

        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20 sm:mb-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealUp}
            className="lg:col-span-8"
          >

            <div className="flex items-center gap-4 mb-8">

              <span className="w-10 h-px bg-teal-400" />

              <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase font-medium text-teal-300">
                Education through exploration
              </span>

            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-semibold uppercase tracking-[-0.055em] leading-[0.92]">

              OUTDOOR

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-100 to-white">
                EDUCATION.
              </span>

            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:pb-2"
          >

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md">
              The mountains are more than a destination.
              They are a place to learn, discover your
              capabilities and develop a deeper connection
              with the world around you.
            </p>

            <div className="flex items-center gap-3 mt-7 text-[10px] tracking-[0.25em] uppercase text-teal-300">

              <Mountain className="w-4 h-4" />

              LEARN OUTSIDE. GROW EVERYWHERE.

            </div>

          </motion.div>

        </div>


        {/* MAIN EXPERIENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7 relative"
          >

            {/* IMAGE FRAME */}
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[5/4] overflow-hidden bg-[#1c3039] group">

              <img
                src={imgSrc}
                alt="Outdoor education and mountain learning"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  setImgSrc(fallbackImage);
                }}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08131a]/90 via-[#101b23]/10 to-black/10" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#101b23]/20 to-transparent" />

              {/* TOP LABEL */}
              <div className="absolute top-6 left-6 sm:top-9 sm:left-9 flex items-center gap-3">

                <span className="w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_15px_rgba(94,234,212,0.8)]" />

                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/90">
                  Learning in the mountains
                </span>

              </div>

              {/* BOTTOM IMAGE INFORMATION */}
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">

                <span className="text-[10px] tracking-[0.3em] uppercase text-teal-300">
                  BEYOND THE CLASSROOM
                </span>

                <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-tight leading-tight max-w-xl">
                  EXPERIENCE IS THE BEST TEACHER.
                </h3>

              </div>

              {/* CORNER MARK */}
              <div className="absolute top-6 right-6 sm:top-9 sm:right-9">

                <div className="w-10 h-10 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

              </div>

            </div>

            {/* IMAGE CAPTION */}
            <div className="flex justify-between items-center mt-4">

              <span className="text-[9px] tracking-[0.25em] uppercase text-slate-500">
                SHERPA ESCAPES / FIELD LEARNING
              </span>

              <span className="text-[9px] tracking-[0.2em] uppercase text-teal-300">
                EXPLORE • LEARN • GROW
              </span>

            </div>

          </motion.div>


          {/* CONTENT SIDE */}
          <div className="lg:col-span-5">

            {/* INTRO LABEL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="mb-10"
            >

              <span className="text-[10px] tracking-[0.3em] uppercase text-teal-300">
                A different kind of classroom
              </span>

              <h3 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-[-0.04em] leading-[1.08]">
                LEARN BY
                <span className="block text-slate-500">
                  DOING.
                </span>
              </h3>

            </motion.div>


            {/* STORY PARAGRAPHS */}
            <div className="space-y-0">

              {storyParagraphs.map((paragraph, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-5 py-6 border-b border-white/10 group"
                >

                  {/* NUMBER */}
                  <div className="shrink-0 pt-1">

                    <span className="font-mono text-[10px] tracking-widest text-teal-400">
                      0{index + 1}
                    </span>

                  </div>

                  {/* TEXT */}
                  <div>

                    <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-[1.9] group-hover:text-white transition-colors duration-300">
                      {paragraph}
                    </p>

                    <div className="mt-4 w-0 h-px bg-teal-300 group-hover:w-12 transition-all duration-500" />

                  </div>

                </motion.div>

              ))}

            </div>


            {/* CLOSING STATEMENT */}
            {closingLines.length > 0 && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-10 relative pl-5 border-l-2 border-teal-400"
              >

                {closingLines.map((line, index) => (

                  <p
                    key={index}
                    className={`font-display text-lg sm:text-xl lg:text-2xl font-semibold uppercase tracking-tight leading-snug ${index === closingLines.length - 1
                        ? 'text-teal-300'
                        : 'text-white'
                      }`}
                  >
                    {line}
                  </p>

                ))}

              </motion.div>

            )}


            {/* CTA */}
            {cta && (

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-10"
              >

                <Link
                  to={cta.link || '/contact'}
                  className="group inline-flex items-center gap-5 px-7 py-5 bg-teal-300 text-[#101b23] hover:bg-white transition-all duration-300"
                >

                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                    {cta.label}
                  </span>

                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                </Link>

              </motion.div>

            )}

          </div>

        </div>


        {/* BOTTOM EDITORIAL STRIP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 sm:mt-36 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-5"
        >

          <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-slate-400">

            <Compass className="w-4 h-4 text-teal-300" />

            EDUCATION THROUGH EXPERIENCE

          </div>

          <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-slate-500">

            THE MOUNTAINS ARE THE CLASSROOM

            <MoveUpRight className="w-3 h-3 text-teal-300" />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default OutdoorEducation;
