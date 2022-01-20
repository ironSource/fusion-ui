export const EXAMPLE_DATA_MOCK = `{
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
            {id: 'totals', displayName: 'Sum'},
            {id: 9930, displayName: 'AdColony'},
            {id: 9928, displayName: 'Vungle'},
            {id: 9935, displayName: 'AppLovin'},
            {id: 9936, displayName: 'Chartboost'},
            {id: 9899, displayName: 'ironSource'},
            {id: 9917, displayName: 'UnityAds'},
            {id: 9929, displayName: 'Flurry'}
        ]
    }`;
export const EXAMPLE_DATA_PIE_MOCK = `{
    label: 'Total Users', // optional
    data: {
        Vungle: 1902.16,
        AppLovin: 1278.1,
        Chartboost: 1824.22,
        ironSource: 2825.24,
        UnityAds: 835.68,
        Flurry: 1563.08
    }
}`;
export const EXAMPLE_DATA_TODAY_MOCK = `{
        'legends': [{
            'id': 'totals',
            'displayName': 'Sum',
            'displayFormat': 'currency',
            'hidden': true
        }, {
            'id': 434904,
            'displayName': 'Ultra Flashlight',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434905,
            'displayName': 'Subway Surfers',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434906,
            'displayName': 'Simple My Notepad LOCK MEMO',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434907,
            'displayName': 'Magic Tiles 3',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434908,
            'displayName': 'NoteFlow — one note for life',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434910,
            'displayName': 'Q-Recorder - Voice Recorder',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434911,
            'displayName': 'slither.io',
            'displayFormat': 'currency',
            'hidden': false
        }],
        'data': {
            '2019-12-16': [593212, 57967, 93374, 85164, 75928, 70212, 79906, 87391]
        }
    }`;
export const EXAMPLE_DATA_7_DAYS_MOCK = `{
        'legends': [{
            'id': 'totals',
            'displayName': 'Sum',
            'displayFormat': 'currency',
            'hidden': false
        }],
        'data': {
            '2019-12-10': [430717],
            '2019-12-11': [485379],
            '2019-12-12': [487547],
            '2019-12-13': [436877],
            '2019-12-14': [400882],
            '2019-12-15': [397643],
            '2019-12-16': [593212]
        }
    }`;
export const EXAMPLE_DATA_YESTERDAY_MOCK = `{
        'legends': [{
            'id': 'totals',
            'displayName': 'Sum',
            'displayFormat': 'currency',
            'hidden': true
        }, {
            'id': 434904,
            'displayName': 'Ultra Flashlight',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434905,
            'displayName': 'Subway Surfers',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434906,
            'displayName': 'Simple My Notepad LOCK MEMO',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434907,
            'displayName': 'Magic Tiles 3',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434908,
            'displayName': 'NoteFlow — one note for life',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434910,
            'displayName': 'Q-Recorder - Voice Recorder',
            'displayFormat': 'currency',
            'hidden': false
        }, {
            'id': 434911,
            'displayName': 'slither.io',
            'displayFormat': 'currency',
            'hidden': false
        }],
        'data': {
            '2019-12-15': [593212, 57967, 93374, 85164, 75928, 70212, 79906, 87391]
        }
    }`;
export const EXAMPLE_DATA_ONE_DAY_MOCK = `{
        'legends': [{
            'id': 'totals',
            'displayName': 'Sum',
            'displayFormat': 'currency',
            'hidden': false
        }],
        'data': {
            '2018-10-01': [0],
            '2018-10-02': [0],
            '2018-10-03': [0],
            '2018-10-04': [544940],
            '2018-10-05': [0],
            '2018-10-06': [0],
            '2018-10-07': [0],
            '2018-10-08': [0]
        }
    }`;
export const EXAMPLE_DATA_50_DAYS_MOCK = `{
        'legends': [{
            'id': 'totals',
            'displayName': 'Sum',
            'displayFormat': 'currency',
            'hidden': false
        }],
        'data': {
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
    }`;
