import React, { useState } from 'react';
import { MapPin, Mountain, Award } from 'lucide-react';

const MilestoneCard = ({ milestone }) => {
  const defaultFallback = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80';
  const [imageSrc, setImageSrc] = useState(milestone.image || defaultFallback);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
      {milestone.image && (
        <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
          <img
            src={imageSrc}
            alt={milestone.title}
            onError={() => setImageSrc(defaultFallback)}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-semibold text-sky-300 flex items-center gap-1.5 border border-slate-700">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{milestone.location}</span>
          </div>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {milestone.stats && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
              {milestone.stats}
            </span>
          )}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            {milestone.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
            {milestone.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Mountain className="w-4 h-4 text-sky-600" />
          <span>High-Altitude Alpine Feat</span>
        </div>
      </div>
    </div>
  );
};

export const OurExperience = ({ data }) => {
  if (!data) return null;

  const { sectionHeading, subheading, introduction, milestones } = data;

  return (
    <section className="my-16 sm:my-20">
      <div className="max-w-2xl mb-12">
        {subheading && (
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
            {subheading}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {sectionHeading}
        </h2>
        {introduction && (
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {introduction}
          </p>
        )}
      </div>

      {/* Expedition Milestones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones &&
          milestones.map((milestone) => (
            <MilestoneCard key={milestone.id || milestone.title} milestone={milestone} />
          ))}
      </div>
    </section>
  );
};

export default OurExperience;

