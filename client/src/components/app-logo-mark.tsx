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
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id={`ds-${id}`} x="-15%" y="-8%" width="130%" height="125%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1E3A8A" floodOpacity="0.6" />
        </filter>
        <clipPath id={`c-${id}`}>
          <circle cx="18" cy="21" r="17" />
        </clipPath>
      </defs>

      {/* Circle body */}
      <circle cx="18" cy="21" r="17" fill={`url(#g-${id})`} filter={`url(#ds-${id})`} />

      {/* Circle inner border */}
      <circle cx="18" cy="21" r="16.3" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="0.75" />

      {/* Compliance checkmark */}
      <path
        d="M11 12 L15 16.5 L25 7"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* SRP band — simple rectangle clipped to circle */}
      <rect
        x="1" y="20.5" width="34" height="9"
        fill="white"
        clipPath={`url(#c-${id})`}
      />

      {/* SRP text */}
      <text
        x="18"
        y="25.2"
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
