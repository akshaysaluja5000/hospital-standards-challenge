import { AscTestRunner } from "@/components/asc-test-runner";

export default function AscPretestPage() {
  return (
    <AscTestRunner
      apiBase="/api/asc-pretest"
      title="Pretest"
      introTitle="ASC Pretest"
      introBody="A 25-question benchmark across the six published ASC chapters: Patient Rights, Governance, Clinical Records, Infection Prevention, Credentialing, and Quality Management. You'll see a chapter-by-chapter breakdown when you finish so you know where to focus your study."
      resultsHeadline="Pretest complete"
      testIdPrefix="pretest"
    />
  );
}
