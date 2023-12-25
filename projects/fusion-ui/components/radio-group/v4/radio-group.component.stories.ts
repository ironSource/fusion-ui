import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {RadioGroupComponent} from './radio-group.component';
import {RadioGroupOptions} from '@ironsource/fusion-ui/components/radio-group';
import {RadioComponent} from '@ironsource/fusion-ui/components/radio/v4';

const radioOptions: RadioGroupOptions[] = [
    {
        id: 1,
        label: 'Option 1'
    },
    {
        id: 2,
        label: 'Option 2'
    },
    {
        id: 3,
        label: 'Option 3'
    },
    {
        id: 4,
        label: 'Option 4'
    }
];
const radioOptionsWithDisabled: RadioGroupOptions[] = [
    {
        id: 1,
        label: 'Option 1'
    },
    {
        id: 2,
        label: 'Option 2'
    },
    {
        id: 3,
        label: 'Option 3',
        disabled: true
    },
    {
        id: 4,
        label: 'Option 4'
    }
];
const radioOptionsWithSelectedDisabled: RadioGroupOptions[] = [
    {
        id: 1,
        label: 'Option 1'
    },
    {
        id: 2,
        label: 'Option 2',
        disabled: true
    },
    {
        id: 3,
        label: 'Option 3'
    },
    {
        id: 4,
        label: 'Option 4'
    }
];
const formControlSelected = new FormControl(radioOptions[1]);

export default {
    title: 'V4/Components/Inputs/RadioButton/Group',
    component: RadioGroupComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RadioComponent,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                FlagModule,
                TooltipModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        options: radioOptions,
        name: 'radioGroupName',
        disabled: false,
        inline: false,
        formControl: formControlSelected
    },
    argTypes: {
        name: {
            control: 'text'
        },
        formControl: {
            control: false
        }
    }
} as Meta<RadioGroupComponent>;

type Story = StoryObj<RadioGroupComponent>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
<fusion-radio-group
    [options]="options"
    [name]="name"
    [disabled]="disabled"
    [inline]="inline"
    [formControl]="formControl"
></fusion-radio-group>
`
    })
};

export const Horizontal: Story = {
    render: args => ({
        props: {...args},
        template: `
<fusion-radio-group
    [options]="options"
    name="horizontalGroup"
    [disabled]="disabled"
    [inline]="true"
    [formControl]="formControl"
></fusion-radio-group>
`
    })
};

export const OneItemDisabled: Story = {
    render: args => ({
        props: {...args, options: radioOptionsWithDisabled},
        template: `
<fusion-radio-group
    [options]="options"
    name="oneDisabledGroup"
    [disabled]="disabled"
    [inline]="true"
    [formControl]="formControl"
></fusion-radio-group>
`
    })
};

export const OneItemSelectedDisabled: Story = {
    render: args => ({
        props: {...args, options: radioOptionsWithSelectedDisabled, formControl: new FormControl(radioOptionsWithSelectedDisabled[1])},
        template: `
<fusion-radio-group
    [options]="options"
    name="oneSelectedDisabledGroup"
    [disabled]="disabled"
    [inline]="true"
    [formControl]="formControl"
></fusion-radio-group>
`
    })
};
