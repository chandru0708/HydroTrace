import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';

export default function Innovations() {
  const [activeCodeState, setActiveCodeState] = useState('valid'); // 'valid', 'altered', 'replayed'

  return (
    <section id="innovations" className="py-28 relative tech-grid border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="03"
          category="PATENTABLE ADVANCEMENTS"
          title="WHY JAL-DRISHTI IS DIFFERENT"
          subtitle="Six core engineering breakthroughs designed to make sub-nanogram contaminant screening feasible, tamper-proof, and practical under rugged rural field conditions."
          accent="cyan"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* INNOVATION 01: ONE SAMPLE, TWO TESTS */}
          <GlassPanel className="flex flex-col justify-between hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-sky-400 px-2.5 py-1 rounded bg-sky-950/60 border border-sky-500/30">
                  INNOVATION 01
                </span>
                <span className="font-mono text-[11px] text-slate-400">SERIES FLUIDICS</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                ONE SAMPLE, TWO TESTS
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                A single 250 mL push through a series jig: glass-fibre filter captures microplastics, while the passing filtrate enters the weak anion exchange (WAX) cartridge to capture PFAS. No duplicate sampling or wasted volume.
              </p>

              {/* Graphic: Stream splitting */}
              <div className="relative h-32 bg-[#02050E] rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 300 120" className="w-full h-full">
                  <path d="M20 60 L90 60" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5 3" />
                  <circle cx="50" cy="60" r="3.5" fill="#38bdf8" />
                  
                  <rect x="90" y="30" width="30" height="60" rx="4" fill="#1e293b" stroke="#64748b" />
                  <line x1="105" y1="35" x2="105" y2="85" stroke="#fb923c" strokeWidth="3" />
                  
                  <circle cx="98" cy="48" r="2.5" fill="#fb923c" />
                  <circle cx="96" cy="70" r="3" fill="#fb923c" />

                  <path d="M120 45 C150 45, 170 30, 220 30" stroke="#fb923c" strokeWidth="2" strokeDasharray="3 2" fill="none" />
                  <rect x="220" y="18" width="70" height="24" rx="4" fill="#451a03" stroke="#ea580c" />
                  <text x="255" y="34" fill="#fb923c" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">FILTER: MP</text>

                  <path d="M120 75 C150 75, 170 90, 220 90" stroke="#a78bfa" strokeWidth="2" strokeDasharray="3 2" fill="none" />
                  <rect x="220" y="78" width="70" height="24" rx="4" fill="#2e1065" stroke="#9333ea" />
                  <text x="255" y="94" fill="#c084fc" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">WAX: PFAS</text>

                  <circle cx="165" cy="85" r="2.5" fill="#c084fc" />
                </svg>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-sky-400">
              One manual spring stroke feeds both analytical engines.
            </div>
          </GlassPanel>

          {/* INNOVATION 02: MIP / NIP DIFFERENTIAL SENSING */}
          <GlassPanel className="flex flex-col justify-between hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-purple-300 px-2.5 py-1 rounded bg-purple-950/60 border border-purple-500/30">
                  INNOVATION 02
                </span>
                <span className="font-mono text-[11px] text-slate-400">DUAL WE1 / WE2</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                MIP / NIP DIFFERENTIAL SENSING
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Two electrodes see the identical matrix. WE1 (Molecularly Imprinted Polymer) has cavities matching PFOA/PFOS templates. WE2 (Non-Imprinted Polymer) acts as a blank. Subtracting NIP cancels hard, salty borewell water interference.
              </p>

              {/* Graphic: Side-by-side docking */}
              <div className="relative h-32 bg-[#02050E] rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 300 120" className="w-full h-full">
                  <rect x="20" y="20" width="120" height="80" rx="6" fill="#1e1035" stroke="#8b5cf6" strokeWidth="1.5" />
                  <text x="80" y="38" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">WE1: MIP STRIP</text>
                  
                  <rect x="40" y="55" width="22" height="12" rx="2" fill="#3b0764" stroke="#a855f7" strokeDasharray="2 1" />
                  <rect x="42" y="57" width="18" height="8" rx="1" fill="#c084fc" />
                  <text x="51" y="64" fill="#000" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">PFAS</text>

                  <rect x="80" y="55" width="22" height="12" rx="2" fill="#3b0764" stroke="#a855f7" strokeDasharray="2 1" />
                  <rect x="82" y="57" width="18" height="8" rx="1" fill="#c084fc" />
                  
                  <text x="80" y="90" fill="#a855f7" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">PEAK DROPS: ΔI_MIP</text>

                  <rect x="160" y="20" width="120" height="80" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                  <text x="220" y="38" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">WE2: NIP REF</text>
                  <line x1="175" y1="60" x2="265" y2="60" stroke="#334155" strokeWidth="4" />
                  <text x="220" y="75" fill="#64748b" fontSize="7" fontFamily="Inter" textAnchor="middle">No Cavities (Matrix Only)</text>
                  <text x="220" y="90" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">FLAT: ΔI_NIP ≈ 0</text>
                </svg>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-purple-300">
              S_net = (ΔI0,MIP − ΔI_MIP)/ΔI0,MIP − (ΔI0,NIP − ΔI_NIP)/ΔI0,NIP
            </div>
          </GlassPanel>

          {/* INNOVATION 03: BACKGROUND-SUBTRACTED OPTICS */}
          <GlassPanel className="flex flex-col justify-between hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-orange-400 px-2.5 py-1 rounded bg-orange-950/60 border border-orange-500/30">
                  INNOVATION 03
                </span>
                <span className="font-mono text-[11px] text-slate-400">MFI CALIBRATION</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                BACKGROUND-SUBTRACTED OPTICS
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Sand, silt and raw glass-fibre scatter light. Jal-Drishti executes a blank scan before staining, then reads the Nile Red orange fluorescence. MFI subtraction removes inorganic background noise, backed by an ESP32-S3 audit photo.
              </p>

              {/* Subtraction bar visual */}
              <div className="relative h-32 bg-[#02050E] rounded-xl border border-slate-800 p-3 overflow-hidden flex flex-col justify-center gap-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">1. Blank Scan (Sand/Filter)</span>
                  <span className="text-slate-300">I_blank = 142 nA</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[30%] h-full bg-slate-500 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-orange-400">2. Stained Scan (Nile Red)</span>
                  <span className="text-orange-300">I_stained = 588 nA</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-emerald-400 border-t border-slate-800">
                  <span>Net Microplastic Index</span>
                  <span className="font-bold">MFI = 446 nA (LOW BAND)</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-orange-300">
              Ethanol carrier solvent prevents plastic dissolution.
            </div>
          </GlassPanel>

          {/* INNOVATION 04: WORKS WITH ANY PHONE */}
          <GlassPanel className="flex flex-col justify-between hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-sky-400 px-2.5 py-1 rounded bg-sky-950/60 border border-sky-500/30">
                  INNOVATION 04
                </span>
                <span className="font-mono text-[11px] text-slate-400">ZERO APP INSTALL</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                WORKS WITH ANY PHONE (OR NONE)
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Rural field kit operators should never fail due to app compatibility or smartphone ownership. The device supports 3 decoupled reporting tiers with zero mobile app installation.
              </p>

              {/* 3 Lane Graphic */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">TIER 1</div>
                  <div className="text-xs font-bold text-sky-300">NO PHONE</div>
                  <div className="text-[9px] text-slate-500 mt-1">0.96" OLED + LEDs</div>
                </div>
                <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/40">
                  <div className="text-[10px] text-sky-400 mb-1">TIER 2</div>
                  <div className="text-xs font-bold text-white">KEYPAD</div>
                  <div className="text-[9px] text-slate-300 mt-1">12-Char SMS</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-1">TIER 3</div>
                  <div className="text-xs font-bold text-sky-300">BROWSER</div>
                  <div className="text-[9px] text-slate-500 mt-1">Wi-Fi Hotspot</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-sky-400">
              No Play Store / App Store download required.
            </div>
          </GlassPanel>

          {/* INNOVATION 05: TAMPER-PROOF RESULTS */}
          <GlassPanel className="flex flex-col justify-between hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30">
                  INNOVATION 05
                </span>
                <span className="font-mono text-[11px] text-slate-400">ANTI-FRAUD CRYPTO</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                TAMPER-PROOF RESULTS
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Field reports are authenticated with a per-device HMAC-SHA256 signature and a strictly monotonic hardware test counter inside a 60-bit Crockford Base32 string.
              </p>

              {/* Code Verification Interactive Visual */}
              <div className="p-3 rounded-xl bg-[#02050E] border border-slate-800 font-mono space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">CODE:</span>
                  <span className={`font-bold ${
                    activeCodeState === 'valid' ? 'text-sky-300' : 'text-rose-400 line-through'
                  }`}>
                    {activeCodeState === 'valid' ? '7H4K-9M2X-8B3Q' : '7H4K-9M2X-9999'}
                  </span>
                </div>

                <div className="flex gap-1.5 pt-1">
                  <button 
                    onClick={() => setActiveCodeState('valid')}
                    className={`flex-1 py-1 text-[10px] rounded border font-semibold cursor-pointer ${
                      activeCodeState === 'valid' ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    VALID
                  </button>
                  <button 
                    onClick={() => setActiveCodeState('altered')}
                    className={`flex-1 py-1 text-[10px] rounded border font-semibold cursor-pointer ${
                      activeCodeState === 'altered' ? 'bg-rose-950 text-rose-300 border-rose-500/50' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    ALTER
                  </button>
                  <button 
                    onClick={() => setActiveCodeState('replayed')}
                    className={`flex-1 py-1 text-[10px] rounded border font-semibold cursor-pointer ${
                      activeCodeState === 'replayed' ? 'bg-amber-950 text-amber-300 border-amber-500/50' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    REPLAY
                  </button>
                </div>

                <div className={`p-2 rounded text-[10px] font-mono text-center font-bold border ${
                  activeCodeState === 'valid'
                    ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                    : activeCodeState === 'altered'
                    ? 'bg-rose-950/40 text-rose-400 border-rose-500/30'
                    : 'bg-amber-950/40 text-amber-400 border-amber-500/30'
                }`}>
                  {activeCodeState === 'valid' && '✓ SIGNATURE VALID · COUNTER #0417 NEW'}
                  {activeCodeState === 'altered' && '✗ HMAC MISMATCH · REJECTED (1 IN 67M CHANCE)'}
                  {activeCodeState === 'replayed' && '✗ COUNTER #0417 ALREADY RECORDED · REJECTED'}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-300">
              Audit photo lets supervisors inspect unused filter fraud.
            </div>
          </GlassPanel>

          {/* INNOVATION 06: HONEST TRIAGE */}
          <GlassPanel className="flex flex-col justify-between hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/30">
                  INNOVATION 06
                </span>
                <span className="font-mono text-[11px] text-slate-400">NO "SAFE" LABELS</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                HONEST TRIAGE ARCHITECTURE
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Never labels water as "SAFE". Because India has no statutory PFAS threshold yet, results represent actionable triage tiers. Red outcomes automatically route samples to NABL laboratories.
              </p>

              {/* Triage Tier Lights */}
              <div className="space-y-2 font-mono">
                <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white">GREEN</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Below Detection Limit</span>
                </div>

                <div className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="font-bold text-white">AMBER</span>
                  </div>
                  <span className="text-[10px] text-amber-300">Detected → Retest in 2 wks</span>
                </div>

                <div className="p-2 rounded-lg bg-slate-900 border border-rose-500/40 flex items-center justify-between text-xs bg-rose-950/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="font-bold text-white">RED</span>
                  </div>
                  <span className="text-[10px] text-rose-300 font-semibold">High → Direct NABL Lab</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-300">
              Only flagged red sources expend expensive lab LC-MS/MS budget.
            </div>
          </GlassPanel>

        </div>

      </div>
    </section>
  );
}
