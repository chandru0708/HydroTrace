import React from 'react';

export function SimulatedTag({ text = 'Simulated data', className = '' }) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: '0.72rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-ink)',
        backgroundColor: 'rgba(20, 33, 61, 0.08)',
        border: '1px dashed rgba(20, 33, 61, 0.4)',
        padding: '0.15rem 0.45rem',
        borderRadius: '3px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        userSelect: 'none'
      }}
    >
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-nile-coral)' }} />
      {text}
    </span>
  );
}

export function SourceCaption({ source, className = '' }) {
  return (
    <p
      className={className}
      style={{
        fontSize: '0.75rem',
        fontFamily: 'var(--font-sans)',
        color: 'inherit',
        opacity: 0.8,
        marginTop: '0.35rem',
        fontStyle: 'italic',
        letterSpacing: '0.01em'
      }}
    >
      <strong>Source:</strong> {source}
    </p>
  );
}
