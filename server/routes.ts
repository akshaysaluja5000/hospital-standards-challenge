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
import Anthropic from "@anthropic-ai/sdk";
import type { User, DailyActivity } from "@shared/schema";
import { deepDiveLevels } from "@shared/deep-dive-questions";
import { diagnosticQuestions } from "@shared/diagnostic-questions";
import { masteryQuestions } from "@shared/mastery-questions";
import { ascPretestQuestions } from "@shared/asc-pretest";
import { ascPosttestQuestions } from "@shared/asc-posttest";
import { levels } from "@shared/questions";
import { findLevelById, getVisibleLevelsForModule } from "@shared/all-levels";
import type { ModuleId } from "@shared/schema";
import { getRoleConfig, ROLE_CONFIGS } from "@shared/roles";

const BYPASS_USERNAMES = ["akshaysaluja", "rsaluja"] as const;

function isFacilityScopeBypass(user: { username?: string | null } | undefined | null): boolean {
  const u = (user?.username || "").trim().toLowerCase();
  return (BYPASS_USERNAMES as readonly string[]).includes(u);
}

function getFacilityFilter(user: User | undefined | null): (other: { facilityId: number | null }) => boolean {
  if (isFacilityScopeBypass(user)) return () => true;
  const fid = user?.facilityId ?? null;
  return (other) => other.facilityId === fid;
}

function getOrganizationTypeFilter(user: User | undefined | null): (other: { organizationType: string | null }) => boolean {
  if (isFacilityScopeBypass(user)) return () => true;
  const orgType = user?.organizationType ?? "hospital";
  return (other) => (other.organizationType ?? "hospital") === orgType;
}

function getAnthropicClient() {
  const apiKey = process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY || "replit-ai-integration";
  const baseURL = process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL;
  const opts: ConstructorParameters<typeof Anthropic>[0] = {
    apiKey,
    maxRetries: 3,
    timeout: 30000,
  };
  if (baseURL) {
    opts.baseURL = baseURL;
  }
  return new Anthropic(opts);
}

async function callAnthropicWithRetry(params: Parameters<InstanceType<typeof Anthropic>["messages"]["create"]>[0], maxAttempts = 3) {
  let lastError: any;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const client = getAnthropicClient();
      return await client.messages.create(params);
    } catch (err: any) {
      lastError = err;
      const isConnectionError = err?.name === "APIConnectionError" || err?.code === "ECONNREFUSED" || err?.cause?.code === "ECONNREFUSED" || (err?.message || "").includes("Connection error") || (err?.message || "").includes("fetch failed");
      console.error(`[Anthropic attempt ${attempt}/${maxAttempts}]`, JSON.stringify({ msg: err?.message, code: err?.code, name: err?.name, status: err?.status, cause: err?.cause?.message }));
      if (isConnectionError && attempt < maxAttempts) {
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

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
  if (!stored || !stored.includes(".")) return false;
  const [hashed, salt] = stored.split(".");
  if (!hashed || !salt) return false;
  const buf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(Buffer.from(hashed, "hex"), buf);
}

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      isAdmin: boolean;
      leadershipRole: string;
      dailyGoal: number;
      reminderEnabled: boolean;
      createdAt: Date;
      roleId: number | null;
      viewScope: string | null;
    }
  }
}

const LEADERSHIP_RANK: Record<string, number> = {
  learner: 0,
  educator: 1,
  director: 2,
  admin: 3,
  super_admin: 4,
};

function getEffectiveLeadershipRole(user: Express.User): string {
  const lr = user.leadershipRole || "learner";
  if (isFacilityScopeBypass(user)) return "super_admin";
  if (user.isAdmin && LEADERSHIP_RANK[lr] < LEADERSHIP_RANK["admin"]) return "admin";
  return lr;
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

function requireLeadershipRole(minRole: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const effective = getEffectiveLeadershipRole(req.user!);
    if ((LEADERSHIP_RANK[effective] ?? 0) < (LEADERSHIP_RANK[minRole] ?? 0)) {
      return res.status(403).json({ message: "Insufficient permissions. This feature requires a leadership role." });
    }
    next();
  };
}

async function userCanAccessLevel(userId: number, levelId: string): Promise<boolean> {
  const user = await storage.getUser(userId);
  if (!user) return false;
  if (user.isAdmin) return true;
  const level = findLevelById(levelId);
  if (!level) return false;
  if (level.draft) return false;
  const userModule = (user.organizationType as ModuleId) || "hospital";
  const levelModule = (level.module as ModuleId) || "hospital";
  if (levelModule !== userModule) return false;
  // Role-based chapter assignment is only enforced for the hospital module.
  // Other modules (asc) are open to any user in that module.
  if (userModule !== "hospital") return true;
  const assigned = await storage.getUserAssignedChapters(userId);
  if (assigned.length === 0) return false;
  return assigned.includes(levelId);
}

async function getModuleLevelsForUser(userId: number) {
  const user = await storage.getUser(userId);
  const module: ModuleId = (user?.organizationType as ModuleId) || "hospital";
  return getVisibleLevelsForModule(module);
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
      const { username, firstName, lastName, facilityCode, password, organizationType } = req.body;

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

      const allowedOrgTypes = ["hospital", "asc"] as const;
      type OrgType = typeof allowedOrgTypes[number];
      const normalizedOrgType: OrgType = (allowedOrgTypes as readonly string[]).includes(organizationType)
        ? (organizationType as OrgType)
        : "hospital";

      const existingUsername = await storage.getUserByUsername(username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username already taken" });
      }

      const trimmedCode = typeof facilityCode === "string" ? facilityCode.trim() : "";
      if (!trimmedCode || trimmedCode.length < 3) {
        return res.status(400).json({
          message: "Institution code is required. Ask your administrator for one or pick a code your team will share.",
        });
      }
      const normalizedCode = trimmedCode.toUpperCase();
      let facility = await storage.getFacilityByCode(normalizedCode);
      if (!facility) {
        facility = await storage.createFacility({
          code: normalizedCode,
          name: normalizedCode,
        });
      }
      const facilityId: number = facility.id;

      const hashedPassword = await hashPassword(password);
      const isFirstUser = (await storage.getAllUsers()).length === 0;
      const isBypassUser = isFacilityScopeBypass({ username });

      let user = await storage.createUser({
        username,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        password: hashedPassword,
        facilityId,
      });

      user = (await storage.updateUser(user.id, {
        organizationType: normalizedOrgType,
        ...(isFirstUser || isBypassUser ? { isAdmin: true } : {}),
      }))!;

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

  app.get("/api/roles", async (_req, res) => {
    const roles = await storage.getAllRoles();
    res.json(roles);
  });

  app.post("/api/auth/role", requireAuth, async (req, res) => {
    const { roleSlug, additionalRoleSlugs } = req.body;
    if (!roleSlug || typeof roleSlug !== "string") {
      return res.status(400).json({ message: "roleSlug is required" });
    }
    // Server-side enforcement: a user can only adopt roles that match their
    // current facility module (organizationType). The client UI also filters,
    // but we must reject cross-facility role assignment from direct API calls.
    const userFacility = req.user!.organizationType;
    const primaryConfig = getRoleConfig(roleSlug);
    if (!primaryConfig) {
      return res.status(404).json({ message: "Role not found" });
    }
    if (primaryConfig.facilityType !== userFacility) {
      return res.status(403).json({
        message: `Role "${roleSlug}" is not available for your facility module (${userFacility}).`,
      });
    }
    const role = await storage.getRoleBySlug(roleSlug);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    let additionalIds: number[] = [];
    if (Array.isArray(additionalRoleSlugs)) {
      for (const slug of additionalRoleSlugs) {
        if (typeof slug !== "string" || slug === roleSlug) continue;
        const cfg = getRoleConfig(slug);
        if (!cfg || cfg.facilityType !== userFacility) {
          return res.status(403).json({
            message: `Role "${slug}" is not available for your facility module (${userFacility}).`,
          });
        }
        const r = await storage.getRoleBySlug(slug);
        if (r && !additionalIds.includes(r.id)) additionalIds.push(r.id);
      }
    }
    const updated = await storage.updateUser(req.user!.id, {
      roleId: role.id,
      additionalRoleIds: additionalIds,
      roleAssignedAt: new Date(),
    });
    if (!updated) return res.status(500).json({ message: "Failed to update role" });
    const { password: _, ...safeUser } = updated;
    res.json(safeUser);
  });

  app.patch("/api/user/view-scope", requireAuth, async (req, res) => {
    const { scope } = req.body;
    if (scope !== "department" && scope !== "all") {
      return res.status(400).json({ message: "scope must be 'department' or 'all'" });
    }
    const updated = await storage.updateUser(req.user!.id, { viewScope: scope });
    if (!updated) return res.status(500).json({ message: "Failed to update view scope" });
    const { password: _, ...safeUser } = updated;
    res.json(safeUser);
  });

  app.get("/api/user/assigned-chapters", requireAuth, async (req, res) => {
    const chapters = await storage.getUserAssignedChapters(req.user!.id);
    let role = null;
    if (req.user!.roleId) {
      role = await storage.getRoleById(req.user!.roleId);
    }
    res.json({ chapters, role });
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

  app.patch("/api/user/organization-type", requireAuth, async (req, res) => {
    try {
      const allowed = ["hospital", "asc"] as const;
      const { organizationType } = req.body || {};
      if (!(allowed as readonly string[]).includes(organizationType)) {
        return res.status(400).json({ message: "Invalid organization type" });
      }
      const user = await storage.updateUser(req.user!.id, { organizationType });
      if (!user) return res.status(404).json({ message: "User not found" });
      const { password: _, ...safeUser } = user;
      res.json(safeUser);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.patch("/api/admin/users/:id/leadership-role", requireLeadershipRole("admin"), async (req, res) => {
    try {
      const { leadershipRole } = req.body || {};
      const userId = parseInt(String(req.params.id), 10);
      const valid = ["learner", "educator", "director", "admin", "super_admin"];
      if (!leadershipRole || !valid.includes(leadershipRole)) {
        return res.status(400).json({ message: "Invalid leadership role" });
      }
      if (Number.isNaN(userId)) return res.status(400).json({ message: "Invalid user id" });
      const caller = req.user!;
      const callerRank = LEADERSHIP_RANK[getEffectiveLeadershipRole(caller)] ?? 0;
      if (callerRank < LEADERSHIP_RANK[leadershipRole]) {
        return res.status(403).json({ message: "Cannot assign a role higher than your own" });
      }
      const updated = await storage.updateUser(userId, { leadershipRole });
      if (!updated) return res.status(404).json({ message: "User not found" });
      res.json({ ok: true });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.patch("/api/admin/users/:id/organization-type", requireAdmin, async (req, res) => {
    try {
      const allowed = ["hospital", "asc"] as const;
      const { organizationType } = req.body || {};
      const userId = parseInt(String(req.params.id), 10);
      if (Number.isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user id" });
      }
      if (!(allowed as readonly string[]).includes(organizationType)) {
        return res.status(400).json({ message: "Invalid organization type" });
      }
      const user = await storage.updateUser(userId, { organizationType });
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
      if (!(await userCanAccessLevel(userId, levelId))) {
        return res.status(403).json({ message: "This chapter is not assigned to your role." });
      }
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
      if (!(await userCanAccessLevel(req.user!.id, levelId))) {
        return res.status(403).json({ message: "This chapter is not assigned to your role." });
      }
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
      if (!(await userCanAccessLevel(userId, levelId))) {
        return res.status(403).json({ message: "This chapter is not assigned to your role." });
      }
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

  app.get("/api/game/deep-dive/session/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId as string;
      if (!(await userCanAccessLevel(req.user!.id, levelId))) {
        return res.status(403).json({ message: "Access denied for this level" });
      }
      const session = await storage.getQuizSession(req.user!.id, levelId);
      if (!session) {
        return res.json(null);
      }
      res.json(session);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  const deepDiveSessionSchema = z.object({
    questionOrder: z.array(z.string()).min(1),
    answers: z.string(),
    currentQuestion: z.number().int().min(0),
    correctAnswers: z.number().int().min(0),
    xpEarned: z.number().int().min(0),
  });

  app.post("/api/game/deep-dive/session/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId as string;
      const userId = req.user!.id;
      if (!(await userCanAccessLevel(userId, levelId))) {
        return res.status(403).json({ message: "Access denied for this level" });
      }
      const data = deepDiveSessionSchema.parse(req.body);

      const session = await storage.upsertQuizSession(userId, levelId, {
        questionOrder: data.questionOrder,
        answers: data.answers,
        currentQuestion: data.currentQuestion,
        correctAnswers: data.correctAnswers,
        xpEarned: data.xpEarned,
      });

      res.json(session);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid session data" });
      }
      res.status(500).json({ message: err.message });
    }
  });

  app.delete("/api/game/deep-dive/session/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId as string;
      await storage.deleteQuizSession(req.user!.id, levelId);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/deep-dive/levels", requireAuth, async (_req, res) => {
    try {
      const levelsInfo = deepDiveLevels.map((l) => ({
        id: l.id,
        name: l.name,
        description: l.description,
        icon: l.icon,
        color: l.color,
        baseLevelId: l.baseLevelId,
        questionCount: l.questions.length,
      }));
      res.json(levelsInfo);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/deep-dive/:levelId", requireAuth, async (req, res) => {
    try {
      const levelId = req.params.levelId;
      if (!(await userCanAccessLevel(req.user!.id, levelId))) {
        return res.status(403).json({ message: "This chapter is not assigned to your role." });
      }
      const level = deepDiveLevels.find((l) => l.id === levelId);
      if (!level) {
        return res.status(404).json({ message: "Deep dive level not found" });
      }
      res.json(level);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  const deepDiveSubmitSchema = z.object({
    levelId: z.string().min(1),
    baseCorrect: z.number().int().min(0),
    followUpCorrect: z.number().int().min(0),
    totalQuestions: z.number().int().min(1),
    followUpAttempted: z.number().int().min(0),
    baseXpEarned: z.number().int().min(0),
    expertXpEarned: z.number().int().min(0),
  });

  app.post("/api/game/deep-dive/submit", requireAuth, async (req, res) => {
    try {
      const data = deepDiveSubmitSchema.parse(req.body);
      const userId = req.user!.id;
      if (!(await userCanAccessLevel(userId, data.levelId))) {
        return res.status(403).json({ message: "This chapter is not assigned to your role." });
      }
      const totalXp = data.baseXpEarned + data.expertXpEarned;
      const totalCorrect = data.baseCorrect + data.followUpCorrect;
      const totalAnswered = data.totalQuestions + data.followUpAttempted;

      const todayCentral = toCentralDate(new Date());
      await storage.upsertDailyActivity(userId, todayCentral, totalAnswered, totalCorrect, totalXp);

      let streak = await storage.getStreak(userId);
      const newTotalXp = (streak?.totalXp || 0) + totalXp;

      if (!streak) {
        streak = await storage.upsertStreak(userId, {
          currentStreak: 1,
          longestStreak: 1,
          totalXp: newTotalXp,
          lastPlayedDate: todayCentral,
        });
      } else {
        const lastDate = streak.lastPlayedDate;
        if (lastDate !== todayCentral) {
          const lastD = lastDate ? new Date(lastDate + "T12:00:00") : null;
          const todayD = new Date(todayCentral + "T12:00:00");
          const diffDays = lastD ? Math.round((todayD.getTime() - lastD.getTime()) / 86400000) : 999;
          let newStreak = diffDays === 1 ? streak.currentStreak + 1 : 1;
          const newLongest = Math.max(newStreak, streak.longestStreak);
          streak = await storage.upsertStreak(userId, {
            currentStreak: newStreak,
            longestStreak: newLongest,
            totalXp: newTotalXp,
            lastPlayedDate: todayCentral,
          });
        } else {
          streak = await storage.upsertStreak(userId, {
            totalXp: newTotalXp,
          });
        }
      }

      res.json({
        success: true,
        xpEarned: totalXp,
        baseXp: data.baseXpEarned,
        expertXp: data.expertXpEarned,
      });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid submission data" });
      }
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/api/game/leaderboard", requireAuth, async (req, res) => {
    try {
      const currentUser = req.user as User;
      const facilityFilter = getFacilityFilter(currentUser);
      const orgTypeFilter = getOrganizationTypeFilter(currentUser);

      // Pre-compute per-module level ID sets so each leaderboard entry can be scored
      // against ITS OWN module. A non-bypass viewer only sees same-module users (so this
      // resolves to the viewer's module for everyone). Bypass admins see all users; each
      // user is scored on their native module's level set so cross-module entries still
      // show meaningful XP.
      const moduleLevelIdsByModule = new Map<ModuleId, Set<string>>([
        ["hospital", new Set(getVisibleLevelsForModule("hospital", { includeDraft: true }).map((l) => l.id))],
        ["asc", new Set(getVisibleLevelsForModule("asc", { includeDraft: true }).map((l) => l.id))],
      ]);

      const allUsersRaw = await storage.getAllUsers();
      const allUsers = allUsersRaw.filter((u) => facilityFilter(u) && orgTypeFilter(u));
      const allStreaks = await storage.getAllStreaks();
      const allSessions = await storage.getAllQuizSessions();
      const allProgressData = await Promise.all(
        allUsers.map(async (u) => ({ userId: u.id, progress: await storage.getProgress(u.id) }))
      );

      const streakMap = new Map(allStreaks.map((s) => [s.userId, s]));
      const sessionsByUser = new Map<number, typeof allSessions>();
      allSessions.forEach((s) => {
        const list = sessionsByUser.get(s.userId) || [];
        list.push(s);
        sessionsByUser.set(s.userId, list);
      });
      const progressByUser = new Map(allProgressData.map((p) => [p.userId, p.progress]));

      const leaderboard = allUsers.map((u) => {
        const streak = streakMap.get(u.id);
        const userModuleId: ModuleId = ((u.organizationType as ModuleId) || "hospital");
        const moduleLevelIds = moduleLevelIdsByModule.get(userModuleId) ?? moduleLevelIdsByModule.get("hospital")!;
        const userSessions = (sessionsByUser.get(u.id) || []).filter((s) => moduleLevelIds.has(s.levelId));
        const userProgress = (progressByUser.get(u.id) || []).filter((p) => moduleLevelIds.has(p.levelId));

        const progressQ = userProgress.reduce((s, p) => s + p.totalQuestions, 0);
        const progressC = userProgress.reduce((s, p) => s + Math.min(p.score, p.totalQuestions), 0);
        const completedLevelIds = new Set(userProgress.map((p) => p.levelId));
        const inProgressSessions = userSessions.filter((sess) => !completedLevelIds.has(sess.levelId));
        const sessionQ = inProgressSessions.reduce((s, sess) => s + sess.currentQuestion, 0);
        const sessionC = inProgressSessions.reduce((s, sess) => s + Math.min(sess.correctAnswers, sess.currentQuestion), 0);
        const questionsAnswered = progressQ + sessionQ;
        const correct = Math.min(progressC + sessionC, questionsAnswered);
        const accuracy = questionsAnswered > 0 ? Math.min(100, Math.round((correct / questionsAnswered) * 100)) : 0;
        const levelsCompleted = userProgress.filter((p) => p.completed).length;
        // Module-specific XP: sum xpEarned across the user's quiz_sessions for THIS module's levels.
        // Quiz sessions persist past completion, so this captures XP from both in-progress and finished levels
        // without double-counting and without leaking cross-module XP from streak.totalXp.
        const moduleTotalXp = userSessions.reduce((s, sess) => s + (sess.xpEarned || 0), 0);

        return {
          id: u.id,
          username: u.username,
          firstName: u.firstName,
          lastName: u.lastName,
          totalXp: moduleTotalXp,
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

  app.get("/api/admin/stats", requireLeadershipRole("director"), async (req, res) => {
    try {
      const adminUser = req.user as User;
      const facilityFilter = getFacilityFilter(adminUser);
      const allUsersRaw = await storage.getAllUsers();
      const allUsers = allUsersRaw.filter(facilityFilter);
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
        const completedIds = new Set(up.map((p) => p.levelId));
        const inProgress = us.filter((sess) => !completedIds.has(sess.levelId));
        const userQ = up.reduce((s, p) => s + p.totalQuestions, 0) + inProgress.reduce((s, sess) => s + sess.currentQuestion, 0);
        const userC = up.reduce((s, p) => s + Math.min(p.score, p.totalQuestions), 0) + inProgress.reduce((s, sess) => s + Math.min(sess.correctAnswers, sess.currentQuestion), 0);
        totalQuestionsAnswered += userQ;
        totalCorrect += Math.min(userC, userQ);
      });
      const averageAccuracy = totalQuestionsAnswered > 0
        ? Math.min(100, Math.round((totalCorrect / totalQuestionsAnswered) * 100))
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
        const progressC = userProg.reduce((s, p) => s + Math.min(p.score, p.totalQuestions), 0);
        const completedLevelIds = new Set(userProg.map((p) => p.levelId));
        const inProgressSessions = userSessions.filter((sess) => !completedLevelIds.has(sess.levelId));
        const sessionQ = inProgressSessions.reduce((s, sess) => s + sess.currentQuestion, 0);
        const sessionC = inProgressSessions.reduce((s, sess) => s + Math.min(sess.correctAnswers, sess.currentQuestion), 0);
        const questionsAnswered = progressQ + sessionQ;
        const correct = Math.min(progressC + sessionC, questionsAnswered);
        const accuracy = questionsAnswered > 0 ? Math.min(100, Math.round((correct / questionsAnswered) * 100)) : 0;

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
          totalXp: (streak?.totalXp || 0) + inProgressSessions.reduce((s, sess) => s + (sess.xpEarned || 0), 0),
          currentStreak: streak?.currentStreak || 0,
          longestStreak: streak?.longestStreak || 0,
          questionsAnswered,
          questionsToday,
          correctTotal: correct,
          correctToday,
          accuracy,
          lastActive: lastActiveTimestamp,
          joinedAt: u.createdAt ? new Date(u.createdAt).toISOString() : null,
          leadershipRole: u.leadershipRole || "learner",
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

    for (const adminUsername of BYPASS_USERNAMES) {
      const adminUser = await storage.getUserByUsername(adminUsername);
      if (adminUser && (!adminUser.isAdmin || adminUser.facilityId !== facility.id)) {
        await storage.updateUser(adminUser.id, { isAdmin: true, facilityId: facility.id });
      }
    }

    const existingActs = await storage.getAllActivities();
    if (existingActs.length === 0) {
      const allSessionsForBackfill = await storage.getAllQuizSessions();
      const allUsersForBackfill = await storage.getAllUsers();

      const rsalujaUser = allUsersForBackfill.find((u) => u.username === "rsaluja");
      const rsalujaId = rsalujaUser?.id;

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
          if (answeredCount > 0 && sess.userId !== rsalujaId) {
            await storage.upsertDailyActivity(sess.userId, sessDate, answeredCount, correctCount, sess.xpEarned);
          }
        }
      }
      for (const u of allUsersForBackfill) {
        if (u.id === rsalujaId) continue;
        const prog = await storage.getProgress(u.id);
        for (const p of prog) {
          if (p.completedAt) {
            const completedDate = toCentralDate(new Date(p.completedAt));
            await storage.upsertDailyActivity(u.id, completedDate, p.totalQuestions, p.score, 0);
          }
        }
      }

      if (rsalujaId) {
        await storage.upsertDailyActivity(rsalujaId, "2026-03-04", 30, 22, 140);
        await storage.upsertDailyActivity(rsalujaId, "2026-03-05", 6, 5, 40);
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

  app.get("/api/ai-health", requireAuth, async (req: Request, res: Response) => {
    const envInfo = {
      baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL || "not set",
      apiKeyLength: (process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY || "").length,
      fallbackKeyLength: (process.env.ANTHROPIC_API_KEY || "").length,
    };
    try {
      const start = Date.now();
      const message = await callAnthropicWithRetry({
        model: "claude-haiku-4-5",
        max_tokens: 50,
        messages: [{ role: "user", content: "Say 'ok' in one word." }],
      });
      const elapsed = Date.now() - start;
      const text = message.content[0]?.type === "text" ? message.content[0].text : "";
      res.json({ status: "ok", elapsed, response: text, model: message.model, env: envInfo });
    } catch (error: any) {
      console.error("[AI Health ERROR]", JSON.stringify({ message: error?.message, status: error?.status, code: error?.code, name: error?.name, cause: error?.cause?.message }));
      res.status(500).json({ status: "error", message: error?.message, code: error?.code, name: error?.name, env: envInfo });
    }
  });

  const aiTutorRateLimit = new Map<number, number[]>();
  const AI_TUTOR_MAX_CALLS = 30;
  const AI_TUTOR_WINDOW_MS = 60 * 60 * 1000;

  app.post("/api/ai-tutor", requireAuth, async (req: Request, res: Response) => {
    const aiTutorSchema = z.object({
      question: z.string().max(1000),
      userAnswer: z.string().max(500),
      correctAnswer: z.string().max(500),
      explanation: z.string().max(2000),
      depth: z.number().int().min(1).max(3).default(1),
      previousExplanations: z.array(z.string().max(3000)).max(2).optional(),
      allOptions: z.array(z.string().max(500)).max(6).optional(),
    });
    const parsed = aiTutorSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid request data." });
    }

    const userId = (req.user as User).id;
    const now = Date.now();
    const userCalls = (aiTutorRateLimit.get(userId) || []).filter(t => now - t < AI_TUTOR_WINDOW_MS);
    if (userCalls.length >= AI_TUTOR_MAX_CALLS) {
      return res.status(429).json({ error: "You've reached the AI Tutor limit. Please try again later." });
    }
    userCalls.push(now);
    aiTutorRateLimit.set(userId, userCalls);

    try {
      const { question, userAnswer, correctAnswer, explanation, depth, previousExplanations, allOptions } = parsed.data;

      const wrongOptions = (allOptions || []).filter(o => o !== correctAnswer);
      const wrongList = wrongOptions.map((o, i) => `"${o}"`).join(", ");

      const depthPrompts: Record<number, string> = {
        1: `Hospital compliance tutor. Staff answered a question wrong. Explain why the correct answer matters in 2 sentences. No headers, no bullet points, no markdown. Plain conversational text only.

Question: ${question}
They answered: ${userAnswer}
Correct answer: ${correctAnswer}
Why: ${explanation}

Reply in exactly 2 sentences. First sentence: why it matters practically. Second sentence: a quick tip. No formatting.`,

        2: `Hospital compliance tutor follow-up. Two parts, plain text only, no headers, no bullets, no markdown.

Already covered: ${(previousExplanations || []).join(" ")}

Question: ${question}
Correct answer: ${correctAnswer}
Wrong choices: ${wrongList}

Part 1 (2 sentences): One new insight about how surveyors check this or a common citation to avoid.
Part 2 (1 sentence per wrong choice): Briefly explain why each wrong choice is incorrect.

Keep it concise. No formatting, just plain sentences. Separate the two parts with a blank line.`,

        3: `Hospital compliance tutor — final expert tip. Plain text only, no headers, no bullets, no markdown.

Already covered: ${(previousExplanations || []).join(" ")}

Topic: ${question}
Correct answer: ${correctAnswer}

Give ONE actionable takeaway in 2 sentences about what great hospitals do differently for this standard. No formatting, just plain sentences.`,
      };

      const tokenLimit = depth === 2 ? 400 : 200;
      const message = await callAnthropicWithRetry({
        model: "claude-haiku-4-5",
        max_tokens: tokenLimit,
        messages: [
          {
            role: "user",
            content: depthPrompts[depth] || depthPrompts[1],
          },
        ],
      });

      const content = message.content[0];
      if (!content || content.type !== "text" || !content.text) {
        return res.status(502).json({ error: "AI Tutor returned an empty response. Please try again." });
      }
      res.json({ aiExplanation: content.text });
    } catch (error: any) {
      const errType = error?.error?.type || error?.type || "";
      const errMsg = error?.message || "";
      const errStatus = error?.status || 500;
      console.error("[AI Tutor ERROR]", JSON.stringify({ status: errStatus, message: errMsg, type: errType, detail: error?.error?.message, name: error?.name, code: error?.code, cause: error?.cause?.message, stack: (error?.stack || "").split("\n").slice(0, 3).join(" | ") }));
      if (errStatus === 401 || errType === "authentication_error") {
        res.status(502).json({ error: "AI service configuration error. Please contact your administrator." });
      } else if (errStatus === 429) {
        res.status(429).json({ error: "AI service is busy. Please try again in a moment." });
      } else if (errStatus === 529 || errType === "overloaded_error") {
        res.status(503).json({ error: "AI service is temporarily overloaded. Please try again in a moment." });
      } else {
        res.status(502).json({ error: "AI Tutor is temporarily unavailable. Please try again." });
      }
    }
  });

  app.post("/api/admin/ai-insights", requireLeadershipRole("director"), async (req: Request, res: Response) => {
    const userId = (req.user as User).id;
    const now = Date.now();
    const userCalls = (aiTutorRateLimit.get(userId) || []).filter(t => now - t < AI_TUTOR_WINDOW_MS);
    if (userCalls.length >= AI_TUTOR_MAX_CALLS) {
      return res.status(429).json({ error: "Rate limit reached. Please try again later." });
    }
    userCalls.push(now);
    aiTutorRateLimit.set(userId, userCalls);

    try {
      const adminUser = req.user as User;
      const allUsersRaw = await storage.getAllUsers();
      const allUsers = allUsersRaw.filter(getFacilityFilter(adminUser));
      const allProgressData = await Promise.all(
        allUsers.map(async (u) => ({ userId: u.id, username: u.username, progress: await storage.getProgress(u.id) }))
      );

      const { levels } = await import("@shared/questions");

      const levelStats: { levelId: string; levelName: string; attempts: number; avgScore: number; totalCorrect: number; totalQuestions: number }[] = [];
      for (const level of levels) {
        let totalScore = 0;
        let totalQ = 0;
        let attempts = 0;
        for (const userData of allProgressData) {
          for (const p of userData.progress) {
            if (p.levelId === level.id) {
              totalScore += p.bestScore;
              totalQ += p.totalQuestions;
              attempts++;
            }
          }
        }
        levelStats.push({
          levelId: level.id,
          levelName: level.name,
          attempts,
          avgScore: attempts > 0 ? Math.round((totalScore / totalQ) * 100) : 0,
          totalCorrect: totalScore,
          totalQuestions: totalQ,
        });
      }

      const activeUsers = allUsers.length;
      const usersWithProgress = allProgressData.filter(u => u.progress.length > 0).length;

      const levelSummary = levelStats
        .filter(l => l.attempts > 0)
        .map(l => `- ${l.levelName}: ${l.avgScore}% avg accuracy (${l.attempts} attempt${l.attempts > 1 ? "s" : ""})`)
        .join("\n");

      const unplayedLevels = levelStats
        .filter(l => l.attempts === 0)
        .map(l => l.levelName)
        .join(", ");

      const message = await callAnthropicWithRetry({
        model: "claude-haiku-4-5",
        max_tokens: 350,
        messages: [
          {
            role: "user",
            content: `Unit readiness summary for hospital leadership. ${activeUsers} staff registered, ${usersWithProgress} have completed quizzes.

Results: ${levelSummary || "No data yet."}
${unplayedLevels ? `Not yet attempted: ${unplayedLevels}` : ""}

Write a 5-6 sentence plain-text summary. Cover: overall readiness, the #1 priority topic to focus on, one concrete next step, and a note on participation. No headers, no bullets, no markdown — just plain sentences. Be specific about which topics need work.`,
          },
        ],
      });

      const content = message.content[0];
      if (!content || content.type !== "text" || !content.text) {
        return res.status(502).json({ error: "Unable to generate insights." });
      }
      res.json({
        insights: content.text,
        levelStats: levelStats.filter(l => l.attempts > 0),
        totalUsers: activeUsers,
        usersWithProgress,
      });
    } catch (error: any) {
      console.error("AI Insights error:", error?.status, error?.message, error?.error?.type);
      res.status(502).json({ error: "AI Leadership Coach is temporarily unavailable." });
    }
  });

  app.post("/api/ai-debrief", requireAuth, async (req: Request, res: Response) => {
    const debriefSchema = z.object({
      levelId: z.string().max(100),
      levelTitle: z.string().max(200),
      totalQuestions: z.number(),
      correctAnswers: z.number(),
      missedQuestions: z.array(z.object({
        question: z.string().max(1000),
        correctAnswer: z.string().max(500),
      })).max(20),
    });
    const parsed = debriefSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid request data." });
    }

    const userId = (req.user as User).id;
    const now = Date.now();
    const userCalls = (aiTutorRateLimit.get(userId) || []).filter(t => now - t < AI_TUTOR_WINDOW_MS);
    if (userCalls.length >= AI_TUTOR_MAX_CALLS) {
      return res.status(429).json({ error: "Rate limit reached. Please try again later." });
    }
    userCalls.push(now);
    aiTutorRateLimit.set(userId, userCalls);

    try {
      const { levelTitle, totalQuestions, correctAnswers, missedQuestions } = parsed.data;
      const percentage = Math.round((correctAnswers / totalQuestions) * 100);

      const missedSummary = missedQuestions.length > 0
        ? missedQuestions.map((q, i) => `${i + 1}. "${q.question}" — correct answer: "${q.correctAnswer}"`).join("\n")
        : "No missed questions — perfect score!";

      const message = await callAnthropicWithRetry({
        model: "claude-haiku-4-5",
        max_tokens: 300,
        messages: [
          {
            role: "user",
            content: `Quiz debrief for a unit manager. "${levelTitle}" — score: ${correctAnswers}/${totalQuestions} (${percentage}%).

Missed: ${missedSummary}

Write a 4-5 sentence plain-text debrief for the manager. Include: what went well, the #1 weak area to focus on, and one huddle question to ask staff. No headers, no bullets, no markdown — just plain sentences.`,
          },
        ],
      });

      const content = message.content[0];
      if (!content || content.type !== "text" || !content.text) {
        return res.status(502).json({ error: "Unable to generate debrief." });
      }
      res.json({ debrief: content.text });
    } catch (error: any) {
      console.error("AI Debrief error:", error?.status, error?.message, error?.error?.type);
      res.status(502).json({ error: "AI Debrief is temporarily unavailable." });
    }
  });

  app.post("/api/ai-handbook", requireAuth, async (req: Request, res: Response) => {
    const handbookSchema = z.object({
      query: z.string().min(3).max(500),
    });
    const parsed = handbookSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Please enter a question (at least 3 characters)." });
    }

    const userId = (req.user as User).id;
    const now = Date.now();
    const userCalls = (aiTutorRateLimit.get(userId) || []).filter(t => now - t < AI_TUTOR_WINDOW_MS);
    if (userCalls.length >= AI_TUTOR_MAX_CALLS) {
      return res.status(429).json({ error: "Rate limit reached. Please try again later." });
    }
    userCalls.push(now);
    aiTutorRateLimit.set(userId, userCalls);

    try {
      const { query } = parsed.data;

      const { handbook } = await import("@shared/handbook");
      const queryLower = query.toLowerCase();
      const relevantSections: string[] = [];

      for (const chapter of handbook) {
        for (const section of chapter.sections) {
          if (
            section.heading.toLowerCase().includes(queryLower) ||
            section.content.toLowerCase().includes(queryLower) ||
            chapter.title.toLowerCase().includes(queryLower) ||
            section.criticalValues?.some(cv => cv.label.toLowerCase().includes(queryLower) || cv.value.toLowerCase().includes(queryLower))
          ) {
            let sectionText = `[${chapter.title} > ${section.heading}]\n${section.content}`;
            if (section.criticalValues) {
              sectionText += "\nCritical Values: " + section.criticalValues.map(cv => `${cv.label}: ${cv.value}`).join("; ");
            }
            relevantSections.push(sectionText);
          }
        }
        for (const qr of chapter.quickReference) {
          if (qr.fact.toLowerCase().includes(queryLower) || qr.detail.toLowerCase().includes(queryLower)) {
            relevantSections.push(`[${chapter.title} > Quick Reference]\n${qr.fact}: ${qr.detail}`);
          }
        }
      }

      const contextText = relevantSections.length > 0
        ? relevantSections.slice(0, 8).join("\n\n---\n\n")
        : "No directly matching sections found. Answer based on general Joint Commission compliance knowledge relevant to the question.";

      const message = await callAnthropicWithRetry({
        model: "claude-haiku-4-5",
        max_tokens: 200,
        messages: [
          {
            role: "user",
            content: `Answer this hospital compliance question in 2-3 sentences. No headers, no bullets, no markdown. Plain text only.

Question: "${query}"

Reference material: ${contextText}

After your answer, add one line: "See: [source]" with the relevant handbook section. If no match, say it's general guidance. Keep it short.`,
          },
        ],
      });

      const content = message.content[0];
      if (!content || content.type !== "text" || !content.text) {
        return res.status(502).json({ error: "Unable to generate answer." });
      }
      res.json({ answer: content.text });
    } catch (error: any) {
      console.error("AI Handbook error:", error?.status, error?.message, error?.error?.type);
      res.status(502).json({ error: "AI Handbook search is temporarily unavailable." });
    }
  });

  app.post("/api/admin/lesson-plan/generate", requireLeadershipRole("director"), async (req: Request, res: Response) => {
    const schema = z.object({
      assignedDate: z.string().min(1),
      dueDate: z.string().min(1),
      cadence: z.enum(["daily", "weekly"]),
      category: z.string().min(1),
      facilityType: z.enum(["Hospital", "ASC"]),
      learner: z.string().min(1),
      steps: z.array(z.object({ title: z.string(), description: z.string() })).min(1),
    });
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid request." });
    }
    const { assignedDate, dueDate, cadence, category, facilityType, learner, steps } = parsed.data;

    const start = new Date(assignedDate);
    const end = new Date(dueDate);
    const diffMs = end.getTime() - start.getTime();
    const diffDays = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
    const diffWeeks = Math.max(1, Math.floor(diffDays / 7));
    const totalPeriods = cadence === "daily" ? diffDays : diffWeeks;
    const periodLabel = cadence === "daily" ? "day" : "week";

    const stepsText = steps.map((s, i) => `Step ${i + 1}: ${s.title} — ${s.description}`).join("\n");

    try {
      const message = await callAnthropicWithRetry({
        model: "claude-haiku-4-5",
        max_tokens: 1200,
        messages: [
          {
            role: "user",
            content: `You are a healthcare compliance educator creating a structured learning schedule.

A learner (${learner}) needs to complete a guided education plan for: ${category} (${facilityType}).
Start date: ${assignedDate}. Due date: ${dueDate}. Total ${periodLabel}s available: ${totalPeriods}.
Cadence: ${cadence}.

Assigned remediation steps:
${stepsText}

Generate a ${cadence} lesson plan that spreads the work across the available ${totalPeriods} ${periodLabel}(s). Each entry should be concrete and actionable — specific activities like reviewing flashcards, completing a quiz section, or watching a walkthrough. The final period should include a self-check or review.

Respond with ONLY a JSON array (no markdown, no explanation). Each element: { "period": "${cadence === "daily" ? "Day N" : "Week N"}", "task": "short task name", "description": "1-2 sentence description of exactly what to do" }

Keep the total entries to at most ${Math.min(totalPeriods, cadence === "daily" ? 14 : 8)} periods. Do not exceed ${totalPeriods} periods.`,
          },
        ],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") {
        return res.status(502).json({ error: "Unable to generate lesson plan." });
      }

      let planArray: any[];
      try {
        const raw = content.text.trim();
        const jsonStart = raw.indexOf("[");
        const jsonEnd = raw.lastIndexOf("]");
        if (jsonStart === -1 || jsonEnd === -1) throw new Error("No JSON array found");
        planArray = JSON.parse(raw.slice(jsonStart, jsonEnd + 1));
      } catch {
        return res.status(502).json({ error: "Could not parse lesson plan from AI response." });
      }

      res.json({ lessonPlan: planArray });
    } catch (error: any) {
      console.error("Lesson plan generation error:", error?.message);
      res.status(502).json({ error: "Lesson plan generation is temporarily unavailable." });
    }
  });

  const ADMIN_USERNAMES = ["akshaysaluja", "rsaluja"];
  const QUESTIONS_PER_SECTION = 5;

  function pickRandomPerSection<T extends { sectionId: string }>(pool: T[], perSection: number): T[] {
    const grouped = new Map<string, T[]>();
    for (const q of pool) {
      const arr = grouped.get(q.sectionId) || [];
      arr.push(q);
      grouped.set(q.sectionId, arr);
    }
    const selected: T[] = [];
    for (const [, sectionQs] of grouped) {
      const shuffled = [...sectionQs].sort(() => Math.random() - 0.5);
      selected.push(...shuffled.slice(0, perSection));
    }
    return selected.sort(() => Math.random() - 0.5);
  }

  function shuffleArray<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function shuffleQuestionOptions<T extends { options: string[]; correctIndex: number }>(q: T): { options: string[]; shuffleMap: number[] } {
    const indices = q.options.map((_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    const shuffledOptions = shuffledIndices.map(i => q.options[i]);
    return { options: shuffledOptions, shuffleMap: shuffledIndices };
  }

  app.get("/api/diagnostic/questions", requireAuth, async (req, res) => {
    const DIAG_PER_SECTION = 2;
    const DIAG_EXTRAS = 3;
    let assignedChapters = await storage.getUserAssignedChapters(req.user!.id);
    // Fallback: if DB chapter mapping is empty, derive chapters directly from ROLE_CONFIGS
    if (assignedChapters.length === 0 && req.user!.roleId) {
      const dbRole = await storage.getRoleById(req.user!.roleId);
      if (dbRole) {
        const roleConfig = ROLE_CONFIGS.find(r => r.id === dbRole.slug);
        if (roleConfig) assignedChapters = roleConfig.chapters;
      }
    }
    const pool = assignedChapters.length > 0
      ? diagnosticQuestions.filter(q => assignedChapters.includes(q.sectionId))
      : diagnosticQuestions;
    let selected = pickRandomPerSection(pool, DIAG_PER_SECTION);
    const usedIds = new Set(selected.map(q => q.id));
    const remaining = pool.filter(q => !usedIds.has(q.id));
    const shuffledRemaining = shuffleArray([...remaining]);
    selected = selected.concat(shuffledRemaining.slice(0, DIAG_EXTRAS));
    selected = shuffleArray(selected);
    res.json(selected.map(q => {
      const { options, shuffleMap } = shuffleQuestionOptions(q);
      return {
        id: q.id,
        sectionId: q.sectionId,
        question: q.question,
        options,
        shuffleMap,
      };
    }));
  });

  app.get("/api/diagnostic/results", requireAuth, async (req, res) => {
    const results = await storage.getDiagnosticResults(req.user!.id);
    res.json(results);
  });

  app.get("/api/diagnostic/session", requireAuth, async (req, res) => {
    const session = await storage.getDiagnosticSession(req.user!.id);
    if (!session) return res.json(null);
    const questionIds = session.questionOrder;
    const savedAnswers = JSON.parse(session.answers);
    const savedShuffleMaps = session.shuffleMaps ? JSON.parse(session.shuffleMaps as string) : null;
    const questionsData = questionIds.map((id, idx) => {
      const q = diagnosticQuestions.find(dq => dq.id === id);
      if (!q) return null;
      if (savedShuffleMaps && savedShuffleMaps[id]) {
        const sm = savedShuffleMaps[id] as number[];
        return { id: q.id, sectionId: q.sectionId, question: q.question, options: sm.map(i => q.options[i]), shuffleMap: sm };
      }
      const { options, shuffleMap } = shuffleQuestionOptions(q);
      return { id: q.id, sectionId: q.sectionId, question: q.question, options, shuffleMap };
    }).filter(Boolean);
    res.json({
      questions: questionsData,
      answers: savedAnswers,
      currentQuestion: session.currentQuestion,
    });
  });

  app.post("/api/diagnostic/session", requireAuth, async (req, res) => {
    const { questionOrder, answers, currentQuestion, shuffleMaps } = req.body;
    await storage.upsertDiagnosticSession(req.user!.id, {
      questionOrder,
      answers: JSON.stringify(answers),
      currentQuestion,
      shuffleMaps: JSON.stringify(shuffleMaps || {}),
    });
    res.json({ success: true });
  });

  app.delete("/api/diagnostic/session", requireAuth, async (req, res) => {
    await storage.deleteDiagnosticSession(req.user!.id);
    res.json({ success: true });
  });

  app.post("/api/diagnostic/submit", requireAuth, async (req, res) => {
    const { answers, shuffleMaps: clientShuffleMaps } = req.body;
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Answers required" });
    }

    const session = await storage.getDiagnosticSession(req.user!.id);
    const serverShuffleMaps = session?.shuffleMaps ? JSON.parse(session.shuffleMaps as string) : null;
    const trustedMaps = serverShuffleMaps || clientShuffleMaps || {};

    let score = 0;
    const detailedResults: {
      questionId: string; sectionId: string; question: string; options: string[];
      selectedIndex: number; correctIndex: number; correct: boolean;
    }[] = [];
    for (const ans of answers) {
      const q = diagnosticQuestions.find(dq => dq.id === ans.questionId);
      if (q) {
        const sm = trustedMaps[q.id] as number[] | undefined;
        let displayOptions = q.options;
        let displayCorrectIndex = q.correctIndex;
        let displaySelectedIndex = ans.selectedIndex;
        if (sm && sm.length === q.options.length) {
          displayOptions = sm.map((i: number) => q.options[i]);
          displayCorrectIndex = sm.indexOf(q.correctIndex);
        }
        const correct = sm
          ? sm[ans.selectedIndex] === q.correctIndex
          : ans.selectedIndex === q.correctIndex;
        if (correct) score++;
        detailedResults.push({
          questionId: q.id, sectionId: q.sectionId, question: q.question,
          options: displayOptions, selectedIndex: displaySelectedIndex,
          correctIndex: displayCorrectIndex, correct,
        });
      }
    }
    const totalAnswered = detailedResults.length;
    const graded = detailedResults.map(d => ({ questionId: d.questionId, selectedIndex: d.selectedIndex, correct: d.correct }));
    const result = await storage.createDiagnosticResult(
      req.user!.id, score, totalAnswered, JSON.stringify(graded)
    );
    await storage.deleteDiagnosticSession(req.user!.id);

    const sectionScores: Record<string, { correct: number; total: number }> = {};
    for (const d of detailedResults) {
      if (!sectionScores[d.sectionId]) sectionScores[d.sectionId] = { correct: 0, total: 0 };
      sectionScores[d.sectionId].total++;
      if (d.correct) sectionScores[d.sectionId].correct++;
    }
    res.json({ score, totalQuestions: totalAnswered, resultId: result.id, detailedResults, sectionScores });
  });

  function buildAscTestPayload(pool: typeof ascPretestQuestions) {
    const shuffleMaps: Record<string, number[]> = {};
    const items = pool.map(q => {
      const { options, shuffleMap } = shuffleQuestionOptions(q);
      shuffleMaps[q.id] = shuffleMap;
      return {
        id: q.id,
        chapterId: q.chapterId,
        chapterName: q.chapterName,
        question: q.question,
        options,
      };
    });
    return { items, shuffleMaps };
  }

  function gradeAscTest(
    pool: typeof ascPretestQuestions,
    answers: { questionId: string; selectedIndex: number }[],
    serverShuffleMaps: Record<string, number[]>,
  ) {
    const trustedMaps = serverShuffleMaps;
    let score = 0;
    const detailedResults: {
      questionId: string;
      chapterId: string;
      chapterName: string;
      question: string;
      options: string[];
      selectedIndex: number;
      correctIndex: number;
      correct: boolean;
      explanation: string;
      cmsTag?: string;
      tutor?: any;
    }[] = [];
    const seenIds = new Set<string>();
    for (const ans of answers) {
      if (!ans || typeof ans.questionId !== "string" || typeof ans.selectedIndex !== "number") continue;
      if (seenIds.has(ans.questionId)) continue;
      const q = pool.find(pq => pq.id === ans.questionId);
      if (!q) continue;
      seenIds.add(ans.questionId);
      const sm = trustedMaps[q.id];
      const validShuffle =
        Array.isArray(sm) &&
        sm.length === q.options.length &&
        sm.every((i: unknown) => typeof i === "number" && Number.isInteger(i) && i >= 0 && i < q.options.length) &&
        new Set(sm).size === q.options.length;
      const selected = ans.selectedIndex;
      if (!Number.isInteger(selected) || selected < 0 || selected >= q.options.length) continue;
      let displayOptions = q.options;
      let displayCorrectIndex = q.correctIndex;
      const displaySelectedIndex = selected;
      if (validShuffle) {
        displayOptions = (sm as number[]).map((i: number) => q.options[i]);
        displayCorrectIndex = (sm as number[]).indexOf(q.correctIndex);
      }
      const correct = validShuffle
        ? (sm as number[])[selected] === q.correctIndex
        : selected === q.correctIndex;
      if (correct) score++;
      detailedResults.push({
        questionId: q.id,
        chapterId: q.chapterId,
        chapterName: q.chapterName,
        question: q.question,
        options: displayOptions,
        selectedIndex: displaySelectedIndex,
        correctIndex: displayCorrectIndex,
        correct,
        explanation: q.explanation || "",
        cmsTag: q.cmsTag,
        tutor: q.tutor,
      });
    }
    const chapterScores: Record<string, { name: string; correct: number; total: number }> = {};
    for (const d of detailedResults) {
      if (!chapterScores[d.chapterId]) {
        chapterScores[d.chapterId] = { name: d.chapterName, correct: 0, total: 0 };
      }
      chapterScores[d.chapterId].total++;
      if (d.correct) chapterScores[d.chapterId].correct++;
    }
    return { score, totalAnswered: detailedResults.length, detailedResults, chapterScores };
  }

  function requireAsc(req: any, res: any, next: any) {
    if (req.user?.organizationType !== "asc") {
      return res.status(403).json({ message: "ASC module access required" });
    }
    next();
  }

  function validateAscAnswerSet(
    answers: any,
    issuedIds: string[],
    questionsBank: { id: string; options: string[] }[],
  ): { ok: true; cleaned: { questionId: string; selectedIndex: number }[] } | { ok: false; message: string } {
    if (!Array.isArray(answers)) return { ok: false, message: "Answers must be an array" };
    if (answers.length !== issuedIds.length) {
      return { ok: false, message: `Expected ${issuedIds.length} answers, received ${answers.length}` };
    }
    const issuedSet = new Set(issuedIds);
    const bankById = new Map(questionsBank.map(q => [q.id, q]));
    const seen = new Set<string>();
    const cleaned: { questionId: string; selectedIndex: number }[] = [];
    for (const a of answers) {
      if (!a || typeof a.questionId !== "string" || typeof a.selectedIndex !== "number") {
        return { ok: false, message: "Each answer must have questionId and selectedIndex" };
      }
      if (!Number.isInteger(a.selectedIndex)) {
        return { ok: false, message: `selectedIndex must be an integer for ${a.questionId}` };
      }
      if (!issuedSet.has(a.questionId)) {
        return { ok: false, message: `Unexpected questionId: ${a.questionId}` };
      }
      if (seen.has(a.questionId)) {
        return { ok: false, message: `Duplicate questionId: ${a.questionId}` };
      }
      const q = bankById.get(a.questionId);
      if (!q) {
        return { ok: false, message: `Unknown questionId: ${a.questionId}` };
      }
      if (a.selectedIndex < 0 || a.selectedIndex >= q.options.length) {
        return { ok: false, message: `selectedIndex out of range for ${a.questionId}` };
      }
      seen.add(a.questionId);
      cleaned.push({ questionId: a.questionId, selectedIndex: a.selectedIndex });
    }
    if (seen.size !== issuedIds.length) {
      return { ok: false, message: "Missing answers for some issued questions" };
    }
    return { ok: true, cleaned };
  }

  app.get("/api/asc-pretest/questions", requireAuth, requireAsc, async (req, res) => {
    const { items, shuffleMaps } = buildAscTestPayload(ascPretestQuestions);
    await storage.upsertAscTestSession(req.user!.id, "pretest", JSON.stringify(shuffleMaps));
    res.json(items);
  });

  app.get("/api/asc-pretest/results", requireAuth, requireAsc, async (req, res) => {
    const results = await storage.getAscPretestResults(req.user!.id);
    res.json(results);
  });

  app.post("/api/asc-pretest/submit", requireAuth, requireAsc, async (req, res) => {
    const { answers } = req.body;
    const peek = await storage.getAscTestSession(req.user!.id, "pretest");
    if (!peek) {
      return res.status(400).json({ message: "No active pretest session. Please start the test from the beginning." });
    }
    const serverShuffleMaps = JSON.parse(peek.shuffleMaps) as Record<string, number[]>;
    const issuedIds = Object.keys(serverShuffleMaps);
    const validation = validateAscAnswerSet(answers, issuedIds, ascPretestQuestions);
    if (!validation.ok) {
      return res.status(400).json({ message: validation.message });
    }
    const claimed = await storage.claimAscTestSession(req.user!.id, "pretest");
    if (!claimed) {
      return res.status(409).json({ message: "Pretest already submitted." });
    }
    const { score, detailedResults, chapterScores } = gradeAscTest(
      ascPretestQuestions, validation.cleaned, serverShuffleMaps,
    );
    const totalQuestions = issuedIds.length;
    const graded = detailedResults.map(d => ({
      questionId: d.questionId, selectedIndex: d.selectedIndex, correct: d.correct,
    }));
    const result = await storage.createAscPretestResult(
      req.user!.id, score, totalQuestions, JSON.stringify(graded), JSON.stringify(chapterScores),
    );
    res.json({ score, totalQuestions, resultId: result.id, detailedResults, chapterScores });
  });

  app.get("/api/asc-posttest/questions", requireAuth, requireAsc, async (req, res) => {
    const { items, shuffleMaps } = buildAscTestPayload(ascPosttestQuestions);
    await storage.upsertAscTestSession(req.user!.id, "posttest", JSON.stringify(shuffleMaps));
    res.json(items);
  });

  app.get("/api/asc-posttest/results", requireAuth, requireAsc, async (req, res) => {
    const results = await storage.getAscPosttestResults(req.user!.id);
    res.json(results);
  });

  app.post("/api/asc-posttest/submit", requireAuth, requireAsc, async (req, res) => {
    const { answers } = req.body;
    const peek = await storage.getAscTestSession(req.user!.id, "posttest");
    if (!peek) {
      return res.status(400).json({ message: "No active posttest session. Please start the test from the beginning." });
    }
    const serverShuffleMaps = JSON.parse(peek.shuffleMaps) as Record<string, number[]>;
    const issuedIds = Object.keys(serverShuffleMaps);
    const validation = validateAscAnswerSet(answers, issuedIds, ascPosttestQuestions);
    if (!validation.ok) {
      return res.status(400).json({ message: validation.message });
    }
    const claimed = await storage.claimAscTestSession(req.user!.id, "posttest");
    if (!claimed) {
      return res.status(409).json({ message: "Posttest already submitted." });
    }
    const { score, detailedResults, chapterScores } = gradeAscTest(
      ascPosttestQuestions, validation.cleaned, serverShuffleMaps,
    );
    const totalQuestions = issuedIds.length;
    const graded = detailedResults.map(d => ({
      questionId: d.questionId, selectedIndex: d.selectedIndex, correct: d.correct,
    }));
    const result = await storage.createAscPosttestResult(
      req.user!.id, score, totalQuestions, JSON.stringify(graded), JSON.stringify(chapterScores),
    );
    res.json({ score, totalQuestions, resultId: result.id, detailedResults, chapterScores });
  });

  app.get("/api/mastery/questions", requireAuth, async (req, res) => {
    const username = req.user!.username;
    const isAdmin = ADMIN_USERNAMES.includes(username);
    const assignedChaptersForCheck = await storage.getUserAssignedChapters(req.user!.id);
    if (!isAdmin) {
      const progress = await storage.getProgress(req.user!.id);
      const moduleLevels = await getModuleLevelsForUser(req.user!.id);
      const requiredLevels = assignedChaptersForCheck.length > 0 ? moduleLevels.filter(l => assignedChaptersForCheck.includes(l.id)) : moduleLevels;
      const MIN_QUESTIONS_PER_SECTION = 10;
      for (const level of requiredLevels) {
        const p = progress.find(pr => pr.levelId === level.id);
        if (!p || p.totalQuestions < MIN_QUESTIONS_PER_SECTION) {
          return res.status(403).json({ message: "You must complete more training before taking the Mastery Exam." });
        }
      }
    }
    const MASTERY_PER_SECTION = 2;
    const MASTERY_EXTRAS = 3;
    const assignedChapters = await storage.getUserAssignedChapters(req.user!.id);
    const pool = assignedChapters.length > 0
      ? masteryQuestions.filter(q => assignedChapters.includes(q.sectionId))
      : masteryQuestions;
    let selected = pickRandomPerSection(pool, MASTERY_PER_SECTION);
    const usedIds = new Set(selected.map(q => q.id));
    const remaining = pool.filter(q => !usedIds.has(q.id));
    const shuffledRemaining = shuffleArray([...remaining]);
    selected = selected.concat(shuffledRemaining.slice(0, MASTERY_EXTRAS));
    selected = shuffleArray(selected);
    res.json(selected.map(q => {
      const { options, shuffleMap } = shuffleQuestionOptions(q);
      return {
        id: q.id,
        sectionId: q.sectionId,
        question: q.question,
        options,
        shuffleMap,
      };
    }));
  });

  app.post("/api/mastery/check", requireAuth, (req, res) => {
    const { questionId, selectedIndex } = req.body;
    if (!questionId || selectedIndex === undefined) {
      return res.status(400).json({ message: "questionId and selectedIndex required" });
    }
    const q = masteryQuestions.find(mq => mq.id === questionId);
    if (!q) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json({
      correct: selectedIndex === q.correctIndex,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    });
  });

  app.get("/api/mastery/session", requireAuth, async (req, res) => {
    const session = await storage.getMasterySession(req.user!.id);
    if (!session) return res.json(null);
    const questionIds = session.questionOrder;
    const savedAnswers = JSON.parse(session.answers);
    const savedShuffleMaps = session.shuffleMaps ? JSON.parse(session.shuffleMaps as string) : null;
    const questionsData = questionIds.map((id) => {
      const q = masteryQuestions.find(mq => mq.id === id);
      if (!q) return null;
      if (savedShuffleMaps && savedShuffleMaps[id]) {
        const sm = savedShuffleMaps[id] as number[];
        return { id: q.id, sectionId: q.sectionId, question: q.question, options: sm.map(i => q.options[i]), shuffleMap: sm };
      }
      const { options, shuffleMap } = shuffleQuestionOptions(q);
      return { id: q.id, sectionId: q.sectionId, question: q.question, options, shuffleMap };
    }).filter(Boolean);
    res.json({
      questions: questionsData,
      answers: savedAnswers,
      currentQuestion: session.currentQuestion,
    });
  });

  app.post("/api/mastery/session", requireAuth, async (req, res) => {
    const { questionOrder, answers, currentQuestion, shuffleMaps } = req.body;
    await storage.upsertMasterySession(req.user!.id, {
      questionOrder,
      answers: JSON.stringify(answers),
      currentQuestion,
      shuffleMaps: JSON.stringify(shuffleMaps || {}),
    });
    res.json({ success: true });
  });

  app.delete("/api/mastery/session", requireAuth, async (req, res) => {
    await storage.deleteMasterySession(req.user!.id);
    res.json({ success: true });
  });

  app.get("/api/mastery/results", requireAuth, async (req, res) => {
    const results = await storage.getMasteryResults(req.user!.id);
    res.json(results);
  });

  app.get("/api/mastery/eligibility", requireAuth, async (req, res) => {
    const username = req.user!.username;
    const moduleLevels = await getModuleLevelsForUser(req.user!.id);
    if (ADMIN_USERNAMES.includes(username)) {
      return res.json({ eligible: true, completedSections: moduleLevels.map(l => l.id), missingSections: [], isAdmin: true });
    }
    const progress = await storage.getProgress(req.user!.id);
    const assigned = await storage.getUserAssignedChapters(req.user!.id);
    const requiredLevels = assigned.length > 0 ? moduleLevels.filter(l => assigned.includes(l.id)) : moduleLevels;
    const MIN_QUESTIONS_PER_SECTION = 10;
    const completedSections: string[] = [];
    const missingSections: string[] = [];
    for (const level of requiredLevels) {
      const p = progress.find(pr => pr.levelId === level.id);
      if (p && p.totalQuestions >= MIN_QUESTIONS_PER_SECTION) {
        completedSections.push(level.id);
      } else {
        missingSections.push(level.id);
      }
    }
    res.json({ eligible: missingSections.length === 0, completedSections, missingSections, isAdmin: false });
  });

  app.post("/api/mastery/submit", requireAuth, async (req, res) => {
    const { answers, shuffleMaps: clientShuffleMaps } = req.body;
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Answers required" });
    }
    const username = req.user!.username;
    const isAdmin = ADMIN_USERNAMES.includes(username);
    if (!isAdmin) {
      const progress = await storage.getProgress(req.user!.id);
      const assignedSubmit = await storage.getUserAssignedChapters(req.user!.id);
      const moduleLevelsSubmit = await getModuleLevelsForUser(req.user!.id);
      const requiredLevels = assignedSubmit.length > 0 ? moduleLevelsSubmit.filter(l => assignedSubmit.includes(l.id)) : moduleLevelsSubmit;
      const MIN_QUESTIONS_PER_SECTION = 10;
      for (const level of requiredLevels) {
        const p = progress.find(pr => pr.levelId === level.id);
        if (!p || p.totalQuestions < MIN_QUESTIONS_PER_SECTION) {
          return res.status(403).json({ message: "You must complete more training before taking the Mastery Exam." });
        }
      }
    }

    const session = await storage.getMasterySession(req.user!.id);
    const serverShuffleMaps = session?.shuffleMaps ? JSON.parse(session.shuffleMaps as string) : null;
    const trustedMaps = serverShuffleMaps || clientShuffleMaps || {};

    let score = 0;
    const detailedResults: {
      questionId: string; sectionId: string; question: string; options: string[];
      selectedIndex: number; correctIndex: number; correct: boolean; explanation: string;
    }[] = [];
    for (const ans of answers) {
      const q = masteryQuestions.find(mq => mq.id === ans.questionId);
      if (q) {
        const sm = trustedMaps[q.id] as number[] | undefined;
        let displayOptions = q.options;
        let displayCorrectIndex = q.correctIndex;
        let displaySelectedIndex = ans.selectedIndex;
        if (sm && sm.length === q.options.length) {
          displayOptions = sm.map((i: number) => q.options[i]);
          displayCorrectIndex = sm.indexOf(q.correctIndex);
        }
        const correct = sm
          ? sm[ans.selectedIndex] === q.correctIndex
          : ans.selectedIndex === q.correctIndex;
        if (correct) score++;
        detailedResults.push({
          questionId: q.id, sectionId: q.sectionId, question: q.question,
          options: displayOptions, selectedIndex: displaySelectedIndex,
          correctIndex: displayCorrectIndex, correct, explanation: q.explanation,
        });
      }
    }
    const totalAnswered = detailedResults.length;
    const graded = detailedResults.map(d => ({ questionId: d.questionId, selectedIndex: d.selectedIndex, correct: d.correct }));
    const result = await storage.createMasteryResult(
      req.user!.id, score, totalAnswered, JSON.stringify(graded)
    );
    await storage.deleteMasterySession(req.user!.id);

    const sectionScores: Record<string, { correct: number; total: number }> = {};
    for (const d of detailedResults) {
      if (!sectionScores[d.sectionId]) sectionScores[d.sectionId] = { correct: 0, total: 0 };
      sectionScores[d.sectionId].total++;
      if (d.correct) sectionScores[d.sectionId].correct++;
    }
    res.json({ score, totalQuestions: totalAnswered, resultId: result.id, detailedResults, sectionScores });
  });

  // ── Flashcard Review (Spaced Repetition) Routes ──────────────────────────────

  const SR_INTERVALS: Record<string, number> = {
    again: 2,
    hard: 15,
    good: 1440,
    easy: 4320,
  };

  app.get("/api/flashcards/due/count", requireAuth, async (req, res) => {
    try {
      const count = await storage.getDueFlashcardCount(req.user!.id);
      const due = await storage.getDueFlashcards(req.user!.id);
      const byLevel: Record<string, number> = {};
      for (const r of due) {
        byLevel[r.levelId] = (byLevel[r.levelId] || 0) + 1;
      }
      res.json({ count, byLevel });
    } catch (err) {
      console.error("Error fetching due flashcard count:", err);
      res.status(500).json({ error: "Failed to fetch due count" });
    }
  });

  app.get("/api/flashcards/due", requireAuth, async (req, res) => {
    try {
      const due = await storage.getDueFlashcards(req.user!.id);
      res.json(due);
    } catch (err) {
      console.error("Error fetching due flashcards:", err);
      res.status(500).json({ error: "Failed to fetch due flashcards" });
    }
  });

  app.get("/api/flashcards/:levelId", requireAuth, async (req, res) => {
    try {
      const { levelId } = req.params;
      const reviews = await storage.getFlashcardReviews(req.user!.id, levelId);
      res.json(reviews);
    } catch (err) {
      console.error("Error fetching flashcard reviews:", err);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  app.post("/api/flashcards/:levelId/review", requireAuth, async (req, res) => {
    try {
      const { levelId } = req.params;
      const schema = z.object({
        cardIndex: z.number().int().min(0),
        rating: z.enum(["again", "hard", "good", "easy"]),
      });
      const { cardIndex, rating } = schema.parse(req.body);
      const intervalMinutes = SR_INTERVALS[rating];
      const nextReviewAt = new Date(Date.now() + intervalMinutes * 60 * 1000);
      const review = await storage.upsertFlashcardReview(
        req.user!.id, levelId, cardIndex, nextReviewAt, intervalMinutes, rating
      );
      res.json(review);
    } catch (err) {
      console.error("Error saving flashcard review:", err);
      res.status(500).json({ error: "Failed to save review" });
    }
  });

  return httpServer;
}
