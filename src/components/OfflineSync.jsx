import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import { Wifi, WifiOff, Smartphone, Monitor, Database, Send, CheckCircle, Radio } from 'lucide-react';

export default function OfflineSync() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <section id="reporting" className="py-28 relative tech-grid bg-[#050A19] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="11"
          category="OFFLINE-FIRST ARCHITECTURE"
          title="BUILT FOR VILLAGES — NOT FOR THE CLOUD"
          subtitle="Continuous internet in remote habitations is a luxury, not a guarantee. Jal-Drishti's test and recording pipeline is 100% offline-first across three zero-app reporting lanes."
          accent="cyan"
        />

        {/* Connectivity Mode Simulator Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Radio className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold uppercase">NETWORK STATE SIMULATOR:</span>
            <span className={`px-2.5 py-0.5 rounded font-bold ${
              isOnline ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-rose-950 text-rose-300 border border-rose-500/30'
            }`}>
              {isOnline ? 'CELLULAR / CLOUD CONNECTED' : 'DEEP RURAL / ZERO SIGNAL (OFFLINE)'}
            </span>
          </div>

          <button
            onClick={() => setIsOnline(!isOnline)}
            className="px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 font-bold transition-all cursor-pointer"
          >
            TOGGLE NETWORK STATE
          </button>
        </div>

        {/* Three Dedicated Reporting Lanes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* LANE 1: NO PHONE */}
          <GlassPanel className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/20">
                  LANE 01
                </span>
                <span className="font-mono text-[10px] text-slate-400">STANDALONE HARDWARE</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2">
                NO PHONE REQUIRED
              </h3>

              <p className="text-slate-300 text-xs font-sans leading-relaxed mb-6">
                Tester reads the triage result directly on the high-contrast 0.96" OLED screen. Traffic light LEDs and buzzer announce the verdict. Full data record is safely stored in local SPI flash until next physical sync at the block laboratory.
              </p>

              {/* Graphic element */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-[10px] text-slate-500">DEVICE STORAGE BUFFER</div>
                <div className="text-cyan-300 font-bold">128 TEST RECORDS QUEUED</div>
                <div className="text-[10px] text-slate-400">Non-volatile SPI Flash Memory</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-[11px] text-slate-400">
              Zero dependency on external hardware.
            </div>
          </GlassPanel>

          {/* LANE 2: KEYPAD PHONE */}
          <GlassPanel variant="cyan" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40">
                  LANE 02
                </span>
                <span className="font-mono text-[10px] text-cyan-400">UNIVERSAL 2G SMS</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2">
                ANY KEYPAD PHONE (SMS)
              </h3>

              <p className="text-slate-300 text-xs font-sans leading-relaxed mb-6">
                Worker transcribes the 12-character Crockford Base32 code into a basic SMS sent to a designated block toll-free number or hackathon gateway phone running an SMS-to-webhook forwarder app.
              </p>

              {/* Graphic element */}
              <div className="p-3.5 rounded-lg bg-black border border-cyan-500/30 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>OUTGOING SMS: TO 51969</span>
                  <span className="text-cyan-400">2G CELL</span>
                </div>
                <div className="text-white font-bold tracking-wider">
                  "7H4K-9M2X-8B3Q"
                </div>
                <div className="text-[10px] text-emerald-400">✓ DELIVERED TO GATEWAY</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-cyan-500/20 font-mono text-[11px] text-cyan-300">
              Works anywhere 2G GSM cellular voice/text exists.
            </div>
          </GlassPanel>

          {/* LANE 3: ANY SMARTPHONE BROWSER */}
          <GlassPanel className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-purple-400 px-2 py-0.5 rounded bg-purple-950 border border-purple-500/20">
                  LANE 03
                </span>
                <span className="font-mono text-[10px] text-slate-400">ZERO APP INSTALL</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2">
                BROWSER CAPTIVE PORTAL
              </h3>

              <p className="text-slate-300 text-xs font-sans leading-relaxed mb-6">
                ESP32-S3 broadcasts a local Wi-Fi hotspot (`JalDrishti-AP`). Connecting on any mobile browser immediately opens a lightweight web app without installing anything. Syncs full telemetry + 25KB audit photo when internet returns.
              </p>

              {/* Graphic element */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>HOTSPOT: JalDrishti-AP</span>
                  <span className="text-purple-400">CAPTIVE</span>
                </div>
                <div className="text-white font-bold">192.168.4.1 / SYNC</div>
                <div className={`text-[10px] font-bold ${isOnline ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {isOnline ? 'CLOUD SYNC ACTIVE' : 'RECORDS QUEUED LOCALLY'}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-[11px] text-slate-400">
              Captive portal serves full audit JPEG photos.
            </div>
          </GlassPanel>

        </div>

        {/* Offline Queue State Visualizer */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            {isOnline ? (
              <Wifi className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <WifiOff className="w-5 h-5 text-amber-400 shrink-0" />
            )}
            <div>
              <span className="text-white font-bold">TELEMETRY DISPATCH QUEUE:</span>{' '}
              <span className="text-slate-300">
                {isOnline
                  ? 'All local buffer records synced with central WQMIS server.'
                  : '4 records + 2 audit photos held safely in memory until connectivity returns.'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
            <span className={isOnline ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {isOnline ? 'PIPELINE CONNECTED' : 'BUFFERING LOCALLY'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
