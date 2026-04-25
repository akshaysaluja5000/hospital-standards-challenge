import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Hospital,
  Stethoscope,
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
  clinics: {
    slug: "clinics",
    pageTitle: "Clinics — Hospital Standards Challenge",
    audience: "For Outpatient Clinic Administrators",
    heroIcon: Stethoscope,
    headline: "Ready for MOMA / MOSH / TSC Surveys?",
    subhead:
      "A lightweight, no-IT-required training platform that gets your clinic staff survey-ready in days. Track completion by staff member and walk into your next inspection with confidence.",
    features: [
      {
        icon: Zap,
        title: "Lightweight deployment",
        description:
          "Browser-based. No installs, no servers. Send your team a link and they can start training the same day.",
      },
      {
        icon: Wifi,
        title: "No IT required",
        description:
          "Works on any device — phone, tablet, or front-desk computer. Your office manager can roll it out without filing a ticket.",
      },
      {
        icon: ClipboardCheck,
        title: "Per-staff completion tracking",
        description:
          "See exactly who's completed which modules, who needs a nudge, and who's ready for the surveyor's questions.",
      },
    ],
    bottomLine:
      "Designed for the realities of small clinic operations: simple to launch, easy to track, fast to show results.",
  },
  asc: {
    slug: "asc",
    pageTitle: "ASCs — Hospital Standards Challenge",
    audience: "For Ambulatory Surgery Centers",
    heroIcon: Activity,
    headline: "ASC Accreditation Training That Actually Sticks.",
    subhead:
      "CMS- and AAAHC-aligned training built for the pace of an ASC. Fast onboarding for new hires, refreshers for veteran staff, and reporting your corporate partners can use day one.",
    features: [
      {
        icon: ShieldCheck,
        title: "CMS & AAAHC-aligned content",
        description:
          "Modules covering the standards your surveyors actually cite — sterile field, instruments, EOC, patient safety, and documentation.",
      },
      {
        icon: Zap,
        title: "Fast onboarding",
        description:
          "New techs and nurses can complete their first compliance modules in their first week. No 4-hour orientation videos.",
      },
      {
        icon: Building2,
        title: "Surgery Partners-compatible",
        description:
          "Roles, reporting scopes, and dashboards built to plug into multi-site management — so corporate, regional, and center-level leaders all see what they need.",
      },
    ],
    bottomLine:
      "ASC-specific content. ASC-friendly pricing. Built by people who know what a 7am first-case start looks like.",
  },
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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-2 py-1 -ml-2"
            data-testid="link-home-header"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Shield size={20} className="text-primary-foreground" />
            </div>
            <span className="font-black text-lg tracking-tight">
              Hospital Standards Challenge
            </span>
          </button>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => setLocation("/auth")}
              data-testid="button-header-signin"
            >
              Sign In
            </Button>
            <Button
              onClick={() => setLocation("/auth")}
              data-testid="button-header-create-account"
            >
              Create Account
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <span
              className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full"
              data-testid="text-audience"
            >
              {config.audience}
            </span>
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
              <HeroIcon size={44} className="text-primary-foreground" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl"
              data-testid="text-hero-headline"
            >
              {config.headline}
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
              data-testid="text-hero-subhead"
            >
              {config.subhead}
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
                data-testid="button-hero-create-account"
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/auth")}
                data-testid="button-hero-signin"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        </section>

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
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
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
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <CheckCircle2 size={36} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              See it in action.
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Get a 20-minute walkthrough tailored to your organization. We'll
              show you the dashboards, content library, and a sample staff
              experience.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
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
              onClick={() => setLocation("/clinics")}
              className="font-medium hover:underline"
              data-testid="link-footer-clinics"
            >
              Clinics
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

export function ClinicsPage() {
  return <SolutionsPage slug="clinics" />;
}

export function AscPage() {
  return <SolutionsPage slug="asc" />;
}
