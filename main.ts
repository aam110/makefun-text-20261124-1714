// The One-Line Exit — a one-line resignation letter.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (no trailing newline:
// the file must hold exactly one line, 1-140 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I resign as your mime after eleven years of silence: this letter is the loudest thing I have ever said at work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
