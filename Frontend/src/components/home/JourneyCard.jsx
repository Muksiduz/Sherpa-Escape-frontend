import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const JourneyCard = ({ category, index }) => {
  const { title, description, image, link, featuredDestinationNames } = category;

  const defaultFallbacks = [
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  ];

  const [imgSrc, setImgSrc] = useState(image || defaultFallbacks[index % defaultFallbacks.length]);

  return (
    <Link
      to={link || '/packages'}
      className="group block relative overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-500"
    >
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc(defaultFallbacks[index % defaultFallbacks.length])}
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

        <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-slate-400 block uppercase">
            Category [ 0{index + 1} ]
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-sky-300 transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2">
            {description}
          </p>

          {/* Featured Destination Tags */}
          {featuredDestinationNames && featuredDestinationNames.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {featuredDestinationNames.map((dest, i) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-white/10 text-slate-200 border border-white/10"
                >
                  {dest}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default JourneyCard;

