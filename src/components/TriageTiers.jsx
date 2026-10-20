import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { ShieldCheck, AlertTriangle, AlertOctagon, ArrowUpRight, Scale } from 'lucide-react';

const TIERS = [
  {
    tier: 'GREEN',
    badge: 'NOT DETECTED / LOW MFI',
    title: 'Routine Monitoring Schedule',
    subtitle: 'PFAS below kit limit (< tens of ppt equivalent) · Low plastic surface area index',
    action: 'Record source in WQMIS ledger. Retain standard quarterly or seasonal sampling interval. No immediate intervention required.',
    color: 'emerald',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/20',
    light: 'bg-emerald-400 shadow-[0_0_15px_#22c55e]',
    textColor: 'text-emerald-400',
    routing: 'STAYS LOCAL // WQMIS LOGGED'
  },
  {
    tier: 'AMBER',
    badge: 'DETECTED – MONITOR',
    title: 'Accelerated Resurveillance',
    subtitle: 'Moderate DPV peak attenuation · Moderate Nile Red fluorescence index',
    action: 'Source flagged for retest within 14 days. Automated notification generated to Block Water & Sanitation Officer. Source remains in targeted observation.',
    color: 'amber',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/20',
    light: 'bg-amber-400 shadow-[0_0_15px_#f59e0b]',
    textColor: 'text-amber-400',
    routing: 'ALERT TO BLOCK OFFICER // RESAMPLE 14 DAYS'
  },
  {
    tier: 'RED',
    badge: 'HIGH – SEND TO LAB',
    title: 'Regulatory Laboratory Triage',
    subtitle: 'Severe redox current blockage · High fluorescent particle density',
    action: 'District alert dispatched immediately. Standard operating procedure initiates formal chain-of-custody collection for NABL-accredited LC-MS/MS & µ-FTIR confirmation.',
    color: 'rose',
    border: 'border-rose-500/50',
    bg: 'bg-rose-950/20',
    light: 'bg-rose-500 shadow-[0_0_12px_#ef4444] animate-pulse',
    textColor: 'text-rose-400',
    routing: 'SAMPLE TO NABL LABORATORY · DISTRICT ESCALATION'
  }
];

export default function TriageTiers() {
  return (
    <section id="tiers" className="py-28 relative tech-grid border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="08"
          category="ETHICAL TRIAGE FRAMEWORK"
          title="NOT 'SAFE' — JUST HONEST"
          subtitle="Because India has no statutory PFAS maximum contaminant level (MCL) yet, results represent operational triage decisions, not health or compliance guarantees. Numeric thresholds are finalized only after clinical validation."
          accent="cyan"
        />

        {/* The 3 Tier Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border ${tier.border} ${tier.bg} backdrop-blur-md flex flex-col justify-between transition-all`}
            >
              <div>
                {/* Header with Traffic Light */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-3.5 h-3.5 rounded-full ${tier.light}`} />
                    <span className="font-heading font-extrabold text-xl text-white tracking-wide">
                      {tier.tier}
                    </span>
                  </div>
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                    tier.color === 'emerald' ? 'bg-emerald-950 text-emerald-300 border-emerald-500/30' :
                    tier.color === 'amber' ? 'bg-amber-950 text-amber-300 border-amber-500/30' :
                    'bg-rose-950 text-rose-300 border-rose-500/30'
                  }`}>
                    TIER 0{idx + 1}
                  </span>
                </div>

                <div className={`font-mono text-xs font-bold ${tier.textColor} mb-2 tracking-wide`}>
                  {tier.badge}
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {tier.title}
                </h3>

                <p className="text-slate-300 text-xs font-sans mb-4 leading-relaxed">
                  {tier.subtitle}
                </p>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-sans text-slate-300 leading-relaxed mb-4">
                  <strong className="text-white block font-mono text-[11px] mb-1">FIELD ACTION:</strong>
                  {tier.action}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 font-mono text-[11px] flex items-center justify-between">
                <span className={tier.textColor}>{tier.routing}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Truth Callout */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 font-sans leading-relaxed">
              <span className="font-mono text-cyan-300 font-bold block uppercase tracking-wide">
                Regulatory Baseline:
              </span>
              India's IS 10500:2012 currently has no PFAS limits (revision underway by BIS per CPCB in NGT OA 548/2024). Jal-Drishti focuses analytical power where it matters: prioritizing scarce NABL LC-MS/MS machine-time exclusively on suspicious sources.
            </div>
          </div>
          <div className="font-mono text-[11px] text-slate-400 shrink-0">
            Source: CPCB / NGT OA 548/2024
          </div>
        </div>

      </div>
    </section>
  );
}
