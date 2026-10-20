import React from 'react';

export default function TierBadge({ tier = 'green', label, size = 'md' }) {
  const tierConfig = {
    green: {
      bg: 'var(--color-leaf-green)',
      text: '#ffffff',
      defaultLabel: 'GREEN — Not Detected / Low MFI',
      action: 'Routine retest schedule'
    },
    amber: {
      bg: 'var(--color-amber)',
      text: '#14213D',
      defaultLabel: 'AMBER — Detected – Monitor / Moderate MFI',
      action: 'Retest in 2 weeks, notify block officer'
    },
    red: {
      bg: 'var(--color-alert-red)',
      text: '#ffffff',
      defaultLabel: 'RED — High – Send to Lab / High MFI',
      action: 'NABL confirmation required, district alert'
    }
  };

  const config = tierConfig[tier.toLowerCase()] || tierConfig.green;
  const displayLabel = label || config.defaultLabel;

  const padding = size === 'sm' ? '0.2rem 0.5rem' : size === 'lg' ? '0.5rem 1rem' : '0.35rem 0.75rem';
  const fontSize = size === 'sm' ? '0.75rem' : size === 'lg' ? '1rem' : '0.85rem';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        backgroundColor: config.bg,
        color: config.text,
        padding,
        fontSize,
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        borderRadius: '4px',
        border: '1.5px solid var(--color-ink)',
        boxShadow: '1.5px 1.5px 0px var(--color-ink)',
        letterSpacing: '0.02em',
        userSelect: 'none'
      }}
    >
      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: config.text, display: 'inline-block' }} />
      {displayLabel}
    </span>
  );
}
