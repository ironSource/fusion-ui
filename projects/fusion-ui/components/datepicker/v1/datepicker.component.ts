import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewChild
} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {isDate, isNullOrUndefined, isUndefined} from '@ironsource/fusion-ui/utils';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {BehaviorSubject, Subject} from 'rxjs';
import {DatepickerMode} from './datepicker-mode';
import {DatepickerDate} from './datepicker-date';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v1';
import {TimezoneService} from '@ironsource/fusion-ui/services/timezone';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';
import {DAY_NAMES} from '@ironsource/fusion-ui/components/calendar/common/base';
import {Datepicker} from './datepicker';
import {DEFAULT_TIMEZONE_OPTIONS} from './datepicker.config';

@Component({
    selector: 'fusion-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatepickerComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, ControlValueAccessor {
    @Input() set isOpened(value: boolean) {
        this.isOpen$.next(!isNullOrUndefined(value) ? value : false);
    }
    @Input() isTimePicker = false;
    @Input() isTimeZonePicker = false;
    @Input() isDisabled = false;
    @Input() style: 'drop-down' | 'combo-box' = 'drop-down';
    @Input() labelDateFormat = 'd MMM, y';
    @Input() placeholder = 'Select Date';
    @Input() error = '';
    @Input() defaultTimezone = 'UTC';
    @Input() minDate: Date;
    @Input() maxDate: Date;
    @Input() prefix: string;
    @Input() mode: DatepickerMode = DatepickerMode.Regular;
    @Input() suppressClickOnRemove = false;

    @ViewChild('hoursPicker') hoursPicker: InputComponent;
    @ViewChild('minutesPicker') minutesPicker: InputComponent;

    onDestroy$ = new Subject();
    dropDownStyle;
    selectedDate: Datepicker;
    today: Date;
    calendarDate: Date;
    datesInputs: FormGroup;
    timeZonesOptions: Array<any>;
    daysOfWeek = DAY_NAMES.map(name => name.charAt(0).toUpperCase() + name.toLocaleLowerCase().slice(1));
    weeks: DatepickerDate[][];
    datepickerAvailableModes = DatepickerMode;
    isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private timezoneService: TimezoneService,
        private calendarService: CalendarService,
        private renderer: Renderer2,
        private fb: FormBuilder,
        private datePipe: DatePipe,
        public cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.dropDownStyle = this.style === 'drop-down';
        this.today = new Date();
        this._setSelectedDate();

        this.calendarDate = new Date(this.today);
        this.setWeeks(this.calendarDate);

        this.datesInputs = this.fb.group({
            dateVal: '',
            hoursVal: '00',
            minutesVal: '00',
            timezone: this.isTimeZonePicker ? this.defaultTimezone : ''
        });

        this.timeZonesOptions = this.timezoneService.timeZones;
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit(): void {
        this.initData();
        this.initListeners();
        if (this.isTimePicker) {
            this.setMinMaxForTimeInput();
        }
    }

    ngOnChanges(changes) {
        if (
            this.selectedDate &&
            ((changes.minDate && changes.minDate.currentValue !== changes.minDate.previousValue) ||
                (changes.maxDate && changes.maxDate.currentValue !== changes.maxDate.previousValue))
        ) {
            this.setWeeks(this.selectedDate.date ? this.selectedDate.date : this.today);
        }
    }

    get selectedLabel() {
        return !isNullOrUndefined(this.selectedDate.date) && isDate(this.selectedDate.date)
            ? this.datePipe.transform(this.selectedDate.date, this.labelDateFormat)
            : this.placeholder;
    }

    private setMinMaxForTimeInput() {
        setTimeout(() => {
            if (!!this.hoursPicker.elementRef.nativeElement.querySelector('input')) {
                this.renderer.setAttribute(this.hoursPicker.elementRef.nativeElement.querySelector('input'), 'min', '0');
                this.renderer.setAttribute(this.hoursPicker.elementRef.nativeElement.querySelector('input'), 'max', '23');
            }
            if (!!this.minutesPicker.elementRef.nativeElement.querySelector('input')) {
                this.renderer.setAttribute(this.minutesPicker.elementRef.nativeElement.querySelector('input'), 'min', '0');
                this.renderer.setAttribute(this.minutesPicker.elementRef.nativeElement.querySelector('input'), 'max', '59');
            }
        });
    }

    private isDate(valToCheck): boolean {
        return isDate(new Date(valToCheck));
    }

    private _setSelectedDate(value?): void {
        if (!isNullOrUndefined(value) && !isUndefined(value.date) && this.isDate(value.date)) {
            if (isDate(value.date)) {
                this.selectedDate = value;
            } else {
                this.selectedDate = {
                    date: this.calendarService.getDateAsUTC(new Date(value.date))
                };
            }
        } else if (!isNullOrUndefined(value) && isUndefined(value.date) && this.isDate(value)) {
            this.selectedDate = {
                date: typeof value === 'string' ? this.calendarService.getDateAsUTC(new Date(value)) : value,
                timezone: this.defaultTimezone
            };
        } else {
            this.selectedDate = {
                date: undefined,
                timezone: this.defaultTimezone
            };
        }
        this.cdr.markForCheck();
    }

    private selectCurrentDate(): void {
        for (const week of this.weeks) {
            for (const day of week) {
                if (this.isDatesEqual(day.date, this.selectedDate.date, 'day')) {
                    day.isSelected = true;
                } else {
                    day.isSelected = false;
                }
            }
        }
    }

    private _toggleDateInputErrClass(hasError: boolean): void {
        hasError ? (this.error = 'Invalid Date') : (this.error = '');
    }

    private initData(): void {
        if (this.isTimeZonePicker && this.selectedDate) {
            this.datesInputs.get('timezone').patchValue(this._getSelectedTimezone());
        }
    }

    private initListeners(): void {
        this.datesInputs.get('dateVal').valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.onDateValueChanged.bind(this));

        this.datesInputs.get('hoursVal').valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.onHoursValueChanged.bind(this));

        this.datesInputs.get('minutesVal').valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.onMinutesValueChanged.bind(this));

        this.datesInputs.get('timezone').valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.onTimezoneValueChanged.bind(this));
    }

    private onDateValueChanged(value: string): void {
        if (this.formatDateToString(this.selectedDate.date) === value) {
            return;
        }
        if (!isNullOrUndefined(value) && this.isDate(value)) {
            this.selectedDate.date = this.calendarService.getDateAsUTC(new Date(value));
            this.setWeeks(this.selectedDate.date);
            this.calendarDate = this.selectedDate.date;
        } else {
            this.selectedDate.date = null;
            // set calendar for today in this case
            this.calendarDate = this.calendarService.getDateAsUTC(new Date(this.today));
            this.setWeeks(this.calendarDate);
        }
        this._toggleDateInputErrClass(value && value.length !== 0 && !this.isDate(value));
        this.propagateChange(this.selectedDate);
    }

    private onHoursValueChanged(value: string): void {
        if (this.isTimePicker && this.selectedDate.date) {
            this.selectedDate.date.setHours(parseInt(value || '0', 10), this.selectedDate.date.getMinutes(), 0, 0);
            this.propagateChange(this.selectedDate);
        }
    }

    private onMinutesValueChanged(value: string): void {
        if (this.isTimePicker && this.selectedDate.date) {
            this.selectedDate.date.setMinutes(parseInt(value || '0', 10), 0, 0);
            this.propagateChange(this.selectedDate);
        }
    }

    private onTimezoneValueChanged(value: DropdownOption[]): void {
        if (this.isTimeZonePicker) {
            this.selectedDate.timezone = value[0].id as string;
            this.propagateChange(this.selectedDate);
        }
    }

    private _getSelectedTimezone(): DropdownOption[] {
        return this.isTimeZonePicker && this.timeZonesOptions && this.selectedDate
            ? this.timeZonesOptions.filter(item => item.id === this.selectedDate.timezone)
            : DEFAULT_TIMEZONE_OPTIONS;
    }

    /**
     * On external (out component click event )
     */
    onOutsideClick() {
        if (this.isOpen$.getValue()) {
            this.isOpen$.next(false);
        }
    }

    /**
     * On input get focus
     */
    onInputFocus() {
        if (!this.isDisabled) {
            this.isOpen$.next(!this.isOpen$.getValue());
        }
        this.propagateTouched();
    }

    /**
     * gen array of weeks / days for calendar render
     * @param dateToCalendar - Date for calendar
     */
    private setWeeks(date: Date) {
        this.weeks = this.getCalendar(date.getMonth(), date.getFullYear());
    }

    getCalendar(month, year) {
        const weeks = [];
        const firstDay = new Date(year, month).getDay();
        const selectedMonthDate = new Date(year, month);
        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row
            const week = [];

            for (let j = 0; j < 7; j++) {
                const currentDate = new Date(year, month, date);
                if (i === 0 && j < firstDay) {
                    week[j] = new DatepickerDate(currentDate, false, false, false, false);
                } else if (date > this.getDaysInMonth(month, year)) {
                    break;
                } else {
                    week[j] = new DatepickerDate(
                        currentDate,
                        this.isDatesEqual(currentDate, this.today, 'day'),
                        this.isDatesEqual(currentDate, selectedMonthDate, 'month'),
                        !isNullOrUndefined(this.selectedDate.date) ? this.isDatesEqual(currentDate, this.selectedDate.date, 'day') : false,
                        this.isDateDisabled(currentDate)
                    );
                    date++;
                }
            }

            if (week.length > 0) {
                weeks.push(week);
            }
        }

        return weeks;
    }

    private getDaysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    private isDatesEqual(dateA: Date, dateB: Date, granularity: 'month' | 'day'): boolean {
        dateA = new Date(dateA);
        dateB = new Date(dateB);
        dateA.setHours(0, 0, 0, 0);
        dateB.setHours(0, 0, 0, 0);
        if (granularity === 'day') {
            return dateA.getTime() === dateB.getTime();
        } else if (granularity === 'month') {
            return new Date(dateA.getFullYear(), dateA.getMonth()).getTime() === new Date(dateB.getFullYear(), dateB.getMonth()).getTime();
        }
    }

    private isDateDisabled(date: Date): boolean {
        const isBefore = !isNullOrUndefined(this.minDate) ? date.getTime() < this.minDate.getTime() : false;
        const isAfter = !isNullOrUndefined(this.maxDate) ? date.getTime() > this.maxDate.getTime() : false;
        return isBefore || isAfter;
    }

    private formatDateToString(date: Date): string {
        return (
            date && date.toISOString().split('T') && new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0]
        );
    }

    private getDateHours(date: Date): string {
        const hours = date ? date.getHours() : new Date().getHours();
        return hours > 9 ? `${hours}` : `0${hours}`;
    }

    private getDateMinutes(date: Date): string {
        date = date || new Date();
        return `${date.getMinutes()}`;
    }

    /**
     * On month changed
     * @param direction month changing delta (1: for next, -1: for prev. )
     */
    onMonthChangeClicked(direction: number = 0) {
        if (direction !== 0) {
            this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + direction));
            this.setWeeks(this.calendarDate);
        }
    }

    /**
     * Select date on calendar;
     */
    onDateClick(dateToSelect, $event) {
        if (
            !dateToSelect.isSelected &&
            dateToSelect.isInMonth &&
            this.formatDateToString(dateToSelect.date) !== this.datesInputs.get('dateVal').value
        ) {
            this.datesInputs.get('dateVal').patchValue(this.formatDateToString(dateToSelect.date));
        }
        if (this.suppressClickOnRemove) {
            $event.stopPropagation();
            this.isOpen$.next(false);
        }
    }

    /**
     * check if components has selected date
     */
    isDateSelected(): boolean {
        return !isNullOrUndefined(this.selectedDate.date);
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     */
    propagateChange = (_: Datepicker) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     */
    writeValue(value: Datepicker): void {
        this._setSelectedDate(value);
        this.selectCurrentDate();
        this.datesInputs.patchValue(
            {
                dateVal: this.selectedDate.date ? this.formatDateToString(this.selectedDate.date) : null,
                hoursVal: this.getDateHours(this.selectedDate.date),
                minutesVal: this.getDateMinutes(this.selectedDate.date),
                timezone: this._getSelectedTimezone()
            },
            {emitEvent: value !== null}
        );
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * on click
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
