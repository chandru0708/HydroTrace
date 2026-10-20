import React from 'react';

export default function ValidationRoadmap() {
  const milestones = [
    {
      step: '01',
      title: 'Analog Sub-System Benchmark',
      goal: 'Benchmark DIY potentiostat against a research-grade Metrohm Autolab / PalmSens on standard 5 mM ferricyanide redox probe.',
      target: 'Line-linearity R² ≥ 0.99 over ±2 µA dynamic range',
      status: 'PLANNED'
    },
    {
      step: '02',
      title: 'PFAS Recovery & Binding Curve',
      goal: 'Establish dose-response curves in pure buffer, then spiked tap water and hard borewell water; measure WAX recovery factor.',
      target: 'Confirm 40–60× recovery and determine true matrix LOD for PFOA/PFOS',
      status: 'PLANNED'
    },
    {
      step: '03',
      title: 'Microplastic MFI Standardisation',
      goal: 'Tag precision-milled microplastics (PET fibres, PE micro-beads, PP flakes, PS spheres) across size bands from 20 µm to 500 µm.',
      target: 'Lock numerical MFI boundaries separating Low, Moderate, and High tiers',
      status: 'PLANNED'
    },
    {
      step: '04',
      title: 'Side-by-Side NABL Laboratory Co-Run',
      goal: 'Collect 20–30 blind environmental water samples across urban lakes, agricultural wells, and village taps; split samples with an accredited LC-MS/MS lab.',
      target: 'Demonstrate zero false negatives on RED-tier high concentration sources',
      status: 'PLANNED'
    },
    {
      step: '05',
      title: 'Field Usability & Human Factors',
      goal: 'Deploy prototypes with 5–10 non-expert rural field workers (JJM VWSC members) under actual outdoor sunlight and heat.',
      target: 'Achieve total protocol completion under 40 minutes with 100% valid signed codes',
      status: 'PLANNED'
    }
  ];

  return (
    <section
      id="roadmap"
      style={{
        backgroundColor: 'var(--color-paper)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            17 · Scientific Honesty
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            What we still have to prove.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: '#444' }}>
            HydroTrace is an active prototype concept. Every claim must be substantiated through controlled validation milestones before deployment under Jal Jeevan Mission.
          </p>
        </div>

        {/* Milestone Road Strip */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
          {milestones.map((m, idx) => (
            <div
              key={m.step}
              style={{
                backgroundColor: '#FFFFFF',
                border: '3px solid var(--color-ink)',
                borderRadius: '14px',
                padding: '2rem',
                boxShadow: '5px 5px 0px var(--color-ink)',
                display: 'grid',
                gridTemplateColumns: '80px 1fr 140px',
                gap: '1.5rem',
                alignItems: 'center'
              }}
              className="roadmap-card"
            >
              {/* Step Num */}
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-butter)',
                  border: '2.5px solid var(--color-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: 'var(--color-ink)'
                }}
              >
                {m.step}
              </div>

              {/* Title & Goal */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.35rem' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                  {m.goal}
                </p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-pfas-violet)', fontWeight: 700 }}>
                  Target: {m.target}
                </div>
              </div>

              {/* Status Flag */}
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    backgroundColor: 'var(--color-signal-yellow)',
                    color: 'var(--color-ink)',
                    border: '1.5px solid var(--color-ink)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    padding: '0.35rem 0.8rem',
                    borderRadius: '4px',
                    display: 'inline-block',
                    letterSpacing: '0.05em'
                  }}
                >
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .roadmap-card {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
