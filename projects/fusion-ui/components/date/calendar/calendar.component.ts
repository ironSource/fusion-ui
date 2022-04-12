import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Injector,
    Input,
    OnInit,
    Output,
    QueryList,
    Renderer2,
    ViewChildren
} from '@angular/core';
import {DAY_NAMES} from '../entities/config';
import {CalendarService} from './calendar.service';
import {Day} from '../entities/day';
import {FusionBase} from '@ironsource/fusion-ui/components/fusion-base';
import {getDateDayTime} from '@ironsource/fusion-ui/utils';
import {filter, takeUntil} from 'rxjs/operators';
import {CalendarComponentConfigurations} from './calendar-component-configurations';
import {DEFAULT_CALENDAR_COMPONENT_CONFIGURATION} from './calendar.config';
import {CalendarType} from './calendar-type.enum';

const DAY_UNIX_TIMESTAMP = 86400000;
const HOVER_RANGE_CLASS = 'hover-range';
const HOVER_CURRENT_CLASS = 'hover-current';

@Component({
    selector: 'fusion-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss', './calendar.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent extends FusionBase implements OnInit {
    @Input()
    set configuration(configuration: CalendarComponentConfigurations) {
        if (configuration.month) {
            this.calendarService.createMonth(configuration.month, configuration.maxDate);
        }
        this._configurations = configuration;
    }

    get configuration(): CalendarComponentConfigurations {
        return this._configurations;
    }

    @Output() daySelected: EventEmitter<Day> = new EventEmitter();
    @ViewChildren('date', {read: ElementRef}) dateList: QueryList<ElementRef>;

    daysOfTheWeek = DAY_NAMES;
    _configurations: CalendarComponentConfigurations = DEFAULT_CALENDAR_COMPONENT_CONFIGURATION;

    constructor(injector: Injector, public calendarService: CalendarService, private renderer: Renderer2) {
        super(injector);
    }

    ngOnInit() {
        if (this.configuration.month) {
            this.calendarService.createMonth(this.configuration.month, this.configuration.maxDate);
        }

        this.initListeners();
    }

    initListeners() {
        this.calendarService.dayHoverStart
            .pipe(
                takeUntil(this.onDestroy$),
                filter(({parentDaterangeId}) => parentDaterangeId === this.configuration.parentDaterangeId)
            )
            .subscribe(({day, hoveredElement}) => {
                this.dateList.forEach(item => {
                    const dayInMonth = Number(item.nativeElement.dataset.datetime);
                    if (dayInMonth < day.date.getTime() && this._configurations.selection.endDate.getTime() <= dayInMonth) {
                        this.renderer.addClass(item.nativeElement, HOVER_RANGE_CLASS);
                        this.renderer.removeClass(item.nativeElement, HOVER_CURRENT_CLASS);
                    } else if (hoveredElement !== item.nativeElement) {
                        this.renderer.removeClass(item.nativeElement, HOVER_RANGE_CLASS);
                        this.renderer.removeClass(item.nativeElement, HOVER_CURRENT_CLASS);
                    }
                });
            });

        this.calendarService.dayHoverEnd
            .pipe(
                takeUntil(this.onDestroy$),
                filter(({parentDaterangeId}) => parentDaterangeId === this.configuration.parentDaterangeId)
            )
            .subscribe(() => {
                this.dateList.forEach(item => {
                    this.renderer.removeClass(item.nativeElement, HOVER_RANGE_CLASS);
                    this.renderer.removeClass(item.nativeElement, HOVER_CURRENT_CLASS);
                });
            });
    }

    selectDay(day: Day) {
        this.daySelected.emit(day);
        this.hoverEnd();
    }

    isDisabled(day: Day): boolean {
        return !day.date || (day.isInFuture && !this.configuration.allowFutureSelection) || this.isInMInMaxRange(day.date);
    }

    isActive(value: Day): boolean {
        if (value.date && this.configuration.selection.startDate && this.configuration.selection.endDate) {
            return (
                this.calendarService.compareDates(value.date, this.configuration.selection.startDate) ||
                this.calendarService.compareDates(value.date, this.configuration.selection.endDate)
            );
        }
        return false;
    }

    dayHovered(day: Day, event: MouseEvent) {
        if (
            this.configuration.calendarType === CalendarType.DATE_PICKER ||
            !(this.configuration?.selection?.date ?? this.configuration?.selection?.endDate ?? this.configuration?.selection?.startDate)
        ) {
            return;
        }

        const hoveredElement = event.target as Node;
        const isNotDatePicker = !this.configuration.selection.date;
        const isStartSelection = this.configuration.selection.startDate.getTime() === this.configuration.selection.endDate.getTime();
        const isHoveredDayBiggerThenSelected = day.date.getTime() > this.configuration.selection.startDate.getTime();
        const isStyleV2 = this.selectedVersion$.getValue() === this.styleVersion.V2;
        if (isStyleV2 && isNotDatePicker && isStartSelection) {
            if (isHoveredDayBiggerThenSelected) {
                this.renderer.addClass(hoveredElement, HOVER_CURRENT_CLASS);
                this.renderer.removeClass(hoveredElement, HOVER_RANGE_CLASS);
                const data = {
                    parentDaterangeId: this.configuration.parentDaterangeId,
                    day,
                    hoveredElement
                };
                this.calendarService.dayHoverStart.emit(data);
            } else {
                this.hoverEnd();
            }
        }
    }

    hoverEnd() {
        if (this.configuration.calendarType === CalendarType.DATE_RANGE) {
            this.calendarService.dayHoverEnd.emit({parentDaterangeId: this.configuration.parentDaterangeId});
        }
    }

    getDayClasses(day: Day) {
        const selectedStartDateTimestamp = getDateDayTime(this.configuration.selection.startDate);
        const selectedEndDateTimestamp = getDateDayTime(this.configuration.selection.endDate);
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
