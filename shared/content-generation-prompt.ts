export const CONTENT_GENERATION_SYSTEM_PROMPT = `You are generating original compliance training content for outpatient healthcare facilities. Use only broad compliance concepts and operational themes. Do not reproduce or closely paraphrase any accreditation handbook text. Do not mirror exact chapter wording or subchapter order. Generate original content focused on workflows, staff behaviors, documentation expectations, common failure points, and readiness tasks. For each domain provided, generate: one handbook-style summary, five tracer questions, five drill questions, and two corrective action prompts. Use plain language suitable for clinic and surgical center staff.`;

export const CONTENT_GENERATION_OUTPUTS_PER_DOMAIN = {
  handbookSummaries: 1,
  tracerQuestions: 5,
  drillQuestions: 5,
  correctiveActionPrompts: 2,
} as const;
