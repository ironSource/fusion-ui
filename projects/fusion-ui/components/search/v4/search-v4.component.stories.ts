import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {SearchV4Component} from './search-v4.component';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';

const formControl = new FormControl();
const formControlOptionsList = new FormControl();
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

const templateDropdown = `
<div style="display:flex; gap: 14px;">
    <div style="width: 300px;">
        <fusion-dropdown 
           [size]="size"
           [search]="true"
           [searchPlaceholder]="'Search'"
           [placeholder]="placeholder"
           [options]="options"
           [formControl]="formControl"
         ></fusion-dropdown>
    </div>
</div>
`;

export default {
    title: 'V4/Components/Inputs/Search',
    component: SearchV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownComponent
            ]
        }),
        componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***SearchComponent***.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Search',
        size: 'medium',
        formControl: formControl
    },
    argTypes: {
        formControl: {
            control: {
                type: null
            }
        }
    }
} as Meta<SearchV4Component>;

type Story = StoryObj<SearchV4Component>;

export const Basic: Story = {};

export const InDropdown: Story = {
    render: args => ({
        props: {
            ...args,
            placeholder: 'Select',
            options: foodOptionsList,
            formControl: formControlOptionsList
        },
        template: templateDropdown
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)]
};
