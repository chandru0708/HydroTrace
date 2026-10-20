import React from 'react';

export default function TraceDivider({ color = 'var(--color-river-teal)', height = 36, flip = false }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform: flip ? 'rotate(180deg)' : 'none' }}>
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
        preserveAspectRatio="none"
      >
        {/* Baseline */}
        <line x1="0" y1="36" x2="1200" y2="36" stroke="var(--color-ink)" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        {/* DPV trace wave */}
        <path
          d="M0 36 L400 36 Q480 36 530 32 T590 10 T650 32 T730 36 L1200 36"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Peak indicator dot */}
        <circle cx="590" cy="10" r="4.5" fill="var(--color-signal-yellow)" stroke="var(--color-ink)" strokeWidth="2" />
      </svg>
    </div>
  );
}
