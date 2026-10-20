import React from 'react';
import { SourceCaption } from '../ui/SimulatedTag';

export default function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Invisible at low levels',
      desc: "PFAS matter at parts-per-trillion levels; conventional colour or turbidity test strips simply cannot detect them."
    },
    {
      num: '02',
      title: 'No Indian limit yet',
      desc: "IS 10500:2012 currently has no PFAS limit; the Bureau of Indian Standards has formally decided to revise it.",
      source: "CPCB reply, NGT OA 548/2024"
    },
    {
      num: '03',
      title: 'Already in Indian water',
      desc: "An IIT Madras study (2024) revealed PFAS contamination in Chennai lakes directly utilised for drinking water supply.",
      source: "NGT OA 548/2024"
    },
    {
      num: '04',
      title: 'Lab-only testing bottleneck',
      desc: "High-resolution LC-MS/MS and µ-FTIR/Raman demand central facilities, trained chemists, ~₹8,000 per sample, and days of transit."
    },
    {
      num: '05',
      title: "Field kits can't help",
      desc: "Today's village chemical Field Test Kits (FTKs) cover routine parameters like pH, TDS, fluoride, and arsenic only."
    },
    {
      num: '06',
      title: 'No digital surveillance trail',
      desc: "Zero source-level electronic records exist for emerging contaminants in rural habitations to trigger preventative public health action."
    }
  ];

  return (
    <section
      id="problem"
      style={{
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-paper)',
        padding: '5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Editorial Magazine Spread Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'end', marginBottom: '3.5rem' }} className="problem-head-grid">
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-nile-coral)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
              01 · The Rural Blind Spot
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 900,
                color: 'var(--color-paper)',
                lineHeight: 1.1
              }}
            >
              The contaminants nobody tests for.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#CDEFF2',
                maxWidth: '560px'
              }}
            >
              PFAS &ldquo;forever chemicals&rdquo; and microplastics can only be measured today in well-equipped central laboratories. As a result, <strong>over 15 crore rural tap connections</strong> and millions of groundwater borewells are never screened for them.
            </p>
          </div>
        </div>

        {/* Horizontal Illustrated Hand-Inked Journey Strip */}
        <div
          style={{
            backgroundColor: '#1F315A',
            border: '2px dashed rgba(205, 239, 242, 0.3)',
            borderRadius: '12px',
            padding: '1.5rem 1rem',
            marginBottom: '4rem',
            overflowX: 'auto'
          }}
        >
          <div style={{ minWidth: '760px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
            
            {/* Step 1: Handpump */}
            <div style={{ textAlign: 'center', width: '130px' }}>
              <div style={{ width: '44px', height: '44px', margin: '0 auto 0.5rem', borderRadius: '50%', background: 'var(--color-river-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-paper)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>Handpump / Well</div>
              <div style={{ fontSize: '0.72rem', color: '#CDEFF2', opacity: 0.8 }}>Deep aquifer source</div>
            </div>

            <div style={{ flex: 1, height: '2px', background: 'rgba(205, 239, 242, 0.4)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', color: '#CDEFF2', fontSize: '10px' }}>➔</span>
            </div>

            {/* Step 2: Supply Scheme */}
            <div style={{ textAlign: 'center', width: '130px' }}>
              <div style={{ width: '44px', height: '44px', margin: '0 auto 0.5rem', borderRadius: '50%', background: 'var(--color-river-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-paper)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14" /></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>OHT / Scheme</div>
              <div style={{ fontSize: '0.72rem', color: '#CDEFF2', opacity: 0.8 }}>Chlorinated water</div>
            </div>

            <div style={{ flex: 1, height: '2px', background: 'rgba(205, 239, 242, 0.4)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', color: '#CDEFF2', fontSize: '10px' }}>➔</span>
            </div>

            {/* Step 3: Village Tap */}
            <div style={{ textAlign: 'center', width: '130px' }}>
              <div style={{ width: '44px', height: '44px', margin: '0 auto 0.5rem', borderRadius: '50%', background: 'var(--color-river-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-paper)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>Village Tap</div>
              <div style={{ fontSize: '0.72rem', color: '#CDEFF2', opacity: 0.8 }}>Daily consumption</div>
            </div>

            <div style={{ flex: 1, height: '2px', background: 'rgba(205, 239, 242, 0.4)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', color: 'var(--color-signal-yellow)', fontSize: '10px' }}>➔</span>
            </div>

            {/* Step 4: Today's FTK (?) */}
            <div style={{ textAlign: 'center', width: '150px' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 0.5rem', borderRadius: '50%', background: 'var(--color-signal-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--color-ink)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-ink)' }}>?</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-signal-yellow)' }}>Today's FTK</div>
              <div style={{ fontSize: '0.72rem', color: '#FFE1D6' }}>Tests pH, Fe, As only</div>
            </div>

            <div style={{ flex: 1, height: '2px', background: 'rgba(205, 239, 242, 0.4)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', color: 'var(--color-alert-red)', fontSize: '10px' }}>➔</span>
            </div>

            {/* Step 5: Blind Spot */}
            <div style={{ textAlign: 'center', width: '130px' }}>
              <div style={{ width: '44px', height: '44px', margin: '0 auto 0.5rem', borderRadius: '50%', background: 'var(--color-alert-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-paper)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-alert-red)' }}>Zero Record</div>
              <div style={{ fontSize: '0.72rem', color: '#CDEFF2', opacity: 0.8 }}>No action possible</div>
            </div>

          </div>
        </div>

        {/* 6 Problems as Numbered List (NOT Generic Cards) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem 4rem', marginBottom: '4rem' }}>
          {problems.map((p) => (
            <div key={p.num} style={{ borderTop: '1px solid rgba(205, 239, 242, 0.25)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-nile-coral)' }}>
                  {p.num}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-paper)' }}>
                  {p.title}
                </h3>
              </div>
              <p style={{ color: 'rgba(251, 246, 236, 0.82)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                {p.desc}
              </p>
              {p.source && <SourceCaption source={p.source} />}
            </div>
          ))}
        </div>

        {/* Editorial Pull Quote */}
        <div
          style={{
            borderLeft: '4px solid var(--color-signal-yellow)',
            paddingLeft: '1.75rem',
            maxWidth: '850px',
            margin: '0 auto'
          }}
        >
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
              color: 'var(--color-signal-yellow)',
              lineHeight: 1.25,
              marginBottom: '0.5rem'
            }}
          >
            &ldquo;If you can&rsquo;t measure it in the village, you can&rsquo;t act on it in time.&rdquo;
          </blockquote>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#CDEFF2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            — National Jal Jeevan Mission Field Triage Imperative
          </p>
        </div>

      </div>

      <style>{`
        @media (min-width: 850px) {
          .problem-head-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
