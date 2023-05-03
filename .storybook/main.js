/** @type { import('@storybook/angular').StorybookConfig } */
const config = {
    /*stories: ['../projects/fusion-ui/!**!/!*.stories.ts', '../projects/fusion-ui/!**!/!*.stories.mdx'],*/
    stories: [{directory: '../projects/fusion-ui', files: '**/*.stories.@(mdx|ts)'}],
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
        autodocs: false // auto generate mdx dox story
    }
};

export default config;
