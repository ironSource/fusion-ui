import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TriggerButtonComponent} from './trigger-button.component';
import {dedent} from 'ts-dedent';

export default {
    title: 'V4/Components/Triggers/Button',
    component: TriggerButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        },
        docs: {
            description: {
                component: dedent`
                Dropdown present a list of options from which a user can select one or several.
                `
            }
        }
    },
    args: {
        label: 'Spend',
        disabled: false,
        hasCaretIcon: true,
        selected: false,
        light: false,
        startIconName: '',
        size: 'md'
    },
    argTypes: {
        startIconName: {
            options: [null, 'ph/calendar-blank'],
            type: 'string',
            control: {
                type: 'select',
                labels: {
                    null: 'no icon',
                    'ph/calendar-blank': 'ph/calendar-blank'
                }
            }
        }
    }
} as Meta<TriggerButtonComponent>;

type TriggerButtonStory = StoryObj<TriggerButtonComponent>;

export const Basic: TriggerButtonStory = {
    render: args => ({
        props: args,
        template: `
<fusion-trigger-button [size]="size" [disabled]="disabled" [selected]="selected" [light]="light" [startIconName]="startIconName" [hasCaretIcon]="hasCaretIcon">{{label}}</fusion-trigger-button>
    `
    })
};

export const Size: TriggerButtonStory = {
    render: args => ({
        props: args,
        template: `<div style="display: flex; align-items: center; gap: 4px;">
<fusion-trigger-button [size]="'md'" [disabled]="disabled" [selected]="selected" [light]="light" [startIconName]="startIconName" [hasCaretIcon]="hasCaretIcon">Medium</fusion-trigger-button>
<fusion-trigger-button [size]="'sm'" [disabled]="disabled" [selected]="selected" [light]="light" [startIconName]="startIconName" [hasCaretIcon]="hasCaretIcon">Small</fusion-trigger-button>
</div>`
    })
};

export const Icon: TriggerButtonStory = {
    render: args => ({
        props: args,
        template: `<div style="display: flex; align-items: center; gap: 4px;">
<fusion-trigger-button [size]="size" [disabled]="disabled" [selected]="selected" [light]="light" [hasCaretIcon]="false">None</fusion-trigger-button>
<fusion-trigger-button [size]="size" [disabled]="disabled" [selected]="selected" [light]="light" [startIconName]="'ph/calendar-blank'" [hasCaretIcon]="false">With start icon</fusion-trigger-button>
<fusion-trigger-button [size]="size" [disabled]="disabled" [selected]="selected" [light]="light" [hasCaretIcon]="true">With end icon</fusion-trigger-button>
<fusion-trigger-button [size]="size" [disabled]="disabled" [selected]="selected" [light]="light" [startIconName]="'ph/calendar-blank'" [hasCaretIcon]="true">With both icons</fusion-trigger-button>
</div>`
    })
};
