import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line resignation letter from a cron job that kept firing
// for a job that no longer exists.
const LINE =
  "I quit: the 3am job I have run nightly for two years was deleted six months ago, and nobody told me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`characters: ${LINE.length}`);
