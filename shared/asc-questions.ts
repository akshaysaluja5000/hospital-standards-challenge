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
import { ascPathologyLevel } from "./asc-pathology";
import { ascImagingLevel } from "./asc-imaging";
import { ascTeachingLevel } from "./asc-teaching";
import { ascResearchLevel } from "./asc-research";
import { ascOvernightLevel } from "./asc-overnight";

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
  ascPathologyLevel,
  ascImagingLevel,
  ascTeachingLevel,
  ascResearchLevel,
  ascOvernightLevel,
];
