import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Check,
  ArrowRight,
  AlertCircle,
  Scissors,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Wrench,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  Building2,
  Users,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import {
  ROLE_CONFIGS,
  DEPARTMENT_ORDER,
  SCOPE_CHIP_LABELS,
  SCOPE_CHIP_TOOLTIPS,
  rolesByDepartment,
  type RoleConfig,
} from "@shared/roles";

const ROLE_ICONS: Record<string, LucideIcon> = {
  scrub_tech: Scissors,
  spd_tech: Sparkles,
  or_circulating_nurse: Stethoscope,
  or_manager: ClipboardList,
  pacu_nurse: HeartPulse,
  evs: Sparkles,
  facilities_maint: Wrench,
  compliance_officer: ShieldCheck,
  nurse_educator: GraduationCap,
};

const DEPT_ICONS: Record<string, LucideIcon> = {
  "Operating Room": Scissors,
  "Sterile Processing": Sparkles,
  "PACU & Floor": HeartPulse,
  "Environmental Services": Sparkles,
  "Facilities & Maintenance": Wrench,
  "Leadership & Compliance": Building2,
};

const SCOPE_BADGE_CLASSES: Record<RoleConfig["scope"], string> = {
  DEPT: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  DEPT_PLUS_ALL: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  FULL: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
};

const SELECTION_KEY = "mosh_pending_role_id";

export default function RoleSelectPage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showMultiRoleModal, setShowMultiRoleModal] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SELECTION_KEY);
      if (saved && ROLE_CONFIGS.some((r) => r.id === saved)) {
        setSelectedId(saved);
      } else if (user?.roleId) {
        const { data } = queryClient.getQueryData<any>(["/api/auth/me"]) || {};
        if (data?.roleId) setSelectedId(null);
      }
    } catch {}
  }, [user]);

  const { data: dbRoles, isLoading } = useQuery<{ id: number; slug: string }[]>({
    queryKey: ["/api/roles"],
  });

  const slugToDbId = useMemo(() => {
    const map = new Map<string, number>();
    (dbRoles || []).forEach((r) => map.set(r.slug, r.id));
    return map;
  }, [dbRoles]);

  const setRoleMutation = useMutation({
    mutationFn: async (roleId: string) => {
      const res = await apiRequest("POST", "/api/auth/role", { roleSlug: roleId });
      return res.json();
    },
    onSuccess: async (updatedUser, roleId) => {
      try { sessionStorage.removeItem(SELECTION_KEY); } catch {}
      queryClient.setQueryData(["/api/auth/me"], updatedUser);
      await queryClient.invalidateQueries({ queryKey: ["/api/user/assigned-chapters"] });
      await queryClient.invalidateQueries({ queryKey: ["/api/user/view-scope"] });
      const cfg = ROLE_CONFIGS.find((r) => r.id === roleId);
      if (!cfg) {
        toast({ title: "Error", description: "Role configuration is missing.", variant: "destructive" });
        navigate("/role-error");
        return;
      }
      toast({ title: "Role saved", description: `You're set up as ${cfg.title}.` });
      navigate("/");
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to save role", variant: "destructive" });
    },
  });

  const grouped = useMemo(() => rolesByDepartment(), []);
  const selectedRole = useMemo(
    () => ROLE_CONFIGS.find((r) => r.id === selectedId) || null,
    [selectedId]
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setShowError(false);
    try { sessionStorage.setItem(SELECTION_KEY, id); } catch {}
  };

  const handleContinue = () => {
    if (!selectedId) {
      setShowError(true);
      return;
    }
    if (!slugToDbId.has(selectedId)) {
      toast({ title: "Error", description: "Selected role is not available. Please choose another.", variant: "destructive" });
      return;
    }
    setRoleMutation.mutate(selectedId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const departmentsInOrder = DEPARTMENT_ORDER.filter((d) => grouped[d]?.length);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-muted/30 pb-36">
        {user?.roleId && (
          <div className="max-w-4xl mx-auto px-4 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              data-testid="button-role-select-back"
              className="-ml-2"
            >
              <ChevronLeft size={16} />
              Back
            </Button>
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 pt-10 md:pt-14">
          <div className="text-center mb-2">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase border-primary/30 text-primary bg-primary/5"
              data-testid="badge-step"
            >
              Step 1 of 2 — Choose your role
            </Badge>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6 text-xs text-muted-foreground" data-testid="text-step-indicator">
            <span className="font-semibold text-primary">1. Choose your role</span>
            <span aria-hidden="true">›</span>
            <span>2. Start your training</span>
          </div>

          <div className="text-center mb-8 md:mb-10">
            <h1
              className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
              data-testid="text-role-select-title"
            >
              What's your role at MOSH?
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {user?.firstName ? `Welcome, ${user.firstName}. ` : ""}
              Select your department so we can focus your training on the Joint Commission standards that matter most to your work.
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto mt-2">
              You'll go straight to the training that matches this role. You can change your role later from your profile.
            </p>
          </div>

          <div className="space-y-8">
            {departmentsInOrder.map((dept) => {
              const DeptIcon = DEPT_ICONS[dept] || Users;
              return (
                <section key={dept} data-testid={`section-dept-${dept.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center gap-2 mb-4 px-1">
                    <DeptIcon size={16} className="text-muted-foreground" />
                    <h2 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      {dept}
                    </h2>
                    <div className="flex-1 h-px bg-border ml-2" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {grouped[dept].map((role) => {
                      const isSelected = selectedId === role.id;
                      const RoleIcon = ROLE_ICONS[role.id] || Users;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          aria-label={`${role.title}. ${role.description}. ${SCOPE_CHIP_TOOLTIPS[role.scope]}`}
                          data-testid={`card-role-${role.id}`}
                          onClick={() => handleSelect(role.id)}
                          className={`group relative text-left rounded-xl border-2 bg-card p-4 transition-all hover-elevate active-elevate-2 ${
                            isSelected
                              ? "border-primary ring-2 ring-primary/20 shadow-sm bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`shrink-0 rounded-lg p-2.5 transition-colors ${
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <RoleIcon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="font-semibold text-base leading-tight">
                                  {role.title}
                                </h3>
                                {isSelected && (
                                  <div
                                    className="shrink-0 rounded-full bg-primary text-primary-foreground p-0.5"
                                    data-testid={`indicator-selected-${role.id}`}
                                  >
                                    <Check size={14} strokeWidth={3} />
                                  </div>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1 leading-snug">
                                {role.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5"
                                >
                                  {role.department.toUpperCase()}
                                </Badge>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-block"
                                      data-testid={`chip-scope-${role.id}`}
                                    >
                                      <Badge
                                        variant="outline"
                                        className={`text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5 cursor-help ${SCOPE_BADGE_CLASSES[role.scope]}`}
                                      >
                                        {SCOPE_CHIP_LABELS[role.scope]}
                                      </Badge>
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="max-w-xs">
                                    <p className="text-xs">{SCOPE_CHIP_TOOLTIPS[role.scope]}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowMultiRoleModal(true)}
              data-testid="button-multi-role"
              className="text-sm text-primary hover:underline font-medium"
            >
              I work in more than one role
            </button>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            {showError && !selectedId && (
              <div
                role="alert"
                data-testid="alert-no-selection"
                className="mb-3 flex items-center gap-2 text-sm text-destructive font-medium"
              >
                <AlertCircle size={16} />
                <span>Select a role to continue.</span>
              </div>
            )}
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                {selectedRole ? (
                  <div data-testid="text-role-summary">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Selected role
                    </p>
                    <p className="font-semibold truncate">{selectedRole.title}</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      No role selected
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Choose your role above to continue
                    </p>
                  </div>
                )}
              </div>
              <Button
                size="lg"
                className="shrink-0 gap-2"
                data-testid="button-confirm-role"
                disabled={setRoleMutation.isPending}
                onClick={handleContinue}
              >
                {setRoleMutation.isPending ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Saving...
                  </>
                ) : (
                  <>
                    Continue <ArrowRight size={16} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <Dialog open={showMultiRoleModal} onOpenChange={setShowMultiRoleModal}>
          <DialogContent data-testid="dialog-multi-role">
            <DialogHeader>
              <DialogTitle>More than one role?</DialogTitle>
              <DialogDescription className="pt-2 text-sm leading-relaxed">
                Pick the role you spend the most time in. You can switch roles from your profile at any time.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setShowMultiRoleModal(false)}
                data-testid="button-multi-role-close"
              >
                Got it
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}
