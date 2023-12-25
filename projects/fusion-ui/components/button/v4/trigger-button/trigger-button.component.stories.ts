import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TriggerButtonComponent} from './trigger-button.component';

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
        }
    },
    args: {
        label: 'Spend',
        disabled: false,
        hasCaretIcon: true,
        selected: false,
        light: false,
        startIconName: '',
        endIconName: '',
        size: 'md'
    }
} as Meta<TriggerButtonComponent>;

type TriggerButtonStory = StoryObj<TriggerButtonComponent>;

export const Basic: TriggerButtonStory = {
    render: args => ({
        props: args,
        template: `
<fusion-trigger-button [size]="size" [disabled]="disabled" [selected]="selected" [light]="light" [hasCaretIcon]="hasCaretIcon">{{label}}</fusion-trigger-button>
    `
    })
};
