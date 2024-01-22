import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {MOCK_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {ChipFilterComponent} from './chip-filter.component';
import {MultiDropdownComponent} from '@ironsource/fusion-ui/components/multi-dropdown/v4';

const baseTemplate = `
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholderPrefix]="placeholderPrefix"
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 [optionsTitle]="optionsTitle"
                 [search]="search"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
`;
const baseTemplateMultiselect = `
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
            <fusion-multi-dropdown
                [placeholder]="placeholder"
                [formControl]="formControl"
                [options]="options"
            ></fusion-multi-dropdown>
        </div>
    </fusion-chip-filter>
`;

export default {
    title: 'V4/Components/Dropdown/Triggers/ChipFilter',
    component: ChipFilterComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownComponent,
                MultiDropdownComponent
            ]
        }),
        componentWrapperDecorator(story => `<div style="width: 300px; height: 200px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***ChipTriggerComponent***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Chip filter',
        options: MOCK_OPTIONS,
        configuration: {id: 1, mode: 'static', close: true}
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<ChipFilterComponent>;

type Story = StoryObj<ChipFilterComponent>;

export const Default: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl()
        },
        template: baseTemplate
    })
};

export const Multiselect: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl()
        },
        template: baseTemplateMultiselect
    })
};
