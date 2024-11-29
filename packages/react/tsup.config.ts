import { defineConfig } from 'tsup';
import { components } from './src/components';

const entries = [
  'src/index.tsx',
  ...Object.values(components).map(path => `src/${path}/index.tsx`),
];

export default defineConfig({
  entry: entries,
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
    entry: entries,
  },
  external: ['react'],
  clean: true,
  minify: true,
  outDir: 'dist',
  sourcemap: true,
  injectStyle: true,
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.css': 'css',
    };
  },
});
