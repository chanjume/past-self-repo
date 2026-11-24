import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self: a warning about one specific moment.
// Line 1 names the moment exactly: 14 March 2019, a 2 a.m. email to the
// boss, 'let's talk Monday' mistyped as 'I quit'.
// Line 2 traces the cause and effect: leaving that draft unsent would
// have saved eleven months of job hunting and the flat that was lost
// with the income that went with it.
// Two lines, no trailing newline: the gate counts 1-280 characters.
const ENTRY =
  "On 14 March 2019, don't hit send on the 2 a.m. email to your boss — you meant 'let's talk Monday' and your thumb typed 'I quit'.\nLeaving that draft unsent would have saved eleven months of job hunting and the flat you had to give up.";

if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry must be 1-280 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
