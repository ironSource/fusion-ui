import {Injectable} from '@angular/core';
import {DEFAULT_DATERANGE_PRESET_LIST, DEFAULT_DATERANGE_PRESET_NAMES} from '../entities/config';
import {CalendarService} from '../calendar/calendar.service';
import {DaterangePresets} from '../entities/daterange-presets.enum';
import {DaterangeSelection} from '../entities/daterange-selection';

@Injectable({
    providedIn: 'root'
})
export class DaterangeService {
    constructor(protected calendarService: CalendarService) {}

    defaultPresetList = DEFAULT_DATERANGE_PRESET_LIST;
    presetDateFunctions = {
        [DaterangePresets.Today]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: now
            };
        },
        [DaterangePresets.Yesterday]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
            };
        },
        [DaterangePresets.Last3Days]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2)
            };
        },
        [DaterangePresets.Last7Days]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6)
            };
        },
        [DaterangePresets.Last14Days]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13)
            };
        },
        [DaterangePresets.Last30Days]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29)
            };
        },
        [DaterangePresets.ThisMonth]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                startDate: new Date(now.getFullYear(), now.getMonth(), 1),
                endDate: now
            };
        },
        [DaterangePresets.LastMonth]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                startDate: new Date(now.getFullYear(), now.getMonth() - 1, 1),
                endDate: new Date(now.getFullYear(), now.getMonth(), 0)
            };
        },
        [DaterangePresets.Last60Days]: () => {
            const now = this.calendarService.getCurrentDateUTC();
            return {
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 59)
            };
        }
    };

    getPresetName(preset: DaterangePresets): string {
        return DEFAULT_DATERANGE_PRESET_NAMES[preset];
    }

    determinePreset(daterange: DaterangeSelection, availablePresets: DaterangePresets[] = null, params?: any): DaterangePresets {
        if (!availablePresets) {
            availablePresets = this.defaultPresetList;
        }

        if (!daterange || !daterange.startDate || !daterange.endDate) {
            return null;
        }

        for (const preset of availablePresets) {
            const presetRange = this.presetDateFunctions[preset]();
            if (
                presetRange.startDate.getTime() === daterange.startDate.getTime() &&
                presetRange.endDate.getTime() === daterange.endDate.getTime()
            ) {
                return preset;
            }
        }
    }

    getPresetRange(preset: DaterangePresets, params?: any): DaterangeSelection {
        return this.presetDateFunctions[preset]();
    }

    getDefaultRange(): DaterangeSelection {
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
}
