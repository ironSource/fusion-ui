import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DropdownV4Component} from './dropdown-v4.component';

const longOptionsList: DropdownOption[] = Array.from({length: 100}, (_, i) => ({
    id: i,
    displayText: `Option_${i}`
}));

export default {
    title: 'V4/Components/Dropdown/Dropdown',
    component: DropdownV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        }),
        componentWrapperDecorator(story => `<div style="width: 300px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***DropdownComponent***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        options: longOptionsList,
        search: true
    }
} as Meta<DropdownV4Component>;

type Story = StoryObj<DropdownV4Component>;

export const Default: Story = {};
