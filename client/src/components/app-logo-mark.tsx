interface AppLogoMarkProps {
  variant?: "sm" | "lg";
}

export function AppLogoMark({ variant = "sm" }: AppLogoMarkProps) {
  const size = variant === "lg" ? 80 : 36;
  const id = variant;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B6FCC" />
          <stop offset="100%" stopColor="#163A80" />
        </linearGradient>
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#163A80" floodOpacity="0.4" />
        </filter>
        <clipPath id={`clip-${id}`}>
          <rect width="48" height="48" rx="11" />
        </clipPath>
      </defs>

      {/* Rounded square background */}
      <rect width="48" height="48" rx="11" fill={`url(#grad-${id})`} filter={`url(#shadow-${id})`} />

      {/* Top highlight stripe for depth */}
      <rect width="48" height="16" rx="11" clipPath={`url(#clip-${id})`} fill="white" fillOpacity="0.08" />

      {/* Shield outline — single clean element */}
      <path
        d="M24 10L12 15V24C12 30.6 17.1 36.5 24 38.5C30.9 36.5 36 30.6 36 24V15L24 10Z"
        fill="white"
        fillOpacity="0.18"
      />
      <path
        d="M24 10L12 15V24C12 30.6 17.1 36.5 24 38.5C30.9 36.5 36 30.6 36 24V15L24 10Z"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="1"
        fill="none"
      />

      {/* Single bold checkmark — the only inner symbol */}
      <path
        d="M17.5 24L22 29.5L31 19"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
