// deno run --allow-read --allow-write scripts/generate-combined.ts
//

const inputs: CombinedConfigInput[] = [
  { base: "node16", extends: ["esm", "strictest"] },
  { base: "node16", extends: ["strictest"] },
  { base: "node18", extends: ["esm", "strictest"] },
  { base: "node18", extends: ["strictest"] },
];

import * as path from "https://deno.land/std/path/mod.ts";
import { parse } from "./vendor/node-jsonc-parser/jsonc.ts";
import { deepMerge } from "https://deno.land/std/collections/deep_merge.ts";

type CombinedConfigInput = {
  base: string;
  extends: [string, ...string[]];
};
type Tsconfig = Record<string, any>;

function merge(configs: readonly Tsconfig[]): Tsconfig {
  let result: Tsconfig = {};

  for (const config of configs) {
    result = deepMerge(result, config);
  }

  result.display = configs.map((x) => x.display).join(" + ");

  return result;
}

async function writeCombinedConfig(
  input: CombinedConfigInput,
  config: Tsconfig,
): Promise<void> {
  const filePath = path.join(
    Deno.cwd(),
    "bases",
    `${input.base}-${[...input.extends].reverse().join("-")}.combined.json`,
  );
  const serializedConfig = "// This file was autogenerated by a script\n" +
    `// Equivalent to a config of: ${
      [input.base, ...input.extends].reverse().join(" extends ")
    }\n` +
    JSON.stringify(config, null, "  ");

  return Deno.writeTextFile(filePath, serializedConfig);
}

const configCache: Map<string, Tsconfig> = new Map();

// Populate configs cache
for (const input of new Set(inputs.map((x) => [x.base, x.extends]).flat(2))) {
  const packageText = await Deno.readTextFile(
    path.join(Deno.cwd(), "bases", `${input}.json`),
  );

  const parsed = parse(packageText) as Tsconfig;

  configCache.set(input, parsed);
}

const mergedConfigs: Map<CombinedConfigInput, Tsconfig> = new Map();

for (const input of inputs) {
  const configs = [input.base, ...input.extends].map((name) =>
    configCache.get(name)!
  );

  const merged = merge(configs);

  mergedConfigs.set(input, merged);
}

await Promise.all(
  [...mergedConfigs].map(([names, config]) =>
    writeCombinedConfig(names, config)
  ),
);
