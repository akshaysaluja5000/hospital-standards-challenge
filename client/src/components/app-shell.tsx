import { ReactNode } from "react";
import { AppLogoMark } from "./app-logo-mark";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ background: "linear-gradient(160deg, #071630 0%, #0D2659 55%, #0F3080 100%)" }}
    >
      <header
        className="sticky top-0 z-50 border-b border-white/10 flex-shrink-0"
        style={{ background: "rgba(7,22,48,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="px-4 h-[58px] flex items-center gap-3">
          <AppLogoMark variant="sm" />
          <span className="text-white font-black text-sm tracking-wide">
            Hospital Standards Challenge
          </span>
        </div>
      </header>

      <div className="flex-1 relative z-10">{children}</div>
    </div>
  );
}
