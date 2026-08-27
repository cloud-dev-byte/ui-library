import fs from "fs/promises";
import path from "path";

export async function getComponentSource(category: string, source: string) {
  const filePath = path.join(process.cwd(), "src", category, `${source}.tsx`);

  return fs.readFile(filePath, "utf-8");
}
