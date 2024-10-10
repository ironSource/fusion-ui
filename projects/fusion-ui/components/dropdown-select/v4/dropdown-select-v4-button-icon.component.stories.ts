import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DropdownSelectV4Component} from './dropdown-select-v4.component';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';

const foodOptionsList: DropdownOption[] = [
    {
        id: 'pizza',
        displayText: 'Pizza'
    },
    {
        id: 'hamburger',
        displayText: 'Hamburger'
    },
    {
        id: 'plant',
        displayText: 'Vegan'
    },
    {
        id: 'bowl-food',
        displayText: 'Noodles'
    },
    {
        id: 'coffee',
        displayText: 'Coffee'
    }
];

export default {
    title: 'V4/Components/Dropdown/Triggers/IconButton',
    component: DropdownSelectV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), DropdownComponent]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***DropdownSelectComponent v4 IconButton***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<DropdownSelectV4Component>;

type Story = StoryObj<DropdownSelectV4Component>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-dropdown-select class="fu-mode-button-icon" hideCaretIcon="true" [disabled]="disabled" icon="ph/dots-three" [placeholder]="{value:''}"></fusion-dropdown-select>
</div>       
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)]
};

export const WithDropdown: Story = {
    render: args => ({
        props: {
            ...args,
            optionsFood: foodOptionsList
        },
        template: `
<div style="display: flex; gap: 16px; height: 200px">
    <fusion-dropdown
        [options]="optionsFood"        
        [placeholder]="{placeholderText:'', icon: 'ph/dots-three'}"
        [hideCaretIcon]="true"        
        triggerMode="button-icon"
    ></fusion-dropdown>
</div>       
`
    })
};
