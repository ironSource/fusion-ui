import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputLabelComponent} from './input-label.component';

export default {
    title: 'V4/Components/Inputs/Label',
    component: InputLabelComponent,
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
        text: 'Label'
    }
} as Meta<InputLabelComponent>;

type Story = StoryObj<InputLabelComponent>;

export const Basic: Story = {};
export const Mandatory: Story = {
    args: {
        required: true
    }
};
export const WithIconAndTooltip: Story = {
    args: {
        required: true,
        icon: 'ph/question',
        tooltipText: 'Tooltip text'
    }
};
export const Disabled: Story = {
    args: {
        disabled: true,
        required: true,
        icon: 'ph/question',
        tooltipText: 'Tooltip text'
    }
};
