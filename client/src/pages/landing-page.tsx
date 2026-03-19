import { motion } from "framer-motion";
import { Shield, CalendarCheck, BarChart3, FileText, BookOpen, ArrowRight, BrainCircuit, CheckCircle2, Users, TrendingUp, Search, Stethoscope, Crown, Lock, Sparkles } from "lucide-react";
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
  {
    icon: Search,
    title: "Deep Dive Tracer Mode",
    description: "Go beyond the basics\u2014answer correctly to unlock expert\u2011level follow\u2011up questions that mirror real Joint Commission tracer rounds",
  },
  {
    icon: BrainCircuit,
    title: "AI\u2011Enhanced Learning",
    description: "AI tutor that explains missed questions in plain language and bedside scenarios",
  },
];

const leaderBullets = [
  "Aligns with tracer topics: instruments, environment of care, SPD, OR, documentation, EOC, and more.",
  "Deep Dive Tracer mode lets staff drill into expert\u2011level follow\u2011ups that mirror real survey questioning.",
  "Built\u2011in streaks and levels keep staff coming back between surveys.",
  "AI\u2011powered explanations help staff understand the \u2018why\u2019 behind each standard.",
];

const steps = [
  "Pick one unit to start with.",
  "Invite 10+ staff members to play 10\u201315 minutes a week for 4 weeks.",
  "Review the dashboard to see who\u2019s engaging and where knowledge gaps are.",
  "Use the data to focus your next in\u2011service or mock tracer.",
];

export default function LandingPage() {
  const [, setLocation] = useLocation();

  const scrollToFeatures = () => {
    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" });
  };

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
              Hospital Standards Challenge
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed font-semibold" data-testid="text-hero-subtitle">
              Gamified accreditation training that helps frontline staff feel survey&#8209;ready in 10&#8211;15 minutes a day.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-hero-supporting">
              Built from real standards and tracer scenarios for OR, SPD, and inpatient units&#8212;now with AI&#8209;powered explanations and practice.
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={scrollToFeatures}
                data-testid="button-hero-how-it-works"
              >
                See How It Works
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

        <section className="bg-accent/30 border-y border-border py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight" data-testid="text-leaders-heading">
                  For Nursing, Quality, and Education Leaders
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-6" data-testid="text-leaders-description">
                Hospital Standards Challenge turns standards review into short, gamified sessions staff actually complete&#8212;without adding more in&#8209;service time.
              </p>
              <ul className="space-y-3 mb-8">
                {leaderBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-leader-bullet-${i}`}>
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-foreground/80 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-black tracking-tight" data-testid="text-get-started-heading">
                  How to Get Started
                </h3>
              </div>
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-step-${i}`}>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-base text-foreground/80 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        <section id="features-section" className="max-w-5xl mx-auto px-4 py-16 md:py-24">
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

        <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/20 dark:via-cyan-950/20 dark:to-sky-950/20 border-y border-teal-200/50 dark:border-teal-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <Stethoscope size={48} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-teal-800 dark:text-teal-200" data-testid="text-diagnostic-promo-heading">
                      How survey&#8209;ready are you right now?
                    </h2>
                  </div>
                  <p className="text-base text-teal-700/80 dark:text-teal-300/80 leading-relaxed mb-4 max-w-xl" data-testid="text-diagnostic-promo-body">
                    Take our <span className="font-bold text-teal-700 dark:text-teal-200">Diagnostic Quiz</span> &#8212; 55 scenario&#8209;based questions across every compliance domain. No studying needed. Just honest answers to find your starting line. In 15 minutes, you&#x2019;ll know exactly where to focus.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-md shadow-teal-500/20 font-bold"
                      onClick={() => setLocation("/auth")}
                      data-testid="button-diagnostic-promo-signup"
                    >
                      Create Account to Start
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                    <div className="flex items-center gap-1.5 text-sm text-teal-600 dark:text-teal-400 font-medium">
                      <Lock size={14} />
                      <span>Free with your account</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-orange-950/20 border-b border-amber-200/50 dark:border-amber-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Crown size={48} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-amber-800 dark:text-amber-200" data-testid="text-mastery-promo-heading">
                      Prove you&#x2019;re survey&#8209;ready with the Final Assessment
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-200 uppercase tracking-wider">
                      Earn it
                    </span>
                  </div>
                  <p className="text-base text-amber-700/80 dark:text-amber-300/80 leading-relaxed mb-3 max-w-xl" data-testid="text-mastery-promo-body">
                    Finished all the levels? The <span className="font-bold text-amber-700 dark:text-amber-200">Final Assessment</span> unlocks after you complete every section &#8212; 55 advanced questions that go deeper than anything in the training. See exactly how far you&#x2019;ve come since your Diagnostic, and walk into your next survey with confidence.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start mb-4">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-300">
                      <Sparkles size={14} />
                      <span>Expert&#8209;level scenarios</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-300">
                      <CheckCircle2 size={14} />
                      <span>Full results after completion</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-300">
                      <BarChart3 size={14} />
                      <span>Compare to your diagnostic baseline</span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md shadow-amber-500/20 font-bold"
                    onClick={() => setLocation("/auth")}
                    data-testid="button-mastery-promo-signup"
                  >
                    Create Account to Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl font-black tracking-tight">Ready to see the difference?</h2>
            <p className="text-base text-muted-foreground max-w-lg">
              Sign in to explore the app, or create an account to get started.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
                data-testid="button-bottom-signin"
              >
                Sign In
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/auth")}
                data-testid="button-bottom-create-account"
              >
                Create Account
              </Button>
            </div>
          </motion.div>
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
