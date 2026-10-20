import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { ExternalLink, BookOpen } from 'lucide-react';

const REFERENCES = [
  {
    num: '01',
    authors: 'Karimian N. et al.',
    year: '2018',
    title: 'Electrochemosensor for trace analysis of PFOS in water based on a molecularly imprinted poly(o-phenylenediamine) polymer',
    journal: 'ACS Sensors, 3(4), 856–864',
    url: 'https://doi.org/10.1021/acssensors.8b00154'
  },
  {
    num: '02',
    authors: 'Maes T. et al.',
    year: '2017',
    title: 'A rapid-screening approach to detect and quantify microplastics based on fluorescent tagging with Nile Red',
    journal: 'Scientific Reports 7, 44501',
    url: 'https://doi.org/10.1038/srep44501'
  },
  {
    num: '03',
    authors: 'Rowe A.A. et al.',
    year: '2011',
    title: 'CheapStat: an open-source, "do-it-yourself" potentiostat for analytical and educational applications',
    journal: 'PLoS ONE 6(9): e23783',
    url: 'https://doi.org/10.1371/journal.pone.0023783'
  },
  {
    num: '04',
    authors: 'US Environmental Protection Agency (EPA)',
    year: '2019',
    title: 'Method 533: Determination of Selected Per- and Polyfluoroalkyl Substances in Drinking Water by Isotope Dilution Anion Exchange SPE and LC/MS/MS',
    journal: 'US EPA Document #815-B-19-020',
    url: 'https://www.epa.gov/dwanalyticalmethods/method-533-determination-and-polyfluoroalkyl-substances-drinking-water-isotope'
  },
  {
    num: '05',
    authors: 'Central Pollution Control Board (CPCB)',
    year: '2024',
    title: 'Reply on behalf of CPCB in OA No 548 of 2024 (IIT Madras study on PFAS in Chennai lakes)',
    journal: 'National Green Tribunal Principal Bench, New Delhi',
    url: 'https://www.greentribunal.gov.in/sites/default/files/news_updates/Reply%20on%20behalf%20of%20CPCB%20in%20OA%20No%20548%20of%202024%20(NEWS%20ITEM%20TITLED%20IIT%20MADRAS%20STUDY%20REVEALS%20PRESENCE%20OF%20,FOREVER%20CHEMICALS,%20IN%20CHENNAI%20LAKES%20DRINKING%20WATER.pdf'
  },
  {
    num: '06',
    authors: 'Bureau of Indian Standards (BIS)',
    year: '2012',
    title: 'IS 10500:2012 Drinking Water — Specification (Second Revision)',
    journal: 'Bureau of Indian Standards, New Delhi',
    url: 'https://www.bis.gov.in/other/DrinWatIS10500.pdf'
  },
  {
    num: '07',
    authors: 'US Federal Register',
    year: '2026',
    title: 'National Primary Drinking Water Regulation: Extending Compliance Deadlines for PFOA and PFOS Maximum Contaminant Levels (4 ppt each)',
    journal: 'US Federal Register, 20 May 2026',
    url: 'https://www.federalregister.gov/documents/2026/05/20/2026-10086/extending-the-compliance-deadline-for-the-pfoa-and-pfos-maximum-contaminant-levels'
  },
  {
    num: '08',
    authors: 'Press Information Bureau (PIB), Ministry of Jal Shakti',
    year: 'Feb 2025',
    title: 'Jal Jeevan Mission Factsheet: 15.44 Crore Connections & 24.8 Lakh FTK-Trained Women',
    journal: 'Government of India PIB Release',
    url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/feb/doc202521494901.pdf'
  }
];

export default function References() {
  return (
    <section id="references" className="py-28 relative tech-grid bg-[#02050E] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="21"
          category="ACADEMIC & STATUTORY CITATIONS"
          title="SCIENTIFIC & STATUTORY REFERENCES"
          subtitle="All chemistry, optical physics, circuit design, and regulatory citations supporting the Jal-Drishti engineering architecture."
          accent="cyan"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REFERENCES.map((ref) => (
            <GlassPanel key={ref.num} className="p-4 flex flex-col justify-between hover:border-cyan-500/30">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                    REF [{ref.num}]
                  </span>
                  <span className="text-slate-500">{ref.year}</span>
                </div>

                <div className="font-heading font-bold text-white text-xs sm:text-sm mb-1 leading-snug">
                  {ref.title}
                </div>

                <div className="text-[11px] font-sans text-slate-400 mb-1">
                  {ref.authors}
                </div>

                <div className="text-[10px] font-mono text-slate-500">
                  {ref.journal}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-end">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>SOURCE DOCUMENT</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </GlassPanel>
          ))}
        </div>

      </div>
    </section>
  );
}
