import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-2xl mb-10 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

