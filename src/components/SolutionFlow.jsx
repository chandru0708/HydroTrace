import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Droplet, Filter, Layers, Sparkles, Activity, Cpu, Send, ShieldAlert } from 'lucide-react';

const WORKFLOW_STAGES = [
  {
    phase: 'STAGE I · INTAKE & PHYSICAL SEPARATION',
    steps: [
      {
        num: '01',
        label: 'COLLECT',
        title: '250 mL Representative Intake',
        desc: 'Sample taken directly from village tap, handpump, school storage tank or borewell into a clean polypropylene bottle. Zero fluoropolymer (PTFE) parts.',
        tag: 'Polypropylene Sampling',
        color: 'cyan',
        icon: Droplet
      },
      {
        num: '02',
        label: 'FILTER',
        title: 'Glass-Fibre Filter Traps Plastics',
        desc: 'Spring-loaded syringe pushes sample through a 25 mm glass-fibre filter (GF/A, 1.6 µm) in a PP holder, retaining microplastic particles ≥ 20 µm.',
        tag: '25 mm GF Filter Membrane',
        color: 'orange',
        icon: Filter
      },
      {
        num: '03',
        label: 'CAPTURE PFAS',
        title: 'In-Line WAX Solid Phase Trap',
        desc: 'The exact same filtrate immediately passes into a disposable weak anion exchange (WAX) cartridge in series, extracting anionic PFAS without volume loss.',
        tag: 'EPA Method 533 Principle',
        color: 'violet',
        icon: Layers
      }
    ]
  },
  {
    phase: 'STAGE II · DUAL-TRANSDUCTION SENSING',
    steps: [
      {
        num: '04',
        label: 'STAIN & SCAN',
        title: 'Nile Red Fluorescence + Audit Photo',
        desc: '3 drops of Nile Red in ethanol applied to the filter. Photodiode measures blank vs stained MFI under 470 nm blue light; ESP32-S3 records macro audit JPEG.',
        tag: 'λEX 470 nm · λEM > 550 nm',
        color: 'orange',
        icon: Sparkles
      },
      {
        num: '05',
        label: 'ELUTE & SENSE',
        title: 'Dilute Eluate onto MIP/NIP Strip',
        desc: 'WAX cartridge eluted in 0.5 mL ammoniated methanol and diluted 1:4 into ~2.5 mL buffer containing 5 mM ferri/ferrocyanide probe; DIY potentiostat runs DPV.',
        tag: '40–60× Net Enrichment',
        color: 'violet',
        icon: Activity
      },
      {
        num: '06',
        label: 'ANALYZE',
        title: 'Differential S_net & MFI Tiers',
        desc: 'Firmware calculates differential S_net (MIP minus NIP) to cancel groundwater matrix salts, assigning honest Green, Amber, or Red triage bands.',
        tag: 'Groundwater Salt Correction',
        color: 'cyan',
        icon: Cpu
      }
    ]
  },
  {
    phase: 'STAGE III · TELEMETRY & ESCALATION',
    steps: [
      {
        num: '07',
        label: 'REPORT',
        title: 'Signed 12-Char Code / Portal',
        desc: 'Firmware packages result + test counter into a 60-bit Crockford Base32 SMS code with HMAC-SHA256 signature. Transmitted via keypad SMS or browser hotspot.',
        tag: 'HMAC-SHA256 Authenticated',
        color: 'cyan',
        icon: Send
      },
      {
        num: '08',
        label: 'MONITOR & ACT',
        title: 'WQMIS GIS Mapping & NABL Routing',
        desc: 'Server verifies signature and counter. Habitations mapped on national dashboard. Red flagged sources trigger automated dispatch to NABL lab for LC-MS/MS.',
        tag: 'Targeted Lab Confirmation',
        color: 'red',
        icon: ShieldAlert
      }
    ]
  }
];

export default function SolutionFlow() {
  return (
    <section id="solution" className="py-28 relative tech-grid bg-[#040816] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="02"
          category="THE JAL-DRISHTI SOLUTION"
          title="ONE SAMPLE. TWO TESTS. ONE SIGNED RESULT."
          subtitle="An integrated end-to-end field screening pipeline designed specifically for rural surveillance under Jal Jeevan Mission, structured in three operational phases."
          accent="cyan"
        />

        {/* 3 Grouped Phases */}
        <div className="space-y-12">
          {WORKFLOW_STAGES.map((stage, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-md">
                  {stage.phase}
                </span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-${stage.steps.length} gap-6`}>
                {stage.steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <GlassPanel 
                      key={idx}
                      className="flex flex-col justify-between hover:border-slate-700"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-slate-300 px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                            STEP {step.num}
                          </span>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            step.color === 'violet' ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30' :
                            step.color === 'orange' ? 'bg-orange-950/60 text-orange-300 border border-orange-500/30' :
                            step.color === 'red' ? 'bg-rose-950/60 text-rose-300 border border-rose-500/30' :
                            'bg-sky-950/60 text-sky-300 border border-sky-500/30'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wider mb-1">
                          {step.label}
                        </div>

                        <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-slate-300 text-xs leading-relaxed font-sans font-normal">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>{step.tag}</span>
                        <span className="text-sky-400 font-bold">→</span>
                      </div>
                    </GlassPanel>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
