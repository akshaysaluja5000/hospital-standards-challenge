import { motion } from "framer-motion";
import {
  ArrowRight,
  Hospital,
  Activity,
  ClipboardCheck,
  Users,
  BarChart3,
  Wifi,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { PathwayMenu } from "@/components/pathway-menu";
import { AppLogoMark } from "@/components/app-logo-mark";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionConfig {
  slug: string;
  pageTitle: string;
  audience: string;
  heroIcon: LucideIcon;
  headline: string;
  subhead: string;
  features: Feature[];
  bottomLine: string;
}

const SOLUTIONS: Record<string, SolutionConfig> = {
  hospitals: {
    slug: "hospitals",
    pageTitle: "Hospitals — Hospital Standards Challenge",
    audience: "For Hospital Compliance Directors",
    heroIcon: Hospital,
    headline: "Compliance Training Built for Hospitals.",
    subhead:
      "Get every nurse, tech, and unit leader Joint Commission ready — without adding hours to anyone's week. Short, gamified levels keep staff engaged between surveys, while leaderboards let you track readiness across every department.",
    features: [
      {
        icon: ShieldCheck,
        title: "Joint Commission readiness",
        description:
          "Real tracer scenarios across OR, SPD, EOC, infection control, patient care documentation, and more — mapped to current standards.",
      },
      {
        icon: Users,
        title: "Nurse & staff training that sticks",
        description:
          "10–15 minute daily sessions with streaks, XP, and AI-powered explanations turn standards review into something staff actually finish.",
      },
      {
        icon: BarChart3,
        title: "Department-wide leaderboards",
        description:
          "Track completion, accuracy, and knowledge gaps by unit. Spot at-risk departments before a surveyor does.",
      },
    ],
    bottomLine:
      "Built with the same standards your survey teams use. Deployed in hours, not quarters.",
  },
  asc: {
    slug: "asc",
    pageTitle: "ASCs — Hospital Standards Challenge",
    audience: "For Ambulatory Surgery Centers",
    heroIcon: Activity,
    headline: "ASC Accreditation Training That Sticks.",
    subhead:
      "AAAHC, Joint Commission ASC pathway, and CMS Conditions for Coverage — covered. Built for the pace of an ASC, with fast onboarding for new hires, refreshers for veteran staff, and reporting that multi-site operators like Surgery Partners can use on day one.",
    features: [
      {
        icon: ShieldCheck,
        title: "AAAHC, JC ASC & CMS CfC content",
        description:
          "Modules aligned to AAAHC standards, the Joint Commission ASC accreditation pathway, and CMS Conditions for Coverage — the standards your surveyors actually cite.",
      },
      {
        icon: Zap,
        title: "Fast onboarding",
        description:
          "New techs and nurses can complete their first compliance modules in their first week. No 4-hour orientation videos.",
      },
      {
        icon: Building2,
        title: "Built for multi-site operators",
        description:
          "Roles, reporting scopes, and dashboards designed for groups like Surgery Partners and other multi-site ASC operators — corporate, regional, and center-level leaders all see what they need.",
      },
    ],
    bottomLine:
      "ASC-specific content tied to the standards your surveyors actually use. Built by people who know what a 7am first-case start looks like.",
  },
};

const SLUG_TO_MODULE: Record<string, string> = {
  hospitals: "hospital",
  asc: "asc",
};

export function SolutionsPage({ slug }: { slug: keyof typeof SOLUTIONS }) {
  const config = SOLUTIONS[slug];
  const [, setLocation] = useLocation();
  const HeroIcon = config.heroIcon;

  useEffect(() => {
    document.title = config.pageTitle;
    return () => {
      document.title = "Hospital Standards Challenge";
    };
  }, [config.pageTitle]);

  const goToAuth = () => {
    const module = SLUG_TO_MODULE[slug];
    if (module) {
      try { sessionStorage.setItem("mosh_intended_facility", module); } catch {}
    }
    setLocation("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark hero band */}
      <div
        className="relative"
        style={{ background: "linear-gradient(160deg, #2563EB 0%, #1D4ED8 45%, #1E40AF 100%)" }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <header className="relative z-10 sticky top-0 border-b border-white/20" style={{ background: "rgba(29,78,216,0.92)", backdropFilter: "blur(12px)" }}>
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setLocation("/")}
              className="flex items-center gap-2 rounded-lg px-2 py-1 -ml-2 hover:bg-white/10 transition-colors"
              data-testid="link-home-header"
            >
              <AppLogoMark variant="sm" />
              <span className="font-black text-lg tracking-tight text-white">
                Hospital Standards Challenge
              </span>
            </button>
            <div className="flex items-center gap-2">
              <PathwayMenu />
              <Button
                variant="ghost"
                onClick={goToAuth}
                className="text-white/80 hover:text-white hover:bg-white/10"
                data-testid="button-header-signin"
              >
                Sign In
              </Button>
              <Button
                onClick={goToAuth}
                className="bg-white text-[#0D2659] hover:bg-white/90 font-bold"
                data-testid="button-header-create-account"
              >
                Create Account
              </Button>
            </div>
          </div>
        </header>

        <section className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <span
              className="text-xs font-bold tracking-widest uppercase text-white/70 bg-white/10 border border-white/20 px-3 py-1 rounded-full"
              data-testid="text-audience"
            >
              {config.audience}
            </span>
            <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-sm">
              <HeroIcon size={44} className="text-white" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl text-white"
              data-testid="text-hero-headline"
            >
              {config.headline}
            </h1>
            <p
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
              data-testid="text-hero-subhead"
            >
              {config.subhead}
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={goToAuth}
                className="bg-white text-[#0D2659] hover:bg-white/90 font-bold shadow-lg shadow-black/20"
                data-testid="button-hero-create-account"
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={goToAuth}
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                data-testid="button-hero-signin"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        </section>
      </div>

      <main className="flex-1">
        <section className="bg-accent/30 border-y border-border py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                What you get
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {config.bottomLine}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {config.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Card
                    className="p-6 h-full flex flex-col gap-3"
                    data-testid={`card-feature-${index}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-base" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Ready to get started?</h2>
            <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
              <Button
                size="lg"
                onClick={goToAuth}
                data-testid="button-bottom-create-account"
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/")}
                data-testid="button-bottom-back-home"
              >
                Back to Main Site
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-3">
          <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
            <button
              type="button"
              onClick={() => setLocation("/")}
              className="font-medium hover:underline"
              data-testid="link-footer-home"
            >
              Main Site
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              type="button"
              onClick={() => setLocation("/hospitals")}
              className="font-medium hover:underline"
              data-testid="link-footer-hospitals"
            >
              Hospitals
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              type="button"
              onClick={() => setLocation("/asc")}
              className="font-medium hover:underline"
              data-testid="link-footer-asc"
            >
              ASC
            </button>
            <span className="text-muted-foreground">·</span>
            <a href="/terms" className="font-medium hover:underline" data-testid="link-footer-terms">
              Terms & Privacy
            </a>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Hospital Standards Challenge is not affiliated with, endorsed by, or
            sponsored by The Joint Commission, AAAHC, or CMS. All content is for
            educational and training purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function HospitalsPage() {
  return <SolutionsPage slug="hospitals" />;
}

export function AscPage() {
  return <SolutionsPage slug="asc" />;
}
