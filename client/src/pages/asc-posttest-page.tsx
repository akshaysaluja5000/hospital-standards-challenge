import { AscTestRunner } from "@/components/asc-test-runner";

export default function AscPosttestPage() {
  return (
    <AscTestRunner
      apiBase="/api/asc-posttest"
      title="Posttest"
      introTitle="ASC Posttest"
      introBody="A 25-question check across all six published ASC chapters with brand-new scenarios — none repeat from the pretest. Compare your chapter-level scores to the pretest to see exactly where you've grown."
      resultsHeadline="Posttest complete"
      testIdPrefix="posttest"
    />
  );
}
