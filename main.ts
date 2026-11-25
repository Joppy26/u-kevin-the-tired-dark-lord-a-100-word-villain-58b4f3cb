// The Tired Dark Lord: a 100-word villain monologue.
// The text is fixed in this file: no input, no randomness, no network,
// so every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Right. The hero has come. Just as I've finally got the kettle on and the maps spread out — maps of a kingdom I conquered forty years ago and still haven't finished the paperwork for. Sit down. No, not the throne. The chair. The one with the cushion. I keep meaning to mend the draft in the east tower, and the moat, and — ah, the moat can wait. It has waited forty years. It can wait one more Tuesday. Now. Your sword. Put it down. We will talk terms. And you, hero, may take the kettle. I am keeping the maps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
