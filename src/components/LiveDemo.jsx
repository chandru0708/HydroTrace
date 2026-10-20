import React, { useState, useEffect } from 'react';
import ReaderDeviceSvg from '../illustrations/ReaderDeviceSvg';
import { SimulatedTag } from '../ui/SimulatedTag';

export default function LiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRedResult, setIsRedResult] = useState(false);
  const [completed, setCompleted] = useState(false);

  const steps = [
    { num: 1, label: '01 Sample collected (250 mL into PTFE-free PP vessel)' },
    { num: 2, label: '02 Filter & WAX dual push (solids trapped, PFAS captured)' },
    { num: 3, label: '03 Blank scan recorded (I_blank = 142 nA)' },
    { num: 4, label: '04 Nile Red stain & 10-min incubation timer' },
    { num: 5, label: '05 WAX elution with ammoniated methanol & buffer dilution' },
    { num: 6, label: '06 Stained scan (I_stained = 790 nA) & macro photo JPEG' },
    { num: 7, label: '07 MIP/NIP DPV scan (S_net differential computed)' },
    { num: 8, label: '08 Triage tier calculated & 60-bit payload signed' },
    { num: 9, label: '09 12-char Crockford code generated for keypad SMS' },
    { num: 10, label: '10 Public health alert generated & WQMIS ticket logged' }
  ];

  useEffect(() => {
    let timer;
    if (isRunning && currentStep < steps.length) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 700); // 700ms per step
    } else if (isRunning && currentStep >= steps.length) {
      setIsRunning(false);
      setCompleted(true);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStep, steps.length]);

  const handleStart = () => {
    setCurrentStep(1);
    setCompleted(false);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setCompleted(false);
  };

  const pfasVerdict = isRedResult ? 'HIGH – SEND TO LAB' : 'DETECTED – MONITOR';
  const mpVerdict = isRedResult ? 'HIGH MFI' : 'LOW MFI';
  const activeCode = isRedResult ? '9R2B-4K7M-1T8W' : '7H4K-9M2X-8B3Q';
  const activeLed = isRedResult ? 'red' : 'amber';

  return (
    <section
      id="demo"
      style={{
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-paper)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            15 · Interactive Simulation
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            Run a field test.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: '#CDEFF2' }}>
            Simulate the full 35-minute physical protocol in accelerated time. Watch the hardware state machine process signals and generate a tamper-evident Crockford code.
          </p>
        </div>

        {/* Central Card: Device + State Machine Console */}
        <div
          style={{
            backgroundColor: 'var(--color-paper)',
            color: 'var(--color-ink)',
            borderRadius: '20px',
            border: '4px solid var(--color-ink)',
            padding: '2.5rem',
            boxShadow: '8px 8px 0px var(--color-signal-yellow)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="demo-grid"
        >
          {/* Left: Illustrated Reader Display */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-river-teal)' }}>
                VIRTUAL HARDWARE KIT
              </span>
              <SimulatedTag text="Simulated demonstration data" />
            </div>

            <ReaderDeviceSvg
              pfasTier={completed ? pfasVerdict : currentStep > 7 ? pfasVerdict : 'READING...'}
              mpTier={completed ? mpVerdict : currentStep > 5 ? mpVerdict : 'READING...'}
              signedCode={completed ? activeCode : currentStep > 8 ? activeCode : '---'}
              activeLed={completed ? activeLed : currentStep > 7 ? activeLed : 'none'}
            />

            {/* Action Buttons & Result Toggle */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {!isRunning && !completed && (
                <button onClick={handleStart} className="btn-press btn-yellow" style={{ padding: '0.65rem 1.4rem' }}>
                  ▶ Start Field Test
                </button>
              )}
              {isRunning && (
                <button disabled className="btn-press btn-paper" style={{ opacity: 0.7, cursor: 'wait' }}>
                  ⏳ Running Protocol Step {currentStep}/10...
                </button>
              )}
              {completed && (
                <button onClick={handleReset} className="btn-press btn-ink">
                  ↺ Reset Test
                </button>
              )}
              
              <button
                onClick={() => {
                  setIsRedResult(!isRedResult);
                  if (completed) handleStart();
                }}
                className="btn-press btn-paper"
                style={{ fontSize: '0.82rem' }}
              >
                {isRedResult ? 'Switch to Amber Result' : '⚠ Simulate Red Result (High PFAS)'}
              </button>
            </div>
          </div>

          {/* Right: Accelerated State Machine Log & Progress */}
          <div
            style={{
              backgroundColor: '#0B132B',
              borderRadius: '14px',
              border: '2px solid var(--color-ink)',
              padding: '1.75rem',
              color: '#CDEFF2',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '400px',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(14, 154, 167, 0.4)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-signal-yellow)', fontWeight: 800 }}>
                  FIRMWARE TELEMETRY LOG
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#8899A6' }}>
                  DS3231: 10:45:22 UTC
                </span>
              </div>

              {/* Step Sequence List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                {steps.map((st) => {
                  const isDone = currentStep >= st.num;
                  const isCurrent = currentStep === st.num && isRunning;

                  return (
                    <div
                      key={st.num}
                      style={{
                        color: isDone ? '#FFFFFF' : '#4A5568',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span style={{ color: isDone ? 'var(--color-leaf-green)' : isCurrent ? 'var(--color-signal-yellow)' : '#4A5568' }}>
                        {isDone ? '✓' : isCurrent ? '➔' : '○'}
                      </span>
                      <span style={{ fontWeight: isDone || isCurrent ? 700 : 400 }}>
                        {st.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Final Completed Result Card Banner */}
            {completed && (
              <div
                style={{
                  marginTop: '1.25rem',
                  backgroundColor: isRedResult ? 'rgba(215, 38, 61, 0.25)' : 'rgba(243, 156, 18, 0.25)',
                  border: isRedResult ? '2px solid var(--color-alert-red)' : '2px solid var(--color-amber)',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-signal-yellow)', fontWeight: 800, textTransform: 'uppercase' }}>
                  OFFICIAL TRIAGE RECORD GENERATED
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, margin: '0.35rem 0' }}>
                  SOURCE: HP-12 Borewell · {pfasVerdict}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#E2E8F0' }}>
                  {isRedResult
                    ? 'ACTION: Automated Chain-of-Custody ticket #TN-772 created. Courier alerted to collect 1 L sample for NABL LC-MS/MS confirmation.'
                    : 'ACTION: Retest scheduled in 2 weeks. Automated advisory dispatched to Block Development Officer.'}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .demo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
