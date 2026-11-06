import React from 'react';
import { Compass, MapPin } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  const { title, category, location } = project;

  return (
    <div className="group p-8 sm:p-10 bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono tracking-widest text-slate-500">
          <span>PROJECT [ 0{index + 1} ]</span>
          {category && (
            <span className="text-[11px] uppercase tracking-wider text-sky-400 font-sans font-semibold">
              {category}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-sky-300 transition-colors">
          {title}
        </h3>
      </div>

      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        {location ? (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>{location}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-slate-500">
            <Compass className="w-3.5 h-3.5" />
            <span>Himalayan Field Log</span>
          </div>
        )}
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
          ARCHIVE
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

