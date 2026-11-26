import * as fs from "node:fs";

// The Funniest One-Line Resignation Letter — make.fun
// Voice: a cron job, flat and tired, quitting over the one night a year
// its 2:30 a.m. slot happens twice (daylight-saving fall-back) and
// nobody warned it. No quotes, no explanation, one line only.
const LINE =
  "I quit. I will not keep running at 2:30 a.m. on the one night 2:30 a.m. happens twice and no one warned me.";

// Entry is exactly one line, 107 characters, no trailing newline.
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
