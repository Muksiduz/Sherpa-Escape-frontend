
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring
} from 'framer-motion';

import { ArrowDownRight } from 'lucide-react';
import { aboutPreviewData } from '../../data/homeData';

const fallbackImage =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85';

const AboutPreview = () => {
  const {
    eyebrow,
    heading,
    introduction,
    storyBeats = [],
    statements = [],
    closingLabel
  } = aboutPreviewData;

  // Reference for the complete timeline
  const timelineRef = useRef(null);

  // Track scroll progress through the timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.65', 'end 0.45']
  });

  // Smooth out the progress animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Text animation
  const reveal = {
    hidden: {
      opacity: 0,
      y: 45
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
    <section className="relative bg-[#f5f4f0] text-[#18232b] py-24 sm:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* INTRODUCTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="max-w-4xl mb-24 sm:mb-32"
        >

          <span className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-500 mb-7">
            <span className="w-8 h-px bg-slate-500" />
            {eyebrow}
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-semibold uppercase tracking-[-0.05em] leading-[1.02]">
            {heading}
          </h2>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-600">
            {introduction}
          </p>

          <div className="mt-10 flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-slate-500">
            <ArrowDownRight className="w-4 h-4" />
            OUR STORY
          </div>

        </motion.div>


        {/* STORY TIMELINE */}
        <div ref={timelineRef} className="relative">

          {/* BASE TIMELINE LINE */}
          <div className="absolute top-0 bottom-0 left-[13px] md:left-1/2 md:-translate-x-1/2 w-px bg-slate-300" />

          {/* ANIMATED PROGRESS LINE */}
          <motion.div
            style={{
              scaleY: smoothProgress,
              transformOrigin: 'top'
            }}
            className="absolute top-0 bottom-0 left-[13px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-[#263b42] z-[1]"
          />


          <div className="space-y-24 sm:space-y-32">

            {storyBeats.map((beat, index) => {

              const isEven = index % 2 === 0;

              return (
                <div
                  key={beat.id || index}
                  className="relative grid grid-cols-[28px_1fr] md:grid-cols-[1fr_64px_1fr] gap-x-4 md:gap-x-6 items-center"
                >

                  {/* ANIMATED TIMELINE DOT */}
                  <div className="relative z-10 row-span-2 md:row-span-1 md:col-start-2 md:row-start-1 flex justify-center self-stretch md:self-center">

                    <motion.div
                      initial={{
                        scale: 0.5,
                        backgroundColor: '#cbd5e1'
                      }}
                      whileInView={{
                        scale: 1,
                        backgroundColor: '#263b42'
                      }}
                      viewport={{
                        amount: 0.5,
                        once: false
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut'
                      }}
                      className="relative w-3.5 h-3.5 rounded-full ring-[5px] ring-[#f5f4f0] shrink-0"
                    >

                      {/* PULSING OUTER RING */}
                      <motion.span
                        whileInView={{
                          scale: [1, 2.5],
                          opacity: [0.6, 0]
                        }}
                        viewport={{
                          amount: 0.5,
                          once: false
                        }}
                        transition={{
                          duration: 1.3,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                        className="absolute inset-0 rounded-full border border-[#263b42]"
                      />

                    </motion.div>

                  </div>


                  {/* IMAGE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.88,
                      y: 35
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`col-start-2 row-start-1 ${isEven
                        ? 'md:col-start-1'
                        : 'md:col-start-3'
                      }`}
                  >

                    <div className="relative overflow-hidden group">

                      <img
                        src={beat.image || fallbackImage}
                        alt={beat.imageAlt || beat.title}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = fallbackImage;
                        }}
                        className="w-full aspect-[4/3] md:aspect-[5/4] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/90">
                          {beat.imageCaption}
                        </span>

                        <span className="text-xs text-white/80">
                          {beat.number}
                        </span>

                      </div>

                    </div>

                  </motion.div>


                  {/* STORY TEXT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 35
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15
                    }}
                    className={`col-start-2 row-start-2 mt-7 md:mt-0 ${isEven
                        ? 'md:col-start-3 md:row-start-1 md:pl-8 lg:pl-16'
                        : 'md:col-start-1 md:row-start-1 md:pr-8 lg:pr-16'
                      }`}
                  >

                    <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                      THE STORY — {beat.number}
                    </span>

                    <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-[-0.035em] leading-tight">
                      {beat.title}
                    </h3>

                    <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                      {beat.text}
                    </p>

                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>


        {/* CLOSING STATEMENTS */}
        {statements.length > 0 && (

          <div className="mt-32 sm:mt-40 border-t border-slate-300 pt-12 sm:pt-16">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="max-w-5xl mx-auto"
            >

              {statements.map((statement, index) => (

                <motion.div
                  key={statement}
                  variants={reveal}
                  className="flex items-start gap-5 py-3 sm:py-5"
                >

                  <span className="text-xs sm:text-sm text-slate-400 mt-2">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-[-0.045em] leading-tight">
                    {statement}
                  </h3>

                </motion.div>

              ))}

            </motion.div>

            <p className="mt-14 text-center text-[10px] uppercase tracking-[0.35em] text-slate-500">
              {closingLabel}
            </p>

          </div>

        )}

      </div>
    </section>
  );
};

export default AboutPreview;
