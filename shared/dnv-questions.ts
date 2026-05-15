import type { Level } from "./schema";
import { dnvQmLevel } from "./dnv-qm";
import { dnvGbLevel } from "./dnv-gb";
import { dnvMsLevel } from "./dnv-ms";
import { dnvNsLevel } from "./dnv-ns";
import { dnvPcLevel } from "./dnv-pc";
import { dnvMmLevel } from "./dnv-mm";
import { dnvOtLevel } from "./dnv-ot";
import { dnvIcLevel } from "./dnv-ic";
import { dnvMrLevel } from "./dnv-mr";
import { dnvPeLevel } from "./dnv-pe";
import { dnvSpLevel } from "./dnv-sp";

export const dnvLevels: Level[] = [
  dnvQmLevel,
  dnvGbLevel,
  dnvMsLevel,
  dnvNsLevel,
  dnvPcLevel,
  dnvMmLevel,
  dnvOtLevel,
  dnvIcLevel,
  dnvMrLevel,
  dnvPeLevel,
  dnvSpLevel,
];
