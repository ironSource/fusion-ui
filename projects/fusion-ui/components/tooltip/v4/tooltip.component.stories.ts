import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {TooltipComponent} from './tooltip.component';

const meta: Meta<TooltipComponent> = {
    title: 'Components/Tooltip/v4/Tooltip',
    component: TooltipComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**Tooltip component V4** Use tooltips to showcase additional information to help users understand what is going on in a particular section of our planetary system.`
            }
        },
        layout: 'centered'
    }
};

export default meta;

type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
    render: args => ({
        props: args,
        template: `<fusion-tooltip>Here's a tooltip!</fusion-tooltip>`
    })
};
