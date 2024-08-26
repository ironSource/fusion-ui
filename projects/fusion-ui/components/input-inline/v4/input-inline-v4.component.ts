import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, fromEvent, Subject, Subscription} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline';
import {InputType} from '@ironsource/fusion-ui/components/input/v4';
import {CurrencyPipeParameters} from '@ironsource/fusion-ui/components/table';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v4';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-input-inline',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
    templateUrl: './input-inline-v4.component.html',
    styleUrl: './input-inline-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputInlineV4Component),
            multi: true
        }
    ]
})
export class InputInlineV4Component implements OnInit, OnDestroy {
    /** @internal */
    @ViewChild('inputComponent') inputComponent: InputComponent;
    /** @internal */
    @ViewChild('inputWrapper') inputWrapper: ElementRef;

    @Input() set type(value: InlineInputType) {
        if (!isNullOrUndefined(value)) {
            this._type = value;
            if (value === InlineInputType.Text) {
                this._inputType = 'text';
            } else {
                this._inputType = 'number';
            }
        }
    }

    get type(): InlineInputType {
        return this._type;
    }

    get inputType(): InputType {
        return this._inputType;
    }

    get isNumber(): boolean {
        return this._inputType === 'number';
    }

    @Input() readOnly: boolean = false;
    @Input() error: boolean = false;
    @Input() currencyPipeParameters?: CurrencyPipeParameters;
    @Input() pipeOptions?: string;

    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();

    /** @internal */
    isEditMode$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    setEditMode$ = new Subject();
    /** @internal */
    inputControl = new FormControl();
    /** @internal */
    inputValue = '';

    private _type: InlineInputType = InlineInputType.Text;
    private _inputType: InputType = 'text';
    private clickOutSideSubscription: Subscription;
    private onDestroy$ = new Subject<void>();
    private stayInEditMode = false;
    private loading = false;

    ngOnInit() {
        this.setEditMode$.pipe(takeUntil(this.onDestroy$)).subscribe(this.setEditMode.bind(this));
        this.isEditMode$.asObservable().pipe(takeUntil(this.onDestroy$)).subscribe(this.handleClickOutside.bind(this));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    switchToEdit() {
        this.isEditMode$.next(true);
    }

    /** @internal */
    save() {
        if (this.isEditMode$.getValue() && this.inputControl.valid) {
            if (this.inputControl.value.toString() !== this.inputValue.toString()) {
                this.propagateChange(this.inputControl.value);
                this.onSave.emit({
                    currentValue: this.inputValue,
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
                this.inputControl.setValue(this.inputValue, {emitEvent: false});
                this.isEditMode$.next(false);
                this.onCancel.emit();
            } else {
                this.stayInEditMode = false;
            }
        }
    }

    /** @internal */
    goToEditMode(withValue?: string | number): void {
        this.inputControl.setValue(!isNullOrUndefined(withValue) ? withValue : this.inputValue, {emitEvent: false});
        this.isEditMode$.next(true);
    }

    private setEditMode(val: string | number) {
        if (!!val) {
            this.goToEditMode(val);
            this.stayInEditMode = true;
        }
    }

    private setFocusToInput() {
        setTimeout(() => {
            this.inputComponent.setFocus();
        }, 0);
    }

    private handleClickOutside(value: boolean) {
        if (value) {
            this.setFocusToInput();
            this.clickOutSideSubscription = fromEvent(document, 'click').subscribe((event: MouseEvent) => {
                const clickedInside = this.isClickInsideByCoordinates(event);
                if (!clickedInside && !this.stayInEditMode) {
                    this.cancel();
                }
            });
        } else {
            this.clickOutSideSubscription?.unsubscribe();
        }
    }

    private isClickInsideByCoordinates(event: MouseEvent): boolean {
        const parentRect = this.inputWrapper.nativeElement.getBoundingClientRect();
        return (
            parentRect.left <= event.clientX &&
            parentRect.right >= event.clientX &&
            parentRect.top <= event.clientY &&
            parentRect.bottom >= event.clientY
        );
    }

    // region ControlValueAccessor
    /** @internal */
    writeValue(data: any): void {
        if (!isNullOrUndefined(data)) {
            const value: string = data.toString();
            this.inputValue = value;
            this.inputControl.setValue(value, {emitEvent: false});
        } else {
            this.inputValue = '';
            this.inputControl.setValue('', {emitEvent: false});
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
        if (isDisabled) {
            this.inputControl.disable({emitEvent: false});
        } else {
            this.inputControl.enable({emitEvent: false});
        }
    }

    // endregion
}
