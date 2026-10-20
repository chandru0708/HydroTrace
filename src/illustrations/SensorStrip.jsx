import React from 'react';

export default function SensorStrip({ className = '' }) {
  return (
    <svg
      viewBox="0 0 580 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Background container card */}
      <rect x="8" y="8" width="564" height="304" rx="12" fill="#FBF6EC" stroke="#14213D" strokeWidth="2.5" />

      {/* 1. Ceramic / Substrate Strip Body on Left */}
      <rect x="35" y="45" width="235" height="195" rx="8" fill="#FFFFFF" stroke="#14213D" strokeWidth="2.5" />
      <text x="45" y="70" fontFamily="var(--font-mono)" fontSize="9.5" fill="#14213D" fontWeight="bold">
        DUAL WE SCREEN-PRINTED STRIP
      </text>

      {/* 4 Connection Pin Traces at Left Edge */}
      <rect x="35" y="100" width="24" height="7" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />
      <rect x="35" y="125" width="24" height="7" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />
      <rect x="35" y="150" width="24" height="7" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />
      <rect x="35" y="175" width="24" height="7" fill="#FFC93C" stroke="#14213D" strokeWidth="1" />

      {/* Electrode Traces */}
      {/* Counter Electrode (Carbon Arch) */}
      <path
        d="M95 105 C155 105 205 118 205 145 C205 172 155 185 95 185"
        stroke="#14213D"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <text x="145" y="96" fontFamily="var(--font-mono)" fontSize="8.5" fill="#14213D" textAnchor="middle" fontWeight="bold">
        Counter Electrode (C)
      </text>

      {/* Reference Electrode (Ag/AgCl pseudo-ref) */}
      <line x1="100" y1="145" x2="140" y2="145" stroke="#0E9AA7" strokeWidth="5" strokeLinecap="round" />
      <text x="92" y="148" fontFamily="var(--font-mono)" fontSize="8" fill="#0E9AA7" textAnchor="end" fontWeight="bold">
        Ag/AgCl Ref
      </text>

      {/* WE1: MIP Electrode */}
      <circle cx="178" cy="130" r="13" fill="#6C4AB6" stroke="#14213D" strokeWidth="2" />
      <circle cx="178" cy="130" r="8" fill="#E7DEFA" />
      <text x="178" y="133" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold" fill="#6C4AB6" textAnchor="middle">
        MIP
      </text>

      {/* WE2: NIP Electrode */}
      <circle cx="178" cy="165" r="13" fill="#14213D" stroke="#14213D" strokeWidth="2" />
      <circle cx="178" cy="165" r="8" fill="#FBF6EC" />
      <text x="178" y="168" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
        NIP
      </text>

      {/* Connecting Leader Line from WE1 to Zoom Bubble */}
      <path
        d="M192 130 C 240 130 270 145 320 145"
        stroke="#6C4AB6"
        strokeWidth="2.5"
        strokeDasharray="4 3"
      />
      <polygon points="320,141 328,145 320,149" fill="#6C4AB6" />

      {/* 2. Zoom Bubble on Right: Cavity & Blocked Electron Transfer */}
      <g id="zoom-bubble">
        {/* Outer Circular Glass - expanded to r=105, cy=150 */}
        <circle cx="435" cy="150" r="105" fill="#E7DEFA" stroke="#6C4AB6" strokeWidth="3" />
        <circle cx="435" cy="150" r="100" fill="#FFFFFF" />

        {/* Top: Warning Text - Centered with 40px clearance from circle top (top is at y=45) */}
        <text
          x="435"
          y="85"
          fontFamily="var(--font-sans)"
          fontSize="10"
          fontWeight="bold"
          fill="#D7263D"
          textAnchor="middle"
        >
          Electron Transfer Blocked!
        </text>

        {/* Blocked Electron Transfer Indicator */}
        <path d="M435 94 L435 114" stroke="#D7263D" strokeWidth="2.5" strokeDasharray="3 2" />
        <line x1="426" y1="112" x2="444" y2="112" stroke="#D7263D" strokeWidth="2.5" />

        {/* Molecular Cavity Shape */}
        <path
          d="M375 130 Q 402 130 402 150 Q 402 170 435 170 Q 468 170 468 150 Q 468 130 495 130 L 495 192 L 375 192 Z"
          fill="#E7DEFA"
          stroke="#6C4AB6"
          strokeWidth="2"
        />

        {/* Docked PFOA/PFOS Molecule in Cavity */}
        <g transform="translate(405, 136)">
          <path d="M5 18 L18 6 L31 18 L44 6 L57 18" stroke="#6C4AB6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="5" cy="18" r="3" fill="#D7263D" />
          <circle cx="18" cy="6" r="3" fill="#6C4AB6" />
          <circle cx="31" cy="18" r="3" fill="#6C4AB6" />
          <circle cx="44" cy="6" r="3" fill="#6C4AB6" />
          <circle cx="57" cy="18" r="3.5" fill="#0E9AA7" />
          <text x="31" y="-2" fontFamily="var(--font-mono)" fontSize="7.5" fill="#6C4AB6" textAnchor="middle" fontWeight="bold">
            PFAS docked
          </text>
        </g>

        {/* Substrate Label inside bottom of cavity */}
        <text x="435" y="184" fontFamily="var(--font-mono)" fontSize="8" fill="#6C4AB6" textAnchor="middle">
          Polymer Matrix (o-PD)
        </text>

        {/* Redox Probe Pill - Positioned cleanly inside bottom area */}
        <rect x="355" y="206" width="160" height="24" rx="4" fill="#FBF6EC" stroke="#14213D" strokeWidth="1.2" />
        <text x="435" y="222" fontFamily="var(--font-mono)" fontSize="8.5" fill="#14213D" textAnchor="middle" fontWeight="bold">
          Probe: [Fe(CN)₆]³⁻/⁴⁻
        </text>
      </g>

      {/* Bottom Annotation Banner with Ample Padding */}
      <rect x="35" y="258" width="510" height="34" rx="6" fill="#FFFFFF" stroke="#14213D" strokeWidth="1.5" />
      <text x="290" y="280" fontFamily="var(--font-hand)" fontSize="18" fill="#14213D" textAnchor="middle">
        WE1 (MIP) binds PFAS • WE2 (NIP) cancels salty borewell ions!
      </text>
    </svg>
  );
}
