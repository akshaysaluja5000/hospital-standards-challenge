import type { Level } from "./schema";
import { ascPrrLevel } from "./asc-prr";
import { ascGovLevel } from "./asc-gov";
import { ascAdmLevel } from "./asc-adm";
import { ascAsgLevel } from "./asc-asg";
import { ascBehLevel } from "./asc-beh";
import { ascCmcLevel } from "./asc-cmc";
import { ascCpvLevel } from "./asc-cpv";
import { ascCrdLevel } from "./asc-crd";
import { ascEmgLevel } from "./asc-emg";
import { ascFacLevel } from "./asc-fac";
import { ascIpcLevel } from "./asc-ipc";
import { ascLrdLevel } from "./asc-lrd";
import { ascMedLevel } from "./asc-med";
import { ascOcsLevel } from "./asc-ocs";
import { ascQuaLevel } from "./asc-qua";
import { ascSafLevel } from "./asc-saf";
import { ascValLevel } from "./asc-val";

export const ascLevels: Level[] = [
  ascAdmLevel,
  ascAsgLevel,
  ascBehLevel,
  ascCmcLevel,
  ascCpvLevel,
  ascCrdLevel,
  ascEmgLevel,
  ascFacLevel,
  ascGovLevel,
  ascIpcLevel,
  ascLrdLevel,
  ascMedLevel,
  ascOcsLevel,
  ascPrrLevel,
  ascQuaLevel,
  ascSafLevel,
  ascValLevel,
];
