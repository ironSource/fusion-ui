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
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        disabled: false,
        loading: false,
        color: 'default',
        variant: 'contained',
        startIconName: '',
        endIconName: ''
    },
    argsTypes: {
        disabled: {
            control: 'boolean'
        },
        loading: {
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
    template: `<fusion-button [color]="color" [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">
    {{content}}
</fusion-button>`
});

export const Basic = {
    render: ButtonTemplate,
    args: {content: 'Default'}
};

const ButtonColorTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-button color="primary" [size]="size" [disabled]="disabled" [loading]="loading" [variant]="variant">Primary</fusion-button>
    <fusion-button [size]="size" [disabled]="disabled" [loading]="loading" [variant]="variant">Default</fusion-button>
    <fusion-button color="danger" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading">Danger</fusion-button>
    <fusion-button color="info" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading">Info</fusion-button>
    <fusion-button color="success" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading">Success</fusion-button>
    <fusion-button color="warning" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading">Warning</fusion-button>
</div>`
});

export const Colors = {
    render: ButtonColorTemplate,
    args: {variant: 'contained'}
};

const ButtonVariantTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-button [color]="color" [size]="size" [disabled]="disabled" [loading]="loading">Contained</fusion-button>
    <fusion-button variant="outlined" [color]="color" [size]="size" [disabled]="disabled" [loading]="loading">Outlined</fusion-button>
    <fusion-button variant="text" [color]="color" [size]="size" [disabled]="disabled" [loading]="loading">Text</fusion-button>
</div>`
});

export const Variants = {
    render: ButtonVariantTemplate,
    args: {color: 'primary'}
};

const ButtonSizesTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px; align-items: center">
    <fusion-button size="small" [color]="color" [variant]="variant" [disabled]="disabled" [loading]="loading">Small</fusion-button>
    <fusion-button [color]="color" [variant]="variant" [disabled]="disabled" [loading]="loading">Medium (default)</fusion-button>
    <fusion-button size="large" [color]="color" [variant]="variant" [disabled]="disabled" [loading]="loading">Large</fusion-button>
    <fusion-button size="extraLarge" [color]="color" [variant]="variant" [disabled]="disabled" [loading]="loading">Extra Large</fusion-button>
</div>`
});

export const Sizes = {
    render: ButtonSizesTemplate,
    args: {color: 'primary', variant: 'contained'}
};

const ButtonIconsTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px; align-items: center">
    <fusion-button [color]="color" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading" [endIconName]="endIconName">With end icon</fusion-button>
    <fusion-button [color]="color" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading" [startIconName]="startIconName">With start icon</fusion-button>
    <fusion-button [color]="color" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading" [startIconName]="startIconName" [endIconName]="endIconName">With both icons</fusion-button>
    <fusion-button [color]="color" [size]="size" [variant]="variant" [disabled]="disabled" [loading]="loading" startIconName="ph/fill/plus" endIconName="ph/fill/caret-down">With fill icons type</fusion-button>
</div>`
});

export const Icons = {
    render: ButtonIconsTemplate,
    args: {color: 'primary', variant: 'contained', startIconName: 'ph/bold/plus', endIconName: 'ph/caret-down'}
};
