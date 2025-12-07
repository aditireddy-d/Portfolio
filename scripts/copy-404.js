import { copyFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const outDir = "docs";   // matches outDir in vite.config.ts
mkdirSync(outDir, { recursive: true });
const from = join(process.cwd(), outDir, "index.html");
const to = join(process.cwd(), outDir, "404.html");
if (existsSync(from)) copyFileSync(from, to);
