import {ChartData} from '@ironsource/fusion-ui/components/chart/common/base';

export const CHART_BAR_DATA_MOCK: ChartData = {
    data: {
        'Unity Ads': [804.16, 1688.59, 1383.47, 1037.83, 899.56, 1582.28, 726.11, 385.66]
    },
    legends: [
        {id: 9930, displayName: 'Australia', displayFormat: 'currency'},
        {id: 9928, displayName: 'United States', displayFormat: 'currency'},
        {id: 9935, displayName: 'Germany', displayFormat: 'currency'},
        {id: 9936, displayName: 'United Kingdom', displayFormat: 'currency'},
        {id: 9899, displayName: 'China', displayFormat: 'currency'}
    ]
};

export const CHART_BAR_GROUPED_DATA_MOCK: ChartData = {
    data: {
        'Unity Ads': [804.16, 1688.59, 1383.47, 1037.83, 899.56],
        'ironSour Ads': [456.16, 1290.59, 678.47, 659.83, 344.56]
    },
    legends: [
        {id: 9930, displayName: 'Australia', displayFormat: 'currency'},
        {id: 9928, displayName: 'United States', displayFormat: 'currency'},
        {id: 9935, displayName: 'Germany', displayFormat: 'currency'},
        {id: 9936, displayName: 'United Kingdom', displayFormat: 'currency'},
        {id: 9899, displayName: 'China', displayFormat: 'currency'}
    ]
};
