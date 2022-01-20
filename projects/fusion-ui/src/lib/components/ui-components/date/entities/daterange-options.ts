import {DaterangePresets} from './daterange-presets.enum';
import {CalendarType} from '../calendar/calendar-type.enum';

export interface DaterangeOptions {
    calendarAmount?: number;
    format?: string;
    presets?: DaterangePresets[] | false;
    size?: 'medium' | 'large';
    placeholder?: string;
    overlayAlignPosition?: 'left' | 'right';
    allowFutureSelection?: boolean;
}
