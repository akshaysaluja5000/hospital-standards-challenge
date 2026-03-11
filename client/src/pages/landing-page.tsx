import { motion } from "framer-motion";
import { Shield, CalendarCheck, BarChart3, FileText, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

const features = [
  {
    icon: CalendarCheck,
    title: "Gamified 20-question levels",
    description: "Bite-sized quizzes covering real Joint Commission standards, built for busy schedules",
  },
  {
    icon: BarChart3,
    title: "Real-time unit dashboards",
    description: "Track team compliance readiness at a glance",
  },
  {
    icon: FileText,
    title: "Pre-built Joint Commission tracer content",
    description: "Expertly crafted questions covering key standards",
  },
  {
    icon: BookOpen,
    title: "Compliance Handbook reference guide",
    description: "Comprehensive study materials always at your fingertips",
  },
];

export default function LandingPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Shield size={20} className="text-primary-foreground" />
            </div>
            <span className="font-black text-lg tracking-tight" data-testid="text-app-name">Hospital Standards Challenge</span>
          </div>
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
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
              <Shield size={44} className="text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl" data-testid="text-hero-title">
              Turn Joint Commission compliance training into a{" "}
              <span className="text-primary">game your staff will love</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed" data-testid="text-hero-subtitle">
              Swipe, answer, and level up your compliance knowledge. Build streaks, earn XP, and become the expert your team needs.
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
                data-testid="button-hero-signin"
              >
                Sign In
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/auth")}
                data-testid="button-hero-create-account"
              >
                Create Account
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-5 flex items-start gap-4" data-testid={`card-feature-${index}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted-foreground leading-relaxed" data-testid="text-disclaimer">
            Hospital Standards Challenge is not affiliated with, endorsed by, or sponsored by The Joint Commission.
            All content is for educational and training purposes only.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            <a href="/terms" className="underline" data-testid="link-terms-landing">Terms & Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
