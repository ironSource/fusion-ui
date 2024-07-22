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
const formControlPassword = new FormControl('qwerty123456');

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
        labelText: 'Label',
        labelRequired: true,
        labelIcon: 'ph/question',
        labelTooltipText: 'Tooltip text'
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

export const Basic: Story = {};

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
        placeholder="Medium (default)"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="mediumTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Large"
        size="large"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="largeTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Extra Large"
        size="xlarge"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="XLTestId"
      ></fusion-input>
</div>
`
    })
};

export const Disabled: Story = {
    render: args => ({
        props: {
            ...args,
            formControlDisabled: formControlDisabled
        },
        template: `
<fusion-input
    [labelText]="labelText"
    [labelRequired]="labelRequired"
    [labelIcon]="labelIcon"
    [labelTooltipText]="labelTooltipText"
    [formControl]="formControlDisabled"
    [placeholder]="placeholder"
    [size]="size"
    [type]="type"
    [testId]="testId"
  ></fusion-input>
`
    })
};

export const Variant: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: formControl
        },
        template: `
<div style="display: flex; flex-direction: column; gap: 16px">
    <fusion-input
        [formControl]="formControl"
        placeholder="Error"
        variant="error"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="errorTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Success"
        variant="success"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="successTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Warning"
        variant="warning"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="warningTestId"
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

export const HelperText: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: formControl,
            helperText: 'Helper text'
        },
        template: `
<div style="display: flex; flex-direction: column; gap: 16px">
    <fusion-input
        [formControl]="formControl"
        placeholder="Default"
        [helperText]="helperText"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="testId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Error"
        variant="error"
        [helperText]="helperText"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="errorTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Success"
        variant="success"
        [helperText]="helperText"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="successTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Warning"
        variant="warning"
        [helperText]="helperText"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="warningTestId"
      ></fusion-input>
</div>
`
    })
};

export const HelperWithIcon: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: formControl,
            helperText: 'Helper text'
        },
        template: `
<div style="display: flex; flex-direction: column; gap: 16px">
    <fusion-input
        [labelText]="labelText"
        [labelRequired]="labelRequired"
        [labelIcon]="labelIcon"
        [labelTooltipText]="labelTooltipText"
        [formControl]="formControl"
        placeholder="Default"
        [helperText]="helperText"
        [helperIcon]="'ph/fill/info'"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="'defaultTestId'"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Error"
        variant="error"
        [helperText]="helperText"
        [helperIcon]="'ph/fill/warning-octagon'"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="errorTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Success"
        variant="success"
        [helperText]="helperText"
        [helperIcon]="'ph/fill/check-circle'"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="successTestId"
      ></fusion-input>
    <fusion-input
        [formControl]="formControl"
        placeholder="Warning"
        variant="warning"
        [helperText]="helperText"
        [helperIcon]="'ph/fill/warning'"
        [type]="type"
        [step]="step"
        [hideNumberArrows]="hideNumberArrows"
        [min]="min"
        [max]="max"
        [maxLength]="maxLength"
        [testId]="warningTestId"
      ></fusion-input>
</div>
`
    })
};

export const NoLabelOrHelperText: Story = {
    render: args => ({
        props: {
            ...args,
            labelText: null,
            helperText: null
        },
        template: `
<fusion-input
    [labelText]="labelText"
    [labelRequired]="labelRequired"
    [labelIcon]="labelIcon"
    [labelTooltipText]="labelTooltipText"
    [helperText]="helperText"
    [helperIcon]="'ph/fill/info'"
    [formControl]="formControlDisabled"
    [placeholder]="placeholder"
    [size]="size"
    [type]="type"
    [testId]="testId"
  ></fusion-input>
`
    })
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

export const Password: Story = {
    render: args => ({
        props: {
            ...args,
            type: 'password',
            formControl: formControlPassword
        },
        template: `
<fusion-input
    [labelText]="labelText"
    [labelRequired]="labelRequired"
    [labelIcon]="labelIcon"
    [labelTooltipText]="labelTooltipText"
    [formControl]="formControl"
    [type]="type"
    [testId]="testId"
  ></fusion-input>
`
    })
};
