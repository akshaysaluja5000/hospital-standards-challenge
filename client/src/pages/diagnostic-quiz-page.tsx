import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ClipboardCheck, Home, Loader2, CheckCircle2, Stethoscope, BarChart3, ChevronRight, LogOut, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import type { DiagnosticResult } from "@shared/schema";

interface DiagnosticQ {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
}

interface SavedSession {
  questions: DiagnosticQ[];
  answers: { questionId: string; selectedIndex: number }[];
  currentQuestion: number;
}

const SECTION_NAMES: Record<string, string> = {
  transport: "Transport of Instruments",
  environment: "Environment & Surfaces",
  segregation: "Clean vs. Dirty",
  sterile_storage: "Sterile Storage",
  instruments: "Instrument Integrity",
  facilities: "Facilities & Equipment",
  spd_decontam: "SPD & Decontamination",
  or_sterile_field: "OR & Sterile Technique",
  universal_protocol: "Surgical Safety & Consent",
  patient_care_docs: "Patient Care & Documentation",
  eoc_safety: "EOC & Safety Compliance",
};

export default function DiagnosticQuizPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [phase, setPhase] = useState<"loading" | "intro" | "quiz" | "results">("loading");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<({ questionId: string; selectedIndex: number } | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<{ score: number; totalQuestions: number } | null>(null);
  const [questions, setQuestions] = useState<DiagnosticQ[] | null>(null);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  const { data: pastResults } = useQuery<DiagnosticResult[]>({
    queryKey: ["/api/diagnostic/results"],
  });

  const { data: savedSession, isLoading: sessionLoading } = useQuery<SavedSession | null>({
    queryKey: ["/api/diagnostic/session"],
  });

  useEffect(() => {
    if (sessionLoading) return;
    if (savedSession && savedSession.questions && savedSession.questions.length > 0) {
      setHasSession(true);
    }
    setPhase("intro");
  }, [sessionLoading, savedSession]);

  const fetchQuestions = async () => {
    const res = await fetch("/api/diagnostic/questions", { credentials: "include" });
    const data = await res.json();
    return data as DiagnosticQ[];
  };

  const saveMutation = useMutation({
    mutationFn: async (params: { questionOrder: string[]; answers: { questionId: string; selectedIndex: number }[]; currentQuestion: number }) => {
      await apiRequest("POST", "/api/diagnostic/session", params);
    },
  });

  const deleteSavedSession = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", "/api/diagnostic/session");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/session"] });
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (ans: { questionId: string; selectedIndex: number }[]) => {
      const res = await apiRequest("POST", "/api/diagnostic/submit", { answers: ans });
      return res.json();
    },
    onSuccess: (data) => {
      setResult(data);
      setPhase("results");
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/session"] });
    },
  });

  const startFresh = async () => {
    const qs = await fetchQuestions();
    setQuestions(qs);
    setCurrentQ(0);
    setAnswers(new Array(qs.length).fill(null));
    setSelected(null);
    setPhase("quiz");
  };

  const resumeSession = () => {
    if (!savedSession || !savedSession.questions.length) return;
    setQuestions(savedSession.questions);
    const ansArray: ({ questionId: string; selectedIndex: number } | null)[] = new Array(savedSession.questions.length).fill(null);
    for (const a of savedSession.answers) {
      const idx = savedSession.questions.findIndex(q => q.id === a.questionId);
      if (idx >= 0) ansArray[idx] = a;
    }
    setAnswers(ansArray);
    const clampedQ = Math.min(Math.max(0, savedSession.currentQuestion), savedSession.questions.length - 1);
    setCurrentQ(clampedQ);
    setSelected(ansArray[clampedQ]?.selectedIndex ?? null);
    setPhase("quiz");
  };

  const saveAndExit = useCallback(() => {
    if (!questions) return;
    const finalAnswers = [...answers];
    if (selected !== null && questions[currentQ]) {
      finalAnswers[currentQ] = { questionId: questions[currentQ].id, selectedIndex: selected };
    }
    const filledAnswers = finalAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
    saveMutation.mutate({
      questionOrder: questions.map(q => q.id),
      answers: filledAnswers,
      currentQuestion: currentQ,
    }, {
      onSettled: () => setLocation("/"),
    });
  }, [questions, answers, selected, currentQ, saveMutation, setLocation]);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null || !questions) return;
    const currentQuestion = questions[currentQ];
    const newAnswers = [...answers];
    newAnswers[currentQ] = { questionId: currentQuestion.id, selectedIndex: selected };
    setAnswers(newAnswers);

    if (currentQ + 1 >= questions.length) {
      const filledAnswers = newAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
      submitMutation.mutate(filledAnswers);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(newAnswers[currentQ + 1]?.selectedIndex ?? null);
    }
  };

  const handleBack = () => {
    if (currentQ <= 0 || !questions) return;
    const currentQuestion = questions[currentQ];
    if (selected !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQ] = { questionId: currentQuestion.id, selectedIndex: selected };
      setAnswers(newAnswers);
    }
    const prevQ = currentQ - 1;
    setCurrentQ(prevQ);
    setSelected(answers[prevQ]?.selectedIndex ?? null);
  };

  const hasPastResults = pastResults && pastResults.length > 0;

  if (phase === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        <Loader2 size={32} className="animate-spin text-teal-500" />
      </div>
    );
  }

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation("/")}
            className="mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
              <Stethoscope size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Diagnostic Quiz
            </h1>
            <p className="text-muted-foreground text-lg">
              See where you stand before you begin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white/80 dark:bg-card border border-teal-200 dark:border-teal-800 p-6 mb-6 shadow-sm"
          >
            <h2 className="font-bold text-lg mb-3 text-teal-700 dark:text-teal-300">How it works</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                <span>55 questions covering all 11 compliance areas — 5 from each topic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                <span>No right/wrong feedback during the quiz — just answer and move on</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                <span>You can go back to change previous answers and save your progress to finish later</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                <span>At the end, you'll see your overall score and use results to target weak areas</span>
              </li>
            </ul>
          </motion.div>

          {hasSession && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl bg-teal-50 dark:bg-teal-950/50 border-2 border-teal-400 dark:border-teal-600 p-5 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Save size={18} className="text-teal-600" />
                <span className="font-bold text-sm text-teal-700 dark:text-teal-300">You have a saved quiz in progress</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Question {(savedSession?.currentQuestion || 0) + 1} of {savedSession?.questions?.length || 55} — {savedSession?.answers?.length || 0} answers saved
              </p>
              <div className="flex gap-3">
                <Button
                  className="flex-1 h-11 font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl"
                  onClick={resumeSession}
                  data-testid="button-resume-diagnostic"
                >
                  Resume Quiz
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-11 font-bold border-teal-300 text-teal-700 dark:text-teal-300 rounded-xl"
                  onClick={async () => {
                    await deleteSavedSession.mutateAsync();
                    setHasSession(false);
                    startFresh();
                  }}
                  data-testid="button-start-fresh-diagnostic"
                >
                  Start Fresh
                </Button>
              </div>
            </motion.div>
          )}

          {hasPastResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 p-4 mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 size={18} className="text-teal-600" />
                <span className="font-semibold text-sm text-teal-700 dark:text-teal-300">Previous attempt</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You scored <span className="font-bold text-teal-600">{pastResults[0].score}/{pastResults[0].totalQuestions}</span> ({Math.round((pastResults[0].score / pastResults[0].totalQuestions) * 100)}%) on {new Date(pastResults[0].completedAt).toLocaleDateString()}
              </p>
            </motion.div>
          )}

          {!hasSession && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl shadow-md"
                onClick={startFresh}
                data-testid="button-start-diagnostic"
              >
                {hasPastResults ? "Retake Diagnostic Quiz" : "Start Diagnostic Quiz"}
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    if (!questions || !questions[currentQ]) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
          <Loader2 size={32} className="animate-spin text-teal-500" />
        </div>
      );
    }

    const currentQuestion = questions[currentQ];
    const totalQuestions = questions.length;
    const answeredCount = answers.filter(a => a !== null).length;
    const progressPercent = (answeredCount / totalQuestions) * 100;
    const sectionName = SECTION_NAMES[currentQuestion.sectionId] || currentQuestion.sectionId;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        {showExitDialog && (
          <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" onClick={() => setShowExitDialog(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-card rounded-2xl border border-teal-200 dark:border-teal-800 p-6 max-w-sm w-full shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="font-bold text-lg mb-2">Save & Exit?</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Your progress ({answeredCount} of {totalQuestions} answered) will be saved. You can resume anytime from the intro screen.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={() => setShowExitDialog(false)}
                  data-testid="button-cancel-exit"
                >
                  Keep Going
                </Button>
                <Button
                  className="flex-1 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold"
                  onClick={saveAndExit}
                  data-testid="button-confirm-save-exit"
                >
                  <Save size={16} className="mr-1" /> Save & Exit
                </Button>
              </div>
            </motion.div>
          </div>
        )}

        <div className="sticky top-0 z-50 bg-white/90 dark:bg-card/90 backdrop-blur border-b border-teal-200 dark:border-teal-800">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => setShowExitDialog(true)}
                className="flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide hover:text-teal-800 dark:hover:text-teal-200 transition-colors"
                data-testid="button-exit-diagnostic"
              >
                <LogOut size={14} />
                Save & Exit
              </button>
              <span className="text-sm font-bold text-muted-foreground">
                {currentQ + 1} / {totalQuestions}
              </span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-teal-100 dark:bg-teal-900 [&>div]:bg-gradient-to-r [&>div]:from-teal-500 [&>div]:to-cyan-500" />
            <p className="text-xs text-muted-foreground mt-1.5 font-medium">{sectionName}</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <div className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-5 mb-4 shadow-sm">
                <p className="text-base font-semibold leading-relaxed" data-testid="text-diagnostic-question">
                  {currentQuestion.question}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ${
                      selected === index
                        ? "border-teal-500 bg-teal-50 dark:bg-teal-950/50"
                        : "border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 bg-white dark:bg-card"
                    }`}
                    onClick={() => handleSelect(index)}
                    whileTap={{ scale: 0.98 }}
                    data-testid={`button-option-${index}`}
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        selected === index
                          ? "bg-teal-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                {currentQ > 0 && (
                  <Button
                    variant="outline"
                    className="h-11 px-5 font-bold rounded-xl border-teal-300 text-teal-700 dark:text-teal-300"
                    onClick={handleBack}
                    data-testid="button-diagnostic-back"
                  >
                    <ArrowLeft size={16} className="mr-1" /> Back
                  </Button>
                )}
                {selected !== null && (
                  <Button
                    className="flex-1 h-11 font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl"
                    onClick={handleNext}
                    data-testid="button-diagnostic-next"
                  >
                    {currentQ + 1 >= totalQuestions ? "Finish & See Results" : "Next Question"}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {submitMutation.isPending && (
            <div className="flex items-center justify-center mt-8 gap-2 text-teal-600">
              <Loader2 size={20} className="animate-spin" />
              <span className="font-medium">Calculating your results...</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (phase === "results" && result) {
    const percentage = Math.round((result.score / result.totalQuestions) * 100);
    const grade = percentage >= 90 ? "Excellent" : percentage >= 75 ? "Strong" : percentage >= 60 ? "Developing" : "Needs Focus";
    const gradeColor = percentage >= 90 ? "text-emerald-600" : percentage >= 75 ? "text-teal-600" : percentage >= 60 ? "text-amber-600" : "text-red-500";

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
              <ClipboardCheck size={44} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-1">Diagnostic Complete</h1>
            <p className="text-muted-foreground">Here's your baseline — now let's build on it</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-6 mb-6 shadow-sm text-center"
          >
            <div className="text-5xl font-black mb-2">
              <span className={gradeColor}>{percentage}%</span>
            </div>
            <p className="text-lg font-bold mb-1">{result.score} out of {result.totalQuestions} correct</p>
            <p className={`text-sm font-semibold ${gradeColor}`}>{grade}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-5 mb-6 shadow-sm"
          >
            <h3 className="font-bold text-sm mb-3 text-teal-700 dark:text-teal-300">What's next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span>Work through the training levels to strengthen your weak areas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span>Use the Compliance Handbook for reference on tricky topics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span>Once you've mastered all sections, take the Final Assessment to prove it</span>
              </li>
            </ul>
          </motion.div>

          <div className="flex gap-3">
            <Button
              className="flex-1 h-12 font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl"
              onClick={() => setLocation("/")}
              data-testid="button-diagnostic-to-dashboard"
            >
              <Home size={18} className="mr-2" /> Start Training
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
