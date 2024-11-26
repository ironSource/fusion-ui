import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4/checkbox.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

const checkboxLabel = 'Label';
const formControlChecked = new FormControl(true);
const formControlUnchecked = new FormControl(false);

export default {
    title: 'V4/Components/Inputs/Checkbox',
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
        label: checkboxLabel,
        disabled: false,
        isIndeterminate: false,
        formControl: formControlUnchecked
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<CheckboxComponent>;

type Story = StoryObj<CheckboxComponent>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
    <fusion-checkbox
        [label]="label"
        [disabled]="disabled"
        [isIndeterminate]="isIndeterminate"
        [formControl]="formControl"
    ></fusion-checkbox>
`
    })
};

export const WithCustomColor: Story = {
    render: args => ({
        props: {
            ...args,
            backgroundColor: '#646464',
            formControlChecked: formControlChecked
        },
        template: `
    <fusion-checkbox
        [label]="label"
        [disabled]="disabled"
        [isIndeterminate]="isIndeterminate"
        [backgroundColor]="backgroundColor"
        [formControl]="formControlChecked"
    ></fusion-checkbox>
`
    })
};

export const States: Story = {
    render: args => ({
        props: {
            ...args,
            formControlChecked: formControlChecked
        },
        template: `<div style="max-width: 700px; display: flex; align-items: center; gap: 16px">
    <fusion-checkbox
        label="Regular"
        [formControl]="formControl"
    ></fusion-checkbox>

    <fusion-checkbox
        label="Selected"
        [formControl]="formControlChecked"
    ></fusion-checkbox>

    <fusion-checkbox
        label="Mixed"
        isIndeterminate="true"
        [formControl]="formControl"
    ></fusion-checkbox>

    <fusion-checkbox
        label="Disabled"
        [disabled]="true"
        [formControl]="formControl"
    ></fusion-checkbox>

    <fusion-checkbox
        label="Disabled checked"
        [disabled]="true"
        [formControl]="formControlChecked"
    ></fusion-checkbox>

    <fusion-checkbox
        label="Disabled Mixed"
        [isIndeterminate]="true"
        [disabled]="true"
        [formControl]="formControl"
    ></fusion-checkbox>
</div>`
    })
};

export const InItemsList: Story = {
    render: args => ({
        props: {
            ...args,
            formControlChecked: formControlChecked
        },
        template: `<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <div class="font-v4-heading-4">Inbox view option</div>
    <fusion-checkbox
        label="Inbox updates"
        [disabled]="disabled"
        [isIndeterminate]="isIndeterminate"
        [formControl]="formControlChecked"
    ></fusion-checkbox>

    <fusion-checkbox
        label="I was mentioned"
        [disabled]="disabled"
        [isIndeterminate]="isIndeterminate"
        [formControl]="formControlChecked"
    ></fusion-checkbox>

    <fusion-checkbox
        label="All updates"
        [disabled]="disabled"
        [isIndeterminate]="isIndeterminate"
        [formControl]="formControl"
    ></fusion-checkbox>
</div>`
    })
};
