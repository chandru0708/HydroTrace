import React from 'react';

export default function SectionHeader({
  number,
  category,
  title,
  subtitle,
  accent = 'cyan', // 'cyan', 'violet', 'orange'
  className = ''
}) {
  const accentBadge = {
    cyan: 'text-sky-400 border-sky-500/30 bg-sky-950/40',
    violet: 'text-purple-300 border-purple-500/30 bg-purple-950/40',
    orange: 'text-orange-300 border-orange-500/30 bg-orange-950/40'
  };

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-3.5">
        {number && (
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-700 bg-slate-900/80 text-slate-300">
            {number}
          </span>
        )}
        {category && (
          <span className={`font-mono text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-md border ${accentBadge[accent] || accentBadge.cyan}`}>
            {category}
          </span>
        )}
      </div>

      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans mt-3 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
