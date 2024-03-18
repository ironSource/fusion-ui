import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {ChartV4Component} from '../chart-v4.component';
import {ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {CHART_BAR_DATA_MOCK, CHART_BAR_GROUPED_BUNDLE_DATA_MOCK, CHART_BAR_GROUPED_DATA_MOCK} from './chart-v4.component.mock';
import {ChartV4WrapperComponent} from './chart-v4-story-wrapper.component';

export default {
    title: 'V4/Components/DataVisualization/Charts/BarChart',
    component: ChartV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ChartV4WrapperComponent]
        }),
        componentWrapperDecorator(
            story => `
<div>${story}</div>`
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
        type: ChartType.Bar
    }
} as Meta<ChartV4Component>;

type Story = StoryObj<ChartV4Component>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type"></fusion-chart-wrapper>
        `
    })
};

export const Stack: Story = {
    render: args => ({
        props: {
            data: {...CHART_BAR_GROUPED_DATA_MOCK},
            type: ChartType.StackedBar
        },
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type"></fusion-chart-wrapper>
        `
    })
};

export const StackBundle: Story = {
    render: args => ({
        props: {
            data: {...CHART_BAR_GROUPED_BUNDLE_DATA_MOCK},
            type: ChartType.StackedBar
        },
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type"></fusion-chart-wrapper>
        `
    })
};

export const Group: Story = {
    render: args => ({
        props: {
            data: {...CHART_BAR_GROUPED_DATA_MOCK},
            type: ChartType.Bar,
            options: {
                interaction: {
                    intersect: false,
                    mode: 'index',
                    axis: 'x'
                },
                plugins: {
                    tooltip: {
                        position: 'average'
                    }
                }
            }
        },
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type" [options]="options"></fusion-chart-wrapper>
        `
    })
};

/*export const WithCustomColors: Story = {
    render: args => ({
        props: {
            data: {...CHART_BAR_GROUPED_DATA_MOCK},
            type: ChartType.Bar,
            options: {
                interaction: {
                    intersect: false,
                    mode: 'index',
                    axis: 'x'
                },
                plugins: {
                    tooltip: {
                        position: 'average'
                    }
                }
            }
        },
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type" [options]="options"></fusion-chart-wrapper>
        `
    })
};*/

export const NoDataToDisplay: Story = {
    render: args => ({
        props: {},
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type"></fusion-chart-wrapper>
        `
    })
};
