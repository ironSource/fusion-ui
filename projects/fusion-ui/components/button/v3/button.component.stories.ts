import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonLoadingModule} from '@ironsource/fusion-ui/components/button/v3/components/button-loading/button-loading.module';
import {ButtonComponent} from './button.component';

const sizes = [null, 'small', 'large'];
const themes = ['primary', 'secondary', 'third', 'danger'];

export default {
    title: 'Components/Buttons',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ButtonLoadingModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5637%3A97150'
        },
        docs: {
            description: {
                component:
                    'Buttons are calls-to-action used to prompt users. They encourage users to interact with us in multiple ways throughout our galaxy, based on what the label of the button indicates. Buttons are clickable elements with label text that describe the action that will happen when the users interact with it.'
            }
        }
    },
    argTypes: {
        icon: {
            type: 'string',
            defaultValue: '',
            options: [null, 'frame'],
            control: {
                type: 'select',
                labels: {
                    null: 'no icon',
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
                    null: 'medium (default)',
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
            if: {
                arg: 'icon',
                neq: ''
            }
        },
        onclick: {action: 'clicked'}
    }
} as Meta<ButtonComponent>;

const ButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button
class="{{class_size}} {{class_theme}}"
[class.fu-icon-right]="class_icon_right"
[class.transparent]="class_transparent"
[icon]="icon"
[disabled]="disabled"
[loading]="loading"
[link]="link">
Button
</fusion-button>`
});

const ButtonIconOnlyTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button
class="{{class_size}} {{class_theme}}"
[class.fu-icon-right]="class_icon_right"
[class.transparent]="class_transparent"
[icon]="icon"
[disabled]="disabled"
[loading]="loading"
[link]="link"></fusion-button>`
});

export const Default = ButtonTemplate.bind({});
export const Loading = ButtonTemplate.bind({});
Loading.args = {loading: true};
Loading.parameters = {
    docs: {
        description: {
            story: 'Some Loading story **markdown**'
        }
    }
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {disabled: true};
Disabled.parameters = {
    docs: {
        description: {
            story: 'Some Disabled story **markdown**'
        },
        source: {
            code: `<fusion-button [disabled]="false"></fusion-button>`,
            language: 'html'
        }
    }
};

// region Sizes
export const SizeSmall = ButtonTemplate.bind({});
SizeSmall.args = {class_size: 'small'};
SizeSmall.parameters = {
    docs: {
        description: {
            story: `SizeSmall description here [See on Stackblitz](https://stackblitz.com/edit/angular-uhtzkd)`
        }
    },
    source: {
        code: `<fusion-button class="small"></fusion-button>`,
        language: 'html'
    }
};

export const SizeMedium = ButtonTemplate.bind({});
export const SizeLarge = ButtonTemplate.bind({});
SizeLarge.args = {class_size: 'large'};
// endregion

// region Icon
export const IconLeft = ButtonTemplate.bind({});
IconLeft.args = {icon: 'frame'};
export const IconRight = ButtonTemplate.bind({});
IconRight.args = {icon: 'frame', class_icon_right: true, button_label: 'Button'};
// endregion

export const IconOnly = ButtonIconOnlyTemplate.bind({});
IconOnly.args = {icon: 'frame'};
// region Theme
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
// endregion

// region Variant
export const VariantSolid = ButtonTemplate.bind({});
export const VariantBorder = ButtonTemplate.bind({});
VariantBorder.args = {class_transparent: true};
export const VariantGhost = ButtonTemplate.bind({});
VariantGhost.parameters = {backgrounds: {default: 'dark'}};
VariantGhost.args = {class_ghost: true, class_transparent: true};
export const VariantLink = ButtonTemplate.bind({});
VariantLink.args = {link: true};
// endregion
