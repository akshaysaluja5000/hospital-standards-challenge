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
      viewBox="0 0 36 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="18" y1="0" x2="18" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A4DA0" />
          <stop offset="100%" stopColor="#091E52" />
        </linearGradient>
        <filter id={`ds-${id}`} x="-15%" y="-8%" width="130%" height="125%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#091E52" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Shield body */}
      <path
        d="M18 1.5L2 7.5V22C2 31.5 9 39.5 18 42C27 39.5 34 31.5 34 22V7.5L18 1.5Z"
        fill={`url(#g-${id})`}
        filter={`url(#ds-${id})`}
      />

      {/* Shield inner border */}
      <path
        d="M18 4L5 9V22C5 30 10.5 37 18 39.5C25.5 37 31 30 31 22V9L18 4Z"
        fill="none"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="0.75"
      />

      {/* Top section — four-point star */}
      <path
        d="M18 8 L19.2 11.5 L23 12.5 L19.2 13.5 L18 17 L16.8 13.5 L13 12.5 L16.8 11.5 Z"
        fill="white"
        fillOpacity="0.85"
      />

      {/* Divider between star and HSC banner */}
      <line x1="5" y1="19" x2="31" y2="19" stroke="white" strokeOpacity="0.25" strokeWidth="0.6" />

      {/* HSC ribbon / banner */}
      <path
        d="M3.5 22 L32.5 22 L34.5 25 L32.5 28 L3.5 28 L1.5 25 Z"
        fill="white"
      />

      {/* HSC text on the banner */}
      <text
        x="18"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Nunito', 'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="#091E52"
        letterSpacing="0.8"
      >
        HSC
      </text>
    </svg>
  );
}
