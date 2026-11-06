import React from 'react';
import { ShieldCheck, Award, HeartPulse, Compass, AlertTriangle, BookOpen } from 'lucide-react';

const iconMap = {
  'Basic & Advanced Mountaineering': Award,
  'Wilderness First Response': HeartPulse,
  'Search & Rescue': ShieldCheck,
  'High-altitude expedition leadership': Compass,
  'Mountain safety and risk management': AlertTriangle,
  'Outdoor education': BookOpen,
};

export const Qualifications = ({ data }) => {
  if (!data) return null;

  const { sectionHeading, subheading, introduction, qualifications, closingParagraph } = data;

  return (
    <section className="my-16 sm:my-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800">
      <div className="max-w-3xl mb-12">
        {subheading && (
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
            {subheading}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {sectionHeading}
        </h2>
        {introduction && (
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            {introduction}
          </p>
        )}
      </div>

      {/* Qualifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualifications &&
          qualifications.map((item) => {
            const Icon = iconMap[item.title] || ShieldCheck;
            return (
              <div
                key={item.id || item.title}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 border border-sky-400/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      {/* Closing paragraph */}
      {closingParagraph && (
        <div className="mt-12 pt-8 border-t border-slate-800 max-w-3xl">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic border-l-2 border-sky-500 pl-4">
            "{closingParagraph}"
          </p>
        </div>
      )}
    </section>
  );
};

export default Qualifications;

