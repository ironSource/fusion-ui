import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4/icon-button.component';

export default {
    title: 'V4/Components/IconButton',
    component: IconButtonComponent,
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
        color: 'primary',
        variant: 'text',
        size: 'medium',
        iconName: 'ph/pencil-simple'
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
        size: {
            options: ['small', 'medium', 'large', 'extraLarge']
        },
        variant: {
            options: ['outlined', 'text']
        }
    }
} as Meta<IconButtonComponent>;

const ButtonTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<fusion-icon-button [color]="color" [variant]="variant" [size]="size" [iconName]="iconName" [disabled]="disabled" [loading]="loading"></fusion-icon-button>`
});

export const Basic = {
    render: ButtonTemplate
};

const ButtonColorTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-icon-button color="primary" [iconName]="iconName" [disabled]="disabled" [loading]="loading" [size]="size" [variant]="variant">Primary</fusion-icon-button>
    <fusion-icon-button [iconName]="iconName" [disabled]="disabled"  [loading]="loading" [size]="size" [variant]="variant">Default</fusion-icon-button>
    <fusion-icon-button color="danger" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [size]="size" [loading]="loading">Danger</fusion-icon-button>
    <fusion-icon-button color="info" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [size]="size" [loading]="loading">Info</fusion-icon-button>
    <fusion-icon-button color="success" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [size]="size" [loading]="loading">Success</fusion-icon-button>
    <fusion-icon-button color="warning" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [size]="size" [loading]="loading">Warning</fusion-icon-button>
</div>`
});

export const Colors = {
    render: ButtonColorTemplate,
    args: {variant: 'text'}
};

const ButtonVariantTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-icon-button [color]="color" variant="text" [iconName]="iconName" [disabled]="disabled" [loading]="loading"></fusion-icon-button>
    <fusion-icon-button [color]="color" variant="outlined" [iconName]="iconName" [disabled]="disabled" [loading]="loading"></fusion-icon-button>
</div>`
});

export const Variants = {
    render: ButtonVariantTemplate,
    args: {color: 'primary'}
};

const ButtonSizesTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px; align-items: center">
    <fusion-icon-button [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="small"></fusion-icon-button>
    <fusion-icon-button [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading"></fusion-icon-button>
    <fusion-icon-button [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="large"></fusion-icon-button>
    <fusion-icon-button [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="extraLarge"></fusion-icon-button>
</div>`
});

export const Sizes = {
    render: ButtonSizesTemplate,
    args: {color: 'primary', variant: 'text'}
};
