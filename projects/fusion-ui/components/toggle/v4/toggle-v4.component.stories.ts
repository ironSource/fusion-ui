import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {ToggleV4Component as ToggleComponent} from './toggle-v4.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const formControlChecked = new FormControl(true);
const formControlCheckedDisabled = new FormControl({value: true, disabled: true});
const formControlUnchecked = new FormControl(false);

export default {
    title: 'V4/Components/Inputs/Switch (toggle)',
    component: ToggleComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
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
        formControl: formControlUnchecked,
        loading: false,
        disabled: false,
        color: 'primary',
        size: 'small'
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<ToggleComponent>;

type Story = StoryObj<ToggleComponent>;

export const Basic: Story = {
    render: args => ({
        props: {...args},
        template: `
<fusion-toggle     
    [startIcon]="startIcon" 
    [endIcon]="endIcon" 
    [labelText]="labelText"
    [labelHelpIcon]="labelHelpIcon" 
    [labelTooltipText]="labelTooltipText"    
    [helperText]="helperText"
    [helperIcon]="helperIcon"
    [helperVariant]="helperVariant"
    [loading]="loading" 
    [disabled]="disabled" 
    [size]="size" 
    [color]="color" 
    [formControl]="formControl"
 ></fusion-toggle>`
    })
};

export const Color: Story = {
    render: args => ({
        props: {
            ...args,
            formControlChecked: formControlChecked,
            formControlCheckedDisabled: formControlCheckedDisabled
        },
        template: `<div style="display: flex; gap: 32px">
    <fusion-toggle labelText="Primary" [loading]="loading" [disabled]="disabled" [size]="size" [formControl]="formControlChecked"></fusion-toggle>
    <fusion-toggle labelText="Test" [loading]="loading" [disabled]="disabled" [size]="size" color="test" [formControl]="formControlChecked"></fusion-toggle>
    <fusion-toggle labelText="Disabled" [loading]="loading" [size]="size" [formControl]="formControlCheckedDisabled"></fusion-toggle>
</div>`
    })
};

export const Loading: Story = {
    render: args => ({
        props: {...args, formControlChecked: formControlChecked},
        template: `<fusion-toggle labelText="Mark a pending state of switch." [loading]="true" [disabled]="disabled" [size]="size" [color]="color" [formControl]="formControlChecked"></fusion-toggle>`
    })
};

export const Size: Story = {
    render: args => ({
        props: {
            ...args,
            formControlChecked: formControlChecked,
            formControlCheckedDisabled: formControlCheckedDisabled
        },
        template: `<div style="display: flex; gap: 32px">
    <fusion-toggle labelText="Small (default)" [loading]="loading" [disabled]="disabled" [color]="color" [formControl]="formControl"></fusion-toggle>
    <fusion-toggle labelText="Medium" [loading]="loading" [disabled]="disabled" size="medium" [color]="color" [formControl]="formControl"></fusion-toggle>    
</div>`
    })
};

export const FullyLoaded: Story = {
    render: args => ({
        props: {
            ...args,
            formControlChecked: formControlChecked,
            labelText: 'Item name',
            startIcon: 'ph/placeholder',
            endIcon: 'ph/placeholder',
            labelHelpIcon: 'ph/fill/question',
            labelTooltipText: 'Tooltip text',
            helperText: 'Helper text'
        },
        template: `
<fusion-toggle 
    [startIcon]="startIcon" 
    [endIcon]="endIcon" 
    [labelText]="labelText"
    [labelHelpIcon]="labelHelpIcon" 
    [labelTooltipText]="labelTooltipText"    
    [helperText]="helperText"
    [helperIcon]="helperIcon"
    [helperVariant]="helperVariant"
    [loading]="loading" 
    [disabled]="disabled" 
    [size]="size" 
    [color]="color" 
    [formControl]="formControlChecked"
></fusion-toggle>`
    })
};
