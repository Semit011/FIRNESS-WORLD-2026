import { runBasicChecks } from "./eventData.js";

const checks = runBasicChecks();
const failures = Object.entries(checks).filter(([, passed]) => !passed);

if (failures.length > 0) {
  console.error("Basic checks failed:", failures.map(([name]) => name).join(", "));
  process.exit(1);
}

console.log("Basic checks passed:", checks);
