import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, date, serial } from "drizzle-orm/pg-core";
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

export const MODULE_IDS = ["hospital", "clinic", "asc"] as const;
export type ModuleId = (typeof MODULE_IDS)[number];

export const MODULE_LABELS: Record<ModuleId, string> = {
  hospital: "Hospital",
  clinic: "Ambulatory Clinic",
  asc: "Ambulatory Surgery Center (ASC)",
};

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  firstName: text("first_name").notNull().default(""),
  lastName: text("last_name").notNull().default(""),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
  facilityId: integer("facility_id").references(() => facilities.id),
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
  answers: text("answers").notNull().default("[]"),
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
  answers: text("answers").notNull().default("[]"),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const masteryResults = pgTable("mastery_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: text("answers").notNull().default("[]"),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const diagnosticSessions = pgTable("diagnostic_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionOrder: text("question_order").array().notNull(),
  answers: text("answers").notNull().default("[]"),
  currentQuestion: integer("current_question").notNull().default(0),
  shuffleMaps: text("shuffle_maps").notNull().default("{}"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const masterySessions = pgTable("mastery_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionOrder: text("question_order").array().notNull(),
  answers: text("answers").notNull().default("[]"),
  currentQuestion: integer("current_question").notNull().default(0),
  shuffleMaps: text("shuffle_maps").notNull().default("{}"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type DiagnosticSession = typeof diagnosticSessions.$inferSelect;
export type MasterySession = typeof masterySessions.$inferSelect;

export type DiagnosticResult = typeof diagnosticResults.$inferSelect;
export type MasteryResult = typeof masteryResults.$inferSelect;

export type InsertFacility = z.infer<typeof insertFacilitySchema>;
export type Facility = typeof facilities.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type UserStreak = typeof userStreaks.$inferSelect;
export type DailyActivity = typeof dailyActivity.$inferSelect;

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
}

export interface StudyConcept {
  title: string;
  content: string;
  keyPoint: string;
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
