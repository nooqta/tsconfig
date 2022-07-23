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
exports.parseTsConfigFile = exports.getTsConfigs = exports.getTsConfigNames = exports.getTsconfigFiles = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const baseDir = (0, path_1.join)(__dirname, 'bases');
// List all tsconfig files
const getTsconfigFiles = () => fs.readdirSync('./bases').filter((file) => file.match(/.*\.json$/));
exports.getTsconfigFiles = getTsconfigFiles;
// get tsconfigs names
const getTsConfigNames = () => getTsconfigFiles().map((file) => file.replace(".json", "").replace(".combined", ""));
exports.getTsConfigNames = getTsConfigNames;
// get tsconfigs filename and display title
const getTsConfigs = () => getTsconfigFiles().map((file) => ({ filename: file, name: file.replace(".json", "").replace(".combined", "") }));
exports.getTsConfigs = getTsConfigs;
// parse tsconfig file content
const parseTsConfigFile = (tsconfigFile) => JSON.parse(fs.readFileSync((0, path_1.join)(baseDir, tsconfigFile), 'utf8'));
exports.parseTsConfigFile = parseTsConfigFile;
console.log(baseDir);
