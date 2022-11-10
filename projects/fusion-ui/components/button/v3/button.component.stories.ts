import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonLoadingModule} from '@ironsource/fusion-ui/components/button/v3/components/button-loading/button-loading.module';
import {ButtonComponent} from './button.component';

export default {
    title: 'Components/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ButtonLoadingModule]
        })
    ],
    argTypes: {
        icon: {
            type: 'string',
            defaultValue: '',
            options: ['', 'frame'],
            control: {type: 'select'}
        },
        disabled: {
            control: 'boolean',
            defaultValue: false
        },
        loading: {
            control: 'boolean',
            defaultValue: false
        },
        link: {
            control: 'boolean',
            defaultValue: false
        }
    }
} as Meta<ButtonComponent>;

const ButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button [icon]="icon" [disabled]="disabled" [loading]="loading" [link]="link">Button</fusion-button>`
});

export const Default = ButtonTemplate.bind({});
export const Loading = ButtonTemplate.bind({});
Loading.args = {loading: true};
export const Disabled = ButtonTemplate.bind({});
Disabled.args = {disabled: true};

export const SizeSmall = ButtonTemplate.bind({});
export const SizeMedium = ButtonTemplate.bind({});
export const SizeLarge = ButtonTemplate.bind({});

export const ThemePrimary = ButtonTemplate.bind({});
export const ThemeSecondary = ButtonTemplate.bind({});
export const ThemeThird = ButtonTemplate.bind({});
export const ThemeDanger = ButtonTemplate.bind({});

export const VariantSolid = ButtonTemplate.bind({});
export const VariantBorder = ButtonTemplate.bind({});
export const VariantBorderless = ButtonTemplate.bind({});
export const VariantGhost = ButtonTemplate.bind({});
export const VariantLink = ButtonTemplate.bind({});
export const VariantColorized = ButtonTemplate.bind({});

export const LeftIcon = ButtonTemplate.bind({});
export const RightIcon = ButtonTemplate.bind({});

export const Strong = ButtonTemplate.bind({});
