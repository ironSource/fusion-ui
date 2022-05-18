import {CalendarType} from '@ironsource/fusion-ui/components/calendar/entities';

export const HOVER_RANGE_CLASS = 'hover-range';
export const HOVER_CURRENT_CLASS = 'hover-current';

export const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const DEFAULT_CALENDAR_COMPONENT_CONFIGURATION = {
    month: new Date(),
    allowFutureSelection: false,
    parentDaterangeId: '',
    selection: {
        startDate: new Date(),
        endDate: new Date()
    },
    maxDate: null,
    calendarType: CalendarType.DATE_PICKER
};
