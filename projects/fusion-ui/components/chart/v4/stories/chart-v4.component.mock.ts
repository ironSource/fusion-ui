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

export const CHART_DATA_MOCK: ChartData = {
    data: {
        '2023-12-11': [2048.16, 1588.59],
        '2023-12-12': [2458.49, 1902.16],
        '2023-12-13': [2997.71, 1678.1],
        '2023-12-14': [2098.79, 1824.22],
        '2023-12-15': [2274.74, 1825.24],
        '2023-12-16': [2148.92, 1835.68],
        '2023-12-17': [2049.24, 1563.08]
    },
    legends: [
        {id: 9930, displayName: 'Unity Ads'},
        {id: 9928, displayName: 'ironSource Ads'}
    ]
};
