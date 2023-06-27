import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TooltipContentComponent, TooltipModule} from './';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {dedent} from 'ts-dedent';

export default {
    title: 'Components/Tooltip/v4/Tooltip',
    component: TooltipContentComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, TooltipModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**Tooltip component style v4** same as v3 by functionality, but another css. Just add ***themeClass: 'fusion-unity-theme'*** prop to the **tooltipStyleConfiguration** input.`
            }
        },
        layout: 'centered'
    }
} as Meta<TooltipContentComponent>;

const TooltipTemplate: StoryFn<TooltipContentComponent> = (args: TooltipContentComponent) => ({
    props: args,
    template: `<fusion-tooltip-content style="position: unset;" [tooltipTextContent]="tooltipTextContent" [tooltipPositionClass]="tooltipPositionClass" [tooltipStyleConfiguration]="tooltipStyleConfiguration"></fusion-tooltip-content>`
});

export const Default = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'This is a single line tooltip with no wrapping text',
        tooltipStyleConfiguration: {
            themeClass: 'fusion-unity-theme'
        }
    }
};

export const Top = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.Top
    }
};

export const TopLeft = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.TopLeft
    }
};

export const TopRight = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.TopRight
    }
};

export const Bottom = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.Bottom
    }
};

export const BottomLeft = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.BottomLeft
    }
};

export const BottomRight = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.BottomRight
    }
};

export const Left = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.Left
    }
};

export const Right = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.Right
    }
};

export const WithCustomWidth = {
    render: TooltipTemplate,

    args: {
        ...Default.args,
        tooltipPositionClass: TooltipPosition.Top,
        tooltipStyleConfiguration: {
            themeClass: 'fusion-unity-theme',
            width: '150px'
        } as TooltipComponentStyleConfiguration
    }
};

export const WithCustomWidthAndContentCentered = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'Well done! You successfully read this alert message.',
        tooltipPositionClass: TooltipPosition.Top,
        tooltipStyleConfiguration: {
            themeClass: 'fusion-unity-theme',
            width: '150px',
            'text-align': 'center'
        } as TooltipComponentStyleConfiguration
    }
};

export const WithCustomBackground = {
    render: TooltipTemplate,

    args: {
        tooltipTextContent: 'Well done! You successfully read this alert message.',
        tooltipPositionClass: TooltipPosition.Top,
        tooltipStyleConfiguration: {
            themeClass: 'fusion-unity-theme',
            width: '150px',
            backgroundColor: '#3083FF'
        } as TooltipComponentStyleConfiguration
    }
};
