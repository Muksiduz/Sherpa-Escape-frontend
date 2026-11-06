import React from 'react';
import TeamCard from './TeamCard';

export const TeamSection = ({ data }) => {
  if (!data) return null;

  const { sectionHeading, subheading, introduction, members } = data;

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

      {/* Team Members List */}
      <div className="space-y-8">
        {members && members.length > 0 ? (
          members.map((member) => (
            <TeamCard key={member.id || member.name} member={member} />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No team profiles currently available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;

