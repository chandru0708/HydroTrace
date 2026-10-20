import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import TelemetryChip from '../ui/TelemetryChip';
import SimulatedBadge from '../ui/SimulatedBadge';
import { AlertTriangle, ArrowDown } from 'lucide-react';

export default function PfasModule() {
  const [selectedBlock, setSelectedBlock] = useState('mcp6004');
  const [pfasConcentration, setPfasConcentration] = useState('moderate'); // 'low', 'moderate', 'high'

  const blockDetails = {
    mcp6004: {
      name: 'MCP6004 Quad Op-Amp',
      cost: '₹45',
      desc: 'Generates ultra-stable 1.65 V virtual ground rail, reference buffer, control amp, and transimpedance amplifier (TIA) with Rf = 10 kΩ, Cf = 100 pF.'
    },
    mcp4725: {
      name: 'MCP4725 12-Bit DAC',
      cost: '₹75',
      desc: 'Generates precision Differential Pulse Voltammetry (DPV) staircases: 5 mV steps with superimposed 50 mV pulses over –0.1 V to +0.5 V potential range.'
    },
    ads1115: {
      name: 'ADS1115 16-Bit ADC',
      cost: '₹120',
      desc: 'Precision analog-to-digital converter configured at ±2.048 V range, achieving ~6 nA per LSB resolution to quantify sub-microamp redox peak drops.'
    },
    cd4053: {
      name: 'CD4053 Analog Multiplexer',
      cost: '₹30',
      desc: 'Switches the working electrode measurement between WE1 (MIP) and WE2 (NIP) during the 60 s DPV scans with sub-ohm channel balance.'
    },
    lp2985: {
      name: 'LP2985 Low-Noise LDO',
      cost: '₹50',
      desc: 'Dedicated 3.3 V ultra-low-noise analog power rail isolating the electrochemical front-end from ESP32-S3 Wi-Fi switching transients.'
    }
  };

  return (
    <section id="pfas" className="py-28 relative tech-grid bg-[#060A18] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="04"
          category="PFAS ELECTROCHEMICAL ENGINE"
          title="DETECTING PARTS-PER-TRILLION IN THE FIELD"
          subtitle="PFAS is too dilute to sense directly at drinking-water thresholds, so Jal-Drishti concentrates it 40–60× on a WAX cartridge first, then reads differential current blocking on a custom MIP/NIP strip."
          accent="violet"
        />

        {/* Telemetry bar specific to PFAS */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-purple-300 font-bold uppercase tracking-wide">ELECTROCHEM · DPV</span>
            <span className="text-slate-600">|</span>
            <TelemetryChip label="SCAN" status="–0.1V → +0.5V" variant="violet" />
            <TelemetryChip label="PULSE" status="50mV · 50ms" variant="cyan" />
            <TelemetryChip label="WE1/WE2" status="MIP vs NIP" variant="violet" />
          </div>
          <SimulatedBadge text="SIMULATED CALIBRATION CURVES" />
        </div>

        {/* Grid: Pre-concentration Funnel + MIP/NIP Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Part A: Pre-concentration Funnel (5 Cols) */}
          <GlassPanel variant="violet" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-purple-300 px-2.5 py-1 rounded bg-purple-950/60 border border-purple-500/30">
                  PART A · PRE-CONCENTRATION
                </span>
                <span className="font-mono text-[11px] text-slate-400">EPA METHOD 533 PRINCIPLE</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2">
                SOLID-PHASE EXTRACTION FUNNEL
              </h3>

              <p className="text-slate-300 text-xs leading-relaxed font-sans mb-4">
                Raw tap or borewell water contains sub-ppb PFAS. A 250 mL volume is pushed through a hand-packed weak anion exchange (WAX) cartridge. Bound PFAS is eluted in 0.5 mL ammoniated methanol and diluted into 2.5 mL buffer.
              </p>

              {/* Graphic Representation of Funnel */}
              <div className="p-4 rounded-xl bg-[#030612] border border-purple-500/20 space-y-3 font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-cyan-400 font-bold">250 mL RAW SAMPLE</span>
                  <span className="text-slate-400">Large Volume Feed</span>
                </div>

                <div className="flex justify-center text-purple-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                <div className="p-2.5 rounded bg-purple-950/40 border border-purple-500/40 text-center">
                  <div className="text-xs font-bold text-purple-300">WAX CARTRIDGE (ANIONIC TRAP)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Captures Perfluoroalkyl Carboxylates & Sulfonates</div>
                </div>

                <div className="flex justify-center text-purple-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-purple-300 font-bold">0.5 mL AMMONIATED ELUATE</span>
                  <span className="text-slate-400">Diluted 1:4 to ~2.5 mL Buffer</span>
                </div>

                {/* Animated Enrichment Readout */}
                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-950/60 to-slate-900 border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Effective Enrichment</div>
                    <div className="font-heading text-2xl font-extrabold text-white mt-0.5">
                      40–60× <span className="text-xs font-mono text-purple-300 font-normal">RECOVERY</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Theoretical Limit</div>
                    <div className="font-mono text-sm text-slate-300">100× (0.5 mL / 500)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-500/20 text-[11px] font-mono text-purple-300">
              Single-use cartridge prevents carry-over. WAX is standard chemistry under EPA Method 533.
            </div>
          </GlassPanel>

          {/* Part B: The MIP / NIP Strip Diagram (7 Cols) */}
          <GlassPanel variant="violet" className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-purple-300 px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30">
                  PART B // SCREEN-PRINTED CARBON STRIP
                </span>
                <span className="font-mono text-[10px] text-slate-400">IN-HOUSE FABRICATION (₹30–50)</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2">
                FOUR-ELECTRODE TRANSDUCER ARCHITECTURE
              </h3>

              <p className="text-slate-300 text-xs leading-relaxed font-sans mb-4">
                Electropolymerised o-phenylenediamine (o-PD) on screen-printed carbon. WE1 contains imprinted nanocavities for PFOA/PFOS. When PFAS docks, it blocks electron transfer from the 5 mM ferri/ferrocyanide redox probe, dropping the DPV peak.
              </p>

              {/* Detailed SVG Sensor Strip */}
              <div className="relative w-full aspect-[16/8] bg-[#02050E] rounded-xl border border-slate-800 p-3 overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 500 220" className="w-full h-full" fill="none">
                  {/* Ceramic / PET Substrate */}
                  <rect x="20" y="30" width="460" height="160" rx="10" fill="#0A1424" stroke="#334155" strokeWidth="2" />
                  
                  {/* Connector Pins (Left) */}
                  <rect x="25" y="50" width="30" height="20" rx="2" fill="#94a3b8" />
                  <rect x="25" y="80" width="30" height="20" rx="2" fill="#94a3b8" />
                  <rect x="25" y="110" width="30" height="20" rx="2" fill="#94a3b8" />
                  <rect x="25" y="140" width="30" height="20" rx="2" fill="#94a3b8" />
                  <text x="35" y="44" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">EDGE PINS</text>

                  {/* Carbon Tracks */}
                  <path d="M55 60 L240 60" stroke="#475569" strokeWidth="3" />
                  <path d="M55 90 L240 90" stroke="#475569" strokeWidth="3" />
                  <path d="M55 120 L240 120" stroke="#475569" strokeWidth="3" />
                  <path d="M55 150 L240 150" stroke="#475569" strokeWidth="3" />

                  {/* Reaction Well Insulator Mask */}
                  <circle cx="340" cy="110" r="70" fill="#030816" stroke="#1e293b" strokeWidth="2" />
                  <text x="340" y="32" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">REACTION WELL (DROPLET ZONE)</text>

                  {/* Counter Electrode (Carbon Arch) */}
                  <path d="M 285 80 A 60 60 0 0 1 395 80" stroke="#94a3b8" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <text x="340" y="68" fill="#cbd5e1" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">COUNTER (CARBON)</text>

                  {/* Reference Electrode (Ag/AgCl Pseudo) */}
                  <path d="M 285 140 A 60 60 0 0 0 395 140" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <text x="340" y="160" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">REF (Ag/AgCl)</text>

                  {/* WE1: MIP Electrode Disc */}
                  <circle cx="315" cy="110" r="16" fill="#3b0764" stroke="#a855f7" strokeWidth="2" />
                  <text x="315" y="107" fill="#ffffff" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">WE1</text>
                  <text x="315" y="117" fill="#e9d5ff" fontSize="6.5" fontFamily="JetBrains Mono" textAnchor="middle">MIP</text>

                  {/* WE2: NIP Electrode Disc */}
                  <circle cx="365" cy="110" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  <text x="365" y="107" fill="#ffffff" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">WE2</text>
                  <text x="365" y="117" fill="#94a3b8" fontSize="6.5" fontFamily="JetBrains Mono" textAnchor="middle">NIP</text>

                  {/* Docking Callout */}
                  <rect x="420" y="80" width="70" height="60" rx="4" fill="#0f172a" stroke="#8b5cf6" />
                  <text x="455" y="95" fill="#c084fc" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">MIP CAVITY</text>
                  <circle cx="455" cy="115" r="8" fill="#2e1065" stroke="#a855f7" strokeDasharray="2 1" />
                  <text x="455" y="118" fill="#e9d5ff" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">PFAS</text>
                  <text x="455" y="132" fill="#f43f5e" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">BLOCKS e⁻</text>
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-500/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Template: PFOA & PFOS</span>
              <span className="text-purple-300">Redox Probe: 5 mM [Fe(CN)6]³⁻/⁴⁻</span>
            </div>
          </GlassPanel>

        </div>

        {/* Part C: DIY Potentiostat Block Diagram (Clickable) */}
        <GlassPanel className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                PART C // HARDWARE CIRCUITRY
              </span>
              <h3 className="font-heading text-lg font-bold text-white mt-1">
                DIY POTENTIOSTAT (<span className="text-cyan-300">≈ ₹320 IN PARTS</span>)
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Click any stage to inspect circuit role & component cost
            </div>
          </div>

          {/* Interactive Block Diagram Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
            {[
              { id: 'mcp6004', label: 'VIRTUAL GROUND', sub: 'MCP6004 · 1.65V Rail' },
              { id: 'mcp4725', label: 'DAC EXCITATION', sub: 'MCP4725 · 0.8mV Step' },
              { id: 'cd4053', label: 'MIP/NIP SWITCH', sub: 'CD4053 Multiplexer' },
              { id: 'ads1115', label: '16-BIT ADC TIA', sub: 'ADS1115 · ~6nA/Step' },
              { id: 'lp2985', label: 'ANALOG RAIL', sub: 'LP2985 Ultra-Low Noise' }
            ].map((block) => (
              <button
                key={block.id}
                onClick={() => setSelectedBlock(block.id)}
                className={`p-3 rounded-lg border text-left font-mono transition-all cursor-pointer ${
                  selectedBlock === block.id
                    ? 'bg-purple-950/60 border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-slate-400 uppercase">{block.label}</div>
                <div className={`text-xs font-bold mt-1 ${selectedBlock === block.id ? 'text-purple-300' : 'text-white'}`}>
                  {block.sub}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Component Details Box */}
          <div className="p-4 rounded-lg bg-slate-950/80 border border-purple-500/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div>
              <div className="text-purple-300 font-bold text-sm">
                {blockDetails[selectedBlock].name} ({blockDetails[selectedBlock].cost})
              </div>
              <div className="text-slate-300 mt-1 font-sans text-xs max-w-3xl leading-relaxed">
                {blockDetails[selectedBlock].desc}
              </div>
            </div>
            <div className="px-3 py-1.5 rounded bg-purple-950 border border-purple-500/40 text-purple-200 text-xs">
              TOTAL ANALOG BOM: ₹320
            </div>
          </div>
        </GlassPanel>

        {/* Part D: DPV Voltammogram & Part E: Matrix Correction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Part D: Animated DPV Voltammogram Chart (7 Cols) */}
          <GlassPanel variant="violet" className="lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="font-mono text-xs font-bold text-purple-300 px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30">
                  PART D // DPV WAVEFORM
                </span>
                <h4 className="font-heading text-base font-bold text-white mt-1">
                  DIFFERENTIAL PULSE VOLTAMMOGRAM
                </h4>
              </div>

              {/* PFAS concentration toggle */}
              <div className="flex items-center gap-1 font-mono text-xs">
                <span className="text-slate-400 text-[10px] mr-1">SPIKE:</span>
                {(['low', 'moderate', 'high']).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setPfasConcentration(lvl)}
                    className={`px-2 py-0.5 rounded uppercase text-[10px] font-semibold border ${
                      pfasConcentration === lvl
                        ? 'bg-purple-900 text-purple-200 border-purple-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* DPV SVG Chart */}
            <div className="relative w-full aspect-[16/9] bg-[#02050E] rounded-lg border border-slate-800 p-2 flex items-center justify-center">
              <svg viewBox="0 0 500 280" className="w-full h-full">
                {/* Grid Lines */}
                <line x1="50" y1="30" x2="50" y2="240" stroke="#1e293b" strokeWidth="1" />
                <line x1="50" y1="240" x2="470" y2="240" stroke="#1e293b" strokeWidth="1" />
                <line x1="50" y1="135" x2="470" y2="135" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Axis Labels */}
                <text x="260" y="265" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Potential vs Ag/AgCl [V] (–0.1 V to +0.5 V)
                </text>
                <text x="15" y="135" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" transform="rotate(-90 15 135)">
                  Current [µA]
                </text>

                {/* X-axis ticks */}
                <text x="50" y="252" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">–0.1</text>
                <text x="190" y="252" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">+0.1</text>
                <text x="330" y="252" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">+0.3</text>
                <text x="460" y="252" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">+0.5</text>

                {/* 1. Baseline Clean Buffer Peak (Grey dashed) */}
                <path 
                  d="M 50 230 Q 180 230, 240 70 Q 300 230, 470 230" 
                  stroke="#64748b" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  fill="none" 
                />
                <text x="240" y="60" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
                  ΔI0,MIP Baseline Peak
                </text>

                {/* 2. WE2 NIP Peak (Matrix reference - barely shifts) */}
                <path 
                  d="M 50 230 Q 180 230, 240 85 Q 300 230, 470 230" 
                  stroke="#38bdf8" 
                  strokeWidth="2" 
                  fill="none" 
                />
                <text x="360" y="90" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono">
                  WE2 (NIP Reference)
                </text>

                {/* 3. WE1 MIP Peak Dropping based on PFAS Concentration */}
                {pfasConcentration === 'low' && (
                  <path 
                    d="M 50 230 Q 180 230, 240 100 Q 300 230, 470 230" 
                    stroke="#c084fc" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                )}
                {pfasConcentration === 'moderate' && (
                  <path 
                    d="M 50 230 Q 180 230, 240 145 Q 300 230, 470 230" 
                    stroke="#c084fc" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                )}
                {pfasConcentration === 'high' && (
                  <path 
                    d="M 50 230 Q 180 230, 240 190 Q 300 230, 470 230" 
                    stroke="#c084fc" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                )}

                <text x="240" y={pfasConcentration === 'low' ? 95 : pfasConcentration === 'moderate' ? 140 : 185} fill="#c084fc" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                  WE1 (MIP): {pfasConcentration.toUpperCase()} PFAS BINDING (ΔI DROPS)
                </text>
              </svg>

              <div className="absolute top-3 right-3">
                <SimulatedBadge text="SIMULATED ILLUSTRATIVE CURVE" />
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Scan: 5 mV step · 50 mV pulse · 50 ms width</span>
              <span className="text-purple-300">~60 s scan time per electrode</span>
            </div>
          </GlassPanel>

          {/* Part E & F: Matrix Correction Formula & Limitation Note (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Part E: Matrix Correction Formula */}
            <GlassPanel variant="violet" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300 px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30">
                  PART E // DIFFERENTIAL EQUATION
                </span>
                <span className="font-mono text-[10px] text-slate-400">BOREWELL RESISTANCE</span>
              </div>

              <h4 className="font-heading text-base font-bold text-white">
                GROUNDWATER MATRIX CANCELLATION
              </h4>

              {/* Glowing Equation Box */}
              <div className="p-4 rounded-xl bg-[#02050E] border border-purple-500/40 text-center shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <div className="font-mono text-xs md:text-sm text-purple-200 tracking-wider font-bold">
                  S_net = <span className="text-cyan-300">(ΔI0,MIP − ΔI_MIP) / ΔI0,MIP</span>
                  <br className="my-1" />
                  − <span className="text-slate-400">(ΔI0,NIP − ΔI_NIP) / ΔI0,NIP</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed font-sans">
                Subtracting the NIP electrode response cancels out non-specific ionic adsorption, conductivity variations, and electrode fouling typical of hard, mineral-dense Indian groundwater sources.
              </p>
            </GlassPanel>

            {/* Part F: Limitation Note */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>SCIENTIFIC LIMITATIONS (HONEST ENGINEERING)</span>
              </div>
              <ul className="text-xs text-amber-200/90 font-sans space-y-1.5 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Target Specificity:</strong> MIP cavities are imprinted specifically with PFOA and PFOS templates; ultrashort-chain PFAS (e.g., PFBA, PFBS) are not reliably captured.
                </li>
                <li>
                  <strong>Calibration:</strong> S_net triage bands require pre-calibration curves spiked into local borewell water matrices.
                </li>
                <li>
                  <strong>Validation:</strong> Red screening results must be confirmed by an NABL laboratory via reference LC-MS/MS.
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
