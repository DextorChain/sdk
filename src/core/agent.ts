import { discover } from "./discovery";
import { pay } from "./payment";
import { execute } from "./executor";
import { route } from "./router";

export async function boot() {
  const tool = await discover("demo.tool");
  await pay(tool);
  const result = await execute(tool, {});
  route(result);
}
