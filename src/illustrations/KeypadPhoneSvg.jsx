import React from 'react';

export default function KeypadPhoneSvg({ code = '7H4K-9M2X-8B3Q', className = '' }) {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Phone Body */}
      <rect x="35" y="15" width="170" height="290" rx="24" fill="#14213D" stroke="#0E9AA7" strokeWidth="3" />
      <rect x="42" y="22" width="156" height="276" rx="20" fill="#25355A" />

      {/* Screen Glass */}
      <rect x="52" y="38" width="136" height="110" rx="8" fill="#FFF2C6" stroke="#14213D" strokeWidth="2" />
      
      {/* Screen UI: SMS compose */}
      <text x="60" y="55" fontFamily="var(--font-mono)" fontSize="9" fill="#14213D" fontWeight="bold">
        To: 1902 [WQMIS]
      </text>
      <line x1="60" y1="60" x2="180" y2="60" stroke="#14213D" strokeWidth="1" strokeDasharray="2 2" />

      {/* SMS Text Bubble */}
      <rect x="58" y="68" width="124" height="42" rx="4" fill="#FFC93C" stroke="#14213D" strokeWidth="1.5" />
      <text x="64" y="85" fontFamily="var(--font-mono)" fontSize="11" fill="#14213D" fontWeight="bold" letterSpacing="0.04em">
        {code}
      </text>
      <text x="64" y="100" fontFamily="var(--font-mono)" fontSize="8" fill="#14213D">
        [12-char Crockford]
      </text>

      <text x="60" y="132" fontFamily="var(--font-mono)" fontSize="8" fill="#14213D" opacity="0.8">
        Options • Send
      </text>

      {/* D-Pad */}
      <circle cx="120" cy="172" r="18" fill="#14213D" stroke="#0E9AA7" strokeWidth="2" />
      <circle cx="120" cy="172" r="8" fill="#FFC93C" />

      {/* Keypad Grid (1-9, *, 0, #) */}
      <g transform="translate(60, 202)">
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['*', '0', '#']
        ].map((row, rIdx) => (
          <g key={rIdx} transform={`translate(0, ${rIdx * 20})`}>
            {row.map((digit, cIdx) => (
              <g key={cIdx} transform={`translate(${cIdx * 42}, 0)`}>
                <rect x="0" y="0" width="36" height="15" rx="3" fill="#14213D" stroke="#0E9AA7" strokeWidth="1" />
                <text x="18" y="11" fontFamily="var(--font-mono)" fontSize="9" fill="#FBF6EC" textAnchor="middle" fontWeight="bold">
                  {digit}
                </text>
              </g>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
