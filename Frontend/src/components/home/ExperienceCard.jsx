import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ExperienceCard = ({ experience }) => {
  const { title, shortDescription, image, link, displayOrder } = experience;

  const defaultFallbacks = {
    trekking: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    mountaineering: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1000&q=80',
    'outdoor-education': 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1000&q=80',
    exploration: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
  };

  const [imgSrc, setImgSrc] = useState(
    image || defaultFallbacks[experience.id] || defaultFallbacks.trekking
  );

  return (
    <Link
      to={link || '/experiences'}
      className="group block relative overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-500"
    >
      {/* Aspect Ratio Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc(defaultFallbacks[experience.id] || defaultFallbacks.trekking)}
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Display Order Number */}
        {displayOrder && (
          <span className="absolute top-5 left-5 text-xs font-mono tracking-widest text-white/70">
            [ 0{displayOrder} ]
          </span>
        )}

        <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-sky-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;

