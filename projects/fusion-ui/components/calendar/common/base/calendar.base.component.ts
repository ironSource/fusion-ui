import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {getDateDayTime, isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {CalendarComponentConfigurations} from './calendar-component-configurations';
import {DAY_NAMES, DEFAULT_CALENDAR_COMPONENT_CONFIGURATION} from './calendar.config';
import {CalendarService} from './calendar.service';
import {Day} from '@ironsource/fusion-ui/components/calendar/entities';

const DAY_UNIX_TIMESTAMP = 86400000;

@Directive()
export abstract class CalendarBaseComponent implements OnInit {
    @Input()
    set configuration(configuration: CalendarComponentConfigurations) {
        if (configuration.month) {
            this.calendarService.createMonth(configuration.month, configuration.maxDate);
        }
        this._configurations = configuration;
        if (!isNullOrUndefined(this._configurations.selection.date)) {
            this._configurations.selection.startDate = this._configurations.selection.startDate ?? this._configurations.selection.date;
            this._configurations.selection.endDate = this._configurations.selection.endDate ?? this._configurations.selection.date;
        }
    }

    get configuration(): CalendarComponentConfigurations {
        return this._configurations;
    }

    @Output() daySelected: EventEmitter<Day> = new EventEmitter();

    /** @internal */
    daysOfTheWeek = DAY_NAMES;
    /** @internal */
    _configurations: CalendarComponentConfigurations = DEFAULT_CALENDAR_COMPONENT_CONFIGURATION;

    constructor(
        /** @internal */
        public calendarService: CalendarService
    ) {}

    ngOnInit() {
        if (this.configuration.month) {
            this.calendarService.createMonth(this.configuration.month, this.configuration.maxDate);
        }
    }

    /** @internal */
    selectDay(day: Day) {
        this.daySelected.emit(day);
    }
    /** @internal */
    isDisabled(day: Day): boolean {
        return !day.date || (day.isInFuture && !this.configuration.allowFutureSelection) || this.isInMInMaxRange(day.date);
    }
    /** @internal */
    isActive(value: Day): boolean {
        if (
            value.date &&
            ((this.configuration.selection.startDate && this.configuration.selection.endDate) || this.configuration.selection.date)
        ) {
            return (
                this.calendarService.compareDates(
                    value.date,
                    this.configuration.selection.startDate ?? this.configuration.selection.date
                ) ||
                this.calendarService.compareDates(value.date, this.configuration.selection.endDate ?? this.configuration.selection.date)
            );
        }
        return false;
    }
    /** @internal */
    dayHovered(day: Day, event: MouseEvent) {}
    /** @internal */
    hoverEnd() {}
    /** @internal */
    getDayClasses(day: Day) {
        const selectedStartDateTimestamp = getDateDayTime(this.configuration.selection.startDate ?? this.configuration.selection.date);
        const selectedEndDateTimestamp = getDateDayTime(this.configuration.selection.endDate ?? this.configuration.selection.date);
        const dayDateTimestamp = getDateDayTime(day.date);

        const isStartDate = dayDateTimestamp === selectedStartDateTimestamp;
        const isEndDate = dayDateTimestamp === selectedEndDateTimestamp;

        return {
            today: day.isToday,
            oneDaySelection: dayDateTimestamp && isStartDate && isEndDate,
            selected: dayDateTimestamp >= selectedStartDateTimestamp && dayDateTimestamp <= selectedEndDateTimestamp,
            selectedStart: dayDateTimestamp !== selectedEndDateTimestamp && isStartDate,
            selectedEnd: isEndDate && dayDateTimestamp !== selectedStartDateTimestamp,
            selectedDayAfterDay: (isEndDate || isStartDate) && selectedEndDateTimestamp === selectedStartDateTimestamp + DAY_UNIX_TIMESTAMP,
            active: this.isActive(day),
            disabled: this.isDisabled(day)
        };
    }

    private isInMInMaxRange(date: Date): boolean {
        const minDate: Date = this.configuration?.minDate;
        const maxDate: Date = this.configuration?.maxDate;

        const isBeforeMinDate = minDate ? date.getTime() < minDate.getTime() : false;
        const isAfterMaxDate = maxDate ? date.getTime() > maxDate.getTime() : false;

        return isBeforeMinDate || isAfterMaxDate;
    }
}
