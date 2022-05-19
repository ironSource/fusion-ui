import {DaterangePresets} from './daterange-presets.enum';
import {DaterangeCustomPreset} from './daterange-custom-presets';

export interface DaterangeOptions {
    calendarAmount?: number;
    format?: string;
    presets?: DaterangeCustomPreset[] | DaterangePresets[];
    size?: 'medium' | 'large';
    placeholder?: string;
    overlayAlignPosition?: 'left' | 'right';
    allowFutureSelection?: boolean;
    maxDaysInSelectedRange?: number;
}
