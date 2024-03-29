import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {ChartV4Component} from '../chart-v4.component';
import {ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {CHART_CUSTOM_COLORS_DATA_MOCK, CHART_DATA_MOCK, CHART_DATA_MOCK_BIG, CHART_DATA_MOCK_BIG_ICONS} from './chart-v4.component.mock';
import {ChartV4WrapperComponent} from './chart-v4-story-wrapper.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

export default {
    title: 'V4/Components/DataVisualization/Charts/LineChart',
    component: ChartV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ChartV4WrapperComponent]
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
        data: {...CHART_DATA_MOCK},
        type: ChartType.Line,
        options: {
            interaction: {
                intersect: false,
                mode: 'point'
            }
        }
    }
} as Meta<ChartV4Component>;

type Story = StoryObj<ChartV4Component>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
            <fusion-chart-wrapper [data]="data" [type]="type" [options]="options"></fusion-chart-wrapper>
        `
    })
};

export const Stack: Story = {
    render: args => ({
        props: {
            data: {...CHART_DATA_MOCK_BIG},
            type: ChartType.StackedLine,
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

export const WithIconsInTooltip: Story = {
    render: args => ({
        props: {
            data: {...CHART_DATA_MOCK_BIG_ICONS},
            type: ChartType.StackedLine,
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
            <fusion-chart-wrapper style="--chart-tooltip-max-width: 270px;" [data]="data" [type]="type" [options]="options"></fusion-chart-wrapper>
        `
    })
};

export const WithTotal: Story = {
    render: args => ({
        props: {
            data: {...CHART_DATA_MOCK},
            type: ChartType.Line,
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

/*
export const WithCustomColors: Story = {
    render: args => ({
        props: {
            data: {...CHART_CUSTOM_COLORS_DATA_MOCK},
            type: ChartType.Line,
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
