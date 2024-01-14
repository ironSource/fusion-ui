import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {DropdownOptionsListV4Component} from './dropdown-options-list-v4.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {SearchComponent} from '@ironsource/fusion-ui/components/search/v4';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';

const longOptionsList: DropdownOption[] = Array.from({length: 100}, (_, i) => ({
    id: i,
    displayText: `Option_${i}`
}));

export default {
    title: 'V4/Components/Dropdown/OptionList',
    component: DropdownOptionsListV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), SearchComponent],
            providers: [DropdownService]
        }),
        componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***DropdownOptionsListComponent***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        displayedOptions: longOptionsList
    }
} as Meta<DropdownOptionsListV4Component>;

type Story = StoryObj<DropdownOptionsListV4Component>;

export const Default: Story = {};

export const Searchable: Story = {
    args: {
        isSearchable: true
    }
};
