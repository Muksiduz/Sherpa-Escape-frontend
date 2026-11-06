import React from 'react';
import { Compass } from 'lucide-react';

export const AboutHero = ({ data }) => {
  if (!data) return null;

  const { badge, mainHeading, subheading, paragraphs } = data;

  return (
    <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white my-6 py-16 sm:py-20 px-6 sm:px-12 shadow-xl border border-slate-800">
      {/* Background imagery with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative max-w-3xl space-y-4">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold backdrop-blur-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-1">
            {subheading}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {mainHeading}
          </h1>
        </div>

        <div className="space-y-4 pt-2 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {paragraphs &&
            paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

