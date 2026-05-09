import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, BarChart3, TrendingUp, GraduationCap, BrainCircuit,
  Users, Building2, Stethoscope, ChevronRight, ShieldCheck,
  ClipboardList, FileText, Lock, AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import { LEADERSHIP_LABELS } from "@shared/schema";

const LEADERSHIP_RANK: Record<string, number> = {
  learner: 0, educator: 1, director: 2, ceo: 3, admin: 4, super_admin: 5,
};

function getEffectiveRole(user: { isAdmin: boolean; leadershipRole?: string | null }) {
  const lr = (user.leadershipRole as string) || "learner";
  if (user.isAdmin && (LEADERSHIP_RANK[lr] ?? 0) < LEADERSHIP_RANK["admin"]) return "admin";
  return lr;
}

interface ConsoleCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  href: string;
  minRole: string;
  badge?: string;
}

const CONSOLE_CARDS: ConsoleCard[] = [
  {
    id: "executive-report",
    title: "Executive Readiness Report",
    description: "Facility-wide readiness scores, trend charts, and guided education plan status with CSV/PDF export.",
    icon: TrendingUp,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    href: "/executive-report",
    minRole: "director",
    badge: "Exec",
  },
  {
    id: "user-management",
    title: "User Management",
    description: "View all registered learners, track engagement and accuracy, and assign leadership roles.",
    icon: Users,
    iconBg: "bg-chart-2/10",
    iconColor: "text-chart-2",
    href: "/admin",
    minRole: "director",
  },
  {
    id: "guided-education",
    title: "Guided Education Oversight",
    description: "Monitor active remediation plans, track overdue assignments, and verify supervisor sign-offs.",
    icon: GraduationCap,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    href: "/corrective-actions",
    minRole: "director",
  },
  {
    id: "ai-coach",
    title: "AI Leadership Coach",
    description: "AI-generated readiness summaries, staff performance insights, and recommended focus areas.",
    icon: BrainCircuit,
    iconBg: "bg-chart-4/10",
    iconColor: "text-chart-4",
    href: "/admin",
    minRole: "director",
    badge: "AI",
  },
];

export default function LeadershipHubPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const effectiveRole = user ? getEffectiveRole(user) : "learner";
  const effectiveRank = LEADERSHIP_RANK[effectiveRole] ?? 0;

  const isAsc = user?.organizationType === "asc";
  const moduleLabel = isAsc ? "ASC" : "Hospital";
  const ModuleIcon = isAsc ? Stethoscope : Building2;

  const leadershipLabel = user
    ? (LEADERSHIP_LABELS as Record<string, string>)[effectiveRole] ?? effectiveRole
    : "—";

  const canAccess = (card: ConsoleCard) =>
    effectiveRank >= (LEADERSHIP_RANK[card.minRole] ?? 99);

  const needsMfa = effectiveRank >= LEADERSHIP_RANK["ceo"];
  const { data: mfaStatus } = useQuery<{ required: boolean; enabled: boolean; verified: boolean }>({
    queryKey: ["/api/mfa/status"],
    enabled: needsMfa,
  });

  return (
    <div className="min-h-screen pb-20">
      {/* Sub-header */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            data-testid="button-back-to-training"
            aria-label="Back to training"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-bold text-base text-foreground">Leadership Console</h1>
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20"
                data-testid="badge-module-scope"
              >
                <ModuleIcon size={11} />
                {moduleLabel}
              </span>
            </div>
            <p className="text-sm font-medium text-foreground/70" data-testid="text-role-label">
              {leadershipLabel} · facility-scoped view
            </p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary hidden sm:inline">Secured</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 pt-8 flex flex-col gap-8">

        {/* MFA setup banner for ceo+ users */}
        {needsMfa && mfaStatus && !mfaStatus.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border-2 border-amber-500/60 bg-amber-50 dark:bg-amber-500/15 p-5 flex items-start gap-4"
            data-testid="banner-mfa-setup"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm mb-1 text-amber-900 dark:text-amber-200">Two-Factor Authentication Required</h2>
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed mb-3">
                Your role requires MFA to access reporting tools. Set up your authenticator app now to unlock the Executive Report, AI Coach, and data exports.
              </p>
              <Button size="sm" onClick={() => setLocation("/mfa-setup")} data-testid="button-setup-mfa-from-hub">
                Set Up MFA Now
              </Button>
            </div>
          </motion.div>
        )}

        {/* MFA verify banner — set up but not verified this session */}
        {needsMfa && mfaStatus?.enabled && !mfaStatus.verified && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border-2 border-primary/50 bg-primary/8 p-5 flex items-start gap-4"
            data-testid="banner-mfa-verify"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm mb-1">Verify Your Identity</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Enter your authenticator code to access reporting tools for this session.
              </p>
              <Button size="sm" onClick={() => setLocation("/mfa-verify")} data-testid="button-verify-mfa-from-hub">
                Enter Code
              </Button>
            </div>
          </motion.div>
        )}

        {/* Scope banner */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4"
          data-testid="card-scope-info"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <BarChart3 size={20} className="text-primary" />
          </div>
          <div className="min-w-0">
            <h2 className="font-bold text-sm mb-1">Your data scope</h2>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-scope-description">
              {effectiveRole === "super_admin" || effectiveRole === "admin"
                ? "You have platform-wide access. All facilities and modules are visible."
                : effectiveRole === "ceo"
                  ? `You are viewing ${moduleLabel} data for your assigned facility with executive-level access including data exports and audit logs.`
                  : effectiveRole === "director"
                    ? `You are viewing ${moduleLabel} data for your assigned facility. Contact a system admin to request multi-site access.`
                    : effectiveRole === "educator"
                      ? `You can review completion and manage Guided Education Plans for learners in your department (${moduleLabel}).`
                      : "Your access level does not include leadership tools."}
            </p>
          </div>
        </motion.div>

        {/* Facility scoping note for hospital/ASC separation */}
        {(effectiveRole === "admin" || effectiveRole === "super_admin") && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-amber-500/60 bg-amber-50 dark:bg-amber-500/12 px-4 py-3 flex items-center gap-2 text-sm text-amber-900 dark:text-amber-300"
            data-testid="banner-multi-module"
          >
            <ClipboardList size={15} className="flex-shrink-0 text-amber-700 dark:text-amber-400" />
            <span>
              <strong>Multi-module admin:</strong> Hospital and ASC data are segregated. Use the pathway switcher on the learner dashboard to change your active module context.
            </span>
          </motion.div>
        )}

        {/* Console cards */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-4" data-testid="text-tools-label">
            Leadership Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONSOLE_CARDS.map((card, i) => {
              const accessible = canAccess(card);
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  data-testid={`card-console-${card.id}`}
                  className={`rounded-2xl border-2 p-5 flex flex-col gap-3 transition-all ${
                    accessible
                      ? "border-border bg-card hover:border-primary/40 hover:shadow-md cursor-pointer"
                      : "border-border/60 bg-muted/30 opacity-75 cursor-not-allowed"
                  }`}
                  onClick={() => accessible && setLocation(card.href)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                      {accessible
                        ? <Icon size={20} className={card.iconColor} />
                        : <Lock size={18} className="text-muted-foreground" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-sm leading-tight" data-testid={`text-card-title-${card.id}`}>
                          {card.title}
                        </h3>
                        {card.badge && accessible && (
                          <span className={`px-1.5 py-0.5 rounded text-xs font-black uppercase tracking-wider ${card.iconBg} ${card.iconColor}`}>
                            {card.badge}
                          </span>
                        )}
                        {!accessible && (
                          <span className="px-1.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-muted text-muted-foreground">
                            Restricted
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  {accessible && (
                    <div className="flex justify-end">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold ${card.iconColor}`}>
                        Open <ChevronRight size={13} />
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Permission summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-border bg-card p-4"
          data-testid="card-permission-summary"
        >
          <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
            <ShieldCheck size={13} />
            Access Summary
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { label: "Your Role", value: leadershipLabel, testid: "text-summary-role" },
              { label: "Module", value: moduleLabel, testid: "text-summary-module" },
              { label: "Scope", value: effectiveRank >= 3 ? "All Facilities" : "Own Facility", testid: "text-summary-scope" },
              { label: "Data Access", value: isAsc ? "ASC Only" : "Hospital Only", testid: "text-summary-data" },
            ].map(item => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.label}</span>
                <span className="text-sm font-bold" data-testid={item.testid}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back to learning */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            data-testid="button-back-to-learning"
            className="gap-2"
          >
            <ArrowLeft size={15} />
            Back to Training Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
