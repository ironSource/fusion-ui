import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {CalendarBaseComponent, HOVER_CURRENT_CLASS, HOVER_RANGE_CLASS} from '@ironsource/fusion-ui/components/calendar/common/base';
import {CalendarType, Day} from '@ironsource/fusion-ui/components/calendar/entities';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';

@Component({
    selector: 'fusion-calendar',
    templateUrl: '../common/base/calendar.base.component.html',
    styleUrls: ['./calendar.component.scss'],
    host: {'ui-version': '3'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent extends CalendarBaseComponent implements OnDestroy, OnInit {
    private onDestroy$ = new Subject<void>();
    /** @internal */
    @ViewChildren('date', {read: ElementRef}) dateList: QueryList<ElementRef>;

    /** @internal */
    daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    constructor(
        /** @internal */
        calendarService: CalendarService,
        /** @internal */
        public renderer: Renderer2
    ) {
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

    /** @internal */
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
    /** @internal */
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
    /** @internal */
    selectDay(day: Day) {
        super.selectDay(day);
        this.hoverEnd();
    }
    /** @internal */
    hoverEnd() {
        if (this.configuration.calendarType === CalendarType.DATE_RANGE) {
            this.calendarService.dayHoverEnd.emit({parentDaterangeId: this.configuration.parentDaterangeId});
        }
    }
}
