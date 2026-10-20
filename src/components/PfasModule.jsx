import React, { useState } from 'react';
import SensorStrip from '../illustrations/SensorStrip';
import { SimulatedTag, SourceCaption } from '../ui/SimulatedTag';

export default function PfasModule() {
  const [selectedCircuitBlock, setSelectedCircuitBlock] = useState('tia');

  const circuitBlocks = {
    vg: {
      name: 'MCP6004 Virtual Ground',
      spec: '1.65 V low-noise reference rail',
      role: 'Establishes an analog mid-rail reference for single-supply 3.3V battery operation without split power supplies.'
    },
    dac: {
      name: 'MCP4725 12-bit DAC',
      spec: '0.8 mV potential step resolution',
      role: 'Generates the precision Differential Pulse Voltammetry (DPV) staircase ramp (–0.1 V to +0.5 V, 5 mV step, 50 mV pulse).'
    },
    control: {
      name: 'Control Amplifier (MCP6004)',
      spec: 'Maintains potential between WE and Ref',
      role: 'Enforces cell voltage against the Ag/AgCl reference electrode by adjusting current through the carbon counter electrode.'
    },
    switch: {
      name: 'CD4053 Analog Switch',
      spec: 'Low-leakage MIP / NIP multiplexer',
      role: 'Switches the transimpedance amp between WE1 (MIP) and WE2 (NIP) for sequential 60-second DPV scans in the exact same droplet.'
    },
    tia: {
      name: 'Transimpedance Amp (TIA)',
      spec: 'Feedback resistor Rf = 10 kΩ, Cf = 100 pF',
      role: 'Converts nanoampere-scale redox oxidation currents into measurable output voltages with high stability and RF suppression.'
    },
    adc: {
      name: 'ADS1115 16-bit ADC',
      spec: '±2.048 V range, ~6 nA/step resolution',
      role: 'Digitizes the analog current response during the 50 ms DPV pulse window with ultra-low noise.'
    },
    mcu: {
      name: 'ESP32-S3 Microcontroller',
      spec: 'Dual-core Xtensa 240 MHz',
      role: 'Executes matrix subtraction algorithm, calculates S_net, manages cryptographic HMAC-SHA256 signing and OLED/SMS output.'
    }
  };

  return (
    <section
      id="pfas"
      style={{
        backgroundColor: 'var(--color-pfas-violet)',
        color: 'var(--color-paper)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            04 · Electrochemical Diagnostics
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
            Catching parts-per-trillion in the field.
          </h2>
          <p style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', color: '#E7DEFA', lineHeight: 1.55 }}>
            PFAS &ldquo;forever chemicals&rdquo; exist in drinking water at parts-per-trillion levels—far too dilute for direct electrochemical detection. Our kit first concentrates the sample 40–60×, then measures target molecules using blocked electron transfer.
          </p>
          <SourceCaption
            source="Karimian et al., ACS Sensors (2018) reported 0.04 nM LOD using molecularly imprinted poly(o-phenylenediamine)."
            className="text-lilac"
          />
        </div>

        {/* 4 Alternating Lab-Bench Stops */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Stop A: Pre-concentration Funnel */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-ink)',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--color-pfas-violet)', color: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                STOP A · WAX PRE-CONCENTRATION
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                250 mL compressed into 0.5 mL.
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333', marginBottom: '1.25rem' }}>
                250 mL of raw sample is manually driven through a disposable Weak Anion Exchange (WAX) cartridge. Perfluoroalkyl carboxylates and sulfonates bind strongly to the protonated amino phase. The cartridge is eluted with 0.5 mL ammoniated methanol and diluted 1:4 into 2.5 mL pH-stabilised buffer.
              </p>
              
              <div style={{ background: 'var(--color-lilac)', border: '2px solid var(--color-pfas-violet)', borderRadius: '8px', padding: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-pfas-violet)' }}>
                  100× theoretical ➔ 40–60× field recovery
                </div>
                <div style={{ fontSize: '0.82rem', color: '#444', marginTop: '0.25rem' }}>
                  Single-use WAX cartridge utilizes the identical retention chemistry codified in US EPA Method 533.
                </div>
              </div>
            </div>

            {/* Visual Funnel Graphic */}
            <div style={{ background: 'var(--color-paper)', border: '2px dashed var(--color-ink)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
              <svg viewBox="0 0 300 200" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <polygon points="40,20 260,20 180,110 180,160 120,160 120,110" fill="#CDEFF2" stroke="#14213D" strokeWidth="2.5" />
                <rect x="110" y="100" width="80" height="25" rx="3" fill="#6C4AB6" stroke="#14213D" strokeWidth="2" />
                <text x="122" y="117" fontFamily="var(--font-mono)" fontSize="9" fill="#FFFFFF" fontWeight="bold">WAX RESIN</text>
                <text x="75" y="45" fontFamily="var(--font-mono)" fontSize="11" fill="#14213D" fontWeight="bold">250 mL Raw Sample</text>
                
                {/* Drops falling into vial */}
                <path d="M150 162 L150 178" stroke="#6C4AB6" strokeWidth="3" strokeDasharray="3 2" />
                <rect x="135" y="178" width="30" height="20" rx="3" fill="#E7DEFA" stroke="#14213D" strokeWidth="1.5" />
                <text x="140" y="192" fontFamily="var(--font-mono)" fontSize="8" fill="#6C4AB6" fontWeight="bold">0.5 mL</text>
              </svg>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-ink)', marginTop: '0.5rem', fontWeight: 700 }}>
                Concentration Factor: 40× to 60×
              </div>
            </div>
          </div>

          {/* Stop B: The Sensor Strip & Molecular Imprinting */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-ink)',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--color-pfas-violet)', color: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                STOP B · DUAL WORKING ELECTRODES
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                The MIP / NIP screen-printed carbon strip.
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', maxWidth: '800px', lineHeight: 1.55 }}>
                Manufactured via thick-film screen printing. The MIP electrode features an electropolymerized o-phenylenediamine film grown in the presence of PFOA/PFOS templates. When washed, target cavities remain. When PFAS redocks, it sterically impedes the [Fe(CN)₆]³⁻/⁴⁻ redox probe, causing the voltammetric peak current to drop.
              </p>
            </div>

            <SensorStrip />
          </div>

          {/* Stop C: The ₹320 DIY Potentiostat */}
          <div
            style={{
              backgroundColor: 'var(--color-lilac)',
              color: 'var(--color-ink)',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--color-ink)', color: 'var(--color-paper)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                STOP C · CIRCUIT ARCHITECTURE (≈ ₹320 IN PARTS)
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Laboratory potentiostat on a field budget.
              </h3>
              <p style={{ fontSize: '1rem', color: '#222', maxWidth: '850px', lineHeight: 1.55 }}>
                Instead of a ₹5,00,000 benchtop potentiostat or costly proprietary chips, HydroTrace uses four standard precision jellybean ICs: MCP6004 quad op-amp, MCP4725 12-bit DAC, ADS1115 16-bit ADC, and CD4053 analog switch. Click any block to view its circuit role:
              </p>
            </div>

            {/* Interactive Circuit Block Diagram on Graph Paper */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {Object.entries(circuitBlocks).map(([key, block]) => {
                const isSelected = selectedCircuitBlock === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCircuitBlock(key)}
                    style={{
                      backgroundColor: isSelected ? 'var(--color-signal-yellow)' : '#FFFFFF',
                      border: isSelected ? '2.5px solid var(--color-ink)' : '1.5px solid rgba(20, 33, 61, 0.4)',
                      borderRadius: '8px',
                      padding: '0.75rem 0.5rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: isSelected ? '3px 3px 0px var(--color-ink)' : '1px 1px 0px rgba(20, 33, 61, 0.1)',
                      transform: isSelected ? 'translateY(-2px)' : 'none',
                      transition: 'all 0.1s ease'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-ink)' }}>
                      {block.name.split(' ')[0]}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#444', marginTop: '0.2rem' }}>
                      {block.name.split(' ').slice(1).join(' ')}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Block Sticky-Note Tooltip */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--color-ink)',
                borderRadius: '8px',
                padding: '1.25rem',
                boxShadow: '3px 3px 0px var(--color-ink)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-pfas-violet)' }}>
                  {circuitBlocks[selectedCircuitBlock].name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666', background: 'rgba(20, 33, 61, 0.08)', padding: '0.1rem 0.4rem', borderRadius: '3px' }}>
                  {circuitBlocks[selectedCircuitBlock].spec}
                </span>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#222', lineHeight: 1.5 }}>
                {circuitBlocks[selectedCircuitBlock].role}
              </p>
            </div>
          </div>

          {/* Stop D: The DPV Signal & S_net Differential Formula */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-ink)',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--color-pfas-violet)', color: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                STOP D · QUANTIFICATION & CORRECTION
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Cancelling borewell interference.
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                Hard borewell water contains varying calcium, chloride, and carbonate salts that shift absolute peak heights. By measuring both MIP and NIP electrodes in the exact same sample droplet and computing the normalised differential drop <strong>S_net</strong>, salt matrix effects cancel out.
              </p>

              {/* S_net Yellow Box Formula */}
              <div
                style={{
                  backgroundColor: 'var(--color-signal-yellow)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '8px',
                  padding: '1.1rem',
                  boxShadow: '3px 3px 0px var(--color-ink)',
                  marginBottom: '1rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Matrix-Corrected Differential Metric
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', fontWeight: 700, overflowX: 'auto', padding: '0.2rem 0' }}>
                  S_net = [(ΔI0,MIP − ΔI_MIP) / ΔI0,MIP] − [(ΔI0,NIP − ΔI_NIP) / ΔI0,NIP]
                </div>
                <div style={{ fontSize: '0.78rem', color: '#333', marginTop: '0.4rem', fontStyle: 'italic' }}>
                  Where ΔI0 is baseline peak current in pure buffer, and ΔI is peak current in the eluate.
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#555' }}>
                DPV Scan Parameters: –0.1 V to +0.5 V · 5 mV step · 50 mV pulse · 50 ms width · ~60 s scan
              </div>
            </div>

            {/* Hand-drawn DPV Graph Paper */}
            <div
              className="bg-graph-paper"
              style={{
                border: '2.5px solid var(--color-ink)',
                borderRadius: '12px',
                padding: '1.5rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800 }}>
                  DPV Peak Response (Simulated)
                </span>
                <SimulatedTag text="Simulated curve" />
              </div>

              <svg viewBox="0 0 320 220" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
                {/* Axes */}
                <line x1="30" y1="190" x2="300" y2="190" stroke="#14213D" strokeWidth="2" />
                <line x1="30" y1="20" x2="30" y2="190" stroke="#14213D" strokeWidth="2" />
                <text x="250" y="206" fontFamily="var(--font-mono)" fontSize="9" fill="#14213D">Potential (V)</text>
                <text x="10" y="25" fontFamily="var(--font-mono)" fontSize="9" fill="#14213D" transform="rotate(-90 10,25)">Current (µA)</text>

                {/* 1. Baseline Peak in Ink (High Peak) */}
                <path d="M40 185 Q 120 185 160 50 Q 200 185 280 185" stroke="#14213D" strokeWidth="2.5" fill="none" />
                <text x="175" y="45" fontFamily="var(--font-mono)" fontSize="8.5" fill="#14213D" fontWeight="bold">Pure Buffer Peak (ΔI0)</text>

                {/* 2. MIP Peak Shrinks (Violet, Lower Peak) */}
                <path d="M40 185 Q 120 185 160 115 Q 200 185 280 185" stroke="#6C4AB6" strokeWidth="3" fill="none" />
                <circle cx="160" cy="115" r="4" fill="#6C4AB6" />
                <text x="175" y="115" fontFamily="var(--font-mono)" fontSize="8.5" fill="#6C4AB6" fontWeight="bold">MIP with PFAS (Shrunk)</text>

                {/* 3. NIP Peak (Reference, Flat/Minor change) */}
                <path d="M40 185 Q 120 185 160 62 Q 200 185 280 185" stroke="#888888" strokeWidth="2" strokeDasharray="4 3" fill="none" />
                <text x="175" y="70" fontFamily="var(--font-mono)" fontSize="8.5" fill="#888888">NIP Non-specific (Minor shift)</text>
              </svg>

              <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-hand)', fontSize: '1.2rem', color: 'var(--color-pfas-violet)' }}>
                Peak drop = bound PFAS concentration!
              </div>
            </div>
          </div>

        </div>

        {/* Scientific Footnote */}
        <div style={{ marginTop: '3rem', textAlign: 'center', opacity: 0.85, fontSize: '0.85rem', fontStyle: 'italic' }}>
          * Scientific note: Molecularly imprinted polymer targets PFOA/PFOS; short-chain fluorotelomers are not reliably detected. Triage calibration against spiked local tap and borewell water required.
        </div>

      </div>
    </section>
  );
}
