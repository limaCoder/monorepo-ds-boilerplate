import { dirname, join } from "path";

module.exports = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@chromatic-com/storybook",
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-coverage"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  features: {
    storyStoreV7: true
  },

  async viteFinal(config) {
    return {
      ...config,
      base: './',
      build: {
        ...config.build,
        outDir: 'storybook-static',
        assetsDir: 'assets',
        rollupOptions: {
          ...config.build?.rollupOptions,
          output: {
            ...config.build?.rollupOptions?.output,
            manualChunks: undefined
          }
        }
      }
    };
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: {
        skipPropsWithoutDoc: false,
        skipChildrenPropWithoutDoc: false,
      },
    }
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}