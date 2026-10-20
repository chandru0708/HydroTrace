import React, { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import SimulatedBadge from '../ui/SimulatedBadge';
import { Play, RotateCcw } from 'lucide-react';

const DEMO_STEPS = [
  { id: 1, label: 'STEP 01: SAMPLE COLLECTED', detail: '250 mL borewell sample loaded in PP syringe jig', oled: ['SAMPLE: 250 mL', 'PP JIG: LOCKED', 'INITIATING FLOW'] },
  { id: 2, label: 'STEP 02: FILTER + WAX PUSH', detail: 'Dual passage through 25mm GF filter & WAX sorbent', oled: ['PUSHING SAMPLE', 'GF: TRAPPING MP', 'WAX: BINDING PFAS'] },
  { id: 3, label: 'STEP 03: BLANK SCAN', detail: '470 nm excitation reads I_blank background scatter', oled: ['BLANK SCAN...', 'λex: 470 nm', 'I_blank: 142 nA'] },
  { id: 4, label: 'STEP 04: NILE RED STAIN', detail: '3 drops in ethanol added; accelerated timer ticks', oled: ['STAINING FILTER', 'NILE RED / EtOH', 'T-MINUS 10:00'] },
  { id: 5, label: 'STEP 05: ELUTION + DILUTION', detail: '0.5 mL ammoniated methanol elutes PFAS into buffer', oled: ['ELUTING WAX...', '0.5 mL MeOH', 'DILUTED IN BUFFER'] },
  { id: 6, label: 'STEP 06: STAINED SCAN + AUDIT PHOTO', detail: 'Photodiode registers MFI; camera snaps 25KB JPEG', oled: ['ORANGE FLUO READ', 'MFI COMPUTED', 'JPEG AUDIT SAVED'] },
  { id: 7, label: 'STEP 07: DPV SCAN', detail: 'DIY potentiostat runs –0.1V to +0.5V on MIP/NIP strip', oled: ['DPV EXCITATION', 'WE1 vs WE2 SCAN', 'PEAK ATTENUATION'] },
  { id: 8, label: 'STEP 08: TIER + SIGNING', detail: 'Firmware maps S_net & computes 26-bit HMAC-SHA256', oled: ['S_net EVALUATED', 'COUNTER #0417', 'HMAC SIGNED ✓'] },
  { id: 9, label: 'STEP 09: SMS SENT', detail: '12-char Crockford Base32 dispatched via 2G network', oled: ['CODE: 7H4K-9M2X', 'SMS DISPATCHING', 'SENT TO 51969 ✓'] },
  { id: 10, label: 'STEP 10: DASHBOARD UPDATED', detail: 'Server verifies signature & updates district map ledger', oled: ['CLOUD RECORDED', 'LEDGER UPDATED', 'TRIAGE COMPLETE'] }
];

export default function LiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0 = idle, 1..10 = running/done
  const [simulateRed, setSimulateRed] = useState(false);
  const [stepLogs, setStepLogs] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isRunning && currentStep < 10) {
      interval = setTimeout(() => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        setStepLogs((prev) => [...prev, DEMO_STEPS[nextStep - 1]]);
      }, 1200);
    } else if (currentStep === 10) {
      setIsRunning(false);
    }
    return () => clearTimeout(interval);
  }, [isRunning, currentStep]);

  const handleStart = () => {
    setCurrentStep(1);
    setStepLogs([DEMO_STEPS[0]]);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setStepLogs([]);
  };

  const activeOledLines = currentStep > 0 ? DEMO_STEPS[currentStep - 1].oled : ['JAL-DRISHTI v1.2', 'STANDBY MODE', 'INSERT SAMPLE', 'PRESS RUN'];

  return (
    <section id="live-demo" className="py-28 relative tech-grid bg-[#040815] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="15"
          category="SIMULATED LIVE DEMONSTRATION"
          title="LIVE FIELD TEST"
          subtitle="Full 10-stage state machine simulation replicating the exact firmware execution, sensor transduction, HMAC signing, and dashboard ingest cycle."
          accent="cyan"
        />

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold uppercase tracking-wider">EXECUTION CONTROLS:</span>
            <button
              disabled={isRunning || currentStep === 10}
              onClick={handleStart}
              className="btn-primary py-2 px-4 text-xs font-mono font-bold cursor-pointer disabled:opacity-40"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{currentStep === 0 ? '▶ RUN LIVE TEST' : 'RESUME TEST'}</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={simulateRed}
                onChange={(e) => setSimulateRed(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 accent-rose-500 cursor-pointer"
              />
              <span className={`font-mono text-xs font-semibold ${simulateRed ? 'text-rose-400' : 'text-slate-400'}`}>
                [ SIMULATE RED HIGH RESULT ]
              </span>
            </label>
            <SimulatedBadge text="SIMULATED DEMONSTRATION DATA" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
            <span>PIPELINE PROGRESS</span>
            <span className="text-cyan-400 font-bold">
              STAGE {currentStep} / 10 ({currentStep * 10}%)
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 transition-all duration-300"
              style={{ width: `${currentStep * 10}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Terminal State Log (7 Cols) */}
          <GlassPanel className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase">
                  FIRMWARE SERIAL EXECUTION LOG
                </span>
                <span className="font-mono text-[11px] text-slate-500">115200 BAUD // UART0</span>
              </div>

              {/* Console Log Area */}
              <div className="p-4 rounded-xl bg-black border border-slate-800/80 font-mono text-xs min-h-[300px] max-h-[360px] overflow-y-auto space-y-2">
                {currentStep === 0 && (
                  <div className="text-slate-500 italic">
                    Instrument idle. Press [ RUN LIVE TEST ] to trigger the analytical state machine...
                  </div>
                )}

                {stepLogs.map((log) => (
                  <div key={log.id} className="text-slate-300 flex items-start gap-2 animate-in fade-in">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <div>
                      <span className="text-white font-bold">{log.label}</span>
                      <div className="text-slate-400 text-[11px]">{log.detail}</div>
                    </div>
                  </div>
                ))}

                {currentStep === 10 && (
                  <div className="p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 font-bold mt-4">
                    [SYSTEM] Triage test cycle finalized successfully.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              *Real-time signal processing running on dual-core ESP32-S3 firmware.
            </div>
          </GlassPanel>

          {/* Right: Synced OLED Mockup & Final Result Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live OLED Mockup */}
            <GlassPanel variant="cyan">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase">
                HARDWARE 0.96" OLED SCREEN
              </span>

              <div className="mt-3 p-4 rounded-xl bg-black border-2 border-cyan-500/40 font-mono text-xs text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] space-y-1">
                <div className="flex justify-between text-[10px] text-yellow-300 font-bold border-b border-yellow-500/30 pb-1">
                  <span>JAL-DRISHTI SCREEN</span>
                  <span>{currentStep === 10 ? 'DONE' : isRunning ? 'BUSY' : 'READY'}</span>
                </div>
                {activeOledLines.map((line, idx) => (
                  <div key={idx} className="font-semibold text-cyan-200">
                    {line}
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Final Outcome Card */}
            {currentStep === 10 && (
              <GlassPanel variant={simulateRed ? 'orange' : 'cyan'} className="animate-in fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                  <span className="font-mono text-xs font-bold text-white uppercase">
                    FINAL TRIAGE DOSSIER
                  </span>
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                    simulateRed ? 'bg-rose-950 text-rose-300 border-rose-500/40' : 'bg-amber-950 text-amber-300 border-amber-500/40'
                  }`}>
                    {simulateRed ? 'RED // HIGH' : 'AMBER // MONITOR'}
                  </span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">SOURCE:</span>
                    <span className="font-bold text-white">HP-12 BOREWELL</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">PFAS TIER:</span>
                    <span className={`font-bold ${simulateRed ? 'text-rose-400' : 'text-amber-400'}`}>
                      {simulateRed ? 'HIGH – SEND TO LAB' : 'DETECTED – MONITOR'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">MICROPLASTICS:</span>
                    <span className={`font-bold ${simulateRed ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {simulateRed ? 'HIGH MFI' : 'LOW MFI'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">SMS CODE:</span>
                    <span className="text-cyan-300 font-bold">7H4K-9M2X-8B3Q</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">SIGNATURE:</span>
                    <span className="text-emerald-400 font-bold">VALID ✓</span>
                  </div>

                  <div className={`mt-3 p-3 rounded-lg border text-xs font-bold ${
                    simulateRed
                      ? 'bg-rose-950/60 border-rose-500/50 text-rose-200'
                      : 'bg-amber-950/60 border-amber-500/50 text-amber-200'
                  }`}>
                    ACTION:{' '}
                    {simulateRed
                      ? 'SAMPLE SENT TO NABL LAB FOR LC-MS/MS CONFIRMATION'
                      : 'RETEST IN 2 WEEKS, BLOCK OFFICER NOTIFIED'}
                  </div>
                </div>
              </GlassPanel>
            )}

            <div className="text-[10px] text-slate-500 font-mono text-center">
              *SIMULATED DEMONSTRATION DATA — NOT A REAL FIELD MEASUREMENT
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
