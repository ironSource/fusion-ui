import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonComponent} from './button.component';

export default {
    title: 'V4/Components/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        disabled: false,
        color: 'primary',
        variant: 'contained'
    },
    argsTypes: {
        disabled: {
            control: 'boolean'
        },
        color: {
            options: ['default', 'primary', 'danger', 'info', 'success', 'warning']
        },
        variant: {
            control: {
                type: 'select',
                options: ['contained', 'outlined', 'text']
            }
        }
    }
} as Meta<ButtonComponent>;

const ButtonTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button color="primary" [disabled]="disabled">
    {{content}}
</fusion-button>`
});

export const Basic = {
    render: ButtonTemplate,
    args: {content: 'Primary'}
};

const ButtonColorTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-button color="primary" [disabled]="disabled" [variant]="variant">Primary</fusion-button>
    <fusion-button [disabled]="disabled" [variant]="variant">Default</fusion-button>
    <fusion-button color="danger" [variant]="variant" [disabled]="disabled">Danger</fusion-button>
    <fusion-button color="info" [variant]="variant" [disabled]="disabled">Info</fusion-button>
    <fusion-button color="success" [variant]="variant" [disabled]="disabled">Success</fusion-button>
    <fusion-button color="warning" [variant]="variant" [disabled]="disabled">Warning</fusion-button>
</div>`
});

export const Colors = {
    render: ButtonColorTemplate,
    args: {variant: 'contained'}
};

const ButtonVariantTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-button [color]="color" [disabled]="disabled">Contained</fusion-button>
    <fusion-button [color]="color" variant="outlined" [disabled]="disabled">Outlined</fusion-button>
    <fusion-button [color]="color" variant="text" [disabled]="disabled">Text</fusion-button>
</div>`
});

export const Variants = {
    render: ButtonVariantTemplate,
    args: {color: 'primary'}
};

const ButtonSizesTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px; align-items: center">
    <fusion-button [color]="color" [variant]="variant" [disabled]="disabled" size="small">Small</fusion-button>
    <fusion-button [color]="color" [variant]="variant" [disabled]="disabled">Medium (default)</fusion-button>
    <fusion-button [color]="color" [variant]="variant" [disabled]="disabled" size="large">Large</fusion-button>
    <fusion-button [color]="color" [variant]="variant" [disabled]="disabled" size="extraLarge">Extra Large</fusion-button>
</div>`
});

export const Sizes = {
    render: ButtonSizesTemplate,
    args: {color: 'primary', variant: 'contained'}
};
