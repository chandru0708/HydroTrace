import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { KeyRound, ShieldCheck, ShieldAlert, Binary, Check, X, RotateCcw } from 'lucide-react';

export default function SignedCode() {
  const [testMode, setTestMode] = useState('valid'); // 'valid', 'altered', 'replayed'

  const bitFields = [
    { name: 'DEVICE ID', bits: 16, desc: 'Hardware UID mapped to habitation & GPS', color: 'cyan', example: '0x4F12' },
    { name: 'PFAS TIER', bits: 3, desc: 'Not Detected / Monitor / High', color: 'violet', example: 'Band 2' },
    { name: 'MP TIER', bits: 3, desc: 'Low / Moderate / High MFI', color: 'orange', example: 'Band 1' },
    { name: 'COUNTER', bits: 12, desc: 'Monotonic test count (0–4095)', color: 'emerald', example: '#0417' },
    { name: 'HMAC-SHA256', bits: 26, desc: 'Cryptographic signature digest', color: 'cyan', example: '26 bits' },
  ];

  const codeDisplay = testMode === 'valid' 
    ? '7H4K-9M2X-8B3Q' 
    : testMode === 'altered' 
    ? '7H4K-9M2X-8B3R' 
    : '7H4K-9M2X-8B3Q';

  return (
    <section id="code" className="py-28 relative tech-grid bg-[#040916] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="10"
          category="CRYPTOGRAPHIC TELEMETRY"
          title="A 12-CHARACTER CODE THAT CAN'T BE FAKED"
          subtitle="60 bits packed into Crockford Base32. Designed so that any village worker on a basic ₹1,000 keypad phone can text an unforgeable, authenticated water quality record."
          accent="cyan"
        />

        {/* 60-Bit Bit Packing Visualization */}
        <div className="mb-12">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
            <span>BIT-FIELD PACKING STRUCTURE (60 BITS = 12 CHARS × 5 BITS)</span>
            <span className="text-sky-400 font-bold">CROCKFORD BASE32</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {bitFields.map((field, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-white font-bold">{field.name}</span>
                    <span className="text-cyan-400 font-semibold">{field.bits} BITS</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans leading-snug">
                    {field.desc}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                  Val: <span className="text-slate-300">{field.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Verification Lab */}
        <GlassPanel variant="cyan" className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Code Display & Actions (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase">
                DISPATCHED SMS PAYLOAD // CROCKFORD BASE32
              </div>

              <div className="p-4 rounded-xl bg-black border-2 border-cyan-500/50 flex items-center justify-between shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                <span className="font-mono text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-300 tracking-wider">
                  {codeDisplay}
                </span>
                <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">
                  60 BITS
                </span>
              </div>

              {/* 3 Interactive Testing Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setTestMode('valid')}
                  className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg border font-mono text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'valid'
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  [ SEND VALID CODE ]
                </button>

                <button
                  onClick={() => setTestMode('altered')}
                  className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg border font-mono text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'altered'
                      ? 'bg-rose-950 text-rose-300 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  [ ALTER ONE CHAR ]
                </button>

                <button
                  onClick={() => setTestMode('replayed')}
                  className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg border font-mono text-xs font-bold transition-all cursor-pointer ${
                    testMode === 'replayed'
                      ? 'bg-amber-950 text-amber-300 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  [ RESEND OLD CODE ]
                </button>
              </div>
            </div>

            {/* Right: Cloud Ingestion Verification Engine (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">SERVER VERIFICATION ENGINE</span>
                  <span className="text-cyan-400">HMAC-SHA256 CHECKSUM</span>
                </div>

                {testMode === 'valid' && (
                  <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/50 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span>SIGNATURE VALID · COUNTER NEW · RECORDED</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs">
                      The cryptographic signature matched the server-side device key. Hardware counter #0417 was higher than last recorded #0416. Triage result accepted into national ledger.
                    </p>
                  </div>
                )}

                {testMode === 'altered' && (
                  <div className="p-4 rounded-lg bg-rose-950/40 border border-rose-500/50 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <ShieldAlert className="w-5 h-5 text-rose-400" />
                      <span>SIGNATURE FAILED · FRAUD ALERT</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs">
                      The 26-bit HMAC did not match the decrypted payload. Modifying any character causes immediate signature failure. A random guess succeeds approximately once in 67 million attempts.
                    </p>
                  </div>
                )}

                {testMode === 'replayed' && (
                  <div className="p-4 rounded-lg bg-amber-950/40 border border-amber-500/50 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                      <RotateCcw className="w-5 h-5 text-amber-400" />
                      <span>COUNTER REUSED — REJECTED</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs">
                      Signature verified, but hardware test counter #0417 was already logged on 2026-10-18. Attempted replay of an earlier green code rejected by the server.
                    </p>
                  </div>
                )}

                {/* Key Technical Notes */}
                <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                  <div>
                    <strong className="text-slate-200">Human-Engineered Alphabet: </strong>
                    Crockford Base32 drops <code>I</code>, <code>L</code>, <code>O</code>, <code>U</code> to eliminate keypad user confusion with <code>1</code> and <code>0</code>.
                  </div>
                  <div>
                    <strong className="text-slate-200">Entropy: </strong>
                    A guessed 26-bit signature has a 1 in 67,108,864 probability of passing.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </GlassPanel>

      </div>
    </section>
  );
}
