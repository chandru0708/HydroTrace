import React from 'react';

export default function MarginNote({ text, direction = 'down', color = 'var(--color-ink)', className = '', style = {} }) {
  return (
    <div className={`hand-note flex items-center gap-2 select-none ${className}`} style={{ color, ...style }}>
      {direction === 'left' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      )}
      <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', lineHeight: '1.1' }}>
        {text}
      </span>
      {direction === 'right' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
      {direction === 'down' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      )}
      {direction === 'curve-down' && (
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M4 4 Q 18 4 18 18 M 12 14 L 18 20 L 24 14" />
        </svg>
      )}
    </div>
  );
}
