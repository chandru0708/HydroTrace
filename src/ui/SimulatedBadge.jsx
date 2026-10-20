import React from 'react';

export default function SimulatedBadge({ text = "SIMULATED DEMONSTRATION DATA", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 font-mono text-[10px] text-slate-400 bg-slate-900/80 border border-slate-700/80 px-2 py-0.5 rounded tracking-wider uppercase ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-ping" />
      <span>{text}</span>
    </span>
  );
}
