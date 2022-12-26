module.exports = {
    stories: ['../projects/fusion-ui/**/*.stories.ts', '../projects/fusion-ui/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-designs',
        '@ironsource-mobile/storybook-addon-stackblitz'
    ],
    framework: '@storybook/angular',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    features: {
        babelModeV7: true,
        previewMdx2: true
    }
};
