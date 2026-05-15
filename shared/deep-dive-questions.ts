import { deepDiveLevelsPart1 } from "./deep-dive-questions-part1";
import { deepDiveLevelsPart2 } from "./deep-dive-questions-part2";
import { ddSterileStorageLevel } from "./deep-dive-questions-sterile";
import { ddTransportLevel } from "./deep-dive-questions-transport";
import { ddOrLevel } from "./deep-dive-questions-part3a";
import { ddSurgicalSafetyLevel } from "./deep-dive-questions-part3b";
import { ddPatientCareLevel } from "./deep-dive-questions-part3c";
import { ddEocLevel } from "./deep-dive-questions-part3d";
import { ddAnesthesiaLevel } from "./deep-dive-questions-anesthesia";
import { ddMedicationLevel } from "./deep-dive-questions-medication";
import { ddNpsgLevel } from "./deep-dive-questions-npsg";
import { ddInfectionControlLevel } from "./deep-dive-questions-ic";
import { ddPatientRightsLevel } from "./deep-dive-questions-rights";
import { ddLifeSafetyLevel } from "./deep-dive-questions-life-safety";
export type { DeepDiveLevel } from "./schema";

export const deepDiveLevels = [
  ddTransportLevel,
  ...deepDiveLevelsPart1,
  ddSterileStorageLevel,
  ...deepDiveLevelsPart2,
  ddOrLevel,
  ddSurgicalSafetyLevel,
  ddPatientCareLevel,
  ddEocLevel,
  ddAnesthesiaLevel,
  ddMedicationLevel,
  ddNpsgLevel,
  ddInfectionControlLevel,
  ddPatientRightsLevel,
  ddLifeSafetyLevel,
];
