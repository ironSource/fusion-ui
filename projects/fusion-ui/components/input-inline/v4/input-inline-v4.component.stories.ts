import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {InputInlineV4Component} from './input-inline-v4.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline';

const BASE_TEMPLATE = `
<fusion-input-inline
    [type]="type"
    [formControl]="formControl"
    [currencyPipeParameters]="currencyPipeParameters"
></fusion-input-inline>`;

export default {
    title: 'V4/Components/Inputs/TextField-Inline',
    component: InputInlineV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule]
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
            formControl: new FormControl('Abdullah')
        },
        template: BASE_TEMPLATE
    })
};

export const Numeric: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(135),
            type: InlineInputType.Number
        },
        template: BASE_TEMPLATE
    })
};

export const Currency: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(34.99),
            type: InlineInputType.Currency
        },
        template: BASE_TEMPLATE
    })
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
