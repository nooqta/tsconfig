declare const getTsConfigFiles: () => string[];
declare const getTsConfigNames: () => any[];
declare const getTsConfigs: () => {
    filename: any;
    name: any;
}[];
declare const parseTsConfigFile: (tsconfigFile: string) => any;
declare const copyTsConfigFile: (tsconfigFile: string, dest?: string, filename?: string) => void;
export { getTsConfigFiles, getTsConfigNames, getTsConfigs, parseTsConfigFile, copyTsConfigFile };
