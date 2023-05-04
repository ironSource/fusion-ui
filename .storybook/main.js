/** @type { import('@storybook/angular').StorybookConfig } */
const config = {
    stories: ['../projects/fusion-ui/**/*.stories.ts', '../projects/fusion-ui/**/*.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@ironsource-mobile/storybook-addon-stackblitz',
        '@storybook/addon-mdx-gfm'
    ],
    framework: {
        name: '@storybook/angular',
        options: {enableIvy: true}
    },
    docs: {
        autodocs: true // auto generate mdx dox story
    }
};

export default config;
