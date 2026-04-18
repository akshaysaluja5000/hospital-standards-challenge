import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";

type Role = {
  id: number;
  slug: string;
  name: string;
  department: string;
  description: string;
  scope: string;
};

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
      toast({ title: "Role saved", description: "Your training is now tailored to your role." });
      navigate("/");
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to save role", variant: "destructive" });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const grouped = (roles || []).reduce<Record<string, Role[]>>((acc, r) => {
    (acc[r.department] = acc[r.department] || []).push(r);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-role-select-title">
            What's your role?
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome{user?.firstName ? `, ${user.firstName}` : ""}! Choose your role so we can focus your training on the standards that matter most to your work.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(grouped).map(([dept, deptRoles]) => (
            <div key={dept}>
              <h2 className="text-xl font-semibold mb-4 text-foreground/80">{dept}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {deptRoles.map(role => {
                  const isSelected = selectedSlug === role.slug;
                  return (
                    <Card
                      key={role.slug}
                      data-testid={`card-role-${role.slug}`}
                      className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? "ring-2 ring-primary border-primary" : ""}`}
                      onClick={() => setSelectedSlug(role.slug)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg">{role.name}</CardTitle>
                          {isSelected && <CheckCircle2 className="text-primary shrink-0" size={20} />}
                        </div>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary">{role.department}</Badge>
                          {role.scope === "all" && <Badge variant="outline">Full access</Badge>}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-4 mt-8 flex justify-center">
          <Button
            size="lg"
            data-testid="button-confirm-role"
            disabled={!selectedSlug || setRoleMutation.isPending}
            onClick={() => selectedSlug && setRoleMutation.mutate(selectedSlug)}
          >
            {setRoleMutation.isPending ? (
              <><Loader2 className="animate-spin mr-2" size={16} /> Saving...</>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
