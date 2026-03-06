import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { format } from "date-fns";
import connectPgSimple from "connect-pg-simple";
import { z } from "zod";
import type { User, DailyActivity } from "@shared/schema";

function toCentralDate(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-CA", { timeZone: "America/Chicago" });
}

const submitSchema = z.object({
  levelId: z.string().min(1),
  score: z.number().int().min(0),
  totalQuestions: z.number().int().min(1),
  xpEarned: z.number().int().min(0),
});

const settingsSchema = z.object({
  dailyGoal: z.number().int().min(1).max(50).optional(),
  reminderEnabled: z.boolean().optional(),
});

const resetPasswordSchema = z.object({
  username: z.string().min(3),
  newPassword: z.string().min(6),
});

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePassword(supplied: string, stored: string): Promise<boolean> {
  const [hashed, salt] = stored.split(".");
  const buf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(Buffer.from(hashed, "hex"), buf);
}

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      isAdmin: boolean;
      dailyGoal: number;
      reminderEnabled: boolean;
      createdAt: Date;
    }
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  next();
}

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated() || !req.user?.isAdmin) {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.set("trust proxy", 1);

  const PgStore = connectPgSimple(session);

  app.use(
    session({
      store: new PgStore({
        conString: process.env.DATABASE_URL,
        createTableIfMissing: true,
      }),
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user) {
          return done(null, false, { message: "Invalid username or password" });
        }
        const valid = await comparePassword(password, user.password);
        if (!valid) {
          return done(null, false, { message: "Invalid username or password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      if (!user) return done(null, false);
      const { password, ...safeUser } = user;
      done(null, safeUser as Express.User);
    } catch (err) {
      done(err);
    }
  });

  app.post("/api/auth/register", async (req, res) => {
    try {
      const { username, firstName, lastName, facilityCode, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      if (!firstName || !lastName) {
        return res.status(400).json({ message: "First name and last name are required" });
      }
      if (username.length < 3) {
        return res.status(400).json({ message: "Username must be at least 3 characters" });
      }
      if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
      }

      const existingUsername = await storage.getUserByUsername(username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username already taken" });
      }

      let facilityId: number | null = null;
      if (facilityCode && facilityCode.trim()) {
        const facility = await storage.getFacilityByCode(facilityCode.trim().toUpperCase());
        if (!facility) {
          return res.status(400).json({ message: "Invalid facility code. Please check with your administrator." });
        }
        facilityId = facility.id;
      }

      const hashedPassword = await hashPassword(password);
      const isFirstUser = (await storage.getAllUsers()).length === 0;

      let user = await storage.createUser({
        username,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        password: hashedPassword,
        facilityId,
      });

      if (isFirstUser) {
        user = (await storage.updateUser(user.id, { isAdmin: true }))!;
      }

      await storage.upsertStreak(user.id, {
        currentStreak: 0,
        longestStreak: 0,
        totalXp: 0,
      });

      req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Login failed after registration" });
        const { password: _, ...safeUser } = user;
        res.status(201).json(safeUser);
      });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Registration failed" });
    }
  });

  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: info?.message || "Invalid credentials" });
      req.login(user, (err) => {
        if (err) return next(err);
        const { password: _, ...safeUser } = user;
        res.json(safeUser);
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).json({ message: "Logout failed" });
      res.json({ message: "Logged out" });
    });
  });

  app.get("/api/auth/me", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    res.json(req.user);
  });

  app.post("/api/auth/reset-password", async (req, res) => {
    try {
      const parsed = resetPasswordSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid request data" });
      }

      const user = await storage.getUserByUsername(parsed.data.username);
      if (!user) {
        return res.status(404).json({ message: "Username not found" });
      }

      const hashedPassword = await hashPassword(parsed.data.newPassword);
      await storage.updateUser(user.id, { password: hashedPassword });

      res.json({ message: "Password updated successfully" });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.patch("/api/auth/username", requireAuth, async (req, res) => {
    try {
      const { username } = req.body;
      if (!username || username.length < 3) {
        return res.status(400).json({ message: "Username must be at least 3 characters" });
      }
      const existing = await storage.getUserByUsername(username);
      if (existing && existing.id !== req.user!.id) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      const user = await storage.updateUser(req.user!.id, { username });
      if (!user) return res.status(404).json({ message: "User not found" });
      const { password: _, ...safeUser } = user;
      res.json(safeUser);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.patch("/api/auth/password", requireAuth, async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "Current and new password are required" });
      }
      if (newPassword.length < 6) {
        return res.status(400).json({ message: "New password must be at least 6 characters" });
      }
      const fullUser = await storage.getUser(req.user!.id);
      if (!fullUser) return res.status(404).json({ message: "User not found" });
      const valid = await comparePassword(currentPassword, fullUser.password);
      if (!valid) {
        return res.status(400).json({ message: "Current password is incorrect" });
      }
      const hashedPassword = await hashPassword(newPassword);
      await storage.updateUser(req.user!.id, { password: hashedPassword });
      res.json({ message: "Password updated successfully" });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.patch("/api/auth/settings", requireAuth, async (req, res) => {
    try {
      const parsed = settingsSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid settings data" });
      }
      const updates: any = {};
      if (parsed.data.dailyGoal !== undefined) updates.dailyGoal = parsed.data.dailyGoal;
      if (parsed.data.reminderEnabled !== undefined) updates.reminderEnabled = parsed.data.reminderEnabled;
      const user = await storage.updateUser(req.user!.id, updates);
      if (!user) return res.status(404).json({ message: "User not found" });
      const { password: _, ...safeUser } = user;
      res.json(safeUser);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/streak", requireAuth, async (req, res) => {
    try {
      let streak = await storage.getStreak(req.user!.id);
      if (!streak) {
        streak = await storage.upsertStreak(req.user!.id, {
          currentStreak: 0,
          longestStreak: 0,
          totalXp: 0,
        });
      }
      res.json(streak);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/progress", requireAuth, async (req, res) => {
    try {
      const progress = await storage.getProgress(req.user!.id);
      res.json(progress);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/activities", requireAuth, async (req, res) => {
    try {
      const activities = await storage.getActivities(req.user!.id);
      res.json(activities);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/today", requireAuth, async (req, res) => {
    try {
      const today = toCentralDate(new Date());
      let activity = await storage.getDailyActivity(req.user!.id, today);
      if (!activity) {
        activity = { id: 0, userId: req.user!.id, date: today, questionsAnswered: 0, correctAnswers: 0, xpEarned: 0 };
      }
      res.json(activity);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.post("/api/game/submit", requireAuth, async (req, res) => {
    try {
      const parsed = submitSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid submission data" });
      }
      const { levelId, score, totalQuestions, xpEarned } = parsed.data;
      const userId = req.user!.id;
      const today = toCentralDate(new Date());

      const existingSession = await storage.getQuizSession(userId, levelId);
      const alreadyTrackedQ = existingSession?.currentQuestion || 0;
      const alreadyTrackedC = existingSession?.correctAnswers || 0;
      const alreadyTrackedXp = existingSession?.xpEarned || 0;

      const remainingQ = totalQuestions - alreadyTrackedQ;
      const remainingC = score - alreadyTrackedC;
      const remainingXp = xpEarned - alreadyTrackedXp;

      await storage.upsertProgress(userId, levelId, score, totalQuestions);
      if (remainingQ > 0) {
        await storage.upsertDailyActivity(userId, today, remainingQ, remainingC, remainingXp);
      }

      let streak = await storage.getStreak(userId);
      if (!streak) {
        streak = await storage.upsertStreak(userId, {
          currentStreak: 1,
          longestStreak: 1,
          totalXp: xpEarned,
          lastPlayedDate: today,
        });
      } else if (streak.lastPlayedDate !== today) {
        const lastPlayed = streak.lastPlayedDate;
        let newStreak = streak.currentStreak;

        if (lastPlayed) {
          const lastDate = new Date(lastPlayed);
          const todayDate = new Date(today);
          const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            newStreak = streak.currentStreak + 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }
        } else {
          newStreak = 1;
        }

        if (newStreak === 0) newStreak = 1;
        const newLongest = Math.max(newStreak, streak.longestStreak);
        streak = await storage.upsertStreak(userId, {
          currentStreak: newStreak,
          longestStreak: newLongest,
          totalXp: streak.totalXp + xpEarned,
          lastPlayedDate: today,
        });
      } else {
        streak = await storage.upsertStreak(userId, {
          totalXp: streak.totalXp + xpEarned,
        });
      }

      res.json({ success: true, streak });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/sessions", requireAuth, async (req, res) => {
    try {
      const sessions = await storage.getUserQuizSessions(req.user!.id);
      res.json(sessions);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/session/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId as string;
      const session = await storage.getQuizSession(req.user!.id, levelId);
      if (!session) {
        return res.json(null);
      }
      res.json(session);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.post("/api/game/session/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId as string;
      const userId = req.user!.id;
      const { questionOrder, answers, currentQuestion, correctAnswers, xpEarned } = req.body;

      const existingSession = await storage.getQuizSession(userId, levelId);
      const prevQ = existingSession?.currentQuestion || 0;
      const prevC = existingSession?.correctAnswers || 0;
      const prevXp = existingSession?.xpEarned || 0;

      const session = await storage.upsertQuizSession(userId, levelId, {
        questionOrder,
        answers: JSON.stringify(answers),
        currentQuestion,
        correctAnswers,
        xpEarned,
      });

      const deltaQ = currentQuestion - prevQ;
      const deltaC = correctAnswers - prevC;
      const deltaXp = xpEarned - prevXp;

      const today = toCentralDate(new Date());

      if (deltaQ > 0) {
        await storage.upsertDailyActivity(userId, today, deltaQ, deltaC, deltaXp);
      }

      let streak = await storage.getStreak(userId);
      if (!streak) {
        streak = await storage.upsertStreak(userId, {
          currentStreak: 1,
          longestStreak: 1,
          totalXp: 0,
          lastPlayedDate: today,
        });
      } else if (streak.lastPlayedDate !== today) {
        const lastPlayed = streak.lastPlayedDate;
        let newStreak = streak.currentStreak;

        if (lastPlayed) {
          const lastDate = new Date(lastPlayed);
          const todayDate = new Date(today);
          const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            newStreak = streak.currentStreak + 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }
        } else {
          newStreak = 1;
        }

        if (newStreak === 0) newStreak = 1;
        const newLongest = Math.max(newStreak, streak.longestStreak);
        await storage.upsertStreak(userId, {
          currentStreak: newStreak,
          longestStreak: newLongest,
          lastPlayedDate: today,
        });
      }

      res.json(session);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.delete("/api/game/session/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId as string;
      await storage.deleteQuizSession(req.user!.id, levelId);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/leaderboard", requireAuth, async (req, res) => {
    try {
      const allUsers = await storage.getAllUsers();
      const allStreaks = await storage.getAllStreaks();
      const allActivities = await storage.getAllActivities();
      const allSessions = await storage.getAllQuizSessions();
      const allProgressData = await Promise.all(
        allUsers.map(async (u) => ({ userId: u.id, progress: await storage.getProgress(u.id) }))
      );

      const streakMap = new Map(allStreaks.map((s) => [s.userId, s]));
      const activitiesByUser = new Map<number, DailyActivity[]>();
      allActivities.forEach((a) => {
        const list = activitiesByUser.get(a.userId) || [];
        list.push(a);
        activitiesByUser.set(a.userId, list);
      });
      const sessionsByUser = new Map<number, typeof allSessions>();
      allSessions.forEach((s) => {
        const list = sessionsByUser.get(s.userId) || [];
        list.push(s);
        sessionsByUser.set(s.userId, list);
      });
      const progressByUser = new Map(allProgressData.map((p) => [p.userId, p.progress]));

      const leaderboard = allUsers.map((u) => {
        const streak = streakMap.get(u.id);
        const userActivities = activitiesByUser.get(u.id) || [];
        const userSessions = sessionsByUser.get(u.id) || [];
        const userProgress = progressByUser.get(u.id) || [];

        const progressQ = userProgress.reduce((s, p) => s + p.totalQuestions, 0);
        const progressC = userProgress.reduce((s, p) => s + p.score, 0);
        const sessionQ = userSessions.reduce((s, sess) => s + sess.currentQuestion, 0);
        const sessionC = userSessions.reduce((s, sess) => s + sess.correctAnswers, 0);
        const questionsAnswered = progressQ + sessionQ;
        const correct = progressC + sessionC;
        const accuracy = questionsAnswered > 0 ? Math.round((correct / questionsAnswered) * 100) : 0;
        const levelsCompleted = userProgress.filter((p) => p.completed).length;
        const sessionXp = userSessions.reduce((s, sess) => s + (sess.xpEarned || 0), 0);

        return {
          id: u.id,
          username: u.username,
          firstName: u.firstName,
          lastName: u.lastName,
          totalXp: (streak?.totalXp || 0) + sessionXp,
          currentStreak: streak?.currentStreak || 0,
          longestStreak: streak?.longestStreak || 0,
          questionsAnswered,
          accuracy,
          levelsCompleted,
          lastActive: streak?.lastPlayedDate || null,
        };
      }).sort((a, b) => b.totalXp - a.totalXp);

      res.json(leaderboard);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/admin/stats", requireAdmin, async (req, res) => {
    try {
      const allUsers = await storage.getAllUsers();
      const allStreaks = await storage.getAllStreaks();
      const allActivities = await storage.getAllActivities();
      const allSessions = await storage.getAllQuizSessions();
      const allProgressData = await Promise.all(
        allUsers.map(async (u) => ({ userId: u.id, progress: await storage.getProgress(u.id) }))
      );
      const today = toCentralDate(new Date());

      const streakMap = new Map(allStreaks.map((s) => [s.userId, s]));
      const activitiesByUser = new Map<number, DailyActivity[]>();
      allActivities.forEach((a) => {
        const list = activitiesByUser.get(a.userId) || [];
        list.push(a);
        activitiesByUser.set(a.userId, list);
      });

      const sessionsByUser = new Map<number, typeof allSessions>();
      allSessions.forEach((s) => {
        const list = sessionsByUser.get(s.userId) || [];
        list.push(s);
        sessionsByUser.set(s.userId, list);
      });
      const progressByUser = new Map(allProgressData.map((p) => [p.userId, p.progress]));

      const facilityUserIds = new Set(allUsers.map((u) => u.id));

      let totalQuestionsAnswered = 0;
      let totalCorrect = 0;
      allUsers.forEach((u) => {
        const up = progressByUser.get(u.id) || [];
        const us = sessionsByUser.get(u.id) || [];
        totalQuestionsAnswered += up.reduce((s, p) => s + p.totalQuestions, 0) + us.reduce((s, sess) => s + sess.currentQuestion, 0);
        totalCorrect += up.reduce((s, p) => s + p.score, 0) + us.reduce((s, sess) => s + sess.correctAnswers, 0);
      });
      const averageAccuracy = totalQuestionsAnswered > 0
        ? Math.round((totalCorrect / totalQuestionsAnswered) * 100)
        : 0;

      const activeTodayFromActivities = new Set(
        allActivities.filter((a) => facilityUserIds.has(a.userId) && a.date === today && a.questionsAnswered > 0).map((a) => a.userId)
      );
      const activeTodayFromStreaks = new Set(
        allStreaks.filter((s) => facilityUserIds.has(s.userId) && s.lastPlayedDate === today).map((s) => s.userId)
      );
      const activeTodaySet = new Set(Array.from(activeTodayFromActivities).concat(Array.from(activeTodayFromStreaks)));
      const activeToday = activeTodaySet.size;

      const userList = allUsers.map((u) => {
        const streak = streakMap.get(u.id);
        const userActivities = activitiesByUser.get(u.id) || [];
        const userSessions = sessionsByUser.get(u.id) || [];
        const userProg = progressByUser.get(u.id) || [];

        const progressQ = userProg.reduce((s, p) => s + p.totalQuestions, 0);
        const progressC = userProg.reduce((s, p) => s + p.score, 0);
        const sessionQ = userSessions.reduce((s, sess) => s + sess.currentQuestion, 0);
        const sessionC = userSessions.reduce((s, sess) => s + sess.correctAnswers, 0);
        const questionsAnswered = progressQ + sessionQ;
        const correct = progressC + sessionC;
        const accuracy = questionsAnswered > 0 ? Math.round((correct / questionsAnswered) * 100) : 0;

        let lastActiveTimestamp: string | null = null;
        const latestSession = userSessions.reduce((latest: Date | null, sess) => {
          const d = new Date(sess.updatedAt);
          return !latest || d > latest ? d : latest;
        }, null);
        if (latestSession) {
          lastActiveTimestamp = latestSession.toISOString();
        }
        if (!lastActiveTimestamp && streak?.lastPlayedDate) {
          lastActiveTimestamp = new Date(streak.lastPlayedDate + "T12:00:00Z").toISOString();
        }

        const todayActivities = userActivities.filter((a) => a.date === today);
        const questionsToday = todayActivities.reduce((s, a) => s + a.questionsAnswered, 0);
        const correctToday = todayActivities.reduce((s, a) => s + a.correctAnswers, 0);

        return {
          id: u.id,
          username: u.username,
          firstName: u.firstName || "",
          lastName: u.lastName || "",
          totalXp: (streak?.totalXp || 0) + userSessions.reduce((s, sess) => s + (sess.xpEarned || 0), 0),
          currentStreak: streak?.currentStreak || 0,
          longestStreak: streak?.longestStreak || 0,
          questionsAnswered,
          questionsToday,
          correctTotal: correct,
          correctToday,
          accuracy,
          lastActive: lastActiveTimestamp,
          joinedAt: u.createdAt ? new Date(u.createdAt).toISOString() : null,
        };
      }).sort((a, b) => b.totalXp - a.totalXp);

      res.json({
        totalUsers: allUsers.length,
        activeToday,
        totalQuestionsAnswered,
        averageAccuracy,
        userList,
      });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  try {
    let facility = await storage.getFacilityByCode("SITE486045");
    if (!facility) {
      facility = await storage.createFacility({
        name: "Midwest Orthopedic Specialty Hospital",
        code: "SITE486045",
      });
    }

    const adminUser = await storage.getUserByUsername("akshaysaluja");
    if (adminUser && (!adminUser.isAdmin || adminUser.facilityId !== facility.id)) {
      await storage.updateUser(adminUser.id, { isAdmin: true, facilityId: facility.id });
    }

    const existingActs = await storage.getAllActivities();
    if (existingActs.length === 0) {
      const allSessionsForBackfill = await storage.getAllQuizSessions();
      for (const sess of allSessionsForBackfill) {
        if (sess.updatedAt) {
          const sessDate = toCentralDate(new Date(sess.updatedAt));
          let answeredCount = 0;
          let correctCount = 0;
          try {
            const answers = JSON.parse(sess.answers || "[]");
            answeredCount = answers.length;
            correctCount = answers.filter((a: any) => a.correct).length;
          } catch {}
          if (answeredCount > 0) {
            await storage.upsertDailyActivity(sess.userId, sessDate, answeredCount, correctCount, sess.xpEarned);
          }
        }
      }
      const allUsersForBackfill = await storage.getAllUsers();
      for (const u of allUsersForBackfill) {
        const prog = await storage.getProgress(u.id);
        for (const p of prog) {
          if (p.completedAt) {
            const completedDate = toCentralDate(new Date(p.completedAt));
            await storage.upsertDailyActivity(u.id, completedDate, p.totalQuestions, p.score, 0);
          }
        }
      }
    }

    const allStreaks = await storage.getAllStreaks();
    const allActs = await storage.getAllActivities();
    const today = toCentralDate(new Date());
    for (const s of allStreaks) {
      const userActs = allActs.filter((a) => a.userId === s.userId && a.questionsAnswered > 0);
      const dates = new Set(userActs.map((a) => a.date));
      const sortedDates = Array.from(dates).sort();

      if (sortedDates.length === 0) {
        if (s.currentStreak !== 0 || s.longestStreak !== 0) {
          await storage.upsertStreak(s.userId, {
            currentStreak: 0,
            longestStreak: 0,
            lastPlayedDate: null as any,
          });
        }
        continue;
      }

      let bestStreak = 1;
      let runStreak = 1;
      for (let i = 1; i < sortedDates.length; i++) {
        const prev = new Date(sortedDates[i - 1] + "T12:00:00");
        const curr = new Date(sortedDates[i] + "T12:00:00");
        const diff = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
          runStreak++;
        } else {
          runStreak = 1;
        }
        if (runStreak > bestStreak) bestStreak = runStreak;
      }

      const mostRecent = sortedDates[sortedDates.length - 1];
      const daysSinceLast = Math.round(
        (new Date(today + "T12:00:00").getTime() - new Date(mostRecent + "T12:00:00").getTime()) / (1000 * 60 * 60 * 24)
      );
      const correctStreak = daysSinceLast > 1 ? 0 : runStreak;

      await storage.upsertStreak(s.userId, {
        currentStreak: correctStreak,
        longestStreak: bestStreak,
        lastPlayedDate: mostRecent,
      });
    }
  } catch (e) {
  }

  return httpServer;
}
