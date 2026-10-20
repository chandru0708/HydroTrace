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
                Team: AbyssX 786 · ID: 195737
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
            {/* Main Hero Illustrated Scene (SVG) */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '3px solid var(--color-ink)',
                boxShadow: '6px 6px 0px var(--color-ink)',
                padding: '1.25rem',
                position: 'relative'
              }}
            >
              <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                {/* 1. Sample Bottle Tipping (Water flows into Syringe) */}
                <g id="sample-bottle" transform="translate(18, 15) rotate(22)">
                  <rect x="0" y="0" width="36" height="60" rx="5" fill="#CDEFF2" stroke="#14213D" strokeWidth="2" />
                  <rect x="9" y="-7" width="18" height="7" fill="#14213D" />
                  <path d="M4 28 Q 18 33 32 28 L 32 55 L 4 55 Z" fill="#0E9AA7" opacity="0.75" />
                  <text x="6" y="46" fontFamily="var(--font-mono)" fontSize="7.5" fill="#FFFFFF" fontWeight="bold">250mL</text>
                </g>

                {/* Flowing Water stream into Syringe */}
                <path
                  d="M62 45 C 78 55 85 45 95 60"
                  stroke="#0E9AA7"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />

                {/* 2. Spring Syringe */}
                <g id="hero-syringe" transform="translate(80, 50)">
                  {/* Plunger Handle */}
                  <rect x="6" y="0" width="32" height="7" rx="2" fill="#FFC93C" stroke="#14213D" strokeWidth="1.5" />
                  <rect x="19" y="7" width="6" height="22" fill="#DDD" stroke="#14213D" strokeWidth="1.5" />
                  {/* Internal Spring */}
                  <path d="M19 12 L25 15 L19 18 L25 21 L19 24" stroke="#14213D" strokeWidth="1.5" />
                  {/* Barrel */}
                  <rect x="12" y="29" width="20" height="45" rx="3" fill="#CDEFF2" stroke="#14213D" strokeWidth="2" />
                  <path d="M13 46 L31 46" stroke="#0E9AA7" strokeWidth="1" strokeDasharray="2 1" />
                </g>

                {/* Vertical Stream to Filter */}
                <path d="M102 125 L102 140" stroke="#0E9AA7" strokeWidth="3" strokeDasharray="3 2" />

                {/* 3. 25 mm Glass-Fibre Filter Disc (Traps coral plastic fragments) */}
                <g id="hero-filter">
                  {/* Filter Disc Housing */}
                  <rect x="66" y="140" width="72" height="20" rx="5" fill="#FFFFFF" stroke="#14213D" strokeWidth="2" />
                  <line x1="74" y1="150" x2="130" y2="150" stroke="#14213D" strokeWidth="0.8" strokeDasharray="2 2" />
                  {/* Trapped Coral microplastics */}
                  <rect x="80" y="145" width="4" height="4" rx="1" fill="#FF6B4A" stroke="#14213D" strokeWidth="1" />
                  <polygon points="98,145 102,147 100,151 96,149" fill="#FF6B4A" stroke="#14213D" strokeWidth="1" />
                  <circle cx="114" cy="150" r="2.5" fill="#FF6B4A" />

                  {/* Centered Label below filter */}
                  <text x="102" y="172" fontFamily="var(--font-mono)" fontSize="8" fill="#FF6B4A" fontWeight="bold" textAnchor="middle">
                    25mm GF Filter
                  </text>

                  {/* Handwritten Annotation inside SVG */}
                  <text x="185" y="105" fontFamily="var(--font-hand)" fontSize="16" fill="var(--color-nile-coral)" fontWeight="bold">
                    plastics stop here!
                  </text>
                  <path d="M185 110 C 160 115 150 135 142 144" stroke="var(--color-nile-coral)" strokeWidth="1.8" fill="none" />
                  <polygon points="142,144 149,139 146,147" fill="var(--color-nile-coral)" />
                </g>

                {/* Flow to WAX Cartridge */}
                <path d="M102 176 L102 192" stroke="#6C4AB6" strokeWidth="3" strokeDasharray="3 2" />

                {/* 4. Disposable WAX Cartridge (Captures violet PFAS chains) */}
                <g id="hero-wax">
                  <rect x="84" y="192" width="36" height="42" rx="4" fill="#E7DEFA" stroke="#14213D" strokeWidth="2" />
                  {/* Sorbent beads */}
                  <circle cx="94" cy="202" r="2.5" fill="#6C4AB6" opacity="0.7" />
                  <circle cx="108" cy="205" r="2.5" fill="#6C4AB6" opacity="0.7" />
                  <circle cx="96" cy="220" r="2.5" fill="#6C4AB6" opacity="0.7" />
                  <circle cx="108" cy="224" r="2.5" fill="#6C4AB6" opacity="0.7" />
                  {/* Trapped PFAS zig-zag chains */}
                  <path d="M90 212 L96 217 L102 212 L108 217" stroke="#6C4AB6" strokeWidth="2" strokeLinecap="round" />

                  {/* Centered Label below WAX */}
                  <text x="102" y="246" fontFamily="var(--font-mono)" fontSize="8" fill="#6C4AB6" fontWeight="bold" textAnchor="middle">
                    WAX Cartridge
                  </text>

                  {/* Handwritten Annotation safely below */}
                  <text x="102" y="262" fontFamily="var(--font-hand)" fontSize="15" fill="var(--color-pfas-violet)" fontWeight="bold" textAnchor="middle">
                    PFAS sticks here!
                  </text>
                </g>

                {/* Two diagnostic conduits to Reader */}
                <path d="M138 150 C 190 150 205 170 245 170" stroke="#FF6B4A" strokeWidth="2.5" strokeDasharray="3 2" />
                <path d="M120 200 C 170 200 195 210 245 210" stroke="#6C4AB6" strokeWidth="2.5" strokeDasharray="3 2" />

                {/* 5. Handheld Reader Box with OLED & LEDs */}
                <g id="hero-reader" transform="translate(245, 120)">
                  <rect x="0" y="0" width="255" height="175" rx="14" fill="#14213D" stroke="#0E9AA7" strokeWidth="2.5" />
                  
                  {/* OLED Screen */}
                  <rect x="14" y="16" width="170" height="135" rx="7" fill="#0B132B" stroke="#0E9AA7" strokeWidth="1.5" />
                  <text x="24" y="36" fontFamily="var(--font-mono)" fontSize="9" fill="#CDEFF2" fontWeight="bold">HYDROTRACE v1.2</text>
                  <line x1="24" y1="42" x2="174" y2="42" stroke="#0E9AA7" strokeWidth="0.8" />
                  
                  <text x="24" y="60" fontFamily="var(--font-mono)" fontSize="8.5" fill="#E7DEFA">PFAS:</text>
                  <text x="60" y="60" fontFamily="var(--font-mono)" fontSize="8.5" fill="#F39C12" fontWeight="bold">DETECTED – MONITOR</text>

                  <text x="24" y="80" fontFamily="var(--font-mono)" fontSize="8.5" fill="#FFE1D6">MP:</text>
                  <text x="48" y="80" fontFamily="var(--font-mono)" fontSize="8.5" fill="#2BA84A" fontWeight="bold">LOW MFI</text>

                  {/* Signed 12-char Code on OLED */}
                  <rect x="22" y="94" width="154" height="28" rx="4" fill="#14213D" stroke="#FFC93C" strokeWidth="1.2" />
                  <text x="28" y="113" fontFamily="var(--font-mono)" fontSize="11" fill="#FFC93C" fontWeight="bold" letterSpacing="0.06em">
                    7H4K-9M2X-8B3Q
                  </text>
                  <text x="24" y="140" fontFamily="var(--font-mono)" fontSize="7.5" fill="#A0AEC0">SMS CODE SIGNED</text>

                  {/* Traffic LEDs */}
                  <g transform="translate(205, 30)">
                    <rect x="0" y="0" width="34" height="105" rx="6" fill="#0B132B" stroke="#0E9AA7" strokeWidth="1" />
                    <circle cx="17" cy="20" r="9" fill="#194d27" stroke="#0E9AA7" strokeWidth="1" />
                    <circle cx="17" cy="52" r="9" fill="#F39C12" stroke="#0E9AA7" strokeWidth="1" />
                    <circle cx="17" cy="52" r="13" fill="#F39C12" opacity="0.35" />
                    <circle cx="17" cy="84" r="9" fill="#4d121b" stroke="#0E9AA7" strokeWidth="1" />
                  </g>
                </g>

                {/* 6. Keypad Phone with SMS Bubble */}
                <g id="hero-phone" transform="translate(45, 275)">
                  {/* Mini feature phone */}
                  <rect x="0" y="0" width="80" height="115" rx="10" fill="#14213D" stroke="#0E9AA7" strokeWidth="2" />
                  <rect x="9" y="9" width="62" height="42" rx="4" fill="#FFF2C6" />
                  <text x="14" y="26" fontFamily="var(--font-mono)" fontSize="7" fill="#14213D" fontWeight="bold">SMS SENT</text>
                  <text x="14" y="38" fontFamily="var(--font-mono)" fontSize="6.5" fill="#0E9AA7">WQMIS: 1902</text>
                  {/* Buttons */}
                  <rect x="15" y="60" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="34" y="60" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="53" y="60" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="15" y="74" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="34" y="74" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="53" y="74" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="15" y="88" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="34" y="88" width="12" height="7" fill="#25355A" rx="1" />
                  <rect x="53" y="88" width="12" height="7" fill="#25355A" rx="1" />
                </g>

                {/* Flying SMS Bubble */}
                <g transform="translate(145, 300)">
                  <path d="M0 0 L 18 -12 L 140 -12 Q 146 -12 146 -6 L 146 22 Q 146 28 140 28 L 18 28 Q 12 28 12 22 L 12 8 Z" fill="#FFC93C" stroke="#14213D" strokeWidth="1.5" />
                  <text x="24" y="12" fontFamily="var(--font-mono)" fontSize="9" fill="#14213D" fontWeight="bold">
                    7H4K-9M2X-8B3Q
                  </text>
                </g>

                {/* Handwritten Annotation for Signed Code */}
                <text x="315" y="355" fontFamily="var(--font-hand)" fontSize="17" fill="var(--color-ink)" fontWeight="bold">
                  tamper-proof signed code!
                </text>
                <path d="M310 350 C 275 345 250 330 225 320" stroke="var(--color-ink)" strokeWidth="1.8" fill="none" />
                <polygon points="225,320 234,321 230,327" fill="var(--color-ink)" />
              </svg>

              {/* Bottom Metadata Bar - Generous Spacing and Wrap Safety */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '0.85rem',
                  paddingTop: '0.65rem',
                  borderTop: '1px dashed rgba(20, 33, 61, 0.2)',
                  gap: '0.75rem',
                  flexWrap: 'wrap'
                }}
              >
                <SimulatedTag text="Simulated demonstration result" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ink)', opacity: 0.85, fontWeight: 700 }}>
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
