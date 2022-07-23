### tsconfig-templates.

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev tsconfig-templates
yarn add --dev tsconfig-templates
```
#### API
- `getTsConfigFiles` - Lists availables tsconfig files
- `getTsConfigNames`  - Lists tsconfigs display names.
- `getTsConfigs` - Lists tsconfigs filename and display title
- `parseTsConfigFile(tsconfigFilename)` - Parse tsconfig file content.


```ts
import {parseTsConfigFile, getTsConfigFiles } from tsconfig-templates;
// To list available tsconfig files
const tsconfigs = getTsConfigFiles();

// Pick one available tsconfig file to get its content
const content = parseTsConfigFile('remix.json');
```

### Credits
- [bases](https://github.com/tsconfig/bases). The templates are found under the bases folder (https://github.com/tsconfig/bases/blob/master/bases/).
