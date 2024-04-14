import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {COLORS_PALETTE} from '@ironsource/fusion-ui/services/colors/colors-palette';
import {ChartLabel} from '@ironsource/fusion-ui/components/chart/common/base';
import {ChartLabelsV4Component} from './chart-labels-v4.component';

const CHART_COLORS = COLORS_PALETTE['style_v4'];
const CART_LABELS_MOCK: ChartLabel[] = [
    {
        color: CHART_COLORS[0],
        label: 'Label 1'
    },
    {
        color: CHART_COLORS[1],
        label: 'Label 2'
    }
];
const CART_LABELS_ICONS_MOCK: ChartLabel[] = [
    {
        color: CHART_COLORS[0],
        label: 'Label 1',
        icon: 'v4/branded/android'
    },
    {
        color: CHART_COLORS[1],
        label: 'Label 2',
        icon: 'v4/branded/ios'
    }
];

export default {
    title: 'V4/Components/DataVisualization/LegendItems',
    component: ChartLabelsV4Component,
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
    }
} as Meta<ChartLabelsV4Component>;

type Story = StoryObj<ChartLabelsV4Component>;

export const Basic: Story = {
    args: {
        labels: CART_LABELS_MOCK
    }
};

export const WithOpacity: Story = {
    args: {
        labels: CART_LABELS_MOCK,
        bgOpacity: 10
    }
};

export const WithIcon: Story = {
    args: {
        labels: CART_LABELS_ICONS_MOCK,
        clickable: true
    }
};
