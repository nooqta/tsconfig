"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTsConfigFile = exports.parseTsConfigFile = exports.getTsConfigs = exports.getTsConfigNames = exports.getTsConfigFiles = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const baseDir = (0, path_1.join)(__dirname, 'bases');
// List all tsconfig files
const getTsConfigFiles = () => fs.readdirSync('./bases').filter((file) => file.match(/.*\.json$/));
exports.getTsConfigFiles = getTsConfigFiles;
// get tsconfigs names
const getTsConfigNames = () => getTsConfigFiles().map((file) => file.replace(".json", "").replace(".combined", ""));
exports.getTsConfigNames = getTsConfigNames;
// get tsconfigs filename and display title
const getTsConfigs = () => getTsConfigFiles().map((file) => ({ filename: file, name: file.replace(".json", "").replace(".combined", "") }));
exports.getTsConfigs = getTsConfigs;
// parse tsconfig file content
const parseTsConfigFile = (tsconfigFile) => JSON.parse(fs.readFileSync((0, path_1.join)(baseDir, tsconfigFile), 'utf8'));
exports.parseTsConfigFile = parseTsConfigFile;
const copyTsConfigFile = (tsconfigFile, dest = process.cwd(), filename = 'tsconfig.json') => {
    const tsconfigFilePath = (0, path_1.join)(baseDir, tsconfigFile);
    fs.copyFileSync(tsconfigFilePath, (0, path_1.join)(dest, filename));
};
exports.copyTsConfigFile = copyTsConfigFile;
//# sourceMappingURL=index.js.map