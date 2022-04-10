import {DaterangePresets} from './daterange-presets.enum';
export const DEFAULT_DATE_FORMAT = 'd MMM, y';
export const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const DEFAULT_DATERANGE_PRESET_LIST = [
    DaterangePresets.Today,
    DaterangePresets.Yesterday,
    DaterangePresets.Last7Days,
    DaterangePresets.Last14Days,
    DaterangePresets.Last30Days,
    DaterangePresets.ThisMonth,
    DaterangePresets.LastMonth
];
export const DEFAULT_DATERANGE_PRESET_NAMES = {
    [DaterangePresets.Today]: 'Today',
    [DaterangePresets.Yesterday]: 'Yesterday',
    [DaterangePresets.Last3Days]: 'Last 3 days',
    [DaterangePresets.Last7Days]: 'Last 7 days',
    [DaterangePresets.Last14Days]: 'Last 14 days',
    [DaterangePresets.Last30Days]: 'Last 30 days',
    [DaterangePresets.Last60Days]: 'Last 60 days',
    [DaterangePresets.ThisMonth]: 'This month',
    [DaterangePresets.LastMonth]: 'Last month'
};
