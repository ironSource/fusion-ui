import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonLoadingModule} from '@ironsource/fusion-ui/components/button/v3/components/button-loading/button-loading.module';
import {ButtonComponent} from './button.component';
import {ButtonModule} from './button.module';

const sizes = [null, 'small', 'large'];
const themes = ['primary', 'secondary', 'third', 'danger'];

export default {
    title: 'V3/Components/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ButtonModule, ButtonLoadingModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        stackblitzStory: {
            showButton: false
        },
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
            control: 'boolean'
        },
        loading: {
            control: 'boolean'
        },
        link: {
            control: 'boolean'
        },
        class_size: {
            type: 'string',
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
            control: 'boolean'
        },
        class_ghost: {
            control: 'boolean'
        },
        class_icon_right: {
            control: 'boolean',
            if: {
                arg: 'icon',
                neq: ''
            }
        },
        onclick: {action: 'clicked'}
    }
} as Meta<ButtonComponent>;

const ButtonTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button
class="{{class_size}} {{class_theme}}"
[class.fu-icon-right]="class_icon_right"
[class.transparent]="class_transparent"
[class.ghost]="class_ghost"
[icon]="icon"
[disabled]="disabled"
[loading]="loading"
[link]="link">
Button
</fusion-button>`
});

const ButtonIconOnlyTemplate: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
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

export const Default = {
    render: ButtonTemplate
};

export const Loading = {
    render: ButtonTemplate,
    args: {loading: true},

    parameters: {
        docs: {
            description: {
                story: 'Some Loading story **markdown**'
            }
        }
    }
};

export const Disabled = {
    render: ButtonTemplate,
    args: {disabled: true},

    parameters: {
        docs: {
            description: {
                story: 'Some Disabled story **markdown**'
            },
            source: {
                code: `<fusion-button [disabled]="false"></fusion-button>`,
                language: 'html'
            }
        }
    }
};

export const SizeSmall = {
    render: ButtonTemplate,
    args: {class_size: 'small'},

    parameters: {
        docs: {
            description: {
                story: `SizeSmall description here [See on Stackblitz](https://stackblitz.com/edit/angular-uhtzkd)`
            }
        },
        source: {
            code: `<fusion-button class="small"></fusion-button>`,
            language: 'html'
        }
    }
};

export const SizeMedium = {
    render: ButtonTemplate
};

export const SizeLarge = {
    render: ButtonTemplate,
    args: {class_size: 'large'}
};

export const IconLeft = {
    render: ButtonTemplate,
    args: {icon: 'frame'}
};

export const IconRight = {
    render: ButtonTemplate,
    args: {icon: 'frame', class_icon_right: true, button_label: 'Button'}
};

export const IconOnly = {
    render: ButtonIconOnlyTemplate,
    args: {icon: 'frame'}
};

export const ThemePrimary = {
    render: ButtonTemplate
};

export const ThemeSecondary = {
    render: ButtonTemplate,

    args: {
        class_theme: 'secondary'
    }
};

export const ThemeThird = {
    render: ButtonTemplate,

    args: {
        class_theme: 'third'
    }
};

export const ThemeDanger = {
    render: ButtonTemplate,

    args: {
        class_theme: 'danger'
    }
};

export const VariantSolid = {
    render: ButtonTemplate
};

export const VariantBorder = {
    render: ButtonTemplate,
    args: {class_transparent: true}
};

export const VariantGhost = {
    render: ButtonTemplate,
    parameters: {backgrounds: {default: 'dark'}},
    args: {class_ghost: true, class_transparent: true}
};

export const VariantLink = {
    render: ButtonTemplate,
    args: {link: true}
};
