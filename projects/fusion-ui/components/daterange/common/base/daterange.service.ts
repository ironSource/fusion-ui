import {Injectable} from '@angular/core';
import {DateRange, DaterangeCustomPreset, DaterangePresets} from '@ironsource/fusion-ui/components/daterange/entities';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';
import {DEFAULT_DATERANGE_PRESET_LIST, DEFAULT_DATERANGE_PRESET_NAMES} from './config';

@Injectable({
    providedIn: 'root'
})
export class DaterangeService {
    constructor(protected calendarService: CalendarService) {}

    defaultPresetList = DEFAULT_DATERANGE_PRESET_LIST;
    presetDateFunctions = {
        [DaterangePresets.Today]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: now
            };
        },
        [DaterangePresets.Yesterday]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
            };
        },
        [DaterangePresets.Last3Days]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2)
            };
        },
        [DaterangePresets.Last7Days]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6)
            };
        },
        [DaterangePresets.Last14Days]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13)
            };
        },
        [DaterangePresets.Last30Days]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29)
            };
        },
        [DaterangePresets.ThisMonth]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                startDate: new Date(now.getFullYear(), now.getMonth(), 1),
                endDate: now
            };
        },
        [DaterangePresets.LastMonth]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                startDate: new Date(now.getFullYear(), now.getMonth() - 1, 1),
                endDate: new Date(now.getFullYear(), now.getMonth(), 0)
            };
        },
        [DaterangePresets.Last60Days]: (): DateRange => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 59)
            };
        }
    };

    isCustomPreset(preset: DaterangePresets | DaterangeCustomPreset): boolean {
        return preset.hasOwnProperty('label') && preset.hasOwnProperty('startDate') && preset.hasOwnProperty('endDate');
    }

    getPresetName(preset: DaterangePresets | DaterangeCustomPreset): string {
        return this.isCustomPreset(preset)
            ? (preset as DaterangeCustomPreset).label
            : DEFAULT_DATERANGE_PRESET_NAMES[preset as DaterangePresets];
    }

    determinePreset(
        daterange: DateRange,
        availablePresets: DaterangePresets[] | DaterangeCustomPreset[] = null,
        params?: any
    ): DaterangePresets | DaterangeCustomPreset {
        if (!availablePresets) {
            availablePresets = this.defaultPresetList;
        }
        if (!daterange || !daterange.startDate || !daterange.endDate) {
            return null;
        }
        return this.getPresetBySelectedDates(daterange, availablePresets);
    }

    getPresetRange(preset: DaterangePresets | DaterangeCustomPreset, params?: any): DateRange {
        return this.isCustomPreset(preset)
            ? {
                  startDate: (preset as DaterangeCustomPreset).startDate,
                  endDate: (preset as DaterangeCustomPreset).endDate
              }
            : this.presetDateFunctions[preset as DaterangePresets]();
    }

    getDefaultRange(): DateRange {
        return this.presetDateFunctions[DaterangePresets.Last7Days]();
    }

    getCurrentDateUTC = function () {
        return this.calendarService.getCurrentDateUTC();
    };

    getFullUTCDate(date = new Date()): Date {
        return new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        );
    }

    private getPresetBySelectedDates(
        daterange: DateRange,
        availablePresets: DaterangePresets[] | DaterangeCustomPreset[]
    ): DaterangePresets | DaterangeCustomPreset {
        for (const preset of availablePresets) {
            const presetRange = this.getPresetRange(preset);
            if (this.isSameRange(daterange, presetRange)) {
                return preset;
            }
        }
        return null;
    }

    private isSameRange(selectedRange: DateRange, presetRange: DateRange): boolean {
        return this.isSameDay(selectedRange.startDate, presetRange.startDate) && this.isSameDay(selectedRange.endDate, presetRange.endDate);
    }

    private isSameDay(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }
}
