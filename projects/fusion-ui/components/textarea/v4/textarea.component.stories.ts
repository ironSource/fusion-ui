import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextareaV4Component} from '@ironsource/fusion-ui/components/textarea/v4/textarea-v4.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

// region constants
const formControlNoValue = new FormControl();
const formControlWithValue = new FormControl('Lorem ipsum dolor sit amet.');
const formControlDisabledWithValue = new FormControl({
    value: 'Lorem ipsum dolor sit amet.',
    disabled: true
});

const baseTemplate = `
<fusion-textarea
        placeholder="Placeholder text"
        [isDisabled]="isDisabled"
        [readonly]="readonly"
        [resize]="resize"
        [formControl]="formControl"
        [maxLength]="maxLength"
        [showLengthCounter]="showLengthCounter"
        [labelText]="labelText"
        [labelRequired]="labelRequired"
        [labelIcon]="labelIcon"
        [labelTooltipText]="labelTooltipText"
        [helperText]="helperText"
        [helperIcon]="helperIcon"
        [variant]="variant"
    ></fusion-textarea>
`;
// endregion

export default {
    title: 'V4/Components/Inputs/Textarea',
    component: TextareaV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="width: 220px; height: 100px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    args: {
        placeholder: 'Placeholder text',
        formControl: formControlNoValue
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<TextareaV4Component>;

type Story = StoryObj<TextareaV4Component>;

export const Basic: Story = {};
export const Disabled: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: formControlDisabledWithValue
        },
        template: baseTemplate
    })
};
export const Resizable: Story = {
    render: args => ({
        props: {
            ...args,
            resize: true,
            formControl: formControlNoValue
        },
        template: baseTemplate
    })
};
export const WithMaxLength: Story = {
    render: args => ({
        props: {
            ...args,
            maxLength: 50,
            showLengthCounter: true,
            formControl: formControlNoValue
        },
        template: baseTemplate
    })
};
export const WithLabel: Story = {
    render: args => ({
        props: {
            ...args,
            labelText: 'Label',
            labelRequired: true,
            labelIcon: 'ph/question',
            labelTooltipText: 'Tooltip text',
            formControl: formControlNoValue
        },
        template: baseTemplate
    })
};
export const WithHelper: Story = {
    render: args => ({
        props: {
            ...args,
            helperText: 'Helper text',
            helperIcon: 'ph/fill/info',
            formControl: formControlNoValue
        },
        template: baseTemplate
    })
};
export const WithLabelAndHelper: Story = {
    render: args => ({
        props: {
            ...args,
            labelText: 'Label',
            labelIcon: 'ph/question',
            labelTooltipText: 'Tooltip text',
            helperText: 'Helper text',
            helperIcon: 'ph/fill/info',
            formControl: formControlNoValue
        },
        template: baseTemplate
    })
};
