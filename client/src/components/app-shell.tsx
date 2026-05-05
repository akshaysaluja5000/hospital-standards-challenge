import { ReactNode } from "react";
import { AppLogoMark } from "./app-logo-mark";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <header
        className="sticky top-0 z-50 border-b border-border flex-shrink-0 bg-background/95 backdrop-blur-md"
      >
        <div className="px-4 h-[58px] flex items-center justify-center gap-2.5">
          <AppLogoMark variant="sm" />
          <span className="text-foreground text-sm tracking-tight">
            <span className="font-semibold">Accreditation</span><span className="font-bold italic"> Ready</span>
          </span>
        </div>
      </header>

      <div className="flex-1 relative z-10">{children}</div>
    </div>
  );
}
