import {Story, Meta} from '@storybook/angular';
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
const checkedFormControl = new FormControl(true);

export default {
    title: 'Components/Inputs/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
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
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5459%3A101310'
        }
    },
    args: {
        label: checkboxLabel
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
        flag: {
            type: 'string',
            defaultValue: null,
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
        checkedFormControl: {
            control: false
        }
    }
} as Meta<CheckboxComponent>;

const CheckboxTemplate: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    props: {...args},
    template: `<fusion-checkbox [label]="label"
 [icon]="icon"
 [flag]="flag"
 [isDisabled]="isDisabled"
 [isIndeterminate]="isIndeterminate"
 [backgroundColor]="backgroundColor"
 [formControl]="checkedFormControl"
></fusion-checkbox>`
});

export const Default = CheckboxTemplate.bind({});

export const Checked = CheckboxTemplate.bind({});
Checked.args = {
    checkedFormControl: checkedFormControl
};

export const Indeterminate = CheckboxTemplate.bind({});
Indeterminate.args = {
    isIndeterminate: true
};

export const Disabled = CheckboxTemplate.bind({});
Disabled.args = {
    isDisabled: true,
    isIndeterminate: true
};

export const WithIcon = CheckboxTemplate.bind({});
WithIcon.args = {
    icon: 'frame'
};

export const WithFlag = CheckboxTemplate.bind({});
WithFlag.args = {
    flag: 'us'
};

export const WithCustomBackgroundColor = CheckboxTemplate.bind({});
WithCustomBackgroundColor.args = {
    backgroundColor: '#459FCA',
    checkedFormControl: checkedFormControl
};
