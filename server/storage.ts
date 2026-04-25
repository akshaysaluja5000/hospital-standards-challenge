import { eq, and, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  users, userProgress, userStreaks, dailyActivity, quizSessions, facilities,
  diagnosticResults, masteryResults, diagnosticSessions, masterySessions,
  roles, roleChapterMappings,
  type User, type InsertUser, type UserProgress, type UserStreak, type DailyActivity, type QuizSession,
  type Facility, type InsertFacility, type DiagnosticResult, type MasteryResult,
  type DiagnosticSession, type MasterySession, type Role, type RoleChapterMapping,
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
      CREATE TABLE IF NOT EXISTS mastery_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);
    console.log("Ensured all database tables exist");
    await seedRoles(client);
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
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
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
}

export const storage = new DatabaseStorage();
