import {setCompodocJson} from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

/** @type { import('@storybook/angular').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        stackblitzAdditionalDependency: {
            "@ironsource/fusion-ui": '6.4.1-test.1'
        },
        viewMode: 'story',
        docs: {inlineStories: true},
        options: {
            storySort: {
                order: [
                    'Introduction',
                    'V4',
                    [
                        'Foundation',
                        [
                            'Typography',
                            'Palette colors',
                            'Elevations',
                            'Border radius',
                            'Spacing',
                            'Grid',
                            'Breakpoints',
                        ],
                        'Components',
                        '*',
                    ],
                    'V3',
                    [
                        'Foundation',
                        [
                            'Typography',
                            'Palette color',
                            'Elevations',
                            'Border radius',
                            'Spacing',
                            'Grid',
                            'Breakpoints',
                        ],
                        'Components',
                        '*',
                    ],
                ],
                method: 'alphabetical',
                locales: 'en-Us'
            },
        }
    },
};
export default preview;
