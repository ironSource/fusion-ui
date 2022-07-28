import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {BehaviorSubject, Subject} from 'rxjs';
import {isNullOrUndefined, isSameDates} from '@ironsource/fusion-ui/utils';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {DropdownSelectConfigurations} from '@ironsource/fusion-ui/components/dropdown-select/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {
    DaterangeCustomPreset,
    DaterangeOptions,
    DaterangePresets,
    DaterangeSelection
} from '@ironsource/fusion-ui/components/daterange/entities';
import {CalendarComponentConfigurations} from '@ironsource/fusion-ui/components/calendar/common/base';
import {CalendarType, Day} from '@ironsource/fusion-ui/components/calendar/entities';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';
import {DEFAULT_DATE_FORMAT} from './config';
import {DaterangeService} from './daterange.service';
import {DEFAULT_PLACEHOLDER_TEXT} from './daterange.configuration';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {map, takeUntil} from 'rxjs/operators';

@Directive()
export abstract class DaterangeBaseComponent extends ApiBase implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() id: string;
    @Input() presetsHeaderTemplate: TemplateRef<any>;
    @Input() minDate: Date;
    @Input() maxDate: Date;
    @Input() extraParams: any;

    @Input()
    set options(value: DaterangeOptions) {
        this.daterangeOptions = {...value};
        this.onOptionsChanges();
    }

    get options(): DaterangeOptions {
        return this.daterangeOptions;
    }

    @Output() closed = new EventEmitter();
    @Output() applied = new EventEmitter();
    @Output() daySelected = new EventEmitter<DaterangeSelection>();

    @ViewChild('overlay') overlay: ElementRef;
    @ViewChild('chipContent', {static: true}) chipContent: TemplateRef<any>;
    @ViewChild('trigger') trigger: ElementRef;

    dropdownSelectConfigurations$ = new BehaviorSubject<DropdownSelectConfigurations>({});

    pevIconName: IconData;
    nextIconName: IconData;

    isOpen$ = new BehaviorSubject<boolean>(false);
    error = '';
    currentMonths: Date[] = [];
    defaultOptions: DaterangeOptions = {
        calendarAmount: 2,
        format: DEFAULT_DATE_FORMAT,
        presets: [],
        size: 'medium'
    };
    selection: DaterangeSelection = {startDate: null, endDate: null};
    currentSelectionFormatted: string;
    selectionStarted: Day = null;
    originalSelection: DaterangeSelection = null;
    currentPreset: DaterangePresets | DaterangeCustomPreset = null;
    overlayAlign$ = new BehaviorSubject<string>('');
    selected$ = new BehaviorSubject<string>('');
    defaultPlaceholder = DEFAULT_PLACEHOLDER_TEXT;
    protected daterangeOptions: DaterangeOptions;

    public get isPresetsShown(): boolean {
        return !!this.presetsHeaderTemplate || (Array.isArray(this.daterangeOptions.presets) && !!this.daterangeOptions.presets.length);
    }

    public get isSingleDatePicker(): boolean {
        return this.options.calendarAmount === 1;
    }

    private originalMaxDate: Date;

    private onDestroy$ = new Subject<void>();

    constructor(
        public daterangeService: DaterangeService,
        private calendarService: CalendarService,
        private elemRef: ElementRef,
        private logService: LogService,
        private uniqueIdService: UniqueIdService
    ) {
        super();
        this.defaultOptions.presets = [...this.daterangeService.defaultPresetList];
    }

    ngOnInit() {
        this.contentTemplate = this.chipContent;
        this.id = this.id || `fs-daterange-${this.uniqueIdService.getUniqueId()}`;
        if (!isNullOrUndefined(this.maxDate)) {
            this.originalMaxDate = this.maxDate;
        }
        this.onOptionsChanges();
        this.resetState$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.writeValue(null);
                this.propagateChange(null);
            });
    }

    ngOnDestroy() {
        this.resetState$.complete();
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    changeConfig(val: string) {
        this.elemRef.nativeElement.style.setProperty('--fu-chip-max-width', val);
    }

    valueSelected() {
        return this.selected$
            .asObservable()
            .pipe(
                map(value =>
                    value !== (this.options?.placeholder || DEFAULT_PLACEHOLDER_TEXT)
                        ? {value, isSelected: !!value}
                        : {value: null, isSelected: false}
                )
            );
    }

    open() {
        this.trigger.nativeElement.click();
    }

    selectPreset(preset, cohort?: number) {
        this.selection = this.daterangeService.getPresetRange(preset, cohort);
        this.currentPreset = preset;
        this.initMonth(this.selection.endDate);
    }

    getCalendarConfigurations(month: Date): CalendarComponentConfigurations {
        return {
            parentDaterangeId: this.id,
            month,
            minDate: this.minDate,
            maxDate: this.maxDate,
            allowFutureSelection: this.options.allowFutureSelection ?? !this.isSingleDatePicker,
            selection: this.selection,
            calendarType: this.isSingleDatePicker ? CalendarType.DATE_PICKER : CalendarType.DATE_RANGE
        };
    }

    toggle() {
        if (!this.isOpen$.getValue() && !this.isComponentDisabled$.getValue()) {
            this.calculateOverlayAlignPosition();
            this.currentPreset = this.determinePreset(this.originalSelection, this.extraParams);
            this.isOpen$.next(!this.isOpen$.getValue());
            this.setPlaceholder({isOpen: true});
        } else {
            this.close();
        }
    }

    onOutsideClick(target: HTMLElement) {
        // if (this.validateClickOutside(target) && !target.closest('fusion-dropdown-option')) {
        if (this.validateClickOutside(target)) {
            this.close();
        }
    }

    apply() {
        if (this.isOpen$.getValue()) {
            this.isOpen$.next(false);
            if (this.selection?.endDate) {
                this.selection.endDate;
            }
            this.originalSelection = {...this.selection};
            this.setPlaceholder({isOpen: false});
            this.selectionStarted = null;
            this.applied.emit();

            const valueToPropagate = this.isSingleDatePicker
                ? {date: this.originalSelection.startDate}
                : this.originalSelection?.startDate && this.originalSelection?.endDate
                ? this.originalSelection
                : null;
            this.selected$.next(this.getCurrentSelectionFormatted());
            this.propagateChange(valueToPropagate);
            this.clearRangeDaysLimit();
        }
    }

    close() {
        if (this.isOpen$.getValue()) {
            this.isOpen$.next(false);
            if (!!this.originalSelection?.startDate && !!this.originalSelection?.endDate) {
                this.initMonth(this.originalSelection.endDate);
                this.selectionStarted = null;
                this.selection = {...this.originalSelection};
            } else {
                this.selection = {endDate: null, startDate: null};
            }
            this.clearRangeDaysLimit();
            this.closed.emit();
            this.setPlaceholder({isOpen: false});
        }
    }

    onMonthChange(direction: string) {
        let newMonth = null;
        switch (direction) {
            case 'next': {
                const lastMonth = this.currentMonths[this.currentMonths.length - 1];
                newMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, lastMonth.getDate());
                this.currentMonths.push(newMonth);
                this.currentMonths.shift();
                break;
            }
            case 'previous': {
                const firstMonth = this.currentMonths[0];
                newMonth = new Date(firstMonth.getFullYear(), firstMonth.getMonth() - 1, firstMonth.getDate());
                this.currentMonths.unshift(newMonth);
                this.currentMonths.pop();
                break;
            }
        }
    }

    onSelectDay(day: Day) {
        this.currentPreset = null;

        if (
            this.selectionStarted &&
            day.date >= this.selectionStarted.date &&
            day.date.getTime() !== this.selectionStarted.date.getTime()
        ) {
            this.onSelectEndDate(day);
        } else {
            this.onSelectStartDate(day);
        }

        this.daySelected.emit(this.selection);
        if (this.isSingleDatePicker) {
            this.apply();
        }
    }

    getCurrentSelectionFormatted() {
        let textToDisplay = this.daterangeOptions?.placeholder ?? DEFAULT_PLACEHOLDER_TEXT;
        const preset = this.determinePreset(this.originalSelection);
        if (preset && !this.extraParams) {
            textToDisplay = this.daterangeService.getPresetName(preset);
        } else if (!!this.originalSelection?.startDate && !!this.originalSelection?.endDate) {
            const datePipe = new DatePipe('en-US');
            const startDate = datePipe.transform(this.originalSelection.startDate, this.options.format);
            const endDate = datePipe.transform(this.originalSelection.endDate, this.options.format);
            textToDisplay = isSameDates(this.originalSelection.startDate, this.originalSelection.endDate)
                ? startDate
                : `${startDate} - ${endDate}`;
        }
        this.currentSelectionFormatted = textToDisplay;
        return textToDisplay;
    }

    onWriteValue(value: DaterangeSelection): void {
        if (value?.date || value?.startDate || value?.endDate) {
            if (this.isSingleDatePicker) {
                if (!value.date || value.startDate || value.endDate) {
                    this.logService.error(new Error('Single Datepicker object should be {date: Date}'));
                } else {
                    value.startDate = value.date;
                    value.endDate = value.date;
                }
            }

            this.selection = {...value};

            if (!!this.selection?.endDate) {
                this.initMonth(this.selection.endDate);
            }

            this.originalSelection = {...this.selection};
        } else {
            this.selection = {endDate: null, startDate: null};
            this.originalSelection = null;
        }
        this.selected$.next(this.getCurrentSelectionFormatted());
        this.setPlaceholder();
    }

    setPlaceholder(configurations: DropdownSelectConfigurations = {}) {
        this.dropdownSelectConfigurations$.next({
            ...this.dropdownSelectConfigurations$.getValue(),
            placeholder: {value: this.getCurrentSelectionFormatted()},
            ...configurations
        });
    }

    private validateClickOutside(target: HTMLElement): boolean {
        return !target.closest('td[data-datetime]');
    }

    private calculateOverlayAlignPosition() {
        // in case no was calculation yet
        if (this.overlayAlign$.getValue() === '') {
            // do calculation for overlay alight position
            setTimeout(() => {
                this.overlayAlign$.next('right'); // default - align right
                // because it will be put to DOM on next "tick" - use timeout '0'
                const overlayClientRect = this.overlay.nativeElement.getBoundingClientRect();
                const componentClientRect = this.elemRef.nativeElement.getBoundingClientRect();
                if (overlayClientRect.width > componentClientRect.width) {
                    // need check if has a place on left
                    if (!(componentClientRect.x + componentClientRect.width >= overlayClientRect.width)) {
                        this.overlayAlign$.next('left');
                    }
                }
            }, 0);
        }
    }

    private determinePreset(range, params?) {
        return this.daterangeService.determinePreset(range, this.options.presets, params);
    }

    private initMonth(date) {
        this.currentMonths = [];
        for (let i = 0; i < this.options.calendarAmount; i++) {
            const month = new Date(date.getFullYear(), date.getMonth() - i, 1);
            this.currentMonths.unshift(month);
        }
    }

    protected onOptionsChanges(): void {
        if (this.daterangeOptions) {
            this.daterangeOptions = Object.assign({}, this.defaultOptions, this.daterangeOptions);
        } else {
            this.daterangeOptions = this.defaultOptions;
        }

        if (!isNullOrUndefined(this.daterangeOptions?.overlayAlignPosition)) {
            this.overlayAlign$.next(this.daterangeOptions.overlayAlignPosition);
        }

        this.initMonth(this.calendarService.getCurrentDateUTC());
    }

    private onSelectStartDate(day: Day): void {
        this.selectionStarted = day;
        this.selection = {startDate: day.date, endDate: day.date};
        this.setRangeDaysLimit();
    }

    private onSelectEndDate(day: Day): void {
        this.selection = {startDate: this.selectionStarted.date, endDate: day.date};
        this.selectionStarted = null;
        this.clearRangeDaysLimit();
    }

    private setRangeDaysLimit(): void {
        if (!!this.daterangeOptions?.maxDaysInSelectedRange) {
            const rangeMaxEndDate = new Date(this.selection.startDate);
            rangeMaxEndDate.setDate(rangeMaxEndDate.getDate() + (this.daterangeOptions?.maxDaysInSelectedRange - 1));
            this.maxDate = new Date(rangeMaxEndDate);
        }
    }

    private clearRangeDaysLimit(): void {
        if (!!this.daterangeOptions?.maxDaysInSelectedRange) {
            this.maxDate = !isNullOrUndefined(this.originalMaxDate) ? this.originalMaxDate : null;
        }
    }

    propagateChange = (_: DaterangeSelection) => {};

    writeValue(value: DaterangeSelection): void {
        this.onWriteValue(value);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void {}
}
