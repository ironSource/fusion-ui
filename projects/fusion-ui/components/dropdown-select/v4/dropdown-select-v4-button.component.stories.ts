import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DropdownSelectV4Component} from './dropdown-select-v4.component';

export default {
    title: 'V4/Components/Dropdown/Triggers/Button',
    component: DropdownSelectV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***DropdownSelectComponent***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<DropdownSelectV4Component>;

type Story = StoryObj<DropdownSelectV4Component>;

export const Default: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button" [disabled]="disabled" [size]="size" [icon]="icon" [country]="country" [validationState]="validationState"></fusion-dropdown-select>
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const Disabled: Story = {
    render: args => ({
        props: {
            ...args,
            disabled: true
        },
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-dropdown-select [disabled]="disabled" class="fu-mode-button"></fusion-dropdown-select>
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const Icon: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button"></fusion-dropdown-select>
        <fusion-dropdown-select class="fu-mode-button" icon="ph/hamburger"></fusion-dropdown-select>
        <fusion-dropdown-select class="fu-mode-button" icon="ph/warning-circle" iconColor="#C62A2F"></fusion-dropdown-select>
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const Variant: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px;">
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button" [placeholder]="{value:'Outlined'}"></fusion-dropdown-select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button-text" [placeholder]="{value:'Text'}"></fusion-dropdown-select>
    </div>
</div>       
`
    })
};

export const Size: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px;">
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button" size="small" [placeholder]="{value:'Small'}"></fusion-dropdown-select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button" [placeholder]="{value:'Medium (default)'}"></fusion-dropdown-select>
    </div>
</div>       
`
    })
};
