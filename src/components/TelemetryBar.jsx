import React from 'react';
import TelemetryChip from '../ui/TelemetryChip';

export default function TelemetryBar() {
  return (
    <div className="border-y border-slate-800/80 bg-[#060D1E]/90 backdrop-blur-md py-2 px-4 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-mono min-w-[850px]">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold tracking-widest text-[11px] uppercase">
            TELEMETRY // LIVE
          </span>
          <span className="text-slate-600">|</span>
          <TelemetryChip label="SYSTEM" status="ONLINE" variant="green" />
          <TelemetryChip label="POTENTIOSTAT" status="READY" variant="violet" />
          <TelemetryChip label="OPTICS" status="DARK-BOX SEALED" variant="orange" />
          <TelemetryChip label="STRIP" status="MIP/NIP DETECTED" variant="cyan" />
        </div>

        <div className="flex items-center gap-3">
          <TelemetryChip label="CALIBRATION" status="LOADED" variant="cyan" />
          <TelemetryChip label="STORAGE" status="LOCAL" variant="mono" />
          <TelemetryChip label="SIGNING KEY" status="PRESENT" variant="green" />
          <TelemetryChip label="SYNC" status="WAITING" variant="amber" pulse={false} />
        </div>
      </div>
    </div>
  );
}
