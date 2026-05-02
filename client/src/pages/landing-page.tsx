import { motion } from "framer-motion";
import { CalendarCheck, BarChart3, FileText, BookOpen, ArrowRight, BrainCircuit, CheckCircle2, Users, TrendingUp, Search, Stethoscope, Crown, Lock, Sparkles } from "lucide-react";
import { AppLogoMark } from "@/components/app-logo-mark";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { PathwayMenu } from "@/components/pathway-menu";

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
  "Track completion, accuracy, and knowledge gaps by unit — spot at-risk departments before a surveyor does.",
  "Built on real AAAHC v44, Joint Commission, and CMS 416 standards — not generic compliance content.",
  "25-question diagnostic gives every staff member a personalized readiness baseline on day one.",
  "Deep Dive Tracer mode mirrors real survey questioning so staff aren't surprised when it counts.",
  "AI-powered explanations close knowledge gaps in plain language, right after each question.",
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
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(160deg, #071630 0%, #0D2659 55%, #0F3080 100%)" }}
    >
      {/* Subtle full-page grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Header ── */}
      <header
        className="relative z-50 sticky top-0 border-b border-white/20"
        style={{ background: "rgba(7,22,48,0.95)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <AppLogoMark variant="sm" />
            <span className="font-black text-lg tracking-tight text-white" data-testid="text-app-name">Hospital Standards Challenge</span>
          </div>
          <div className="flex items-center gap-2">
            <PathwayMenu />
            <Button
              variant="ghost"
              onClick={() => setLocation("/auth")}
              className="text-white/80 hover:text-white hover:bg-white/10"
              data-testid="button-header-signin"
            >
              Sign In
            </Button>
            <Button
              onClick={() => setLocation("/auth")}
              className="bg-white text-[#0D2659] hover:bg-white/90 font-bold"
              data-testid="button-header-create-account"
            >
              Create Account
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">

        {/* ── Hero ── */}
        <section
          className="max-w-5xl mx-auto px-4 py-20 md:py-32 text-center"
          style={{ background: "linear-gradient(180deg, rgba(26,77,160,0.25) 0%, transparent 100%)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-6"
          >
            <AppLogoMark variant="lg" />
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl text-white" data-testid="text-hero-title">
              Hospital Standards Challenge
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed font-semibold" data-testid="text-hero-subtitle">
              Survey readiness training that closes compliance gaps — built for hospital and ASC staff who don't have time for another in-service.
            </p>
            <p className="text-base text-white/75 max-w-2xl leading-relaxed" data-testid="text-hero-supporting">
              Track staff competency by department, identify weak areas before a surveyor does, and keep your team audit-ready between surveys — in 10–15 minutes a day.
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={scrollToFeatures}
                className="bg-white text-[#0D2659] hover:bg-white/90 font-bold shadow-lg shadow-black/30"
                data-testid="button-hero-how-it-works"
              >
                See How It Works
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/auth")}
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                data-testid="button-hero-create-account"
              >
                Create Account
              </Button>
            </div>
          </motion.div>
        </section>

        {/* ── For Leaders ── */}
        <section className="border-y border-white/10 py-16 md:py-20" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Users size={22} className="text-blue-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white" data-testid="text-leaders-heading">
                  For Nursing, Quality, and Education Leaders
                </h2>
              </div>
              <p className="text-base text-white/70 leading-relaxed max-w-3xl mb-6" data-testid="text-leaders-description">
                Hospital Standards Challenge turns standards review into short, gamified sessions staff actually complete&#8212;without adding more in&#8209;service time.
              </p>
              <ul className="space-y-3 mb-8">
                {leaderBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-leader-bullet-${i}`}>
                    <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-white/80 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <TrendingUp size={22} className="text-blue-300" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-white" data-testid="text-get-started-heading">
                  How to Get Started
                </h3>
              </div>
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-step-${i}`}>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-base text-white/80 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        {/* ── Features Grid ── */}
        <section id="features-section" className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div
                  className="p-5 flex items-start gap-4 rounded-xl border border-white/10"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/25 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">{feature.title}</h3>
                    <p className="text-sm text-white/60 mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Diagnostic Promo ── */}
        <section className="py-16 md:py-20 border-y border-white/10" style={{ background: "rgba(20,100,90,0.25)" }}>
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <Stethoscope size={48} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2" data-testid="text-diagnostic-promo-heading">
                    How survey&#8209;ready are you right now?
                  </h2>
                  <p className="text-base text-white/75 leading-relaxed mb-4 max-w-xl" data-testid="text-diagnostic-promo-body">
                    Take our <span className="font-bold text-teal-300">Diagnostic Quiz</span> &#8212; 25 scenario&#8209;based questions across every compliance domain. No studying needed. Just honest answers to find your starting line. In 10 minutes, you&#x2019;ll know exactly where to focus.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white shadow-md shadow-teal-500/20 font-bold"
                      onClick={() => setLocation("/auth")}
                      data-testid="button-diagnostic-promo-signup"
                    >
                      Create Account to Start
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                    <div className="flex items-center gap-1.5 text-sm text-teal-300/80 font-medium">
                      <Lock size={14} />
                      <span>Free with your account</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Mastery Promo ── */}
        <section className="py-16 md:py-20 border-b border-white/10" style={{ background: "rgba(100,60,10,0.30)" }}>
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Crown size={48} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white" data-testid="text-mastery-promo-heading">
                      Prove you&#x2019;re survey&#8209;ready with the Final Assessment
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/30 text-amber-300 border border-amber-400/40 uppercase tracking-wider flex-shrink-0">
                      Earn it
                    </span>
                  </div>
                  <p className="text-base text-white/75 leading-relaxed mb-3 max-w-xl" data-testid="text-mastery-promo-body">
                    Finished all the levels? The <span className="font-bold text-amber-300">Final Assessment</span> unlocks after you complete every section &#8212; 25 advanced questions that go deeper than anything in the training. See exactly how far you&#x2019;ve come since your Diagnostic, and walk into your next survey with confidence.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start mb-4">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-300/80">
                      <Sparkles size={14} />
                      <span>Expert&#8209;level scenarios</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-300/80">
                      <CheckCircle2 size={14} />
                      <span>Full results after completion</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-amber-300/80">
                      <BarChart3 size={14} />
                      <span>Compare to your diagnostic baseline</span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-md shadow-amber-500/20 font-bold"
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

        {/* ── Final CTA ── */}
        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl font-black tracking-tight text-white">Ready to see the difference?</h2>
            <p className="text-base text-white/65 max-w-lg">
              Sign in to explore the app, or create an account to get started.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
                className="bg-white text-[#0D2659] hover:bg-white/90 font-bold"
                data-testid="button-bottom-signin"
              >
                Sign In
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/auth")}
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                data-testid="button-bottom-create-account"
              >
                Create Account
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/10 py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-white/40 leading-relaxed" data-testid="text-disclaimer">
            Hospital Standards Challenge is not affiliated with, endorsed by, or sponsored by The Joint Commission.
            All content is for educational and training purposes only.
          </p>
          <p className="text-xs text-white/40 mt-2">
            <a href="/terms" className="underline hover:text-white/70" data-testid="link-terms-landing">Terms & Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
