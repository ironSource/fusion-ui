import {setCompodocJson} from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

// region fix input stringify
// see https://discord.com/channels/748677963142135818/1054398047863455795/1054398047863455795
// see https://github.com/storybookjs/storybook/issues/17004
const allFields = docJson.components
    ?.map(c => ([...(c.propertiesClass || []), ...(c.inputsClass || [])]))
    .flat();

allFields.forEach(p => {
    if (p.type === 'number') {
        p.defaultValue = +(p.defaultValue);
    } else {
        delete p.defaultValue;
    }
});
// endregion

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
        "@ironsource/fusion-ui": '5.1.2-test.2'
    },
    options: {
        storySort: (a, b) => {
            return (b[1].id.endsWith('-all--page') || b[1].id.endsWith('--default') || b[1].id.endsWith('-description--page') )
                ? 1
                : (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: false }))
        }
    }
};
