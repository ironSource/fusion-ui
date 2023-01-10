import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TooltipComponent, TooltipContentComponent, TooltipModule} from './';
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

const TooltipTemplate: Story<TooltipContentComponent> = (args: TooltipContentComponent) => ({
    props: args,
    template: `<fusion-tooltip-content style="position: unset;" [tooltipTextContent]="tooltipTextContent" [tooltipPositionClass]="tooltipPositionClass" [tooltipStyleConfiguration]="tooltipStyleConfiguration"></fusion-tooltip-content>`
});

// region Default
export const Default = TooltipTemplate.bind({});
Default.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text'
};
// endregion

// region Tops
export const Top = TooltipTemplate.bind({});
Top.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.Top
};

export const TopLeft = TooltipTemplate.bind({});
TopLeft.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.TopLeft
};

export const TopRight = TooltipTemplate.bind({});
TopRight.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.TopRight
};
// endregion

// region Bottoms
export const Bottom = TooltipTemplate.bind({});
Bottom.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.Bottom
};

export const BottomLeft = TooltipTemplate.bind({});
BottomLeft.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.BottomLeft
};

export const BottomRight = TooltipTemplate.bind({});
BottomRight.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.BottomRight
};
// endregion

// region Left
export const Left = TooltipTemplate.bind({});
Left.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.Left
};
// endregion

// region Left
export const Right = TooltipTemplate.bind({});
Right.args = {
    tooltipTextContent: 'This is a single line tooltip with no wrapping text',
    tooltipPositionClass: TooltipPosition.Right
};
// endregion

// region WithCustomWidth
export const WithCustomWidth = TooltipTemplate.bind({});
WithCustomWidth.args = {
    tooltipTextContent: 'Well done! You successfully read this alert message.',
    tooltipStyleConfiguration: {
        width: '150px'
    } as TooltipComponentStyleConfiguration
};
// endregion

// region WithCustomWidthAndContentCentered
export const WithCustomWidthAndContentCentered = TooltipTemplate.bind({});
WithCustomWidthAndContentCentered.args = {
    tooltipTextContent: 'Well done! You successfully read this alert message.',
    tooltipStyleConfiguration: {
        width: '150px',
        'text-align': 'center'
    } as TooltipComponentStyleConfiguration
};
// endregion

// region WithCustomBackground
export const WithCustomBackground = TooltipTemplate.bind({});
WithCustomBackground.args = {
    tooltipTextContent: 'Well done! You successfully read this alert message.',
    tooltipStyleConfiguration: {
        width: '150px',
        backgroundColor: '#3083FF'
    } as TooltipComponentStyleConfiguration
};
// endregion
