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
      const today = format(new Date(), "yyyy-MM-dd");
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
      const today = format(new Date(), "yyyy-MM-dd");

      await storage.upsertProgress(userId, levelId, score, totalQuestions);
      await storage.upsertDailyActivity(userId, today, totalQuestions, score, xpEarned);

      let streak = await storage.getStreak(userId);
      if (!streak) {
        streak = await storage.upsertStreak(userId, {
          currentStreak: 1,
          longestStreak: 1,
          totalXp: xpEarned,
          lastPlayedDate: today,
        });
      } else {
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

        const newLongest = Math.max(newStreak, streak.longestStreak);
        streak = await storage.upsertStreak(userId, {
          currentStreak: newStreak,
          longestStreak: newLongest,
          totalXp: streak.totalXp + xpEarned,
          lastPlayedDate: today,
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
      const { questionOrder, answers, currentQuestion, correctAnswers, xpEarned } = req.body;
      const session = await storage.upsertQuizSession(req.user!.id, levelId, {
        questionOrder,
        answers: JSON.stringify(answers),
        currentQuestion,
        correctAnswers,
        xpEarned,
      });
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
      const userFacilityId = (req.user as any).facilityId;
      const allUsers = userFacilityId
        ? await storage.getUsersByFacility(userFacilityId)
        : await storage.getAllUsers();
      const allStreaks = await storage.getAllStreaks();
      const allActivities = await storage.getAllActivities();
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
      const progressByUser = new Map(allProgressData.map((p) => [p.userId, p.progress]));

      const leaderboard = allUsers.map((u) => {
        const streak = streakMap.get(u.id);
        const userActivities = activitiesByUser.get(u.id) || [];
        const userProgress = progressByUser.get(u.id) || [];
        const questionsAnswered = userActivities.reduce((s, a) => s + a.questionsAnswered, 0);
        const correct = userActivities.reduce((s, a) => s + a.correctAnswers, 0);
        const accuracy = questionsAnswered > 0 ? Math.round((correct / questionsAnswered) * 100) : 0;
        const levelsCompleted = userProgress.filter((p) => p.completed).length;

        return {
          id: u.id,
          username: u.username,
          firstName: u.firstName,
          lastName: u.lastName,
          totalXp: streak?.totalXp || 0,
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
      const adminFacilityId = (req.user as any).facilityId;
      const allUsers = adminFacilityId
        ? await storage.getUsersByFacility(adminFacilityId)
        : await storage.getAllUsers();
      const allStreaks = await storage.getAllStreaks();
      const allActivities = await storage.getAllActivities();
      const today = format(new Date(), "yyyy-MM-dd");

      const streakMap = new Map(allStreaks.map((s) => [s.userId, s]));
      const activitiesByUser = new Map<number, DailyActivity[]>();
      allActivities.forEach((a) => {
        const list = activitiesByUser.get(a.userId) || [];
        list.push(a);
        activitiesByUser.set(a.userId, list);
      });

      const facilityUserIds = new Set(allUsers.map((u) => u.id));
      const facilityActivities = allActivities.filter((a) => facilityUserIds.has(a.userId));
      const activeToday = facilityActivities.filter((a) => a.date === today && a.questionsAnswered > 0).length;
      const totalQuestionsAnswered = facilityActivities.reduce((sum, a) => sum + a.questionsAnswered, 0);
      const totalCorrect = facilityActivities.reduce((sum, a) => sum + a.correctAnswers, 0);
      const averageAccuracy = totalQuestionsAnswered > 0
        ? Math.round((totalCorrect / totalQuestionsAnswered) * 100)
        : 0;

      const userList = allUsers.map((u) => {
        const streak = streakMap.get(u.id);
        const userActivities = activitiesByUser.get(u.id) || [];
        const questionsAnswered = userActivities.reduce((s, a) => s + a.questionsAnswered, 0);
        const correct = userActivities.reduce((s, a) => s + a.correctAnswers, 0);
        const accuracy = questionsAnswered > 0 ? Math.round((correct / questionsAnswered) * 100) : 0;

        return {
          id: u.id,
          username: u.username,
          firstName: u.firstName || "",
          lastName: u.lastName || "",
          totalXp: streak?.totalXp || 0,
          currentStreak: streak?.currentStreak || 0,
          longestStreak: streak?.longestStreak || 0,
          questionsAnswered,
          accuracy,
          lastActive: streak?.lastPlayedDate || null,
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
  } catch (e) {
  }

  return httpServer;
}
