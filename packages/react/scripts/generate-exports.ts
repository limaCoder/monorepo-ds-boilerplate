import { components } from '../src/components';
import fs from 'fs';
import path from 'path';

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = require(packageJsonPath);

const baseExports = {
  '.': {
    types: './dist/index.d.ts',
    import: './dist/index.mjs',
    require: './dist/index.js',
  },
};

const componentExports = Object.entries(components).reduce<Record<string, unknown>>(
  (acc, [name, path]) => {
    acc[`./${name}`] = {
      types: `./dist/${path}/index.d.ts`,
      import: `./dist/${path}/index.mjs`,
      require: `./dist/${path}/index.js`,
    };
    return acc;
  },
  {},
);

packageJson.exports = {
  ...baseExports,
  ...componentExports,
};

console.log('Exports gerados:', JSON.stringify(packageJson.exports, null, 2));
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
