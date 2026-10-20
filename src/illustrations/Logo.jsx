import React from 'react';

export default function Logo({ size = 32, showWordmark = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Droplet Outline with hand-inked line */}
        <path
          d="M50 8 C50 8 18 52 18 72 A32 32 0 0 0 82 72 C82 52 50 8 50 8 Z"
          fill="var(--color-river-teal)"
          stroke="var(--color-ink)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Droplet Highlight */}
        <path
          d="M32 60 C30 66 32 74 36 78"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Voltammogram Trace Line Motif (Wave with single DPV peak) */}
        <path
          d="M12 70 Q30 70 40 68 T50 38 T60 70 T88 70"
          stroke="var(--color-signal-yellow)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showWordmark && (
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: size > 32 ? '1.8rem' : '1.45rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>
          <span style={{ color: 'var(--color-ink)' }}>Hydro</span>
          <span style={{ color: 'var(--color-river-teal)' }}>Trace</span>
        </span>
      )}
    </div>
  );
}
