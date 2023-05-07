import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TooltipContentComponent, TooltipModule} from './';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {dedent} from 'ts-dedent';

export default {
    title: 'Components/Tooltip/Tooltip',
    component: TooltipContentComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, TooltipModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**Tooltip component** Use tooltips to showcase additional information to help users understand what is going on in a particular section of our planetary system.`
            }
        }
    }
} as Meta<TooltipContentComponent>;

const TooltipTemplate: StoryFn<TooltipContentComponent> = (args: TooltipContentComponent) => ({
    props: args,
    template: `<fusion-tooltip-content style="position: unset;" [tooltipTextContent]="tooltipTextContent" [tooltipPositionClass]="tooltipPositionClass" [tooltipStyleConfiguration]="tooltipStyleConfiguration"></fusion-tooltip-content>`
});

export const Default = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text'
    }
};

export const Top = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.Top
    }
};

export const TopLeft = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.TopLeft
    }
};

export const TopRight = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.TopRight
    }
};

export const Bottom = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.Bottom
    }
};

export const BottomLeft = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.BottomLeft
    }
};

export const BottomRight = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.BottomRight
    }
};

export const Left = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.Left
    }
};

export const Right = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipPositionClass: TooltipPosition.Right
    }
};

export const WithCustomWidth = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'Well done! You successfully read this alert message.',
        tooltipStyleConfiguration: {
            width: '150px'
        } as TooltipComponentStyleConfiguration
    }
};

export const WithCustomWidthAndContentCentered = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'Well done! You successfully read this alert message.',
        tooltipStyleConfiguration: {
            width: '150px',
            'text-align': 'center'
        } as TooltipComponentStyleConfiguration
    }
};

export const WithCustomBackground = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'Well done! You successfully read this alert message.',
        tooltipStyleConfiguration: {
            width: '150px',
            backgroundColor: '#3083FF'
        } as TooltipComponentStyleConfiguration
    }
};
