import React from 'react';

export const RetroSparkle: React.FC<{
  size?: number;
  className?: string;
  color?: string;
}> = ({ size = 24, className = '', color = '#F7E594' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 0C12 7 13.5 10.5 24 12C13.5 13.5 12 17 12 24C12 17 10.5 13.5 0 12C10.5 10.5 12 7 12 0Z"
      fill={color}
    />
  </svg>
);

export const HeartDeco: React.FC<{
  size?: number;
  className?: string;
  fill?: string;
  stroke?: string;
}> = ({ size = 20, className = '', fill = '#F5BAD5', stroke = '#570301' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill={fill}
      stroke={stroke}
      strokeWidth={stroke ? "1.5" : "0"}
    />
  </svg>
);

export const RetroSticker: React.FC<{
  text: string;
  subtext?: string;
  rotation?: string;
  bg?: string;
  color?: string;
  className?: string;
}> = ({
  text,
  subtext,
  rotation = '-rotate-6',
  bg = '#F7E594',
  color = '#570301',
  className = ''
}) => (
  <div
    className={`inline-flex flex-col items-center justify-center px-4 py-2 rounded-full border-2 border-[#570301] shadow-retro select-none uppercase tracking-wider font-bold text-xs ${rotation} ${className}`}
    style={{ backgroundColor: bg, color }}
  >
    <span className="flex items-center gap-1.5 whitespace-nowrap">
      <RetroSparkle size={10} color={color} />
      {text}
      <RetroSparkle size={10} color={color} />
    </span>
    {subtext && (
      <span className="text-[9px] tracking-widest opacity-80 -mt-0.5 whitespace-nowrap font-medium">
        {subtext}
      </span>
    )}
  </div>
);

export const CurvedArrow: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#570301'
}) => (
  <svg
    width="68"
    height="48"
    viewBox="0 0 68 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M6 8C20 4 52 10 56 34M56 34L46 30M56 34L60 22"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FlowerShape: React.FC<{
  size?: number;
  className?: string;
  fill?: string;
}> = ({ size = 60, className = '', fill = '#F5BAD5' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M50 0C55 20 70 25 90 25C70 40 70 60 90 75C70 75 55 80 50 100C45 80 30 75 10 75C30 60 30 40 10 25C30 25 45 20 50 0Z"
      fill={fill}
    />
  </svg>
);

export const WavyDivider: React.FC<{
  fillColor?: string;
  bgColor?: string;
  flip?: boolean;
}> = ({ fillColor = '#FFFAF2', bgColor = '#BAD6FD', flip = false }) => (
  <div
    className="w-full overflow-hidden leading-none relative z-10"
    style={{ backgroundColor: bgColor }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      className={`w-full h-8 sm:h-12 md:h-14 block ${flip ? 'rotate-180' : ''}`}
    >
      <path
        d="M0,0 C150,55 350,55 500,10 C650,-35 850,55 1000,20 C1100,-5 1150,15 1200,30 L1200,64 L0,64 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

export const ScallopWaveDivider: React.FC<{
  fillColor?: string;
  bgColor?: string;
  flip?: boolean;
}> = ({ fillColor = '#BAD6FD', bgColor = '#FFFAF2', flip = false }) => (
  <div
    className="w-full overflow-hidden leading-none relative z-10"
    style={{ backgroundColor: bgColor }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className={`w-full h-6 sm:h-8 md:h-10 block ${flip ? 'rotate-180' : ''}`}
    >
      <path
        d="M0,48 C50,48 50,8 100,8 C150,8 150,48 200,48 C250,48 250,8 300,8 C350,8 350,48 400,48 C450,48 450,8 500,8 C550,8 550,48 600,48 C650,48 650,8 700,8 C750,8 750,48 800,48 C850,48 850,8 900,8 C950,8 950,48 1000,48 C1050,48 1050,8 1100,8 C1150,8 1150,48 1200,48 L1200,0 L0,0 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

export const LumiWordmark: React.FC<{
  className?: string;
  textSize?: string;
  heartColor?: string;
  textColor?: string;
}> = ({
  className = '',
  textSize = 'text-2xl md:text-3xl',
  heartColor = '#F5BAD5',
  textColor = 'text-[#570301]'
}) => (
  <div className={`inline-flex items-center gap-1 font-display tracking-tight font-black select-none ${textSize} ${textColor} ${className}`}>
    <span>LUM</span>
    {/* Custom "I" with heart dot */}
    <span className="relative inline-flex flex-col items-center justify-end leading-none">
      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2">
        <HeartDeco size={12} fill={heartColor} stroke="#570301" />
      </span>
      <span>I</span>
    </span>
    <span className="ml-1.5 font-light tracking-widest text-[0.85em] uppercase">LASHES</span>
  </div>
);
