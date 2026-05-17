import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, date, serial, jsonb, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const facilities = pgTable("facilities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  department: text("department").notNull(),
  scope: text("scope").notNull().default("standard"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const roleChapterMappings = pgTable("role_chapter_mappings", {
  id: serial("id").primaryKey(),
  roleId: integer("role_id").notNull().references(() => roles.id),
  chapterSlug: text("chapter_slug").notNull(),
  displayOrder: integer("display_order").notNull().default(0),
});

export const MODULE_IDS = ["hospital", "asc", "dnv"] as const;
export type ModuleId = (typeof MODULE_IDS)[number];

export const LEADERSHIP_ROLES = ["learner", "educator", "director", "ceo", "admin", "super_admin"] as const;
export type LeadershipRole = (typeof LEADERSHIP_ROLES)[number];

export const leadershipRoleEnum = pgEnum("leadership_role_type", ["learner", "educator", "director", "ceo", "admin", "super_admin"]);

export const LEADERSHIP_RANK: Record<LeadershipRole, number> = {
  learner: 0,
  educator: 1,
  director: 2,
  ceo: 3,
  admin: 4,
  super_admin: 5,
};

export const LEADERSHIP_LABELS: Record<LeadershipRole, string> = {
  learner: "Learner",
  educator: "Educator / Supervisor",
  director: "Director / Quality Leader",
  ceo: "CEO / Quality Officer",
  admin: "System Administrator",
  super_admin: "Super Admin",
};

export const MODULE_LABELS: Record<ModuleId, string> = {
  hospital: "Hospital",
  asc: "Ambulatory Surgery Center (ASC)",
  dnv: "Hospital (DNV NIAHO)",
};

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  firstName: text("first_name").notNull().default(""),
  lastName: text("last_name").notNull().default(""),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
  leadershipRole: leadershipRoleEnum("leadership_role").notNull().default("learner"),
  facilityId: integer("facility_id").references(() => facilities.id),
  department: text("department"),
  mfaSecret: text("mfa_secret"),
  mfaEnabled: boolean("mfa_enabled").notNull().default(false),
  roleId: integer("role_id").references(() => roles.id),
  additionalRoleIds: integer("additional_role_ids").array().notNull().default(sql`ARRAY[]::integer[]`),
  organizationType: text("organization_type").notNull().default("hospital"),
  viewScope: text("view_scope").notNull().default("department"),
  roleAssignedAt: timestamp("role_assigned_at"),
  dailyGoal: integer("daily_goal").notNull().default(5),
  reminderEnabled: boolean("reminder_enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Role = typeof roles.$inferSelect;
export type RoleChapterMapping = typeof roleChapterMappings.$inferSelect;

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  levelId: text("level_id").notNull(),
  score: integer("score").notNull().default(0),
  totalQuestions: integer("total_questions").notNull().default(0),
  bestScore: integer("best_score").notNull().default(0),
  completed: boolean("completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
});

export const userStreaks = pgTable("user_streaks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id).unique(),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  lastPlayedDate: date("last_played_date"),
  totalXp: integer("total_xp").notNull().default(0),
});

export const dailyActivity = pgTable("daily_activity", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  date: date("date").notNull(),
  questionsAnswered: integer("questions_answered").notNull().default(0),
  correctAnswers: integer("correct_answers").notNull().default(0),
  xpEarned: integer("xp_earned").notNull().default(0),
});

export const quizSessions = pgTable("quiz_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  levelId: text("level_id").notNull(),
  questionOrder: text("question_order").array().notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  currentQuestion: integer("current_question").notNull().default(0),
  correctAnswers: integer("correct_answers").notNull().default(0),
  xpEarned: integer("xp_earned").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type QuizSession = typeof quizSessions.$inferSelect;

export const insertFacilitySchema = createInsertSchema(facilities).pick({
  name: true,
  code: true,
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  firstName: true,
  lastName: true,
  password: true,
  facilityId: true,
});

export const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  facilityCode: z
    .string()
    .min(3, "Institution code is required (ask your administrator if you don't have one)")
    .max(40, "Institution code is too long"),
  organizationType: z.enum(MODULE_IDS).default("hospital"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const updateOrganizationTypeSchema = z.object({
  organizationType: z.enum(MODULE_IDS),
});

export const resetPasswordSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmNewPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords don't match",
  path: ["confirmNewPassword"],
});

export const diagnosticResults = pgTable("diagnostic_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const masteryResults = pgTable("mastery_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const diagnosticSessions = pgTable("diagnostic_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionOrder: text("question_order").array().notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  currentQuestion: integer("current_question").notNull().default(0),
  shuffleMaps: jsonb("shuffle_maps").notNull().default(sql`'{}'::jsonb`),
  questionData: jsonb("question_data"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const masterySessions = pgTable("mastery_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionOrder: text("question_order").array().notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  currentQuestion: integer("current_question").notNull().default(0),
  shuffleMaps: jsonb("shuffle_maps").notNull().default(sql`'{}'::jsonb`),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const ascPretestResults = pgTable("asc_pretest_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  chapterScores: jsonb("chapter_scores").notNull().default(sql`'{}'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const ascPosttestResults = pgTable("asc_posttest_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  chapterScores: jsonb("chapter_scores").notNull().default(sql`'{}'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export type DiagnosticSession = typeof diagnosticSessions.$inferSelect;
export type MasterySession = typeof masterySessions.$inferSelect;

export type DiagnosticResult = typeof diagnosticResults.$inferSelect;
export type MasteryResult = typeof masteryResults.$inferSelect;
export type AscPretestResult = typeof ascPretestResults.$inferSelect;
export type AscPosttestResult = typeof ascPosttestResults.$inferSelect;

export type InsertFacility = z.infer<typeof insertFacilitySchema>;
export type Facility = typeof facilities.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type UserStreak = typeof userStreaks.$inferSelect;
export type DailyActivity = typeof dailyActivity.$inferSelect;

export interface QuestionTutor {
  whyCorrect: string;
  whyWrong: Record<string, string>;
  operationalContext: string;
}

export interface Question {
  id: string;
  question: string;
  scenario?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xpReward: number;
  isSwipe: boolean;
  module?: ModuleId;
  draft?: boolean;
  cmsTag?: string;
  tutor?: QuestionTutor;
}

export interface StudyConcept {
  title: string;
  content: string;
  keyPoint: string;
  category?: "rule" | "definition" | "scenario" | "mistake" | "number" | "tip";
  extraInfo?: string;
}

export interface ChapterSummary {
  chapterTitle: string;
  plainLanguageSummary: string;
  keyOperationalExpectations: string[];
  commonRiskPoints: string[];
  cmsTags: string[];
}

export interface Level {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  requiredScore: number;
  studyMaterial: StudyConcept[];
  questions: Question[];
  module?: ModuleId;
  draft?: boolean;
  chapterSummary?: ChapterSummary;
}

export interface HandbookSection {
  heading: string;
  content: string;
  criticalValues?: { label: string; value: string }[];
  thinkAboutIt?: string;
}

export interface HandbookChapter {
  levelId: string;
  title: string;
  overview: string;
  sections: HandbookSection[];
  quickReference: { fact: string; detail: string }[];
}

export interface GameState {
  currentQuestion: number;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  answers: { questionId: string; correct: boolean; selectedIndex: number }[];
}

export interface DeepDiveFollowUp {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  expertXp: number;
}

export interface DeepDiveQuestion {
  id: string;
  baseQuestion: string;
  baseOptions: string[];
  baseCorrectIndex: number;
  baseExplanation: string;
  baseXp: number;
  followUps: DeepDiveFollowUp[];
}

export interface DeepDiveLevel {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  baseLevelId: string;
  questions: DeepDiveQuestion[];
}

// ── Teams ─────────────────────────────────────────────────────────────────────

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  facilityId: integer("facility_id").references(() => facilities.id),
  department: text("department"),
  createdByUserId: integer("created_by_user_id").references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").notNull().references(() => teams.id),
  userId: integer("user_id").notNull().references(() => users.id),
  addedAt: timestamp("added_at").notNull().defaultNow(),
});

export type Team = typeof teams.$inferSelect;
export type TeamMember = typeof teamMembers.$inferSelect;

// ── Audit Log ────────────────────────────────────────────────────────────────

export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  username: text("username"),
  leadershipRole: leadershipRoleEnum("leadership_role").notNull().default("learner"),
  facilityId: text("facility_id"),
  facilityName: text("facility_name"),
  action: text("action").notNull(),
  meta: text("meta"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type AuditLog = typeof auditLogs.$inferSelect;

// ── Feedback ──────────────────────────────────────────────────────────────────

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  username: text("username"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  facilityId: integer("facility_id"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Feedback = typeof feedback.$inferSelect;

// ── Risk Assessments ─────────────────────────────────────────────────────────

export const riskAssessments = pgTable("risk_assessments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  module: text("module").notNull().default("hospital"),
  riskAreas: jsonb("risk_areas").notNull().default(sql`'[]'::jsonb`),
  notes: text("notes").notNull().default(""),
  actionPlan: jsonb("action_plan").notNull().default(sql`'{}'::jsonb`),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type RiskAssessment = typeof riskAssessments.$inferSelect;

// ── Flashcard Reviews (Spaced Repetition) ────────────────────────────────────

export const flashcardReviews = pgTable("flashcard_reviews", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  levelId: text("level_id").notNull(),
  cardIndex: integer("card_index").notNull(),
  nextReviewAt: timestamp("next_review_at").notNull().defaultNow(),
  intervalMinutes: integer("interval_minutes").notNull().default(1440),
  reviewCount: integer("review_count").notNull().default(0),
  lastRating: text("last_rating").notNull().default("good"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type FlashcardReview = typeof flashcardReviews.$inferSelect;

// ── Leadership Role Access Codes ──────────────────────────────────────────────

export const leadershipRoleCodes = pgTable("leadership_role_codes", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  facilityId: integer("facility_id").references(() => facilities.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type LeadershipRoleCode = typeof leadershipRoleCodes.$inferSelect;

// ── Compliance System (ASC Survey Readiness) ─────────────────────────────────

export const complianceItems = pgTable("compliance_items", {
  id: serial("id").primaryKey(),
  module: text("module").notNull().default("asc"),
  volume: text("volume").notNull(),
  standardCode: text("standard_code").notNull(),
  itemName: text("item_name").notNull(),
  frequency: text("frequency").notNull(),
  tier: integer("tier").notNull(),
  category: text("category").notNull(),
  surveyorPriority: integer("surveyor_priority").notNull().default(2),
  agentWatch: boolean("agent_watch").notNull().default(true),
});

export type ComplianceItem = typeof complianceItems.$inferSelect;

export const complianceLogs = pgTable("compliance_logs", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  completedBy: text("completed_by").notNull(),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
  status: text("status").notNull().default("completed"),
  notes: text("notes"),
  nextDue: date("next_due"),
  agentFlagged: boolean("agent_flagged").notNull().default(false),
});

export type ComplianceLog = typeof complianceLogs.$inferSelect;

export const complianceDocuments = pgTable("compliance_documents", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  documentName: text("document_name").notNull(),
  uploadedBy: text("uploaded_by").notNull(),
  uploadedAt: timestamp("uploaded_at").notNull().defaultNow(),
  effectiveDate: date("effective_date"),
  expirationDate: date("expiration_date"),
  status: text("status").notNull().default("current"),
  aiTaggedStandards: jsonb("ai_tagged_standards").notNull().default(sql`'[]'::jsonb`),
  aiQuestionsGenerated: boolean("ai_questions_generated").notNull().default(false),
});

export type ComplianceDocument = typeof complianceDocuments.$inferSelect;

export const complianceTasks = pgTable("compliance_tasks", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  assignedTo: text("assigned_to"),
  dueDate: date("due_date"),
  createdBy: text("created_by"),
  createdByAgent: boolean("created_by_agent").notNull().default(false),
  status: text("status").notNull().default("pending"),
  reminderSent: boolean("reminder_sent").notNull().default(false),
  escalated: boolean("escalated").notNull().default(false),
});

export type ComplianceTask = typeof complianceTasks.$inferSelect;

export const complianceTrainingModules = pgTable("compliance_training_modules", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  documentId: integer("document_id").notNull().references(() => complianceDocuments.id),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  title: text("title").notNull(),
  taggedStandards: jsonb("tagged_standards").notNull().default(sql`'[]'::jsonb`),
  questions: jsonb("questions").notNull().default(sql`'[]'::jsonb`),
  conflictFlags: jsonb("conflict_flags").notNull().default(sql`'[]'::jsonb`),
  assignedRoles: jsonb("assigned_roles").notNull().default(sql`'[]'::jsonb`),
  assignedMemberCount: integer("assigned_member_count").notNull().default(0),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  approvedAt: timestamp("approved_at"),
  approvedBy: text("approved_by"),
});

export type ComplianceTrainingModule = typeof complianceTrainingModules.$inferSelect;

export const staffTrainingAlerts = pgTable("staff_training_alerts", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  userId: integer("user_id").notNull().references(() => users.id),
  complianceItemId: integer("compliance_item_id").references(() => complianceItems.id),
  alertType: text("alert_type").notNull().default("reminder"),
  category: text("category").notNull(),
  message: text("message").notNull(),
  daysOverdue: integer("days_overdue").notNull().default(0),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type StaffTrainingAlert = typeof staffTrainingAlerts.$inferSelect;

export const regulatoryWatchFindings = pgTable("regulatory_watch_findings", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  source: text("source").notNull(),
  standardCode: text("standard_code").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  sourceUrl: text("source_url"),
  affectedItemIds: jsonb("affected_item_ids").notNull().default(sql`'[]'::jsonb`),
  affectedItemCount: integer("affected_item_count").notNull().default(0),
  affectedDocumentCount: integer("affected_document_count").notNull().default(0),
  status: text("status").notNull().default("new"),
  taskId: integer("task_id").references(() => complianceTasks.id),
  scannedAt: timestamp("scanned_at").notNull().defaultNow(),
  reviewedAt: timestamp("reviewed_at"),
  reviewedBy: text("reviewed_by"),
});

export type RegulatoryWatchFinding = typeof regulatoryWatchFindings.$inferSelect;

export const executiveBriefs = pgTable("executive_briefs", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull(),
  weekOf: date("week_of").notNull(),
  readinessScore: integer("readiness_score").notNull().default(0),
  previousScore: integer("previous_score"),
  trendDirection: text("trend_direction").notNull().default("stable"),
  topRisks: jsonb("top_risks").notNull().default(sql`'[]'::jsonb`),
  overdueTasksCount: integer("overdue_tasks_count").notNull().default(0),
  expiringDocsCount: integer("expiring_docs_count").notNull().default(0),
  trainingAlertsCount: integer("training_alerts_count").notNull().default(0),
  regulatoryFindingsCount: integer("regulatory_findings_count").notNull().default(0),
  daysToNextEvent: integer("days_to_next_event"),
  narrativeSummary: text("narrative_summary").notNull().default(""),
  emailSentAt: timestamp("email_sent_at"),
  emailSentTo: jsonb("email_sent_to").notNull().default(sql`'[]'::jsonb`),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type ExecutiveBrief = typeof executiveBriefs.$inferSelect;

export interface DeepDiveGameState {
  currentQuestion: number;
  totalQuestions: number;
  phase: "base" | "followUp" | "result";
  currentFollowUpIndex: number;
  baseCorrect: number;
  followUpCorrect: number;
  followUpAttempted: number;
  baseXpEarned: number;
  expertXpEarned: number;
  answers: {
    questionId: string;
    baseCorrect: boolean;
    baseSelectedIndex: number;
    followUpResults: { correct: boolean; selectedIndex: number }[];
  }[];
}
