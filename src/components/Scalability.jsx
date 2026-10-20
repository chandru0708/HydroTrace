import React from 'react';
import { SourceCaption } from '../ui/SimulatedTag';

export default function Scalability() {
  const stones = [
    { num: 'I', title: 'Current Prototype', desc: 'Dual screening for PFOA/PFOS and microplastics in 250 mL water.' },
    { num: 'II', title: 'Modular Strip Expansion', desc: 'Same reader accepts new MIP strips targeting pharmaceuticals & pesticides.' },
    { num: 'III', title: 'Reader V2 Integration', desc: 'Integrated custom single-board PCB with motorized spring compression.' },
    { num: 'IV', title: 'Make in India MSME', desc: 'Tooling transfer to domestic medical diagnostic manufacturers.' },
    { num: 'V', title: 'National Rollout', desc: 'Integrated into National Jal Jeevan Mission FTK training & WQMIS portal.' }
  ];

  const statMetrics = [
    { val: '15.44 Cr', label: 'Rural Tap Connections Provided' },
    { val: '24.80 Lakh', label: 'Women Trained on Field Test Kits' },
    { val: '2,162', label: 'Laboratories Integrated on WQMIS' },
    { val: '9.32 Lakh', label: 'Rural Schools with Tap Water Supply' }
  ];

  const impactStatements = [
    { title: 'Early Warning Triage', text: 'Flags contaminated habitations in 35 minutes before chronic bioaccumulation occurs.' },
    { title: '50× Cost Reduction', text: 'Screens suspect sources at ₹150–200 instead of ₹8,000 commercial laboratory charges.' },
    { title: 'Two Emerging Classes', text: 'Simultaneously captures both persistent fluorochemicals and synthetic polymer particles.' },
    { title: 'Works Without Internet', text: 'Operates seamlessly via 2G keypad SMS or on-device cache in deep rural blind spots.' },
    { title: 'Cryptographically Trusted Data', text: 'Guarantees tamper-proof provenance for public health planning via HMAC signatures.' },
    { title: 'Evidence for IS 10500 Revision', text: 'Generates nationwide empirical baseline data to inform new statutory Indian standards.' }
  ];

  return (
    <section
      id="impact"
      style={{
        backgroundColor: 'var(--color-river-teal)',
        color: 'var(--color-paper)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            18 · National Scale & Roadmap
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            From one kit to a national screening network.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: '#CDEFF2' }}>
            Built specifically to leverage the existing 24-lakh-strong rural testing workforce established under the Jal Jeevan Mission.
          </p>
        </div>

        {/* Top: 5 Stepping Stones Across River */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-signal-yellow)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            5-Stage Scale Stepping Stones:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
            {stones.map((st) => (
              <div
                key={st.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-ink)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '12px',
                  padding: '1.5rem 1.25rem',
                  boxShadow: '4px 4px 0px var(--color-ink)'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, color: 'var(--color-river-teal)' }}>
                  STAGE {st.num}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: '0.35rem 0' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.45 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: 4 Huge Fraunces Numbers from PIB JJM Factsheet */}
        <div
          style={{
            backgroundColor: '#123956',
            border: '3px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '18px',
            padding: '3rem 2rem',
            marginBottom: '4.5rem'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', textAlign: 'center' }}>
            {statMetrics.map((sm, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 900, color: 'var(--color-signal-yellow)', lineHeight: 1 }}>
                  {sm.val}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#CDEFF2', marginTop: '0.75rem', fontWeight: 600 }}>
                  {sm.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed rgba(205, 239, 242, 0.3)' }}>
            <SourceCaption source="PIB Jal Jeevan Mission factsheet, Feb 2025" />
          </div>
        </div>

        {/* Bottom: 6 Impact Statements as 2-Row Editorial List (NOT generic cards) */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-signal-yellow)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Systemic Impact Dimensions:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem 3.5rem' }}>
            {impactStatements.map((imp, idx) => (
              <div key={idx} style={{ borderTop: '2px solid rgba(255, 255, 255, 0.3)', paddingTop: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  {imp.title}
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#CDEFF2', lineHeight: 1.6 }}>
                  {imp.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
