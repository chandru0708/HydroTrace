import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Droplet, User, Activity, Sparkles, Cpu, Send, Server, ShieldCheck, ArrowRight } from 'lucide-react';

const SYSTEM_NODES = [
  { group: 'FIELD KIT', label: 'WATER SOURCE', sub: '250 mL Sample', icon: Droplet, color: 'cyan' },
  { group: 'FIELD KIT', label: 'VILLAGE TESTER', sub: 'FTK Worker', icon: User, color: 'cyan' },
  { group: 'SAMPLE PUSH', label: 'SERIES STACK', sub: 'Filter + WAX', icon: Activity, color: 'cyan' },
  { group: 'ANALYTICAL TRANSDUCTION', label: 'PFAS DPV ENGINE', sub: 'MIP/NIP Strip (₹320 AFE)', icon: Cpu, color: 'violet' },
  { group: 'ANALYTICAL TRANSDUCTION', label: 'OPTICS ENGINE', sub: 'Nile Red (470nm LED)', icon: Sparkles, color: 'orange' },
  { group: 'FIELD KIT', label: 'READER HARDWARE', sub: 'OLED + LEDs (₹2,700)', icon: Cpu, color: 'cyan' },
  { group: 'SECURE REPORTING', label: 'SIGNED CODE', sub: '60-bit Crockford Base32', icon: Send, color: 'emerald' },
  { group: 'SECURE REPORTING', label: 'SMS / WI-FI', sub: '2G Cellular / Hotspot', icon: Send, color: 'emerald' },
  { group: 'SOURCE INTELLIGENCE', label: 'WQMIS DASHBOARD', sub: 'GIS Heatmap & Alerts', icon: Server, color: 'cyan' },
  { group: 'SOURCE INTELLIGENCE', label: 'NABL LAB ROUTE', sub: 'LC-MS/MS Confirmation', icon: ShieldCheck, color: 'red' }
];

export default function SystemView() {
  return (
    <section id="system-view" className="py-28 relative tech-grid bg-[#030713] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="20"
          category="MACRO SYSTEM VIEW"
          title="END-TO-END TRANSDUCTION & TRIAGE ARCHITECTURE"
          subtitle="From the moment water is drawn at the village tap to regulatory mass-spectrometer dispatch: the complete, integrated Jal-Drishti pipeline."
          accent="cyan"
        />

        {/* Complete Macro Diagram Grid */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-950 border border-cyan-500/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SYSTEM_NODES.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    node.color === 'violet' ? 'bg-purple-950/30 border-purple-500/40' :
                    node.color === 'orange' ? 'bg-orange-950/30 border-orange-500/40' :
                    node.color === 'red' ? 'bg-rose-950/40 border-rose-500/50' :
                    node.color === 'emerald' ? 'bg-emerald-950/30 border-emerald-500/40' :
                    'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block mb-1">
                      {node.group}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-white mb-2">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="font-heading font-bold text-white text-xs sm:text-sm">
                      {node.label}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800 font-mono text-[10px] text-slate-400">
                    {node.sub}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <span className="text-cyan-400 font-bold">CORE DOMAINS:</span>
            <span>FIELD KIT</span>
            <span>•</span>
            <span className="text-purple-400">ELECTROCHEMICAL ENGINE</span>
            <span>•</span>
            <span className="text-orange-400">FLUORESCENCE ENGINE</span>
            <span>•</span>
            <span className="text-emerald-400">SECURE REPORTING</span>
            <span>•</span>
            <span className="text-rose-400">SOURCE INTELLIGENCE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
