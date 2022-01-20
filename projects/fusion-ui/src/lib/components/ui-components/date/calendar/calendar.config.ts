import {CalendarType} from './calendar-type.enum';

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
