import { eq, and, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  users, userProgress, userStreaks, dailyActivity, quizSessions, facilities,
  type User, type InsertUser, type UserProgress, type UserStreak, type DailyActivity, type QuizSession,
  type Facility, type InsertFacility,
} from "@shared/schema";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

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
  upsertQuizSession(userId: number, levelId: string, data: Partial<QuizSession>): Promise<QuizSession>;
  deleteQuizSession(userId: number, levelId: string): Promise<void>;

  getAllUsers(): Promise<User[]>;
  getUsersByFacility(facilityId: number): Promise<User[]>;
  getAllStreaks(): Promise<UserStreak[]>;
  getAllActivities(): Promise<DailyActivity[]>;

  createFacility(data: InsertFacility): Promise<Facility>;
  getFacility(id: number): Promise<Facility | undefined>;
  getFacilityByCode(code: string): Promise<Facility | undefined>;
  getAllFacilities(): Promise<Facility[]>;
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
}

export const storage = new DatabaseStorage();
