import { eq, and, desc, lte, gte, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  users, userProgress, userStreaks, dailyActivity, quizSessions, facilities,
  diagnosticResults, masteryResults, diagnosticSessions, masterySessions,
  ascPretestResults, ascPosttestResults,
  roles, roleChapterMappings, flashcardReviews, auditLogs, riskAssessments, feedback, leadershipRoleCodes,
  complianceItems, complianceLogs, complianceDocuments,
  type User, type InsertUser, type UserProgress, type UserStreak, type DailyActivity, type QuizSession,
  type Facility, type InsertFacility, type DiagnosticResult, type MasteryResult,
  type DiagnosticSession, type MasterySession, type Role, type RoleChapterMapping,
  type AscPretestResult, type AscPosttestResult, type FlashcardReview, type AuditLog, type RiskAssessment, type Feedback,
  type ComplianceItem, type ComplianceLog, type ComplianceDocument,
} from "@shared/schema";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

export async function ensureTablesExist() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS facilities (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        code TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        department TEXT NOT NULL,
        scope TEXT NOT NULL DEFAULT 'standard',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS role_chapter_mappings (
        id SERIAL PRIMARY KEY,
        role_id INTEGER NOT NULL REFERENCES roles(id),
        chapter_slug TEXT NOT NULL,
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        first_name TEXT NOT NULL DEFAULT '',
        last_name TEXT NOT NULL DEFAULT '',
        password TEXT NOT NULL,
        is_admin BOOLEAN NOT NULL DEFAULT false,
        facility_id INTEGER REFERENCES facilities(id),
        role_id INTEGER REFERENCES roles(id),
        view_scope TEXT NOT NULL DEFAULT 'department',
        role_assigned_at TIMESTAMP,
        daily_goal INTEGER NOT NULL DEFAULT 5,
        reminder_enabled BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      ALTER TABLE users ADD COLUMN IF NOT EXISTS role_id INTEGER REFERENCES roles(id);
      ALTER TABLE users ADD COLUMN IF NOT EXISTS view_scope TEXT NOT NULL DEFAULT 'department';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS role_assigned_at TIMESTAMP;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS additional_role_ids INTEGER[] NOT NULL DEFAULT ARRAY[]::INTEGER[];
      ALTER TABLE users ADD COLUMN IF NOT EXISTS organization_type TEXT NOT NULL DEFAULT 'hospital';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS leadership_role TEXT NOT NULL DEFAULT 'learner';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS department TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS mfa_secret TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS mfa_enabled BOOLEAN NOT NULL DEFAULT false;
      CREATE TABLE IF NOT EXISTS audit_logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        username TEXT,
        leadership_role TEXT NOT NULL DEFAULT 'learner',
        facility_id TEXT,
        facility_name TEXT,
        action TEXT NOT NULL,
        meta TEXT,
        ip_address TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS user_progress (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level_id TEXT NOT NULL,
        score INTEGER NOT NULL DEFAULT 0,
        total_questions INTEGER NOT NULL DEFAULT 0,
        best_score INTEGER NOT NULL DEFAULT 0,
        completed BOOLEAN NOT NULL DEFAULT false,
        completed_at TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS user_streaks (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) UNIQUE,
        current_streak INTEGER NOT NULL DEFAULT 0,
        longest_streak INTEGER NOT NULL DEFAULT 0,
        last_played_date DATE,
        total_xp INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS daily_activity (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        date DATE NOT NULL,
        questions_answered INTEGER NOT NULL DEFAULT 0,
        correct_answers INTEGER NOT NULL DEFAULT 0,
        xp_earned INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS quiz_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level_id TEXT NOT NULL,
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        correct_answers INTEGER NOT NULL DEFAULT 0,
        xp_earned INTEGER NOT NULL DEFAULT 0,
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS diagnostic_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS mastery_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS diagnostic_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      ALTER TABLE diagnostic_sessions ADD COLUMN IF NOT EXISTS question_data TEXT;
      CREATE TABLE IF NOT EXISTS mastery_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS asc_pretest_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        chapter_scores TEXT NOT NULL DEFAULT '{}',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS asc_posttest_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        chapter_scores TEXT NOT NULL DEFAULT '{}',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS asc_test_sessions (
        user_id INTEGER NOT NULL REFERENCES users(id),
        test_type TEXT NOT NULL,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (user_id, test_type)
      );
      CREATE TABLE IF NOT EXISTS flashcard_reviews (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level_id TEXT NOT NULL,
        card_index INTEGER NOT NULL,
        next_review_at TIMESTAMP NOT NULL DEFAULT NOW(),
        interval_minutes INTEGER NOT NULL DEFAULT 1440,
        review_count INTEGER NOT NULL DEFAULT 0,
        last_rating TEXT NOT NULL DEFAULT 'good',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, level_id, card_index)
      );
      CREATE TABLE IF NOT EXISTS risk_assessments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        module TEXT NOT NULL DEFAULT 'hospital',
        risk_areas TEXT NOT NULL DEFAULT '[]',
        notes TEXT NOT NULL DEFAULT '',
        action_plan TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, module)
      );
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        username TEXT,
        first_name TEXT,
        last_name TEXT,
        facility_id INTEGER,
        message TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS leadership_role_codes (
        id SERIAL PRIMARY KEY,
        code TEXT NOT NULL UNIQUE,
        facility_id INTEGER REFERENCES facilities(id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS compliance_items (
        id SERIAL PRIMARY KEY,
        module TEXT NOT NULL DEFAULT 'asc',
        volume TEXT NOT NULL,
        standard_code TEXT NOT NULL,
        item_name TEXT NOT NULL,
        frequency TEXT NOT NULL,
        tier INTEGER NOT NULL,
        category TEXT NOT NULL,
        surveyor_priority INTEGER NOT NULL DEFAULT 2,
        agent_watch BOOLEAN NOT NULL DEFAULT true
      );
      CREATE TABLE IF NOT EXISTS compliance_logs (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        completed_by TEXT NOT NULL,
        completed_at TIMESTAMP NOT NULL DEFAULT NOW(),
        status TEXT NOT NULL DEFAULT 'completed',
        notes TEXT,
        next_due DATE,
        agent_flagged BOOLEAN NOT NULL DEFAULT false
      );
      CREATE TABLE IF NOT EXISTS compliance_documents (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        document_name TEXT NOT NULL,
        uploaded_by TEXT NOT NULL,
        uploaded_at TIMESTAMP NOT NULL DEFAULT NOW(),
        effective_date DATE,
        expiration_date DATE,
        status TEXT NOT NULL DEFAULT 'current',
        ai_tagged_standards TEXT NOT NULL DEFAULT '[]',
        ai_questions_generated BOOLEAN NOT NULL DEFAULT false
      );
      CREATE TABLE IF NOT EXISTS compliance_tasks (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        assigned_to TEXT,
        due_date DATE,
        created_by TEXT,
        created_by_agent BOOLEAN NOT NULL DEFAULT false,
        status TEXT NOT NULL DEFAULT 'pending',
        reminder_sent BOOLEAN NOT NULL DEFAULT false,
        escalated BOOLEAN NOT NULL DEFAULT false
      );
    `);
    console.log("Ensured all database tables exist");
    await seedFacilities(client);
    await seedRoles(client);
    await seedLeadershipCodes(client);
    await seedComplianceItems(client);
  } catch (err) {
    console.error("Error ensuring tables exist:", err);
  } finally {
    client.release();
  }
}

import { ROLE_CONFIGS } from "@shared/roles";

function scopeToDb(scope: "DEPT" | "DEPT_PLUS_ALL" | "FULL"): "standard" | "dual" | "all" {
  if (scope === "FULL") return "all";
  if (scope === "DEPT_PLUS_ALL") return "dual";
  return "standard";
}

function deptToDbCode(department: string): string {
  switch (department) {
    case "Operating Room": return "OR";
    case "Sterile Processing": return "SPD";
    case "PACU & Floor": return "PACU";
    case "Environmental Services": return "EVS";
    case "Facilities & Maintenance": return "Facilities";
    case "Leadership & Compliance": return "Leadership";
    default: return department;
  }
}

const ROLE_SEED: { name: string; slug: string; department: string; scope: "standard" | "all" | "dual"; chapters: string[] }[] =
  ROLE_CONFIGS.map((r) => ({
    name: r.title,
    slug: r.id,
    department: deptToDbCode(r.department),
    scope: scopeToDb(r.scope),
    chapters: r.chapters,
  }));

const KNOWN_FACILITIES: { code: string; name: string }[] = [
  { code: "TSC001", name: "The Surgery Center" },
  { code: "SITE486045", name: "Midwest Orthopedic Specialty Hospital" },
];

const LEADERSHIP_CODES_BY_FACILITY: Record<string, string[]> = {
  TSC001: [
    "ARLD-K4X9-PQ2M",
    "ARLD-T7NB-W1CJ",
    "ARLD-5HFR-D8LZ",
  ],
  SITE486045: [
    "MOSH-J7KP-X4NR",
    "MOSH-B2WQ-T9FV",
    "MOSH-C6LD-Y3HZ",
  ],
};

async function seedComplianceItems(client: pg.PoolClient) {
  const { ASC_COMPLIANCE_ITEMS } = await import("./compliance-seed-data.js");
  const { rows } = await client.query("SELECT COUNT(*) FROM compliance_items");
  if (parseInt(rows[0].count) > 0) return;
  for (const item of ASC_COMPLIANCE_ITEMS) {
    await client.query(
      `INSERT INTO compliance_items (module, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      ["asc", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true]
    );
  }
  console.log(`Seeded ${ASC_COMPLIANCE_ITEMS.length} ASC compliance items`);
}

async function seedLeadershipCodes(client: pg.PoolClient) {
  for (const [facilityCode, codes] of Object.entries(LEADERSHIP_CODES_BY_FACILITY)) {
    const fRes = await client.query("SELECT id FROM facilities WHERE code = $1", [facilityCode]);
    if (fRes.rows.length === 0) continue;
    const facilityId = fRes.rows[0].id;
    for (const code of codes) {
      await client.query(
        "INSERT INTO leadership_role_codes (code, facility_id) VALUES ($1, $2) ON CONFLICT (code) DO NOTHING",
        [code, facilityId]
      );
    }
  }
}

async function seedFacilities(client: pg.PoolClient) {
  for (const f of KNOWN_FACILITIES) {
    const existing = await client.query("SELECT id FROM facilities WHERE code = $1", [f.code]);
    if (existing.rows.length === 0) {
      await client.query("INSERT INTO facilities (code, name) VALUES ($1, $2)", [f.code, f.name]);
      console.log(`Seeded facility: ${f.name} (${f.code})`);
    } else {
      await client.query("UPDATE facilities SET name = $1 WHERE code = $2", [f.name, f.code]);
    }
  }
  console.log("Seeded known facilities");
}

async function seedRoles(client: pg.PoolClient) {
  for (const r of ROLE_SEED) {
    const existing = await client.query("SELECT id FROM roles WHERE slug = $1", [r.slug]);
    let roleId: number;
    if (existing.rows.length === 0) {
      const inserted = await client.query(
        "INSERT INTO roles (name, slug, department, scope) VALUES ($1, $2, $3, $4) RETURNING id",
        [r.name, r.slug, r.department, r.scope]
      );
      roleId = inserted.rows[0].id;
    } else {
      roleId = existing.rows[0].id;
      await client.query("UPDATE roles SET name=$1, department=$2, scope=$3 WHERE id=$4",
        [r.name, r.department, r.scope, roleId]);
    }
    await client.query("DELETE FROM role_chapter_mappings WHERE role_id = $1", [roleId]);
    for (let i = 0; i < r.chapters.length; i++) {
      await client.query(
        "INSERT INTO role_chapter_mappings (role_id, chapter_slug, display_order) VALUES ($1, $2, $3)",
        [roleId, r.chapters[i], i]
      );
    }
  }
  console.log("Seeded roles and role_chapter_mappings");
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, data: Partial<User>): Promise<User | undefined>;

  getStreak(userId: number): Promise<UserStreak | undefined>;
  upsertStreak(userId: number, data: Partial<UserStreak>): Promise<UserStreak>;

  getProgress(userId: number): Promise<UserProgress[]>;
  getProgressByLevel(userId: number, levelId: string): Promise<UserProgress | undefined>;
  upsertProgress(userId: number, levelId: string, score: number, totalQuestions: number): Promise<UserProgress>;

  getDailyActivity(userId: number, date: string): Promise<DailyActivity | undefined>;
  getActivities(userId: number): Promise<DailyActivity[]>;
  upsertDailyActivity(userId: number, date: string, questionsAnswered: number, correctAnswers: number, xpEarned: number): Promise<DailyActivity>;

  getQuizSession(userId: number, levelId: string): Promise<QuizSession | undefined>;
  getUserQuizSessions(userId: number): Promise<QuizSession[]>;
  getAllQuizSessions(): Promise<QuizSession[]>;
  upsertQuizSession(userId: number, levelId: string, data: Partial<QuizSession>): Promise<QuizSession>;
  deleteQuizSession(userId: number, levelId: string): Promise<void>;

  getAllUsers(): Promise<User[]>;
  getUsersByFacility(facilityId: number): Promise<User[]>;
  getAllStreaks(): Promise<UserStreak[]>;
  getAllActivities(): Promise<DailyActivity[]>;
  clearAllActivities(): Promise<void>;

  createFacility(data: InsertFacility): Promise<Facility>;
  getFacility(id: number): Promise<Facility | undefined>;
  getFacilityByCode(code: string): Promise<Facility | undefined>;
  getAllFacilities(): Promise<Facility[]>;

  getDiagnosticResults(userId: number): Promise<DiagnosticResult[]>;
  createDiagnosticResult(userId: number, score: number, totalQuestions: number, answers: string): Promise<DiagnosticResult>;
  getMasteryResults(userId: number): Promise<MasteryResult[]>;
  createMasteryResult(userId: number, score: number, totalQuestions: number, answers: string): Promise<MasteryResult>;

  getAscPretestResults(userId: number): Promise<AscPretestResult[]>;
  createAscPretestResult(userId: number, score: number, totalQuestions: number, answers: string, chapterScores: string): Promise<AscPretestResult>;
  getAscPosttestResults(userId: number): Promise<AscPosttestResult[]>;
  createAscPosttestResult(userId: number, score: number, totalQuestions: number, answers: string, chapterScores: string): Promise<AscPosttestResult>;

  getAllRoles(): Promise<Role[]>;
  getRoleById(id: number): Promise<Role | undefined>;
  getRoleBySlug(slug: string): Promise<Role | undefined>;
  getRoleChapters(roleId: number): Promise<RoleChapterMapping[]>;
  getUserAssignedChapters(userId: number): Promise<string[]>;

  getDiagnosticSession(userId: number): Promise<DiagnosticSession | undefined>;
  upsertDiagnosticSession(userId: number, data: Partial<DiagnosticSession>): Promise<DiagnosticSession>;
  deleteDiagnosticSession(userId: number): Promise<void>;
  getMasterySession(userId: number): Promise<MasterySession | undefined>;
  upsertMasterySession(userId: number, data: Partial<MasterySession>): Promise<MasterySession>;
  deleteMasterySession(userId: number): Promise<void>;

  getFlashcardReviews(userId: number, levelId: string): Promise<FlashcardReview[]>;
  upsertFlashcardReview(userId: number, levelId: string, cardIndex: number, nextReviewAt: Date, intervalMinutes: number, lastRating: string): Promise<FlashcardReview>;
  resetFlashcardReviews(userId: number, levelId: string): Promise<void>;
  getDueFlashcards(userId: number): Promise<FlashcardReview[]>;
  getDueFlashcardCount(userId: number): Promise<number>;

  enableMfa(userId: number, secret: string): Promise<void>;
  disableMfa(userId: number): Promise<void>;

  createAuditLog(entry: {
    userId?: number | null;
    username?: string | null;
    leadershipRole: string;
    facilityId?: string | null;
    facilityName?: string | null;
    action: string;
    meta?: Record<string, unknown> | null;
    ipAddress?: string | null;
  }): Promise<AuditLog>;
  getAuditLogs(limit?: number): Promise<AuditLog[]>;
  getAuditLogsByUser(userId: number): Promise<AuditLog[]>;

  getRiskAssessment(userId: number, module: string): Promise<RiskAssessment | undefined>;
  upsertRiskAssessment(userId: number, module: string, riskAreas: string, notes: string, actionPlan: string): Promise<RiskAssessment>;
  deleteRiskAssessment(userId: number, module: string): Promise<void>;
  getRiskAssessmentsByFacility(facilityId: number | null, module: string): Promise<(RiskAssessment & { username: string; firstName: string; lastName: string; department: string | null })[]>;

  createFeedback(data: { userId?: number; username?: string; firstName?: string; lastName?: string; facilityId?: number; message: string }): Promise<Feedback>;
  getAllFeedback(): Promise<Feedback[]>;

  getDailyActivitySince(startDate: string): Promise<DailyActivity[]>;

  validateLeadershipCode(code: string, facilityId: number | null): Promise<boolean>;
  getLeadershipCodes(): Promise<{ id: number; code: string; facilityId: number | null; facilityName: string | null; createdAt: Date }[]>;

  // Compliance
  getComplianceItems(module?: string): Promise<ComplianceItem[]>;
  getComplianceLogs(facilityId: number): Promise<ComplianceLog[]>;
  createComplianceLog(data: { facilityId: number; itemId: number; completedBy: string; notes?: string; nextDue?: string }): Promise<ComplianceLog>;
  getComplianceDocuments(facilityId: number): Promise<ComplianceDocument[]>;
  createComplianceDocument(data: { facilityId: number; itemId: number; documentName: string; uploadedBy: string; expirationDate?: string; effectiveDate?: string }): Promise<ComplianceDocument>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const normalized = username.trim().toLowerCase();
    const [user] = await db.select().from(users)
      .where(sql`lower(${users.username}) = ${normalized}`);
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User | undefined> {
    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();
    return user;
  }

  async getStreak(userId: number): Promise<UserStreak | undefined> {
    const [streak] = await db.select().from(userStreaks).where(eq(userStreaks.userId, userId));
    return streak;
  }

  async upsertStreak(userId: number, data: Partial<UserStreak>): Promise<UserStreak> {
    const existing = await this.getStreak(userId);
    if (existing) {
      const [updated] = await db.update(userStreaks).set(data).where(eq(userStreaks.userId, userId)).returning();
      return updated;
    }
    const [created] = await db.insert(userStreaks).values({
      userId,
      currentStreak: data.currentStreak || 0,
      longestStreak: data.longestStreak || 0,
      totalXp: data.totalXp || 0,
      lastPlayedDate: data.lastPlayedDate || null,
    }).returning();
    return created;
  }

  async getProgress(userId: number): Promise<UserProgress[]> {
    return db.select().from(userProgress).where(eq(userProgress.userId, userId));
  }

  async getProgressByLevel(userId: number, levelId: string): Promise<UserProgress | undefined> {
    const [p] = await db.select().from(userProgress).where(
      and(eq(userProgress.userId, userId), eq(userProgress.levelId, levelId))
    );
    return p;
  }

  async upsertProgress(userId: number, levelId: string, score: number, totalQuestions: number): Promise<UserProgress> {
    const existing = await this.getProgressByLevel(userId, levelId);

    if (existing) {
      const newBestScore = Math.max(existing.bestScore, score);
      const [updated] = await db.update(userProgress).set({
        score,
        totalQuestions,
        bestScore: newBestScore,
        completed: true,
        completedAt: existing.completedAt || new Date(),
      }).where(eq(userProgress.id, existing.id)).returning();
      return updated;
    }

    const [created] = await db.insert(userProgress).values({
      userId,
      levelId,
      score,
      totalQuestions,
      bestScore: score,
      completed: true,
      completedAt: new Date(),
    }).returning();
    return created;
  }

  async getDailyActivity(userId: number, date: string): Promise<DailyActivity | undefined> {
    const [activity] = await db.select().from(dailyActivity).where(
      and(eq(dailyActivity.userId, userId), eq(dailyActivity.date, date))
    );
    return activity;
  }

  async getActivities(userId: number): Promise<DailyActivity[]> {
    return db.select().from(dailyActivity).where(eq(dailyActivity.userId, userId)).orderBy(desc(dailyActivity.date));
  }

  async upsertDailyActivity(userId: number, date: string, questionsAnswered: number, correctAnswers: number, xpEarned: number): Promise<DailyActivity> {
    const existing = await this.getDailyActivity(userId, date);

    if (existing) {
      const [updated] = await db.update(dailyActivity).set({
        questionsAnswered: existing.questionsAnswered + questionsAnswered,
        correctAnswers: existing.correctAnswers + correctAnswers,
        xpEarned: existing.xpEarned + xpEarned,
      }).where(eq(dailyActivity.id, existing.id)).returning();
      return updated;
    }

    const [created] = await db.insert(dailyActivity).values({
      userId,
      date,
      questionsAnswered,
      correctAnswers,
      xpEarned,
    }).returning();
    return created;
  }

  async getQuizSession(userId: number, levelId: string): Promise<QuizSession | undefined> {
    const [session] = await db.select().from(quizSessions).where(
      and(eq(quizSessions.userId, userId), eq(quizSessions.levelId, levelId))
    );
    return session;
  }

  async getUserQuizSessions(userId: number): Promise<QuizSession[]> {
    return db.select().from(quizSessions).where(eq(quizSessions.userId, userId));
  }

  async getAllQuizSessions(): Promise<QuizSession[]> {
    return db.select().from(quizSessions);
  }

  async upsertQuizSession(userId: number, levelId: string, data: Partial<QuizSession>): Promise<QuizSession> {
    const existing = await this.getQuizSession(userId, levelId);
    if (existing) {
      const [updated] = await db.update(quizSessions).set({
        ...data,
        updatedAt: new Date(),
      }).where(eq(quizSessions.id, existing.id)).returning();
      return updated;
    }
    const [created] = await db.insert(quizSessions).values({
      userId,
      levelId,
      questionOrder: data.questionOrder || [],
      answers: data.answers || "[]",
      currentQuestion: data.currentQuestion || 0,
      correctAnswers: data.correctAnswers || 0,
      xpEarned: data.xpEarned || 0,
    }).returning();
    return created;
  }

  async deleteQuizSession(userId: number, levelId: string): Promise<void> {
    await db.delete(quizSessions).where(
      and(eq(quizSessions.userId, userId), eq(quizSessions.levelId, levelId))
    );
  }

  async getAllUsers(): Promise<User[]> {
    return db.select().from(users).orderBy(users.createdAt);
  }

  async getUsersByFacility(facilityId: number): Promise<User[]> {
    return db.select().from(users).where(eq(users.facilityId, facilityId)).orderBy(users.createdAt);
  }

  async getAllStreaks(): Promise<UserStreak[]> {
    return db.select().from(userStreaks);
  }

  async getAllActivities(): Promise<DailyActivity[]> {
    return db.select().from(dailyActivity);
  }

  async getDailyActivitySince(startDate: string): Promise<DailyActivity[]> {
    return db.select().from(dailyActivity).where(gte(dailyActivity.date, startDate));
  }

  async clearAllActivities(): Promise<void> {
    await db.delete(dailyActivity);
  }

  async createFacility(data: InsertFacility): Promise<Facility> {
    const [facility] = await db.insert(facilities).values(data).returning();
    return facility;
  }

  async getFacility(id: number): Promise<Facility | undefined> {
    const [facility] = await db.select().from(facilities).where(eq(facilities.id, id));
    return facility;
  }

  async getFacilityByCode(code: string): Promise<Facility | undefined> {
    const [facility] = await db.select().from(facilities).where(eq(facilities.code, code));
    return facility;
  }

  async getAllFacilities(): Promise<Facility[]> {
    return db.select().from(facilities).orderBy(facilities.name);
  }

  async getDiagnosticResults(userId: number): Promise<DiagnosticResult[]> {
    return db.select().from(diagnosticResults).where(eq(diagnosticResults.userId, userId)).orderBy(desc(diagnosticResults.completedAt));
  }

  async createDiagnosticResult(userId: number, score: number, totalQuestions: number, answers: string): Promise<DiagnosticResult> {
    const [result] = await db.insert(diagnosticResults).values({ userId, score, totalQuestions, answers }).returning();
    return result;
  }

  async getMasteryResults(userId: number): Promise<MasteryResult[]> {
    return db.select().from(masteryResults).where(eq(masteryResults.userId, userId)).orderBy(desc(masteryResults.completedAt));
  }

  async createMasteryResult(userId: number, score: number, totalQuestions: number, answers: string): Promise<MasteryResult> {
    const [result] = await db.insert(masteryResults).values({ userId, score, totalQuestions, answers }).returning();
    return result;
  }

  async getAscPretestResults(userId: number): Promise<AscPretestResult[]> {
    return db.select().from(ascPretestResults).where(eq(ascPretestResults.userId, userId)).orderBy(desc(ascPretestResults.completedAt));
  }

  async createAscPretestResult(userId: number, score: number, totalQuestions: number, answers: string, chapterScores: string): Promise<AscPretestResult> {
    const [result] = await db.insert(ascPretestResults).values({ userId, score, totalQuestions, answers, chapterScores }).returning();
    return result;
  }

  async getAscTestSession(userId: number, testType: string): Promise<{ shuffleMaps: string } | null> {
    const client = await pool.connect();
    try {
      const r = await client.query(
        "SELECT shuffle_maps FROM asc_test_sessions WHERE user_id = $1 AND test_type = $2",
        [userId, testType],
      );
      if (r.rows.length === 0) return null;
      return { shuffleMaps: r.rows[0].shuffle_maps as string };
    } finally {
      client.release();
    }
  }

  async upsertAscTestSession(userId: number, testType: string, shuffleMaps: string): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query(
        `INSERT INTO asc_test_sessions (user_id, test_type, shuffle_maps, updated_at)
         VALUES ($1, $2, $3, NOW())
         ON CONFLICT (user_id, test_type)
         DO UPDATE SET shuffle_maps = EXCLUDED.shuffle_maps, updated_at = NOW()`,
        [userId, testType, shuffleMaps],
      );
    } finally {
      client.release();
    }
  }

  async deleteAscTestSession(userId: number, testType: string): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query(
        "DELETE FROM asc_test_sessions WHERE user_id = $1 AND test_type = $2",
        [userId, testType],
      );
    } finally {
      client.release();
    }
  }

  async claimAscTestSession(userId: number, testType: string): Promise<{ shuffleMaps: string } | null> {
    const client = await pool.connect();
    try {
      const r = await client.query(
        "DELETE FROM asc_test_sessions WHERE user_id = $1 AND test_type = $2 RETURNING shuffle_maps",
        [userId, testType],
      );
      if (r.rows.length === 0) return null;
      return { shuffleMaps: r.rows[0].shuffle_maps as string };
    } finally {
      client.release();
    }
  }

  async getAscPosttestResults(userId: number): Promise<AscPosttestResult[]> {
    return db.select().from(ascPosttestResults).where(eq(ascPosttestResults.userId, userId)).orderBy(desc(ascPosttestResults.completedAt));
  }

  async createAscPosttestResult(userId: number, score: number, totalQuestions: number, answers: string, chapterScores: string): Promise<AscPosttestResult> {
    const [result] = await db.insert(ascPosttestResults).values({ userId, score, totalQuestions, answers, chapterScores }).returning();
    return result;
  }

  async getDiagnosticSession(userId: number): Promise<DiagnosticSession | undefined> {
    const [session] = await db.select().from(diagnosticSessions).where(eq(diagnosticSessions.userId, userId));
    return session;
  }

  async upsertDiagnosticSession(userId: number, data: Partial<DiagnosticSession>): Promise<DiagnosticSession> {
    const existing = await this.getDiagnosticSession(userId);
    if (existing) {
      const [updated] = await db.update(diagnosticSessions).set({
        ...data,
        updatedAt: new Date(),
      }).where(eq(diagnosticSessions.id, existing.id)).returning();
      return updated;
    }
    const [created] = await db.insert(diagnosticSessions).values({
      userId,
      questionOrder: data.questionOrder || [],
      answers: data.answers || "[]",
      currentQuestion: data.currentQuestion || 0,
      shuffleMaps: data.shuffleMaps || "{}",
      questionData: data.questionData ?? null,
    }).returning();
    return created;
  }

  async deleteDiagnosticSession(userId: number): Promise<void> {
    await db.delete(diagnosticSessions).where(eq(diagnosticSessions.userId, userId));
  }

  async getMasterySession(userId: number): Promise<MasterySession | undefined> {
    const [session] = await db.select().from(masterySessions).where(eq(masterySessions.userId, userId));
    return session;
  }

  async upsertMasterySession(userId: number, data: Partial<MasterySession>): Promise<MasterySession> {
    const existing = await this.getMasterySession(userId);
    if (existing) {
      const [updated] = await db.update(masterySessions).set({
        ...data,
        updatedAt: new Date(),
      }).where(eq(masterySessions.id, existing.id)).returning();
      return updated;
    }
    const [created] = await db.insert(masterySessions).values({
      userId,
      questionOrder: data.questionOrder || [],
      answers: data.answers || "[]",
      currentQuestion: data.currentQuestion || 0,
      shuffleMaps: data.shuffleMaps || "{}",
    }).returning();
    return created;
  }

  async deleteMasterySession(userId: number): Promise<void> {
    await db.delete(masterySessions).where(eq(masterySessions.userId, userId));
  }

  async getFlashcardReviews(userId: number, levelId: string): Promise<FlashcardReview[]> {
    return db.select().from(flashcardReviews).where(
      and(eq(flashcardReviews.userId, userId), eq(flashcardReviews.levelId, levelId))
    );
  }

  async upsertFlashcardReview(userId: number, levelId: string, cardIndex: number, nextReviewAt: Date, intervalMinutes: number, lastRating: string): Promise<FlashcardReview> {
    const client = await pool.connect();
    try {
      const r = await client.query(
        `INSERT INTO flashcard_reviews (user_id, level_id, card_index, next_review_at, interval_minutes, review_count, last_rating, updated_at)
         VALUES ($1, $2, $3, $4, $5, 1, $6, NOW())
         ON CONFLICT (user_id, level_id, card_index)
         DO UPDATE SET
           next_review_at = EXCLUDED.next_review_at,
           interval_minutes = EXCLUDED.interval_minutes,
           review_count = flashcard_reviews.review_count + 1,
           last_rating = EXCLUDED.last_rating,
           updated_at = NOW()
         RETURNING *`,
        [userId, levelId, cardIndex, nextReviewAt.toISOString(), intervalMinutes, lastRating]
      );
      const row = r.rows[0];
      return {
        id: row.id,
        userId: row.user_id,
        levelId: row.level_id,
        cardIndex: row.card_index,
        nextReviewAt: new Date(row.next_review_at),
        intervalMinutes: row.interval_minutes,
        reviewCount: row.review_count,
        lastRating: row.last_rating,
        updatedAt: new Date(row.updated_at),
      };
    } finally {
      client.release();
    }
  }

  async resetFlashcardReviews(userId: number, levelId: string): Promise<void> {
    await db.delete(flashcardReviews).where(
      and(eq(flashcardReviews.userId, userId), eq(flashcardReviews.levelId, levelId))
    );
  }

  async getDueFlashcards(userId: number): Promise<FlashcardReview[]> {
    return db.select().from(flashcardReviews).where(
      and(eq(flashcardReviews.userId, userId), lte(flashcardReviews.nextReviewAt, new Date()))
    );
  }

  async getDueFlashcardCount(userId: number): Promise<number> {
    const rows = await this.getDueFlashcards(userId);
    return rows.length;
  }

  async enableMfa(userId: number, secret: string): Promise<void> {
    await db.update(users).set({ mfaSecret: secret, mfaEnabled: true }).where(eq(users.id, userId));
  }

  async disableMfa(userId: number): Promise<void> {
    await db.update(users).set({ mfaSecret: null, mfaEnabled: false }).where(eq(users.id, userId));
  }

  async createAuditLog(entry: {
    userId?: number | null;
    username?: string | null;
    leadershipRole: string;
    facilityId?: string | null;
    facilityName?: string | null;
    action: string;
    meta?: Record<string, unknown> | null;
    ipAddress?: string | null;
  }): Promise<AuditLog> {
    const [row] = await db.insert(auditLogs).values({
      userId: entry.userId ?? null,
      username: entry.username ?? null,
      leadershipRole: entry.leadershipRole,
      facilityId: entry.facilityId ?? null,
      facilityName: entry.facilityName ?? null,
      action: entry.action,
      meta: entry.meta ? JSON.stringify(entry.meta) : null,
      ipAddress: entry.ipAddress ?? null,
    }).returning();
    return row;
  }

  async getAuditLogs(limit = 500): Promise<AuditLog[]> {
    return db.select().from(auditLogs).orderBy(desc(auditLogs.createdAt)).limit(limit);
  }

  async getAuditLogsByUser(userId: number): Promise<AuditLog[]> {
    return db.select().from(auditLogs).where(eq(auditLogs.userId, userId)).orderBy(desc(auditLogs.createdAt));
  }

  async getAllRoles(): Promise<Role[]> {
    return await db.select().from(roles).orderBy(roles.department, roles.name);
  }

  async getRoleById(id: number): Promise<Role | undefined> {
    const [role] = await db.select().from(roles).where(eq(roles.id, id));
    return role;
  }

  async getRoleBySlug(slug: string): Promise<Role | undefined> {
    const [role] = await db.select().from(roles).where(eq(roles.slug, slug));
    return role;
  }

  async getRoleChapters(roleId: number): Promise<RoleChapterMapping[]> {
    return await db.select().from(roleChapterMappings)
      .where(eq(roleChapterMappings.roleId, roleId))
      .orderBy(roleChapterMappings.displayOrder);
  }

  async getUserAssignedChapters(userId: number): Promise<string[]> {
    const user = await this.getUser(userId);
    if (!user || !user.roleId) return [];
    if (user.organizationType && user.organizationType !== "hospital") return [];
    const ALL_LEVELS = ["transport","environment","segregation","sterile_storage","instruments","facilities","spd_decontam","or_sterile_field","universal_protocol","patient_care_docs","eoc_safety"];
    const DEPT_TO_LEVELS: Record<string, string[]> = {
      OR: ["or_sterile_field", "universal_protocol", "instruments", "transport"],
      SPD: ["spd_decontam", "segregation", "sterile_storage", "transport", "instruments"],
      PACU: ["patient_care_docs", "eoc_safety", "universal_protocol"],
      EVS: ["environment", "segregation", "eoc_safety"],
      Facilities: ["facilities", "eoc_safety", "environment"],
      Leadership: ALL_LEVELS,
    };
    const chaptersForRole = async (roleId: number): Promise<string[]> => {
      const role = await this.getRoleById(roleId);
      if (!role) return [];
      const mappings = await this.getRoleChapters(role.id);
      const allMapped = mappings.map(m => m.chapterSlug);
      if (role.scope === "all") return allMapped;
      if (role.scope === "dual") {
        if (user.viewScope === "all") return allMapped;
        const deptLevels = DEPT_TO_LEVELS[role.department] || ALL_LEVELS;
        return allMapped.filter(c => deptLevels.includes(c));
      }
      return allMapped;
    };
    const ids = [user.roleId, ...(user.additionalRoleIds || []).filter(id => id !== user.roleId)];
    const union = new Set<string>();
    for (const rid of ids) {
      const list = await chaptersForRole(rid);
      list.forEach(c => union.add(c));
    }
    return Array.from(union);
  }

  async getRiskAssessment(userId: number, module: string): Promise<RiskAssessment | undefined> {
    const [row] = await db.select().from(riskAssessments).where(
      and(eq(riskAssessments.userId, userId), eq(riskAssessments.module, module))
    );
    return row;
  }

  async upsertRiskAssessment(userId: number, module: string, riskAreas: string, notes: string, actionPlan: string): Promise<RiskAssessment> {
    const existing = await this.getRiskAssessment(userId, module);
    if (existing) {
      const [updated] = await db.update(riskAssessments).set({
        riskAreas, notes, actionPlan, updatedAt: new Date(),
      }).where(and(eq(riskAssessments.userId, userId), eq(riskAssessments.module, module))).returning();
      return updated;
    }
    const [created] = await db.insert(riskAssessments).values({
      userId, module, riskAreas, notes, actionPlan,
    }).returning();
    return created;
  }

  async deleteRiskAssessment(userId: number, module: string): Promise<void> {
    await db.delete(riskAssessments).where(
      and(eq(riskAssessments.userId, userId), eq(riskAssessments.module, module))
    );
  }

  async createFeedback(data: { userId?: number; username?: string; firstName?: string; lastName?: string; facilityId?: number; message: string }): Promise<Feedback> {
    const [row] = await db.insert(feedback).values({
      userId: data.userId ?? null,
      username: data.username ?? null,
      firstName: data.firstName ?? null,
      lastName: data.lastName ?? null,
      facilityId: data.facilityId ?? null,
      message: data.message,
    }).returning();
    return row;
  }

  async getAllFeedback(): Promise<Feedback[]> {
    return db.select().from(feedback).orderBy(desc(feedback.createdAt));
  }

  async validateLeadershipCode(code: string, facilityId: number | null): Promise<boolean> {
    const result = await pool.query(
      "SELECT id FROM leadership_role_codes WHERE UPPER(code) = UPPER($1) AND (facility_id = $2 OR facility_id IS NULL)",
      [code.trim(), facilityId]
    );
    return result.rows.length > 0;
  }

  async getLeadershipCodes(): Promise<{ id: number; code: string; facilityId: number | null; facilityName: string | null; createdAt: Date }[]> {
    const result = await pool.query(
      `SELECT lrc.id, lrc.code, lrc.facility_id, f.name as facility_name, lrc.created_at
       FROM leadership_role_codes lrc
       LEFT JOIN facilities f ON f.id = lrc.facility_id
       ORDER BY f.name NULLS LAST, lrc.code`
    );
    return result.rows.map((r: any) => ({
      id: r.id,
      code: r.code,
      facilityId: r.facility_id,
      facilityName: r.facility_name,
      createdAt: r.created_at,
    }));
  }

  async getRiskAssessmentsByFacility(facilityId: number | null, module: string): Promise<(RiskAssessment & { username: string; firstName: string; lastName: string; department: string | null })[]> {
    const allUsers = facilityId
      ? await db.select().from(users).where(eq(users.facilityId, facilityId))
      : await db.select().from(users);
    const orgFiltered = allUsers.filter(u => (u.organizationType || "hospital") === module);
    const userIds = orgFiltered.map(u => u.id);
    if (userIds.length === 0) return [];
    const rows = await db.select().from(riskAssessments).where(
      sql`${riskAssessments.userId} = ANY(${sql`ARRAY[${sql.join(userIds.map(id => sql`${id}`), sql`, `)}]::integer[]`})`
    );
    const userMap = new Map(orgFiltered.map(u => [u.id, u]));
    return rows.map(r => ({
      ...r,
      username: userMap.get(r.userId)?.username ?? "",
      firstName: userMap.get(r.userId)?.firstName ?? "",
      lastName: userMap.get(r.userId)?.lastName ?? "",
      department: userMap.get(r.userId)?.department ?? null,
    }));
  }

  // ── Compliance ───────────────────────────────────────────────────────────────

  async getComplianceItems(module = "asc"): Promise<ComplianceItem[]> {
    return db.select().from(complianceItems)
      .where(eq(complianceItems.module, module))
      .orderBy(complianceItems.volume, complianceItems.surveyorPriority);
  }

  async getComplianceLogs(facilityId: number): Promise<ComplianceLog[]> {
    return db.select().from(complianceLogs)
      .where(eq(complianceLogs.facilityId, facilityId))
      .orderBy(desc(complianceLogs.completedAt));
  }

  async createComplianceLog(data: {
    facilityId: number; itemId: number; completedBy: string; notes?: string; nextDue?: string;
  }): Promise<ComplianceLog> {
    const [row] = await db.insert(complianceLogs).values({
      facilityId: data.facilityId,
      itemId: data.itemId,
      completedBy: data.completedBy,
      notes: data.notes ?? null,
      nextDue: data.nextDue ?? null,
      status: "completed",
    }).returning();
    return row;
  }

  async getComplianceDocuments(facilityId: number): Promise<ComplianceDocument[]> {
    return db.select().from(complianceDocuments)
      .where(eq(complianceDocuments.facilityId, facilityId))
      .orderBy(desc(complianceDocuments.uploadedAt));
  }

  async createComplianceDocument(data: {
    facilityId: number; itemId: number; documentName: string; uploadedBy: string;
    expirationDate?: string; effectiveDate?: string;
  }): Promise<ComplianceDocument> {
    const [row] = await db.insert(complianceDocuments).values({
      facilityId: data.facilityId,
      itemId: data.itemId,
      documentName: data.documentName,
      uploadedBy: data.uploadedBy,
      expirationDate: data.expirationDate ?? null,
      effectiveDate: data.effectiveDate ?? null,
      status: "current",
    }).returning();
    return row;
  }
}

export const storage = new DatabaseStorage();
