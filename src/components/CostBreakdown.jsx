import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { IndianRupee, TrendingDown, Scale, CheckCircle2 } from 'lucide-react';

const BOM_ITEMS = [
  { item: 'ESP32-S3 camera board + macro optic', cost: 950, max: 950, color: 'cyan' },
  { item: 'Fluidics jig, 25mm PP holder, PCB & IP65 chassis', cost: 550, max: 950, color: 'cyan' },
  { item: 'DIY potentiostat (MCP6004, ADS1115, DAC, MUX)', cost: 320, max: 950, color: 'violet' },
  { item: 'Fluorescence optics (470nm LED, filters, BPW34)', cost: 300, max: 950, color: 'orange' },
  { item: 'Power (18650 cell, TP4056 USB-C, LP2985 LDO)', cost: 250, max: 950, color: 'emerald' },
  { item: 'Display & alerts (0.96" OLED, DS3231 RTC, LEDs)', cost: 220, max: 950, color: 'cyan' },
  { item: 'Elution heater block (optional desolvation)', cost: 100, max: 950, color: 'slate' }
];

const CONSUMABLES_ITEMS = [
  { item: 'Single-use WAX cartridge (hand-packed sorbent)', range: '₹60–90', color: 'violet' },
  { item: 'MIP / NIP screen-printed strip (in-house fab)', range: '₹30–50', color: 'violet' },
  { item: 'Sealed ampoules: Nile Red, eluent, redox buffer', range: '₹20–30', color: 'orange' },
  { item: '25 mm glass-fibre filter (GF/A membrane)', range: '₹10–15', color: 'cyan' }
];

const COMPARISON_ROWS = [
  { param: 'Where tested', lab: 'Central NABL lab', kit: 'Directly at the source tap' },
  { param: 'Time to result', lab: 'Days to weeks (logistics latency)', kit: '30–40 minutes total' },
  { param: 'Cost per test', lab: '~₹8,000 (commercial estimate)', kit: '₹150–200 per sample', highlight: true },
  { param: 'Capital instrument', lab: 'LC-MS/MS & µ-FTIR (₹2–4 Cr)', kit: '≈ ₹2,700 handheld kit', highlight: true },
  { param: 'Operator profile', lab: 'Specialized analytical chemist', kit: 'Village water tester (FTK worker)' },
  { param: 'PFAS resolution', lab: 'Compound-specific sub-ppt', kit: 'Screening (tens of ppt to low ppb)' },
  { param: 'Microplastics', lab: 'µ-FTIR / Raman spectroscopy', kit: 'Fluorescence index + audit photo' },
  { param: 'Digital trail', lab: 'Paper or PDF lab certificate', kit: 'HMAC-signed SMS + GIS map' }
];

export default function CostBreakdown() {
  return (
    <section id="cost" className="py-28 relative tech-grid bg-[#050C1D] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="14"
          category="ECONOMIC ARCHITECTURE"
          title="LAB-GRADE QUESTIONS AT A FIELD-KIT PRICE"
          subtitle="How Jal-Drishti achieves a 50× cost advantage per test, enabling universal village-level triage before deploying scarce NABL mass-spectrometry budgets."
          accent="cyan"
        />

        {/* Top Grid: BOM Bar Chart + Consumables Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Reader BOM Horizontal Bar Chart (7 Cols) */}
          <GlassPanel variant="cyan" className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-4">
                <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                  REUSABLE READER BILL OF MATERIALS (BOM)
                </span>
                <span className="font-mono text-sm font-extrabold text-white">
                  TOTAL: ≈ ₹2,690
                </span>
              </div>

              {/* Horizontal Bar Chart */}
              <div className="space-y-3 font-mono text-xs">
                {BOM_ITEMS.map((row, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-sans text-xs">{row.item}</span>
                      <span className="font-bold text-white">₹{row.cost}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          row.color === 'violet' ? 'bg-purple-500' :
                          row.color === 'orange' ? 'bg-orange-500' :
                          row.color === 'emerald' ? 'bg-emerald-500' :
                          row.color === 'slate' ? 'bg-slate-500' : 'bg-cyan-400'
                        }`}
                        style={{ width: `${(row.cost / row.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              *Prototype component pricing based on standard single-unit hobbyist & industrial distributor rates.
            </div>
          </GlassPanel>

          {/* Consumables Per Test (5 Cols) */}
          <GlassPanel variant="violet" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 mb-4">
                <span className="font-mono text-xs font-bold text-purple-300 uppercase">
                  CONSUMABLES PER TEST SET
                </span>
                <span className="font-mono text-sm font-extrabold text-white">
                  ₹150–200 / TEST
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {CONSUMABLES_ITEMS.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span className="font-sans text-slate-300 text-xs">{item.item}</span>
                    <span className="font-bold text-purple-300 shrink-0 ml-2">{item.range}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 text-center font-mono">
                <div className="text-[10px] text-purple-300 uppercase">Per-Test Cost Reduction</div>
                <div className="font-heading text-3xl font-extrabold text-white mt-1">
                  ~50× CHEAPER
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Compared to commercial lab LC-MS/MS (~₹8,000)
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-500/20 text-[11px] font-mono text-purple-300">
              Zero cold-chain transport expenses for routine screening.
            </div>
          </GlassPanel>

        </div>

        {/* Head-to-Head Comparison Table: Lab vs Jal-Drishti */}
        <div className="rounded-xl border border-slate-800 bg-[#030712] overflow-hidden">
          <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              HEAD-TO-HEAD PARADIGM COMPARISON
            </span>
            <span className="font-mono text-[11px] text-cyan-400 font-semibold">
              TRIAGE TOOL VS CENTRAL FACILITY
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/50">
                  <th className="py-3 px-4 uppercase">Parameter</th>
                  <th className="py-3 px-4 uppercase text-slate-300">Conventional Laboratory (LC-MS/MS)</th>
                  <th className="py-3 px-4 uppercase text-cyan-300">Jal-Drishti Field Kit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-cyan-950/10' : 'hover:bg-slate-900/40'}>
                    <td className="py-3 px-4 font-mono font-bold text-slate-400 text-xs">
                      {row.param}
                    </td>
                    <td className="py-3 px-4 text-slate-300 text-xs">
                      {row.lab}
                    </td>
                    <td className="py-3 px-4 text-white font-semibold text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{row.kit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-950/90 text-center font-mono text-[11px] text-slate-500 border-t border-slate-800">
            *Lab cost is an industry estimate. Jal-Drishti values are engineering design targets to be experimentally validated.
          </div>
        </div>

      </div>
    </section>
  );
}
