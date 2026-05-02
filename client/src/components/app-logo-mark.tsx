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
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2760C8" />
          <stop offset="100%" stopColor="#0F2860" />
        </linearGradient>
        <linearGradient id={`sheen-${id}`} x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.13" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <rect width="48" height="48" rx="11" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="48" height="48" rx="11" fill={`url(#bg-${id})`} />
      {/* Top sheen for depth */}
      <rect width="48" height="26" clipPath={`url(#clip-${id})`} fill={`url(#sheen-${id})`} />

      {/* Large "H" — left anchor */}
      {/* Left post */}
      <rect x="5" y="10" width="6.5" height="28" rx="2" fill="white" />
      {/* Right post */}
      <rect x="18" y="10" width="6.5" height="28" rx="2" fill="white" />
      {/* Crossbar */}
      <rect x="5" y="21.5" width="19.5" height="5.5" rx="2" fill="white" />

      {/* Slim vertical divider */}
      <rect x="29" y="13" width="1.5" height="22" rx="0.75" fill="white" fillOpacity="0.3" />

      {/* "S" — top right */}
      {/* Top curve of S */}
      <path
        d="M43 14.5 C43 12 41 10.5 38 10.5 C35 10.5 33 12 33 14.5 C33 17 35.5 17.5 38 18.5 C40.5 19.5 43 20 43 22.5 C43 25 41 26.5 38 26.5 C35 26.5 33 25 33 22.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* "C" — bottom right */}
      <path
        d="M42.5 31.5 C41 29.5 39.5 28.5 37.5 28.5 C34.5 28.5 32.5 30.5 32.5 34 C32.5 37.5 34.5 39.5 37.5 39.5 C39.5 39.5 41 38.5 42.5 36.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
