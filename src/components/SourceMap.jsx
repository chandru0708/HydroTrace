import React, { useState } from 'react';
import { SimulatedTag } from '../ui/SimulatedTag';

export default function SourceMap() {
  const sources = [
    {
      id: 'HP-12 Borewell',
      type: 'Deep Borewell (Agricultural boundary)',
      location: 'Ward 3, Habitation South',
      pfas: 'RED — High (Elevated Peak Drop)',
      mp: 'Moderate MFI (42 particles/L eq.)',
      lastTest: 'Today, 10:45 AM',
      count: 24,
      tier: 'red',
      labStatus: 'NABL courier ticket #TN-772 dispatched for LC-MS/MS',
      history: ['green', 'amber', 'amber', 'red'],
      cx: 180,
      cy: 220
    },
    {
      id: 'OHT-03 Village A',
      type: 'Overhead Storage Scheme',
      location: 'Main Distribution Grid',
      pfas: 'AMBER — Detected – Monitor',
      mp: 'Low MFI (< 10 particles/L eq.)',
      lastTest: 'Yesterday, 04:15 PM',
      count: 48,
      tier: 'amber',
      labStatus: 'Monitoring in 14-day cycle; block officer notified',
      history: ['green', 'green', 'amber', 'amber'],
      cx: 480,
      cy: 140
    },
    {
      id: 'Tank-07 School',
      type: 'Government Primary School Storage',
      location: 'School Campus East',
      pfas: 'GREEN — Not Detected',
      mp: 'Low MFI (Below detection floor)',
      lastTest: '3 days ago',
      count: 16,
      tier: 'green',
      labStatus: 'Clear; next test scheduled in 6 months',
      history: ['green', 'green', 'green', 'green'],
      cx: 320,
      cy: 290
    },
    {
      id: 'Well-21 Ward 4',
      type: 'Community Dug Well',
      location: 'North Habitation Cluster',
      pfas: 'GREEN — Not Detected',
      mp: 'Low MFI (5 particles/L eq.)',
      lastTest: '1 week ago',
      count: 32,
      tier: 'green',
      labStatus: 'Clear; regular routine surveillance',
      history: ['green', 'green', 'green', 'green'],
      cx: 620,
      cy: 240
    },
    {
      id: 'HP-05 near Landfill',
      type: 'Shallow Handpump',
      location: 'Solid Waste Boundary Road',
      pfas: 'AMBER — Detected – Monitor',
      mp: 'Moderate MFI (68 particles/L eq.)',
      lastTest: 'Yesterday, 11:20 AM',
      count: 19,
      tier: 'amber',
      labStatus: 'Flagged for source tracking; leachate runoff check',
      history: ['amber', 'amber', 'amber', 'amber'],
      cx: 260,
      cy: 100
    }
  ];

  const [selectedSource, setSelectedSource] = useState(sources[0]);

  return (
    <section
      id="source-map"
      style={{
        backgroundColor: 'var(--color-sky)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
              12 · Spatial Surveillance
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.15
              }}
            >
              From one test to a district picture.
            </h2>
          </div>
          <SimulatedTag text="Simulated monitoring data" />
        </div>

        {/* Map Grid: Left Map SVG + Right Detailed Paper Record Card */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'start' }} className="map-grid">
          
          {/* Left: Illustrated Village / District Map (SVG) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid var(--color-ink)',
              padding: '1.5rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(20,33,61,0.15)', paddingBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800 }}>
                DISTRICT HYDRAULIC HABITATION MAP · BLOCK CHENGALPATTU
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#666' }}>
                Click any pin to inspect
              </span>
            </div>

            <svg viewBox="0 0 740 420" fill="none" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Agricultural fields background patches */}
              <rect x="20" y="20" width="220" height="140" rx="8" fill="#FFF2C6" opacity="0.6" stroke="#14213D" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="420" y="30" width="280" height="150" rx="8" fill="#E7DEFA" opacity="0.5" stroke="#14213D" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="180" y="240" width="300" height="140" rx="8" fill="#FFE1D6" opacity="0.5" stroke="#14213D" strokeWidth="1" strokeDasharray="4 2" />

              {/* Village Meandering River (Teal) */}
              <path
                d="M-20 180 C 120 190 180 80 340 110 C 500 140 560 60 760 80"
                stroke="#0E9AA7"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M-20 180 C 120 190 180 80 340 110 C 500 140 560 60 760 80"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
              />
              <text x="350" y="105" fontFamily="var(--font-hand)" fontSize="14" fill="#0E9AA7" fontWeight="bold">River Adyar Canal</text>

              {/* Village Road lines */}
              <path d="M80 400 L 260 20 L 680 380" stroke="#14213D" strokeWidth="2.5" strokeDasharray="6 4" fill="none" opacity="0.4" />

              {/* Central District NABL Laboratory Building Illustration */}
              <g id="nabl-lab" transform="translate(560, 310)">
                <rect x="0" y="0" width="140" height="85" rx="6" fill="#14213D" stroke="#0E9AA7" strokeWidth="2" />
                <rect x="12" y="10" width="116" height="35" rx="3" fill="#25355A" />
                <text x="18" y="28" fontFamily="var(--font-mono)" fontSize="9" fill="#FFC93C" fontWeight="bold">NABL DISTRICT LAB</text>
                <text x="18" y="38" fontFamily="var(--font-mono)" fontSize="7" fill="#CDEFF2">LC-MS/MS & µ-FTIR</text>
                <rect x="58" y="52" width="24" height="33" fill="#0E9AA7" />
              </g>

              {/* Red Animated Trajectory Line to NABL Lab from Red Pin */}
              <path
                d="M180 220 C 260 360 440 370 560 350"
                stroke="var(--color-alert-red)"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
              />
              <text x="290" y="365" fontFamily="var(--font-hand)" fontSize="13" fill="var(--color-alert-red)">
                Automated NABL Chain-of-Custody Ticket ➔
              </text>

              {/* Source Pins on the Map */}
              {sources.map((src) => {
                const isSelected = selectedSource.id === src.id;
                const pinColor = src.tier === 'red' ? 'var(--color-alert-red)' : src.tier === 'amber' ? 'var(--color-amber)' : 'var(--color-leaf-green)';

                return (
                  <g
                    key={src.id}
                    transform={`translate(${src.cx}, ${src.cy})`}
                    onClick={() => setSelectedSource(src)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulsing ring if selected */}
                    {isSelected && (
                      <circle cx="0" cy="-18" r="24" fill={pinColor} opacity="0.25" />
                    )}

                    {/* Pin Flag Post */}
                    <line x1="0" y1="0" x2="0" y2="-30" stroke="#14213D" strokeWidth="2.5" />
                    <circle cx="0" cy="0" r="4" fill="#14213D" />

                    {/* Flag Shape */}
                    <polygon
                      points="0,-30 28,-22 0,-14"
                      fill={pinColor}
                      stroke="#14213D"
                      strokeWidth="1.5"
                    />

                    {/* Pin Icon / Label Box */}
                    <rect x="-35" y="8" width="70" height="18" rx="3" fill="#FFFFFF" stroke="#14213D" strokeWidth="1.2" />
                    <text x="0" y="20" fontFamily="var(--font-mono)" fontSize="7" fill="#14213D" textAnchor="middle" fontWeight="bold">
                      {src.id.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Map Legend */}
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem', borderTop: '1px solid rgba(20,33,61,0.1)', paddingTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-leaf-green)' }} /> Green: Retest
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-amber)' }} /> Amber: 2-Wk Monitor
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-alert-red)' }} /> Red: Lab Dispatched
              </span>
            </div>
          </div>

          {/* Right: Selected Source Paper Record Card */}
          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              position: 'relative'
            }}
          >
            {/* Tape Strip */}
            <div className="tape-strip" style={{ top: '-10px', right: '30px', transform: 'rotate(4deg)' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#666', textTransform: 'uppercase' }}>
                  SOURCE RECORD CARD
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginTop: '0.2rem' }}>
                  {selectedSource.id}
                </h3>
                <div style={{ fontSize: '0.85rem', color: '#555' }}>
                  {selectedSource.type} · {selectedSource.location}
                </div>
              </div>
            </div>

            {/* Diagnostics Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--color-ink)', borderRadius: '8px', padding: '0.85rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-pfas-violet)', fontWeight: 800 }}>
                  PFAS STATUS:
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.15rem' }}>
                  {selectedSource.pfas}
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--color-ink)', borderRadius: '8px', padding: '0.85rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-nile-coral)', fontWeight: 800 }}>
                  MICROPLASTICS (MFI):
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.15rem' }}>
                  {selectedSource.mp}
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--color-ink)', borderRadius: '8px', padding: '0.85rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#666', fontWeight: 800 }}>
                  AUTOMATED PUBLIC HEALTH ACTION:
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem', color: selectedSource.tier === 'red' ? 'var(--color-alert-red)' : 'var(--color-ink)', marginTop: '0.15rem' }}>
                  {selectedSource.labStatus}
                </div>
              </div>

            </div>

            {/* Historical Testing Dots */}
            <div style={{ borderTop: '1px dashed rgba(20, 33, 61, 0.2)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>
                  HISTORICAL TRIAGE TREND (LAST 4 SAMPLES):
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }}>
                  {selectedSource.count} Tests Total
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {selectedSource.history.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: '10px',
                      borderRadius: '3px',
                      backgroundColor: h === 'red' ? 'var(--color-alert-red)' : h === 'amber' ? 'var(--color-amber)' : 'var(--color-leaf-green)',
                      border: '1px solid var(--color-ink)'
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: '#666', fontStyle: 'italic' }}>
              Last sampled: {selectedSource.lastTest} by Certified FTK Tester.
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
