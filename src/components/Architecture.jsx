import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Network, Database, Shield, Cpu, Activity, Camera, ArrowDown, ArrowRight, Layers, Smartphone, Server } from 'lucide-react';

const ARCH_NODES = {
  sample: {
    title: '250 mL Drinking Water Sample',
    category: 'Fluidic Inlet',
    component: 'Polypropylene Sampling Bottle',
    purpose: 'Representative field sample collected from village tap, school storage tank, or borewell.',
    parameter: 'Volume: 250 mL ± 5 mL, Zero PTFE contamination'
  },
  filter: {
    title: '25 mm Glass-Fibre Filter',
    category: 'Mechanical Separation',
    component: 'GF/A 1.6 µm membrane in PP holder',
    purpose: 'Traps microplastic particles ≥ 20 µm while allowing dissolved organic matter and PFAS to pass.',
    parameter: 'Diameter: 25 mm, Housing pressure rated to 3 bar'
  },
  wax: {
    title: 'WAX Cartridge (Weak Anion Exchange)',
    category: 'Solid Phase Extraction',
    component: 'Hand-packed polymeric weak anion sorbent',
    purpose: 'Retains anionic perfluoroalkyl substances (PFOA/PFOS) through ionic & hydrophobic interaction.',
    parameter: 'Eluent: 0.5 mL ammoniated methanol (40–60× net recovery)'
  },
  optics: {
    title: 'Fluorescence Chamber (Optics)',
    category: 'Photometric Transduction',
    component: '470 nm Blue LED + BPW34 + 550 nm Long-Pass',
    purpose: 'Measures blank vs Nile Red stained fluorescence emission to derive net MFI.',
    parameter: 'λex: 470 nm, λem: > 550 nm, Subtraction: I_stain − I_blank'
  },
  camera: {
    title: 'ESP32-S3 Macro Camera',
    category: 'Audit Imaging',
    component: 'OV2640 / OV5640 with macro optic attachment',
    purpose: 'Captures filter audit photograph under blue illumination; firmware counts blobs ≥ 20 µm.',
    parameter: '25 KB compressed JPEG, embedded tamper-evident hash'
  },
  strip: {
    title: 'MIP / NIP Screen-Printed Strip',
    category: 'Electrochemical Transduction',
    component: 'Screen-printed carbon with WE1 (MIP) & WE2 (NIP)',
    purpose: 'Provides molecularly imprinted cavity binding for differential electron transfer blockage.',
    parameter: 'Polymer: poly(o-phenylenediamine), Probe: 5 mM Ferricyanide'
  },
  potentiostat: {
    title: 'DIY Potentiostat Board',
    category: 'Analog Signal Front-End',
    component: 'MCP6004 + MCP4725 + ADS1115 + CD4053',
    purpose: 'Applies DPV staircase excitation waveform and digitizes resulting nanoamp peaks.',
    parameter: 'Parts cost: ≈ ₹320, Step: 5 mV, Pulse: 50 mV, 50 ms'
  },
  esp32: {
    title: 'ESP32-S3 Microcontroller',
    category: 'Processing & Crypto Core',
    component: 'Dual-Core Xtensa LX7 + 8MB PSRAM',
    purpose: 'Computes S_net & MFI, increments monotonic counter, and calculates HMAC-SHA256 signature.',
    parameter: 'Monotonic Hardware Counter, Cryptographic Secret in eFuse'
  },
  reporting: {
    title: 'Universal Tri-Modal Reporting',
    category: 'Local Output Interface',
    component: '0.96" OLED + Keypad SMS + Wi-Fi Captive Portal',
    purpose: 'Presents result locally without requiring an internet connection or smartphone app.',
    parameter: '60-bit Crockford Base32 SMS code (e.g., 7H4K-9M2X-8B3Q)'
  },
  server: {
    title: 'NJJM / WQMIS Dashboard Gateway',
    category: 'Cloud Ingestion & GIS',
    component: 'SMS Webhook Gateway / HTTPS Ingestion API',
    purpose: 'Verifies per-device HMAC signature and counter validity; plots habitation water status.',
    parameter: 'Rejects replayed counters; auto-alerts block/district officers'
  },
  lab: {
    title: 'NABL Referral Laboratory',
    category: 'Gold-Standard Confirmation',
    component: 'LC-MS/MS & µ-FTIR Reference Facilities',
    purpose: 'Receives only suspect Red flagged water sources for regulatory confirmation.',
    parameter: 'Confirmatory quantification down to sub-ppt levels'
  }
};

export default function Architecture() {
  const [activeNodeKey, setActiveNodeKey] = useState('esp32');
  const activeNode = ARCH_NODES[activeNodeKey];

  return (
    <section id="architecture" className="py-28 relative tech-grid bg-[#050B18] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="06"
          category="SYSTEM ARCHITECTURE"
          title="HOW JAL-DRISHTI WORKS"
          subtitle="Complete signal, fluidic, cryptographic and surveillance pipeline. Interactive engineering flow diagram from raw sample push to NABL laboratory routing."
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Flow Block Diagram (8 Cols) */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Top Level: Fluidic Split */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-mono text-sky-400 mb-3 font-bold tracking-wider">
                STAGE I · FLUIDIC INTAKE & SEPARATION
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setActiveNodeKey('sample')}
                  className={`w-full sm:w-auto flex-1 p-3.5 rounded-xl border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'sample' ? 'bg-sky-950/80 border-sky-400 text-sky-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">INPUT</div>
                  <div className="font-bold">250 mL Sample</div>
                </button>

                <span className="text-slate-600 font-mono text-sm hidden sm:inline">→</span>

                <button
                  onClick={() => setActiveNodeKey('filter')}
                  className={`w-full sm:w-auto flex-1 p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'filter' ? 'bg-orange-950 border-orange-400 text-orange-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-[10px] text-orange-400">MICROPLASTICS</div>
                  <div className="font-bold">25mm Filter Disc</div>
                </button>

                <span className="text-slate-600 font-mono text-sm hidden sm:inline">→</span>

                <button
                  onClick={() => setActiveNodeKey('wax')}
                  className={`w-full sm:w-auto flex-1 p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'wax' ? 'bg-purple-950 border-purple-400 text-purple-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-[10px] text-purple-400">PFAS TRAP</div>
                  <div className="font-bold">WAX Cartridge</div>
                </button>
              </div>
            </div>

            {/* Stage 2: Dual Analytical Engines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Optics Branch */}
              <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/30 space-y-3">
                <div className="text-xs font-mono text-orange-400 font-bold">OPTICS TRANSDUCTION</div>
                <button
                  onClick={() => setActiveNodeKey('optics')}
                  className={`w-full p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'optics' ? 'bg-orange-950 border-orange-400 text-orange-200' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">PHOTODIODE STACK</div>
                  <div className="font-bold text-orange-300">470 nm LED + BPW34 → MFI</div>
                </button>

                <button
                  onClick={() => setActiveNodeKey('camera')}
                  className={`w-full p-2.5 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'camera' ? 'bg-orange-950 border-orange-400 text-orange-200' : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">AUDIT PROOF</div>
                  <div className="font-bold text-slate-200">ESP32-S3 Macro Camera (25KB JPEG)</div>
                </button>
              </div>

              {/* Electrochemistry Branch */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-3">
                <div className="text-xs font-mono text-purple-400 font-bold">ELECTROCHEM TRANSDUCTION</div>
                <button
                  onClick={() => setActiveNodeKey('strip')}
                  className={`w-full p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'strip' ? 'bg-purple-950 border-purple-400 text-purple-200' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">TRANSDUCER STRIP</div>
                  <div className="font-bold text-purple-300">MIP / NIP Differential Strip</div>
                </button>

                <button
                  onClick={() => setActiveNodeKey('potentiostat')}
                  className={`w-full p-2.5 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                    activeNodeKey === 'potentiostat' ? 'bg-purple-950 border-purple-400 text-purple-200' : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">FRONT-END AFE</div>
                  <div className="font-bold text-slate-200">DIY Potentiostat (₹320) → S_net</div>
                </button>
              </div>
            </div>

            {/* Stage 3: Hardware Brain, Cryptographic Signing & Monotonic Counter */}
            <div className="p-4 rounded-xl bg-[#030712] border border-cyan-500/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">STAGE 3: ESP32-S3 BRAIN + HMAC SIGNING ENGINE</span>
                <span className="font-mono text-[10px] text-emerald-400">CRYPTO SECURED</span>
              </div>
              <button
                onClick={() => setActiveNodeKey('esp32')}
                className={`w-full p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                  activeNodeKey === 'esp32' ? 'bg-cyan-950 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400">CONTROLLER & SECURITY</div>
                    <div className="font-bold text-white text-sm">ESP32-S3 Compute Core</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">DS3231 RTC</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">DEVICE ID</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-900 text-cyan-300 text-[10px]">HMAC-SHA256</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Stage 4: Universal Reporting & Server Routing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setActiveNodeKey('reporting')}
                className={`p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                  activeNodeKey === 'reporting' ? 'bg-cyan-950 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-[10px] text-cyan-400">OUTPUT</div>
                <div className="font-bold">OLED / SMS / Portal</div>
              </button>

              <button
                onClick={() => setActiveNodeKey('server')}
                className={`p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                  activeNodeKey === 'server' ? 'bg-cyan-950 border-cyan-400 text-cyan-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-[10px] text-slate-400">CLOUD GATEWAY</div>
                <div className="font-bold">WQMIS / Dashboard</div>
              </button>

              <button
                onClick={() => setActiveNodeKey('lab')}
                className={`p-3 rounded-lg border font-mono text-xs text-left cursor-pointer transition-all ${
                  activeNodeKey === 'lab' ? 'bg-rose-950 border-rose-400 text-rose-200' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-[10px] text-rose-400">RED TRIGGER</div>
                <div className="font-bold">NABL Lab LC-MS/MS</div>
              </button>
            </div>

          </div>

          {/* Interactive Inspection Panel (4 Cols) */}
          <div className="lg:col-span-4">
            <GlassPanel variant="cyan" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-4">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      NODE INSPECTION
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase">
                    {activeNode.category}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {activeNode.title}
                </h3>

                <div className="space-y-4 font-mono text-xs mt-4">
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Hardware / Chemistry Spec</div>
                    <div className="text-cyan-300 font-semibold mt-0.5">{activeNode.component}</div>
                  </div>

                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Functional Role</div>
                    <p className="text-slate-300 font-sans text-xs mt-1 leading-relaxed">
                      {activeNode.purpose}
                    </p>
                  </div>

                  <div className="p-3 rounded bg-cyan-950/30 border border-cyan-500/30">
                    <div className="text-[10px] text-cyan-400 uppercase font-bold">Key Engineering Parameter</div>
                    <div className="text-slate-200 mt-0.5 font-semibold">{activeNode.parameter}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400 text-center">
                Click any architecture block to inspect technical specifications.
              </div>
            </GlassPanel>
          </div>

        </div>

      </div>
    </section>
  );
}
