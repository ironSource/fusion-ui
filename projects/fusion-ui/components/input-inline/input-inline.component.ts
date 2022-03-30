import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    forwardRef,
    HostListener,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
    Injector
} from '@angular/core';
import {isNullOrUndefined, isNumber, isObject, isString} from '@ironsource/fusion-ui/utils';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputComponent} from '@ironsource/fusion-ui/components/input';
import {BehaviorSubject, Subject, fromEvent, Subscription, Observable} from 'rxjs';
import {InlineInputType} from './inline-input-type.enum';
import {CurrencyPipe} from '@angular/common';
import {takeUntil, map} from 'rxjs/operators';
import {AdvancedInputInline} from './advanced-input-inline';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {CONFIG_INPUT_INLINE_BY_UI_STYLE, InputInlineConfigByStyle} from './input-inline.config';
import {CurrencyPipeParameters} from './input-inline.config';

@Component({
    selector: 'fusion-input-inline',
    templateUrl: './input-inline.component.html',
    styleUrls: ['./input-inline.component.scss', './input-inline.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputInlineComponent),
            multi: true
        }
    ]
})
export class InputInlineComponent extends StyleBase implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    @ViewChild('inputComponent') inputComponent: InputComponent;
    @Input() textClass: string;
    @Input() type: InlineInputType = InlineInputType.Text;
    @Input() loading: boolean;
    @Input() readOnly: boolean;
    @Input() error: string;
    @Input() currencyPipeParameters: CurrencyPipeParameters;
    // eslint-disable-next-line
    @Output() onSave = new EventEmitter();
    // eslint-disable-next-line
    @Output() onCancel = new EventEmitter();
    isEditMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    setEditMode$ = new Subject();
    inputControl = new FormControl();
    savedValue: any;
    sanitationRegex: string;
    viewOnlyText: string;

    configByStyle$ = new Observable<InputInlineConfigByStyle>();

    private stayInEditMode = false;
    private clickOutSideSubscription: Subscription;

    get inputType(): string {
        return this.type === InlineInputType.Text ? 'text' : 'number';
    }

    get inputUnits() {
        return this.type === InlineInputType.Currency ? '$' : null;
    }

    get savedValueToString() {
        let value = this.savedValue;
        if (this.type !== InlineInputType.Text) {
            if (!this.savedValue) {
                value = '0';
            } else if (isNaN(this.savedValue)) {
                value = this.savedValue;
            } else {
                value = this.currencyPipe
                    .transform(this.savedValue, this.currencyPipeCurrencyCode, this.currencyPipeDisplay, this.currencyPipeDigitsInfo)
                    .replace(/\.00$/, '');
            }
        }

        return value;
    }

    get isTypeCurrency(): boolean {
        return this.type === InlineInputType.Currency && this.savedValue && !isNaN(this.savedValue);
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

    constructor(injector: Injector, private currencyPipe: CurrencyPipe, private elementRef: ElementRef, private cdr: ChangeDetectorRef) {
        super(injector);
    }

    ngOnInit() {
        this.sanitationRegex = this.inputType === 'text' ? '' : '[0-9.]';

        this.setEditMode$.pipe(takeUntil(this.onDestroy$)).subscribe((val: string | number) => {
            if (val) {
                this.goToEditMode(val);
                this.stayInEditMode = true;
            }
        });

        this.configByStyle$ = this.selectedVersion$.pipe(
            map((styleVersion: StyleVersion) => CONFIG_INPUT_INLINE_BY_UI_STYLE[`style_v${styleVersion}`])
        );

        this.isEditMode$.asObservable().pipe(takeUntil(this.onDestroy$)).subscribe(this.handleClickOutSideListener.bind(this));
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

    @HostListener('keydown.enter')
    save() {
        if (this.isEditMode$.getValue()) {
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

    cancel() {
        if (this.isEditMode$.getValue()) {
            if (!this.stayInEditMode) {
                this.inputControl.setValue(this.savedValue, {emitEvent: false});
                this.isEditMode$.next(false);
                this.onCancel.emit();
            } else {
                this.stayInEditMode = false;
            }
        }
    }

    goToEditMode(withValue?: string | number): void {
        this.inputControl.setValue(!isNullOrUndefined(withValue) ? withValue : this.savedValue);
        this.isEditMode$.next(true);
        setTimeout(() => {
            this.inputComponent.setFocus();
        }, 0);
    }

    propagateChange = (_: string) => {};

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
        }
        this.isEditMode$.next(false);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void {}

    setDisabledState?(isDisabled: boolean): void {
        const status = isDisabled ? 'disable' : 'enable';
        this.inputControl[status]();
        this.readOnly = isDisabled;
    }

    private handleClickOutSideListener(value: boolean): void {
        if (value) {
            this.clickOutSideSubscription = fromEvent(document, 'click').subscribe(event => {
                const targetElement = event.target;
                const clickedInside = this.elementRef.nativeElement.contains(targetElement);
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
}
