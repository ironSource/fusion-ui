import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonLoadingModule} from '@ironsource/fusion-ui/components/button/v3/components/button-loading/button-loading.module';
import {ButtonComponent} from './button.component';

const sizes = ['', 'small', 'large'];
const themes = ['primary', 'secondary', 'third', 'danger'];

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
            control: {
                type: 'select',
                labels: {
                    '': 'no icon',
                    frame: 'frame'
                }
            }
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
        },
        class_size: {
            type: 'string',
            defaultValue: '',
            options: sizes,
            control: {
                type: 'select',
                labels: {
                    '': 'medium (default)',
                    small: 'small',
                    large: 'large'
                }
            }
        },
        class_theme: {
            type: 'string',
            defaultValue: '',
            options: themes,
            control: {
                type: 'select',
                labels: {
                    primary: 'primary (default)',
                    secondary: 'secondary',
                    third: 'third',
                    danger: 'danger'
                }
            }
        },
        class_transparent: {
            control: 'boolean',
            defaultValue: false
        },
        class_ghost: {
            control: 'boolean',
            defaultValue: false
        },
        class_icon_right: {
            control: 'boolean',
            defaultValue: false,
            if: {arg: 'icon', neq: ''}
        }
    }
} as Meta<ButtonComponent>;

const ButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button
class="{{class_size}} {{class_theme}}"
[class.fu-icon-right]="class_icon_right"
[class.transparent]="class_transparent"
[ngClass]="{transparent: class_ghost, secondary: class_ghost, dark: class_ghost}"
[icon]="icon"
[disabled]="disabled"
[loading]="loading"
[link]="link">
Button
</fusion-button>`
});

export const Default = ButtonTemplate.bind({});
export const Loading = ButtonTemplate.bind({});
Loading.args = {loading: true};
export const Disabled = ButtonTemplate.bind({});
Disabled.args = {disabled: true};

export const SizeSmall = ButtonTemplate.bind({});
SizeSmall.args = {class_size: 'small'};
export const SizeMedium = ButtonTemplate.bind({});
export const SizeLarge = ButtonTemplate.bind({});
SizeLarge.args = {class_size: 'large'};

export const Icon = ButtonTemplate.bind({});
Icon.args = {icon: 'frame'};
export const IconRight = ButtonTemplate.bind({});
IconRight.args = {icon: 'frame', class_icon_right: true};

export const ThemePrimary = ButtonTemplate.bind({});
export const ThemeSecondary = ButtonTemplate.bind({});
ThemeSecondary.args = {
    class_theme: 'secondary'
};
export const ThemeThird = ButtonTemplate.bind({});
ThemeThird.args = {
    class_theme: 'third'
};
export const ThemeDanger = ButtonTemplate.bind({});
ThemeDanger.args = {
    class_theme: 'danger'
};

export const VariantSolid = ButtonTemplate.bind({});
export const VariantBorder = ButtonTemplate.bind({});
VariantBorder.args = {class_transparent: true};
export const VariantGhost = ButtonTemplate.bind({});
VariantGhost.parameters = {
    backgrounds: {default: 'dark'}
};
VariantGhost.args = {
    class_ghost: true
};
export const VariantLink = ButtonTemplate.bind({});
VariantLink.args = {link: true};
