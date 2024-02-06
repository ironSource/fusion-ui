import {ChartLegend} from './chart-legend';

export interface ChartData {
    legends: ChartLegend[];
    data: {[index: string]: number[]};
}

export interface FusionChartPieData {
    label?: string;
    data: FusionChartPie | FusionChartPieDataItem[];
}

export type FusionChartPie = {[index: string]: number};

export interface FusionChartPieDataItem {
    displayText: string;
    value: number;
    color: string;
}
