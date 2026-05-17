/**
 * MEDIUM-7: Seeds all static question/level/handbook content into the DB.
 * Called once at startup (ensureTablesExist) when content_levels is empty.
 * After seeding, all routes query the DB instead of importing TypeScript modules.
 */

import { sql } from "drizzle-orm";
import { db } from "./storage";
import {
  contentLevels, contentQuestions,
  contentDeepDiveLevels, contentDeepDiveQuestions,
  contentHandbookChapters, contentAssessmentQuestions,
} from "@shared/schema";
import type { ModuleId } from "@shared/schema";

export async function isContentSeeded(): Promise<boolean> {
  const result = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(contentLevels);
  return (result[0]?.count ?? 0) > 0;
}

export async function seedAllContent(): Promise<void> {
  const already = await isContentSeeded();
  if (already) return;

  // ── 1. Quiz levels + questions ─────────────────────────────────────────────

  const { hospitalLevels } = await import("@shared/questions");
  const { ascLevels } = await import("@shared/asc-questions");
  const { dnvLevels } = await import("@shared/dnv-niaho-questions");

  const moduleLevelPairs: { moduleId: ModuleId; levels: typeof hospitalLevels }[] = [
    { moduleId: "hospital", levels: hospitalLevels },
    { moduleId: "asc",      levels: ascLevels as typeof hospitalLevels },
    { moduleId: "dnv",      levels: dnvLevels as typeof hospitalLevels },
  ];

  const levelRows: (typeof contentLevels.$inferInsert)[] = [];
  const questionRows: (typeof contentQuestions.$inferInsert)[] = [];

  for (const { moduleId, levels } of moduleLevelPairs) {
    for (let i = 0; i < levels.length; i++) {
      const l = levels[i];
      levelRows.push({
        id: l.id,
        moduleId,
        name: l.name,
        description: l.description,
        icon: l.icon,
        color: l.color,
        requiredScore: l.requiredScore ?? 0,
        chapterSummary: (l.chapterSummary as any) ?? null,
        studyMaterial: (l.studyMaterial as any) ?? [],
        isDraft: (l as any).draft ?? false,
        displayOrder: i,
      });
      for (let j = 0; j < l.questions.length; j++) {
        const q = l.questions[j];
        questionRows.push({
          id: q.id,
          levelId: l.id,
          question: q.question,
          scenario: (q as any).scenario ?? null,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation ?? "",
          xpReward: q.xpReward ?? 10,
          isSwipe: q.isSwipe ?? false,
          isDraft: (q as any).draft ?? false,
          cmsTag: (q as any).cmsTag ?? null,
          tutor: (q as any).tutor ?? null,
          displayOrder: j,
        });
      }
    }
  }

  if (levelRows.length > 0) await db.insert(contentLevels).values(levelRows);
  if (questionRows.length > 0) {
    const BATCH = 200;
    for (let i = 0; i < questionRows.length; i += BATCH) {
      await db.insert(contentQuestions).values(questionRows.slice(i, i + BATCH));
    }
  }

  // ── 2. Deep dive levels + questions ────────────────────────────────────────

  const { hospitalDeepDiveLevels, dnvDeepDiveLevels } = await import("@shared/deep-dive-questions");

  const ddModulePairs: { moduleId: ModuleId; levels: typeof hospitalDeepDiveLevels }[] = [
    { moduleId: "hospital", levels: hospitalDeepDiveLevels },
    { moduleId: "dnv",      levels: dnvDeepDiveLevels },
  ];

  const ddLevelRows: (typeof contentDeepDiveLevels.$inferInsert)[] = [];
  const ddQuestionRows: (typeof contentDeepDiveQuestions.$inferInsert)[] = [];

  for (const { moduleId, levels } of ddModulePairs) {
    for (let i = 0; i < levels.length; i++) {
      const l = levels[i];
      ddLevelRows.push({
        id: l.id,
        name: l.name,
        description: l.description ?? "",
        icon: l.icon ?? "",
        color: l.color ?? "",
        baseLevelId: l.baseLevelId ?? "",
        moduleId,
        displayOrder: i,
      });
      for (let j = 0; j < l.questions.length; j++) {
        const q = l.questions[j];
        ddQuestionRows.push({
          id: q.id,
          levelId: l.id,
          baseQuestion: q.baseQuestion,
          baseOptions: q.baseOptions,
          baseCorrectIndex: q.baseCorrectIndex,
          baseExplanation: q.baseExplanation ?? "",
          baseXp: q.baseXp ?? 15,
          followUps: (q.followUps as any) ?? [],
          displayOrder: j,
        });
      }
    }
  }

  if (ddLevelRows.length > 0) await db.insert(contentDeepDiveLevels).values(ddLevelRows);
  if (ddQuestionRows.length > 0) {
    const BATCH = 200;
    for (let i = 0; i < ddQuestionRows.length; i += BATCH) {
      await db.insert(contentDeepDiveQuestions).values(ddQuestionRows.slice(i, i + BATCH));
    }
  }

  // ── 3. Handbook chapters ───────────────────────────────────────────────────

  const { handbook } = await import("@shared/handbook");
  const { ascHandbook } = await import("@shared/asc-handbook");
  const { dnvHandbook } = await import("@shared/dnv-niaho-handbook");

  const handbookPairs: { moduleId: ModuleId; chapters: typeof handbook }[] = [
    { moduleId: "hospital", chapters: handbook },
    { moduleId: "asc",      chapters: ascHandbook as typeof handbook },
    { moduleId: "dnv",      chapters: dnvHandbook as typeof handbook },
  ];

  const handbookRows: (typeof contentHandbookChapters.$inferInsert)[] = [];
  for (const { moduleId, chapters } of handbookPairs) {
    for (let i = 0; i < chapters.length; i++) {
      const ch = chapters[i];
      handbookRows.push({
        levelId: ch.levelId,
        moduleId,
        title: ch.title,
        overview: ch.overview ?? "",
        sections: (ch.sections as any) ?? [],
        quickReference: (ch.quickReference as any) ?? [],
        displayOrder: i,
      });
    }
  }

  if (handbookRows.length > 0) await db.insert(contentHandbookChapters).values(handbookRows);

  // ── 4. Assessment questions ────────────────────────────────────────────────

  const { diagnosticQuestions } = await import("@shared/diagnostic-questions");
  const { masteryQuestions } = await import("@shared/mastery-questions");
  const { ascPretestQuestions } = await import("@shared/asc-pretest");
  const { ascPosttestQuestions } = await import("@shared/asc-posttest");

  const assessmentRows: (typeof contentAssessmentQuestions.$inferInsert)[] = [];

  diagnosticQuestions.forEach((q, i) => {
    assessmentRows.push({
      id: q.id,
      assessmentType: "diagnostic",
      sectionId: q.sectionId,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: "",
      displayOrder: i,
    });
  });

  masteryQuestions.forEach((q, i) => {
    assessmentRows.push({
      id: q.id,
      assessmentType: "mastery",
      sectionId: q.sectionId,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? "",
      displayOrder: i,
    });
  });

  ascPretestQuestions.forEach((q, i) => {
    assessmentRows.push({
      id: q.id,
      assessmentType: "asc_pretest",
      chapterId: q.chapterId,
      chapterName: q.chapterName,
      question: q.question,
      scenario: (q as any).scenario ?? null,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? "",
      xpReward: q.xpReward ?? 10,
      isSwipe: q.isSwipe ?? false,
      cmsTag: (q as any).cmsTag ?? null,
      tutor: (q as any).tutor ?? null,
      displayOrder: i,
    });
  });

  ascPosttestQuestions.forEach((q, i) => {
    assessmentRows.push({
      id: q.id,
      assessmentType: "asc_posttest",
      chapterId: q.chapterId,
      chapterName: q.chapterName,
      question: q.question,
      scenario: (q as any).scenario ?? null,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? "",
      xpReward: q.xpReward ?? 10,
      isSwipe: q.isSwipe ?? false,
      cmsTag: (q as any).cmsTag ?? null,
      tutor: (q as any).tutor ?? null,
      displayOrder: i,
    });
  });

  if (assessmentRows.length > 0) {
    const BATCH = 200;
    for (let i = 0; i < assessmentRows.length; i += BATCH) {
      await db.insert(contentAssessmentQuestions).values(assessmentRows.slice(i, i + BATCH));
    }
  }

  console.log(`[seed-content] Seeded ${levelRows.length} levels, ${questionRows.length} questions, ${ddLevelRows.length} deep-dive levels, ${ddQuestionRows.length} deep-dive questions, ${handbookRows.length} handbook chapters, ${assessmentRows.length} assessment questions`);
}
