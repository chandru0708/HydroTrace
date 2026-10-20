import React from 'react';

export default function Challenges() {
  const challenges = [
    {
      num: '01',
      problem: 'PFAS exists at parts-per-trillion, below direct sensor LOD.',
      fix: 'WAX solid-phase extraction pre-concentrates 250 mL into 0.5 mL (40–60× boost). Suspect detections route directly to NABL labs for LC-MS/MS confirmation.',
      rotate: '-1.5deg'
    },
    {
      num: '02',
      problem: 'Ammoniated methanol eluent weakens MIP cavity binding affinity.',
      fix: 'We dilute the 0.5 mL eluate 1:4 into 2.0 mL aqueous phosphate buffer (or optionally evaporate methanol on a 3.3V micro-heater block before redissolution).',
      rotate: '1.2deg'
    },
    {
      num: '03',
      problem: 'Hard, salty borewell water distorts electrochemical peak potentials.',
      fix: 'MIP minus NIP differential sensing. Both electrodes experience identical ionic matrix effects in the same drop; differential S_net cancels baseline shifts.',
      rotate: '-2deg'
    },
    {
      num: '04',
      problem: 'Nile Red non-specifically stains natural lipids and plant debris.',
      fix: 'Dual verification: photodiode subtracts unstained blank (MFI), and ESP32-S3 macro camera records a high-resolution audit photo for manual/automated review.',
      rotate: '1.8deg'
    },
    {
      num: '05',
      problem: 'Falsified reports or replay of historical good results by operators.',
      fix: 'Hardware HMAC-SHA256 signature with monotonic 12-bit test counter and DS3231 timestamp. Resent codes are rejected by the server as counter reuse.',
      rotate: '-1deg'
    },
    {
      num: '06',
      problem: 'Kit components leaching fluoropolymers (false positives).',
      fix: '100% certified PTFE-free architecture. All syringes, seals, tubing, and housings use virgin polypropylene or high-density polyethylene, checked by routine field blanks.',
      rotate: '1.5deg'
    }
  ];

  return (
    <section
      id="challenges"
      style={{
        backgroundColor: 'var(--color-lilac)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-pfas-violet)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            16 · Rigorous Engineering Honesty
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            Hard problems, honest answers.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: '#2B2B2B' }}>
            Emerging contaminant sensing in field conditions has genuine scientific limitations. Here is how each failure mode is engineered away:
          </p>
        </div>

        {/* 6 Torn Notebook Slips Pinned on Flat Board */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {challenges.map((c) => (
            <div
              key={c.num}
              style={{
                backgroundColor: '#FFFFFF',
                border: '2.5px solid var(--color-ink)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                boxShadow: '5px 5px 0px var(--color-ink)',
                transform: `rotate(${c.rotate})`,
                transition: 'transform 0.15s ease',
                position: 'relative'
              }}
            >
              {/* Pushpin at top center */}
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-nile-coral)',
                  border: '2px solid var(--color-ink)',
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 900, color: 'var(--color-pfas-violet)' }}>
                  CHALLENGE {c.num}
                </span>
              </div>

              {/* Problem */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-alert-red)', textTransform: 'uppercase' }}>
                  THE OBSTACLE:
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-ink)', marginTop: '0.2rem', lineHeight: 1.4 }}>
                  {c.problem}
                </div>
              </div>

              {/* Fix */}
              <div style={{ background: 'var(--color-paper)', border: '1.5px solid rgba(20, 33, 61, 0.2)', borderRadius: '6px', padding: '0.85rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-leaf-green)', textTransform: 'uppercase' }}>
                  OUR MITIGATION:
                </div>
                <div style={{ fontSize: '0.88rem', color: '#333', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  {c.fix}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
