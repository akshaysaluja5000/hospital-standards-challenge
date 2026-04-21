import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth";
import AuthPage from "@/pages/auth-page";
import LandingPage from "@/pages/landing-page";
import DashboardPage from "@/pages/dashboard-page";
import PlayPage from "@/pages/play-page";
import StudyPage from "@/pages/study-page";
import ProfilePage from "@/pages/profile-page";
import AdminPage from "@/pages/admin-page";
import LeaderboardPage from "@/pages/leaderboard-page";
import HandbookPage from "@/pages/handbook-page";
import DeepDiveSelectPage from "@/pages/deep-dive-select-page";
import DeepDivePage from "@/pages/deep-dive-page";
import DiagnosticQuizPage from "@/pages/diagnostic-quiz-page";
import MasteryExamPage from "@/pages/mastery-exam-page";
import RoleSelectPage from "@/pages/role-select-page";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import TermsPage from "@/pages/terms-page";
import NotFound from "@/pages/not-found";
import { Loader2 } from "lucide-react";

function ProtectedRoute({ component: Component }: { component: () => JSX.Element }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/auth" />;
  }

  if (!user.roleId && !user.isAdmin) {
    return <Redirect to="/role-select" />;
  }

  return <Component />;
}

function AuthRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return <AuthPage />;
}

function HomeRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    if (!user.roleId && !user.isAdmin) {
      return <Redirect to="/role-select" />;
    }
    return <DashboardPage />;
  }

  return <LandingPage />;
}

function RoleErrorRoute() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center flex flex-col items-center gap-4">
        <div className="rounded-full bg-destructive/10 text-destructive p-3">
          <AlertCircle size={28} />
        </div>
        <h1 className="text-2xl font-bold" data-testid="text-role-error-title">
          We couldn't start your training
        </h1>
        <p className="text-muted-foreground">
          The role you selected isn't available. Please choose a different role to continue.
        </p>
        <Button data-testid="button-role-error-change" onClick={() => navigate("/role-select")}>
          Change role
        </Button>
      </div>
    </div>
  );
}

function RoleSelectRoute() {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }
  if (!user) return <Redirect to="/auth" />;
  return <RoleSelectPage />;
}

function Router() {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/role-select" component={RoleSelectRoute} />
      <Route path="/role-error" component={RoleErrorRoute} />
      <Route path="/" component={HomeRoute} />
      <Route path="/play/:levelId">
        {() => <ProtectedRoute component={PlayPage} />}
      </Route>
      <Route path="/study/:levelId">
        {() => <ProtectedRoute component={StudyPage} />}
      </Route>
      <Route path="/handbook/:levelId">
        {() => <ProtectedRoute component={HandbookPage} />}
      </Route>
      <Route path="/handbook">
        {() => <ProtectedRoute component={HandbookPage} />}
      </Route>
      <Route path="/deep-dive">
        {() => <ProtectedRoute component={DeepDiveSelectPage} />}
      </Route>
      <Route path="/deep-dive/:levelId">
        {() => <ProtectedRoute component={DeepDivePage} />}
      </Route>
      <Route path="/diagnostic">
        {() => <ProtectedRoute component={DiagnosticQuizPage} />}
      </Route>
      <Route path="/mastery">
        {() => <ProtectedRoute component={MasteryExamPage} />}
      </Route>
      <Route path="/leaderboard">
        {() => <ProtectedRoute component={LeaderboardPage} />}
      </Route>
      <Route path="/profile">
        {() => <ProtectedRoute component={ProfilePage} />}
      </Route>
      <Route path="/admin">
        {() => <ProtectedRoute component={AdminPage} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Router />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
