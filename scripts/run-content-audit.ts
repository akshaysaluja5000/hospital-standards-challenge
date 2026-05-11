/**
 * AccreditationReady — Full Content Audit (Parallel, Phased)
 * Usage: npx tsx scripts/run-content-audit.ts [phase]
 * Phases: hospital-q | hospital-study | hospital-risks | diag-mastery | asc-q | asc-study | asc-risks | all
 */

import Anthropic from "@anthropic-ai/sdk";
import { hospitalLevels } from "../shared/questions";
import { ascLevels } from "../shared/asc-questions";
import { diagnosticQuestions } from "../shared/diagnostic-questions";
import { masteryQuestions } from "../shared/mastery-questions";
import * as fs from "fs";

const apiKey = process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY || "replit";
const baseURL = process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL;
const clientOpts: ConstructorParameters<typeof Anthropic>[0] = { apiKey };
if (baseURL) clientOpts.baseURL = baseURL;
const client = new Anthropic(clientOpts);

const RESULTS_FILE = "audit-results.json";
const MAX_CONCURRENT = 8; // parallel Claude calls at once

interface AuditFlag {
  module: string;
  chapter: string;
  questionId: string;
  questionText: string;
  currentAnswer: string;
  verdict: string;
  details: string;
}

let flags: AuditFlag[] = [];
let verifiedCount = 0;

// Load existing results so we can append across runs
function loadExistingResults() {
  if (fs.existsSync(RESULTS_FILE)) {
    try {
      const existing = JSON.parse(fs.readFileSync(RESULTS_FILE, "utf8"));
      flags = existing.flags || [];
      verifiedCount = existing.totalVerified || 0;
      console.log(`  (Loaded ${flags.length} existing flags from prior run)\n`);
    } catch {
      flags = [];
      verifiedCount = 0;
    }
  }
}

function saveResults(phase: string) {
  const summary = {
    timestamp: new Date().toISOString(),
    lastPhase: phase,
    totalVerified: verifiedCount,
    totalFlagged: flags.length,
    flags,
  };
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(summary, null, 2));
}

async function callClaude(prompt: string): Promise<string> {
  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 3000,
    messages: [{ role: "user", content: prompt }],
  });
  return (msg.content[0] as { text: string }).text;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Run tasks with concurrency limit
async function runConcurrently<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  const results: T[] = [];
  let i = 0;
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  }
  const workers = Array.from({ length: Math.min(limit, tasks.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

// ── Question batch audit ──────────────────────────────────────────────────
async function auditQuestionBatch(
  questions: Array<{ id?: string; question: string; options: string[]; correctIndex: number; explanation?: string }>,
  chapter: string,
  module: string,
  standard: string
) {
  const body = questions.map((q, i) => {
    const correct = q.options[q.correctIndex];
    const wrong = q.options.filter((_, idx) => idx !== q.correctIndex);
    return [
      `Q${i + 1} [ID:${q.id ?? "?"}]:`,
      `Question: ${q.question}`,
      `Correct Answer: ${correct}`,
      `Wrong Options: ${wrong.join(" | ")}`,
      q.explanation ? `Explanation: ${q.explanation}` : "",
    ].filter(Boolean).join("\n");
  }).join("\n\n");

  const prompt = `You are a healthcare compliance expert specializing in ${standard}.

Fact-check each training question. Respond EXACTLY one line per question:
Q[N]: ✅ ACCURATE
Q[N]: 🚩 FLAGGED — [what is wrong + correct standard, cite standard ID]
Q[N]: ⚠ OUTDATED — [what changed + when]
Q[N]: ❓ VERIFY — [what you are uncertain about]

Flag ANYTHING that could cause a compliance failure. Be strict. Context: ${standard} training.

${body}`;

  const response = await callClaude(prompt);
  const lines = response.split("\n");
  let batchFlags = 0;

  questions.forEach((q, i) => {
    const line = lines.find((l) => l.match(new RegExp(`^Q${i + 1}[^0-9]`)));
    if (!line) return;
    const isIssue = line.includes("🚩") || line.includes("⚠") || line.includes("❓") ||
      line.toUpperCase().includes("FLAGGED") || line.toUpperCase().includes("OUTDATED") || line.toUpperCase().includes("VERIFY");
    if (isIssue) {
      batchFlags++;
      flags.push({
        module, chapter, questionId: q.id ?? "?",
        questionText: q.question.substring(0, 150),
        currentAnswer: q.options[q.correctIndex].substring(0, 120),
        verdict: line.includes("🚩") || line.toUpperCase().includes("FLAGGED") ? "🚩 FLAGGED"
          : line.includes("⚠") || line.toUpperCase().includes("OUTDATED") ? "⚠ OUTDATED" : "❓ VERIFY",
        details: line.replace(/^Q\d+:\s*/, "").substring(0, 500),
      });
    } else {
      verifiedCount++;
    }
  });

  process.stdout.write(`    [${chapter}] batch of ${questions.length}: ${batchFlags ? `⚠ ${batchFlags} flagged` : "✅ clean"}\n`);
}

// ── Risk points audit ────────────────────────────────────────────────────
async function auditRiskPoints(chapterTitle: string, riskPoints: string[], standard: string, module: string) {
  const numbered = riskPoints.map((r, i) => `${i + 1}. ${r}`).join("\n");
  const prompt = `You are a former ${standard} surveyor (10+ years experience).

Validate these "Common Survey Risk Points" for the "${chapterTitle}" chapter.

Per item:
[N]: ✅ HIGH-RISK — genuinely frequently cited
[N]: ⚠ LOW-PRIORITY — rarely cited or overstated  
[N]: 🚩 INCORRECT — [what is wrong]

Then "MISSING:" followed by any significant commonly-cited risk points NOT in this list (max 3).

Risk Points:
${numbered}`;

  const response = await callClaude(prompt);
  const flagged = response.split("\n").filter(l => l.includes("🚩") || l.includes("⚠"));
  const missingIdx = response.toUpperCase().indexOf("MISSING:");
  const missing = missingIdx >= 0 ? response.substring(missingIdx + 8).trim().substring(0, 400) : "";

  if (flagged.length || missing) {
    flags.push({
      module, chapter: `[RISK POINTS] ${chapterTitle}`,
      questionId: "risk-points", questionText: `Risk points: ${chapterTitle}`,
      currentAnswer: "",
      verdict: "🚩 RISK POINTS",
      details: [...flagged.map(l => l.trim()), missing ? `MISSING: ${missing}` : ""].filter(Boolean).join(" | ").substring(0, 600),
    });
  }
  process.stdout.write(`    [RISK POINTS] ${chapterTitle}: ${flagged.length || missing ? "⚠ issues" : "✅ clean"}\n`);
}

// ── Study concepts audit ────────────────────────────────────────────────
async function auditStudyConcepts(
  concepts: Array<{ title: string; content: string; keyPoint: string }>,
  chapter: string, module: string, standard: string
) {
  const chunks = chunkArray(concepts, 8);
  for (const chunk of chunks) {
    const body = chunk.map((c, i) =>
      `C${i + 1}: "${c.title}"\nContent: ${c.content.substring(0, 280)}\nKey Point: ${c.keyPoint}`
    ).join("\n\n");

    const prompt = `You are a ${standard} expert. Fact-check these study summaries — staff memorize these.

C[N]: ✅ ACCURATE
C[N]: 🚩 FLAGGED — [what is wrong]
C[N]: ⚠ OUTDATED — [what changed]

${body}`;

    const response = await callClaude(prompt);
    const flagged = response.split("\n").filter(l => (l.includes("🚩") || l.includes("⚠")) && l.match(/^C\d+:/));
    if (flagged.length) {
      flags.push({
        module, chapter: `[STUDY] ${chapter}`, questionId: "study",
        questionText: chunk.map(c => c.title).join(", ").substring(0, 150),
        currentAnswer: "",
        verdict: "🚩 STUDY CONTENT",
        details: flagged.join(" | ").substring(0, 600),
      });
    }
    process.stdout.write(`    [STUDY] ${chapter} (${chunk.length}): ${flagged.length ? `⚠ ${flagged.length}` : "✅ clean"}\n`);
  }
}

// ── Chapter question runner ──────────────────────────────────────────────
async function auditChapterQuestions(levels: typeof hospitalLevels, module: string, standard: string, startIdx = 0, endIdx = 9999) {
  const filtered = levels.filter(l => l.questions?.length).slice(startIdx, endIdx);
  for (const level of filtered) {
    console.log(`\n  Chapter: ${level.name} (${level.questions!.length} questions)`);
    const chunks = chunkArray(level.questions as any[], 10);
    const tasks = chunks.map(chunk => () => auditQuestionBatch(chunk, level.name, module, standard));
    await runConcurrently(tasks, MAX_CONCURRENT);
    saveResults(module + "-q-partial"); // save after every chapter
  }
}

// ── PHASES ────────────────────────────────────────────────────────────────
async function phaseHospitalQ(startIdx = 0, endIdx = 9999) {
  console.log(`▶  HOSPITAL — Questions [chapters ${startIdx}–${Math.min(endIdx, hospitalLevels.length - 1)}]`);
  await auditChapterQuestions(hospitalLevels, "HOSPITAL", "Joint Commission (JCAHO)", startIdx, endIdx);
}

async function phaseHospitalStudy() {
  console.log("▶  HOSPITAL — Study Concepts");
  const tasks = hospitalLevels
    .filter(l => l.studyMaterial?.length)
    .map(l => () => auditStudyConcepts(l.studyMaterial as any[], l.name, "HOSPITAL", "Joint Commission (JCAHO)"));
  await runConcurrently(tasks, MAX_CONCURRENT);
}

async function phaseHospitalRisks() {
  console.log("▶  HOSPITAL — Risk Points");
  const tasks = hospitalLevels
    .filter(l => l.chapterSummary?.commonRiskPoints?.length)
    .map(l => () => auditRiskPoints(l.name, l.chapterSummary!.commonRiskPoints!, "Joint Commission", "HOSPITAL"));
  await runConcurrently(tasks, MAX_CONCURRENT);
}

async function phaseDiagMastery() {
  console.log("▶  DIAGNOSTIC + MASTERY Questions");
  const diagTasks = chunkArray(diagnosticQuestions as any[], 10)
    .map(chunk => () => auditQuestionBatch(chunk, "Diagnostic Pre-Test", "HOSPITAL", "Joint Commission (JCAHO)"));
  const mastTasks = chunkArray(masteryQuestions as any[], 10)
    .map(chunk => () => auditQuestionBatch(chunk, "Mastery Exam", "HOSPITAL", "Joint Commission (JCAHO)"));
  await runConcurrently([...diagTasks, ...mastTasks], MAX_CONCURRENT);
}

async function phaseAscQ(startIdx = 0, endIdx = 9999) {
  console.log(`▶  ASC — Questions [chapters ${startIdx}–${Math.min(endIdx, ascLevels.length - 1)}]`);
  await auditChapterQuestions(ascLevels, "ASC", "AAAHC / CMS (42 CFR Part 416)", startIdx, endIdx);
}

async function phaseAscStudy() {
  console.log("▶  ASC — Study Concepts");
  const tasks = ascLevels
    .filter(l => l.studyMaterial?.length)
    .map(l => () => auditStudyConcepts(l.studyMaterial as any[], l.name, "ASC", "AAAHC / CMS (42 CFR Part 416)"));
  await runConcurrently(tasks, MAX_CONCURRENT);
}

async function phaseAscRisks() {
  console.log("▶  ASC — Risk Points");
  const tasks = ascLevels
    .filter(l => l.chapterSummary?.commonRiskPoints?.length)
    .map(l => () => auditRiskPoints(l.name, l.chapterSummary!.commonRiskPoints!, "AAAHC", "ASC"));
  await runConcurrently(tasks, MAX_CONCURRENT);
}

function printSummary(phase: string) {
  console.log(`\n╔═══════════════════════════════════════════════════╗`);
  console.log(`║  Phase "${phase}" complete`);
  console.log(`║  ✅ Verified so far: ${verifiedCount}`);
  console.log(`║  🚩 Flagged so far:  ${flags.length}`);
  console.log(`║  Saved → ${RESULTS_FILE}`);
  console.log(`╚═══════════════════════════════════════════════════╝\n`);
}

function printAllFlags() {
  if (!flags.length) { console.log("No flags — all content verified clean."); return; }
  console.log(`\n${"─".repeat(70)}`);
  console.log(`ALL FLAGS (${flags.length} total):`);
  console.log("─".repeat(70));
  flags.forEach((f, idx) => {
    console.log(`\n[${String(idx + 1).padStart(3, "0")}] ${f.verdict}  ${f.module} > ${f.chapter}  (ID: ${f.questionId})`);
    console.log(`      Q: ${f.questionText}`);
    if (f.currentAnswer) console.log(`      A: ${f.currentAnswer}`);
    console.log(`      ↳ ${f.details}`);
  });
}

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  const phase = process.argv[2] || "all";
  console.log(`\n╔═══════════════════════════════════════════════════╗`);
  console.log(`║  AccreditationReady — Content Audit  [${phase}]`);
  console.log(`╚═══════════════════════════════════════════════════╝\n`);

  loadExistingResults();

  switch (phase) {
    case "hospital-q1":     await phaseHospitalQ(0, 6); break;
    case "hospital-q2":     await phaseHospitalQ(6, 14); break;
    case "hospital-q3":     await phaseHospitalQ(14, 9999); break;
    case "hospital-q":      await phaseHospitalQ(); break;
    case "asc-q1":          await phaseAscQ(0, 8); break;
    case "asc-q2":          await phaseAscQ(8, 9999); break;
    case "hospital-study":  await phaseHospitalStudy(); break;
    case "hospital-risks":  await phaseHospitalRisks(); break;
    case "diag-mastery":    await phaseDiagMastery(); break;
    case "asc-q":           await phaseAscQ(); break;
    case "asc-study":       await phaseAscStudy(); break;
    case "asc-risks":       await phaseAscRisks(); break;
    case "flags":           printAllFlags(); return;
    case "all":
      await phaseHospitalQ(0, 6);   saveResults("hospital-q1");
      await phaseHospitalQ(6, 9999); saveResults("hospital-q2");
      await phaseHospitalStudy(); saveResults("hospital-study");
      await phaseHospitalRisks(); saveResults("hospital-risks");
      await phaseDiagMastery();   saveResults("diag-mastery");
      await phaseAscQ();          saveResults("asc-q");
      await phaseAscStudy();      saveResults("asc-study");
      await phaseAscRisks();      saveResults("asc-risks");
      break;
    default:
      console.error(`Unknown phase: ${phase}`);
      console.error("Valid phases: hospital-q | hospital-study | hospital-risks | diag-mastery | asc-q | asc-study | asc-risks | flags | all");
      process.exit(1);
  }

  saveResults(phase);
  printSummary(phase);
  if (phase !== "all") printAllFlags();
}

main().catch(err => { console.error("Audit error:", err); process.exit(1); });
