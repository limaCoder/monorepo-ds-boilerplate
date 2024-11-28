import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
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
