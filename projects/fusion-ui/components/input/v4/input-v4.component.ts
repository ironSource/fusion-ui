import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {InputSize, InputType, InputVariant} from './input-v4.entities';
import {takeUntil} from 'rxjs/operators';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {FieldHelpTextTestIdModifiers, InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {InputHelperComponent} from '@ironsource/fusion-ui/components/input-helper/v4';
import {InputLabelComponent} from '@ironsource/fusion-ui/components/input-label/v4';

@Component({
    selector: 'fusion-input',
    imports: [CommonModule, ReactiveFormsModule, IconModule, TooltipDirective, GenericPipe, InputHelperComponent, InputLabelComponent],
    host: {class: 'fusion-v4'},
    templateUrl: './input-v4.component.html',
    styleUrls: ['./input-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputV4Component), multi: true}]
})
export class InputV4Component implements OnInit, OnDestroy {
    // region Inputs - id
    @Input() set id(value: string) {
        this._id = value;
    }

    @Input() testId: string;
    /** @internal */
    testIdInputModifiers: typeof InputTestIdModifiers = InputTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testId;
    }

    get id() {
        return this._id;
    }

    private _id: string = this.uniqueIdService.getUniqueId().toString();
    // endregion

    // region Inputs - labelText
    @Input() labelText: string;
    @Input() labelRequired: boolean = false;
    @Input() labelIcon: IconData;
    @Input() labelTooltipText: string;
    // endregion

    // region Inputs - placeholder
    @Input()
    set placeholder(value: string) {
        this._placeholder = value;
    }

    get placeholder() {
        return this._placeholder;
    }

    private _placeholder: string;
    // endregion

    // region Inputs - pattern
    @Input()
    set pattern(value: string) {
        this._pattern = value;
    }

    get pattern() {
        if (this.type === 'time') {
            return '[0-9]{2}:[0-9]{2}';
        }
        return this._pattern;
    }

    private _pattern: string;
    // endregion

    // region Inputs - input type
    @Input()
    set type(value: InputType) {
        if (!isNullOrUndefined(value) && value !== this._type) {
            this._type = value;
            if (this.showPasswordToggleButton$.getValue() === null) {
                this.showPasswordToggleButton$.next(this._type === 'password');
            }
        }
    }

    get type() {
        return this._type;
    }

    private _type: InputType = 'text';
    // endregion
    // region Inputs - startIcon
    @Input()
    set startIcon(value: string) {
        this._startIcon = value;
    }

    get startIcon() {
        return this._startIcon;
    }

    private _startIcon: string;
    // endregion
    // region Inputs - endIcon
    @Input()
    set endIcon(value: string) {
        this._endIcon = value;
    }

    get endIcon() {
        return this._endIcon;
    }

    private _endIcon: string;
    // endregion
    // region Inputs - prefix
    @Input() set prefix(value: string) {
        this._prefix = value;
    }

    get prefix() {
        return this._prefix;
    }

    private _prefix: string;
    // endregion
    // region Inputs - suffix
    @Input() set suffix(value: string) {
        this._suffix = value;
    }

    get suffix() {
        return this._suffix;
    }

    private _suffix: string;
    // endregion

    // region Inputs - size
    @Input() set size(value: InputSize) {
        this._size = value;
    }

    get size() {
        return this._size;
    }

    private _size: InputSize = 'medium';
    // endregion
    // region Inputs - maxLength
    @Input() set maxLength(value: number) {
        this._maxLength = value;
    }

    get maxLength() {
        return this._maxLength;
    }

    private _maxLength: number;
    // endregion

    // endregion
    // region Inputs - showApply
    @Input() set showApply(value: boolean) {
        this._showApply = value;
    }

    get showApply() {
        return this._showApply;
    }

    private _showApply: boolean = false;
    // endregion
    // region Inputs - showClear
    @Input() set showClear(value: boolean) {
        this._showClear = value;
    }

    get showClear() {
        return this._showClear && this._inputValue?.length > 0;
    }

    private _showClear: boolean = false;
    // endregion
    // region Inputs - showLengthCounter
    @Input() set showLengthCounter(value: boolean) {
        this._showLengthCounter = value;
    }

    get showLengthCounter() {
        return this._showLengthCounter;
    }

    private _showLengthCounter: boolean = false;
    // endregion

    // region Inputs - inlineErrorText
    @Input() set inlineErrorText(value: string) {
        this._inlineErrorText = value;
    }

    get inlineErrorText() {
        return this._inlineErrorText;
    }

    private _inlineErrorText: string;

    @Input() variant: InputVariant = 'default';

    @Input() helperText: string;
    @Input() helperIcon: string;

    // region Inputs - step (for number type)
    @Input()
    set step(value: number) {
        this._step = value;
    }

    get step() {
        return this._step;
    }

    private _step: number;
    // endregion
    //region Inputs - min (for number type)
    @Input()
    set min(value: number) {
        this._min = value;
    }

    get min() {
        return this._min;
    }

    private _min: number;
    // endregion
    //region Inputs - max (for number type)
    @Input()
    set max(value: number) {
        this._max = value;
    }

    get max() {
        return this._max;
    }

    private _max: number;
    // endregion
    // region Inputs - hideNumberArrows (for number type)
    @Input() set hideNumberArrows(value: boolean) {
        this._hideNumberArrows = value;
    }

    get hideNumberArrows() {
        return this._hideNumberArrows;
    }

    private _hideNumberArrows: boolean = false;
    // endregion

    // region Outputs - applyButtonClicked
    @Output() applyButtonClicked = new EventEmitter<void>();

    /** @internal */
    @ViewChild('input', {static: false}) input: ElementRef;

    /** @internal */
    onDestroy$ = new Subject<void>();
    /** @internal */
    inputControl = new FormControl();
    /** @internal */
    disabled$ = new BehaviorSubject(false);
    /** @internal */
    showPasswordToggleButton$ = new BehaviorSubject<boolean>(null);
    /** @internal */
    valueLength$ = new BehaviorSubject(0);

    private inputControlValueChanges$: Observable<any>;
    private _inputValue: string;

    constructor(protected uniqueIdService: UniqueIdService, private injector: Injector) {}

    ngOnInit(): void {
        this.inputControlValueChanges$ = this.inputControl.valueChanges;
        this.inputControlValueChanges$.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this._inputValue = value;
            this.valueLength$.next(this._inputValue.trim().length);
            this.propagateChange(value);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    clearButtonClicked() {
        this.clearInput(true);
    }

    /** @internal */
    clearInput(isFocused = false): void {
        this.inputControl.setValue('');
        if (isFocused) {
            this.setFocus();
        }
    }

    /** @internal */
    setFocus(): void {
        this.input.nativeElement.focus();
    }

    togglePasswordShown() {
        this.type = this.type === 'password' ? 'text' : 'password';
    }

    // region ControlValueAccessor
    /** @internal */
    writeValue(value: any): void {
        if (isNullOrUndefined(value)) {
            this.clearInput();
        } else {
            this._inputValue = value;
            this.inputControl.setValue(this._inputValue, {emitEvent: false});
        }
    }

    /**
     * Method to call when the input value has changes.
     * @internal
     */
    propagateChange = (_: string) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     * @internal
     */
    propagateTouched = () => {};

    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @internal */
    registerOnTouched(fn): void {
        // this.onBlur = fn;
    }

    /** @internal */
    setDisabledState?(isDisabled: boolean): void {
        this.disabled$.next(isDisabled);
        if (isDisabled) {
            this.inputControl.disable({emitEvent: false});
        } else {
            this.inputControl.enable({emitEvent: false});
        }
    }

    // endregion
    protected readonly FieldHelpTextTestIdModifiers = FieldHelpTextTestIdModifiers;
}
