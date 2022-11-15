module.exports = {
    stories: [/*'../stories/!**!/!*.stories.mdx', '../stories/!**!/!*.stories.@(js|jsx|ts|tsx)', */'../projects/fusion-ui/**/*.stories.ts', '../projects/fusion-ui/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-designs'
    ],
    framework: '@storybook/angular',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    features: {
        babelModeV7: true
    }
};
