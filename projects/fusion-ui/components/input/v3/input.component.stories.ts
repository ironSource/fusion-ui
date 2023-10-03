import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

import {InputComponent} from './input.component';
import {TooltipModule} from '../../tooltip/v3/tooltip.module';
import {InputConfiguration} from '../common/base/input-entities';
import {InputModule} from '@ironsource/fusion-ui/components/input';

// region
const defaultInputConfig: InputConfiguration = {
    placeholder: 'Placeholder text'
};
const inputFormControl = new FormControl();
const inputFormControlWithValue = new FormControl('Hello world!');
const inputFormControlPassword = new FormControl('qwerty');
// endregion

export default {
    title: 'Components/Inputs/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TooltipModule,
                InputModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5224%3A96233'
        }
    },
    args: {
        configuration: defaultInputConfig
    },
    argTypes: {
        formControl: {
            control: false
        },
        configuration: {
            control: 'object'
        }
    }
} as Meta<InputComponent>;

const InputTemplate: StoryFn<InputComponent> = (args: InputComponent) => ({
    props: {...args},
    template: `<div style="width: 290px;"><fusion-input [configuration]="configuration" [formControl]="formControl"></fusion-input></div>`
});

export const Default = {
    render: InputTemplate,

    args: {
        formControl: inputFormControl
    }
};

export const Small = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{options: {size: 'small'}}},
        formControl: inputFormControl
    }
};

export const Disabled = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{disabled: true}},
        formControl: inputFormControlWithValue
    }
};

export const ViewOnly = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{readonly: true}},
        formControl: inputFormControlWithValue
    }
};

export const HelpText = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{helperText: 'Help me please!'}},
        formControl: inputFormControlWithValue
    }
};

export const ErrorText = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{error: 'This is an error!'}},
        formControl: inputFormControlWithValue
    }
};

export const IconLeft = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{icon: {iconData: 'frame', iconPos: 'left'}}},
        formControl: inputFormControlWithValue
    }
};

export const IconRight = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{icon: {iconData: 'frame', iconPos: 'right'}}},
        formControl: inputFormControlWithValue
    }
};

export const IconLeftAndRight = {
    render: InputTemplate,

    args: {
        configuration: {
            ...defaultInputConfig,
            ...{
                icon: [
                    {iconData: 'frame', iconPos: 'left'},
                    {iconData: 'frame', iconPos: 'right'}
                ]
            }
        },
        formControl: inputFormControlWithValue
    }
};

export const TypePassword = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{type: 'password'}},
        formControl: inputFormControlPassword
    }
};

export const TypeNumber = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{type: 'number'}},
        formControl: inputFormControl
    }
};

const InputTimeTemplate: StoryFn<InputComponent> = (args: InputComponent) => ({
    props: {...args},
    template: `<fusion-input [configuration]="configuration" [formControl]="formControl"></fusion-input>`
});

export const TypeTime = {
    render: InputTimeTemplate,

    args: {
        configuration: {type: 'time', options: {width: '82px'}},
        formControl: inputFormControl
    }
};

export const MaxLength = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{maxlength: 25}},
        formControl: inputFormControl
    }
};

export const Sanitation = {
    render: InputTemplate,

    args: {
        configuration: {...defaultInputConfig, ...{sanitationRegex: '[a-z]'}},
        formControl: inputFormControl
    }
};
