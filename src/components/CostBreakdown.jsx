import React from 'react';
import { SourceCaption } from '../ui/SimulatedTag';

export default function CostBreakdown() {
  const bomItems = [
    { item: 'ESP32-S3 Camera Board + Macro Lens', cost: 950, color: 'var(--color-river-teal)' },
    { item: 'Syringe, 25mm Filter Holder, PCB & Enclosure', cost: 550, color: 'var(--color-pfas-violet)' },
    { item: 'DIY Potentiostat (MCP6004, DAC, ADC, Switch)', cost: 320, color: 'var(--color-nile-coral)' },
    { item: 'Fluorescence Optics (470nm LED, Filters, BPW34)', cost: 300, color: 'var(--color-signal-yellow)' },
    { item: 'Power Management (18650, TP4056, LP2985)', cost: 250, color: 'var(--color-leaf-green)' },
    { item: 'OLED Display, DS3231 RTC, LEDs, Buzzer', cost: 220, color: '#14213D' },
    { item: 'Elution Micro-Heater Block (Optional)', cost: 100, color: '#888888' }
  ];

  const totalBom = bomItems.reduce((acc, curr) => acc + curr.cost, 0);

  const comparisonRows = [
    { param: 'Testing Location', lab: 'Central NABL Facility', hydro: 'At the rural source (village tap / handpump)' },
    { param: 'Turnaround Time', lab: '3–7 days (incl. transport logistics)', hydro: '30–40 minutes total' },
    { param: 'Cost per Sample', lab: '~₹8,000 commercial average', hydro: '₹150–200 consumables' },
    { param: 'Capital Equipment', lab: 'LC-MS/MS & µ-FTIR (~₹1.5–3 Crore)', hydro: '≈ ₹2,700 handheld reader prototype' },
    { param: 'Operator Skill', lab: 'Ph.D. / Specialist analytical chemist', hydro: 'Trained rural Jal Jeevan Mission field worker' },
    { param: 'PFAS Capability', lab: 'Compound-specific isotope dilution (sub-ppt)', hydro: 'Triage screening (tens of ppt to low ppb)' },
    { param: 'Microplastics', lab: 'Raman / µ-FTIR spectral mapping', hydro: 'Surface fluorescence index (MFI) + macro photo' },
    { param: 'Data Pipeline', lab: 'Paper certificate / PDF email', hydro: 'Tamper-proof 12-char signed SMS ➔ WQMIS' }
  ];

  return (
    <section
      id="cost"
      style={{
        backgroundColor: 'var(--color-peach)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-nile-coral)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            14 · Unit Economics & Bill of Materials
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}
          >
            Lab-grade questions at a field-kit price.
          </h2>
          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', color: '#2B2B2B', lineHeight: 1.55 }}>
            By decoupling early detection from central mass spectrometers, HydroTrace cuts screening expenditures by approximately <strong>50× per test</strong>, reserving high-cost laboratories exclusively for confirmatory runs.
          </p>
        </div>

        {/* Top: Left BOM Bar Chart + Right Paper Receipt Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'start', marginBottom: '4rem' }} className="cost-grid">
          
          {/* Left: Reusable Reader BOM Horizontal Bar Chart */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-river-teal)', fontWeight: 800 }}>
                  REUSABLE HARDWARE READER BOM
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginTop: '0.2rem' }}>
                  Total Reader Cost: ≈ ₹{totalBom}
                </h3>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>
                Single-unit prototype
              </span>
            </div>

            {/* Hand-styled Bar Chart */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bomItems.map((b, idx) => {
                const pct = (b.cost / 950) * 100;
                return (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      <span>{b.item}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800 }}>₹{b.cost}</span>
                    </div>
                    <div style={{ height: '14px', backgroundColor: 'rgba(20, 33, 61, 0.08)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--color-ink)' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${pct}%`,
                          backgroundColor: b.color,
                          borderRadius: '2px'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stacked Paper Receipt for Consumables */}
          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '3px solid var(--color-ink)',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '5px 5px 0px var(--color-ink)',
              position: 'relative'
            }}
          >
            {/* Torn top jagged line */}
            <div style={{ borderBottom: '2px dashed var(--color-ink)', paddingBottom: '0.75rem', marginBottom: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.1em' }}>
                CONSUMABLES / TEST SET
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#666' }}>
                BATCH PRODUCTION ESTIMATE
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>WAX Cartridge (SPE)</span>
                <span style={{ fontWeight: 700 }}>₹60–90</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>MIP/NIP Dual Carbon Strip</span>
                <span style={{ fontWeight: 700 }}>₹30–50</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sealed Ampoules (3 Reagents)</span>
                <span style={{ fontWeight: 700 }}>₹20–30</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>25 mm Glass-Fibre Disc</span>
                <span style={{ fontWeight: 700 }}>₹10–15</span>
              </div>

              <div style={{ borderTop: '2px solid var(--color-ink)', paddingTop: '0.75rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: 900 }}>
                <span>TOTAL CONSUMABLE:</span>
                <span style={{ color: 'var(--color-pfas-violet)' }}>₹150–200</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#FFFFFF', border: '1.5px solid var(--color-ink)', padding: '0.75rem', borderRadius: '6px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
              ~50× Cheaper than commercial LC-MS/MS testing
            </div>
          </div>

        </div>

        {/* Editorial Printed Magazine Comparison Table */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '3px solid var(--color-ink)',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '6px 6px 0px var(--color-ink)',
            overflowX: 'auto'
          }}
        >
          <div style={{ minWidth: '700px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
              Architecture Comparison: Central Laboratory vs HydroTrace
            </h3>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2.5px solid var(--color-ink)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <th style={{ padding: '0.85rem 1rem' }}>EVALUATION CRITERIA</th>
                  <th style={{ padding: '0.85rem 1rem', color: '#666' }}>CENTRAL NABL LABORATORY</th>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--color-river-teal)' }}>HYDROTRACE FIELD KIT</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid rgba(20, 33, 61, 0.15)',
                      backgroundColor: idx % 2 === 0 ? 'rgba(251, 246, 236, 0.4)' : '#FFFFFF',
                      fontSize: '0.92rem'
                    }}
                  >
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      {row.param}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#555' }}>
                      {row.lab}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                      {row.hydro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <SourceCaption source="Commercial LC-MS/MS test pricing is an industry estimate (~₹8,000/sample). HydroTrace figures represent single-unit design targets to be validated." />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .cost-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
