
import React from 'react';
import { motion } from 'framer-motion';
import {
  Mountain,
  Footprints,
  Compass,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

import { approachData } from '../../data/homeData';


const approachIcons = [
  Mountain,
  Footprints,
  Compass,
  ShieldCheck
];

const approachImages = [
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85'
];


const ApproachSection = () => {

  const {
    heading = "WE DON'T JUST TAKE YOU TO THE MOUNTAINS.",
    values = []
  } = approachData || {};


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 55
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

    <section className="relative bg-[#14221f] text-white py-24 sm:py-32 lg:py-40 overflow-hidden">


      {/* BACKGROUND ATMOSPHERE */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-900/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-black/20 blur-[100px]" />

      </div>


      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">


        {/* SECTION HEADER */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-20 lg:mb-28">


          <div className="lg:col-span-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >

              <span className="w-10 h-px bg-emerald-400/70" />

              <span className="text-[10px] sm:text-xs tracking-[0.35em] font-semibold uppercase text-emerald-200/70">
                OUR PHILOSOPHY
              </span>

            </motion.div>


            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold uppercase tracking-[-0.055em] leading-[1.02] max-w-5xl"
            >
              {heading}
            </motion.h2>


            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-white/55 leading-relaxed"
            >
              The mountains are more than landscapes to explore.
              They are places to learn, grow, discover and understand
              our relationship with the natural world.
            </motion.p>

          </div>


          {/* RIGHT EDITORIAL LABEL */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:pb-2"
          >

            <span className="block text-[10px] tracking-[0.25em] uppercase text-white/35 mb-4">
              THE WAY WE SEE THE MOUNTAINS
            </span>

            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/85">
              "The journey is not just about where you go, but what you learn along the way."
            </p>

          </motion.div>

        </div>



        {/* PHILOSOPHY CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >

          {values.map((val, index) => {

            const Icon = approachIcons[index % approachIcons.length];

            const image =
              val.image || approachImages[index % approachImages.length];

            return (

              <motion.article
                key={val.id || index}
                variants={cardVariants}
                className="group relative min-h-[430px] sm:min-h-[470px] overflow-hidden bg-[#1d302a] border border-white/10 hover:border-emerald-300/40 transition-colors duration-500"
              >


                {/* CARD BACKGROUND IMAGE */}

                <img
                  src={image}
                  alt={val.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = approachImages[index % approachImages.length];
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-35 grayscale-[30%] transition-all duration-1000 group-hover:opacity-55 group-hover:grayscale-0 group-hover:scale-110"
                />


                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#101b18] via-[#14221f]/65 to-[#14221f]/30" />


                {/* CARD CONTENT */}

                <div className="relative z-10 h-full min-h-[430px] sm:min-h-[470px] flex flex-col justify-between p-7 sm:p-8">


                  {/* TOP */}

                  <div className="flex justify-between items-start">

                    <span className="text-[10px] tracking-[0.25em] font-medium text-white/50">
                      0{index + 1} / 04
                    </span>


                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-emerald-200/80 group-hover:bg-emerald-300 group-hover:text-[#14221f] group-hover:border-emerald-300 transition-colors duration-500"
                    >

                      <Icon className="w-5 h-5" strokeWidth={1.3} />

                    </motion.div>

                  </div>


                  {/* BOTTOM */}

                  <div>

                    {/* LARGE NUMBER */}

                    <span className="block font-display text-7xl sm:text-8xl font-semibold tracking-[-0.08em] text-white/15 group-hover:text-emerald-200/30 transition-colors duration-500">
                      0{index + 1}
                    </span>


                    {/* TITLE */}

                    <h3 className="mt-2 text-2xl sm:text-3xl font-semibold uppercase tracking-[-0.04em] text-white">
                      {val.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-xs">
                      {val.description}
                    </p>


                    {/* BOTTOM LINE */}

                    <div className="mt-8 pt-5 border-t border-white/20 flex items-center justify-between">

                      <span className="text-[9px] tracking-[0.25em] uppercase text-white/45">
                        OUR APPROACH
                      </span>

                      <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-emerald-200 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />

                    </div>

                  </div>

                </div>

              </motion.article>

            );

          })}

        </motion.div>



        {/* CLOSING STATEMENT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 sm:mt-28 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >

          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40">
            LEARN. EXPERIENCE. EXPLORE. RESPECT.
          </p>

          <span className="text-xs text-white/40 tracking-wide">
            THE MOUNTAINS ARE OUR GREATEST TEACHER.
          </span>

        </motion.div>


      </div>

    </section>

  );

};

export default ApproachSection;
