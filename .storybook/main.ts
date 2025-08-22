import type { StorybookConfig } from '@storybook/nextjs-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-viewport'
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    docsMode: true
  },
  viteFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = { alias: {} }
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src')
    }
    return config
  }
}
export default config
