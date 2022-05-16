import {Injectable} from '@angular/core';
import {DEFAULT_DATERANGE_PRESET_LIST, DEFAULT_DATERANGE_PRESET_NAMES} from '../../entities/config';
import {CalendarService} from '../../calendar/common/calendar.service';
import {DaterangePresets} from '../../entities/daterange-presets.enum';
import {DaterangeSelection} from '../../entities/daterange-selection';
import {DateRange, DaterangeCustomPreset} from '../../entities/daterange-custom-presets';

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

    isCustomPreset(preset: DaterangePresets | DaterangeCustomPreset): boolean {
        return preset.hasOwnProperty('label') && preset.hasOwnProperty('startDate') && preset.hasOwnProperty('endDate');
    }

    getPresetName(preset: DaterangePresets | DaterangeCustomPreset): string {
        return this.isCustomPreset(preset)
            ? (preset as DaterangeCustomPreset).label
            : DEFAULT_DATERANGE_PRESET_NAMES[preset as DaterangePresets];
    }

    determinePreset(
        daterange: DaterangeSelection,
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

    getPresetRange(preset: DaterangePresets | DaterangeCustomPreset, params?: any): DaterangeSelection {
        return this.isCustomPreset(preset)
            ? {
                  startDate: (preset as DaterangeCustomPreset).startDate,
                  endDate: (preset as DaterangeCustomPreset).endDate
              }
            : this.presetDateFunctions[preset as DaterangePresets]();
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

    private getPresetBySelectedDates(
        daterange: DaterangeSelection,
        availablePresets: DaterangePresets[] | DaterangeCustomPreset[]
    ): DaterangePresets | DaterangeCustomPreset {
        for (const preset of availablePresets) {
            if (this.isCustomPreset(preset)) {
                const presetCustomRange: DateRange = {
                    startDate: (preset as DaterangeCustomPreset).startDate,
                    endDate: (preset as DaterangeCustomPreset).endDate
                };

                if (this.isSameRange(daterange as DateRange, presetCustomRange)) {
                    return preset;
                }
            } else {
                const presetRange = this.presetDateFunctions[preset as DaterangePresets]();
                if (
                    presetRange.startDate.getTime() === daterange.startDate.getTime() &&
                    presetRange.endDate.getTime() === daterange.endDate.getTime()
                ) {
                    return preset;
                }
            }
        }
        return null;
    }

    private isSameRange(selectedRange: DateRange, presetRange: DateRange): boolean {
        return this.isSameDay(selectedRange.startDate, presetRange.startDate) && this.isSameDay(selectedRange.endDate, presetRange.endDate);
    }

    private isSameDay(date1: Date, date2: Date): boolean {
        return date1.toISOString().split('T')[0] === date2.toISOString().split('T')[0];
    }
}
