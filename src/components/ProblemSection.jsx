import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { EyeOff, Scale, Waves, Building2, TestTube2, DatabaseZap, AlertCircle, ArrowRight } from 'lucide-react';

const JOURNEY_STAGES = [
  { step: '01', label: 'Water Source', sub: 'Groundwater / Surface Lake', status: 'Unmonitored' },
  { step: '02', label: 'Supply Network', sub: 'Piped Water Supply Scheme', status: 'In Transit' },
  { step: '03', label: 'Village Tap', sub: 'Delivered to Rural Household', status: 'At Point of Use' },
  { step: '04', label: 'Current Field Kit', sub: 'Only Tests pH, TDS, Hardness', status: 'Blind to PFAS & MP', warning: true },
  { step: '05', label: 'SURVEILLANCE VOID', sub: 'Zero Measurement or Record', status: 'Critical Blind Spot', blindSpot: true },
  { step: '06', label: 'No Action', sub: 'Undetected Long-Term Exposure', status: 'Unmitigated Risk', alert: true },
];

const PROBLEM_CARDS = [
  {
    num: '01',
    title: 'Invisible at Trace ppt Concentrations',
    description: 'PFAS "forever chemicals" exert chronic endocrine and immunotoxic risks at parts-per-trillion (ppt) levels. Conventional field colorimeters or chemical test strips cannot achieve sub-nanogram analytical sensitivity.',
    highlight: 'Sensitivity Gap (< ppt)',
    icon: EyeOff
  },
  {
    num: '02',
    title: 'No Statutory Indian Limit Yet',
    description: "IS 10500:2012 (India's national drinking water specification) contains no regulatory limit for PFAS. The Central Pollution Control Board (CPCB) reported to the National Green Tribunal that the Bureau of Indian Standards (BIS) has initiated revisions to address these substances.",
    highlight: 'Standard Revision Underway',
    source: 'CPCB reply in NGT OA 548/2024',
    icon: Scale
  },
  {
    num: '03',
    title: 'Documented Presence in Indian Water',
    description: 'An IIT Madras investigation (published April 2024) uncovered PFAS chemicals in major Chennai surface lakes serving as municipal drinking-water reservoirs, prompting suo-motu NGT action under OA 548/2024.',
    highlight: 'Surface Water Evidence',
    source: 'NGT OA 548/2024',
    icon: Waves
  },
  {
    num: '04',
    title: 'High-Cost Central Laboratory Dependence',
    description: 'Quantification currently mandates central laboratory access to Liquid Chromatography–Tandem Mass Spectrometry (LC-MS/MS) and µ-FTIR spectroscopy. These demand cold-chain logistics, certified analysts, and weeks of reporting delay.',
    highlight: 'Capex & Turnaround Latency',
    icon: Building2
  },
  {
    num: '05',
    title: 'Routine Field Kits Lack Transducers',
    description: 'Over 24.8 lakh women across India have been trained under the Jal Jeevan Mission with chemical Field Test Kits (FTKs). However, these kits only test routine chemical parameters (nitrates, fluorides, hardness) and cannot screen for synthetic organics.',
    highlight: '24.8L FTK Users Equipped with Routine Tools',
    icon: TestTube2
  },
  {
    num: '06',
    title: 'Absence of Source-Level Digital Trail',
    description: 'No digital provenance or geolocated time-series data exists for emerging contaminants in rural water sources. Without tamper-evident telemetry, district engineers lack early triage signals to justify targeted laboratory testing.',
    highlight: 'Zero Temporal Surveillance',
    icon: DatabaseZap
  }
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-28 relative tech-grid border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="01"
          category="THE SURVEILLANCE GAP"
          title="THE CONTAMINANTS NOBODY TESTS FOR"
          subtitle="PFAS 'forever chemicals' and microplastics can currently only be quantified in multi-crore central laboratories. As a result, over 99% of rural drinking-water sources are never tested for them."
          accent="cyan"
        />

        {/* Source-to-Tap Journey Pipeline */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800/80 gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
              EXISTING RURAL SURVEILLANCE PARADIGM // BREAKDOWN AT POINT OF CONSUMPTION
            </span>
            <span className="font-mono text-xs text-rose-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              CRITICAL MONITORING FAILURE AT VILLAGE TAP
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {JOURNEY_STAGES.map((item, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  item.blindSpot
                    ? 'bg-rose-950/40 border-rose-500/70 shadow-[0_0_24px_rgba(244,63,94,0.25)]'
                    : item.warning
                    ? 'bg-amber-950/20 border-amber-500/40 text-amber-300'
                    : item.alert
                    ? 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 mb-2">
                    <span>STAGE {item.step}</span>
                    {idx < JOURNEY_STAGES.length - 1 && (
                      <span className="hidden lg:inline text-slate-600">→</span>
                    )}
                  </div>

                  <h3 className={`font-heading font-bold text-sm tracking-tight ${
                    item.blindSpot ? 'text-rose-200 text-base font-extrabold' : 'text-white'
                  }`}>
                    {item.label}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                    {item.sub}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[10px]">
                  <span className={`px-2 py-0.5 rounded font-semibold inline-block ${
                    item.blindSpot
                      ? 'bg-rose-500 text-white'
                      : item.warning
                      ? 'bg-amber-950 text-amber-300 border border-amber-500/40'
                      : item.alert
                      ? 'bg-rose-950 text-rose-300 border border-rose-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Six Investigated Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <GlassPanel key={idx} className="flex flex-col justify-between hover:border-slate-700">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-sky-400 px-2.5 py-1 rounded bg-sky-950/50 border border-sky-500/30">
                      POINT {card.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans font-normal">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-400 font-mono text-[11px] mb-2">
                    {card.highlight}
                  </div>

                  {card.source && (
                    <div className="text-[11px] font-mono text-sky-400/90 pt-2.5 border-t border-slate-800 flex items-center gap-1.5">
                      <span className="text-slate-500">Source:</span>
                      <span className="font-medium">{card.source}</span>
                    </div>
                  )}
                </div>
              </GlassPanel>
            );
          })}
        </div>

      </div>
    </section>
  );
}
