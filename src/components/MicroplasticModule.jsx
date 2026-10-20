import React, { useState } from 'react';
import MarginNote from '../ui/MarginNote';
import { SimulatedTag, SourceCaption } from '../ui/SimulatedTag';

export default function MicroplasticModule() {
  const [activeStep, setActiveStep] = useState(4); // default to glowing stained scan
  const [tierSlider, setTierSlider] = useState(1); // 0: Low, 1: Moderate, 2: High

  const steps = [
    { num: 1, name: 'Loaded Filter', desc: 'Raw 25 mm glass-fibre filter with sand, silt, and trapped plastic particles.' },
    { num: 2, name: 'Blank Scan', desc: '470 nm blue LED illuminates unstained disc. Photodiode records baseline I_blank.' },
    { num: 3, name: 'Nile Red Stain', desc: '3 drops of Nile Red in ethanol applied; 10-minute incubation begins.' },
    { num: 4, name: 'Stained Fluorescence', desc: 'Fluorophore adsorbs to polymer surfaces; hydrophobic particles glow bright coral.' },
    { num: 5, name: 'Audit Photo & Blob Count', desc: 'ESP32-S3 camera takes ~25 KB macro JPEG; blob analysis flags particles ≥ 20 µm.' }
  ];

  const tiers = [
    { name: 'Low MFI', particles: '< 15 particles/L eq.', color: 'var(--color-leaf-green)', action: 'Routine retest schedule' },
    { name: 'Moderate MFI', particles: '15 – 80 particles/L eq.', color: 'var(--color-amber)', action: 'Retest within 2 weeks, notify block' },
    { name: 'High MFI', particles: '> 80 particles/L eq.', color: 'var(--color-alert-red)', action: 'Sample to NABL lab for µ-FTIR confirmation' }
  ];

  return (
    <section
      id="microplastics"
      style={{
        backgroundColor: 'var(--color-peach)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-nile-coral)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            05 · Optical Fluorescence Diagnostics
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}
          >
            Making microplastics <span style={{ fontStyle: 'italic', color: 'var(--color-nile-coral)' }}>glow</span>.
          </h2>
          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', color: '#2B2B2B', lineHeight: 1.55 }}>
            Nile Red is an uncharged hydrophobic phenoxazone dye that selectively partitions into plastic polymers. Under 470 nm blue light, it fluoresces intensely in the coral-orange spectrum.
          </p>
          <SourceCaption
            source="Maes et al., Scientific Reports (2017) demonstrated rapid-screening tagging with Nile Red."
          />
        </div>

        {/* Interactive Layout: Central 5-Step Filter Disc + Side Optical Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="mp-grid">
          
          {/* Left: Clock-Face Circular Stepper with Animated Filter Disc */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              position: 'relative'
            }}
          >
            {/* Stepper Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(20, 33, 61, 0.15)' }}>
              {steps.map((st) => (
                <button
                  key={st.num}
                  onClick={() => setActiveStep(st.num)}
                  style={{
                    backgroundColor: activeStep === st.num ? 'var(--color-nile-coral)' : 'var(--color-paper)',
                    color: activeStep === st.num ? '#FFFFFF' : 'var(--color-ink)',
                    border: '1.5px solid var(--color-ink)',
                    borderRadius: '6px',
                    padding: '0.4rem 0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: activeStep === st.num ? '2px 2px 0px var(--color-ink)' : 'none',
                    transition: 'all 0.1s ease'
                  }}
                >
                  Step {st.num}: {st.name}
                </button>
              ))}
            </div>

            {/* Simulated Filter Disc Visualization */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <svg viewBox="0 0 320 320" fill="none" style={{ width: '100%', maxHeight: '320px', display: 'block', margin: '0 auto' }}>
                {/* Chamber Housing Ring */}
                <circle cx="160" cy="160" r="145" fill="#14213D" stroke="#0E9AA7" strokeWidth="3" />
                <circle cx="160" cy="160" r="130" fill="#25355A" />

                {/* Glass Fibre Disc Substrate */}
                <circle
                  cx="160"
                  cy="160"
                  r="110"
                  fill={activeStep === 2 || activeStep === 4 ? '#0D1B2A' : '#E8ECEF'}
                  stroke="#14213D"
                  strokeWidth="2.5"
                />

                {/* Blue Light Beam on Step 2 and 4 */}
                {(activeStep === 2 || activeStep === 4) && (
                  <circle cx="160" cy="160" r="105" fill="#00E5FF" opacity="0.18" />
                )}

                {/* Staining Drops on Step 3 */}
                {activeStep === 3 && (
                  <g>
                    <circle cx="140" cy="120" r="8" fill="var(--color-nile-coral)" opacity="0.8" />
                    <circle cx="180" cy="140" r="10" fill="var(--color-nile-coral)" opacity="0.8" />
                    <circle cx="155" cy="180" r="7" fill="var(--color-nile-coral)" opacity="0.8" />
                    <text x="90" y="250" fontFamily="var(--font-hand)" fontSize="18" fill="var(--color-nile-coral)">
                      3 drops Nile Red (in Ethanol)
                    </text>
                  </g>
                )}

                {/* Particles: Sand & Silt (Always beige, never glows) */}
                <circle cx="120" cy="140" r="4" fill="#C2B280" />
                <circle cx="135" cy="185" r="3" fill="#A89F91" />
                <polygon points="190,120 196,124 192,129 187,125" fill="#C2B280" />
                <circle cx="210" cy="175" r="3.5" fill="#A89F91" />

                {/* Particles: Microplastics (Coral) */}
                {/* On Step 1 & 2: dull grey-coral. On Step 4 & 5: Bright glowing coral */}
                <g>
                  {/* Fragment 1 (PET fiber) */}
                  <path
                    d="M140 130 Q 155 125 170 135"
                    stroke={activeStep >= 4 ? '#FF6B4A' : '#777777'}
                    strokeWidth={activeStep >= 4 ? '5' : '3'}
                    strokeLinecap="round"
                  />
                  {/* Fragment 2 (PE Bead) */}
                  <circle
                    cx="150"
                    cy="165"
                    r={activeStep >= 4 ? '7' : '5'}
                    fill={activeStep >= 4 ? '#FF6B4A' : '#888888'}
                  />
                  {activeStep >= 4 && <circle cx="150" cy="165" r="12" fill="#FF6B4A" opacity="0.3" />}

                  {/* Fragment 3 (PP Flake) */}
                  <polygon
                    points="175,170 190,175 185,188 170,182"
                    fill={activeStep >= 4 ? '#FF6B4A' : '#777777'}
                  />
                  {activeStep >= 4 && <polygon points="172,167 193,173 187,191 167,185" fill="#FF6B4A" opacity="0.25" />}
                </g>

                {/* Step 5: Audit Camera Flash & Detection Circles */}
                {activeStep === 5 && (
                  <g>
                    {/* Hand-drawn green circles around particles ≥ 20 µm */}
                    <circle cx="150" cy="165" r="16" fill="none" stroke="#2BA84A" strokeWidth="2.5" strokeDasharray="4 2" />
                    <text x="170" y="160" fontFamily="var(--font-mono)" fontSize="9" fill="#2BA84A" fontWeight="bold">≥ 28 µm</text>

                    <circle cx="180" cy="180" r="18" fill="none" stroke="#2BA84A" strokeWidth="2.5" strokeDasharray="4 2" />
                    <text x="200" y="195" fontFamily="var(--font-mono)" fontSize="9" fill="#2BA84A" fontWeight="bold">≥ 34 µm</text>
                  </g>
                )}
              </svg>

              {/* Step Summary Caption */}
              <div style={{ marginTop: '1rem', background: 'var(--color-paper)', border: '1.5px solid var(--color-ink)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem' }}>
                  {steps[activeStep - 1].name}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#555', marginTop: '0.2rem' }}>
                  {steps[activeStep - 1].desc}
                </div>
              </div>
            </div>

            {/* Handwritten Caveat Margin Notes */}
            <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <MarginNote text="ethanol, not acetone — acetone dissolves plastic!" direction="right" color="var(--color-nile-coral)" />
              <SimulatedTag text="Simulated optical capture" />
            </div>
          </div>

          {/* Right: Optical Train Stack & Formula Panel */}
          <div>
            
            {/* Taped Paper Card */}
            <div
              style={{
                backgroundColor: 'var(--color-paper)',
                border: '3px solid var(--color-ink)',
                borderRadius: '12px',
                padding: '1.75rem',
                boxShadow: '5px 5px 0px var(--color-ink)',
                position: 'relative',
                marginBottom: '1.75rem'
              }}
            >
              {/* Fake Tape Corners */}
              <div className="tape-strip" style={{ top: '-8px', left: '20px', transform: 'rotate(-5deg)' }} />
              <div className="tape-strip" style={{ top: '-8px', right: '20px', transform: 'rotate(5deg)' }} />

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-nile-coral)' }}>
                THE OPTICAL TRAIN (LIGHT-TIGHT CASING)
              </span>

              {/* Layered Stack Diagram */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ background: '#CDEFF2', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid var(--color-ink)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  1. 470 nm Blue LED (Excitation)
                </div>
                <div style={{ textAlign: 'center', fontSize: '10px', color: '#888' }}>▼</div>
                <div style={{ background: '#FFFFFF', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid var(--color-ink)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  2. Short-Pass Optical Filter (Blocks stray wavelengths)
                </div>
                <div style={{ textAlign: 'center', fontSize: '10px', color: '#888' }}>▼</div>
                <div style={{ background: '#FFE1D6', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1.5px solid var(--color-nile-coral)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  3. Stained 25 mm GF Filter Disc
                </div>
                <div style={{ textAlign: 'center', fontSize: '10px', color: '#888' }}>▼</div>
                <div style={{ background: '#FFFFFF', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid var(--color-ink)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  4. 550 nm Long-Pass Filter (Isolates Nile Red emission)
                </div>
                <div style={{ textAlign: 'center', fontSize: '10px', color: '#888' }}>▼</div>
                <div style={{ background: 'var(--color-butter)', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid var(--color-ink)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  5. BPW34 Photodiode + TIA + ESP32 Camera
                </div>
              </div>

              {/* Big MFI Formula */}
              <div style={{ background: '#FFFFFF', border: '2px solid var(--color-ink)', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666', textTransform: 'uppercase' }}>
                  Microplastic Fluorescence Index
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-nile-coral)', margin: '0.25rem 0' }}>
                  MFI = I_stained − I_blank
                </div>
                <div style={{ fontSize: '0.78rem', color: '#444' }}>
                  Background subtraction cancels sand, silt, and filter autofluorescence.
                </div>
              </div>
            </div>

            {/* Interactive Tier Slider: Low / Moderate / High */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '3px solid var(--color-ink)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '4px 4px 0px var(--color-ink)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800 }}>
                  CALIBRATED TRIAGE TIER:
                </span>
                <span
                  style={{
                    backgroundColor: tiers[tierSlider].color,
                    color: tierSlider === 1 ? 'var(--color-ink)' : '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                  }}
                >
                  {tiers[tierSlider].name}
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="2"
                step="1"
                value={tierSlider}
                onChange={(e) => setTierSlider(parseInt(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--color-nile-coral)', marginBottom: '0.75rem' }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#666' }}>
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
              </div>

              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed #ccc', fontSize: '0.85rem' }}>
                <strong>Equivalent Surface:</strong> {tiers[tierSlider].particles}
                <div style={{ color: '#444', marginTop: '0.2rem' }}>
                  <strong>Action:</strong> {tiers[tierSlider].action}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.8rem', color: '#555' }}>
              * Calibrated against micro-milled PET, PE, PP, PS. Tracks hydrophobic surface area, reported as particles/L equivalent.
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .mp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
