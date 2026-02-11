import { boot } from "./core/agent";
import { log } from "./utils/logger";

async function main() {
  log("Starting Dextor...");
  await boot();
}

main();
