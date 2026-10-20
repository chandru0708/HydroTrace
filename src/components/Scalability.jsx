import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Network, TrendingUp, Users, School, Building2, Droplets, CheckCircle } from 'lucide-react';

const FUTURE_SCOPE = [
  { step: '01', title: 'CURRENT PROTOTYPE', sub: 'PFOA/PFOS + Microplastics' },
  { step: '02', title: 'MORE TARGETS', sub: 'Pharmaceutical MIP Strips (Same Reader)' },
  { step: '03', title: 'READER V2', sub: 'Custom 4-Layer PCB + Built-in Fluidics' },
  { step: '04', title: 'MADE IN INDIA', sub: 'Mass Strip Printing with MSMEs' },
  { step: '05', title: 'NATIONAL ROLLOUT', sub: 'Integration into JJM & WQMIS' }
];

const SCALING_METRICS = [
  { value: '15.44 Cr', label: 'Rural Tap Connections', sub: 'Active drinking supply network' },
  { value: '24.80 L', label: 'FTK-Trained Women', sub: 'Grassroots surveillance force' },
  { value: '2,162', label: 'WQMIS Water Labs', sub: 'Accredited referral network' },
  { value: '9.32 L', label: 'Schools with Tap Water', sub: 'High-vulnerability monitoring points' }
];

export default function Scalability() {
  return (
    <section id="scalability" className="py-28 relative tech-grid bg-[#040817] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="18"
          category="NATIONAL DEPLOYMENT HORIZON"
          title="FROM ONE KIT TO A NATIONAL SCREENING NETWORK"
          subtitle="Jal-Drishti leverages the existing 24.8 lakh trained field water testers under Jal Jeevan Mission, converting routine testing personnel into the frontline surveillance army for emerging contaminants."
          accent="cyan"
        />

        {/* 5-Step Future Scope Line */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
            SCALING ROADMAP // TECHNOLOGY & PRODUCTION EVOLUTION
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FUTURE_SCOPE.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded">
                    STAGE {item.step}
                  </span>
                  <div className="font-heading font-bold text-white text-sm mt-2">
                    {item.title}
                  </div>
                </div>
                <div className="font-mono text-[11px] text-slate-400 mt-2">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three-Level Network Architecture */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
            THREE-TIER SURVEILLANCE TOPOLOGY
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassPanel className="space-y-3">
              <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded">
                LEVEL 01 // LOCAL
              </span>
              <h3 className="font-heading text-lg font-bold text-white">
                ONE TEST: KIT + TESTER
              </h3>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                Village water tester performs the 30–40 min protocol using sealed ampoules and spring syringe. Instant local OLED feedback + buzzer.
              </p>
            </GlassPanel>

            <GlassPanel variant="cyan" className="space-y-3">
              <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950 border border-cyan-500/40 px-2 py-0.5 rounded">
                LEVEL 02 // HABITATION
              </span>
              <h3 className="font-heading text-lg font-bold text-white">
                ONE SOURCE: TEMPORAL LEDGER
              </h3>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                Repeated quarterly tests build a source-specific temporal baseline. Audit photos and monotonic HMAC codes prevent falsified records.
              </p>
            </GlassPanel>

            <GlassPanel className="space-y-3">
              <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950 border border-purple-500/30 px-2 py-0.5 rounded">
                LEVEL 03 // DISTRICT & STATE
              </span>
              <h3 className="font-heading text-lg font-bold text-white">
                STATE & NATIONAL: WQMIS GRID
              </h3>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                Aggregated district heatmaps. Automated alerts dispatched when sources turn Red. NABL confirmation queue efficiently managed.
              </p>
            </GlassPanel>
          </div>
        </div>

        {/* Real Verified Market-Potential Facts (JJM Factsheet Feb 2025) */}
        <div>
          <div className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
            EXISTING NATIONAL INFRASTRUCTURE READINESS
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
            {SCALING_METRICS.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-950 border border-cyan-500/20 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-cyan-300">
                    {stat.value}
                  </div>
                  <div className="font-heading font-bold text-white text-xs mt-1">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-2">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="text-right text-[11px] font-mono text-slate-500">
            Source: PIB Jal Jeevan Mission factsheet, Feb 2025
          </div>
        </div>

      </div>
    </section>
  );
}
