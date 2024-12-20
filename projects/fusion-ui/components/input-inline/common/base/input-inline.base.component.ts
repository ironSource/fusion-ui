import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {isNullOrUndefined, isNumber, isObject, isString} from '@ironsource/fusion-ui/utils';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {InputComponent, InputOptions} from '@ironsource/fusion-ui/components/input';
import {BehaviorSubject, fromEvent, Subject, Subscription} from 'rxjs';
import {InlineInputType} from './inline-input-type.enum';
import {CurrencyPipe} from '@angular/common';
import {filter, takeUntil} from 'rxjs/operators';
import {AdvancedInputInline} from './advanced-input-inline';
import {CurrencyPipeParameters, InputInlineConfigByStyle} from './input-inline.config';

@Directive()
export abstract class InputInlineBaseComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    /** @internal */
    @ViewChild('inputComponent') inputComponent: InputComponent;
    /** @internal */
    @Input() textClass: string;
    @Input() type: InlineInputType = InlineInputType.Text;
    @Input() loading: boolean;
    @Input() readOnly: boolean;
    @Input() error: string;
    @Input() errorType = 'error';
    @Input() inputErrorIconShow: boolean;
    @Input() currencyPipeParameters: CurrencyPipeParameters;
    @Input() inputOptions: InputOptions;

    // eslint-disable-next-line
    @Output() onSave = new EventEmitter();
    // eslint-disable-next-line
    @Output() onCancel = new EventEmitter();
    /** @internal */
    isEditMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    /** @internal */
    setEditMode$ = new Subject();
    /** @internal */
    inputControl = new FormControl();
    /** @internal */
    savedValue: any;
    /** @internal */
    sanitationRegex: string;
    /** @internal */
    viewOnlyText: string;
    /** @internal */
    configByStyle: InputInlineConfigByStyle;
    /** @internal */
    disable: boolean;

    private stayInEditMode = false;
    private clickOutSideSubscription: Subscription;
    private onDestroy$ = new Subject<void>();

    get inputType(): string {
        return this.isType(InlineInputType.Text) ? 'text' : 'number';
    }

    get inputUnits() {
        return this.isType(InlineInputType.Currency) ? '$' : this.isType(InlineInputType.Percent) ? '%' : null;
    }

    get inputUnitsPosition() {
        return this.isType(InlineInputType.Currency) ? 'left' : this.isType(InlineInputType.Percent) ? 'right' : null;
    }

    get savedValueToString() {
        let value = this.savedValue;
        if (!this.isType(InlineInputType.Text)) {
            if (!this.savedValue) {
                value = '0';
            } else if (isNaN(this.savedValue)) {
                value = this.savedValue;
            } else if (this.isType(InlineInputType.Currency)) {
                value = this.currencyPipe
                    .transform(this.savedValue, this.currencyPipeCurrencyCode, this.currencyPipeDisplay, this.currencyPipeDigitsInfo)
                    .replace(/\.00$/, '');
            } else if (this.isType(InlineInputType.Percent)) {
                value = this.savedValue + ' %';
            }
        }

        return value;
    }

    get isTypeCurrency(): boolean {
        return this.isType(InlineInputType.Currency) && this.savedValue && !isNaN(this.savedValue);
    }

    get currencyPipeCurrencyCode(): string {
        return !isNullOrUndefined(this.currencyPipeParameters) ? this.currencyPipeParameters.currencyCode : undefined;
    }

    get currencyPipeDisplay(): string {
        return !isNullOrUndefined(this.currencyPipeParameters) ? this.currencyPipeParameters.display : undefined;
    }

    get currencyPipeDigitsInfo(): string {
        return !isNullOrUndefined(this.currencyPipeParameters) ? this.currencyPipeParameters.digitsInfo : undefined;
    }

    constructor(private currencyPipe: CurrencyPipe, private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.sanitationRegex = this.inputType === 'text' ? '' : '[0-9.]';

        this.addListeners();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (
            (!changes.error || !changes.error.currentValue) &&
            changes.loading &&
            changes.loading.currentValue !== changes.loading.previousValue &&
            changes.loading.currentValue === false &&
            this.isEditMode$.getValue() &&
            !this.stayInEditMode
        ) {
            this.isEditMode$.next(false);
        }
        if (this.inputComponent) {
            this.inputComponent.toggleErrorClass(!!changes.error && !!changes.error.currentValue);
        }
    }

    /** @internal */
    @HostListener('keydown.enter')
    save() {
        if (this.isEditMode$.getValue() && this.inputControl.valid) {
            if (this.inputControl.value.toString() !== this.savedValue.toString()) {
                this.propagateChange(this.inputControl.value);
                this.onSave.emit({
                    currentValue: this.savedValue,
                    newValue: this.inputControl.value
                });
            } else {
                this.cancel();
            }
        }
    }
    /** @internal */
    cancel() {
        if (this.isEditMode$.getValue() && !this.loading) {
            if (!this.stayInEditMode) {
                this.inputControl.setValue(this.savedValue, {emitEvent: false});
                this.inputComponent.blur();
                this.isEditMode$.next(false);
                this.onCancel.emit();
            } else {
                this.stayInEditMode = false;
            }
        }
    }
    /** @internal */
    goToEditMode(withValue?: string | number): void {
        this.inputControl.setValue(!isNullOrUndefined(withValue) ? withValue : this.savedValue, {emitEvent: false});
        this.isEditMode$.next(true);
        setTimeout(() => {
            this.inputComponent.setFocus();
        }, 0);
    }
    /** @internal */
    propagateChange = (_: string) => {};
    /** @internal */
    writeValue(data: string | AdvancedInputInline): void {
        let value: string;
        if (!isNullOrUndefined(data)) {
            if (isString(data) || isNumber(data)) {
                value = data as string;
                this.viewOnlyText = '';
            } else if (isObject(data)) {
                value = (data as AdvancedInputInline).value;
                this.viewOnlyText = (data as AdvancedInputInline).viewOnlyText;
            }

            this.savedValue = value;
            this.inputControl.setValue(value, {emitEvent: false});
        } else {
            this.savedValue = '';
            this.inputControl.setValue('', {emitEvent: false});
        }
        this.isEditMode$.next(false);
    }
    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    /** @internal */
    registerOnTouched(): void {}
    /** @internal */
    setDisabledState?(isDisabled: boolean): void {
        const status = isDisabled ? 'disable' : 'enable';
        this.inputControl[status]();
        this.readOnly = this.readOnly || isDisabled;
        this.disable = isDisabled;
    }

    private addListeners() {
        this.setEditMode$.pipe(takeUntil(this.onDestroy$)).subscribe(this.setEditMode.bind(this));

        this.isEditMode$
            .asObservable()
            .pipe(
                takeUntil(this.onDestroy$),
                filter(val => val)
            )
            .subscribe(this.handleClickOutSideListener.bind(this));

        this.inputControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.clearErrorOnValueChange.bind(this));
    }

    private handleClickOutSideListener(value: boolean, $event): void {
        if (value && !this.error) {
            this.clickOutSideSubscription = fromEvent(document, 'click').subscribe((event: MouseEvent) => {
                const clickedInside = this.isClickInsideByCoordinates(event);
                if (!clickedInside && !this.stayInEditMode) {
                    this.cancel();
                    this.cdr.markForCheck();
                }
            });
        } else {
            if (this.clickOutSideSubscription && typeof this.clickOutSideSubscription.unsubscribe === 'function') {
                this.clickOutSideSubscription.unsubscribe();
            }
        }
    }

    private isClickInsideByCoordinates(event: MouseEvent): boolean {
        const parentRect = this.elementRef.nativeElement.getBoundingClientRect();
        return (
            parentRect.left <= event.clientX &&
            parentRect.right >= event.clientX &&
            parentRect.top <= event.clientY &&
            parentRect.bottom >= event.clientY
        );
    }

    private setEditMode(val: string | number) {
        if (!!val) {
            this.goToEditMode(val);
            this.stayInEditMode = true;
        }
    }

    private clearErrorOnValueChange(value) {
        if (!!value && this.error) {
            this.error = '';
        }
    }

    private isType(type: InlineInputType): boolean {
        return this.type === type;
    }
}
