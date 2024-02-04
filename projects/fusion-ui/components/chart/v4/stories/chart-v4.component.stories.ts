import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {ChartV4Component} from '../chart-v4.component';
import {ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {CHART_BAR_DATA_MOCK} from '@ironsource/fusion-ui/components/chart/v4/stories/chart-v4.component.mock';

export default {
    title: 'V4/Components/Charts/BarChart',
    component: ChartV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        }),
        componentWrapperDecorator(
            story => `
<style>
    .bar-story-holder{
        width: 600px;
        height: 300px;
        margin: auto;
        background-color: #FCFCFC;
        border-radius: 6px;
        border: solid 1px #E4E4E4;
        padding: 20px 16px 8px 8px;
    }
</style>
<div class="bar-story-holder">${story}</div>`
        )
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        data: {...CHART_BAR_DATA_MOCK},
        type: ChartType.Bar,
        chartSubject: 'Unity Ads'
    }
} as Meta<ChartV4Component>;

type Story = StoryObj<ChartV4Component>;

export const Basic: Story = {};
