import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Award, Home, Loader2, CheckCircle2, XCircle, Lock, ChevronRight, Trophy, Crown, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import { playCorrectSound, playWrongSound } from "@/lib/sounds";
import { levels } from "@shared/questions";
import type { MasteryResult } from "@shared/schema";

interface MasteryQ {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
}

interface CheckResult {
  correct: boolean;
  correctIndex: number;
  explanation: string;
}

interface Eligibility {
  eligible: boolean;
  completedSections: string[];
  missingSections: string[];
  isAdmin: boolean;
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

export default function MasteryExamPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [phase, setPhase] = useState<"intro" | "quiz" | "results">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; selectedIndex: number }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);
  const [resultData, setResultData] = useState<{ score: number; totalQuestions: number } | null>(null);

  const { data: eligibility, isLoading: eligLoading } = useQuery<Eligibility>({
    queryKey: ["/api/mastery/eligibility"],
  });

  const { data: questions, isLoading: questionsLoading } = useQuery<MasteryQ[]>({
    queryKey: ["/api/mastery/questions"],
    enabled: phase === "quiz",
  });

  const { data: pastResults } = useQuery<MasteryResult[]>({
    queryKey: ["/api/mastery/results"],
  });

  const submitMutation = useMutation({
    mutationFn: async (ans: { questionId: string; selectedIndex: number }[]) => {
      const res = await apiRequest("POST", "/api/mastery/submit", { answers: ans });
      return res.json();
    },
    onSuccess: (data) => {
      setResultData(data);
      setPhase("results");
      queryClient.invalidateQueries({ queryKey: ["/api/mastery/results"] });
    },
  });

  const currentQuestion = questions?.[currentQ];
  const totalQuestions = questions?.length || 55;
  const progressPercent = ((currentQ) / totalQuestions) * 100;

  const handleSelect = async (index: number) => {
    if (showResult) return;
    setSelected(index);

    try {
      const res = await apiRequest("POST", "/api/mastery/check", {
        questionId: currentQuestion!.id,
        selectedIndex: index,
      });
      const data: CheckResult = await res.json();
      setCheckResult(data);
      setShowResult(true);

      if (data.correct) {
        playCorrectSound();
      } else {
        playWrongSound();
      }
    } catch {
      setShowResult(true);
      setCheckResult({ correct: false, correctIndex: -1, explanation: "Unable to verify answer." });
    }
  };

  const handleNext = () => {
    const newAnswers = [...answers, { questionId: currentQuestion!.id, selectedIndex: selected! }];
    setAnswers(newAnswers);
    if (currentQ + 1 >= totalQuestions) {
      submitMutation.mutate(newAnswers);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
      setCheckResult(null);
    }
  };

  const hasPastResults = pastResults && pastResults.length > 0;

  if (eligLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-amber-500" />
      </div>
    );
  }

  if (phase === "intro") {
    const isEligible = eligibility?.eligible;
    const missingSections = eligibility?.missingSections || [];
    const missingNames = missingSections.map(id => {
      const level = levels.find(l => l.id === id);
      return level?.name || id;
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-orange-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation("/")}
            className="mb-6"
            data-testid="button-mastery-back"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
              <Crown size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Final Assessment
            </h1>
            <p className="text-muted-foreground text-lg">
              You've completed the training — now prove you're survey-ready
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white/80 dark:bg-card border border-amber-200 dark:border-amber-800 p-6 mb-6 shadow-sm"
          >
            <h2 className="font-bold text-lg mb-3 text-amber-700 dark:text-amber-300">What to expect</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Sparkles size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>55 advanced questions — 5 from each compliance area</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>See correct/incorrect feedback after each question with expert explanations</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>These are harder than the training levels — designed to test everything you've learned</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Compare your score to your Diagnostic Quiz to see how far you've come</span>
              </li>
            </ul>
          </motion.div>

          {!isEligible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700 p-5 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Lock size={18} className="text-amber-600" />
                <span className="font-bold text-sm text-amber-700 dark:text-amber-300">Not quite there yet</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Complete at least 10 questions in each section to unlock the Final Assessment. You still need:
              </p>
              <div className="flex flex-wrap gap-2">
                {missingNames.map((name, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {hasPastResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 p-4 mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={18} className="text-amber-600" />
                <span className="font-semibold text-sm text-amber-700 dark:text-amber-300">Best attempt</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You scored <span className="font-bold text-amber-600">{pastResults[0].score}/{pastResults[0].totalQuestions}</span> ({Math.round((pastResults[0].score / pastResults[0].totalQuestions) * 100)}%) on {new Date(pastResults[0].completedAt).toLocaleDateString()}
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl shadow-md disabled:opacity-50"
              onClick={() => setPhase("quiz")}
              disabled={!isEligible}
              data-testid="button-start-mastery"
            >
              {hasPastResults ? "Retake Final Assessment" : "Begin Final Assessment"}
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    if (questionsLoading || !questions || !currentQuestion) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-orange-950/30">
          <Loader2 size={32} className="animate-spin text-amber-500" />
        </div>
      );
    }

    const sectionName = SECTION_NAMES[currentQuestion.sectionId] || currentQuestion.sectionId;
    const isCorrect = checkResult?.correct ?? false;

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-orange-950/30">
        <div className="sticky top-0 z-50 bg-white/90 dark:bg-card/90 backdrop-blur border-b border-amber-200 dark:border-amber-800">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                Final Assessment
              </span>
              <span className="text-sm font-bold text-muted-foreground">
                {currentQ + 1} / {totalQuestions}
              </span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-amber-100 dark:bg-amber-900 [&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-orange-500" />
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
              <div className="rounded-2xl bg-white dark:bg-card border border-amber-200 dark:border-amber-800 p-5 mb-4 shadow-sm">
                <p className="text-base font-semibold leading-relaxed" data-testid="text-mastery-question">
                  {currentQuestion.question}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, index) => {
                  let borderClass = "border-gray-200 dark:border-gray-700 bg-white dark:bg-card";
                  let iconEl = null;

                  if (showResult && checkResult) {
                    if (index === checkResult.correctIndex) {
                      borderClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50";
                      iconEl = <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />;
                    } else if (index === selected && index !== checkResult.correctIndex) {
                      borderClass = "border-red-400 bg-red-50 dark:bg-red-950/50";
                      iconEl = <XCircle size={18} className="text-red-400 flex-shrink-0" />;
                    }
                  } else if (selected === index) {
                    borderClass = "border-amber-500 bg-amber-50 dark:bg-amber-950/50";
                  }

                  return (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ${borderClass}`}
                      onClick={() => handleSelect(index)}
                      disabled={showResult}
                      whileTap={showResult ? {} : { scale: 0.98 }}
                      data-testid={`button-mastery-option-${index}`}
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                          showResult && checkResult && index === checkResult.correctIndex
                            ? "bg-emerald-500 text-white"
                            : showResult && index === selected
                            ? "bg-red-400 text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {iconEl}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <div className={`rounded-xl p-4 ${isCorrect ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800" : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"}`}>
                    <p className={`text-sm font-semibold mb-1 ${isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}`}>
                      {isCorrect ? "Correct!" : "Not quite."}
                    </p>
                    <p className="text-sm text-muted-foreground">{checkResult?.explanation}</p>
                  </div>
                  <Button
                    className="w-full mt-3 h-11 font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl"
                    onClick={handleNext}
                    data-testid="button-mastery-next"
                  >
                    {currentQ + 1 >= totalQuestions ? "See Results" : "Next Question"}
                    <ArrowLeft size={16} className="ml-2 rotate-180" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {submitMutation.isPending && (
            <div className="flex items-center justify-center mt-8 gap-2 text-amber-600">
              <Loader2 size={20} className="animate-spin" />
              <span className="font-medium">Calculating your mastery score...</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (phase === "results" && resultData) {
    const percentage = Math.round((resultData.score / resultData.totalQuestions) * 100);
    const grade = percentage >= 90 ? "Survey-Ready Expert" : percentage >= 80 ? "Advanced Professional" : percentage >= 70 ? "Proficient" : percentage >= 60 ? "Developing" : "Keep Practicing";
    const gradeEmoji = percentage >= 90 ? "🏆" : percentage >= 80 ? "⭐" : percentage >= 70 ? "💪" : percentage >= 60 ? "📈" : "📚";
    const gradeColor = percentage >= 90 ? "text-amber-600" : percentage >= 80 ? "text-emerald-600" : percentage >= 70 ? "text-teal-600" : percentage >= 60 ? "text-blue-600" : "text-gray-600";

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-orange-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <div className="text-6xl mb-4">{gradeEmoji}</div>
            <h1 className="text-3xl font-black mb-1">Final Assessment Complete</h1>
            <p className="text-muted-foreground">Here's how you did after completing all sections</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white dark:bg-card border border-amber-200 dark:border-amber-800 p-6 mb-6 shadow-sm text-center"
          >
            <div className="text-5xl font-black mb-2">
              <span className={gradeColor}>{percentage}%</span>
            </div>
            <p className="text-lg font-bold mb-1">{resultData.score} out of {resultData.totalQuestions} correct</p>
            <p className={`text-sm font-bold ${gradeColor}`}>{grade}</p>
          </motion.div>

          {percentage >= 90 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-950/50 border border-amber-300 dark:border-amber-700 p-5 mb-6 text-center"
            >
              <Crown size={32} className="text-amber-600 mx-auto mb-2" />
              <h3 className="font-black text-amber-700 dark:text-amber-300 mb-1">Outstanding Achievement</h3>
              <p className="text-sm text-muted-foreground">
                You've demonstrated expert-level compliance knowledge. You're ready to face any Joint Commission survey with confidence.
              </p>
            </motion.div>
          )}

          <div className="flex gap-3">
            <Button
              className="flex-1 h-12 font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl"
              onClick={() => setLocation("/")}
              data-testid="button-mastery-to-dashboard"
            >
              <Home size={18} className="mr-2" /> Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
