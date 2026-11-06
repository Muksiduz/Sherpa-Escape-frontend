import React, { useState } from 'react';
import { MapPin, Award, Clock, Compass, Shield, User } from 'lucide-react';

export const TeamCard = ({ member }) => {
  if (!member) return null;

  // Authentic mountain guide portrait fallback
  const defaultFallbackImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
  const [imageSrc, setImageSrc] = useState(member.image || defaultFallbackImage);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
      {/* Portrait Column */}
      <div className="relative md:w-2/5 min-h-[320px] md:min-h-full bg-slate-900 overflow-hidden shrink-0">
        <img
          src={imageSrc}
          alt={member.name}
          onError={() => setImageSrc(defaultFallbackImage)}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/80 md:from-transparent md:to-slate-950/30 via-transparent" />

        {member.experience && (
          <div className="absolute top-4 left-4 bg-sky-600/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{member.experience}</span>
          </div>
        )}
      </div>

      {/* Details Column */}
      <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                {member.designation}
              </span>
              {member.origin && (
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>{member.origin}</span>
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {member.name}
            </h3>
          </div>

          {/* Short description */}
          {member.shortDescription && (
            <p className="text-sm font-medium text-slate-700 italic border-l-2 border-sky-500 pl-3">
              "{member.shortDescription}"
            </p>
          )}

          {/* Full Biography (60-100 words) */}
          {member.biography && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {member.biography}
            </p>
          )}

          {/* Speciality */}
          {member.speciality && (
            <div className="text-xs">
              <span className="font-semibold text-slate-800 block mb-1">
                Expedition Speciality:
              </span>
              <span className="text-slate-600 font-medium">
                {member.speciality}
              </span>
            </div>
          )}
        </div>

        {/* Qualifications Badges */}
        {member.qualifications && member.qualifications.length > 0 && (
          <div className="pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Certified Qualifications
            </span>
            <div className="flex flex-wrap gap-1.5">
              {member.qualifications.map((qual, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-100"
                >
                  <Award className="w-3 h-3 text-sky-500" />
                  <span>{qual}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;

