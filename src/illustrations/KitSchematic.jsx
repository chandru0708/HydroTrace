import React from 'react';

export default function KitSchematic({ activePhase = 'all', className = '' }) {
  return (
    <svg
      viewBox="0 0 540 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', maxHeight: '420px', display: 'block' }}
    >
      {/* Background container card styling */}
      <rect x="10" y="10" width="520" height="380" rx="12" fill="#FBF6EC" stroke="#14213D" strokeWidth="2.5" />
      
      {/* Syringe Assembly */}
      <g id="spring-syringe">
        {/* Plunger Handle & Rod */}
        <rect x="70" y="30" width="80" height="14" rx="4" fill="#FFC93C" stroke="#14213D" strokeWidth="2" />
        <rect x="104" y="44" width="12" height="60" fill="#E5E5E5" stroke="#14213D" strokeWidth="2" />
        
        {/* Internal Spring */}
        <path
          d="M104 60 L116 66 L104 72 L116 78 L104 84 L116 90 L104 96"
          stroke="#14213D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Syringe Barrel (250 mL) */}
        <rect x="85" y="104" width="50" height="110" rx="6" fill="#CDEFF2" stroke="#14213D" strokeWidth="2.5" />
        <line x1="85" y1="130" x2="105" y2="130" stroke="#0E9AA7" strokeWidth="2" />
        <text x="108" y="133" fontSize="8" fontFamily="var(--font-mono)" fill="#14213D">250mL</text>
        <line x1="85" y1="155" x2="100" y2="155" stroke="#0E9AA7" strokeWidth="1.5" />
        <line x1="85" y1="180" x2="100" y2="180" stroke="#0E9AA7" strokeWidth="1.5" />
        <text x="95" y="200" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" fill="#0E9AA7">Water</text>

        {/* Syringe Luer Tip */}
        <path d="M104 214 L104 230 L116 230 L116 214 Z" fill="#FFC93C" stroke="#14213D" strokeWidth="2" />
      </g>

      {/* Connection Flow Arrow */}
      <path d="M110 230 L110 250" stroke="#0E9AA7" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 3" />

      {/* 25 mm Glass-Fibre Filter Holder */}
      <g id="filter-holder" transform="translate(45, 250)">
        {/* Filter Disc Housing */}
        <rect x="25" y="0" width="80" height="28" rx="8" fill="#FFFFFF" stroke="#14213D" strokeWidth="2.5" />
        <rect x="35" y="6" width="60" height="16" rx="4" fill="#E7DEFA" stroke="#6C4AB6" strokeWidth="1.5" />
        
        {/* Glass-Fibre Mesh Texture */}
        <line x1="45" y1="14" x2="85" y2="14" stroke="#14213D" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Caught Microplastic particles (Coral shapes) */}
        <rect x="48" y="9" width="4" height="4" rx="1" fill="#FF6B4A" stroke="#14213D" strokeWidth="1" />
        <polygon points="62,10 66,12 63,16 60,13" fill="#FF6B4A" stroke="#14213D" strokeWidth="1" />
        <circle cx="75" cy="13" r="2.5" fill="#FF6B4A" stroke="#14213D" strokeWidth="0.8" />
        <circle cx="56" cy="16" r="1.5" fill="#D4A373" /> {/* Sand grain */}

        <text x="120" y="18" fontSize="12" fontFamily="var(--font-sans)" fontWeight="bold" fill="#FF6B4A">
          Step 1: 25 mm GF Filter
        </text>
        <text x="120" y="32" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          Traps microplastics (≥ 20 µm)
        </text>
      </g>

      {/* Direct Flow to WAX Cartridge */}
      <path d="M110 278 L110 300" stroke="#6C4AB6" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 3" />

      {/* Disposable WAX Cartridge */}
      <g id="wax-cartridge" transform="translate(60, 300)">
        <rect x="35" y="0" width="30" height="55" rx="5" fill="#E7DEFA" stroke="#14213D" strokeWidth="2.5" />
        
        {/* Anion exchange beads */}
        <circle cx="45" cy="12" r="3" fill="#6C4AB6" opacity="0.6" />
        <circle cx="55" cy="15" r="3" fill="#6C4AB6" opacity="0.6" />
        <circle cx="46" cy="26" r="3" fill="#6C4AB6" opacity="0.6" />
        <circle cx="54" cy="30" r="3" fill="#6C4AB6" opacity="0.6" />
        <circle cx="48" cy="42" r="3" fill="#6C4AB6" opacity="0.6" />

        {/* Captured PFAS zigzag chains (violet) */}
        <path d="M43 14 L47 18 L51 14 L55 18" stroke="#6C4AB6" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 32 L48 36 L52 32 L56 36" stroke="#6C4AB6" strokeWidth="2" strokeLinecap="round" />

        <text x="90" y="22" fontSize="12" fontFamily="var(--font-sans)" fontWeight="bold" fill="#6C4AB6">
          Step 2: WAX Cartridge
        </text>
        <text x="90" y="36" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          Captures PFAS (EPA Method 533)
        </text>
        <text x="90" y="49" fontSize="9" fontFamily="var(--font-hand)" fill="#6C4AB6">
          One push feeds both tests!
        </text>
      </g>

      {/* Outflow / Droplet */}
      <path d="M110 355 L110 370" stroke="#0E9AA7" strokeWidth="3" strokeLinecap="round" />
      <circle cx="110" cy="376" r="4" fill="#0E9AA7" stroke="#14213D" strokeWidth="1.5" />

      {/* Right Column: Two Diagnostic Routes */}
      <g transform="translate(300, 50)">
        <rect x="0" y="0" width="200" height="140" rx="8" fill="#FFE1D6" stroke="#14213D" strokeWidth="2" />
        <text x="14" y="24" fontSize="13" fontFamily="var(--font-serif)" fontWeight="bold" fill="#FF6B4A">
          Microplastic Module
        </text>
        <text x="14" y="45" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • Nile Red in Ethanol (3 drops)
        </text>
        <text x="14" y="65" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • 470 nm Blue LED + BPW34
        </text>
        <text x="14" y="85" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • MFI = I_stained - I_blank
        </text>
        <text x="14" y="105" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • ESP32-S3 Macro Audit Photo
        </text>
        <text x="14" y="125" fontSize="11" fontFamily="var(--font-hand)" fill="#FF6B4A">
          "Ethanol only; never acetone!"
        </text>
      </g>

      <g transform="translate(300, 210)">
        <rect x="0" y="0" width="200" height="140" rx="8" fill="#E7DEFA" stroke="#14213D" strokeWidth="2" />
        <text x="14" y="24" fontSize="13" fontFamily="var(--font-serif)" fontWeight="bold" fill="#6C4AB6">
          PFAS Module
        </text>
        <text x="14" y="45" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • 40-60x WAX Elution (0.5 mL)
        </text>
        <text x="14" y="65" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • MIP / NIP Carbon Strip
        </text>
        <text x="14" y="85" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • DIY Potentiostat (≈ ₹320)
        </text>
        <text x="14" y="105" fontSize="10" fontFamily="var(--font-mono)" fill="#14213D">
          • DPV Scan: S_net Differential
        </text>
        <text x="14" y="125" fontSize="11" fontFamily="var(--font-hand)" fill="#6C4AB6">
          "Cancels salty borewell matrix!"
        </text>
      </g>
    </svg>
  );
}
