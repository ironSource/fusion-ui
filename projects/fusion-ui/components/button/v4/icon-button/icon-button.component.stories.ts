import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4/icon-button/icon-button.component';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ButtonConsts} from '@ironsource/fusion-ui/testIds';

export default {
    title: 'V4/Components/Buttons/IconButton',
    component: IconButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TooltipDirective]
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
        variant: 'default',
        size: 'medium',
        iconName: 'ph/pencil-simple',
        tooltipText: 'Edit',
        testId: ButtonConsts.iconButtonTestId
    },
    argsTypes: {
        disabled: {
            control: 'boolean'
        },
        loading: {
            control: 'boolean'
        },
        color: {
            options: ['default', 'primary', 'danger']
        },
        size: {
            options: ['extraSmall', 'small', 'medium', 'large', 'extraLarge']
        },
        variant: {
            options: ['default', 'outlined']
        }
    }
} as Meta<IconButtonComponent>;

const ButtonTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<fusion-icon-button [fusionTooltip]="tooltipText"  [color]="color" [variant]="variant" [size]="size" [iconName]="iconName" [disabled]="disabled" [loading]="loading" [testId]="testId"></fusion-icon-button>`
});

export const Basic = {
    render: ButtonTemplate
};

const ButtonColorTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-icon-button [fusionTooltip]="tooltipText" [iconName]="iconName" [disabled]="disabled"  [loading]="loading" [size]="size" [variant]="variant">Default</fusion-icon-button>
    <fusion-icon-button [fusionTooltip]="tooltipText" color="primary" [iconName]="iconName" [disabled]="disabled" [loading]="loading" [size]="size" [variant]="variant">Primary</fusion-icon-button>
    <fusion-icon-button [fusionTooltip]="tooltipText" color="danger" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [size]="size" [loading]="loading">Danger</fusion-icon-button>
</div>`
});

export const Colors = {
    render: ButtonColorTemplate,
    args: {variant: 'text'}
};

const ButtonVariantTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px;">
    <fusion-icon-button [fusionTooltip]="tooltipText" [color]="color" variant="text" [iconName]="iconName" [disabled]="disabled" [loading]="loading"></fusion-icon-button>
    <fusion-icon-button [fusionTooltip]="tooltipText" [color]="color" variant="outlined" [iconName]="iconName" [disabled]="disabled" [loading]="loading"></fusion-icon-button>
</div>`
});

export const Variants = {
    render: ButtonVariantTemplate
};

const ButtonSizesTemplate: StoryFn<IconButtonComponent> = (args: IconButtonComponent) => ({
    props: args,
    template: `<div style="display: flex; gap: 14px; align-items: center">
    <fusion-icon-button fusionTooltip="extraSmall" [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="extraSmall"></fusion-icon-button>
    <fusion-icon-button fusionTooltip="small" [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="small"></fusion-icon-button>
    <fusion-icon-button fusionTooltip="medium (default)" [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading"></fusion-icon-button>
    <fusion-icon-button fusionTooltip="large" [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="large"></fusion-icon-button>
    <fusion-icon-button fusionTooltip="extraLarge" [color]="color" [iconName]="iconName" [variant]="variant" [disabled]="disabled" [loading]="loading" size="extraLarge"></fusion-icon-button>
</div>`
});

export const Sizes = {
    render: ButtonSizesTemplate,
    args: {variant: 'outlined'}
};
