import {DaterangeSelection} from '@ironsource/fusion-ui/components/daterange/entities';
import {CalendarType} from '@ironsource/fusion-ui/components/calendar/entities';

export interface CalendarComponentConfigurations {
    month: Date;
    allowFutureSelection: boolean;
    parentDaterangeId: string;
    selection: DaterangeSelection;
    minDate?: Date;
    maxDate?: Date;
    calendarType: CalendarType;
}
