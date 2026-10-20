import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Droplets } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'problem', label: '01 PROBLEM' },
  { id: 'solution', label: '02 SOLUTION' },
  { id: 'innovations', label: '03 INNOVATION' },
  { id: 'pfas', label: '04 PFAS' },
  { id: 'microplastics', label: '05 MICROPLASTICS' },
  { id: 'reporting', label: '06 REPORTING' },
  { id: 'prototype', label: '07 PROTOTYPE' },
  { id: 'impact', label: '08 IMPACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('problem');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setScrolled(currentScroll > 40);

      // Determine active section
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#050B18]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.6)]' 
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo with Stylised Eye + Droplet */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-950/40 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
              {/* SVG Eye whose iris is a water droplet */}
              <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                {/* Sclera / eye contour */}
                <path 
                  d="M4 20C9 12 15 8 20 8C25 8 31 12 36 20C31 28 25 32 20 32C15 32 9 28 4 20Z" 
                  stroke="#22D3EE" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                {/* Water droplet iris */}
                <path 
                  d="M20 11C17.5 15.5 15.5 18 15.5 21C15.5 23.4853 17.5147 25.5 20 25.5C22.4853 25.5 24.5 23.4853 24.5 21C24.5 18 22.5 15.5 20 11Z" 
                  fill="#8B5CF6" 
                />
                {/* Microplastic fluorescent pupil */}
                <circle cx="20" cy="21.5" r="2.2" fill="#FF7A3D" />
                <circle cx="21" cy="20.5" r="0.8" fill="#FFFFFF" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
                  Jal-Drishti
                  <span className="text-cyan-400 font-normal text-xs font-mono">जल-दृष्टि</span>
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                EMERGING CONTAMINANT SCREENING
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action & Field Mode Status */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FIELD MODE</span>
            </div>

            <button
              onClick={() => scrollToSection('live-demo')}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/50 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 font-mono text-xs font-semibold tracking-wide transition-all shadow-[0_0_12px_rgba(34,211,238,0.25)] cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>RUN LIVE TEST</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#050B18]/98 backdrop-blur-xl border-b border-cyan-500/20 p-6 flex flex-col gap-3 lg:hidden overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FIELD MODE ACTIVE</span>
            </div>
            <span className="font-mono text-xs text-slate-500">PS 26252</span>
          </div>

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-3 px-4 rounded-lg font-mono text-sm tracking-wider text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/30 border border-transparent hover:border-cyan-500/20 transition-all flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-slate-600">→</span>
            </button>
          ))}

          <button
            onClick={() => scrollToSection('live-demo')}
            className="mt-4 w-full py-3 rounded-lg border border-cyan-500 bg-cyan-950/80 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>RUN SIMULATED TEST</span>
          </button>
        </div>
      )}
    </>
  );
}
