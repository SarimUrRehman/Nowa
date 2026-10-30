import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="NouwaDetail Emblem"
    >
      {/* Outer Glow / Drop shadow aura */}
      <circle cx="50" cy="50" r="48" fill="#0A0A0A" />

      {/* Thin Red Outer Ring (Crimson #D91E2A) */}
      <circle cx="50" cy="50" r="46.5" stroke="#D91E2A" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />

      {/* Top Half Sports Car Silhouette (Line-art exotic sports coupe) */}
      <g id="car-silhouette">
        {/* Aerodynamic roof and body line */}
        <path
          d="M 22 43 C 25 35, 33 29, 44 26 C 53 23, 62 25, 73 31 C 78 34, 82 39, 83 43"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hood and front bumper sweep */}
        <path
          d="M 22 43 C 18 43, 16 45, 17 46 C 20 47, 24 47, 30 46"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Rear deck and spoiler flick */}
        <path
          d="M 83 43 C 86 43, 88 44, 87 46 C 85 47, 80 47, 75 46"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Roof glass contour / window pillar */}
        <path
          d="M 38 34 C 47 28, 59 28, 68 35"
          stroke="#D91E2A"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Subtle wheel arch hint */}
        <path
          d="M 27 46 A 4 4 0 0 1 35 46"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 68 46 A 4 4 0 0 1 76 46"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
        />
      </g>

      {/* Central Brand Typography: "NOUWA" with the 'A' in crimson red */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontFamily="'Michroma', 'Syncopate', 'Montserrat', sans-serif"
        fontWeight="800"
        fontSize="12.5"
        letterSpacing="2.5"
        fill="#FFFFFF"
      >
        NOUW
        <tspan fill="#D91E2A">A</tspan>
      </text>

      {/* Subtitle: "DETAILING" in thin spaced letters beneath */}
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontFamily="'Montserrat', 'Inter', sans-serif"
        fontWeight="500"
        fontSize="5.2"
        letterSpacing="3.5"
        fill="#A8ADB5"
      >
        DETAILING
      </text>

      {/* Decorative hairline divider */}
      <line x1="38" y1="76" x2="62" y2="76" stroke="#D91E2A" strokeWidth="0.8" strokeOpacity="0.8" />

      {/* Bottom Monogram: "FT" in white and red */}
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fontFamily="'Michroma', 'Montserrat', sans-serif"
        fontWeight="700"
        fontSize="5.5"
        letterSpacing="1.2"
      >
        <tspan fill="#FFFFFF">F</tspan>
        <tspan fill="#D91E2A">T</tspan>
      </text>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const pixelSizes = {
    sm: 36,
    md: 46,
    lg: 56,
    xl: 72
  };

  const currentSize = pixelSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 group transition-transform duration-200 ${className}`}>
      <div className="relative">
        <LogoEmblem size={currentSize} className="transition-transform duration-300 group-hover:scale-105" />
        {/* Subtle crimson glow beneath the emblem on hover */}
        <div className="absolute inset-0 rounded-full bg-[#D91E2A]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="font-['Michroma','Syncopate',sans-serif] font-bold text-base md:text-lg tracking-[0.2em] uppercase text-white leading-tight">
            NOUW<span className="text-[#D91E2A]">A</span>
          </div>
          <div className="font-['Montserrat',sans-serif] text-[9px] md:text-[10px] tracking-[0.35em] text-[#A8ADB5] uppercase font-medium">
            DETAILING
          </div>
        </div>
      )}
    </div>
  );
};
