import type { Level } from "./schema";
import { ascPatientRightsLevel } from "./asc-patient-rights";
import { ascGovernanceLevel } from "./asc-governance";
import { ascCredentialingLevel } from "./asc-credentialing";
import { ascAdministrationLevel } from "./asc-administration";
import { ascQualityOfCareLevel } from "./asc-quality-of-care";
import { ascQualityManagementLevel } from "./asc-quality-management";
import { ascClinicalRecordsLevel } from "./asc-clinical-records";
import { ascInfectionPreventionLevel } from "./asc-infection-prevention";
import { ascFacilitiesEnvironmentLevel } from "./asc-facilities-environment";
import { ascAnesthesiaSurgeryLevel } from "./asc-anesthesia-surgery";
import { ascPharmaceuticalLevel } from "./asc-pharmaceutical";

export const ascLevels: Level[] = [
  ascPatientRightsLevel,
  ascGovernanceLevel,
  ascCredentialingLevel,
  ascAdministrationLevel,
  ascQualityOfCareLevel,
  ascQualityManagementLevel,
  ascClinicalRecordsLevel,
  ascInfectionPreventionLevel,
  ascFacilitiesEnvironmentLevel,
  ascAnesthesiaSurgeryLevel,
  ascPharmaceuticalLevel,
  {
    id: "asc_medicare_conditions_for_coverage",
    module: "asc",
    draft: true,
    name: "Overnight & Extended Stay",
    description: "ASC domain: requirements for ASCs that maintain patients overnight or for extended recovery periods. Coming soon.",
    icon: "Moon",
    color: "hsl(220, 70%, 40%)",
    requiredScore: 0,
    studyMaterial: [],
    questions: [],
  },
];
