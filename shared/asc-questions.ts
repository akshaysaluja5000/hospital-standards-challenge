import type { Level } from "./schema";
import { ascPatientRightsLevel } from "./asc-patient-rights";
import { ascGovernanceLevel } from "./asc-governance";
import { ascCredentialingLevel } from "./asc-credentialing";
import { ascQualityManagementLevel } from "./asc-quality-management";
import { ascClinicalRecordsLevel } from "./asc-clinical-records";
import { ascInfectionPreventionLevel } from "./asc-infection-prevention";

export const ascLevels: Level[] = [
  ascPatientRightsLevel,
  ascGovernanceLevel,
  ascClinicalRecordsLevel,
  ascInfectionPreventionLevel,
  ascCredentialingLevel,
  ascQualityManagementLevel,
  {
    id: "asc_anesthesia_surgery_services",
    module: "asc",
    draft: true,
    name: "Medication Management & Perioperative Services",
    description: "ASC domain: medication safety, anesthesia services, surgical/procedural care, and perioperative workflows. Coming soon.",
    icon: "Syringe",
    color: "hsl(15, 80%, 50%)",
    requiredScore: 0,
    studyMaterial: [],
    questions: [],
  },
  {
    id: "asc_facilities_environment",
    module: "asc",
    draft: true,
    name: "Emergency Preparedness & Environment",
    description: "ASC domain: physical environment, life safety, equipment, utilities, and emergency preparedness planning. Coming soon.",
    icon: "Building2",
    color: "hsl(35, 85%, 50%)",
    requiredScore: 0,
    studyMaterial: [],
    questions: [],
  },
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
