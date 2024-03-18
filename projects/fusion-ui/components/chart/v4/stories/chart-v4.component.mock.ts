import {ChartData, FusionChartPieData} from '@ironsource/fusion-ui/components/chart/common/base';

export const CHART_BAR_DATA_MOCK: ChartData = {
    data: {
        'Unity Ads': [804.16, 1688.59, 1383.47, 1037.83, 899.56]
    },
    legends: [
        {id: 9930, displayName: 'Australia', displayFormat: 'shortCurrency'},
        {id: 9928, displayName: 'United States', displayFormat: 'shortCurrency'},
        {id: 9935, displayName: 'Germany', displayFormat: 'shortCurrency'},
        {id: 9936, displayName: 'United Kingdom', displayFormat: 'shortCurrency'},
        {id: 9899, displayName: 'China', displayFormat: 'shortCurrency'}
    ]
};

export const CHART_BAR_GROUPED_DATA_MOCK: ChartData = {
    data: {
        'Unity Ads': [804.16, 1688.59, 1383.47, 1037.83, 899.56],
        'ironSource Ads': [456.16, 1290.59, 678.47, 659.83, 344.56]
    },
    legends: [
        {id: 9930, displayName: 'Australia', displayFormat: 'shortCurrency'},
        {id: 9928, displayName: 'United States', displayFormat: 'shortCurrency'},
        {id: 9935, displayName: 'Germany', displayFormat: 'shortCurrency'},
        {id: 9936, displayName: 'United Kingdom', displayFormat: 'shortCurrency'},
        {id: 9899, displayName: 'China', displayFormat: 'shortCurrency'}
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
        {id: 9930, displayName: 'Unity Ads', displayFormat: 'shortCurrency'},
        {id: 9928, displayName: 'ironSource Ads', displayFormat: 'shortCurrency'}
    ]
};

export const CHART_DATA_MOCK_BIG: ChartData = {
    data: {
        '2024-03-04': [50009405, 18784923],
        '2024-03-05': [47797436, 18568374],
        '2024-03-06': [45488955, 17940109],
        '2024-03-07': [48832542, 19301713],
        '2024-03-08': [61455525, 23878360],
        '2024-03-09': [68040763, 26664238],
        '2024-03-10': [70345594, 26366184],
        '2024-03-11': [56093198, 20433989],
        '2024-03-12': [57340335, 21564298],
        '2024-03-13': [56108004, 20924348]
    },
    legends: [
        {
            id: 1,
            displayName: 'ironSource Ads',
            color: '#6794DC',
            displayFormat: 'shortCurrency'
        },
        {
            id: 2,
            displayName: 'Unity Ads',
            color: '#67B7DC',
            displayFormat: 'shortCurrency'
        }
    ]
};

export const CHART_DATA_MOCK_BIG_ICONS: ChartData = {
    data: {
        '2024-01-01': [2048, 5432, 3432, 6732, 5232],
        '2024-01-02': [2458, 6543, 2343, 3443, 6543],
        '2024-01-03': [3214, 4345, 4545, 4645, 2345],
        '2024-01-04': [2323, 6543, 5443, 5543, 4543],
        '2024-01-05': [4321, 2345, 2445, 4645, 2345],
        '2024-01-06': [4566, 5432, 1532, 3532, 6332],
        '2024-01-07': [6543, 1234, 1334, 2334, 1534]
    },
    legends: [
        {
            id: 1,
            displayName: 'Chocolate Chip Cookie Game',
            icon: 'v4/branded/ios',
            displayFormat: 'shortCurrency'
        },
        {
            id: 2,
            displayName: 'Bobbie & Friends: Cat Life Simulator',
            icon: 'v4/branded/ios',
            displayFormat: 'shortCurrency'
        },
        {
            id: 3,
            displayName: 'Words for Winners',
            icon: 'v4/branded/android',
            displayFormat: 'shortCurrency'
        },
        {
            id: 4,
            displayName: 'Girl Power Cupcake Maker',
            icon: 'v4/branded/ios',
            displayFormat: 'shortCurrency'
        },
        {
            id: 5,
            displayName: 'Dizzy Diamond Puzzle',
            icon: 'v4/branded/android',
            displayFormat: 'shortCurrency'
        }
    ]
};

export const CHART_CUSTOM_COLORS_DATA_MOCK: ChartData = {
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
        {id: 9930, displayName: 'Unity Ads', displayFormat: 'shortCurrency', color: '#FFC107'},
        {id: 9928, displayName: 'ironSource Ads', displayFormat: 'shortCurrency', color: '#FF5722'}
    ]
};

export const CHART_PIE_DATA_MOCK: FusionChartPieData = {
    displayFormat: 'shortCurrency',
    data: {
        ironSource: 8781958,
        UnityAds: 14345876
    }
};

export const CHART_PIE_CUSTOM_COLORS_DATA_MOCK: FusionChartPieData = {
    displayFormat: 'shortCurrency',
    data: [
        {
            displayText: 'Unity Ads',
            value: 8781958,
            color: '#FFC107'
        },
        {
            displayText: 'ironSource Ads',
            value: 14345876,
            color: '#FF5722'
        }
    ]
};
