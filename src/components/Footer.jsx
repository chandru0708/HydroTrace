import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-[#01040A] border-t border-slate-800 text-xs font-mono text-slate-400">
      <div className="container-max space-y-8">
        
        {/* Top: Project Info & Badges */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Jal-Drishti
              </span>
              <span className="text-cyan-400 font-normal text-sm">जल-दृष्टि</span>
            </div>
            <p className="text-slate-400 font-sans text-xs max-w-xl">
              "See the Invisible. Screen Every Source. Act Before Exposure."
            </p>
          </div>

          {/* Validation Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[11px] font-bold">
              PROTOTYPE CONCEPT
            </span>
            <span className="px-3 py-1 rounded bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              LABORATORY VALIDATION REQUIRED
            </span>
          </div>
        </div>

        {/* Hackathon Problem Statement & Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-1 font-sans">
            <div className="font-mono text-cyan-400 font-bold text-xs uppercase">
              SMART INDIA HACKATHON 2026 // PS 26252
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              "Development of Field Test Kits for Detection and Monitoring of Emerging Contaminants (PFAS, Microplastics, etc.) in Drinking Water Sources and Water Supply Systems"
            </p>
            <div className="text-[11px] text-slate-500 font-mono pt-1">
              Category: Hardware · Theme: Clean & Green Technology
            </div>
          </div>

          <div className="space-y-1 font-sans">
            <div className="font-mono text-purple-400 font-bold text-xs uppercase">
              ORGANIZATION DETAILS
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Ministry of Jal Shakti (MoJS) · National Jal Jeevan Mission (NJJM) · Department of Drinking Water & Sanitation (DDWS)
            </p>
            <div className="text-[11px] text-slate-500 font-mono pt-1">
              Domain: Drinking-water safety / Rural water-quality surveillance
            </div>
          </div>
        </div>

        {/* Technical Stack & Team Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <strong className="text-slate-400">Core Technologies: </strong>
            WAX pre-concentration · MIP/NIP electrochemistry · DIY potentiostat · Nile Red fluorescence · Signed SMS reporting · Offline-first
          </div>

          <div className="shrink-0 text-slate-400">
            Team: <span className="text-cyan-300 font-bold">[TEAM NAME]</span> · Team ID: <span className="text-cyan-300 font-bold">[TEAM ID]</span>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-4 text-center text-[10px] text-slate-600">
          Jal-Drishti Project © 2026. Designed for Smart India Hackathon 2026. Screening triage tool — red results confirmed by NABL laboratories.
        </div>

      </div>
    </footer>
  );
}
