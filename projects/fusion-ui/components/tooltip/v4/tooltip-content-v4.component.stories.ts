import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipContentV4Component} from './tooltip-content-v4.component';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {triggerTestId} from 'projects/E2E/tests/components/tooltip/consts';

export default {
    title: 'V4/Components/Tooltip/Content',
    component: TooltipContentV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    args: {
        tooltipTextContent: 'This is a tooltip',
        testId: triggerTestId
    }
} as Meta<TooltipContentV4Component>;

type Story = StoryObj<TooltipContentV4Component>;

export const Default: Story = {
    render: args => ({
        props: {
            ...args,
            testId: triggerTestId
        },
        template: `
<fusion-tooltip-content
    [testId]="testId"
    style="position: unset;"
    [tooltipTextContent]="tooltipTextContent"
    [tooltipPositionClass]="tooltipPositionClass"
    [tooltipStyleConfiguration]="tooltipStyleConfiguration"
></fusion-tooltip-content>
`
    })
};

export const Top: Story = {args: {tooltipPositionClass: TooltipPosition.Top}};
export const TopLeft: Story = {args: {tooltipPositionClass: TooltipPosition.TopLeft}};
export const TopRight: Story = {args: {tooltipPositionClass: TooltipPosition.TopRight}};

export const Bottom: Story = {args: {tooltipPositionClass: TooltipPosition.Bottom}};
export const BottomLeft: Story = {args: {tooltipPositionClass: TooltipPosition.BottomLeft}};
export const BottomRight: Story = {args: {tooltipPositionClass: TooltipPosition.BottomRight}};

export const Left: Story = {args: {tooltipPositionClass: TooltipPosition.Left}};
export const Right: Story = {args: {tooltipPositionClass: TooltipPosition.Right}};

export const WithCustomWidth: Story = {
    args: {
        tooltipTextContent: 'This tooltip with wight 170px',
        tooltipStyleConfiguration: {width: '170px'} as TooltipComponentStyleConfiguration
    }
};
