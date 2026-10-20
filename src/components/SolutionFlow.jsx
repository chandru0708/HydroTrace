import React, { useState } from 'react';

export default function SolutionFlow() {
  const [activeStation, setActiveStation] = useState(1);

  const stations = [
    {
      num: 1,
      title: 'Collect',
      summary: '250 mL from tap, tank, OHT or borewell',
      desc: 'Grab a clean 250 mL sample using a fluoropolymer-free (PTFE-free) polypropylene bottle.',
      color: 'var(--color-river-teal)',
      tag: 'Raw Water'
    },
    {
      num: 2,
      title: 'Filter',
      summary: 'Glass-fibre filter traps microplastics',
      desc: 'Spring syringe pushes water through a 25 mm glass-fibre filter, retaining particles ≥ 20 µm.',
      color: 'var(--color-nile-coral)',
      tag: 'Microplastics Stop'
    },
    {
      num: 3,
      title: 'Capture PFAS',
      summary: 'Filtrate flows through WAX cartridge',
      desc: 'The exact same push passes through a weak anion exchange (WAX) bed, locking PFAS chains.',
      color: 'var(--color-pfas-violet)',
      tag: 'One Push Feeds Both'
    },
    {
      num: 4,
      title: 'Stain & Scan',
      summary: 'Nile Red; photodiode reads blank vs stained',
      desc: '3 drops of Nile Red in ethanol; 470 nm blue LED excitation with BPW34 + ESP32 macro photo.',
      color: 'var(--color-nile-coral)',
      tag: 'Fluorescence Index'
    },
    {
      num: 5,
      title: 'Elute & Sense',
      summary: 'Dilute eluate; DPV scan on MIP/NIP strip',
      desc: 'Elute with 0.5 mL ammoniated methanol; dilute into buffer; dual MIP/NIP electrodes read with DIY potentiostat.',
      color: 'var(--color-pfas-violet)',
      tag: 'Electrochemical DPV'
    },
    {
      num: 6,
      title: 'Analyse',
      summary: 'S_net and MFI determine triage tier',
      desc: 'Subtracting NIP cancels hard borewell salinity; MFI background subtraction cancels filter dust.',
      color: 'var(--color-ink)',
      tag: 'Matrix-Corrected'
    },
    {
      num: 7,
      title: 'Report',
      summary: 'OLED code by SMS or captive browser',
      desc: 'No app needed. OLED gives 12-char HMAC-signed Crockford code for keypad SMS or offline hotspot sync.',
      color: 'var(--color-signal-yellow)',
      tag: 'Tamper-Proof Code'
    },
    {
      num: 8,
      title: 'Act',
      summary: 'Dashboard map, alerts; red goes to NABL lab',
      desc: 'Red triggers automated district alert and generates an NABL lab-confirmation chain of custody ticket.',
      color: 'var(--color-alert-red)',
      tag: 'Targeted Triage'
    }
  ];

  return (
    <section
      id="solution"
      style={{
        backgroundColor: 'var(--color-sky)',
        color: 'var(--color-ink)',
        padding: '5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            02 · Unified Field Architecture
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            One sample. <span style={{ fontStyle: 'italic', color: 'var(--color-pfas-violet)' }}>Two</span> tests. One signed result.
          </h2>
          <p style={{ maxWidth: '620px', margin: '1rem auto 0', fontSize: '1.05rem', color: '#1B2A4A' }}>
            A single 250 mL spring-syringe compression feeds both diagnostics in tandem. Follow the 8-station field journey:
          </p>
        </div>

        {/* 8-Station Illustrated Horizontal/Winding River */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {stations.map((st) => {
            const isSelected = activeStation === st.num;
            return (
              <div
                key={st.num}
                onClick={() => setActiveStation(st.num)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: isSelected ? '3px solid var(--color-ink)' : '2px solid rgba(20, 33, 61, 0.4)',
                  padding: '1.25rem',
                  boxShadow: isSelected ? '4px 4px 0px var(--color-ink)' : '2px 2px 0px rgba(20, 33, 61, 0.2)',
                  cursor: 'pointer',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.15s ease',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: st.color,
                      color: st.color === 'var(--color-signal-yellow)' ? 'var(--color-ink)' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      border: '1.5px solid var(--color-ink)'
                    }}
                  >
                    {st.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(20, 33, 61, 0.06)',
                      color: 'var(--color-ink)'
                    }}
                  >
                    {st.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1B2A4A', marginBottom: '0.5rem' }}>
                  {st.summary}
                </p>
                <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.45 }}>
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Station Deep-Dive Strip */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '3px solid var(--color-ink)',
            borderRadius: '14px',
            padding: '1.75rem',
            boxShadow: '5px 5px 0px var(--color-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: stations[activeStation - 1].color }}>
                STATION {stations[activeStation - 1].num} OF 8
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#888' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700 }}>
                {stations[activeStation - 1].tag}
              </span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {stations[activeStation - 1].title}: {stations[activeStation - 1].summary}
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.55 }}>
              {stations[activeStation - 1].desc}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveStation(prev => (prev > 1 ? prev - 1 : 8))}
              className="btn-press btn-paper"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
            >
              ◀ Prev
            </button>
            <button
              onClick={() => setActiveStation(prev => (prev < 8 ? prev + 1 : 1))}
              className="btn-press btn-yellow"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
            >
              Next Station ▶
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
