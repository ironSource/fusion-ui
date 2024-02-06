import {ChartData, FusionChartPieData} from '@ironsource/fusion-ui/components/chart/common/base';

export const CHART_DATES_MOCK: string[] = (daysNumber => {
    const dates: string[] = [];
    for (let i = 0; i <= daysNumber; i++) {
        dates.push(new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().substring(0, 10));
    }
    return dates;
})(60);

export const CHART_DATA_MOCK: ChartData = {
    data: {
        '2017-04-13': [8048.16, 1588.59, 1583.47, 1037.83, 899.56, 1582.28, 726.11, 385.66],
        '2017-04-14': [8458.49, 1902.16, 1375.9, 1242.31, 952.88, 1628.72, 664.01, 426.95],
        '2017-04-15': [7997.71, 1678.1, 1395.44, 1193.07, 810.74, 1556.24, 681.19, 410.84],
        '2017-04-16': [8098.79, 1824.22, 1399.59, 1109.07, 812.16, 1588.8, 697.13, 418.4],
        '2017-04-17': [8274.74, 1825.24, 1281.23, 1079.15, 962.45, 1682.44, 700.84, 463.31],
        '2017-04-18': [8148.92, 1835.68, 1323.65, 1181.38, 834.57, 1576.21, 686.56, 439.27],
        '2017-04-19': [8049.24, 1563.08, 1349.97, 1194.31, 931.96, 1581.99, 684.67, 480.08],
        '2017-04-20': [8051.27, 1817.77, 1391.99, 1194.24, 750.56, 1538.59, 654.87, 437.54],
        '2017-04-21': [8100.8, 1817.48, 1288.4, 1130.7, 943.76, 1527.4, 650.1, 476.39],
        '2017-04-22': [7809.69, 1699.39, 1151.59, 1094.15, 903.09, 1579.18, 656.18, 454.44],
        '2017-04-23': [8208.56, 1693.37, 1496.27, 1215.94, 802.38, 1536.2, 746.59, 431.12],
        '2017-04-24': [8482.93, 1860.5, 1493.19, 1172.81, 923.8, 1635.11, 694.62, 457],
        '2017-04-25': [8694.13, 1887.62, 1474.25, 1155.98, 851.97, 1827.26, 758.28, 463.07],
        '2017-04-26': [8136.61, 1695.01, 1353.85, 1295.98, 875.55, 1540.58, 665.75, 455.26]
    },
    legends: [
        {id: 'totals', displayName: 'Sum', displayFormat: 'currency'},
        {id: 9930, displayName: 'AdColony', displayFormat: 'currency'},
        {id: 9928, displayName: 'Vungle', displayFormat: 'currency'},
        {id: 9935, displayName: 'AppLovin', displayFormat: 'currency'},
        {id: 9936, displayName: 'Chartboost', displayFormat: 'currency'},
        {id: 9899, displayName: 'ironSource', displayFormat: 'currency'},
        {id: 9917, displayName: 'UnityAds', displayFormat: 'currency'},
        {id: 9929, displayName: 'Flurry', displayFormat: 'currency'}
    ]
};

export const CHART_BAR_DATA_MOCK: ChartData = {
    data: {
        '2017-04-13': [8048.16, 1588.59, 1583.47, 1037.83, 899.56, 1582.28, 726.11, 385.66]
    },
    legends: [
        {id: 'totals', displayName: 'Sum', displayFormat: 'currency'},
        {id: 9930, displayName: 'AdColony', displayFormat: 'currency'},
        {id: 9928, displayName: 'Vungle', displayFormat: 'currency'},
        {id: 9935, displayName: 'AppLovin', displayFormat: 'currency'},
        {id: 9936, displayName: 'Chartboost', displayFormat: 'currency'},
        {id: 9899, displayName: 'ironSource', displayFormat: 'currency'},
        {id: 9917, displayName: 'UnityAds', displayFormat: 'currency'},
        {id: 9929, displayName: 'Flurry', displayFormat: 'currency'}
    ]
};

export const CHART_DATA_STACKEDLINE_MOCK: ChartData = {
    data: {
        '2017-04-13': [3172.06, 1588.59, 1583.47],
        '2017-04-14': [3278.06, 1902.16, 1375.9],
        '2017-04-15': [3073.54, 1678.1, 1395.44],
        '2017-04-16': [3223.81, 1824.22, 1399.59],
        '2017-04-17': [3106.47, 1825.24, 1281.23],
        '2017-04-18': [3159.33, 1835.68, 1323.65],
        '2017-04-19': [2913.05, 1563.08, 1349.97],
        '2017-04-20': [3209.76, 1817.77, 1391.99],
        '2017-04-21': [3105.88, 1817.48, 1288.4],
        '2017-04-22': [2850.98, 1699.39, 1151.59],
        '2017-04-23': [3189.64, 1693.37, 1496.27],
        '2017-04-24': [3353.69, 1860.5, 1493.19],
        '2017-04-25': [3361.8, 1887.62, 1474.25],
        '2017-04-26': [3048.86, 1695.01, 1353.85]
    },
    legends: [
        {id: 'totals', displayName: 'Sum'},
        {id: 9930, displayName: 'AdColony'},
        {id: 9928, displayName: 'Vungle'}
    ]
};

export const CHART_PIE_DATA_MOCK: FusionChartPieData = {
    data: {
        Vungle: 1902.16,
        AppLovin: 1278.1,
        Chartboost: 1824.22,
        ironSource: 2825.24,
        UnityAds: 835.68,
        Flurry: 1563.08
    }
};

export const CHART_DATA_TODAY_MOCK: ChartData = {
    ...{
        legends: [
            {
                id: 'totals',
                displayName: 'Sum',
                displayFormat: 'currency',
                hidden: true
            },
            {
                id: 434904,
                displayName: 'Ultra Flashlight',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434905,
                displayName: 'Subway Surfers',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434906,
                displayName: 'Simple My Notepad LOCK MEMO',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434907,
                displayName: 'Magic Tiles 3',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434908,
                displayName: 'NoteFlow — one note for life',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434910,
                displayName: 'Q-Recorder - Voice Recorder',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434911,
                displayName: 'slither.io',
                displayFormat: 'currency',
                hidden: false
            }
        ]
    },
    ...JSON.parse(`{"data": {"${CHART_DATES_MOCK[0]}": [593212, 57967, 93374, 85164, 75928, 70212, 79906, 87391]}}`)
};

export const CHART_DATA_MOCK_7DAYS: ChartData = {
    ...{
        legends: [
            {
                id: 434910,
                displayName: 'Q-Recorder - Voice Recorder',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434904,
                displayName: 'Ultra Flashlight',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434905,
                displayName: 'Subway Surfers',
                displayFormat: 'currency',
                hidden: false
            }
        ]
    },
    ...JSON.parse(
        // eslint-disable-next-line max-len
        `{"data": {"${CHART_DATES_MOCK[6]}": [430717, 381563, 332154], "${CHART_DATES_MOCK[5]}": [485379, 405682, 152396], "${CHART_DATES_MOCK[4]}": [487547, 426359, 225632], "${CHART_DATES_MOCK[3]}": [436877, 441526, 226351], "${CHART_DATES_MOCK[2]}": [400882, 352696, 185632], "${CHART_DATES_MOCK[1]}": [397643, 362563, 162563], "${CHART_DATES_MOCK[0]}": [93212, 81452, 69652]}}`
    )
};

export const CHART_DATA_MOCK_YESTERDAY: ChartData = {
    ...{
        legends: [
            {
                id: 'totals',
                displayName: 'Sum',
                displayFormat: 'currency',
                hidden: true
            },
            {
                id: 434904,
                displayName: 'Ultra Flashlight',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434905,
                displayName: 'Subway Surfers',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434906,
                displayName: 'Simple My Notepad LOCK MEMO',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434907,
                displayName: 'Magic Tiles 3',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434908,
                displayName: 'NoteFlow — one note for life',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434910,
                displayName: 'Q-Recorder - Voice Recorder',
                displayFormat: 'currency',
                hidden: false
            },
            {
                id: 434911,
                displayName: 'slither.io',
                displayFormat: 'currency',
                hidden: false
            }
        ]
    },
    ...JSON.parse(`{"data": {"${CHART_DATES_MOCK[1]}": [593212, 57967, 93374, 85164, 75928, 70212, 79906, 87391]}}`)
};

export const CHART_DATA_ONE_DAY: ChartData = {
    legends: [
        {
            id: 'totals',
            displayName: 'Sum',
            displayFormat: 'currency',
            hidden: false
        }
    ],
    data: {
        '2018-10-01': [0],
        '2018-10-02': [0],
        '2018-10-03': [0],
        '2018-10-04': [544940],
        '2018-10-05': [0],
        '2018-10-06': [0],
        '2018-10-07': [0],
        '2018-10-08': [0]
    }
};

export const CHART_DATA_50_DAYS: ChartData = {
    legends: [
        {
            id: 'totals',
            displayName: 'Sum',
            displayFormat: 'currency',
            hidden: false
        }
    ],
    data: {
        '2018-09-30': [408562],
        '2018-10-01': [527674],
        '2018-10-02': [420472],
        '2018-10-03': [555715],
        '2018-10-04': [544940],
        '2018-10-05': [540148],
        '2018-10-06': [524642],
        '2018-10-07': [622471],
        '2018-10-08': [557615],
        '2018-10-09': [474557],
        '2018-10-10': [369149],
        '2018-10-11': [468415],
        '2018-10-12': [395684],
        '2018-10-13': [498365],
        '2018-10-14': [572165],
        '2018-10-15': [465142],
        '2018-10-16': [487712],
        '2018-10-17': [567480],
        '2018-10-18': [358020],
        '2018-10-19': [623904],
        '2018-10-20': [517274],
        '2018-10-21': [485676],
        '2018-10-22': [381960],
        '2018-10-23': [399584],
        '2018-10-24': [481241],
        '2018-10-25': [438396],
        '2018-10-26': [437043],
        '2018-10-27': [544440],
        '2018-10-28': [477653],
        '2018-10-29': [519017],
        '2018-10-30': [441029],
        '2018-10-31': [600522],
        '2018-11-01': [450960],
        '2018-11-02': [434672],
        '2018-11-03': [331535],
        '2018-11-04': [559256],
        '2018-11-05': [485249],
        '2018-11-06': [408303],
        '2018-11-07': [503583],
        '2018-11-08': [274957],
        '2018-11-09': [489139],
        '2018-11-10': [520263],
        '2018-11-11': [503727],
        '2018-11-12': [453667],
        '2018-11-13': [465168],
        '2018-11-14': [430717],
        '2018-11-15': [485379],
        '2018-11-16': [487547],
        '2018-11-17': [436877],
        '2018-11-18': [400882],
        '2018-11-19': [397643]
    }
};
