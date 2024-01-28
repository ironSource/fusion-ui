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
        <fusion-dropdown-select imageUrl="https://fusion.ironsrc.net/assets/images/v4/app_mock/Bobbie_Friends_Cat_Life_Simulator.png" icon="v4/branded/android"></fusion-dropdown-select>
    </div>
<!--
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Application</div>    
        <fusion-dropdown-select imageUrl="https://fusion.ironsrc.net/assets/images/v4/app_mock/Bobbie_Friends_Cat_Life_Simulator.png" icon="v4/branded/android" size="medium"></fusion-dropdown-select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
        <div class="font-v4-input-label">Application</div>    
        <fusion-dropdown-select imageUrl="https://fusion.ironsrc.net/assets/images/v4/app_mock/Bobbie_Friends_Cat_Life_Simulator.png" icon="v4/branded/android" size="large"></fusion-dropdown-select>
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
        <div class="font-v4-heading-5">Medium (default)</div>
        <fusion-dropdown-select></fusion-dropdown-select>
    </div>
    <div style="width: 200px; display: flex; flex-direction: column; gap: 16px;">
        <div class="font-v4-heading-5">Large</div>    
        <fusion-dropdown-select size="large"></fusion-dropdown-select>
    </div>
    <div style="width: 200px; display: flex; flex-direction: column; gap: 16px;">
        <div class="font-v4-heading-5">Extra Large</div>    
        <fusion-dropdown-select size="xlarge"></fusion-dropdown-select>
    </div>
</div>       
`
    })
};
