import type { Level, ModuleId } from "./schema";
import { hospitalLevels } from "./questions";
import { clinicLevels } from "./clinic-questions";
import { ascLevels } from "./asc-questions";

export const levelsByModule: Record<ModuleId, Level[]> = {
  hospital: hospitalLevels,
  clinic: clinicLevels,
  asc: ascLevels,
};

export function getLevelsForModule(module: ModuleId): Level[] {
  return levelsByModule[module] ?? [];
}

export function getVisibleLevelsForModule(
  module: ModuleId,
  opts: { includeDraft?: boolean } = {},
): Level[] {
  const levels = getLevelsForModule(module);
  if (opts.includeDraft) return levels;
  return levels
    .filter((l) => !l.draft)
    .map((l) => ({
      ...l,
      questions: l.questions.filter((q) => !q.draft),
    }));
}

export function getAllLevels(): Level[] {
  return [...hospitalLevels, ...clinicLevels, ...ascLevels];
}

export function findLevelById(levelId: string): Level | undefined {
  return getAllLevels().find((l) => l.id === levelId);
}
