import React, { useState } from 'react';

export default function FieldWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      num: '01',
      name: 'Sample Collection',
      time: '0 min',
      duration: '2 min',
      desc: 'Fill 250 mL directly from the handpump spout or tap into a certified PTFE-free polypropylene bottle.',
      oled: 'STEP 1/9: SAMPLE\nREADY: 250 mL\nVESSEL: PP CLEAN'
    },
    {
      num: '02',
      name: 'Manual Syringe Push',
      time: '2 min',
      duration: '10–15 min',
      desc: 'Lock syringe to 25 mm filter holder & WAX cartridge. Spring plunger applies constant pressure.',
      oled: 'STEP 2/9: FLOW\nGF FILTER: LOADED\nWAX: CAPTURING'
    },
    {
      num: '03',
      name: 'Microplastic Blank Scan',
      time: '15 min',
      duration: '1 min',
      desc: 'Insert filter disc into dark chamber. 470 nm excitation measures unstained disc baseline (I_blank).',
      oled: 'STEP 3/9: BLANK\n470nm BLUE LED ON\nI_BLANK: 142 nA'
    },
    {
      num: '04',
      name: 'Nile Red Staining',
      time: '16 min',
      duration: '10 min',
      desc: 'Dispense 3 drops of Nile Red in ethanol onto disc. Internal hardware timer counts down 10-minute wait.',
      oled: 'STEP 4/9: STAINING\nTIMER: 10:00\nINCUBATING...'
    },
    {
      num: '05',
      name: 'Parallel PFAS Elution',
      time: '18 min',
      duration: '5 min',
      desc: 'Performed concurrently during the stain incubation! Flush WAX cartridge with 0.5 mL ammoniated methanol.',
      oled: 'STEP 5/9: ELUTION\nWAX FLUSH: 0.5 mL\nAMMONIATED MEOH'
    },
    {
      num: '06',
      name: 'Buffer Dilution',
      time: '23 min',
      duration: '3 min',
      desc: 'Dilute the 0.5 mL eluate 1:4 with 2.0 mL phosphate buffer containing 5 mM ferri/ferrocyanide probe.',
      oled: 'STEP 6/9: BUFFER\nDILUTION: 1:4\nPROBE: [Fe(CN)6]'
    },
    {
      num: '07',
      name: 'Stained Optical Scan & Photo',
      time: '26 min',
      duration: '2 min',
      desc: 'Read fluorescence I_stained; calculate MFI. ESP32-S3 macro lens fires blue flash and captures audit photo.',
      oled: 'STEP 7/9: MP SCAN\nI_STAIN: 820 nA\nPHOTO: CAPTURED'
    },
    {
      num: '08',
      name: 'Electrochemical DPV Scan',
      time: '28 min',
      duration: '6 min',
      desc: 'Pipette droplet onto MIP/NIP strip. 5-min cavity incubation followed by sequential 60-s DPV sweeps.',
      oled: 'STEP 8/9: DPV SCAN\nSWEEP: -0.1 to +0.5V\nS_NET: COMPUTING'
    },
    {
      num: '09',
      name: 'Cryptographic Signing & Report',
      time: '34 min',
      duration: '1 min',
      desc: 'Tiers locked; 60-bit payload signed by HMAC-SHA256. 12-char Crockford code generated for keypad SMS.',
      oled: 'STEP 9/9: SIGNED\nTIER: AMBER / GREEN\nCODE: 7H4K-9M2X-8B3Q'
    }
  ];

  return (
    <section
      id="workflow"
      style={{
        backgroundColor: 'var(--color-river-teal)',
        color: 'var(--color-paper)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            07 · Protocol Efficiency
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
            From a village tap to a signed record in ~35 minutes.
          </h2>
          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', color: '#CDEFF2', lineHeight: 1.55 }}>
            By running the PFAS elution during the 10-minute microplastic incubation window, both assays finish in one swift field session.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
          {workflowSteps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              style={{
                backgroundColor: activeStep === idx ? 'var(--color-signal-yellow)' : '#123956',
                color: activeStep === idx ? 'var(--color-ink)' : '#FFFFFF',
                border: '2px solid var(--color-ink)',
                borderRadius: '8px',
                padding: '0.6rem 0.9rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                boxShadow: activeStep === idx ? '3px 3px 0px var(--color-ink)' : 'none',
                transition: 'all 0.1s ease'
              }}
            >
              {step.num} · {step.name}
            </button>
          ))}
        </div>

        {/* Selected Step Spotlight: Clock + Details + Synchronized OLED Screen */}
        <div
          style={{
            backgroundColor: 'var(--color-paper)',
            color: 'var(--color-ink)',
            borderRadius: '16px',
            border: '3px solid var(--color-ink)',
            padding: '2.5rem',
            boxShadow: '6px 6px 0px var(--color-ink)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Step Details & Duration */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-river-teal)' }}>
                STEP {workflowSteps[activeStep].num}
              </span>
              <span style={{ background: 'var(--color-signal-yellow)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 800 }}>
                Elapsed: T+{workflowSteps[activeStep].time} ({workflowSteps[activeStep].duration})
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.85rem' }}>
              {workflowSteps[activeStep].name}
            </h3>

            <p style={{ fontSize: '1.05rem', color: '#2B2B2B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {workflowSteps[activeStep].desc}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : workflowSteps.length - 1))}
                className="btn-press btn-paper"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
              >
                ◀ Previous Step
              </button>
              <button
                onClick={() => setActiveStep(prev => (prev < workflowSteps.length - 1 ? prev + 1 : 0))}
                className="btn-press btn-yellow"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
              >
                Next Step ▶
              </button>
            </div>
          </div>

          {/* Right: Simulated Synchronized Reader Screen for this Step */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '280px',
                backgroundColor: '#14213D',
                borderRadius: '12px',
                border: '3px solid #0E9AA7',
                padding: '1.25rem',
                boxShadow: '4px 4px 0px var(--color-ink)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#0E9AA7', fontWeight: 'bold' }}>
                  0.96" OLED SCREEN
                </span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2BA84A' }} />
              </div>

              {/* OLED Blue Monospace Terminal Display */}
              <div
                style={{
                  backgroundColor: '#0B132B',
                  border: '1.5px solid #0E9AA7',
                  borderRadius: '6px',
                  padding: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#CDEFF2',
                  lineHeight: 1.5,
                  minHeight: '110px',
                  whiteSpace: 'pre-line'
                }}
              >
                {workflowSteps[activeStep].oled}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2BA84A' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F39C12' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D7263D' }} />
              </div>
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-ink)', marginTop: '0.5rem', opacity: 0.7 }}>
              On-device firmware screen at this step
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
