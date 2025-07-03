import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
          '@ui-lib/ui-vue': resolve(__dirname, '../../../packages/ui-vue'),
          '@ui-lib/ui-react': resolve(__dirname, '../../../packages/ui-react/src'),
          '@ui-lib/shared': resolve(__dirname, '../../../packages/ui-shared'),
        },
      },
      optimizeDeps: {
        include: ['vue', 'react', 'react-dom'],
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
        },
      },
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')({
              content: [
                './stories/**/*.{js,jsx,ts,tsx,vue}',
                '../../../packages/ui-*/src/**/*.{js,jsx,ts,tsx,vue}',
              ],
              theme: {
                extend: {},
              },
              plugins: [],
            }),
            require('autoprefixer'),
          ],
        },
      },
    });
  },
};

export default config;