import React from 'react';

export default function Reporting() {
  return (
    <section
      id="reporting"
      style={{
        backgroundColor: 'var(--color-butter)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            11 · Zero-Infrastructure Telemetry
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 4.4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            Works with every phone. Or no phone.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: '#333' }}>
            Rural India has diverse communication realities. HydroTrace adapts across all three connectivity tiers with zero native mobile app downloads.
          </p>
        </div>

        {/* 3 Comic-Strip Style Stacked Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Panel 1: No Phone */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--color-paper)', border: '1.5px solid var(--color-ink)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 800 }}>
                  TIER 0 · OFFLINE STANDALONE
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>No phone needed</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginBottom: '0.75rem' }}>
                On-device screen & LEDs.
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.55 }}>
                The high-contrast 0.96" OLED screen displays the clear verdict, while three bright traffic-light LEDs give an instant physical indication. Up to 500 complete test records and audit photos are securely cached in onboard non-volatile flash.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', background: 'var(--color-paper)', border: '2px dashed var(--color-ink)', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-river-teal)' }}>
                Onboard Storage: Up to 500 Tests Cached
              </div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.2rem' }}>
                Syncs automatically whenever connected later
              </div>
            </div>
          </div>

          {/* Panel 2: Keypad Feature Phone */}
          <div
            style={{
              backgroundColor: 'var(--color-signal-yellow)',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--color-ink)', color: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 800 }}>
                  TIER 1 · 2G BASIC CELLULAR
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ink)', fontWeight: 'bold' }}>Keypad SMS</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginBottom: '0.75rem' }}>
                12-Character SMS code.
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#1B2A4A', lineHeight: 1.55 }}>
                Any worker can type the 12 characters displayed on the OLED (e.g. <code>7H4K-9M2X-8B3Q</code>) into any basic feature phone and SMS it to the district toll-free number. A lightweight hackathon Android gateway forwards incoming SMS directly to the server webhook.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#FFFFFF', border: '2px solid var(--color-ink)', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-ink)' }}>
                SMS Transmission: 100% 2G Coverage
              </div>
              <div style={{ fontSize: '0.75rem', color: '#555', marginTop: '0.2rem' }}>
                SMS arrival timestamp synchronised with DS3231 RTC
              </div>
            </div>
          </div>

          {/* Panel 3: Any Smartphone Browser */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid var(--color-ink)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '6px 6px 0px var(--color-ink)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--color-sky)', border: '1.5px solid var(--color-ink)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 800 }}>
                  TIER 2 · LOCAL WI-FI HOTSPOT
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>Zero app install</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', marginBottom: '0.75rem' }}>
                Captive web portal.
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.55 }}>
                The ESP32-S3 broadcasts a local Wi-Fi network. Any worker phone connecting automatically triggers a captive-portal web page in the phone&rsquo;s default browser. When cellular data returns, queued audit photos and telemetry upload seamlessly.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', background: 'var(--color-sky)', border: '2px solid var(--color-ink)', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-river-teal)' }}>
                Offline Web Queue ➔ Background Cloud Sync
              </div>
              <div style={{ fontSize: '0.75rem', color: '#444', marginTop: '0.2rem' }}>
                Directly maps into WQMIS API schema
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner Note */}
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-ink)', background: 'rgba(20, 33, 61, 0.06)', padding: '0.75rem', borderRadius: '6px' }}>
          * The test and recording protocol operates completely without continuous internet connectivity.
        </div>

      </div>
    </section>
  );
}
