import {DaterangeSelection} from '../entities/daterange-selection';
import {CalendarType} from './calendar-type.enum';

export interface CalendarComponentConfigurations {
    month: Date;
    allowFutureSelection: boolean;
    parentDaterangeId: string;
    selection: DaterangeSelection;
    minDate?: Date;
    maxDate?: Date;
    calendarType: CalendarType;
}
