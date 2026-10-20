import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import SimulatedBadge from '../ui/SimulatedBadge';
import { CheckCircle2, XCircle, ShieldAlert, AlertTriangle, RefreshCw } from 'lucide-react';

const VALIDITY_CHECKS = [
  { id: 'blank', label: 'BLANK SCAN RECORDED BEFORE STAINING', rule: 'I_blank photodiode read within 5 min of filter loading', valid: true },
  { id: 'stain', label: 'STAIN INCUBATION TIME ≥ 10 MIN', rule: 'Hardware timer enforces minimum 600 s contact time', valid: true },
  { id: 'baseline', label: 'STRIP BASELINE CURRENT IN RANGE', rule: 'ΔI0 peak current between 0.8 µA and 15 µA in buffer', valid: true },
  { id: 'nip', label: 'NIP REFERENCE RESPONSE IN RANGE', rule: 'Non-imprinted control electrode shows expected matrix background', valid: true },
  { id: 'incubation', label: 'PFAS INCUBATION TIME COMPLETE', rule: 'Droplet contact on strip ≥ 300 s prior to DPV staircase', valid: true },
  { id: 'rail', label: 'BATTERY / ANALOG RAIL STABLE', rule: 'LP2985 3.3V rail ripple < 5 mV; Battery voltage > 3.4V', valid: true },
  { id: 'photo', label: 'AUDIT PHOTO CAPTURED', rule: 'ESP32-S3 camera registers valid JPEG ≥ 15 KB under blue illumination', valid: true },
  { id: 'counter', label: 'COUNTER INCREMENTED + CODE SIGNED', rule: 'Monotonic eFuse counter +1; HMAC-SHA256 signature calculated', valid: true }
];

export default function TestValidity() {
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [failingCheckId, setFailingCheckId] = useState('stain');

  return (
    <section id="validity" className="py-28 relative tech-grid bg-[#050C1D] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="09"
          category="HARDWARE INTEGRITY"
          title="NOT EVERY READING IS A VALID TEST"
          subtitle="A field instrument must guard against faulty operation. The Jal-Drishti firmware executes strict pre-flight gating checks before issuing a signed result code. If any condition fails, the result is withheld."
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Checklist (7 Cols) */}
          <GlassPanel className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                PRE-FLIGHT FIRMWARE INTEGRITY PROTOCOL
              </span>
              <SimulatedBadge text="DESIGN-LEVEL CHECKS" />
            </div>

            <div className="space-y-2.5">
              {VALIDITY_CHECKS.map((check) => {
                const isFailing = simulateFailure && check.id === failingCheckId;
                return (
                  <div
                    key={check.id}
                    className={`p-3 rounded-lg border flex items-start justify-between gap-3 font-mono transition-all ${
                      isFailing 
                        ? 'bg-rose-950/40 border-rose-500/50 text-rose-300' 
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isFailing ? (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className={`text-xs font-bold ${isFailing ? 'text-rose-200' : 'text-white'}`}>
                          {check.label}
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                          {check.rule}
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isFailing ? 'bg-rose-950 text-rose-300 border border-rose-500/40' : 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {isFailing ? 'FAILED' : 'PASS'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Test Simulation Controls */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">TEST BEHAVIOR SIMULATOR:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSimulateFailure(false)}
                  className={`px-3 py-1 text-xs font-mono rounded border font-semibold cursor-pointer ${
                    !simulateFailure ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  ALL CHECKS PASS
                </button>
                <button
                  onClick={() => {
                    setSimulateFailure(true);
                    setFailingCheckId('stain');
                  }}
                  className={`px-3 py-1 text-xs font-mono rounded border font-semibold cursor-pointer ${
                    simulateFailure ? 'bg-rose-950 text-rose-300 border-rose-500/50' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  SIMULATE PREMATURE SCAN (FAIL)
                </button>
              </div>
            </div>
          </GlassPanel>

          {/* Right: Firmware Gating Verdict (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassPanel variant={simulateFailure ? 'orange' : 'cyan'}>
              <span className="font-mono text-xs font-bold uppercase text-slate-400">
                FIRMWARE VERDICT & CODE EMISSION
              </span>

              {simulateFailure ? (
                <div className="mt-4 p-5 rounded-xl bg-rose-950/30 border border-rose-500/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-rose-900/60 border border-rose-500/60 flex items-center justify-center mx-auto text-rose-400">
                    <ShieldAlert className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">
                    REPEAT TEST REQUIRED
                  </h4>
                  <div className="font-mono text-xs text-rose-300 bg-rose-950/60 p-2.5 rounded border border-rose-500/30">
                    REASON: STAIN TIME &lt; 10 MIN (ONLY 3 MIN RECORDED)
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    The firmware withheld the HMAC code. A flawed test cannot enter the national water ledger or create false triage records.
                  </p>
                </div>
              ) : (
                <div className="mt-4 p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">
                    VALID TEST // CODE AUTHORIZED
                  </h4>
                  <div className="font-mono text-sm text-cyan-300 font-bold bg-cyan-950/60 p-2.5 rounded border border-cyan-500/40">
                    7H4K-9M2X-8B3Q
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    All 8 hardware checks passed. Counter incremented to #0417 and HMAC-SHA256 signature successfully verified.
                  </p>
                </div>
              )}
            </GlassPanel>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
              <div className="text-white font-bold text-[11px] uppercase">Gating Defense Criteria:</div>
              <div>• Blank Scan Missing → Incalculable background scatter</div>
              <div>• Stain Time Too Short → Incomplete fluorophore partition</div>
              <div>• Strip Baseline Out of Range → Expired / broken electrode</div>
              <div>• Low Battery (&lt; 3.4V) → Potential DAC waveform sag</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
