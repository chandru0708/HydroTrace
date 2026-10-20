import React from 'react';

export default function TriageTiers() {
  const tiers = [
    {
      tier: 'GREEN',
      heading: 'Not Detected',
      sub: 'Low MFI & Background DPV',
      bg: 'var(--color-leaf-green)',
      textColor: '#FFFFFF',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
      actionTitle: 'Action: Routine Retest Schedule',
      actionDesc: 'No elevated screening signal detected. Source remains on the regular rural seasonal monitoring calendar (6-month cycle).'
    },
    {
      tier: 'AMBER',
      heading: 'Detected – Monitor',
      sub: 'Moderate MFI or Detectable PFAS Shift',
      bg: 'var(--color-amber)',
      textColor: '#14213D',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
      actionTitle: 'Action: Retest in 2 Weeks & Notify Block',
      actionDesc: 'Signal detected above baseline. Automated SMS flags the Block Development Officer and schedules a mandatory re-verification within 14 days.'
    },
    {
      tier: 'RED',
      heading: 'High – Send to Lab',
      sub: 'Substantial DPV Drop or High MFI',
      bg: 'var(--color-alert-red)',
      textColor: '#FFFFFF',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
          <path d="M5.52 16h12.96" />
        </svg>
      ),
      actionTitle: 'Action: Immediate NABL Lab Dispatch',
      actionDesc: 'Suspect concentration flagged. System generates an automated Chain-of-Custody ticket; courier collects sample for gold-standard LC-MS/MS confirmation.'
    }
  ];

  return (
    <section
      id="triage"
      style={{
        backgroundColor: 'var(--color-paper)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-alert-red)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            08 · First-Tier Triage Framework
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            We don&rsquo;t say &ldquo;safe&rdquo;. We say what to do next.
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#333', lineHeight: 1.55 }}>
            HydroTrace is an honest field triage tool, not a compliance rubber stamp. Every measurement routes water authorities to an explicit, preventative operational response.
          </p>
        </div>

        {/* 3 Tall Poster-Style Solid-Colour Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {tiers.map((t) => (
            <div
              key={t.tier}
              style={{
                backgroundColor: t.bg,
                color: t.textColor,
                borderRadius: '16px',
                border: '3px solid var(--color-ink)',
                padding: '2.5rem 2rem',
                boxShadow: '6px 6px 0px var(--color-ink)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '440px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 900,
                      letterSpacing: '0.1em',
                      backgroundColor: 'var(--color-ink)',
                      color: '#FFFFFF',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px'
                    }}
                  >
                    {t.tier}
                  </span>
                  <div style={{ opacity: 0.9 }}>{t.icon}</div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  {t.heading}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', opacity: 0.85, marginBottom: '2rem' }}>
                  {t.sub}
                </p>
              </div>

              {/* Action Box */}
              <div
                style={{
                  backgroundColor: 'rgba(20, 33, 61, 0.12)',
                  border: '2px solid var(--color-ink)',
                  borderRadius: '10px',
                  padding: '1.25rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '0.98rem', marginBottom: '0.35rem' }}>
                  {t.actionTitle}
                </div>
                <div style={{ fontSize: '0.88rem', lineHeight: 1.5, opacity: 0.95 }}>
                  {t.actionDesc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Footnote */}
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--color-ink)',
            backgroundColor: 'rgba(20, 33, 61, 0.05)',
            border: '1.5px dashed rgba(20, 33, 61, 0.3)',
            borderRadius: '8px',
            padding: '1rem 1.5rem',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          * India currently has no statutory PFAS maximum contaminant level under IS 10500:2012. These triage tiers represent operational screening bands, not regulatory compliance verdicts. Exact numerical cut-offs are locked only following formal NABL co-validation studies.
        </div>

      </div>
    </section>
  );
}
