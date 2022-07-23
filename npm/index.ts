import * as fs from 'fs';
import { join } from 'path';
const baseDir = join(__dirname, 'bases');

// List all tsconfig files
const getTsConfigFiles = () => fs.readdirSync('./bases').filter((file: any) => file.match(/.*\.json$/));

// get tsconfigs names
const getTsConfigNames = () => getTsConfigFiles().map((file: any) => file.replace(".json", "").replace(".combined", ""));

// get tsconfigs filename and display title
const getTsConfigs = () => getTsConfigFiles().map((file: any) => ({filename: file, name: file.replace(".json", "").replace(".combined", "")}));

// parse tsconfig file content
const parseTsConfigFile = (tsconfigFile: string) => JSON.parse(fs.readFileSync(join(baseDir, tsconfigFile), 'utf8'));

export {
    getTsConfigFiles,
    getTsConfigNames,
    getTsConfigs,
    parseTsConfigFile
}