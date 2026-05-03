interface AppLogoMarkProps {
  variant?: "sm" | "lg";
}

export function AppLogoMark({ variant = "sm" }: AppLogoMarkProps) {
  const size = variant === "lg" ? 72 : 34;
  const id = variant;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id={`ds-${id}`} x="-15%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1E3A8A" floodOpacity="0.6" />
        </filter>
        <clipPath id={`clip-${id}`}>
          <circle cx="20" cy="20" r="18" />
        </clipPath>
      </defs>

      {/* Main circle */}
      <circle cx="20" cy="20" r="18" fill={`url(#g-${id})`} filter={`url(#ds-${id})`} />

      {/* Inner border ring */}
      <circle cx="20" cy="20" r="17.2" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="0.75" />

      {/* Four-point star */}
      <path
        d="M20 8 L21.2 11.5 L25 12.5 L21.2 13.5 L20 17 L18.8 13.5 L15 12.5 L18.8 11.5 Z"
        fill="white"
        fillOpacity="0.85"
      />

      {/* Divider */}
      <line x1="4" y1="21" x2="36" y2="21" stroke="white" strokeOpacity="0.25" strokeWidth="0.6" />

      {/* White lower band — clipped to circle */}
      <rect x="2" y="21.5" width="36" height="17" fill="white" clipPath={`url(#clip-${id})`} />

      {/* SRP text on white band */}
      <text
        x="20"
        y="30"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Nunito', 'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="6.5"
        fill="#091E52"
        letterSpacing="1.2"
      >
        SRP
      </text>
    </svg>
  );
}
