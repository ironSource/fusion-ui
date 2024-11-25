import remarkGfm from 'remark-gfm';

/** @type { import('@storybook/angular').StorybookConfig } */
const config = {
    stories: ['../projects/fusion-ui/storybook-foundations/**/*.mdx', /*'../projects/fusion-ui/!**!/!*.mdx',*/ '../projects/fusion-ui/**/*.stories.ts'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/angular',
        options: {}
    },
    docs: {
        /*autodocs: true // auto generate mdx dox story*/
        autodocs: 'tag' // autogenerate only for stories with tag: 'autodoc'
    }
};

export default config;
