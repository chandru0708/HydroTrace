import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Cpu, Waves, Sparkles, AlertCircle } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel';
import TelemetryChip from '../ui/TelemetryChip';
import SimulatedBadge from '../ui/SimulatedBadge';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('diagram');
  const [animStep, setAnimStep] = useState(0);

  // Cycle through animation steps for the flow
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden tech-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Context Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-semibold">SMART INDIA HACKATHON 2026</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300">PS 26252</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">MINISTRY OF JAL SHAKTI</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-none uppercase">
                SEE THE INVISIBLE.
              </h1>
              <h2 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent uppercase">
                IN EVERY DROP.
              </h2>
            </div>

            {/* Supporting Statement */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans max-w-xl">
              <strong className="text-white font-semibold">Jal-Drishti</strong> is a{' '}
              <span className="text-cyan-300 font-mono font-medium">₹2,700</span> handheld field kit that screens one{' '}
              <span className="text-white font-semibold">250 mL</span> drinking-water sample for{' '}
              <span className="text-purple-300 font-semibold">PFAS</span> and{' '}
              <span className="text-orange-300 font-semibold">microplastics</span> in{' '}
              <span className="text-cyan-300 font-mono">30–40 minutes</span>, and reports a tamper-proof result by SMS from any phone. Red results go to an NABL lab for confirmation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => scrollTo('solution')}
                className="btn-primary group"
              >
                <span>EXPLORE JAL-DRISHTI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => scrollTo('live-demo')}
                className="btn-secondary group"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                <span>RUN LIVE TEST</span>
              </button>
            </div>

            {/* Technical Chips Grid */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-2.5">
                ENGINEERING ARCHITECTURE // CORE PARAMETERS
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: 'PFAS', variant: 'violet' },
                  { text: 'MICROPLASTICS', variant: 'orange' },
                  { text: '250 mL', variant: 'cyan' },
                  { text: 'WAX 40–60×', variant: 'violet' },
                  { text: 'MIP / NIP', variant: 'violet' },
                  { text: 'DPV', variant: 'violet' },
                  { text: 'NILE RED', variant: 'orange' },
                  { text: 'SIGNED SMS', variant: 'cyan' },
                  { text: 'OFFLINE-FIRST', variant: 'green' }
                ].map((chip, idx) => (
                  <span 
                    key={idx} 
                    className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                  >
                    {chip.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Scientific Disclaimer Alert */}
            <div className="p-3.5 rounded-lg border border-amber-500/30 bg-amber-950/20 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200/90 leading-relaxed font-sans">
                <span className="font-semibold text-amber-300 font-mono uppercase tracking-wide">
                  Triage Tool Disclaimer:
                </span>{' '}
                Jal-Drishti is designed for rapid field screening, not central lab replacement. Red results require laboratory validation and NABL confirmation via LC-MS/MS.
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Hardware Flow & Live Result Panel */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* The Large Futuristic Kit & Fluidic Flow Visual */}
            <GlassPanel variant="cyan" className="overflow-hidden border-cyan-500/30">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-cyan-300 tracking-wider">
                    DUAL-PATH TRANSDUCTION ENGINE
                  </span>
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  STEP {animStep + 1} / 5
                </div>
              </div>

              {/* Dynamic SVG Visualization of One Sample -> Two Tests */}
              <div className="relative w-full aspect-[16/10] bg-[#030814] rounded-lg border border-slate-800/80 p-2 overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 600 380" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="sampleGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="pfasGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                    <linearGradient id="mpGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#ff7a3d" />
                    </linearGradient>
                    <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glowViolet" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Flow Animation Guide Line */}
                  {/* Stage 1: Sample Inlet */}
                  <rect x="20" y="140" width="85" height="100" rx="8" fill="#0A1628" stroke="#22d3ee" strokeWidth="1.5" />
                  <rect x="42" y="125" width="40" height="15" rx="3" fill="#1e293b" stroke="#38bdf8" />
                  <text x="62" y="195" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">250 mL</text>
                  <text x="62" y="212" fill="#94a3b8" fontSize="8" fontFamily="Inter" textAnchor="middle">Drinking Water</text>

                  {/* Push Arrow */}
                  <path d="M105 190 L140 190" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="125" cy="190" r="3" fill="#22d3ee" className="animate-ping" />

                  {/* Stage 2: Dual Chamber Holder (Filter + WAX in series) */}
                  <rect x="145" y="115" width="105" height="150" rx="8" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
                  <text x="197" y="135" fill="#f8fafc" fontSize="10" fontFamily="Space Grotesk" textAnchor="middle" fontWeight="bold">SERIES STACK</text>

                  {/* 25 mm Glass-fibre filter disc */}
                  <rect x="155" y="145" width="85" height="35" rx="4" fill="#1e293b" stroke="#ff7a3d" strokeWidth="1.5" />
                  <text x="197" y="162" fill="#ff7a3d" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">25mm GF FILTER</text>
                  <text x="197" y="174" fill="#cbd5e1" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Traps Microplastics (≥20µm)</text>

                  {/* Particles trapped */}
                  <circle cx="168" cy="162" r="2" fill="#ff7a3d" filter="url(#glowOrange)" />
                  <circle cx="178" cy="160" r="1.5" fill="#f97316" />
                  <circle cx="218" cy="163" r="2" fill="#ff7a3d" filter="url(#glowOrange)" />
                  <circle cx="225" cy="159" r="1.8" fill="#f97316" />

                  {/* Direct connection into WAX */}
                  <path d="M197 180 L197 195" stroke="#22d3ee" strokeWidth="2" />

                  {/* WAX Cartridge */}
                  <rect x="155" y="195" width="85" height="55" rx="4" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
                  <text x="197" y="215" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">WAX CARTRIDGE</text>
                  <text x="197" y="227" fill="#cbd5e1" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Captures PFAS (40–60×)</text>
                  <text x="197" y="240" fill="#a855f7" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">Ammoniated Methanol Elute</text>

                  {/* Captured PFAS dots */}
                  <circle cx="168" cy="222" r="1.8" fill="#c084fc" filter="url(#glowViolet)" />
                  <circle cx="175" cy="232" r="1.5" fill="#a855f7" />
                  <circle cx="222" cy="220" r="2" fill="#c084fc" filter="url(#glowViolet)" />

                  {/* Branch 1: Orange Microplastic Branch (to fluorescence optics) */}
                  <path d="M240 162 C 280 162, 290 80, 340 80" stroke="url(#mpGrad)" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
                  
                  {/* Branch 2: Violet PFAS Branch (to MIP/NIP strip) */}
                  <path d="M240 225 C 280 225, 290 300, 340 300" stroke="url(#pfasGrad)" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />

                  {/* Optics Module Visual */}
                  <rect x="340" y="50" width="115" height="65" rx="6" fill="#1c1917" stroke="#ff7a3d" strokeWidth="1.5" />
                  <text x="397" y="70" fill="#ff7a3d" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">FLUORESCENCE</text>
                  <text x="397" y="83" fill="#fdba74" fontSize="8" fontFamily="Inter" textAnchor="middle">470nm LED + BPW34</text>
                  <text x="397" y="96" fill="#94a3b8" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle">MFI = I_stain − I_blank</text>
                  <circle cx="355" cy="95" r="4" fill="#3b82f6" filter="url(#glowCyan)" />
                  <circle cx="435" cy="95" r="4" fill="#ea580c" filter="url(#glowOrange)" />

                  {/* Electrochemistry Strip Visual */}
                  <rect x="340" y="270" width="115" height="65" rx="6" fill="#1e1035" stroke="#8b5cf6" strokeWidth="1.5" />
                  <text x="397" y="288" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">MIP / NIP STRIP</text>
                  <text x="397" y="302" fill="#e9d5ff" fontSize="8" fontFamily="Inter" textAnchor="middle">DIY Potentiostat (₹320)</text>
                  <text x="397" y="316" fill="#a855f7" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle">DPV Scan · ΔI Peak Drop</text>
                  <rect x="350" y="322" width="15" height="6" rx="1" fill="#7c3aed" />
                  <rect x="372" y="322" width="15" height="6" rx="1" fill="#475569" />

                  {/* Convergence into Handheld Reader */}
                  <path d="M455 80 C 475 80, 480 160, 495 180" stroke="#ff7a3d" strokeWidth="1.5" />
                  <path d="M455 300 C 475 300, 480 200, 495 190" stroke="#8b5cf6" strokeWidth="1.5" />

                  {/* Handheld Reader */}
                  <rect x="495" y="130" width="90" height="135" rx="8" fill="#0A1628" stroke="#38bdf8" strokeWidth="2" filter="url(#glowCyan)" />
                  <text x="540" y="148" fill="#38bdf8" fontSize="9" fontFamily="Space Grotesk" textAnchor="middle" fontWeight="bold">JAL-DRISHTI</text>
                  <text x="540" y="159" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">₹2,700 READER</text>

                  {/* OLED Screen on reader */}
                  <rect x="507" y="167" width="66" height="38" rx="3" fill="#000000" stroke="#334155" />
                  <text x="512" y="180" fill="#22d3ee" fontSize="6.5" fontFamily="JetBrains Mono">PFAS: AMBER</text>
                  <text x="512" y="191" fill="#22c55e" fontSize="6.5" fontFamily="JetBrains Mono">MP:   LOW MFI</text>
                  <text x="512" y="201" fill="#38bdf8" fontSize="6" fontFamily="JetBrains Mono">7H4K-9M2X</text>

                  {/* 3 Traffic LEDs */}
                  <circle cx="522" cy="216" r="3" fill="#22c55e" opacity="0.3" />
                  <circle cx="540" cy="216" r="3" fill="#f59e0b" filter="url(#glowOrange)" />
                  <circle cx="558" cy="216" r="3" fill="#ef4444" opacity="0.3" />

                  {/* ESP32-S3 microcontroller label */}
                  <text x="540" y="235" fill="#64748b" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">ESP32-S3 / OLED</text>
                  <text x="540" y="246" fill="#38bdf8" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">HMAC SIGNED</text>
                </svg>

                {/* Flow animation banner */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-3 py-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-slate-300">
                  <span className="text-cyan-400 font-bold">1 SAMPLE</span>
                  <span>→</span>
                  <span className="text-orange-400">FILTER (MP)</span>
                  <span>+</span>
                  <span className="text-purple-400">WAX (PFAS)</span>
                  <span>→</span>
                  <span className="text-emerald-400">SIGN & SMS</span>
                </div>
              </div>

              {/* Dynamic Live Result Simulated Panel */}
              <div className="mt-4 p-4 rounded-lg bg-[#020611] border border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-white tracking-wider">
                      ACTIVE SCREENING TELEMETRY
                    </span>
                  </div>
                  <SimulatedBadge text="SIMULATED DEMO" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded bg-slate-900/60 border border-amber-500/30">
                    <div className="text-[10px] text-slate-400 uppercase">PFAS Triage Band</div>
                    <div className="text-amber-400 font-bold text-sm flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      DETECTED – MONITOR
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/60 border border-emerald-500/30">
                    <div className="text-[10px] text-slate-400 uppercase">Microplastic Index</div>
                    <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      LOW MFI (BAND 1)
                    </div>
                  </div>
                </div>

                {/* 12-char Crockford Base32 Code Readout */}
                <div className="p-3 rounded bg-cyan-950/30 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Signed SMS Code (Crockford Base32)
                    </div>
                    <div className="font-mono text-cyan-300 font-bold text-base tracking-wider mt-0.5">
                      7H4K-9M2X-8B3Q
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      SIGNATURE: VALID ✓
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                      CTR #0417
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono text-center">
                  *Illustrative simulated demonstration data. Lab confirmation required for flagged sources.
                </div>
              </div>
            </GlassPanel>

          </div>

        </div>
      </div>
    </section>
  );
}
