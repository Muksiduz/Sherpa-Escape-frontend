import React from 'react';
import { Quote } from 'lucide-react';

export const PeopleBehindName = ({ data }) => {
  if (!data) return null;

  const { sectionHeading, subheading, paragraphs, highlightQuote } = data;

  return (
    <section className="my-16 sm:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Paragraphs */}
        <div className="lg:col-span-7 space-y-5">
          {subheading && (
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block">
              {subheading}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {sectionHeading}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {paragraphs &&
              paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
          </div>
        </div>

        {/* Highlight Quote Box */}
        <div className="lg:col-span-5">
          <div className="relative bg-gradient-to-br from-sky-600 to-sky-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl overflow-hidden">
            <Quote className="w-16 h-16 text-white/20 absolute -top-2 -right-2 pointer-events-none" />

            <div className="relative space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200 block">
                Guiding Ethos
              </span>
              <blockquote className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                "{highlightQuote}"
              </blockquote>
              <div className="pt-2 flex items-center gap-2 text-xs text-sky-100 font-medium">
                <span className="w-6 h-0.5 bg-sky-300" />
                <span>Sherpa Escapes Core Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleBehindName;

