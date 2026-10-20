import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function HowItWorks() {
  const [activeNode, setActiveNode] = useState(null);

  const nodeDetails = {
    sample: {
      title: '250 mL Sample Collection',
      category: 'Input Stage',
      what: 'Grab 250 mL of source water in a high-density polyethylene or polypropylene sampling vessel.',
      why: 'Strictly fluoropolymer-free (zero PTFE seals, tubing, or tape) to prevent cross-contamination from plumbing.'
    },
    filter: {
      title: '25 mm Glass-Fibre Filter',
      category: 'Physical Separation',
      what: 'Retains microplastic flakes, fibres, and beads larger than ~20 µm.',
      why: 'Splits the physical analysis: trapped plastics stay on disc; dissolved PFAS chains flow through untouched.'
    },
    wax: {
      title: 'Weak Anion Exchange (WAX) Cartridge',
      category: 'Solid-Phase Extraction',
      what: 'Positively-charged amino resin that strongly adsorbs anionic PFAS molecules.',
      why: 'Pre-concentrates dilute PPT levels into a compact 0.5 mL eluent, achieving 40–60× recovery in 15 minutes.'
    },
    fluorescence: {
      title: 'Fluorescence Chamber (Coral Branch)',
      category: 'Microplastic Analysis',
      what: '470 nm blue excitation + 550 nm emission optical chamber with BPW34 photodiode & ESP32-S3 macro camera.',
      why: 'Measures Nile Red fluorescence index (MFI) and stores a 25 KB macro audit photo to audit test validity.'
    },
    strip: {
      title: 'MIP / NIP Strip & Potentiostat (Violet Branch)',
      category: 'PFAS Electrochemistry',
      what: 'Dual screen-printed electrodes (molecularly imprinted WE1 vs non-imprinted WE2) scanned via differential DPV.',
      why: 'The MIP cavity blocks ferricyanide electron transfer; subtracting NIP cancels hard borewell salt interference.'
    },
    esp32: {
      title: 'ESP32-S3 System Engine',
      category: 'Processing & Cryptography',
      what: 'Dual-core MCU running peak detection, baseline subtraction, and HMAC-SHA256 signature generation.',
      why: 'Fuses DS3231 hardware RTC time, monotonic 12-bit test counter, and device secret key into a tamper-proof payload.'
    },
    sms_portal: {
      title: 'Zero-App Telemetry (SMS / Captive Wi-Fi)',
      category: 'Field Transmission',
      what: 'Generates a 12-character Crockford Base32 code for keypad phones; or hosts offline Wi-Fi hotspot for smartphones.',
      why: 'Guarantees 100% field transmission without requiring continuous cellular data or native smartphone apps.'
    },
    dashboard: {
      title: 'National JJM / WQMIS Dashboard',
      category: 'Public Health Response',
      what: 'Secure server verifies HMAC signature and test counter; maps geographic habitations; issues alerts.',
      why: 'Automates immediate NABL lab confirmation requests for any RED source, cutting triage delays from weeks to minutes.'
    }
  };

  return (
    <section
      id="how-it-works"
      className="bg-graph-paper"
      style={{
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            06 · End-to-End System Blueprint
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            How HydroTrace works, end to end.
          </h2>
          <p style={{ maxWidth: '640px', margin: '1rem auto 0', fontSize: '1.05rem', color: '#333' }}>
            Click any station on this hand-inked blueprint to inspect the analytical rationale and diagnostic dataflow.
          </p>
        </div>

        {/* Blueprint System Flow Canvas */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '3px solid var(--color-ink)',
            borderRadius: '16px',
            padding: '2.5rem 1.5rem',
            boxShadow: '6px 6px 0px var(--color-ink)',
            position: 'relative',
            overflowX: 'auto'
          }}
        >
          <div style={{ minWidth: '940px' }}>
            
            {/* Top Row: Stream Splitting */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '2rem', marginBottom: '3rem' }}>
              
              {/* Box 1: Sample */}
              <div
                onClick={() => setActiveNode('sample')}
                style={{
                  width: '180px',
                  backgroundColor: 'var(--color-paper)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  boxShadow: '3px 3px 0px var(--color-ink)',
                  cursor: 'pointer',
                  transform: 'rotate(-1deg)'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-river-teal)' }}>INPUT ➔</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 800, margin: '0.2rem 0' }}>250 mL Sample</div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>PTFE-free bottle</div>
              </div>

              {/* Arrow */}
              <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.4rem', color: 'var(--color-river-teal)', fontWeight: 'bold' }}>
                Single Push ➔
              </div>

              {/* Box 2: Filter */}
              <div
                onClick={() => setActiveNode('filter')}
                style={{
                  width: '200px',
                  backgroundColor: '#FFFFFF',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  boxShadow: '3px 3px 0px var(--color-ink)',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#14213D' }}>SPLIT ➔</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 800, margin: '0.2rem 0' }}>25 mm GF Filter</div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>Traps solids & microplastics</div>
              </div>

              {/* Split Branches Annotation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--color-nile-coral)' }}>
                  ▲ Insoluble branch (Microplastics)
                </span>
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--color-pfas-violet)' }}>
                  ▼ Dissolved filtrate (PFAS)
                </span>
              </div>
            </div>

            {/* Middle Row: Two Parallel Diagnostic Engines */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
              
              {/* Branch 1: Coral Microplastic Engine */}
              <div
                onClick={() => setActiveNode('fluorescence')}
                style={{
                  backgroundColor: 'var(--color-peach)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '4px 4px 0px var(--color-ink)',
                  cursor: 'pointer',
                  transform: 'rotate(-0.5deg)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-nile-coral)' }}>
                    BRANCH 1: OPTICAL FLUORESCENCE
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: '#FFFFFF', padding: '0.1rem 0.4rem', borderRadius: '3px' }}>
                    470 nm + BPW34
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800 }}>
                  Nile Red Chamber ➔ MFI & Audit Photo
                </div>
                <p style={{ fontSize: '0.85rem', color: '#444', marginTop: '0.4rem' }}>
                  Stains in ethanol, subtracts blank baseline, captures ~25 KB macro JPEG for audit trail.
                </p>
              </div>

              {/* Branch 2: Violet PFAS Engine */}
              <div
                onClick={() => setActiveNode('strip')}
                style={{
                  backgroundColor: 'var(--color-lilac)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '4px 4px 0px var(--color-ink)',
                  cursor: 'pointer',
                  transform: 'rotate(0.5deg)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-pfas-violet)' }}>
                    BRANCH 2: ELECTROCHEMISTRY
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: '#FFFFFF', padding: '0.1rem 0.4rem', borderRadius: '3px' }}>
                    WAX + DPV Potentiostat
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 800 }}>
                  MIP / NIP Strip ➔ S_net Current Drop
                </div>
                <p style={{ fontSize: '0.85rem', color: '#444', marginTop: '0.4rem' }}>
                  40–60× WAX pre-concentration, dual working electrode DPV scan, cancels borewell salts.
                </p>
              </div>

            </div>

            {/* Bottom Row: Fusion, Encryption & Cloud Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'space-between' }}>
              
              {/* MCU Node */}
              <div
                onClick={() => setActiveNode('esp32')}
                style={{
                  width: '260px',
                  backgroundColor: 'var(--color-butter)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  boxShadow: '3px 3px 0px var(--color-ink)',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-ink)' }}>FUSION & SIGNING ➔</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, margin: '0.2rem 0' }}>ESP32-S3 Engine</div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>HMAC-SHA256 + 12-bit counter</div>
              </div>

              <div style={{ fontSize: '1.2rem', color: 'var(--color-ink)' }}>➔</div>

              {/* Telemetry Node */}
              <div
                onClick={() => setActiveNode('sms_portal')}
                style={{
                  width: '260px',
                  backgroundColor: 'var(--color-signal-yellow)',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  boxShadow: '3px 3px 0px var(--color-ink)',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-ink)' }}>TRANSMISSION ➔</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, margin: '0.2rem 0' }}>OLED / SMS / Portal</div>
                <div style={{ fontSize: '0.75rem', color: '#222' }}>12-char Crockford signed code</div>
              </div>

              <div style={{ fontSize: '1.2rem', color: 'var(--color-ink)' }}>➔</div>

              {/* Central Dashboard / Lab Dispatch */}
              <div
                onClick={() => setActiveNode('dashboard')}
                style={{
                  width: '280px',
                  backgroundColor: 'var(--color-river-teal)',
                  color: '#FFFFFF',
                  border: '2.5px solid var(--color-ink)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  boxShadow: '3px 3px 0px var(--color-ink)',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-signal-yellow)' }}>PUBLIC HEALTH ACTION ➔</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, margin: '0.2rem 0' }}>NJJM / WQMIS Dashboard</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Red triggers NABL lab ticket</div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal / Drawer for Selected Node */}
        {activeNode && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(20, 33, 61, 0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 150,
              padding: '1.5rem'
            }}
            onClick={() => setActiveNode(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--color-paper)',
                border: '3px solid var(--color-ink)',
                borderRadius: '16px',
                padding: '2rem',
                maxWidth: '540px',
                width: '100%',
                boxShadow: '8px 8px 0px var(--color-ink)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveNode(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: '2px solid var(--color-ink)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-river-teal)', fontWeight: 800, textTransform: 'uppercase' }}>
                {nodeDetails[activeNode].category}
              </span>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', margin: '0.4rem 0 1rem' }}>
                {nodeDetails[activeNode].title}
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-ink)' }}>WHAT IT DOES:</strong>
                <p style={{ fontSize: '0.95rem', color: '#333', marginTop: '0.2rem', lineHeight: 1.5 }}>
                  {nodeDetails[activeNode].what}
                </p>
              </div>

              <div>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-pfas-violet)' }}>WHY IT'S CRITICAL:</strong>
                <p style={{ fontSize: '0.95rem', color: '#333', marginTop: '0.2rem', lineHeight: 1.5 }}>
                  {nodeDetails[activeNode].why}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
