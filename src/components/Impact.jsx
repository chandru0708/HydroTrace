import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { AlertCircle, IndianRupee, Layers, WifiOff, ShieldCheck, Scale, Users, Building, ShieldAlert, Home } from 'lucide-react';

const IMPACT_BLOCKS = [
  {
    title: 'EARLY WARNING SURVEILLANCE',
    desc: 'Flags suspect PFAS and microplastic contamination hotspots before chronic, multi-year bioaccumulation occurs in rural communities.',
    icon: AlertCircle,
    color: 'cyan'
  },
  {
    title: '50× COST ADVANTAGE',
    desc: 'At ₹150–200 per test set, state water departments avoid wasting ₹8,000 lab testing fees on clean sources, reserving mass spectrometers for flagged samples.',
    icon: IndianRupee,
    color: 'emerald'
  },
  {
    title: 'TWO CONTAMINANTS, ONE PASS',
    desc: 'Screens both persistent chemical toxins (PFAS) and particulate physical pollutants (microplastics) from a single 250 mL water intake.',
    icon: Layers,
    color: 'violet'
  },
  {
    title: 'WORKS IN ZERO-SIGNAL ZONES',
    desc: 'Built for deep rural India. Fully functional without internet, smartphones, or mobile app stores via local OLED and signed 2G SMS.',
    icon: WifiOff,
    color: 'orange'
  },
  {
    title: 'CRYPTOGRAPHICALLY TRUSTED DATA',
    desc: 'HMAC-SHA256 signature, monotonic eFuse test counters, and macro audit photography prevent falsified records or contractor fraud.',
    icon: ShieldCheck,
    color: 'cyan'
  },
  {
    title: 'POLICY & STANDARD READY',
    desc: 'Supplies real-world Indian ground truth data to assist BIS and CPCB as they revise IS 10500 to incorporate emerging contaminant limits.',
    icon: Scale,
    color: 'violet'
  }
];

const BENEFICIARIES = [
  { role: 'VILLAGE TESTERS', desc: 'FTK women empowered with advanced analytical tools', icon: Users },
  { role: 'BLOCK & DISTRICT OFFICERS', desc: 'Real-time alert dispatch on red source triggers', icon: Building },
  { role: 'NJJM / DDWS / BIS', desc: 'Granular national water surveillance mapping', icon: ShieldAlert },
  { role: 'RURAL HOUSEHOLDS', desc: 'Protection against invisible forever chemicals', icon: Home }
];

export default function Impact() {
  return (
    <section id="impact" className="py-28 relative tech-grid border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="19"
          category="SOCIO-TECHNICAL VALUE"
          title="WHY JAL-DRISHTI?"
          subtitle="Transforming rural drinking-water surveillance from an unmonitored blind spot into an honest, accessible, cryptographically verified early-warning network."
          accent="cyan"
        />

        {/* 6 Visual Impact Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {IMPACT_BLOCKS.map((block, idx) => {
            const Icon = block.icon;
            return (
              <GlassPanel key={idx} className="flex flex-col justify-between group hover:border-cyan-500/40">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-500/30 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                    {block.title}
                  </h3>

                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    {block.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-800 font-mono text-[10px] text-slate-500">
                  IMPACT VECTOR 0{idx + 1}
                </div>
              </GlassPanel>
            );
          })}
        </div>

        {/* Strip of 4 Beneficiaries */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider">
            CORE BENEFICIARIES ACROSS THE WATER SUPPLY ECOSYSTEM
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFICIARIES.map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-white">
                      {ben.role}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5 leading-snug">
                      {ben.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
