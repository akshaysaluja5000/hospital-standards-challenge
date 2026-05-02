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

      {/* Cloud — symmetric, built from overlapping circles + flat base */}
      <ellipse cx="12" cy="22" rx="5.5" ry="5" fill="white" />
      <ellipse cx="18" cy="18.5" rx="6.5" ry="6" fill="white" />
      <ellipse cx="24" cy="22" rx="5.5" ry="5" fill="white" />
      <rect x="6.5" y="22" width="23" height="6" fill="white" />

      {/* HSC — horizontal, centered inside cloud */}
      <text
        x="18"
        y="25.2"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Nunito', 'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="#0C245C"
        letterSpacing="0.5"
      >
        HSC
      </text>
    </svg>
  );
}
