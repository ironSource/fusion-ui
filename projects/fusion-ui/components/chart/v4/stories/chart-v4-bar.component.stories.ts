import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {ChartV4Component} from '../chart-v4.component';
import {ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {
    CHART_BAR_DATA_MOCK,
    CHART_BAR_GROUPED_BUNDLE_DATA_MOCK,
    CHART_BAR_GROUPED_DATA_MOCK,
    CHART_BAR_GROUPED_DATA_OTHER_MOCK,
    CHART_BAR_LONG_LABELS_DATA_MOCK,
    CHART_BAR_LONG_LABELS_OPTIONS_MOCK
} from './chart-v4.component.mock';
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

/*
export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type"></fusion-chart-wrapper>
        `
    })
};
*/

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

export const StackWithOther: Story = {
    render: args => ({
        props: {
            data: structuredClone(CHART_BAR_GROUPED_DATA_OTHER_MOCK),
            type: ChartType.StackedBar,
            labelOther: true,
            labelsClickable: true,
            options: {
                showCharsAmountXLabels: 12,
                scales: {
                    x: {
                        ticks: {
                            minRotation: 0,
                            maxRotation: 0,
                            autoSkip: false
                        }
                    }
                }
            }
        },
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type" [options]="options" [labelOther]="labelOther" [labelsClickable]="labelsClickable"></fusion-chart-wrapper>
        `
    })
};

export const StackImageInTooltipTitle: Story = {
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

export const LongLabels: Story = {
    render: args => ({
        props: {
            data: {...CHART_BAR_LONG_LABELS_DATA_MOCK},
            type: ChartType.StackedBar,
            options: CHART_BAR_LONG_LABELS_OPTIONS_MOCK
        },
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type" [options]="options"></fusion-chart-wrapper>
        `
    })
};

export const NoDataToDisplay: Story = {
    render: args => ({
        props: {},
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type"></fusion-chart-wrapper>
        `
    })
};
