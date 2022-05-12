import {DaterangePresets} from './daterange-presets.enum';

export interface DaterangeOptions {
    calendarAmount?: number;
    format?: string;
    presets?: DaterangePresets[];
    size?: 'medium' | 'large';
    placeholder?: string;
    overlayAlignPosition?: 'left' | 'right';
    allowFutureSelection?: boolean;
}
