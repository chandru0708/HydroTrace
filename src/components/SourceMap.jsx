import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import SimulatedBadge from '../ui/SimulatedBadge';
import { MapPin, Building, ArrowUpRight, Camera, AlertCircle, ShieldAlert, History } from 'lucide-react';

const SOURCES = [
  {
    id: 'HP-12',
    name: 'HP-12 Borewell',
    type: 'Deep Borewell (180m)',
    village: 'Habitation Rampur, Ward 2',
    pfasTier: 'HIGH – SEND TO LAB',
    mpTier: 'HIGH MFI',
    status: 'RED',
    lastTest: 'Today, 14:20 IST',
    testCount: 14,
    labStatus: 'DISPATCHED TO NABL LAB (LC-MS/MS CONFIRMATION QUEUE)',
    coordinates: { x: 220, y: 140 },
    history: ['GREEN', 'GREEN', 'AMBER', 'AMBER', 'RED'],
    photoNote: 'Macro audit photo shows high particle agglomeration ≥ 20µm'
  },
  {
    id: 'OHT-03',
    name: 'OHT-03 Village A',
    type: 'Overhead Storage Reservoir',
    village: 'Gram Panchayat Kalyanpur',
    pfasTier: 'DETECTED – MONITOR',
    mpTier: 'LOW MFI',
    status: 'AMBER',
    lastTest: 'Yesterday, 10:15 IST',
    testCount: 28,
    labStatus: 'LOCAL MONITORING (RETEST SCHEDULED IN 14 DAYS)',
    coordinates: { x: 120, y: 220 },
    history: ['GREEN', 'GREEN', 'AMBER', 'AMBER', 'AMBER'],
    photoNote: 'Filter disc clean; minimal debris, low fluorescence'
  },
  {
    id: 'TANK-07',
    name: 'TANK-07 School',
    type: 'Primary School Piped Tap',
    village: 'Govt Upper Primary School',
    pfasTier: 'NOT DETECTED',
    mpTier: 'LOW MFI',
    status: 'GREEN',
    lastTest: '3 days ago',
    testCount: 42,
    labStatus: 'ROUTINE QUARTERLY RETEST',
    coordinates: { x: 340, y: 190 },
    history: ['GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN'],
    photoNote: 'Optically clear disc; 0 blobs detected over 20µm'
  },
  {
    id: 'WELL-21',
    name: 'WELL-21 Ward 4',
    type: 'Community Open Well',
    village: 'Bishunpur Ward 4',
    pfasTier: 'NOT DETECTED',
    mpTier: 'LOW MFI',
    status: 'GREEN',
    lastTest: '5 days ago',
    testCount: 19,
    labStatus: 'ROUTINE QUARTERLY RETEST',
    coordinates: { x: 420, y: 110 },
    history: ['GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN'],
    photoNote: 'Normal background scatter; MFI within baseline'
  },
  {
    id: 'HP-05',
    name: 'HP-05 Near Landfill',
    type: 'Handpump (30m shallow)',
    village: 'Industrial Outskirts Sector 9',
    pfasTier: 'DETECTED – MONITOR',
    mpTier: 'MODERATE MFI',
    status: 'AMBER',
    lastTest: '1 week ago',
    testCount: 31,
    labStatus: 'BLOCK OFFICER ALERT LOGGED (RESURVEILLANCE)',
    coordinates: { x: 170, y: 80 },
    history: ['AMBER', 'AMBER', 'GREEN', 'AMBER', 'AMBER'],
    photoNote: 'Diffuse fluorescence; moderate microplastic tagging'
  }
];

export default function SourceMap() {
  const [selectedSourceId, setSelectedSourceId] = useState('HP-12');
  const selectedSource = SOURCES.find((s) => s.id === selectedSourceId) || SOURCES[0];

  return (
    <section id="map" className="py-28 relative tech-grid bg-[#060D1E] border-t border-slate-800/80">
      <div className="container-max">
        
        <SectionHeader
          number="12"
          category="DISTRICT SURVEILLANCE"
          title="FROM ONE TEST TO A DISTRICT-WIDE PICTURE"
          subtitle="Every authenticated test feeds into a dynamic district surveillance topology. Suspicious Red flagged sources immediately activate automated routing to regional NABL laboratories."
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Futuristic Stylised Vector Map (7 Cols) */}
          <GlassPanel variant="cyan" className="lg:col-span-7 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-3">
              <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                DISTRICT SURVEILLANCE TOPOLOGY · SECTOR 04
              </span>
              <SimulatedBadge text="SIMULATED MONITORING DATA" />
            </div>

            {/* Futuristic SVG Map with Pulsing Nodes & Laboratory Relay Line */}
            <div className="relative w-full aspect-[16/11] bg-[#02050E] rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 500 320" className="w-full h-full">
                {/* Tech grid & sector boundaries */}
                <defs>
                  <pattern id="mapSubGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="25" y2="0" stroke="rgba(34,211,238,0.05)" strokeWidth="0.5" />
                    <line x1="0" y1="0" x2="0" y2="25" stroke="rgba(34,211,238,0.05)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="500" height="320" fill="url(#mapSubGrid)" />

                {/* Stylized watershed / river boundary */}
                <path 
                  d="M 20 80 Q 150 160, 260 130 T 480 220" 
                  stroke="rgba(34, 211, 238, 0.15)" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round" 
                />
                <text x="350" y="240" fill="#0e7490" fontSize="8" fontFamily="JetBrains Mono">RIVER BASIN DRAINAGE</text>

                {/* District NABL Central Laboratory Node */}
                <g transform="translate(420, 260)">
                  <rect x="-45" y="-20" width="90" height="40" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
                  <text x="0" y="-3" fill="#c7d2fe" fontSize="8.5" fontFamily="Space Grotesk" textAnchor="middle" fontWeight="bold">NABL LAB</text>
                  <text x="0" y="10" fill="#a5b4fc" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">LC-MS/MS HUB</text>
                  <circle cx="0" cy="-20" r="3" fill="#818cf8" className="animate-ping" />
                </g>

                {/* Animated Relay line from RED node (HP-12) to NABL Lab */}
                <path 
                  d="M 220 140 C 260 200, 350 240, 420 260" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  fill="none" 
                />
                <text x="290" y="195" fill="#f87171" fontSize="7.5" fontFamily="JetBrains Mono" fontWeight="bold">
                  AUTO LAB ESCALATION ROUTE
                </text>

                {/* The 5 Sources on the Map */}
                {SOURCES.map((src) => {
                  const isSelected = selectedSourceId === src.id;
                  const nodeColor = 
                    src.status === 'RED' ? '#ef4444' :
                    src.status === 'AMBER' ? '#f59e0b' : '#22c55e';

                  return (
                    <g 
                      key={src.id}
                      onClick={() => setSelectedSourceId(src.id)}
                      className="cursor-pointer group"
                    >
                      {/* Outer pulse circle */}
                      <circle 
                        cx={src.coordinates.x} 
                        cy={src.coordinates.y} 
                        r={isSelected ? 16 : 10} 
                        fill={nodeColor} 
                        opacity={src.status === 'RED' ? 0.35 : 0.2}
                        className={src.status === 'RED' ? 'animate-ping' : ''}
                      />

                      {/* Center Node */}
                      <circle 
                        cx={src.coordinates.x} 
                        cy={src.coordinates.y} 
                        r={isSelected ? 7 : 5} 
                        fill={nodeColor} 
                        stroke="#ffffff" 
                        strokeWidth={isSelected ? 2 : 1}
                      />

                      {/* Source ID Text Tag */}
                      <text 
                        x={src.coordinates.x} 
                        y={src.coordinates.y - 12} 
                        fill={isSelected ? '#22d3ee' : '#94a3b8'} 
                        fontSize="8.5" 
                        fontFamily="JetBrains Mono" 
                        textAnchor="middle" 
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {src.id}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>CLICK SOURCE NODE TO LOAD DOSSIER</span>
                <span className="text-rose-400 font-bold">1 LAB DISPATCH QUEUED</span>
              </div>
            </div>
          </GlassPanel>

          {/* Source Intelligence Dossier Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassPanel variant={selectedSource.status === 'RED' ? 'orange' : 'cyan'}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  SOURCE DOSSIER // {selectedSource.id}
                </span>
                <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded border ${
                  selectedSource.status === 'RED' ? 'bg-rose-950 text-rose-300 border-rose-500/40' :
                  selectedSource.status === 'AMBER' ? 'bg-amber-950 text-amber-300 border-amber-500/40' :
                  'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                }`}>
                  {selectedSource.status}
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs mt-3">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white font-sans">
                    {selectedSource.name}
                  </h3>
                  <div className="text-slate-400 text-xs font-sans mt-0.5">
                    {selectedSource.village} · <span className="text-cyan-400">{selectedSource.type}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">LATEST PFAS TIER</div>
                    <div className="font-bold text-white text-xs mt-0.5">{selectedSource.pfasTier}</div>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">LATEST MFI TIER</div>
                    <div className="font-bold text-white text-xs mt-0.5">{selectedSource.mpTier}</div>
                  </div>
                </div>

                {/* Tier History Timeline Dots */}
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
                    <span>HISTORICAL TRIAGE TIMELINE (PAST 5 TESTS)</span>
                    <History className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedSource.history.map((hTier, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <span className={`w-3 h-3 rounded-full ${
                          hTier === 'RED' ? 'bg-rose-500 shadow-[0_0_8px_#ef4444]' :
                          hTier === 'AMBER' ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' :
                          'bg-emerald-400 shadow-[0_0_8px_#22c55e]'
                        }`} />
                        <span className="text-[8px] text-slate-500">T{idx+1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory Action & Lab Request Status */}
                <div className={`p-3 rounded-lg border text-xs font-mono ${
                  selectedSource.status === 'RED' 
                    ? 'bg-rose-950/40 border-rose-500/50 text-rose-300' 
                    : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-200'
                }`}>
                  <div className="text-[10px] uppercase font-bold text-slate-400">SURVEILLANCE ACTION:</div>
                  <div className="mt-1 font-bold">{selectedSource.labStatus}</div>
                </div>

                {/* Illustrative Audit Photo Thumbnail */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 text-cyan-400">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-sans text-slate-300">
                    <div className="font-mono text-cyan-400 font-bold text-[10px] uppercase">
                      Audit Image Proof (25 KB JPEG)
                    </div>
                    <div className="text-slate-400 text-[10px] mt-0.5">
                      {selectedSource.photoNote}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

        </div>

      </div>
    </section>
  );
}
