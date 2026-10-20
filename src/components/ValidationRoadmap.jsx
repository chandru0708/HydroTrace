import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Calendar, FlaskConical, Cpu, Users, Layers, Award } from 'lucide-react';

const ROADMAP_STAGES = [
  {
    num: '01',
    title: 'ELECTRONICS BENCHMARKING',
    domain: 'ENGINEERING',
    objective: 'DIY Potentiostat vs Commercial Lab Potentiostat',
    desc: 'Benchmark MCP6004/MCP4725/ADS1115 circuit against a benchtop Metrohm Autolab / PalmSens on identical 5 mM ferri/ferrocyanide standard solutions. Measure linearity, noise floor (<6 nA), and DPV pulse fidelity.',
    status: 'PLANNED'
  },
  {
    num: '02',
    title: 'PFAS METHOD CALIBRATION',
    domain: 'LABORATORY',
    objective: 'WAX Recovery & Imprinted Polymer Strips',
    desc: 'Construct multi-point calibration curves in clean buffer, spiked tap water, and hard borewell water. Measure exact WAX extraction recovery (40–60× target) and compare dilution versus heated evaporation recovery kinetics.',
    status: 'PLANNED'
  },
  {
    num: '03',
    title: 'MICROPLASTICS INDEXING',
    domain: 'LABORATORY',
    objective: 'Fluorophore Calibration on Polymer Blends',
    desc: 'Expose 25 mm glass-fibre filters to known size-fractionated ground microplastics (PET, PE, PP, PS) between 20 µm and 300 µm. Fix quantitative empirical cutoffs for Low, Moderate, and High MFI triage bands.',
    status: 'PLANNED'
  },
  {
    num: '04',
    title: 'REAL SAMPLES COMPARISON',
    domain: 'FIELD / NABL',
    objective: '20–30 Blind Field Samples with LC-MS/MS',
    desc: 'Collect 20–30 blind groundwater samples across rural districts. Run simultaneous Jal-Drishti screening alongside an NABL-accredited laboratory using EPA Method 533 (LC-MS/MS). Quantify confirmed positives and false-negative triage rates.',
    status: 'PLANNED'
  },
  {
    num: '05',
    title: 'HUMAN-FACTORS USABILITY',
    domain: 'FIELD DEPLOYMENT',
    objective: 'Field Testing with 5–10 FTK Women Volunteers',
    desc: 'Evaluate 5–10 non-chemist rural water testers using the complete kit under unassisted field conditions. Time the workflow (30–40 min design target), measure pipetting repeatability, and verify SMS Crockford Base32 accuracy.',
    status: 'PLANNED'
  }
];

export default function ValidationRoadmap() {
  return (
    <section id="validation" className="py-28 relative tech-grid border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="17"
          category="SCIENTIFIC RIGOR & HONESTY"
          title="FROM PROTOTYPE TO VALIDATED FIELD KIT"
          subtitle="Jal-Drishti is an early-stage hackathon hardware concept. We do not claim clinical validation or government certification today. Here is our structured 5-stage laboratory and field validation protocol."
          accent="cyan"
        />

        {/* 5-Stage Animated Roadmap */}
        <div className="space-y-4 mb-8">
          {ROADMAP_STAGES.map((stage, idx) => (
            <GlassPanel 
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 border-slate-800/80 hover:border-cyan-500/40"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-cyan-400 bg-cyan-950 border border-cyan-500/30 px-2.5 py-1 rounded shrink-0">
                  PHASE {stage.num}
                </span>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-base font-bold text-white">
                      {stage.title}
                    </h3>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                      TAG: {stage.domain}
                    </span>
                  </div>

                  <div className="text-cyan-300 font-mono text-xs font-semibold">
                    {stage.objective}
                  </div>

                  <p className="text-slate-300 text-xs font-sans leading-relaxed max-w-4xl pt-1">
                    {stage.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                <span className="px-3 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  {stage.status}
                </span>
                <span className="font-mono text-[10px] text-slate-500 mt-1">
                  NO VALIDATION CLAIMED YET
                </span>
              </div>
            </GlassPanel>
          ))}
        </div>

        {/* Disclaimer Card */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono text-center">
          *EXPERIMENTAL PERFORMANCE STATUS: Concept phase prototype. Formal analytical validation requires collaboration with an NABL-accredited water testing laboratory.
        </div>

      </div>
    </section>
  );
}
