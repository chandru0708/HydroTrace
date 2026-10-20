import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Layers, Cpu, Box, Wrench, BatteryCharging, Check } from 'lucide-react';

const HARDWARE_PARTS = [
  { id: 1, name: 'READER BODY', role: 'IP65 dark-box enclosure', desc: 'Light-tight CNC/injection molded housing isolating optics and sensitive analog TIA circuitry.' },
  { id: 2, name: 'ESP32-S3 + CAMERA', role: 'Compute & Imaging Core', desc: 'Dual-core controller running DPV firmware, HMAC crypto, Wi-Fi captive portal, and filter macro audit photography.' },
  { id: 3, name: 'DIY POTENTIOSTAT BOARD', role: 'Electrochemical AFE (≈ ₹320)', desc: 'MCP6004 + MCP4725 + ADS1115 + CD4053 circuit executing precision 50 mV differential pulse voltammetry.' },
  { id: 4, name: 'MIP/NIP STRIP SLOT', role: 'Transducer Interface', desc: 'Card-edge connector accepting screen-printed carbon strips with dual working electrodes (WE1 MIP & WE2 NIP).' },
  { id: 5, name: 'FLUORESCENCE CHAMBER', role: 'Photometric Subsystem', desc: '470 nm blue LED, optical short-pass filter, 550 nm long-pass filter, and BPW34 silicon PIN photodiode.' },
  { id: 6, name: '0.96" OLED + LEDS + BUZZER', role: 'Physical User Feedback', desc: 'High-contrast SSD1306 monochrome screen showing triage verdict and Crockford Base32 SMS code without any phone.' },
  { id: 7, name: 'DS3231 RTC CLOCK', role: 'Hardware Timestamping', desc: 'Battery-backed temperature-compensated real-time clock guaranteeing tamper-evident audit timestamps.' },
  { id: 8, name: 'POWER SUBSYSTEM', role: '18650 Cell + LP2985 LDO', desc: 'Rechargeable 2600 mAh Li-ion cell with TP4056 USB-C charging and dedicated ultra-low-noise 3.3V analog rail.' },
  { id: 9, name: 'SPRING SYRINGE JIG', role: 'Mechanical Fluidic Driver', desc: 'Calibrated spring-assisted push mechanism delivering steady 250 mL volume through 25 mm PP filter holder.' },
  { id: 10, name: 'WAX CARTRIDGE', role: 'Disposable SPE Sorbent', desc: 'Single-use polymeric weak anion exchange cartridge achieving 40–60× net enrichment of PFOA and PFOS.' },
  { id: 11, name: 'SEALED AMPOULES', role: 'Unit-Dosed Reagents', desc: 'Hermetically sealed glass ampoules containing Nile Red in ethanol, ammoniated methanol eluent, and redox buffer.' },
  { id: 12, name: 'OPTIONAL HEATER BLOCK', role: 'Methanol Desolvation', desc: 'Miniature 50°C aluminum heater block for rapid eluent evaporation prior to buffer reconstitution.' }
];

export default function Prototype() {
  const [activePartId, setActivePartId] = useState(1);
  const activePart = HARDWARE_PARTS.find((p) => p.id === activePartId) || HARDWARE_PARTS[0];

  return (
    <section id="prototype" className="py-28 relative tech-grid border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="13"
          category="HARDWARE BLUEPRINT"
          title="OUR PROTOTYPE"
          subtitle="Exploded mechanical, optical and electronic architecture. Designed strictly with off-the-shelf, low-cost components to achieve an estimated single-unit BOM of ≈ ₹2,690."
          accent="cyan"
        />

        {/* Cost badges banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-white font-bold uppercase tracking-wider">HARDWARE SPECIFICATIONS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-sky-950/80 border border-sky-500/40 text-sky-300 font-bold">
              REUSABLE READER ≈ ₹2,700
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold">
              DISPOSABLE TEST SET ₹150–200
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint SVG Exploded Schematic (7 Cols) */}
          <GlassPanel variant="cyan" className="lg:col-span-7 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-2">
              <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                CAD EXPLODED SCHEMATIC · 12 SUBSYSTEMS
              </span>
              <span className="font-mono text-xs text-slate-400">12 MODULAR SUBSYSTEMS</span>
            </div>

            <div className="relative w-full aspect-[16/12] bg-[#020612] rounded-xl border border-slate-800 p-2 flex items-center justify-center">
              <svg viewBox="0 0 500 360" className="w-full h-full">
                {/* Blueprint grid lines */}
                <defs>
                  <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(34,211,238,0.06)" strokeWidth="0.5" />
                    <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(34,211,238,0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="500" height="360" fill="url(#blueprintGrid)" />

                {/* 1. Main Enclosure Outline */}
                <rect x="70" y="40" width="360" height="280" rx="16" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 3" />
                <text x="250" y="335" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  IP65 LIGHT-TIGHT DARK-BOX CHASSIS (PARTS 1–8)
                </text>

                {/* 2. ESP32-S3 Camera Board */}
                <g 
                  onClick={() => setActivePartId(2)} 
                  className="cursor-pointer group"
                >
                  <rect x="90" y="60" width="140" height="85" rx="6" fill="#0f172a" stroke={activePartId === 2 ? '#22d3ee' : '#334155'} strokeWidth={activePartId === 2 ? 2.5 : 1} />
                  <circle cx="120" cy="95" r="14" fill="#020617" stroke="#22d3ee" strokeWidth="1.5" />
                  <text x="175" y="85" fill="#f8fafc" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="bold">ESP32-S3</text>
                  <text x="175" y="100" fill="#94a3b8" fontSize="7.5" fontFamily="Inter">Camera + Wi-Fi</text>
                  <circle cx="215" cy="72" r="3" fill="#22d3ee" />
                </g>

                {/* 3. DIY Potentiostat Board */}
                <g 
                  onClick={() => setActivePartId(3)} 
                  className="cursor-pointer"
                >
                  <rect x="90" y="160" width="140" height="85" rx="6" fill="#1e1035" stroke={activePartId === 3 ? '#a855f7' : '#475569'} strokeWidth={activePartId === 3 ? 2.5 : 1} />
                  <text x="160" y="180" fill="#c084fc" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">DIY POTENTIOSTAT</text>
                  <text x="160" y="195" fill="#cbd5e1" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">MCP6004 · MCP4725</text>
                  <text x="160" y="210" fill="#cbd5e1" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">ADS1115 · CD4053</text>
                  <text x="160" y="228" fill="#e9d5ff" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">≈ ₹320 BOM</text>
                </g>

                {/* 5. Fluorescence Chamber (Optics) */}
                <g 
                  onClick={() => setActivePartId(5)} 
                  className="cursor-pointer"
                >
                  <rect x="250" y="60" width="160" height="85" rx="6" fill="#1c1917" stroke={activePartId === 5 ? '#ff7a3d' : '#475569'} strokeWidth={activePartId === 5 ? 2.5 : 1} />
                  <text x="330" y="80" fill="#ff7a3d" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">FLUORESCENCE DARK-BOX</text>
                  <circle cx="275" cy="110" r="8" fill="#3b82f6" />
                  <text x="275" y="128" fill="#93c5fd" fontSize="6.5" fontFamily="JetBrains Mono" textAnchor="middle">470nm</text>
                  <circle cx="385" cy="110" r="8" fill="#ea580c" />
                  <text x="385" y="128" fill="#fdba74" fontSize="6.5" fontFamily="JetBrains Mono" textAnchor="middle">BPW34</text>
                  <rect x="310" y="95" width="40" height="30" rx="3" fill="#334155" stroke="#ff7a3d" />
                  <text x="330" y="112" fill="#fff" fontSize="6.5" fontFamily="JetBrains Mono" textAnchor="middle">FILTER</text>
                </g>

                {/* 6. OLED & User Interface */}
                <g 
                  onClick={() => setActivePartId(6)} 
                  className="cursor-pointer"
                >
                  <rect x="250" y="160" width="160" height="85" rx="6" fill="#0b1329" stroke={activePartId === 6 ? '#22d3ee' : '#334155'} strokeWidth={activePartId === 6 ? 2.5 : 1} />
                  <rect x="265" y="172" width="70" height="36" rx="3" fill="#000" stroke="#38bdf8" />
                  <text x="300" y="193" fill="#22d3ee" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">0.96" OLED</text>
                  <circle cx="355" cy="182" r="4" fill="#22c55e" />
                  <circle cx="370" cy="182" r="4" fill="#f59e0b" />
                  <circle cx="385" cy="182" r="4" fill="#ef4444" />
                  <text x="330" y="230" fill="#94a3b8" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle">DS3231 RTC + BUZZER</text>
                </g>

                {/* 8. Power Subsystem */}
                <g 
                  onClick={() => setActivePartId(8)} 
                  className="cursor-pointer"
                >
                  <rect x="90" y="260" width="140" height="45" rx="6" fill="#0f172a" stroke={activePartId === 8 ? '#22c55e' : '#334155'} strokeWidth={activePartId === 8 ? 2 : 1} />
                  <text x="160" y="280" fill="#4ade80" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">18650 LI-ION (2600mAh)</text>
                  <text x="160" y="295" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">TP4056 USB-C + LP2985 LDO</text>
                </g>

                {/* 4. MIP/NIP Strip Slot */}
                <g 
                  onClick={() => setActivePartId(4)} 
                  className="cursor-pointer"
                >
                  <rect x="250" y="260" width="160" height="45" rx="6" fill="#1e1035" stroke={activePartId === 4 ? '#c084fc' : '#475569'} strokeWidth={activePartId === 4 ? 2 : 1} />
                  <text x="330" y="280" fill="#c084fc" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">MIP/NIP STRIP CARRIER</text>
                  <text x="330" y="295" fill="#cbd5e1" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">Edge Connector Interface</text>
                </g>
              </svg>

              <div className="absolute bottom-2 text-center text-[10px] font-mono text-slate-500">
                Click any mechanical or optical subsystem to view component details
              </div>
            </div>
          </GlassPanel>

          {/* Subsystems List & Detail Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {/* Active Part Overview */}
            <GlassPanel variant="cyan" className="p-4 border-cyan-500/30">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
                <span className="font-mono text-xs font-bold text-cyan-400">
                  PART 0{activePart.id} // {activePart.name}
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  {activePart.role}
                </span>
              </div>
              <p className="text-slate-200 text-xs font-sans leading-relaxed">
                {activePart.desc}
              </p>
            </GlassPanel>

            {/* Quick Selector List */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 max-h-[360px] overflow-y-auto">
              {HARDWARE_PARTS.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setActivePartId(part.id)}
                  className={`w-full p-2.5 rounded-lg border font-mono text-xs text-left flex items-center justify-between transition-all cursor-pointer ${
                    activePartId === part.id
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 font-bold'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>0{part.id}. {part.name}</span>
                  <span className="text-[10px] opacity-70">{part.role.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
