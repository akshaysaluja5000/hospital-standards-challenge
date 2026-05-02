interface AppLogoMarkProps {
  variant?: "sm" | "lg";
}

export function AppLogoMark({ variant = "sm" }: AppLogoMarkProps) {
  const width = variant === "lg" ? 72 : 34;
  const height = variant === "lg" ? 80 : 38;
  const id = variant;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3068D0" />
          <stop offset="100%" stopColor="#0C245C" />
        </linearGradient>
        <linearGradient id={`gl-${id}`} x1="18" y1="1" x2="18" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id={`ds-${id}`} x="-15%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0C245C" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Shield body */}
      <path
        d="M18 1L2 7V21C2 30.5 9 38 18 40.5C27 38 34 30.5 34 21V7L18 1Z"
        fill={`url(#g-${id})`}
        filter={`url(#ds-${id})`}
      />

      {/* Top sheen for gloss */}
      <path
        d="M18 1L2 7V14C6 12 12 10 18 9.5C24 10 30 12 34 14V7L18 1Z"
        fill={`url(#gl-${id})`}
      />

      {/* Cloud — centered vertically in the shield */}
      {/*
        Cloud design: three bumps on top, flat base.
        Centered at (18, 25), spanning x: 5.5–30.5, y: 19–30.5
      */}
      <path
        d="
          M 8 30.5
          C 5.5 30.5 5.5 27.5 7 26.5
          C 6.5 23 9 21 12 21.5
          C 12.5 19.5 14.5 18.5 16.5 19
          C 17.5 17.5 19.5 17 21.5 18
          C 23 16.5 26.5 16.8 27.5 19.5
          C 30 19.5 31.5 21.5 31 24
          C 32.5 24.5 32.5 27 31 28
          C 32 29 31 30.5 29.5 30.5
          Z
        "
        fill="white"
        fillOpacity="0.97"
      />

      {/* HSC — horizontal, centered inside cloud */}
      <text
        x="18.5"
        y="25.8"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Nunito', 'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="7.5"
        fill="#0C245C"
        letterSpacing="0.6"
      >
        HSC
      </text>
    </svg>
  );
}
