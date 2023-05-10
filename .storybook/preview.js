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
            "@ironsource/fusion-ui": '5.2.0'
        },
        viewMode: 'story',
        docs: {inlineStories: true},
        options: {
            storySort: (a, b) => {
                const comparer = a.title === b.title
                    ? 0
                    : a.id.localeCompare(b.id, undefined, { numeric: true });;
                return comparer;
            }
        }
    },
};
export default preview;
