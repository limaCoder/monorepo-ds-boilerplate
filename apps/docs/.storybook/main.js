import { dirname, join } from "path";
module.exports = {
  "stories": ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],

  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@chromatic-com/storybook",
    getAbsolutePath("@storybook/addon-themes")
  ],

  "framework": {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  "features": {
  },

  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/monorepo-ds-boilerplate/'
    }

    return config
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}