import React from 'react';
import Logo from '../illustrations/Logo';
import Sticker from '../ui/Sticker';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-paper)',
        padding: '5rem 1.5rem 3.5rem',
        borderTop: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Main Footer Spread */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', marginBottom: '3.5rem' }} className="footer-grid">
          
          {/* Left Column: Branding & Problem Statement Details */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <Logo size={42} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              HydroTrace – PFAS & Microplastic Field Test Kit
            </h3>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-signal-yellow)', fontWeight: 700, marginBottom: '0.75rem' }}>
              SMART INDIA HACKATHON 2026 · HARDWARE EDITION · PS 26252
            </p>

            <p style={{ fontSize: '0.92rem', color: '#CDEFF2', lineHeight: 1.6, maxWidth: '560px' }}>
              &ldquo;Development of Field Test Kits for Detection and Monitoring of Emerging Contaminants (PFAS, Microplastics, etc.) in Drinking Water Sources and Water Supply Systems&rdquo;
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Sticker rotate="-2deg" color="var(--color-paper)" textColor="var(--color-ink)">
                Ministry of Jal Shakti (MoJS)
              </Sticker>
              <Sticker rotate="2deg" color="var(--color-river-teal)" textColor="#FFFFFF">
                NJJM / DDWS
              </Sticker>
              <Sticker rotate="-1deg" color="var(--color-signal-yellow)" textColor="var(--color-ink)">
                Clean & Green Technology
              </Sticker>
            </div>
          </div>

          {/* Right Column: Hackathon Team & Disclaimers */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div
              style={{
                backgroundColor: '#1B2A4A',
                border: '2px solid rgba(205, 239, 242, 0.25)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-signal-yellow)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                COMPETITION SUBMISSION DETAILS
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 700 }}>
                Team: [TEAM NAME]
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#A0AEC0', marginTop: '0.2rem' }}>
                Team ID: [TEAM ID]
              </div>
              <div style={{ fontSize: '0.82rem', color: '#CDEFF2', marginTop: '0.85rem', lineHeight: 1.5 }}>
                Field hardware prototype designed for testing rural drinking water supplies under the National Jal Jeevan Mission.
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Sticker rotate="-1deg" color="#FFFFFF" textColor="var(--color-ink)">
                Prototype Concept
              </Sticker>
              <Sticker rotate="1deg" color="var(--color-alert-red)" textColor="#FFFFFF">
                Laboratory Validation Required
              </Sticker>
            </div>
          </div>

        </div>

        {/* Bottom Rules & Copyright */}
        <div style={{ borderTop: '1px solid rgba(205, 239, 242, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#8899A6' }}>
          <div>
            &copy; 2026 HydroTrace. Open hardware & field diagnostic design for public health screening.
          </div>
          <div>
            Designed strictly for first-tier triage · Never declares drinking water &ldquo;safe&rdquo;
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
