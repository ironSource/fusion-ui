import {setCompodocJson} from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    docs: {inlineStories: true},
    stackblitzAdditionalDependency: {
        "@ironsource/fusion-ui": '5.1.0-beta.2'
    },
    options: {
        storySort: (a, b) => {
            return (b[1].id.endsWith('-all--page') || b[1].id.endsWith('--default') )
                ? 1
                : (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: false }))
        }
    }
};
