/** @type { import('@storybook/angular').StorybookConfig } */
const config = {
    stories: ['../projects/fusion-ui/components/Introduction.mdx', '../projects/fusion-ui/**/*.mdx', '../projects/fusion-ui/**/*.stories.ts'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@ironsource/storybook-addon-stackblitz',
        '@storybook/addon-mdx-gfm',
        '@chromatic-com/storybook'
    ],
    framework: {
        name: '@storybook/angular'
    },
    docs: {}
};

export default config;
