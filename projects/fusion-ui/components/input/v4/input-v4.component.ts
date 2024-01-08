import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {InputSize, InputType} from './input-v4.entities';

@Component({
    selector: 'fusion-input',
    standalone: true,
    imports: [CommonModule],
    host: {class: 'fusion-v4'},
    templateUrl: './input-v4.component.html',
    styleUrls: ['./input-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputV4Component), multi: true}]
})
export class InputV4Component implements OnInit, OnDestroy {
    // region Inputs - labelText
    @Input()
    set labelText(value: string) {
        this._labelText = value;
    }
    get labelText() {
        return this._labelText;
    }
    private _labelText: string;
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
    // region Inputs - input type
    @Input()
    set type(value: InputType) {
        this._type = value;
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
    // region Inputs - viewOnly
    @Input() set viewOnly(value: boolean) {
        this._viewOnly = value;
    }
    get viewOnly() {
        return this._viewOnly;
    }
    private _viewOnly: boolean = false;
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
        return this._showClear;
    }
    private _showClear: boolean = false;
    // endregion

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

    /** @internal */
    @ViewChild('input', {static: false}) input: ElementRef;

    /** @internal */
    onDestroy$ = new Subject<void>();
    /** @internal */
    inputControl = new FormControl();
    /** @internal */
    disabled$ = new BehaviorSubject(false);

    readonly id = this.uniqueIdService.getUniqueId();

    private inputControlValueChanges$: Observable<any>;

    constructor(protected uniqueIdService: UniqueIdService) {}

    ngOnInit(): void {
        this.inputControlValueChanges$ = this.inputControl.valueChanges;
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // region ControlValueAccessor
    /** @internal */
    writeValue(value: any): void {
        console.log('>>>', value);
        if (isNullOrUndefined(value)) {
            // this.clearInput();
        } else {
            // if (this.config.type === 'number' && Number.isInteger(this.config.decimal) && this.config.decimal > 0) {
            //     value = parseFloat(value).toFixed(this.config.decimal);
            // }
            this.inputControl.setValue(value, {emitEvent: false});
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
    }

    // endregion
}
