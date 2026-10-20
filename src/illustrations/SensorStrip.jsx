import React from 'react';

export default function SensorStrip({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <rect x="10" y="10" width="520" height="300" rx="10" fill="#FBF6EC" stroke="#14213D" strokeWidth="2.5" />

      {/* Ceramic / Substrate Strip Body */}
      <rect x="40" y="80" width="260" height="150" rx="8" fill="#FFFFFF" stroke="#14213D" strokeWidth="2.5" />
      <text x="50" y="105" fontFamily="var(--font-mono)" fontSize="10" fill="#14213D" fontWeight="bold">
        DUAL WE SCREEN-PRINTED STRIP
      </text>

      {/* 4 Connection Pin Traces at the left */}
      <rect x="40" y="125" width="30" height="8" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />
      <rect x="40" y="145" width="30" height="8" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />
      <rect x="40" y="165" width="30" height="8" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />
      <rect x="40" y="185" width="30" height="8" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />

      {/* Electrode Wells / Zones */}
      {/* 1. Counter Electrode (Carbon band) */}
      <path d="M110 115 C170 115 220 125 220 155 C220 185 170 195 110 195" stroke="#14213D" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.8" />
      <text x="140" y="132" fontFamily="var(--font-mono)" fontSize="9" fill="#14213D">Counter (C)</text>

      {/* 2. Reference Electrode (Ag/AgCl) */}
      <line x1="120" y1="155" x2="160" y2="155" stroke="#0E9AA7" strokeWidth="6" strokeLinecap="round" />
      <text x="120" y="170" fontFamily="var(--font-mono)" fontSize="9" fill="#0E9AA7" fontWeight="bold">Ag/AgCl Ref</text>

      {/* 3. WE1: MIP Electrode */}
      <circle cx="185" cy="145" r="14" fill="#6C4AB6" stroke="#14213D" strokeWidth="2" />
      <circle cx="185" cy="145" r="9" fill="#E7DEFA" />
      <text x="175" y="148" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold" fill="#6C4AB6">MIP</text>

      {/* 4. WE2: NIP Electrode */}
      <circle cx="185" cy="178" r="14" fill="#14213D" stroke="#14213D" strokeWidth="2" />
      <circle cx="185" cy="178" r="9" fill="#FBF6EC" />
      <text x="176" y="181" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold" fill="#14213D">NIP</text>

      {/* Zoom Bubble on MIP Cavity */}
      <g transform="translate(320, 45)">
        <circle cx="100" cy="100" r="85" fill="#E7DEFA" stroke="#6C4AB6" strokeWidth="3" />
        <circle cx="100" cy="100" r="80" fill="#FFFFFF" />

        {/* Cavity Shape */}
        <path d="M50 70 Q 75 70 75 95 Q 75 120 100 120 Q 125 120 125 95 Q 125 70 150 70 L 150 140 L 50 140 Z" fill="#E7DEFA" stroke="#6C4AB6" strokeWidth="2" />
        <text x="65" y="132" fontFamily="var(--font-mono)" fontSize="9" fill="#6C4AB6">Polymer Matrix</text>

        {/* Imprinted PFOA/PFOS Molecule in cavity */}
        <g transform="translate(70, 75)">
          <path d="M5 25 L18 10 L31 25 L44 10 L57 25" stroke="#6C4AB6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="5" cy="25" r="3" fill="#D7263D" />
          <circle cx="18" cy="10" r="3" fill="#6C4AB6" />
          <circle cx="31" cy="25" r="3" fill="#6C4AB6" />
          <circle cx="44" cy="10" r="3" fill="#6C4AB6" />
          <circle cx="57" cy="25" r="4" fill="#0E9AA7" />
          <text x="14" y="38" fontFamily="var(--font-mono)" fontSize="8" fill="#6C4AB6">PFAS docked</text>
        </g>

        {/* Blocked Electron Transfer arrows */}
        <path d="M100 40 L100 60" stroke="#D7263D" strokeWidth="2.5" strokeDasharray="3 2" />
        <line x1="94" y1="58" x2="106" y2="58" stroke="#D7263D" strokeWidth="2.5" />
        <text x="50" y="32" fontFamily="var(--font-sans)" fontSize="10" fontWeight="bold" fill="#D7263D">
          Electron Transfer Blocked!
        </text>
        <text x="45" y="165" fontFamily="var(--font-mono)" fontSize="9" fill="#14213D">
          Ferricyanide probe [Fe(CN)₆]³⁻/⁴⁻
        </text>
      </g>

      {/* Leader lines & handwritten note */}
      <path d="M199 145 C240 145 280 110 320 110" stroke="#6C4AB6" strokeWidth="2" strokeDasharray="4 3" />
      <text x="50" y="275" fontFamily="var(--font-hand)" fontSize="18" fill="#14213D">
        WE1 (MIP) binds PFAS • WE2 (NIP) cancels salty borewell ions!
      </text>
    </svg>
  );
}
