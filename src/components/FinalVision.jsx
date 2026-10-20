import React from 'react';
import Sticker from '../ui/Sticker';
import PressButton from '../ui/PressButton';

export default function FinalVision() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="vision"
      style={{
        backgroundColor: 'var(--color-nile-coral)',
        color: 'var(--color-ink)',
        padding: '6rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Badges Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Sticker rotate="-2deg" color="#FFFFFF" textColor="var(--color-ink)">
            Smart India Hackathon 2026
          </Sticker>
          <Sticker rotate="2deg" color="var(--color-signal-yellow)">
            PS 26252
          </Sticker>
          <Sticker rotate="-1deg" color="var(--color-sky)" textColor="var(--color-ink)">
            Ministry of Jal Shakti · NJJM · DDWS
          </Sticker>
        </div>

        {/* Huge Fraunces Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--color-ink)'
          }}
        >
          From blind spots
          <br />
          to early warnings.
        </h2>

        {/* Mono Operating Doctrine */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)',
            fontWeight: 800,
            color: 'var(--color-ink)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            border: '2px solid var(--color-ink)',
            borderRadius: '9999px',
            padding: '0.5rem 1.5rem',
            marginBottom: '2rem',
            boxShadow: '3px 3px 0px var(--color-ink)'
          }}
        >
          <span>Collect</span>
          <span>•</span>
          <span>Concentrate</span>
          <span>•</span>
          <span>Sense</span>
          <span>•</span>
          <span>Sign</span>
          <span>•</span>
          <span>Act</span>
        </div>

        <p
          style={{
            fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
            lineHeight: 1.6,
            color: 'var(--color-ink)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem',
            fontWeight: 500
          }}
        >
          HydroTrace brings PFAS and microplastic screening directly to the village tap, empowering frontline communities so central laboratories can focus on the sources that need them most.
        </p>

        <div>
          <PressButton onClick={scrollToTop} variant="ink" style={{ padding: '0.8rem 1.8rem', fontSize: '1rem' }}>
            Back to the start ↑
          </PressButton>
        </div>

      </div>
    </section>
  );
}
