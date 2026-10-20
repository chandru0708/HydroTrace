import React, { useState } from 'react';
import { SimulatedTag } from '../ui/SimulatedTag';

export default function TestValidity() {
  const [showFailure, setShowFailure] = useState(false);

  const checklistItems = [
    { id: 1, text: 'Blank scan recorded before Nile Red staining', pass: true },
    { id: 2, text: 'Stain incubation time ≥ 10 minutes verified by RTC', pass: !showFailure, failReason: 'Staining aborted at 4:12 min — photodiode reading rejected' },
    { id: 3, text: 'Strip baseline current in acceptable range (0.5 – 5.0 µA)', pass: true },
    { id: 4, text: 'NIP non-imprinted reference response within noise bounds', pass: true },
    { id: 5, text: 'PFAS incubation on MIP cavities complete (5 min)', pass: true },
    { id: 6, text: 'LP2985 3.3V ultra-low-noise analog rail voltage stable', pass: true },
    { id: 7, text: 'Audit macro photo captured and compressed (~25 KB JPEG)', pass: true },
    { id: 8, text: 'Hardware 12-bit monotonic counter incremented and signed', pass: !showFailure }
  ];

  return (
    <section
      id="test-validity"
      style={{
        backgroundColor: 'var(--color-lilac)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-pfas-violet)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            09 · Quality Assurance Architecture
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            Not every reading becomes a result.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', color: '#2B2B2B' }}>
            To prevent false alarms in remote habitations, the ESP32-S3 firmware enforces eight hardware quality gates before generating a signed code.
          </p>
        </div>

        {/* Central Clipboard Illustration */}
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>
          
          {/* Clipboard Top Clip */}
          <div style={{ width: '160px', height: '28px', backgroundColor: 'var(--color-ink)', borderRadius: '6px 6px 0 0', margin: '0 auto', border: '3px solid var(--color-ink)', borderBottom: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '50px', height: '8px', backgroundColor: '#FFFFFF', borderRadius: '4px' }} />
          </div>

          {/* Paper Sheet on Clipboard */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid var(--color-ink)',
              borderRadius: '14px',
              padding: '2.5rem 2rem',
              boxShadow: '7px 7px 0px var(--color-ink)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Stamp if Failed */}
            {showFailure && (
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(-12deg)',
                  border: '5px solid var(--color-alert-red)',
                  color: 'var(--color-alert-red)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                  fontWeight: 900,
                  padding: '0.5rem 1.5rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 15px rgba(215, 38, 61, 0.3)',
                  letterSpacing: '0.08em',
                  zIndex: 20,
                  userSelect: 'none',
                  textAlign: 'center'
                }}
              >
                INVALID TEST · REPEAT
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', borderBottom: '2px solid rgba(20, 33, 61, 0.15)', paddingBottom: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-ink)' }}>
                  HARDWARE INTEGRITY CHECKLIST
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>
                  Firmware Verification v1.2 · Target Habit: Ramapuram (TN-04)
                </div>
              </div>
              <SimulatedTag text="Simulated demonstration" />
            </div>

            {/* Checklist Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {checklistItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    padding: '0.4rem 0',
                    borderBottom: '1px dashed rgba(20, 33, 61, 0.1)'
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      backgroundColor: item.pass ? 'var(--color-leaf-green)' : 'var(--color-alert-red)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      flexShrink: 0
                    }}
                  >
                    {item.pass ? '✓' : '✕'}
                  </span>

                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        fontWeight: item.pass ? 600 : 700,
                        color: item.pass ? 'var(--color-ink)' : 'var(--color-alert-red)',
                        textDecoration: !item.pass ? 'line-through' : 'none'
                      }}
                    >
                      {item.text}
                    </span>
                    {!item.pass && item.failReason && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-alert-red)', marginTop: '0.2rem' }}>
                        ⚠ Error: {item.failReason}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle Controls */}
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={() => setShowFailure(!showFailure)}
                className="btn-press btn-yellow"
                style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
              >
                {showFailure ? '✓ Restore Passing Test' : '✕ Simulate Failed Test (Premature Timer)'}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
