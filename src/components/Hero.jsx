import React from 'react';
import Sticker from '../ui/Sticker';
import PressButton from '../ui/PressButton';
import MarginNote from '../ui/MarginNote';
import { SimulatedTag } from '../ui/SimulatedTag';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper)',
        overflow: 'hidden',
        borderBottom: '2px solid var(--color-ink)',
        padding: '3.5rem 1.5rem 4.5rem'
      }}
    >
      {/* Large Solid Flat Teal Organic Shape on the Right (No gradient) */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '52%',
          height: '120%',
          backgroundColor: 'var(--color-river-teal)',
          borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.95
        }}
        className="hero-teal-blob"
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column (55%) */}
          <div>
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Sticker rotate="-3deg" color="var(--color-signal-yellow)">
                SIH 2026 · PS 26252 · Ministry of Jal Shakti
              </Sticker>
              <Sticker rotate="2deg" color="var(--color-sky)" textColor="var(--color-ink)">
                Clean & Green Tech
              </Sticker>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
                fontWeight: 900,
                color: 'var(--color-ink)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem'
              }}
            >
              Trace the <span style={{ fontStyle: 'italic', color: 'var(--color-pfas-violet)' }}>invisible</span>
              <br />
              in every drop.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.55,
                color: 'var(--color-ink)',
                maxWidth: '540px',
                marginBottom: '2rem',
                fontWeight: 450
              }}
            >
              HydroTrace is a <strong>≈ ₹2,700</strong> handheld kit that screens one 250 mL water sample for PFAS and microplastics in <strong>30–40 minutes</strong> — and reports a tamper-proof result by SMS from any phone. Red results go to an NABL lab for confirmation.
            </p>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <PressButton href="#solution" variant="ink">
                See how it works
              </PressButton>
              <PressButton href="#demo" variant="yellow">
                Run the live test ▸
              </PressButton>
            </div>

            {/* Mono Facts Row */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                padding: '0.5rem 0.9rem',
                background: 'rgba(20, 33, 61, 0.05)',
                border: '1.5px solid rgba(20, 33, 61, 0.15)',
                borderRadius: '6px'
              }}
            >
              <span style={{ fontWeight: 700 }}>250 mL</span>
              <span>•</span>
              <span style={{ fontWeight: 700 }}>2 tests</span>
              <span>•</span>
              <span style={{ fontWeight: 700 }}>30–40 min</span>
              <span>•</span>
              <span style={{ fontWeight: 700 }}>₹150–200/test</span>
              <span>•</span>
              <span style={{ color: 'var(--color-leaf-green)', fontWeight: 700 }}>works offline</span>
            </div>

            {/* Design Target Disclaimer */}
            <div style={{ marginTop: '0.75rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-ink)', opacity: 0.75, fontStyle: 'italic' }}>
                * Design targets for hardware prototype. First-tier field triage tool, requires NABL laboratory confirmation.
              </p>
            </div>
          </div>

          {/* Right Column (45%): Custom Flat Illustration */}
          <div style={{ position: 'relative' }}>
            {/* Margin Notes with hand-drawn arrows */}
            <div style={{ position: 'absolute', top: '-15px', right: '20px', zIndex: 10 }}>
              <MarginNote text="plastics stop here!" direction="curve-down" color="#FFFFFF" />
            </div>
            
            <div style={{ position: 'absolute', bottom: '85px', left: '-20px', zIndex: 10 }}>
              <MarginNote text="PFAS sticks here" direction="right" color="var(--color-ink)" />
            </div>

            <div style={{ position: 'absolute', bottom: '-20px', right: '30px', zIndex: 10 }}>
              <MarginNote text="tamper-proof signed code!" direction="left" color="#FFFFFF" />
            </div>

            {/* Main Hero Illustrated Scene (SVG) */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '3px solid var(--color-ink)',
                boxShadow: '6px 6px 0px var(--color-ink)',
                padding: '1.25rem',
                overflow: 'hidden'
              }}
            >
              <svg viewBox="0 0 480 430" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                {/* 1. Sample Bottle Tipping (Water flows into Syringe) */}
                <g id="sample-bottle" transform="translate(30, 20) rotate(25)">
                  <rect x="0" y="0" width="38" height="65" rx="5" fill="#CDEFF2" stroke="#14213D" strokeWidth="2" />
                  <rect x="10" y="-8" width="18" height="8" fill="#14213D" />
                  <path d="M5 30 Q 19 35 33 30 L 33 60 L 5 60 Z" fill="#0E9AA7" opacity="0.7" />
                  <text x="7" y="50" fontFamily="var(--font-mono)" fontSize="7" fill="#FFFFFF" fontWeight="bold">250mL</text>
                </g>

                {/* Flowing Water stream */}
                <path
                  d="M75 50 C 95 65 110 50 120 70"
                  stroke="#0E9AA7"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />

                {/* 2. Spring Syringe */}
                <g id="hero-syringe" transform="translate(100, 60)">
                  {/* Plunger */}
                  <rect x="12" y="0" width="32" height="8" rx="2" fill="#FFC93C" stroke="#14213D" strokeWidth="1.5" />
                  <rect x="25" y="8" width="6" height="24" fill="#DDD" stroke="#14213D" strokeWidth="1.5" />
                  {/* Spring coils */}
                  <path d="M25 14 L31 17 L25 20 L31 23 L25 26" stroke="#14213D" strokeWidth="1.5" />
                  {/* Barrel */}
                  <rect x="18" y="32" width="20" height="48" rx="3" fill="#CDEFF2" stroke="#14213D" strokeWidth="2" />
                  <path d="M19 50 L37 50" stroke="#0E9AA7" strokeWidth="1" strokeDasharray="2 1" />
                </g>

                {/* Water Stream to Filter */}
                <path d="M128 140 L128 155" stroke="#0E9AA7" strokeWidth="3" strokeDasharray="3 2" />

                {/* 3. 25 mm Glass-Fibre Filter Disc (Traps coral plastic fragments) */}
                <g id="hero-filter" transform="translate(88, 155)">
                  <rect x="0" y="0" width="80" height="22" rx="6" fill="#FFFFFF" stroke="#14213D" strokeWidth="2" />
                  {/* Glass fibre mesh */}
                  <line x1="10" y1="11" x2="70" y2="11" stroke="#14213D" strokeWidth="0.8" strokeDasharray="2 2" />
                  {/* Trapped Coral microplastics */}
                  <rect x="25" y="6" width="5" height="5" rx="1" fill="#FF6B4A" stroke="#14213D" strokeWidth="1" />
                  <polygon points="45,6 49,8 47,12 43,10" fill="#FF6B4A" stroke="#14213D" strokeWidth="1" />
                  <circle cx="58" cy="11" r="2.5" fill="#FF6B4A" />
                  <text x="86" y="15" fontFamily="var(--font-mono)" fontSize="9" fill="#FF6B4A" fontWeight="bold">25mm Filter (MP)</text>
                </g>

                {/* Flow to WAX Cartridge */}
                <path d="M128 177 L128 195" stroke="#6C4AB6" strokeWidth="3" strokeDasharray="3 2" />

                {/* 4. Disposable WAX Cartridge (Captures violet PFAS chains) */}
                <g id="hero-wax" transform="translate(108, 195)">
                  <rect x="0" y="0" width="40" height="46" rx="4" fill="#E7DEFA" stroke="#14213D" strokeWidth="2" />
                  {/* Sorbent beads */}
                  <circle cx="12" cy="12" r="3" fill="#6C4AB6" opacity="0.7" />
                  <circle cx="28" cy="15" r="3" fill="#6C4AB6" opacity="0.7" />
                  <circle cx="16" cy="30" r="3" fill="#6C4AB6" opacity="0.7" />
                  <circle cx="28" cy="34" r="3" fill="#6C4AB6" opacity="0.7" />
                  {/* Trapped PFAS zig-zag chains */}
                  <path d="M8 20 L15 25 L22 20 L29 25" stroke="#6C4AB6" strokeWidth="2" strokeLinecap="round" />
                  <text x="48" y="26" fontFamily="var(--font-mono)" fontSize="9" fill="#6C4AB6" fontWeight="bold">WAX Cartridge (PFAS)</text>
                </g>

                {/* Two diagnostic conduits to Reader */}
                <path d="M168 166 C 220 166 220 230 240 230" stroke="#FF6B4A" strokeWidth="2.5" strokeDasharray="3 2" />
                <path d="M148 241 C 190 241 210 260 240 260" stroke="#6C4AB6" strokeWidth="2.5" strokeDasharray="3 2" />

                {/* 5. Handheld Reader Box with OLED & LEDs */}
                <g id="hero-reader" transform="translate(240, 180)">
                  <rect x="0" y="0" width="220" height="150" rx="12" fill="#14213D" stroke="#0E9AA7" strokeWidth="2.5" />
                  
                  {/* OLED Screen */}
                  <rect x="12" y="14" width="145" height="110" rx="6" fill="#0B132B" stroke="#0E9AA7" strokeWidth="1.5" />
                  <text x="20" y="32" fontFamily="var(--font-mono)" fontSize="8.5" fill="#CDEFF2" fontWeight="bold">HYDROTRACE</text>
                  <line x1="20" y1="36" x2="145" y2="36" stroke="#0E9AA7" strokeWidth="0.8" />
                  
                  <text x="20" y="50" fontFamily="var(--font-mono)" fontSize="8" fill="#E7DEFA">PFAS:</text>
                  <text x="52" y="50" fontFamily="var(--font-mono)" fontSize="8" fill="#F39C12" fontWeight="bold">DETECTED – MONITOR</text>

                  <text x="20" y="66" fontFamily="var(--font-mono)" fontSize="8" fill="#FFE1D6">MP:</text>
                  <text x="42" y="66" fontFamily="var(--font-mono)" fontSize="8" fill="#2BA84A" fontWeight="bold">LOW MFI</text>

                  {/* Signed 12-char Code on OLED */}
                  <rect x="18" y="76" width="132" height="24" rx="3" fill="#14213D" stroke="#FFC93C" strokeWidth="1" />
                  <text x="23" y="92" fontFamily="var(--font-mono)" fontSize="9.5" fill="#FFC93C" fontWeight="bold" letterSpacing="0.05em">
                    7H4K-9M2X-8B3Q
                  </text>
                  <text x="20" y="114" fontFamily="var(--font-mono)" fontSize="7" fill="#A0AEC0">SMS CODE SIGNED</text>

                  {/* Traffic LEDs */}
                  <circle cx="182" cy="38" r="8" fill="#194d27" stroke="#0E9AA7" strokeWidth="1" />
                  <circle cx="182" cy="64" r="8" fill="#F39C12" stroke="#0E9AA7" strokeWidth="1" /> {/* Active Amber */}
                  <circle cx="182" cy="64" r="11" fill="#F39C12" opacity="0.3" />
                  <circle cx="182" cy="90" r="8" fill="#4d121b" stroke="#0E9AA7" strokeWidth="1" />
                </g>

                {/* 6. Keypad Phone with SMS Bubble */}
                <g id="hero-phone" transform="translate(60, 310)">
                  {/* Mini feature phone */}
                  <rect x="0" y="0" width="70" height="95" rx="8" fill="#14213D" stroke="#0E9AA7" strokeWidth="2" />
                  <rect x="8" y="8" width="54" height="35" rx="3" fill="#FFF2C6" />
                  <text x="14" y="24" fontFamily="var(--font-mono)" fontSize="6" fill="#14213D" fontWeight="bold">SMS SENT</text>
                  <text x="14" y="34" fontFamily="var(--font-mono)" fontSize="5.5" fill="#0E9AA7">WQMIS 1902</text>
                  {/* Buttons */}
                  <rect x="14" y="50" width="10" height="6" fill="#25355A" rx="1" />
                  <rect x="30" y="50" width="10" height="6" fill="#25355A" rx="1" />
                  <rect x="46" y="50" width="10" height="6" fill="#25355A" rx="1" />
                  <rect x="14" y="60" width="10" height="6" fill="#25355A" rx="1" />
                  <rect x="30" y="60" width="10" height="6" fill="#25355A" rx="1" />
                  <rect x="46" y="60" width="10" height="6" fill="#25355A" rx="1" />
                </g>

                {/* Flying SMS Bubble */}
                <g transform="translate(145, 340)">
                  <path d="M0 0 L 15 -10 L 80 -10 Q 86 -10 86 -4 L 86 16 Q 86 22 80 22 L 15 22 Q 9 22 9 16 L 9 8 Z" fill="#FFC93C" stroke="#14213D" strokeWidth="1.5" />
                  <text x="18" y="10" fontFamily="var(--font-mono)" fontSize="7.5" fill="#14213D" fontWeight="bold">
                    7H4K-9M2X-8B3Q
                  </text>
                </g>
              </svg>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed rgba(20, 33, 61, 0.2)' }}>
                <SimulatedTag text="Simulated demonstration result" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-ink)', opacity: 0.7 }}>
                  1 Sample ➔ 2 Tests ➔ 1 Signed Code
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 991px) {
          .hero-teal-blob {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
