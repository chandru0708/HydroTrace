import React, { useState } from 'react';
import KeypadPhoneSvg from '../illustrations/KeypadPhoneSvg';

export default function SignedCode() {
  const [activeCode, setActiveCode] = useState('7H4K-9M2X-8B3Q');
  const [stampStatus, setStampStatus] = useState('valid'); // 'valid', 'failed_sig', 'failed_counter'
  const [highlightSegment, setHighlightSegment] = useState(null);

  const handleSendValid = () => {
    setActiveCode('7H4K-9M2X-8B3Q');
    setStampStatus('valid');
  };

  const handleAlterChar = () => {
    setActiveCode('7H4K-9M2X-8B3R'); // changed last char
    setStampStatus('failed_sig');
  };

  const handleReusedCounter = () => {
    setActiveCode('7H4K-9M2X-8B3Q'); // old counter
    setStampStatus('failed_counter');
  };

  const bitSegments = [
    { name: 'Device ID', bits: 16, color: 'var(--color-river-teal)', desc: 'Maps to Habitation GPS (Ramapuram Well-04)' },
    { name: 'PFAS Tier', bits: 3, color: 'var(--color-pfas-violet)', desc: 'Triage band (Detected – Monitor)' },
    { name: 'Microplastic Tier', bits: 3, color: 'var(--color-nile-coral)', desc: 'Fluorescence band (Low MFI)' },
    { name: 'Test Counter', bits: 12, color: 'var(--color-butter)', desc: 'Hardware monotonic counter #0417 (Strictly ascending)' },
    { name: 'HMAC Signature', bits: 26, color: 'var(--color-signal-yellow)', desc: 'HMAC-SHA256 truncated signature from device secret key' }
  ];

  return (
    <section
      id="signed-code"
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
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            10 · Cryptographic Data Integrity
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            A 12-character code you can&rsquo;t fake.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: '#CDEFF2' }}>
            Encoded in 60-bit Crockford Base32 (no ambiguous I, L, O, or U). Even over 2G SMS from a basic keypad phone, every result is tamper-evident and protected against replay attacks.
          </p>
        </div>

        {/* Giant Code Display */}
        <div
          style={{
            backgroundColor: '#0B132B',
            border: '3px solid var(--color-signal-yellow)',
            borderRadius: '16px',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            boxShadow: '6px 6px 0px rgba(255, 201, 60, 0.4)',
            marginBottom: '2rem'
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', fontWeight: 900, color: 'var(--color-signal-yellow)', letterSpacing: '0.12em', textShadow: '2px 2px 0px #000' }}>
            {activeCode}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#A0AEC0' }}>
            <span>Alphabet: 0-9, A-Z (excl. I, L, O, U)</span>
            <span>•</span>
            <span>60 Total Bits</span>
            <span>•</span>
            <span style={{ color: 'var(--color-signal-yellow)' }}>Passes randomly 1 in 67 Million Tries</span>
          </div>
        </div>

        {/* 60-Bit Architecture Segment Bar */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#CDEFF2', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            60-Bit Bitfield Structure:
          </div>
          
          <div style={{ display: 'flex', height: '36px', borderRadius: '8px', overflow: 'hidden', border: '2px solid var(--color-paper)' }}>
            {bitSegments.map((seg, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHighlightSegment(idx)}
                onMouseLeave={() => setHighlightSegment(null)}
                style={{
                  flex: seg.bits,
                  backgroundColor: seg.color,
                  color: seg.color === 'var(--color-butter)' || seg.color === 'var(--color-signal-yellow)' ? 'var(--color-ink)' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  borderRight: idx < bitSegments.length - 1 ? '1px solid var(--color-ink)' : 'none',
                  opacity: highlightSegment === null || highlightSegment === idx ? 1 : 0.65,
                  transition: 'opacity 0.1s ease'
                }}
              >
                {seg.name.split(' ')[0]} ({seg.bits}b)
              </div>
            ))}
          </div>

          {/* Segment Tooltip description */}
          <div style={{ minHeight: '30px', marginTop: '0.6rem', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)' }}>
            {highlightSegment !== null ? (
              <span>
                <strong>{bitSegments[highlightSegment].name} ({bitSegments[highlightSegment].bits} bits):</strong> {bitSegments[highlightSegment].desc}
              </span>
            ) : (
              <span style={{ color: '#8899A6' }}>Hover over any segment above to inspect its bitfield allocation.</span>
            )}
          </div>
        </div>

        {/* Interactive Verification Lab: Keypad Phone + Stamp Validation */}
        <div
          style={{
            backgroundColor: '#1B2A4A',
            border: '2px solid rgba(205, 239, 242, 0.3)',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Keypad Phone Graphic */}
          <div style={{ maxWidth: '240px', margin: '0 auto' }}>
            <KeypadPhoneSvg code={activeCode} />
          </div>

          {/* Control Buttons & Stamp Output */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Test Server Cryptographic Gate
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#CDEFF2', lineHeight: 1.55, marginBottom: '1.5rem' }}>
              Simulate submitting the SMS message to the National Jal Jeevan Mission server webhook:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <button
                onClick={handleSendValid}
                className="btn-press btn-yellow"
                style={{ justifyContent: 'flex-start' }}
              >
                ✓ Submit Valid Code (7H4K-9M2X-8B3Q)
              </button>

              <button
                onClick={handleAlterChar}
                className="btn-press btn-paper"
                style={{ justifyContent: 'flex-start' }}
              >
                ✕ Alter Single Character (Change Q ➔ R)
              </button>

              <button
                onClick={handleReusedCounter}
                className="btn-press btn-paper"
                style={{ justifyContent: 'flex-start' }}
              >
                ✕ Resend Expired/Old Counter (#0417 Again)
              </button>
            </div>

            {/* Stamp Display */}
            <div style={{ minHeight: '80px', display: 'flex', alignItems: 'center' }}>
              {stampStatus === 'valid' && (
                <div
                  style={{
                    border: '3px solid var(--color-leaf-green)',
                    backgroundColor: 'rgba(43, 168, 74, 0.15)',
                    color: 'var(--color-leaf-green)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    letterSpacing: '0.08em',
                    display: 'inline-block'
                  }}
                >
                  ✓ SIGNATURE VALID · HABITATION RECORDED
                </div>
              )}

              {stampStatus === 'failed_sig' && (
                <div
                  style={{
                    border: '3px solid var(--color-alert-red)',
                    backgroundColor: 'rgba(215, 38, 61, 0.15)',
                    color: 'var(--color-alert-red)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    letterSpacing: '0.08em',
                    display: 'inline-block'
                  }}
                >
                  ✕ SIGNATURE FAILED · CODE ALTERED OR CORRUPT
                </div>
              )}

              {stampStatus === 'failed_counter' && (
                <div
                  style={{
                    border: '3px solid var(--color-alert-red)',
                    backgroundColor: 'rgba(215, 38, 61, 0.15)',
                    color: 'var(--color-alert-red)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    letterSpacing: '0.08em',
                    display: 'inline-block'
                  }}
                >
                  ✕ COUNTER REUSED · REPLAY ATTACK REJECTED
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
