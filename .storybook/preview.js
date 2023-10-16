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
            "@ironsource/fusion-ui": '6.0.1'
        },
        viewMode: 'story',
        docs: {inlineStories: true},
        options: {
            storySort: {
                order: ['Introduction', 'Styleguide', ['Colors', 'Typography', 'Iconography', 'Grid system', '*'], 'Components'],
                method: 'alphabetical',
                locales: 'en-Us'
            },
        }
    },
};
export default preview;
