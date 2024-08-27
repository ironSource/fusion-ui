import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline';
import {InputInlineV4Component} from './input-inline-v4.component';

const BASE_TEMPLATE = `
<fusion-input-inline
    [type]="type"
    [data]="formControl"
    [readOnly]="readOnly"
    [pending]="pending"
    [currencyPipeParameters]="currencyPipeParameters"
    (onSave)="onSave($event)"
    (onCancel)="onCancel($event)"
></fusion-input-inline>`;

export default {
    title: 'V4/Components/Inputs/TextField-Inline',
    component: InputInlineV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        }),
        componentWrapperDecorator(story => `<div style="width: 150px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<InputInlineV4Component>;

type Story = StoryObj<InputInlineV4Component>;

export const Basic: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl('Abdullah', [Validators.required, Validators.minLength(3)])
        },
        template: BASE_TEMPLATE
    })
};
Basic.parameters = {
    docs: {
        description: {
            story: `This example has input validations: **Required, Minimum length 3**`
        }
    }
};

export const Numeric: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(135, [Validators.required, Validators.min(100), Validators.max(200)]),
            type: InlineInputType.Number
        },
        template: BASE_TEMPLATE
    })
};
Numeric.parameters = {
    docs: {
        description: {
            story: `This example has input validations: **Required, Min 100, Max 200**`
        }
    }
};

export const Currency: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(34.99, [Validators.required]),
            type: InlineInputType.Currency
        },
        template: BASE_TEMPLATE
    })
};
Currency.parameters = {
    docs: {
        description: {
            story: `This example has input validations: **Required**`
        }
    }
};

export const Percent: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(5),
            type: InlineInputType.Percent
        },
        template: BASE_TEMPLATE
    })
};

export const Readonly: Story = {
    render: args => ({
        props: {
            ...args,
            readOnly: true,
            formControl: new FormControl('Abdullah')
        },
        template: BASE_TEMPLATE
    })
};

export const Disabled: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl({value: 'Abdullah', disabled: true})
        },
        template: BASE_TEMPLATE
    })
};

export const Pending: Story = {
    render: args => ({
        props: {
            ...args,
            pending: true,
            formControl: new FormControl('Abdullah')
        },
        template: BASE_TEMPLATE
    })
};
