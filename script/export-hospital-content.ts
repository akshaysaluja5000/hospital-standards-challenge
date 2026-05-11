import { hospitalLevels } from "../shared/questions";
import * as fs from "fs";
import * as path from "path";

const lines: string[] = [];

lines.push("=".repeat(80));
lines.push("ACCREDITATION READY — HOSPITAL MODULE CONTENT EXPORT");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push("=".repeat(80));
lines.push("");

const published = hospitalLevels.filter((l) => !l.draft).map((l) => ({
  ...l,
  questions: l.questions.filter((q) => !q.draft),
}));

lines.push(`Total chapters: ${published.length}`);
lines.push(`Total questions: ${published.reduce((s, l) => s + l.questions.length, 0)}`);
lines.push(`Total study concepts: ${published.reduce((s, l) => s + l.studyMaterial.length, 0)}`);
lines.push("");

for (const level of published) {
  lines.push("=".repeat(80));
  lines.push(`CHAPTER: ${level.name}`);
  lines.push(`ID: ${level.id}`);
  if (level.description) lines.push(`Description: ${level.description}`);
  lines.push("=".repeat(80));
  lines.push("");

  // Chapter summary
  if (level.chapterSummary) {
    const s = level.chapterSummary;
    lines.push("── CHAPTER SUMMARY ──────────────────────────────────────");
    if (s.plainLanguageSummary) {
      lines.push("Plain Language Summary:");
      lines.push(s.plainLanguageSummary);
      lines.push("");
    }
    if (s.commonRiskPoints && s.commonRiskPoints.length > 0) {
      lines.push("Common Survey Risk Points:");
      s.commonRiskPoints.forEach((p, i) => lines.push(`  ${i + 1}. ${p}`));
      lines.push("");
    }
    if (s.keyOperationalExpectations && s.keyOperationalExpectations.length > 0) {
      lines.push("Key Operational Expectations:");
      s.keyOperationalExpectations.forEach((p, i) => lines.push(`  ${i + 1}. ${p}`));
      lines.push("");
    }
  }

  // Study material
  if (level.studyMaterial.length > 0) {
    lines.push("── STUDY CONCEPTS ───────────────────────────────────────");
    level.studyMaterial.forEach((c, i) => {
      lines.push(`[${i + 1}] ${c.title}${c.category ? ` (${c.category})` : ""}`);
      if (c.content) lines.push(`    Content: ${c.content}`);
      if (c.keyPoint) lines.push(`    Key Point: ${c.keyPoint}`);
      if (c.extraInfo) lines.push(`    Extra Info: ${c.extraInfo}`);
      lines.push("");
    });
  }

  // Questions
  if (level.questions.length > 0) {
    lines.push("── QUIZ QUESTIONS ───────────────────────────────────────");
    level.questions.forEach((q, i) => {
      lines.push(`Q${i + 1}: ${q.text}`);
      (q.options || []).forEach((opt, oi) => {
        const letter = String.fromCharCode(65 + oi);
        const correct = oi === q.correctAnswer ? " ✓ CORRECT" : "";
        lines.push(`  ${letter}) ${opt}${correct}`);
      });
      if (q.explanation) lines.push(`  Explanation: ${q.explanation}`);
      lines.push("");
    });
  }

  lines.push("");
}

const outPath = path.join(process.cwd(), "hospital-content-export.txt");
fs.writeFileSync(outPath, lines.join("\n"), "utf-8");
console.log(`✅ Exported to: hospital-content-export.txt`);
console.log(`   Lines: ${lines.length.toLocaleString()}`);
console.log(`   Size: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
