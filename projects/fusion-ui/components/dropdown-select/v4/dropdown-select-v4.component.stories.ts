import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DropdownSelectV4Component} from './dropdown-select-v4.component';

export default {
    title: 'V4/Components/Dropdown/Triggers/Default',
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
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const Disabled: Story = {
    args: {
        disabled: true
    },
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const Error: Story = {
    args: {
        validationState: 'error'
    },
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const WithAppAndBrandIcon: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px; flex-direction: column">
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Application</div>
        <fusion-dropdown-select imageUrl="https://platform.ssacdn.com/demand-creatives/icons/icon_43609a8611f49ebe8c8e5eeef199112b_51b1115a8ee50c907e46d380d88ce4a9.jpeg" icon="v4/branded/android"></fusion-dropdown-select>
    </div>
<!--
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Application</div>    
        <fusion-dropdown-select imageUrl="https://platform.ssacdn.com/demand-creatives/icons/icon_43609a8611f49ebe8c8e5eeef199112b_51b1115a8ee50c907e46d380d88ce4a9.jpeg" icon="v4/branded/android" size="medium"></fusion-dropdown-select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Application</div>    
        <fusion-dropdown-select imageUrl="https://platform.ssacdn.com/demand-creatives/icons/icon_43609a8611f49ebe8c8e5eeef199112b_51b1115a8ee50c907e46d380d88ce4a9.jpeg" icon="v4/branded/android" size="large"></fusion-dropdown-select>
    </div>
-->
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const WithIcon: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px; flex-direction: column">
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Label</div>
        <fusion-dropdown-select icon="ph/hamburger"></fusion-dropdown-select>
    </div>
<!--
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Label</div>    
        <fusion-dropdown-select icon="ph/hamburger" size="medium"></fusion-dropdown-select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Label</div>    
        <fusion-dropdown-select icon="ph/hamburger" size="large"></fusion-dropdown-select>
    </div>
-->
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const WithFlags: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px; flex-direction: column">
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Country</div>
        <fusion-dropdown-select country="us" [placeholder]="{value: 'United States'}"></fusion-dropdown-select>
    </div>
<!--
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Country</div>    
        <fusion-dropdown-select country="us" size="medium" [placeholder]="{value: 'United States'}"></fusion-dropdown-select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Country</div>    
        <fusion-dropdown-select  country="us" size="large" [placeholder]="{value: 'United States'}"></fusion-dropdown-select>
    </div>
-->
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const Size: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px;">
    <div style="width: 200px; display: flex; flex-direction: column; gap: 16px;">
        <div class="font-v4-heading-5">Small (default)</div>
        <fusion-dropdown-select [size]="'small'"></fusion-dropdown-select>
    </div>
    <div style="width: 200px; display: flex; flex-direction: column; gap: 16px;">
        <div class="font-v4-heading-5">Medium</div>    
        <fusion-dropdown-select [size]="'medium'"></fusion-dropdown-select>
    </div>
    <div style="width: 200px; display: flex; flex-direction: column; gap: 16px;">
        <div class="font-v4-heading-5">Large</div>    
        <fusion-dropdown-select [size]="'large'"></fusion-dropdown-select>
    </div>
</div>       
`
    })
};
