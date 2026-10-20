import React from 'react';

export default function TelemetryChip({ 
  label, 
  status, 
  variant = 'cyan', // 'cyan', 'violet', 'orange', 'green', 'amber', 'red', 'mono'
  pulse = true,
  className = ''
}) {
  const dotColors = {
    cyan: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
    violet: 'bg-purple-400 shadow-[0_0_8px_#8b5cf6]',
    orange: 'bg-orange-400 shadow-[0_0_8px_#ff7a3d]',
    green: 'bg-emerald-400 shadow-[0_0_8px_#22c55e]',
    amber: 'bg-amber-400 shadow-[0_0_8px_#f59e0b]',
    red: 'bg-rose-500 shadow-[0_0_8px_#ef4444]',
    mono: 'bg-slate-400'
  };

  const textColors = {
    cyan: 'text-cyan-300 border-cyan-500/20 bg-cyan-950/30',
    violet: 'text-purple-300 border-purple-500/20 bg-purple-950/30',
    orange: 'text-orange-300 border-orange-500/20 bg-orange-950/30',
    green: 'text-emerald-300 border-emerald-500/20 bg-emerald-950/30',
    amber: 'text-amber-300 border-amber-500/20 bg-amber-950/30',
    red: 'text-rose-300 border-rose-500/20 bg-rose-950/30',
    mono: 'text-slate-300 border-slate-700 bg-slate-900/40'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-mono text-[11px] font-medium tracking-wide uppercase ${textColors[variant] || textColors.mono} ${className}`}>
      {status !== undefined && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || dotColors.mono} ${pulse ? 'animate-pulse' : ''}`} />
      )}
      <span>{label}</span>
      {status && <span className="opacity-80">· {status}</span>}
    </span>
  );
}
