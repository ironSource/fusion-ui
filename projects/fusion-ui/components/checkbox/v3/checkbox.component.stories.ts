import {StoryObj, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

import {CheckboxComponent} from './checkbox.component';
import {CheckboxModule} from './checkbox.module';

const checkboxLabel = 'Hello world';
const formControlChecked = new FormControl(true);
const formControlUnchecked = new FormControl(false);

const commonTemplate = `<fusion-checkbox [label]="label"
 [icon]="icon"
 [flag]="flag"
 [isDisabled]="isDisabled"
 [isIndeterminate]="isIndeterminate"
 [backgroundColor]="backgroundColor"
 [formControl]="formControl"
></fusion-checkbox>`;

export default {
    title: 'V3/Components/Inputs/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                FlagModule,
                TooltipModule,
                CheckboxModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5459%3A101310'
        },
        docs: {
            description: {
                component: `Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.`
            }
        }
    },
    args: {
        label: checkboxLabel
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
        flag: {
            type: 'string',
            options: [null, 'us', 'il', 'ua'],
            control: {
                type: 'select',
                labels: {
                    null: 'no flag',
                    us: 'US',
                    il: 'IL',
                    ua: 'UA'
                }
            }
        },
        id: {
            control: false
        },
        class: {
            control: false
        },
        backgroundColor: {
            control: {
                type: 'color'
            }
        },
        formControl: {
            control: false
        }
    }
} as Meta<CheckboxComponent>;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {};

export const Checked: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: formControlChecked
        },
        template: commonTemplate
    })
};

export const Indeterminate = {
    render: args => ({
        props: {
            ...args,
            isIndeterminate: true,
            formControl: formControlUnchecked
        },
        template: commonTemplate
    })
};

export const Disabled = {
    render: args => ({
        props: {
            ...args,
            isDisabled: true,
            isIndeterminate: true,
            formControl: formControlUnchecked
        },
        template: commonTemplate
    })
};

export const WithIcon = {
    render: args => ({
        props: {
            ...args,
            icon: 'frame',
            formControl: formControlUnchecked
        },
        template: commonTemplate
    })
};

export const WithFlag = {
    render: args => ({
        props: {
            ...args,
            flag: 'us',
            formControl: formControlUnchecked
        },
        template: commonTemplate
    })
};

export const CustomColor = {
    render: args => ({
        props: {
            ...args,
            backgroundColor: '#459FCA',
            formControl: formControlChecked
        },
        template: commonTemplate
    })
};
