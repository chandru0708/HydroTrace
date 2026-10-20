import React from 'react';

export default function Sticker({ children, rotate = '-2deg', color = 'var(--color-signal-yellow)', textColor = 'var(--color-ink)', className = '' }) {
  return (
    <span
      className={`inline-block font-mono uppercase tracking-wider text-xs font-bold px-3 py-1 rounded-sm border border-current shadow-sm ${className}`}
      style={{
        backgroundColor: color,
        color: textColor,
        transform: `rotate(${rotate})`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        boxShadow: '1px 2px 0px rgba(20, 33, 61, 0.4)',
        userSelect: 'none'
      }}
    >
      {children}
    </span>
  );
}
