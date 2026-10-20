import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { ShieldCheck, AlertCircle, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

const CHALLENGES = [
  {
    num: '01',
    challenge: 'PFAS AT PPT IS BELOW DIRECT SENSOR RANGE',
    problem: 'Ambient drinking water contains sub-ppb concentrations. Direct electrochemical binding cannot overcome the limits of standard screen-printed electrodes.',
    strategy: 'WAX Solid Phase Pre-Concentration',
    answer: 'Single-use weak anion exchange (WAX) cartridge concentrates 250 mL sample into 0.5 mL eluent, achieving 40–60× net enrichment. Red triage flags are confirmed by NABL LC-MS/MS.'
  },
  {
    num: '02',
    challenge: 'METHANOL ELUENT WEAKENS MIP BINDING',
    problem: 'Ammoniated methanol is required to break the strong anion-exchange bond on WAX, but organic solvent prevents aqueous rebinding to the MIP cavities.',
    strategy: 'Dilution or Optional Desolvation',
    answer: 'Eluate is diluted 1:4 into ~2.5 mL aqueous phosphate buffer to lower methanol < 15%, or evaporated in 3 minutes on an optional miniature 50°C aluminum heater block.'
  },
  {
    num: '03',
    challenge: 'HARD, SALTY BOREWELL WATER DISTORTS SIGNAL',
    problem: 'Rural Indian groundwater varies wildly in electrical conductivity, calcium hardness, carbonates, and chlorides, causing non-specific electrochemical shifts.',
    strategy: 'Dual WE1 (MIP) / WE2 (NIP) Differential AFE',
    answer: 'Non-imprinted polymer (NIP) reference electrode sees the identical ionic matrix. S_net subtraction cancels background salinity, verified across local tap and borewell calibrations.'
  },
  {
    num: '04',
    challenge: 'NILE RED ALSO STAINS NATURAL DEBRIS',
    problem: 'Nile Red binds to hydrophobic lipid membranes, pollen, and natural organic matter, risking false-positive fluorescence.',
    strategy: 'Dual-Scan Index (MFI) + Macro Audit Photo',
    answer: 'MFI subtracts the unstained blank scatter (sand/silt). The ESP32-S3 camera captures a 25 KB audit photograph so supervisors can distinguish particulate plastic from cellular debris.'
  },
  {
    num: '05',
    challenge: 'FRAUDULENT OR REPLAYED FIELD RESULTS',
    problem: 'Contracted field workers might submit forged clean water reports or resend the same green code repeatedly.',
    strategy: 'HMAC-SHA256 Signature + Monotonic Counter',
    answer: 'Each 12-char code encapsulates a 26-bit HMAC calculated with a per-device eFuse secret and an irreversible test counter. Replayed or altered codes fail with 1 in 67 million odds.'
  },
  {
    num: '06',
    challenge: 'PFAS LEACHING FROM TESTING KIT COMPONENTS',
    problem: 'PFAS is ubiquitous in fluoropolymer laboratory plastics (PTFE tubing, Teflon tape, Viton O-rings), which would cause disastrous false positives.',
    strategy: 'Strict Fluoropolymer-Free Materials',
    answer: 'All fluidic pathways are exclusively manufactured from certified high-purity polypropylene (PP) and high-density polyethylene (HDPE). Zero PTFE parts anywhere in the kit.'
  }
];

export default function Challenges() {
  return (
    <section id="challenges" className="py-28 relative tech-grid bg-[#050A19] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="16"
          category="RIGOROUS PROBLEM SOLVING"
          title="ENGINEERING CHALLENGES — AND OUR ANSWERS"
          subtitle="Honest recognition of real-world analytical, chemical, and operational failure modes encountered in rural deployment, matched with concrete engineering countermeasures."
          accent="cyan"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHALLENGES.map((item, idx) => (
            <GlassPanel key={idx} className="flex flex-col justify-between group hover:border-cyan-500/40">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                    CHALLENGE // {item.num}
                  </span>
                  <Wrench className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="font-heading text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {item.challenge}
                </h3>

                <p className="text-slate-400 text-xs font-sans mb-4 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 space-y-1.5 mt-2">
                <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{item.strategy}</span>
                </div>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </GlassPanel>
          ))}
        </div>

      </div>
    </section>
  );
}
