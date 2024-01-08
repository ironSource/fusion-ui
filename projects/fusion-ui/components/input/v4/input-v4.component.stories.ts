import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputV4Component} from './input-v4.component';

const formControl = new FormControl('Typing something');
const formControlDisabled = new FormControl({value: 'Disabled', disabled: true});

export default {
    title: 'V4/Components/Inputs/TextField',
    component: InputV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***InputComponent***.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Placeholder text',
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
} as Meta<InputV4Component>;

type Story = StoryObj<InputV4Component>;

export const Default: Story = {};

export const Disabled: Story = {};
