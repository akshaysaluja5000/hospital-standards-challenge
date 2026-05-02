interface AppLogoMarkProps {
  variant?: "sm" | "lg";
}

export function AppLogoMark({ variant = "sm" }: AppLogoMarkProps) {
  const isLarge = variant === "lg";
  const container = isLarge
    ? "w-20 h-20 rounded-2xl"
    : "w-9 h-9 rounded-xl";
  const svgSize = isLarge ? 52 : 22;

  return (
    <div
      className={`${container} bg-primary flex items-center justify-center flex-shrink-0`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(218 75% 42%) 100%)",
        boxShadow: isLarge
          ? "0 4px 20px hsl(var(--primary) / 0.35), inset 0 1px 0 rgba(255,255,255,0.15)"
          : "0 2px 8px hsl(var(--primary) / 0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 40 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer shield glow/depth layer */}
        <path
          d="M20 2L4 8.5V22C4 32.5 11 41.3 20 44C29 41.3 36 32.5 36 22V8.5L20 2Z"
          fill="white"
          fillOpacity="0.12"
        />
        {/* Main shield body */}
        <path
          d="M20 5L7 10.5V22C7 30.8 12.9 38.6 20 41C27.1 38.6 33 30.8 33 22V10.5L20 5Z"
          fill="white"
        />
        {/* Medical cross at top of shield */}
        <rect x="18" y="13.5" width="4" height="9" rx="1.5" fill="hsl(218, 68%, 32%)" />
        <rect x="14.5" y="17" width="11" height="4" rx="1.5" fill="hsl(218, 68%, 32%)" />
        {/* Bold checkmark at bottom */}
        <path
          d="M13.5 28L17.5 32.5L27 24"
          stroke="hsl(218, 68%, 32%)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
