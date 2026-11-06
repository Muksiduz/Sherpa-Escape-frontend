import React from 'react';
import { beyondKnownData } from '../../data/homeData';

export const BeyondKnown = () => {
  const { heading, paragraphs, statementLines, explorationProjects } = beyondKnownData;

  return (
    <section className="py-24 sm:py-32 bg-stone-100 text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Statement Lines */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] font-bold uppercase text-slate-500 block">
                Alpine Reconnaissance
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-slate-950 leading-tight">
                {heading}
              </h2>
            </div>

            {/* Statement lines */}
            {statementLines && statementLines.length > 0 && (
              <div className="pt-6 border-t border-stone-300 space-y-3">
                {statementLines.map((st, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-slate-950" />
                    <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-slate-900">
                      {st}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-8 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {paragraphs &&
              paragraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'text-lg sm:text-xl font-medium text-slate-900' : ''}>
                  {para}
                </p>
              ))}

            {/* Future projects render when populated */}
            {explorationProjects && explorationProjects.length > 0 && (
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {explorationProjects.map((p) => (
                  <div key={p.id} className="p-4 bg-white border border-stone-300">
                    <h4 className="font-bold text-slate-900">{p.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondKnown;

