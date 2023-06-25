import {Meta, StoryFn, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {TooltipComponent} from '../tooltip.component';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

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
    },
    args: {}
};
export default meta;

const TooltipTemplate: StoryFn<TooltipComponent> = (args: TooltipComponent) => ({
    props: args,
    template: `<fusion-tooltip [position]="position">Here's a tooltip!</fusion-tooltip>`
});

export const Default = {
    render: TooltipTemplate
};

export const PositionRight = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.Right
    }
};

export const PositionLeft = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.Left
    }
};

export const PositionTop = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.Top
    }
};

export const PositionTopLeft = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.TopLeft
    }
};

export const PositionTopRight = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.TopRight
    }
};

export const PositionBottom = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.Bottom
    }
};

export const PositionBottomLeft = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.BottomLeft
    }
};

export const PositionBottomRight = {
    render: TooltipTemplate,
    args: {
        position: TooltipPosition.BottomRight
    }
};
