import React, { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import TelemetryChip from '../ui/TelemetryChip';
import SimulatedBadge from '../ui/SimulatedBadge';
import { Camera, Sparkles, Filter, AlertCircle, Play, RotateCcw, CheckCircle } from 'lucide-react';

export default function MicroplasticModule() {
  const [activeStep, setActiveStep] = useState(1);
  const [isShutterActive, setIsShutterActive] = useState(false);

  // Optical stack components
  const opticalStack = [
    { title: '470 nm Blue LED', role: 'Excitation Beam', color: 'blue' },
    { title: 'Short-Pass Filter', role: 'Cuts > 490 nm Bleed', color: 'cyan' },
    { title: '25 mm Stained Filter', role: 'Nile Red Tagged Plastics', color: 'orange' },
    { title: '550 nm Long-Pass', role: 'Blocks Blue Excitation', color: 'amber' },
    { title: 'BPW34 Photodiode', role: 'Emission Detection', color: 'orange' },
    { title: 'Op-Amp + ADC', role: 'Transimpedance Digitization', color: 'cyan' }
  ];

  const triggerStep = (step) => {
    setActiveStep(step);
    if (step === 6) {
      setIsShutterActive(true);
      setTimeout(() => setIsShutterActive(false), 500);
    }
  };

  return (
    <section id="microplastics" className="py-28 relative tech-grid bg-[#070D1C] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="05"
          category="MICROPLASTICS FLUORESCENCE ENGINE"
          title="MAKING MICROPLASTICS GLOW"
          subtitle="Nile Red selectively binds to hydrophobic plastic polymer surfaces (PET, PE, PP, PS) and fluoresces intensely in orange/red under 470 nm blue excitation."
          accent="orange"
        />

        {/* Telemetry bar specific to Optics */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-orange-400 font-bold uppercase tracking-wide">OPTICAL SENSING</span>
            <span className="text-slate-600">|</span>
            <TelemetryChip label="EXCITATION" status="470 nm Blue LED" variant="cyan" />
            <TelemetryChip label="EMISSION" status="> 550 nm Long-Pass" variant="orange" />
            <TelemetryChip label="SENSOR" status="BPW34 Silicon Pin" variant="orange" />
          </div>
          <SimulatedBadge text="SIMULATED OPTICAL READOUTS" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: 25mm Filter Disc Simulation Sequence (7 Cols) */}
          <GlassPanel variant="orange" className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-orange-400 px-2.5 py-1 rounded bg-orange-950/60 border border-orange-500/30">
                  OPTICAL PROTOCOL · 6 STAGES
                </span>
                <span className="font-mono text-xs text-slate-400">
                  STEP {activeStep} OF 6
                </span>
              </div>

              {/* Step Navigation Tabs */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-4 font-mono text-[11px]">
                {[
                  { s: 1, label: 'LOADED' },
                  { s: 2, label: 'BLANK' },
                  { s: 3, label: 'STAIN' },
                  { s: 4, label: 'STAINED' },
                  { s: 5, label: 'INDEX' },
                  { s: 6, label: 'PHOTO' },
                ].map((item) => (
                  <button
                    key={item.s}
                    onClick={() => triggerStep(item.s)}
                    className={`py-1 px-1.5 rounded text-center border font-semibold transition-all cursor-pointer ${
                      activeStep === item.s
                        ? 'bg-orange-600 text-white border-orange-400 shadow-[0_0_10px_rgba(255,122,61,0.4)]'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {item.s}. {item.label}
                  </button>
                ))}
              </div>

              {/* Enlarged 25 mm Filter Disc Interactive SVG */}
              <div className="relative w-full aspect-[16/11] bg-[#02050E] rounded-xl border border-orange-500/30 overflow-hidden flex items-center justify-center">
                {/* Camera shutter flash effect */}
                {isShutterActive && (
                  <div className="absolute inset-0 bg-white z-30 opacity-90 transition-opacity duration-300 pointer-events-none" />
                )}

                <svg viewBox="0 0 400 320" className="w-full h-full">
                  <defs>
                    <radialGradient id="filterGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="90%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </radialGradient>
                    <radialGradient id="blueBeam" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.4)" />
                      <stop offset="80%" stopColor="rgba(59, 130, 246, 0.15)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    <filter id="fluoGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 25 mm Polypropylene holder outer ring */}
                  <circle cx="200" cy="160" r="140" fill="#091322" stroke="#475569" strokeWidth="4" />
                  <circle cx="200" cy="160" r="125" fill="#0b1a30" stroke="#ff7a3d" strokeWidth="1" strokeDasharray="4 2" />

                  {/* Glass-fibre filter disc */}
                  <circle cx="200" cy="160" r="115" fill="url(#filterGrad)" stroke="#64748b" strokeWidth="1.5" />
                  <text x="200" y="70" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                    25 mm GLASS-FIBRE MEMBRANE
                  </text>

                  {/* STEP 2: Blue 470 nm excitation beam */}
                  {(activeStep === 2 || activeStep === 4 || activeStep === 6) && (
                    <circle cx="200" cy="160" r="114" fill="url(#blueBeam)" />
                  )}

                  {/* Sand / Inorganic Silt Particles (Dark brown/grey, do not fluoresce) */}
                  <circle cx="160" cy="140" r="5" fill="#57534e" />
                  <circle cx="230" cy="180" r="4" fill="#78716c" />
                  <circle cx="170" cy="210" r="6" fill="#44403c" />
                  <circle cx="240" cy="130" r="4.5" fill="#57534e" />

                  {/* STEP 3: Nile Red Droplets landing */}
                  {activeStep === 3 && (
                    <g className="animate-bounce">
                      <circle cx="190" cy="130" r="8" fill="#ea580c" opacity="0.8" />
                      <circle cx="215" cy="150" r="7" fill="#ea580c" opacity="0.8" />
                      <circle cx="185" cy="180" r="6" fill="#ea580c" opacity="0.8" />
                      <text x="200" y="165" fill="#ffffff" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                        3 DROPS IN ETHANOL
                      </text>
                    </g>
                  )}

                  {/* Microplastic Particles (PET, PE, PP, PS) */}
                  {/* When unstained (Step 1-3): simple translucent particles */}
                  {activeStep <= 3 && (
                    <g>
                      <circle cx="180" cy="160" r="8" fill="#94a3b8" opacity="0.6" stroke="#cbd5e1" />
                      <polygon points="210,130 225,145 205,150" fill="#94a3b8" opacity="0.6" stroke="#cbd5e1" />
                      <circle cx="220" cy="200" r="7" fill="#94a3b8" opacity="0.6" stroke="#cbd5e1" />
                    </g>
                  )}

                  {/* When stained (Step 4, 5, 6): INTENSE ORANGE FLUORESCENCE */}
                  {activeStep >= 4 && (
                    <g filter="url(#fluoGlow)">
                      {/* Particle 1: 45 µm fragment */}
                      <circle cx="180" cy="160" r="9" fill="#ff7a3d" stroke="#fed7aa" strokeWidth="1.5" />
                      {/* Particle 2: 70 µm irregular fragment */}
                      <polygon points="210,128 228,145 204,152" fill="#ff7a3d" stroke="#fed7aa" strokeWidth="1.5" />
                      {/* Particle 3: 35 µm particle */}
                      <circle cx="220" cy="200" r="8" fill="#ff7a3d" stroke="#fed7aa" strokeWidth="1.5" />
                    </g>
                  )}

                  {/* STEP 6: Camera Blob Outlines around particles ≥ 20 µm */}
                  {activeStep === 6 && (
                    <g>
                      {/* Blob bounding boxes */}
                      <rect x="165" y="145" width="30" height="30" rx="3" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 1" />
                      <text x="180" y="140" fill="#22d3ee" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">BLOB #1 ~45µm</text>

                      <rect x="198" y="122" width="35" height="34" rx="3" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 1" />
                      <text x="215" y="118" fill="#22d3ee" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">BLOB #2 ~70µm</text>

                      <rect x="207" y="187" width="26" height="26" rx="3" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 1" />
                      <text x="220" y="222" fill="#22d3ee" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">BLOB #3 ~35µm</text>

                      <text x="200" y="275" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                        ESP32-S3 MACRO AUDIT PHOTO CAPTURED (25 KB JPEG)
                      </text>
                    </g>
                  )}
                </svg>

                {/* Status Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-slate-950/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-400">CURRENT READOUT: </span>
                    <span className="text-orange-400 font-bold">
                      {activeStep === 1 && 'RAW PARTICLES LOADED'}
                      {activeStep === 2 && 'I_blank = 142 nA (BACKGROUND)'}
                      {activeStep === 3 && 'STAINING INCUBATION: 10 MIN'}
                      {activeStep === 4 && 'I_stained = 588 nA (ORANGE PEAK)'}
                      {activeStep === 5 && 'MFI = 446 nA (LOW MFI BAND)'}
                      {activeStep === 6 && 'AUDIT PHOTO: 3 BLOBS ≥ 20 µm'}
                    </span>
                  </div>
                  <button 
                    onClick={() => triggerStep((activeStep % 6) + 1)}
                    className="px-2 py-1 rounded bg-orange-950 border border-orange-500/40 text-orange-300 hover:bg-orange-900 text-[10px] cursor-pointer"
                  >
                    NEXT STAGE →
                  </button>
                </div>
              </div>
            </div>

            {/* MFI Equation & Explanation */}
            <div className="mt-4 p-3 rounded-lg bg-slate-900/80 border border-orange-500/20 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <div>
                <span className="text-orange-300 font-bold">MFI = I_stained − I_blank</span>
                <span className="text-slate-400 ml-2">Subtracts filter scatter & mineral silt background</span>
              </div>
              <span className="text-slate-500 text-[10px]">BPW34 Photodiode Transimpedance</span>
            </div>
          </GlassPanel>

          {/* RIGHT: Optical Stack & Triage Bands (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Optical Train Block Diagram */}
            <GlassPanel variant="orange">
              <span className="font-mono text-xs font-bold text-orange-400 px-2 py-0.5 rounded bg-orange-950 border border-orange-500/30">
                OPTICAL ARCHITECTURE
              </span>
              <h4 className="font-heading text-base font-bold text-white mt-2 mb-3">
                LIGHT-TIGHT FLUORESCENCE STACK
              </h4>

              <div className="space-y-2">
                {opticalStack.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded bg-slate-900/60 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 w-4">0{idx + 1}</span>
                    <div className="flex-1">
                      <div className="font-bold text-white">{item.title}</div>
                      <div className="text-[10px] text-slate-400">{item.role}</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* MFI Tier Gauge & Scientific Notes */}
            <GlassPanel variant="orange">
              <span className="font-mono text-xs font-bold text-orange-400 px-2 py-0.5 rounded bg-orange-950 border border-orange-500/30">
                MFI TRIAGE GAUGE
              </span>
              <h4 className="font-heading text-base font-bold text-white mt-2 mb-2">
                PLASTIC SURFACE AREA INDEX
              </h4>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-2 rounded bg-slate-900/80 border border-emerald-500/40 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">LOW MFI</span>
                  <span className="text-slate-400 text-[11px]">Routine Retest Schedule</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-amber-500/40 flex items-center justify-between">
                  <span className="text-amber-400 font-bold">MODERATE MFI</span>
                  <span className="text-slate-400 text-[11px]">Retest within 2 Weeks</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-rose-500/40 flex items-center justify-between">
                  <span className="text-rose-400 font-bold">HIGH MFI</span>
                  <span className="text-slate-400 text-[11px]">Send to Lab for µ-FTIR</span>
                </div>
              </div>

              {/* Honest Chemistry Notes */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 font-sans space-y-2 leading-relaxed">
                <p>
                  <strong className="text-orange-300 font-mono text-[11px]">SOLVENT NOTE: </strong>
                  Nile Red is delivered in sealed ethanol ampoules, NEVER acetone. Acetone dissolves polystyrene and polycarbonate particles, falsifying the test.
                </p>
                <p>
                  <strong className="text-orange-300 font-mono text-[11px]">SURFACE METRIC: </strong>
                  MFI correlates to total plastic surface area. It is reported as "particles per litre equivalent", never an absolute count.
                </p>
                <p className="text-slate-400 text-[11px]">
                  *Honest limitation: Nile Red can stain natural plant lipids. The audit photo allows secondary verification.
                </p>
              </div>
            </GlassPanel>

          </div>

        </div>

      </div>
    </section>
  );
}
