
import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowUpRight, Mountain } from 'lucide-react';
import { storyBehindNameData } from '../../data/homeData';

const fallbackImage =
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=85';

const routePath = `
  M90 0
  C90 90 28 110 28 220
  C28 330 152 340 152 460
  C152 570 28 580 28 700
  C28 820 152 850 152 940
  C152 975 90 985 90 1000
`;

const mobileRoutePath = `
  M18 0
  C18 150 9 180 18 300
  S27 480 18 600
  S9 820 18 1000
`;

const reveal = {
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

const StoryBehindName = () => {
  const routeRef = useRef(null);

  const {
    heading = 'WHY SHERPA?',
    paragraphs = [],
    closingStatement = [],
    image,
    imageCaption = 'A STORY ROOTED IN THE MOUNTAINS',
  } = storyBehindNameData || {};

  const [imgSrc, setImgSrc] = useState(
    image || fallbackImage
  );

  const storyPoints = Array.isArray(paragraphs)
    ? paragraphs
    : [];

  const closingLines = Array.isArray(closingStatement)
    ? closingStatement
    : typeof closingStatement === 'string'
      ? closingStatement.split('\n').filter(Boolean)
      : [];

  // Animate the route only while scrolling through the timeline.
  const { scrollYProgress } = useScroll({
    target: routeRef,
    offset: ['start 75%', 'end 65%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 25,
    restDelta: 0.001,
  });

  const routeOpacity = useTransform(
    smoothProgress,
    [0, 0.04, 1],
    [0.3, 1, 1]
  );

  return (
    <section className="relative overflow-hidden bg-[#101b23] text-white py-28 sm:py-36 lg:py-44">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-900/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(#ffffff 0.7px, transparent 0.7px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* SECTION INTRO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="max-w-5xl mb-24 sm:mb-36"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-teal-400" />

            <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-teal-300">
              The story behind the name
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-semibold uppercase tracking-[-0.055em] leading-[0.95]">
            {heading}
          </h2>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            Every name carries a story. Ours began with a
            conversation about mountains, people and the ones
            who make every journey possible.
          </p>
        </motion.div>

        {/* OPENING IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[300px] sm:h-[450px] lg:h-[600px] overflow-hidden mb-20 sm:mb-32 group"
        >
          <img
            src={imgSrc}
            alt={imageCaption}
            onError={(event) => {
              event.currentTarget.onerror = null;
              setImgSrc(fallbackImage);
            }}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-[2000ms] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101b23]/90 via-transparent to-black/10" />

          <div className="absolute bottom-7 left-7 sm:bottom-12 sm:left-12">
            <span className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/80">
              <Mountain className="w-4 h-4 text-teal-300" />
              {imageCaption}
            </span>
          </div>

          <div className="absolute top-7 right-7 sm:top-12 sm:right-12 text-[10px] tracking-[0.25em] text-white/70">
            THE BEGINNING / 01
          </div>
        </motion.div>

        {/* STORY INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 sm:mb-32">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-teal-300">
              A conversation that inspired us
            </span>

            <h3 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-tight">
              IT STARTED WITH
              <span className="block text-slate-500">
                A MEETING.
              </span>
            </h3>
          </div>

          <div className="lg:col-span-7 flex items-center">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              The name Sherpa Escapes was inspired by a meeting
              between Rajesh and Pasang Sherpa from Nepal.
              What followed was a conversation that would
              eventually shape the identity of the organisation.
            </p>
          </div>
        </div>

        {/* WINDING STORY TIMELINE */}
        <div ref={routeRef} className="relative">

          {/* DESKTOP ROUTE — PROTECTED CENTER COLUMN */}
          <svg
            className="absolute hidden md:block top-0 bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-full pointer-events-none z-0"
            viewBox="0 0 180 1000"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={routePath}
              stroke="rgba(148,163,184,0.25)"
              strokeWidth="2"
              strokeDasharray="5 9"
              vectorEffect="non-scaling-stroke"
            />

            <motion.path
              d={routePath}
              stroke="#5eead4"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                pathLength: smoothProgress,
                opacity: routeOpacity,
              }}
            />
          </svg>

          {/* MOBILE ROUTE — LEFT GUTTER ONLY */}
          <svg
            className="absolute md:hidden top-0 bottom-0 left-0 w-9 h-full pointer-events-none z-0"
            viewBox="0 0 36 1000"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={mobileRoutePath}
              stroke="rgba(148,163,184,0.25)"
              strokeWidth="2"
              strokeDasharray="5 8"
              vectorEffect="non-scaling-stroke"
            />

            <motion.path
              d={mobileRoutePath}
              stroke="#5eead4"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                pathLength: smoothProgress,
              }}
            />
          </svg>

          {/* STORY POINTS */}
          <div className="relative z-10 space-y-24 sm:space-y-36 lg:space-y-44">

            {storyPoints.map((paragraph, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid grid-cols-[36px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] gap-x-5 md:gap-x-0 items-center min-h-[200px] sm:min-h-[240px]"
                >

                  {/* MOBILE MARKER */}
                  <div className="md:hidden col-start-1 row-start-1 flex justify-center relative z-20">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 12,
                      }}
                      className="w-5 h-5 rounded-full bg-[#101b23] border-2 border-teal-300 flex items-center justify-center"
                    >
                      <span className="w-2 h-2 rounded-full bg-teal-300" />
                    </motion.div>
                  </div>

                  {/* LEFT STORY */}
                  {isEven && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -35,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative min-w-0 col-start-2 row-start-1 md:col-start-1 md:pr-12 lg:pr-16 md:text-right"
                    >
                      <span className="text-[10px] tracking-[0.3em] text-teal-300 uppercase">
                        WAYPOINT / {String(index + 2).padStart(2, '0')}
                      </span>

                      <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-slate-300 leading-[1.7]">
                        {paragraph}
                      </p>

                      <div className="hidden md:flex mt-7 justify-end">
                        <span className="w-12 h-px bg-teal-300/50" />
                      </div>
                    </motion.div>
                  )}

                  {/* CENTRAL MARKER — DESKTOP */}
                  <div className="hidden md:flex col-start-2 row-start-1 relative z-20 justify-center items-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 12,
                        delay: 0.1,
                      }}
                      className="relative w-6 h-6 rounded-full bg-[#101b23] border-2 border-teal-300 flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.25)]"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.35, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-2 h-2 rounded-full bg-teal-300"
                      />
                    </motion.div>
                  </div>

                  {/* RIGHT STORY */}
                  {!isEven && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 35,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative min-w-0 col-start-2 row-start-1 md:col-start-3 md:pl-12 lg:pl-16"
                    >
                      <span className="text-[10px] tracking-[0.3em] text-teal-300 uppercase">
                        WAYPOINT / {String(index + 2).padStart(2, '0')}
                      </span>

                      <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-slate-300 leading-[1.7]">
                        {paragraph}
                      </p>

                      <div className="hidden md:flex mt-7 justify-start">
                        <span className="w-12 h-px bg-teal-300/50" />
                      </div>
                    </motion.div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* FINAL DESTINATION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative mt-36 sm:mt-52"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-teal-300 to-transparent" />

            <div className="w-3 h-3 rounded-full bg-teal-300 shadow-[0_0_25px_rgba(94,234,212,0.7)]" />
          </div>

          <div className="border-t border-white/15 pt-16 sm:pt-24 text-center">

            <span className="text-[10px] uppercase tracking-[0.4em] text-teal-300">
              What the journey taught us
            </span>

            <div className="mt-10 max-w-6xl mx-auto space-y-3">
              {closingLines.map((line, index) => (
                <motion.h3
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  className={`font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-semibold tracking-[-0.04em] leading-tight ${index === closingLines.length - 1
                      ? 'text-teal-300'
                      : 'text-white'
                    }`}
                >
                  {line}
                </motion.h3>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-slate-500">
                <Mountain className="w-4 h-4 text-teal-300" />
                <span>The journey continues</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StoryBehindName;
