import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputV4Component} from './input-v4.component';

const formControl = new FormControl();
const formControlDisabled = new FormControl({value: 'Disabled', disabled: true});

export default {
    title: 'V4/Components/Inputs/TextField',
    component: InputV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="width: 220px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***InputComponent***.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Placeholder text',
        size: 'medium',
        formControl: formControl,
        viewOnly: false
    },
    argTypes: {
        formControl: {
            control: {
                type: null
            }
        }
    }
} as Meta<InputV4Component>;

type Story = StoryObj<InputV4Component>;

export const Default: Story = {};

export const Disabled: Story = {
    render: args => ({
        props: {
            ...args,
            formControlDisabled: formControlDisabled
        },
        template: `
<fusion-input
    [formControl]="formControlDisabled"
    [placeholder]="placeholder"
    [size]="size"
    [viewOnly]="viewOnly"
    [type]="type"
  ></fusion-input>
`
    })
};

export const Size: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: formControl
        },
        template: `
<div style="display: flex; flex-direction: column; gap: 16px">
    <fusion-input
        [formControl]="formControl"
        placeholder="Small"
        size="small"
        [viewOnly]="viewOnly"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Medium (default)"
        [viewOnly]="viewOnly"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Large"
        size="large"
        [viewOnly]="viewOnly"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
      ></fusion-input>
</div>
`
    })
};

export const WithIcon: Story = {
    args: {
        startIcon: 'ph/corners-out',
        endIcon: 'ph/caret-down'
    }
};

export const Adorned: Story = {
    args: {
        prefix: '$',
        suffix: '%'
    }
};

export const WithApplyButton: Story = {
    args: {
        showApply: true
    }
};

export const WithClearButton: Story = {
    args: {
        showClear: true
    }
};

export const Counter: Story = {
    args: {
        placeholder: 'Enter number',
        type: 'number',
        hideNumberArrows: false
    }
};

export const InlineValidation: Story = {
    args: {
        inlineErrorText: 'Error message'
    }
};

export const WithLengthCounter: Story = {
    args: {
        showLengthCounter: true,
        maxLength: 15
    }
};
