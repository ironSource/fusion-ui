import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {CalendarBaseComponent} from '../common/base/calendar.base.component';
import {Subject} from 'rxjs';
import {CalendarService} from '../common/calendar.service';
import {filter, takeUntil} from 'rxjs/operators';
import {HOVER_CURRENT_CLASS, HOVER_RANGE_CLASS} from '../common/calendar.config';
import {Day} from '../../entities/day';
import {CalendarType} from '../common/calendar-type.enum';

@Component({
    selector: 'fusion-calendar',
    templateUrl: '../common/base/calendar.base.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent extends CalendarBaseComponent implements OnDestroy {
    onDestroy$ = new Subject<void>();

    @ViewChildren('date', {read: ElementRef}) dateList: QueryList<ElementRef>;

    constructor(calendarService: CalendarService, public renderer: Renderer2) {
        super(calendarService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.initListeners();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
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

        if (isNotDatePicker && isStartSelection) {
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

    selectDay(day: Day) {
        super.selectDay(day);
        this.hoverEnd();
    }

    hoverEnd() {
        if (this.configuration.calendarType === CalendarType.DATE_RANGE) {
            this.calendarService.dayHoverEnd.emit({parentDaterangeId: this.configuration.parentDaterangeId});
        }
    }
}
