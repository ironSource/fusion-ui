import {Meta, StoryObj} from '@storybook/angular';
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

const commonTemplate = `<fusion-button
class="{{class_size}} {{class_theme}}"
[class.fu-icon-right]="class_icon_right"
[class.transparent]="class_transparent"
[class.ghost]="class_ghost"
[icon]="icon"
[disabled]="disabled"
[loading]="loading"
[link]="link">
Button
</fusion-button>`;
const iconOnlyTemplate = `<fusion-button
class="{{class_size}} {{class_theme}}"
[class.fu-icon-right]="class_icon_right"
[class.transparent]="class_transparent"
[icon]="icon"
[disabled]="disabled"
[loading]="loading"
[link]="link"></fusion-button>`;

type Story = StoryObj<ButtonComponent>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: commonTemplate
    })
};

export const Loading: Story = {
    render: args => ({
        props: {...args, loading: true},
        template: commonTemplate
    }),
    parameters: {
        docs: {
            description: {
                story: 'Some Loading story **markdown** example'
            }
        }
    }
};

export const Disabled: Story = {
    render: args => ({
        props: {...args, disabled: true},
        template: commonTemplate
    }),
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

export const SizeSmall: Story = {
    render: args => ({
        props: {...args, class_size: 'small'},
        template: commonTemplate
    }),
    parameters: {
        /*
            docs: {
                description: {
                    story: `SizeSmall description here [See on Stackblitz](https://stackblitz.com/edit/angular-uhtzkd)`
                }
            },
        */
        docs: {
            source: {
                code: `<fusion-button class="small">Button</fusion-button>`,
                language: 'html'
            }
        }
    }
};

export const SizeMedium: Story = {
    render: args => ({
        props: {...args},
        template: commonTemplate
    })
};

export const SizeLarge: Story = {
    render: args => ({
        props: {...args, class_size: 'large'},
        template: commonTemplate
    })
};

export const IconLeft: Story = {
    render: args => ({
        props: {...args, icon: 'frame'},
        template: commonTemplate
    })
};

export const IconRight: Story = {
    render: args => ({
        props: {...args, icon: 'frame', class_icon_right: true, button_label: 'Button'},
        template: commonTemplate
    })
};

export const IconOnly: Story = {
    render: args => ({
        props: {...args, icon: 'frame'},
        template: iconOnlyTemplate
    })
};

export const ThemePrimary: Story = {
    render: args => ({
        props: {...args},
        template: commonTemplate
    })
};

export const ThemeSecondary: Story = {
    render: args => ({
        props: {...args, class_theme: 'secondary'},
        template: commonTemplate
    })
};

export const ThemeThird: Story = {
    render: args => ({
        props: {...args, class_theme: 'third'},
        template: commonTemplate
    })
};

export const ThemeDanger: Story = {
    render: args => ({
        props: {...args, class_theme: 'danger'},
        template: commonTemplate
    })
};

export const VariantSolid: Story = {
    render: args => ({
        props: {...args},
        template: commonTemplate
    })
};

export const VariantBorder: Story = {
    render: args => ({
        props: {...args, class_transparent: true},
        template: commonTemplate
    })
};

export const VariantGhost: Story = {
    render: args => ({
        props: {...args, class_ghost: true, class_transparent: true},
        template: commonTemplate
    }),
    parameters: {backgrounds: {default: 'dark'}}
};

export const VariantLink: Story = {
    render: args => ({
        props: {...args, link: true},
        template: commonTemplate
    })
};
