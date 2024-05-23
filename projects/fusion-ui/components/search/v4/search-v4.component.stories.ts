import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {SearchV4Component} from './search-v4.component';

const formControl = new FormControl();

export default {
    title: 'V4/Components/Search',
    component: SearchV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
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
    args: {
        size: 'large'
    }
};
