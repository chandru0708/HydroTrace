import React from 'react';

export default function ReaderDeviceSvg({
  pfasTier = 'DETECTED – MONITOR',
  mpTier = 'LOW MFI',
  signedCode = '7H4K-9M2X-8B3Q',
  activeLed = 'amber',
  className = ''
}) {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Device Outer Box (IP65 Handheld dark-box) */}
      <rect x="20" y="20" width="380" height="260" rx="20" fill="#14213D" stroke="#0E9AA7" strokeWidth="3" />
      <rect x="25" y="25" width="370" height="250" rx="16" fill="#1B2A4A" />

      {/* Screws on 4 corners */}
      <circle cx="38" cy="38" r="4" fill="#0E9AA7" />
      <circle cx="382" cy="38" r="4" fill="#0E9AA7" />
      <circle cx="38" cy="262" r="4" fill="#0E9AA7" />
      <circle cx="382" cy="262" r="4" fill="#0E9AA7" />

      {/* 0.96" OLED Display Bezel */}
      <rect x="60" y="55" width="220" height="135" rx="8" fill="#0B132B" stroke="#0E9AA7" strokeWidth="2" />
      
      {/* OLED Screen Content */}
      <g transform="translate(75, 75)">
        <text x="0" y="14" fontFamily="var(--font-mono)" fontSize="11" fill="#CDEFF2" fontWeight="bold">
          HYDROTRACE v1.2 [OFFLINE]
        </text>
        <line x1="0" y1="20" x2="190" y2="20" stroke="#0E9AA7" strokeWidth="1" />

        <text x="0" y="38" fontFamily="var(--font-mono)" fontSize="10" fill="#E7DEFA">
          PFAS:
        </text>
        <text x="50" y="38" fontFamily="var(--font-mono)" fontSize="10" fill="#FFC93C" fontWeight="bold">
          {pfasTier}
        </text>

        <text x="0" y="56" fontFamily="var(--font-mono)" fontSize="10" fill="#FFE1D6">
          MICROPLAST:
        </text>
        <text x="75" y="56" fontFamily="var(--font-mono)" fontSize="10" fill="#2BA84A" fontWeight="bold">
          {mpTier}
        </text>

        {/* Signed Code Box */}
        <rect x="0" y="68" width="190" height="30" rx="4" fill="#14213D" stroke="#FFC93C" strokeWidth="1.5" />
        <text x="8" y="88" fontFamily="var(--font-mono)" fontSize="13" fill="#FFC93C" fontWeight="bold" letterSpacing="0.08em">
          {signedCode}
        </text>

        <text x="0" y="112" fontFamily="var(--font-mono)" fontSize="8" fill="#A0AEC0">
          [KEYPAD: SEND SMS] • [AUTO-SYNC]
        </text>
      </g>

      {/* Traffic Light LEDs */}
      <g transform="translate(315, 60)">
        {/* Bezel */}
        <rect x="0" y="0" width="55" height="125" rx="10" fill="#0B132B" stroke="#14213D" strokeWidth="2" />
        
        {/* Green LED */}
        <circle
          cx="27.5"
          cy="26"
          r="13"
          fill={activeLed === 'green' ? 'var(--color-leaf-green)' : '#194d27'}
          stroke="#14213D"
          strokeWidth="2"
        />
        {activeLed === 'green' && (
          <circle cx="27.5" cy="26" r="18" fill="var(--color-leaf-green)" opacity="0.35" />
        )}

        {/* Amber LED */}
        <circle
          cx="27.5"
          cy="62"
          r="13"
          fill={activeLed === 'amber' ? 'var(--color-amber)' : '#593a0b'}
          stroke="#14213D"
          strokeWidth="2"
        />
        {activeLed === 'amber' && (
          <circle cx="27.5" cy="62" r="18" fill="var(--color-amber)" opacity="0.35" />
        )}

        {/* Red LED */}
        <circle
          cx="27.5"
          cy="98"
          r="13"
          fill={activeLed === 'red' ? 'var(--color-alert-red)' : '#4d121b'}
          stroke="#14213D"
          strokeWidth="2"
        />
        {activeLed === 'red' && (
          <circle cx="27.5" cy="98" r="18" fill="var(--color-alert-red)" opacity="0.35" />
        )}
      </g>

      {/* Bottom Panel Controls */}
      <g transform="translate(60, 210)">
        {/* Strip Slot */}
        <rect x="0" y="10" width="130" height="24" rx="4" fill="#0B132B" stroke="#0E9AA7" strokeWidth="1.5" />
        <rect x="15" y="20" width="100" height="4" fill="#14213D" />
        <text x="25" y="46" fontFamily="var(--font-mono)" fontSize="8" fill="#CDEFF2">
          MIP/NIP STRIP SLOT
        </text>

        {/* Buzzer port */}
        <circle cx="170" cy="22" r="12" fill="#0B132B" stroke="#0E9AA7" strokeWidth="1.5" />
        <circle cx="170" cy="22" r="3" fill="#14213D" />
        <circle cx="166" cy="18" r="1.5" fill="#14213D" />
        <circle cx="174" cy="18" r="1.5" fill="#14213D" />
        <circle cx="166" cy="26" r="1.5" fill="#14213D" />
        <circle cx="174" cy="26" r="1.5" fill="#14213D" />
        <text x="150" y="46" fontFamily="var(--font-mono)" fontSize="8" fill="#CDEFF2">
          BUZZER
        </text>

        {/* Optics Chamber Cover */}
        <rect x="210" y="5" width="100" height="34" rx="4" fill="#FF6B4A" stroke="#14213D" strokeWidth="2" />
        <text x="220" y="26" fontFamily="var(--font-sans)" fontSize="10" fontWeight="bold" fill="#FFFFFF">
          OPTICS CHAMBER
        </text>
      </g>
    </svg>
  );
}
