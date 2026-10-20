import React from 'react';

export default function Innovations() {
  return (
    <section
      id="innovations"
      style={{
        backgroundColor: 'var(--color-butter)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-ink)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            03 · Core Inventions
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            Six ideas that make it work.
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '0.75rem', fontSize: '1.05rem', color: '#333' }}>
            We redesigned the analytical train from the ground up for rural water testing. Each mechanism replaces an expensive laboratory prerequisite.
          </p>
        </div>

        {/* Bento Grid: 6 Distinct Tiles of Varied Sizes & Solid Colors */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem'
          }}
          className="bento-container"
        >
          {/* Tile 1: One Sample, Two Tests (Wide Teal) - 7 cols */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: 'var(--color-river-teal)',
              color: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile"
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: '#FFFFFF', color: 'var(--color-ink)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                IDEA 01 · FLUIDIC INTEGRATION
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                One sample, two tests.
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.95, lineHeight: 1.55, maxWidth: '440px' }}>
                The sample stream splits physically at the glass-fibre filter: insoluble microplastic fragments stay on the filter disc, while dissolved PFAS chains pass through into the weak anion exchange cartridge. One single manual push powers both screenings.
              </p>
            </div>
            
            {/* Inline SVG Schematic of split */}
            <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.15)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#FFFFFF' }}>250 mL Syringe</span>
              <span style={{ color: 'var(--color-signal-yellow)', fontWeight: 'bold' }}>➔ Filter (Coral Plastics Stop) ➔ WAX (Violet PFAS Captures)</span>
            </div>
          </div>

          {/* Tile 2: Background-Subtracted Optics (Tall Coral) - 5 cols */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: 'var(--color-nile-coral)',
              color: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile"
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: '#FFFFFF', color: 'var(--color-nile-coral)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                IDEA 02 · FLUORESCENCE SUBTRACTION
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                Background-subtracted optics.
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.95, lineHeight: 1.55 }}>
                Filter fibers and mineral silt create background glare. We take an unstained blank photo & photodiode reading before staining with Nile Red. The formula <strong>MFI = I_stained − I_blank</strong> isolates true microplastic plastic surface area.
              </p>
            </div>

            <div style={{ marginTop: '1rem', background: 'rgba(20,33,61,0.2)', padding: '0.5rem 0.8rem', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textAlign: 'center' }}>
              True Signal = Total Fluorescence − Filter Background
            </div>
          </div>

          {/* Tile 3: MIP/NIP Differential Sensing (Large Solid Violet) - 7 cols */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: 'var(--color-pfas-violet)',
              color: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile"
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: '#FFFFFF', color: 'var(--color-pfas-violet)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                IDEA 03 · ELECTROCHEMICAL DIFFERENTIAL
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                MIP / NIP differential sensing.
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.95, lineHeight: 1.55 }}>
                Two carbon working electrodes side by side in the same drop: WE1 has molecularly imprinted cavities that selectively dock PFOA/PFOS templates; WE2 has the exact same polymer matrix with zero cavities. Subtracting NIP baseline cancels hard, salty borewell ions automatically!
              </p>
            </div>

            <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.15)', padding: '0.6rem 0.9rem', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
              S_net = ΔI_MIP − ΔI_NIP (Self-compensates for local hardness & pH)
            </div>
          </div>

          {/* Tile 4: Works with any phone (Signal Yellow) - 5 cols */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: 'var(--color-signal-yellow)',
              color: 'var(--color-ink)',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile"
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--color-ink)', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                IDEA 04 · ZERO-DEPENDENCY TELEMETRY
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                Works with any phone. Or none.
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.55 }}>
                No mobile app required. Reads out on an on-device OLED for standalone use; formats a 12-character Crockford code for keypad phones over 2G SMS; or opens a browser captive-portal via local Wi-Fi hotspot on smartphones.
              </p>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 'bold' }}>
              <span style={{ background: '#FFFFFF', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid var(--color-ink)' }}>OLED Only</span>
              <span style={{ background: '#FFFFFF', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid var(--color-ink)' }}>2G SMS</span>
              <span style={{ background: '#FFFFFF', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid var(--color-ink)' }}>Captive Web</span>
            </div>
          </div>

          {/* Tile 5: Tamper-Proof Cryptography (Dark Ink) - 6 cols */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: 'var(--color-ink)',
              color: 'var(--color-paper)',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile"
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--color-signal-yellow)', color: 'var(--color-ink)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                IDEA 05 · INTEGRITY
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                Tamper-proof signed results.
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#CDEFF2', lineHeight: 1.55 }}>
                Results are signed by an on-chip HMAC-SHA256 secret key with an incremental 12-bit hardware test counter. Altering even one character destroys the signature; resending an old code triggers counter-reuse rejection.
              </p>
            </div>

            <div style={{ marginTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-signal-yellow)', background: 'rgba(255,201,60,0.1)', padding: '0.5rem 0.8rem', borderRadius: '6px', border: '1px solid rgba(255,201,60,0.3)' }}>
              1 in 67 Million Chance of a Random Code Guess Passing
            </div>
          </div>

          {/* Tile 6: Honest Triage (Leaf Green) - 6 cols */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: 'var(--color-leaf-green)',
              color: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
            className="bento-tile"
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: '#FFFFFF', color: 'var(--color-leaf-green)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                IDEA 06 · SCIENTIFIC INTEGRITY
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                Honest triage. We never say &ldquo;safe&rdquo;.
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.95, lineHeight: 1.55 }}>
                Field kits cannot issue legal safety certifications. We classify sources into actionable triage bands (Green: Routine Retest, Amber: Retest 2 Wks, Red: NABL Lab Confirmation). Red sources automatically trigger lab dispatch.
              </p>
            </div>

            <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem 0.8rem', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textAlign: 'center' }}>
              First-Tier Screening to Protect Laboratory Capacity
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-tile {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
