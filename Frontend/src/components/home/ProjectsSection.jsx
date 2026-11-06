
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mountain } from 'lucide-react';
import { projectsData } from '../../data/homeData';

const fallbackImages = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
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

const ProjectsSection = () => {
  const {
    heading = 'BEYOND THE SUMMIT',
    projects = [],
  } = projectsData || {};

  const getCardLayout = (index) => {
    const layouts = [
      'lg:col-span-7 lg:row-span-2 min-h-[430px] lg:min-h-[620px]',
      'lg:col-span-5 min-h-[280px] lg:min-h-[300px]',
      'lg:col-span-5 min-h-[280px] lg:min-h-[300px]',
      'lg:col-span-5 min-h-[300px]',
      'lg:col-span-7 min-h-[300px]',
    ];

    return layouts[index % layouts.length];
  };

  return (
    <section className="relative overflow-hidden bg-[#101b23] text-white py-24 sm:py-32 lg:py-40">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/[0.08] blur-[150px] rounded-full" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/[0.05] blur-[130px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 sm:mb-20">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-4 mb-7">

              <span className="w-9 h-px bg-teal-400" />

              <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-teal-300">
                Expeditions & Exploration Journal
              </span>

            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-semibold uppercase tracking-[-0.055em] leading-[0.95]">
              {heading}
            </h2>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
              Every mountain has a story. Explore the expeditions,
              discoveries and experiences that continue to shape
              our journey across the Himalayas.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-slate-400"
          >

            <Mountain className="w-5 h-5 text-teal-300" />

            FIELD NOTES / 01—05

          </motion.div>

        </div>


        {/* BENTO GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5"
        >

          {projects.map((project, index) => {

            const fallback =
              fallbackImages[index % fallbackImages.length];

            const image = project.image || fallback;

            const description =
              project.description ||
              project.shortDescription ||
              'A journey shaped by exploration, experience and the mountains.';

            return (

              <motion.article
                key={project.id || index}
                variants={cardVariants}
                className={`relative group overflow-hidden bg-[#1b2b34] ${getCardLayout(index)}`}
              >

                {/* IMAGE */}
                <img
                  src={image}
                  alt={project.imageAlt || project.title || 'Mountain expedition'}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallback;
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                />

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08131b] via-[#08131b]/25 to-black/10 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

                {/* TOP DETAILS */}
                <div className="absolute top-5 left-5 right-5 sm:top-7 sm:left-7 sm:right-7 flex justify-between items-start">

                  <span className="px-3 py-2 backdrop-blur-md bg-black/25 border border-white/15 text-[9px] tracking-[0.2em] uppercase text-white/90">
                    PROJECT / 0{index + 1}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-teal-300 group-hover:border-teal-300 group-hover:text-[#101b23] transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </div>

                </div>


                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-9">

                  <motion.div
                    className="transform transition-transform duration-500 group-hover:-translate-y-2"
                  >

                    {project.category && (
                      <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-teal-300">
                        {project.category}
                      </span>
                    )}

                    <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-[-0.035em] leading-tight">
                      {project.title || project.name}
                    </h3>

                    <p className="mt-3 max-w-lg text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
                      {description}
                    </p>

                    {/* EXPLORE LINK */}
                    <Link
                      to={project.link || '/projects'}
                      className="inline-flex items-center gap-3 mt-6 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold text-white group/link"
                    >

                      EXPLORE PROJECT

                      <ArrowUpRight className="w-4 h-4 text-teal-300 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />

                    </Link>

                  </motion.div>

                </div>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-teal-300/50 transition-colors duration-500 pointer-events-none" />

              </motion.article>

            );
          })}

        </motion.div>


        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-5"
        >

          <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500">
            THE EXPEDITION JOURNAL
          </span>

          <span className="text-[10px] tracking-[0.25em] uppercase text-teal-300">
            NEW ROUTES. NEW DISCOVERIES. NEW STORIES.
          </span>

        </motion.div>

      </div>

    </section>
  );
};

export default ProjectsSection;
