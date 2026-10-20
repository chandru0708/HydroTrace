import React from 'react';

export default function References() {
  const references = [
    {
      id: 1,
      citation: 'Karimian N. et al., "Electrochemosensor for trace analysis of PFOS in water based on a molecularly imprinted poly(o-phenylenediamine) polymer", ACS Sensors, 2018.',
      link: 'https://doi.org/10.1021/acssensors.8b00154',
      badge: 'MIP Analytical Precedent (0.04 nM LOD)'
    },
    {
      id: 2,
      citation: 'Maes T. et al., "A rapid-screening approach to detect and quantify microplastics based on fluorescent tagging with Nile Red", Scientific Reports 7, 44501, 2017.',
      link: 'https://doi.org/10.1038/srep44501',
      badge: 'Nile Red Tagging Protocol'
    },
    {
      id: 3,
      citation: 'Rowe A.A. et al., "CheapStat: an open-source, \'do-it-yourself\' potentiostat", PLoS ONE 6(9): e23783, 2011.',
      link: 'https://doi.org/10.1371/journal.pone.0023783',
      badge: 'Open Potentiostat Architecture'
    },
    {
      id: 4,
      citation: 'US EPA Method 533 — "Determination of PFAS in Drinking Water by Isotope Dilution Anion Exchange SPE and LC-MS/MS", 2019.',
      link: 'https://www.epa.gov/dwanalyticalmethods/method-533-determination-and-polyfluoroalkyl-substances-drinking-water-isotope',
      badge: 'WAX Cartridge Solid-Phase Reference'
    },
    {
      id: 5,
      citation: 'Central Pollution Control Board (CPCB) reply to National Green Tribunal, OA No. 548/2024 (IIT Madras study revealing PFAS in Chennai lakes drinking water).',
      link: 'https://www.greentribunal.gov.in/sites/default/files/news_updates/Reply%20on%20behalf%20of%20CPCB%20in%20OA%20No%20548%20of%202024%20(NEWS%20ITEM%20TITLED%20IIT%20MADRAS%20STUDY%20REVEALS%20PRESENCE%20OF%20,FOREVER%20CHEMICALS,%20IN%20CHENNAI%20LAKES%20DRINKING%20WATER.pdf',
      badge: 'NGT Indian Lake Surveillance OA 548/2024'
    },
    {
      id: 6,
      citation: 'Bureau of Indian Standards (BIS), "IS 10500:2012 Drinking Water — Specification", New Delhi, India.',
      link: 'https://www.bis.gov.in/other/DrinWatIS10500.pdf',
      badge: 'National Potable Water Standard'
    },
    {
      id: 7,
      citation: 'US EPA, "National Primary Drinking Water Regulation: Extending Compliance Deadline for PFOA and PFOS MCLs (4 ppt enforceable limit)", Federal Register, 20 May 2026.',
      link: 'https://www.federalregister.gov/documents/2026/05/20/2026-10086/extending-the-compliance-deadline-for-the-pfoa-and-pfos-maximum-contaminant-levels',
      badge: 'US 4 ppt Regulatory Threshold'
    },
    {
      id: 8,
      citation: 'Press Information Bureau (PIB), "Jal Jeevan Mission Factsheet: 15.44 Crore Connections & 24.8 Lakh FTK Women", Ministry of Jal Shakti, Feb 2025.',
      link: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/feb/doc202521494901.pdf',
      badge: 'National JJM Infrastructure Baseline'
    }
  ];

  return (
    <section
      id="references"
      style={{
        backgroundColor: 'var(--color-paper)',
        color: 'var(--color-ink)',
        padding: '5.5rem 1.5rem',
        borderBottom: '2px solid var(--color-ink)'
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-river-teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
            Scientific Bibliography & Statutory Sources
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.15
            }}
          >
            Verified technical references.
          </h2>
          <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#555' }}>
            Every parameter, limit, and architectural decision derives from peer-reviewed literature and statutory government filings.
          </p>
        </div>

        {/* Printed Bibliography List */}
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '2.5px solid var(--color-ink)' }}>
          {references.map((ref) => (
            <div
              key={ref.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto',
                gap: '1.25rem',
                alignItems: 'baseline',
                padding: '1.25rem 0',
                borderBottom: '1px solid rgba(20, 33, 61, 0.2)'
              }}
              className="ref-row"
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-river-teal)' }}>
                [{ref.id}]
              </span>

              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.55, color: '#1B2A4A' }}>
                  {ref.citation}
                </p>
                <div style={{ marginTop: '0.35rem' }}>
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--color-pfas-violet)',
                      textDecoration: 'underline',
                      wordBreak: 'break-all'
                    }}
                  >
                    {ref.link}
                  </a>
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  backgroundColor: 'rgba(20, 33, 61, 0.06)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap'
                }}
              >
                {ref.badge}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .ref-row {
            grid-template-columns: 30px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
