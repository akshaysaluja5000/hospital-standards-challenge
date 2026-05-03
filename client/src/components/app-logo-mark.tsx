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
      {/* Clipped-square badge */}
      <polygon
        points="10,0 30,0 40,10 40,30 30,40 10,40 0,30 0,10"
        fill="#4A9FD4"
      />
      {/* Subtle inner border */}
      <polygon
        points="10,0 30,0 40,10 40,30 30,40 10,40 0,30 0,10"
        fill="none"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      {/* AR monogram */}
      <text
        x="20"
        y="20"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Helvetica Neue', 'Arial', sans-serif"
        fontWeight="800"
        fontSize="15"
        fill="white"
        letterSpacing="1.5"
      >
        AR
      </text>
    </svg>
  );
}
