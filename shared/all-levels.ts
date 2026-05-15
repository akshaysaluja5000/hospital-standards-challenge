import type { Level, ModuleId } from "./schema";
import { hospitalLevels } from "./questions";
import { ascLevels } from "./asc-questions";
import { dnvLevels } from "./dnv-questions";

export const levelsByModule: Record<ModuleId, Level[]> = {
  hospital: hospitalLevels,
  asc: ascLevels,
  dnv: dnvLevels,
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
  return [...hospitalLevels, ...ascLevels, ...dnvLevels];
}

export function findLevelById(levelId: string): Level | undefined {
  return getAllLevels().find((l) => l.id === levelId);
}
