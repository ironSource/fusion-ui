import {Story, Meta, moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FloatingToolbarComponent} from '@ironsource/fusion-ui/components/floating-toolbar';

export default {
    title: 'Components/Floating toolbar',
    component: FloatingToolbarComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5529%3A97028&t=z7fAosbFExbBS9zn-1'
        },
        docs: {
            description: {
                component: dedent`**Floating toolbar** Floating bar is a context floating toolbar. It saves space from constantly showing contextual toolbar or confirmation footer in some components. In others like table it’s almost unreplaceble when you need to apply multi-actions to the selected items. In some cases it’s simply good to have.

                CSS Variables:
                - ***--floating-toolbar-gap*** (8px);
                - ***--floating-toolbar-background-color*** $fu-black-900 (#41454D);
                - ***--floating-toolbar-counter-background-color*** $fu-black-500 (#53575B);
                - ***--floating-toolbar-counter-color*** $White (#ffffff);
                - ***--floating-toolbar-label-color*** $White (#ffffff);
                - ***--floating-toolbar-close-icon-color*** $fu-light-600 (#B7BBC0);
                - ***--floating-toolbar-close-icon-hover-color*** $fu-light-100 (#F1F3F4);
                - ***--floating-toolbar-close-inner-border-color*** #000000;
                - ***--floating-toolbar-close-external-border-color*** $White (#ffffff);
                `
            }
        }
    },
    args: {
        counter: 3,
        label: 'Hello world'
    }
} as Meta<FloatingToolbarComponent>;

const DropdownTemplate: Story<FloatingToolbarComponent> = (args: FloatingToolbarComponent) => ({
    props: {...args},
    template: `
<fusion-floating-toolbar
    [counter]="counter"
    [label]="label"
>

</fusion-floating-toolbar>`
});

// region Default
export const Default = DropdownTemplate.bind({});
