import React from 'react';
import { Mountain, CheckCircle2 } from 'lucide-react';

export const MoreThanQualifications = ({ data }) => {
  if (!data) return null;

  const { sectionHeading, subheading, paragraphs, highlightStatements, closingStatement } = data;

  return (
    <section className="my-16 sm:my-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden">
      {/* Decorative mountain icon background */}
      <Mountain className="w-96 h-96 text-slate-800/40 absolute -right-16 -bottom-16 pointer-events-none" />

      <div className="relative max-w-3xl space-y-8">
        <div>
          {subheading && (
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
              {subheading}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {sectionHeading}
          </h2>
        </div>

        {/* Introduction Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {paragraphs &&
            paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>

        {/* Two Highlighted Statements */}
        {highlightStatements && highlightStatements.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlightStatements.map((statement, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 border border-sky-500/30 rounded-2xl p-6 flex items-center gap-3 shadow-lg shadow-sky-900/10"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-extrabold tracking-wider text-sky-300 uppercase">
                  {statement}
                </h4>
              </div>
            ))}
          </div>
        )}

        {/* Closing Statement */}
        {closingStatement && (
          <div className="pt-6 border-t border-slate-800">
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight italic flex items-center gap-3">
              <span className="w-8 h-0.5 bg-sky-500 shrink-0" />
              <span>{closingStatement}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoreThanQualifications;

