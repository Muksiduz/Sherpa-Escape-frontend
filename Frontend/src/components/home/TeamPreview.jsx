
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mountain } from 'lucide-react';
import { teamPreviewData } from '../../data/homeData';

const fallbackImage =
  'https://plus.unsplash.com/premium_photo-1661922261479-4161e2195ac7?auto=format&fit=crop&w=1800&q=85';

const fallbackPortraits = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85'
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const TeamPreview = () => {
  const {
    heading = 'THE PEOPLE WHO LEAD THE WAY',
    description = '',
    image,
    buttonText = 'MEET THE TEAM',
    buttonLink = '/about',
    teamMembers = []
  } = teamPreviewData || {};

  return (
    <section className="relative bg-[#17231f] text-[#f2f0e9] py-24 sm:py-32 lg:py-40 overflow-hidden">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-[#456b53]/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#8b7955]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* SECTION INTRO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">

          <div className="max-w-4xl">

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="w-9 h-px bg-[#a9c4a6]" />

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#a9c4a6]">
                THE PEOPLE BEHIND SHERPA ESCAPES
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold uppercase tracking-[-0.055em] leading-[0.95]"
            >
              {heading}
            </motion.h2>

          </div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-sm text-sm sm:text-base text-[#d0d4cb]/65 leading-relaxed lg:pb-2"
          >
            {description}
          </motion.p>

        </div>


        {/* FEATURED TEAM PHOTOGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative group mb-24 sm:mb-32"
        >

          <div className="relative aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7] overflow-hidden bg-[#26372f]">

            <img
              src={image || fallbackImage}
              alt="Sherpa Escapes expedition team"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = fallbackImage;
              }}
              className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101b17]/75 via-transparent to-black/10" />

            <div className="absolute top-6 left-6 sm:top-9 sm:left-9 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#b8d2a9] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/90">
                PEOPLE OF THE MOUNTAINS
              </span>
            </div>

            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/80">
                GUIDES · CLIMBERS · EXPLORERS
              </span>
            </div>

          </div>

        </motion.div>


        {/* TEAM SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a9c4a6]">
              MEET THE PEOPLE
            </span>

            <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl uppercase font-semibold tracking-tight">
              PEOPLE BEHIND THE JOURNEY
            </h3>
          </div>

          <Link
            to={buttonLink}
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/65 hover:text-[#b8d2a9] transition-colors"
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>


        {/* TEAM PORTRAIT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {teamMembers.map((member, index) => (

            <motion.article
              key={member.id || index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >

              {/* PORTRAIT */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#293b32]">

                <img
                  src={member.image || fallbackPortraits[index % 4]}
                  alt={member.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallbackPortraits[index % 4];
                  }}
                  className="w-full h-full object-cover object-center transition-all duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* PROFILE NUMBER */}
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.25em] text-white/80">
                  0{index + 1}
                </span>

                {/* HOVER ACTION */}
                <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full border border-white/50 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[#b8d2a9] group-hover:text-[#17231f] group-hover:border-[#b8d2a9] group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

              </div>


              {/* MEMBER DETAILS */}
              <div className="pt-5 pb-5 border-b border-white/15">

                <h4 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#f2f0e9] group-hover:text-[#b8d2a9] transition-colors">
                  {member.name}
                </h4>

                <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#c1c8bb]/60">
                  {member.designation}
                </p>

                {member.speciality && (
                  <p className="mt-4 text-xs text-[#c1c8bb]/60 leading-relaxed">
                    {member.speciality}
                  </p>
                )}

              </div>

            </motion.article>

          ))}

        </div>


        {/* CLOSING STATEMENT */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 sm:mt-28 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-5"
        >

          <div className="flex items-center gap-3">
            <Mountain className="w-4 h-4 text-[#a9c4a6]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55">
              EXPERIENCE BUILDS THE GUIDE
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            THE MOUNTAINS ARE OUR GREATEST TEACHER.
          </span>

        </motion.div>

      </div>

    </section>
  );
};

export default TeamPreview;
