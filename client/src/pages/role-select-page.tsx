import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Check,
  ArrowRight,
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
  type LucideIcon,
} from "lucide-react";

type Role = {
  id: number;
  slug: string;
  name: string;
  department: string;
  scope: "standard" | "all" | "dual";
};

const ROLE_META: Record<string, { description: string; icon: LucideIcon }> = {
  scrub_tech: {
    description: "Sterile field, instruments, OR protocol",
    icon: Scissors,
  },
  spd_tech: {
    description: "Decontamination, sterilization, instrument processing",
    icon: Sparkles,
  },
  or_circulating_nurse: {
    description: "OR safety, time-outs, patient care documentation",
    icon: Stethoscope,
  },
  pacu_nurse: {
    description: "Recovery care, monitoring, patient documentation",
    icon: HeartPulse,
  },
  evs: {
    description: "Environmental cleaning, waste segregation, EOC safety",
    icon: Sparkles,
  },
  facilities_maint: {
    description: "Building systems, life safety, environment of care",
    icon: Wrench,
  },
  or_manager: {
    description: "OR operations leadership across all chapters",
    icon: ClipboardList,
  },
  compliance_officer: {
    description: "Full survey readiness across every standard",
    icon: ShieldCheck,
  },
  nurse_educator: {
    description: "Staff training and competency across all areas",
    icon: GraduationCap,
  },
};

const DEPT_META: Record<string, { label: string; icon: LucideIcon }> = {
  OR: { label: "OPERATING ROOM", icon: Scissors },
  SPD: { label: "STERILE PROCESSING", icon: Sparkles },
  PACU: { label: "PACU & FLOOR", icon: HeartPulse },
  EVS: { label: "ENVIRONMENTAL SERVICES", icon: Sparkles },
  Facilities: { label: "FACILITIES & MAINTENANCE", icon: Wrench },
  Leadership: { label: "LEADERSHIP & COMPLIANCE", icon: Building2 },
};

const DEPT_ORDER = ["OR", "SPD", "PACU", "EVS", "Facilities", "Leadership"];

function scopeBadge(scope: Role["scope"]) {
  if (scope === "all") return { label: "FULL ACCESS", className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" };
  if (scope === "dual") return { label: "DEPT + ALL", className: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" };
  return { label: "DEPT. ACCESS", className: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20" };
}

export default function RoleSelectPage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const { data: roles, isLoading } = useQuery<Role[]>({
    queryKey: ["/api/roles"],
  });

  const setRoleMutation = useMutation({
    mutationFn: async (roleSlug: string) => {
      const res = await apiRequest("POST", "/api/auth/role", { roleSlug });
      return res.json();
    },
    onSuccess: async (updatedUser) => {
      queryClient.setQueryData(["/api/auth/me"], updatedUser);
      await queryClient.invalidateQueries({ queryKey: ["/api/user/assigned-chapters"] });
      await queryClient.invalidateQueries({ queryKey: ["/api/user/view-scope"] });
      toast({ title: "Role saved", description: "Your training is now tailored to your role." });
      navigate("/");
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to save role", variant: "destructive" });
    },
  });

  const grouped = useMemo(() => {
    const g: Record<string, Role[]> = {};
    (roles || []).forEach((r) => {
      (g[r.department] = g[r.department] || []).push(r);
    });
    return g;
  }, [roles]);

  const selectedRole = useMemo(
    () => (roles || []).find((r) => r.slug === selectedSlug) || null,
    [roles, selectedSlug]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const departmentsInOrder = DEPT_ORDER.filter((d) => grouped[d]?.length).concat(
    Object.keys(grouped).filter((d) => !DEPT_ORDER.includes(d))
  );

  return (
    <div className="min-h-screen bg-muted/30 pb-32">
      <div className="max-w-4xl mx-auto px-4 pt-10 md:pt-14">
        <div className="text-center mb-8 md:mb-10">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase border-primary/30 text-primary bg-primary/5"
            data-testid="badge-step"
          >
            Step 1 of 2
          </Badge>
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
        </div>

        <div className="space-y-8">
          {departmentsInOrder.map((dept) => {
            const meta = DEPT_META[dept] || { label: dept.toUpperCase(), icon: Users };
            const DeptIcon = meta.icon;
            return (
              <section key={dept} data-testid={`section-dept-${dept.toLowerCase()}`}>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <DeptIcon size={16} className="text-muted-foreground" />
                  <h2 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    {meta.label}
                  </h2>
                  <div className="flex-1 h-px bg-border ml-2" />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {grouped[dept].map((role) => {
                    const isSelected = selectedSlug === role.slug;
                    const roleMeta = ROLE_META[role.slug] || { description: role.department, icon: Users };
                    const RoleIcon = roleMeta.icon;
                    const sb = scopeBadge(role.scope);
                    return (
                      <button
                        key={role.slug}
                        type="button"
                        data-testid={`card-role-${role.slug}`}
                        onClick={() => setSelectedSlug(role.slug)}
                        className={`group relative text-left rounded-xl border-2 bg-card p-4 transition-all hover-elevate active-elevate-2 ${
                          isSelected
                            ? "border-primary ring-2 ring-primary/20 shadow-sm"
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
                                {role.name}
                              </h3>
                              {isSelected && (
                                <div className="shrink-0 rounded-full bg-primary text-primary-foreground p-0.5">
                                  <Check size={14} strokeWidth={3} />
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1 leading-snug">
                              {roleMeta.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              <Badge
                                variant="outline"
                                className="text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5"
                              >
                                {role.department.toUpperCase()}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={`text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5 ${sb.className}`}
                              >
                                {sb.label}
                              </Badge>
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
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            {selectedRole ? (
              <div data-testid="text-role-summary">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Selected role
                </p>
                <p className="font-semibold truncate">{selectedRole.name}</p>
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
            disabled={!selectedSlug || setRoleMutation.isPending}
            onClick={() => selectedSlug && setRoleMutation.mutate(selectedSlug)}
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
  );
}
