import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DaterangeOptions} from '../entities/daterange-options';
import {DEFAULT_DATE_FORMAT} from '../entities/config';
import {DaterangeSelection} from '../entities/daterange-selection';
import {Day} from '../entities/day';
import {DaterangePresets} from '../entities/daterange-presets.enum';
import {DaterangeService} from './daterange.service';
import {CalendarService} from '../calendar/calendar.service';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {StyleBase, StyleVersion} from '@ironsource/fusion-ui/components/style';
import {isSameDates} from '@ironsource/fusion-ui/utils';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {BehaviorSubject} from 'rxjs';
import {DropdownSelectConfigurations} from '@ironsource/fusion-ui/components/dropdown';
import {CalendarComponentConfigurations} from '../calendar/calendar-component-configurations';
import {CalendarType} from '../calendar/calendar-type.enum';
import {DEFAULT_PLACEHOLDER_TEXT} from './daterange.configuration';

@Component({
    selector: 'fusion-daterange',
    templateUrl: './daterange.component.html',
    styleUrls: ['./daterange.component.scss', './daterange.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DaterangeComponent),
            multi: true
        }
    ]
})
export class DaterangeComponent extends StyleBase implements OnInit {
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

    dropdownSelectConfigurations$ = new BehaviorSubject<DropdownSelectConfigurations>({dropdownArrowIconName: 'arrow-down'});
    pevIconName$ = new BehaviorSubject<string | {iconName: string; iconVersion?: string}>({iconName: 'arrow-left', iconVersion: 'v1'});
    nextIconName$ = new BehaviorSubject<string | {iconName: string; iconVersion?: string}>({
        iconName: 'arrow-right',
        iconVersion: 'v1'
    });

    isOpen = false;
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
    currentPreset: DaterangePresets = null;
    overlayAlign$ = new BehaviorSubject<string>('');

    private daterangeOptions: DaterangeOptions;

    public get selectorIcon(): string {
        const arrowPosition = this.isOpen ? 'up' : 'down';
        return `arrow-${arrowPosition}`;
    }

    public get isPresetsShown(): boolean {
        return !!this.presetsHeaderTemplate || this.daterangeOptions.presets !== false;
    }

    public get isSingleDatePicker(): boolean {
        return this.options.calendarAmount === 1;
    }

    constructor(
        injector: Injector,
        public daterangeService: DaterangeService,
        private calendarService: CalendarService,
        private elemRef: ElementRef,
        private logService: LogService,
        private uniqueIdService: UniqueIdService
    ) {
        super(injector);
        this.defaultOptions.presets = [...this.daterangeService.defaultPresetList];
    }

    ngOnInit() {
        this.id = this.id || `fs-daterange-${this.uniqueIdService.getUniqueId()}`;
        this.selectedVersion$.subscribe(styleVersion => {
            this.pevIconName$.next(styleVersion === StyleVersion.V2 ? 'arrow-left' : {iconName: 'arrow-right', iconVersion: 'v1'});
            this.nextIconName$.next(styleVersion === StyleVersion.V2 ? 'arrow-right' : {iconName: 'arrow-right', iconVersion: 'v1'});
        });

        this.onOptionsChanges();
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
            allowFutureSelection: this.options.allowFutureSelection ?? this.isSingleDatePicker,
            selection: this.selection,
            calendarType: this.isSingleDatePicker ? CalendarType.DATE_PICKER : CalendarType.DATE_RANGE
        };
    }

    toggle() {
        if (!this.isOpen) {
            this.calculateOverlayAlignPosition();
            this.currentPreset = this.determinePreset(this.originalSelection, this.extraParams);
            this.isOpen = !this.isOpen;
            this.setPlaceholder({isOpen: true});
        } else {
            this.close();
        }
    }

    onOutsideClick() {
        this.close();
    }

    apply() {
        if (this.isOpen) {
            this.isOpen = false;
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
            this.propagateChange(valueToPropagate);
        }
    }

    close() {
        if (this.isOpen) {
            this.isOpen = false;
            if (!!this.originalSelection?.startDate && !!this.originalSelection?.endDate) {
                this.initMonth(this.originalSelection.endDate);
                this.selectionStarted = null;
                this.selection = {...this.originalSelection};
            }
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
            this.selection = {startDate: this.selectionStarted.date, endDate: day.date};
            this.selectionStarted = null;
        } else {
            this.selectionStarted = day;
            this.selection = {startDate: day.date, endDate: day.date};
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
        return this.daterangeService.determinePreset(range, this.options.presets as DaterangePresets[], params);
    }

    private initMonth(date) {
        this.currentMonths = [];
        for (let i = 0; i < this.options.calendarAmount; i++) {
            const month = new Date(date.getFullYear(), date.getMonth() - i, 1);
            this.currentMonths.unshift(month);
        }
    }

    private onOptionsChanges(): void {
        if (this.daterangeOptions) {
            this.daterangeOptions = Object.assign({}, this.defaultOptions, this.daterangeOptions);
        } else {
            this.daterangeOptions = this.defaultOptions;
        }
        this.overlayAlign$.next(this.daterangeOptions?.overlayAlignPosition ?? '');

        this.initMonth(this.calendarService.getCurrentDateUTC());
    }

    writeValue(value: DaterangeSelection): void {
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
        this.setPlaceholder();
    }

    setPlaceholder(configurations: DropdownSelectConfigurations = {}) {
        this.dropdownSelectConfigurations$.next({
            ...this.dropdownSelectConfigurations$.getValue(),
            placeholder: {value: this.getCurrentSelectionFormatted()},
            ...configurations
        });
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void {}

    propagateChange = (_: DaterangeSelection) => {};
}
