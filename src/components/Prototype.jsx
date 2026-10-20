import React, { useState } from 'react';
import Sticker from '../ui/Sticker';

export default function Prototype() {
  const [activePart, setActivePart] = useState(2); // default to ESP32-S3

  const parts = [
    { num: 1, name: 'Reader Body (IP65 Dark-Box)', desc: 'Custom CNC/moulded light-tight enclosure preventing ambient optical leakage during fluorescence sensing.' },
    { num: 2, name: 'ESP32-S3 Camera Board', desc: 'Dual-core Xtensa 240 MHz MCU, on-chip crypto engine, offline captive portal host, and macro camera lens for audit photos.' },
    { num: 3, name: 'DIY Potentiostat Sub-System', desc: 'MCP6004 op-amp, MCP4725 DAC, ADS1115 ADC, and CD4053 multiplexer configured for precision ±2 µA DPV sweeps.' },
    { num: 4, name: 'MIP / NIP Strip Slot', desc: 'Gold-plated 4-pin card-edge connector receiving the dual working electrode thick-film sensor strip.' },
    { num: 5, name: 'Fluorescence Optics Chamber', desc: 'Integrated 470 nm blue LED, optical excitation short-pass filter, BPW34 silicon PIN photodiode, and 550 nm emission filter.' },
    { num: 6, name: 'OLED Display & Status Traffic LEDs', desc: '0.96-inch high-contrast monochrome I2C OLED screen paired with three 5 mm ultra-bright Green/Amber/Red LEDs and piezobuzzer.' },
    { num: 7, name: 'DS3231 Precision Real-Time Clock', desc: 'Battery-backed TCXO RTC preserving nanosecond-grade timestamps across months of complete offline field deployment.' },
    { num: 8, name: 'Power Management Subsystem', desc: 'Single 18650 Li-ion cell (2600 mAh), TP4056 USB-C charging IC, and LP2985 ultra-low-noise 3.3V LDO for analog sensor quietness.' },
    { num: 9, name: 'Spring Syringe & 25 mm Filter Holder', desc: 'Constant-force spring plunger driving 250 mL water through polypropylene luer-lock housing with 25 mm glass-fibre filter.' },
    { num: 10, name: 'Single-Use WAX Cartridge', desc: 'Weak anion exchange SPE cartridge capturing anionic perfluoroalkyl substances with zero fluoropolymer leaching.' },
    { num: 11, name: 'Sealed Reagent Ampoules', desc: 'Hermetically sealed glass ampoules containing 3 drops Nile Red in ethanol, 0.5 mL ammoniated methanol, and 5 mM ferri/ferrocyanide buffer.' },
    { num: 12, name: 'Optional Micro-Heater Block', desc: '3.3V resistive heating block capable of evaporating methanol eluent for dry residue redissolution.' }
  ];

  return (
    <section
      id="prototype"
      className="bg-blueprint-grid"
      style={{
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header with 2 Giant Stickers */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
              13 · Hardware Architecture
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.15
              }}
            >
              Inside the kit.
            </h2>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: '#333', maxWidth: '600px' }}>
              Twelve modular subsystems engineered with readily available commercial-off-the-shelf components to ensure indigenous manufacturing feasibility.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Sticker rotate="-3deg" color="var(--color-signal-yellow)">
              Reusable Reader ≈ ₹2,700
            </Sticker>
            <Sticker rotate="2deg" color="var(--color-sky)" textColor="var(--color-ink)">
              Test Consumables ₹150–200
            </Sticker>
          </div>
        </div>

        {/* Exploded Interactive Parts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'start' }} className="proto-grid">
          
          {/* Left: 12 Numbered Callout Buttons & Illustrated Blueprint */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--color-ink)' }}>
              EXPLODED BOM SUB-ASSEMBLIES (TAP TO INSPECT):
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {parts.map((p) => {
                const isSelected = activePart === p.num;
                return (
                  <button
                    key={p.num}
                    onClick={() => setActivePart(p.num)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      textAlign: 'left',
                      backgroundColor: isSelected ? 'var(--color-signal-yellow)' : 'var(--color-paper)',
                      border: isSelected ? '2.5px solid var(--color-ink)' : '1.5px solid rgba(20, 33, 61, 0.3)',
                      borderRadius: '8px',
                      padding: '0.65rem 0.85rem',
                      cursor: 'pointer',
                      boxShadow: isSelected ? '3px 3px 0px var(--color-ink)' : 'none',
                      transform: isSelected ? 'translateY(-2px)' : 'none',
                      transition: 'all 0.1s ease'
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? 'var(--color-ink)' : 'var(--color-river-teal)',
                        color: isSelected ? 'var(--color-signal-yellow)' : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        flexShrink: 0
                      }}
                    >
                      {p.num}
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-ink)' }}>
                      {p.name.split('(')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Component Detailed Sticky-Note Card */}
          <div
            style={{
              backgroundColor: 'var(--color-butter)',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              position: 'relative'
            }}
          >
            <div className="tape-strip" style={{ top: '-10px', left: '20px', transform: 'rotate(-4deg)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-ink)',
                  color: 'var(--color-signal-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.1rem',
                  fontWeight: 900
                }}
              >
                {parts[activePart - 1].num}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ink)' }}>
                PART SPECIFICATION
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', lineHeight: 1.2, marginBottom: '1rem' }}>
              {parts[activePart - 1].name}
            </h3>

            <p style={{ fontSize: '1.05rem', color: '#2B2B2B', lineHeight: 1.6, marginBottom: '2rem' }}>
              {parts[activePart - 1].desc}
            </p>

            <div style={{ background: '#FFFFFF', border: '2px solid var(--color-ink)', borderRadius: '10px', padding: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-river-teal)', marginBottom: '0.3rem' }}>
                DESIGN CRITERION:
              </div>
              <div style={{ fontSize: '0.88rem', color: '#444', lineHeight: 1.5 }}>
                100% fluoropolymer-free material selection (zero PTFE). Designed for field ruggedness in humid, dust-prone rural field environments.
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .proto-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
