import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Copy, CheckCircle2, ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

type Step = "start" | "scan" | "confirm" | "done";

export default function MfaSetupPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState<Step>("start");
  const [qrCode, setQrCode] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function startSetup() {
    setLoading(true);
    try {
      const res = await apiRequest("POST", "/api/mfa/setup/start", {});
      const data = await res.json();
      setQrCode(data.qrCode);
      setSecret(data.secret);
      setStep("scan");
    } catch (err: any) {
      toast({ title: "Setup failed", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  async function confirmSetup() {
    if (token.length !== 6) {
      toast({ title: "Enter the 6-digit code from your authenticator app", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await apiRequest("POST", "/api/mfa/setup/confirm", { token });
      setStep("done");
      queryClient.invalidateQueries({ queryKey: ["/api/mfa/status"] });
    } catch (err: any) {
      toast({ title: "Verification failed", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  function copySecret() {
    navigator.clipboard.writeText(secret);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-sm flex flex-col gap-6">

        {step !== "done" && (
          <button
            onClick={() => setLocation("/leadership")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground self-start"
          >
            <ArrowLeft size={14} /> Back
          </button>
        )}

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Lock size={26} className="text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-xl">Set Up Two-Factor Authentication</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Required for CEO and Administrator roles to access reporting tools.
            </p>
          </div>
        </div>

        {step === "start" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
            <div className="rounded-2xl bg-card border border-card-border p-5 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground mb-2">What you'll need:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>An authenticator app (Google Authenticator, Authy, 1Password, etc.)</li>
                <li>About 2 minutes to complete setup</li>
              </ul>
            </div>
            <Button onClick={startSetup} disabled={loading} className="w-full" data-testid="button-start-mfa-setup">
              {loading ? "Generating…" : "Begin Setup"}
            </Button>
          </motion.div>
        )}

        {step === "scan" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5">
            <div className="rounded-2xl bg-card border border-card-border p-5 flex flex-col items-center gap-4">
              <p className="text-sm font-semibold text-center">Scan this QR code with your authenticator app</p>
              {qrCode && (
                <img src={qrCode} alt="MFA QR Code" className="w-44 h-44 rounded-xl border border-card-border" data-testid="img-mfa-qrcode" />
              )}
              <div className="w-full">
                <p className="text-xs text-muted-foreground text-center mb-2">Or enter this key manually:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs font-mono bg-muted rounded-lg px-3 py-2 break-all" data-testid="text-mfa-secret">
                    {secret}
                  </code>
                  <Button variant="ghost" size="icon" onClick={copySecret} data-testid="button-copy-secret">
                    {copied ? <CheckCircle2 size={16} className="text-chart-1" /> : <Copy size={16} />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold">Enter the 6-digit code to confirm</label>
              <Input
                value={token}
                onChange={(e) => setToken(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="000000"
                className="text-center text-xl font-mono tracking-widest"
                maxLength={6}
                inputMode="numeric"
                data-testid="input-mfa-token"
                onKeyDown={(e) => e.key === "Enter" && confirmSetup()}
              />
              <Button onClick={confirmSetup} disabled={loading || token.length !== 6} className="w-full" data-testid="button-confirm-mfa">
                {loading ? "Verifying…" : "Confirm & Enable MFA"}
              </Button>
            </div>
          </motion.div>
        )}

        {step === "done" && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-chart-1/15 flex items-center justify-center">
              <ShieldCheck size={32} className="text-chart-1" />
            </div>
            <div>
              <h2 className="font-bold text-lg">MFA Enabled!</h2>
              <p className="text-sm text-muted-foreground mt-1">Your account is now protected with two-factor authentication.</p>
            </div>
            <Button onClick={() => setLocation("/leadership")} className="w-full" data-testid="button-mfa-done">
              Go to Leadership Console
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
