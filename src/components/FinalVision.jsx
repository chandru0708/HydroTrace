import React from 'react';
import { ArrowUp, Droplet } from 'lucide-react';

export default function FinalVision() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative tech-grid bg-gradient-to-b from-[#030713] to-[#02050E] border-t border-slate-800/80 text-center">
      <div className="container-max">
        
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SIH 2026 // HARDWARE PROJECT IDENTITY</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
              FROM BLIND SPOTS
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                TO EARLY WARNINGS.
              </span>
            </h2>

            <p className="font-mono text-sm sm:text-base md:text-lg text-cyan-300 tracking-widest uppercase pt-2 font-bold">
              COLLECT. CONCENTRATE. SENSE. SIGN. ACT.
            </p>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Jal-Drishti brings PFAS and microplastic screening to the village tap, so laboratories can focus on the sources that need them most.
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-400 space-y-1 max-w-lg mx-auto">
            <div className="text-white font-bold">SMART INDIA HACKATHON 2026 · PS 26252</div>
            <div className="text-cyan-400">MINISTRY OF JAL SHAKTI</div>
            <div>NATIONAL JAL JEEVAN MISSION (NJJM) · DDWS</div>
          </div>

          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="btn-primary"
            >
              <span>EXPLORE THE SYSTEM</span>
              <ArrowUp className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
