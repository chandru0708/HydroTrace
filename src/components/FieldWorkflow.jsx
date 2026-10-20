import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Clock, CheckCircle2, ChevronRight, Droplet, ArrowRight, ShieldCheck } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    num: '01',
    name: 'COLLECT',
    time: '2 min',
    desc: '250 mL water collected in a clean polypropylene bottle directly from tap or borewell. Zero PTFE tape or seals.',
    oledDisplay: ['JAL-DRISHTI v1.2', 'SAMPLE: 250 mL', 'STATUS: READY', 'PRESS PUSH BAR']
  },
  {
    num: '02',
    name: 'PUSH',
    time: '10–15 min',
    desc: 'Spring syringe drives sample through 25 mm glass-fibre filter then WAX cartridge in series at a steady, slow flow rate.',
    oledDisplay: ['SERIES FLOWING', 'VOL: 250 mL PASS', 'GF -> WAX TRAP', 'FLOW: 20 mL/min']
  },
  {
    num: '03',
    name: 'BLANK SCAN',
    time: '1 min',
    desc: 'Insert unstained filter into light-tight chamber. 470 nm blue LED sweeps to measure natural background scatter (I_blank).',
    oledDisplay: ['OPTICS: DARK-BOX', 'BLANK CALIBRATION', 'I_blank: 142 nA', 'SCAN: COMPLETE ✓']
  },
  {
    num: '04',
    name: 'STAIN',
    time: '10 min',
    desc: 'Break sealed ampoule and add 3 drops of Nile Red in ethanol onto filter disc. Start 10-minute incubation timer.',
    oledDisplay: ['NILE RED APPLIED', 'WAIT: 10:00 MIN', 'ELUTE IN PARALLEL', 'TIMER RUNNING...']
  },
  {
    num: '05',
    name: 'ELUTE (PARALLEL)',
    time: '3 min',
    desc: 'While filter stains, inject 0.5 mL ammoniated methanol through WAX to elute concentrated PFAS into a small collection vial.',
    oledDisplay: ['WAX ELUTION...', 'VOL: 0.5 mL MeOH', 'ENRICHMENT: ~50x', 'PARALLEL STEP']
  },
  {
    num: '06',
    name: 'DILUTE',
    time: '2 min',
    desc: 'Dilute 0.5 mL eluate 1:4 into ~2.5 mL phosphate buffer containing 5 mM ferri/ferrocyanide redox probe.',
    oledDisplay: ['BUFFER DILUTION', '1:4 VOL RATIO', 'PROBE: [Fe(CN)6]', 'MIXING COMPLETE']
  },
  {
    num: '07',
    name: 'STAINED SCAN',
    time: '2 min',
    desc: 'Re-insert stained filter into optics chamber. Read I_stained photodiode value and capture 25 KB macro audit photo.',
    oledDisplay: ['MFI SCAN...', 'I_stain: 588 nA', 'MFI: 446 nA (LOW)', 'PHOTO SAVED ✓']
  },
  {
    num: '08',
    name: 'PFAS SCAN',
    time: '6–8 min',
    desc: 'Dispense 50 µL onto MIP/NIP strip, incubate 5 min, then run ~60 s DPV scan across WE1 and WE2 to determine ΔI drop.',
    oledDisplay: ['DPV SCAN: WE1/WE2', 'RANGE: -0.1->+0.5V', 'S_net: COMPUTED', 'PFAS: DETECTED']
  },
  {
    num: '09',
    name: 'REPORT',
    time: '1 min',
    desc: 'OLED displays triage verdict, traffic LEDs illuminate, and signed 12-char HMAC code is generated for SMS dispatch.',
    oledDisplay: ['CODE: 7H4K-9M2X', 'PFAS: AMBER (MON)', 'MP:   LOW MFI', 'CTR:  #0417  HMAC✓']
  }
];

export default function FieldWorkflow() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = WORKFLOW_STEPS[activeStepIdx];

  return (
    <section id="workflow" className="py-28 relative tech-grid bg-[#040814] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="07"
          category="FIELD PROTOCOL"
          title="FROM A VILLAGE TAP TO A SIGNED RECORD"
          subtitle="A rugged 9-step workflow executable by village water testers in 30–40 minutes. Nile Red incubation and WAX elution run in parallel to maximize throughput."
          accent="cyan"
        />

        {/* Total Time Callout Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-sky-400" />
            <div>
              <span className="font-heading font-bold text-white text-base">TOTAL PROTOCOL DURATION:</span>
              <span className="font-mono text-sky-300 font-extrabold text-lg ml-2">≈ 30–40 MINUTES</span>
            </div>
          </div>
          <div className="font-mono text-xs text-slate-400">
            *Nile Red staining wait (10 min) and WAX elution run concurrently
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps List (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-sky-950/50 border-sky-400/80 shadow-[0_4px_20px_rgba(56,189,248,0.15)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-heading font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {step.name}
                        </span>
                        <span className="font-mono text-[11px] text-cyan-400 font-medium">({step.time})</span>
                      </div>
                      <p className="text-slate-400 text-xs font-sans mt-0.5 max-w-md line-clamp-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              );
            })}
          </div>

          {/* Synchronized OLED Mockup & Active Step Details (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <GlassPanel variant="cyan" className="space-y-4 border-cyan-500/30">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase">
                  ACTIVE HARDWARE SIMULATION
                </span>
                <span className="font-mono text-xs text-slate-400">
                  STEP {activeStep.num} OF 09
                </span>
              </div>

              {/* Realistic 0.96" OLED Display Mockup */}
              <div className="p-4 rounded-xl bg-slate-950 border-2 border-slate-800 shadow-inner">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 mb-2">
                  <span>SSD1306 128x64 OLED</span>
                  <span>I2C ADDR: 0x3C</span>
                </div>

                {/* OLED Blue / Yellow Screen Area */}
                <div className="p-4 rounded-lg bg-black border border-cyan-500/40 font-mono text-xs text-cyan-300 space-y-1.5 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <div className="text-[10px] text-yellow-300 font-bold border-b border-yellow-500/30 pb-1 flex justify-between">
                    <span>JAL-DRISHTI // FTK</span>
                    <span>BAT: 94%</span>
                  </div>
                  {activeStep.oledDisplay.map((line, lIdx) => (
                    <div key={lIdx} className="text-cyan-200 font-semibold tracking-wide">
                      {line}
                    </div>
                  ))}
                </div>

                {/* Reader Traffic Light LEDs */}
                <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-slate-900">
                  <div className="flex flex-col items-center gap-1">
                    <span className={`w-3.5 h-3.5 rounded-full ${activeStepIdx === 8 ? 'bg-emerald-500/30' : 'bg-emerald-500/20'}`} />
                    <span className="text-[9px] font-mono text-slate-500">GRN</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className={`w-3.5 h-3.5 rounded-full ${activeStepIdx === 8 ? 'bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-pulse' : 'bg-amber-500/20'}`} />
                    <span className="text-[9px] font-mono text-slate-500">AMB</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-rose-500/20" />
                    <span className="text-[9px] font-mono text-slate-500">RED</span>
                  </div>
                </div>
              </div>

              {/* Step Expanded Instructions */}
              <div className="p-3 rounded-lg bg-[#030612] border border-slate-800 text-xs font-sans text-slate-300 space-y-2">
                <div className="font-mono text-cyan-400 font-bold text-xs uppercase">
                  PROCEDURAL DIRECTIVE:
                </div>
                <p className="leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 disabled:opacity-40 cursor-pointer"
                >
                  ← PREV STEP
                </button>
                <button
                  disabled={activeStepIdx === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStepIdx((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300 disabled:opacity-40 cursor-pointer font-bold"
                >
                  NEXT STEP →
                </button>
              </div>
            </GlassPanel>
          </div>

        </div>

      </div>
    </section>
  );
}
