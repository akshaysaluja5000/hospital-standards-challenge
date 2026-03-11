import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Flame, Trophy, Eye, EyeOff, Loader2, ArrowLeft, KeyRound, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";
import { loginSchema, registerSchema, resetPasswordSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { z } from "zod";

type AuthView = "login" | "register" | "forgot";

export default function AuthPage() {
  const [view, setView] = useState<AuthView>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", firstName: "", lastName: "", facilityCode: "", password: "", confirmPassword: "" },
  });

  const resetForm = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { username: "", newPassword: "", confirmNewPassword: "" },
  });

  function extractErrorMessage(error: any, fallback: string): string {
    const raw = error?.message || fallback;
    try {
      const jsonPart = raw.replace(/^\d+:\s*/, "");
      const parsed = JSON.parse(jsonPart);
      return parsed.message || fallback;
    } catch {
      return raw;
    }
  }

  const onLogin = async (data: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      await login(data.username, data.password);
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: extractErrorMessage(error, "Invalid credentials"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onRegister = async (data: z.infer<typeof registerSchema>) => {
    setIsSubmitting(true);
    try {
      await register(data.username, data.firstName, data.lastName, data.password, data.facilityCode || undefined);
      toast({
        title: "Account created!",
        description: "Welcome to Hospital Standards Challenge!",
      });
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: extractErrorMessage(error, "Something went wrong"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onResetPassword = async (data: z.infer<typeof resetPasswordSchema>) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/auth/reset-password", {
        username: data.username,
        newPassword: data.newPassword,
      });
      toast({
        title: "Password updated!",
        description: "You can now sign in with your new password.",
      });
      setView("login");
      resetForm.reset();
    } catch (error: any) {
      toast({
        title: "Reset failed",
        description: extractErrorMessage(error, "Username not found"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-4">
              <Shield size={32} className="text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-black tracking-tight">Hospital Standards Challenge</h1>
            <p className="text-muted-foreground mt-1">Master Joint Commission standards</p>
          </motion.div>

          {view !== "forgot" && (
            <div className="flex rounded-xl bg-muted p-1 mb-6">
              <button
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  view === "login" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setView("login")}
                data-testid="button-login-tab"
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  view === "register" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setView("register")}
                data-testid="button-register-tab"
              >
                Create Account
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {view === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="flex flex-col gap-4">
                    <FormField
                      control={loginForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your username"
                              data-testid="input-login-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                data-testid="input-login-password"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                                data-testid="button-toggle-password"
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-login-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Sign In
                    </Button>
                    <button
                      type="button"
                      className="text-sm text-primary font-medium text-center mt-1"
                      onClick={() => setView("forgot")}
                      data-testid="button-forgot-password"
                    >
                      Forgot your password?
                    </button>
                  </form>
                </Form>
              </motion.div>
            )}

            {view === "register" && (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegister)} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={registerForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="First name"
                                data-testid="input-register-first-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Last name"
                                data-testid="input-register-last-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={registerForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Choose a username"
                              data-testid="input-register-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="facilityCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facility Code</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                {...field}
                                placeholder="Enter your facility code (optional)"
                                className="pl-9"
                                data-testid="input-register-facility-code"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="At least 6 characters"
                                data-testid="input-register-password"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm your password"
                              data-testid="input-register-confirm-password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-register-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Create Account
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}

            {view === "forgot" && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <button
                    type="button"
                    className="text-muted-foreground"
                    onClick={() => setView("login")}
                    data-testid="button-back-to-login"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex items-center gap-2">
                    <KeyRound size={20} className="text-primary" />
                    <h2 className="font-bold text-lg">Reset Password</h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Enter your username and create a new password.
                </p>
                <Form {...resetForm}>
                  <form onSubmit={resetForm.handleSubmit(onResetPassword)} className="flex flex-col gap-4">
                    <FormField
                      control={resetForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your username"
                              data-testid="input-reset-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={resetForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="At least 6 characters"
                                data-testid="input-reset-new-password"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={resetForm.control}
                      name="confirmNewPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm New Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm your new password"
                              data-testid="input-reset-confirm-password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-reset-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Reset Password
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-xs text-muted-foreground text-center mt-6">
            <a href="/terms" className="underline" data-testid="link-terms">Terms & Privacy</a>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center p-12 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--chart-3)) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-black mb-6 leading-tight">
              Turn compliance training into a{" "}
              <span className="text-primary">game you'll love</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Swipe, answer, and level up your Joint Commission knowledge. Build streaks, earn XP, and become the compliance expert your team needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Flame, label: "Daily Streaks", color: "text-chart-4" },
              { icon: Zap, label: "Earn XP", color: "text-chart-4" },
              { icon: Trophy, label: "Level Up", color: "text-chart-3" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-card border border-card-border flex items-center justify-center">
                  <item.icon size={24} className={item.color} />
                </div>
                <span className="text-sm font-bold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
