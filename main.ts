import * as fs from "node:fs";

const WORD = "Almost";

if (WORD.length < 1 || WORD.length > 24 || /\s/.test(WORD)) {
  throw new Error("entry must be a single word of 1-24 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", WORD, "utf8");
