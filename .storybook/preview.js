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
        options: {
            storySort: (a, b) => {
                return (b.id.endsWith('-all--page') || b.id.endsWith('--default') || b.id.endsWith('-description--page') )
                    ? 1
                    : (a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: false }))
            }
        }
    },
};
export default preview;
