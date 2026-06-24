import childProcess from "node:child_process";
import path from "node:path";

const projectDir = path.resolve(import.meta.dirname, ".");

for (const command of ["which npm", "npm --version"]) {
  try {
    const output = childProcess.execSync(command, {
      cwd: projectDir,
      encoding: "utf-8",
      stdio: "pipe",
    });
    console.log(`$ ${command}`);
    console.log(output.trim());
  } catch (error) {
    console.error(String(error));
  }
}
