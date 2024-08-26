import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, fromEvent, Subject, Subscription} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline';
import {InputType} from '@ironsource/fusion-ui/components/input/v4';
import {CurrencyPipeParameters} from '@ironsource/fusion-ui/components/table';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v4';
import {takeUntil} from 'rxjs/operators';
import {INPUT_INLINE_ERROR_MESSAGES_MAP} from './error-messages.config';

@Component({
    selector: 'fusion-input-inline',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
    templateUrl: './input-inline-v4.component.html',
    styleUrl: './input-inline-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
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
    @Input() set loading(value: boolean) {
        if (value) {
            this.inputControl.disable({emitEvent: false});
        } else {
            this.inputControl.enable({emitEvent: false});
        }
    }

    @Input() currencyPipeParameters?: CurrencyPipeParameters;
    @Input() pipeOptions?: string;

    @Input() set data(value: FormControl) {
        this.inputControl = value;
        this.inputValue = this.inputControl.value;
        this.disabled = this.inputControl.disabled;
    }

    get inputPrefix(): string {
        if (this.type === InlineInputType.Currency) {
            return this.currencyPipeParameters?.display || '$';
        }
        return null;
    }
    get inputSuffix(): string {
        if (this.type === InlineInputType.Percent) {
            return '%';
        }
        return null;
    }

    @Input() error: string;
    @Input() set errorMapping(value: {[key: string]: string}) {
        if (!isNullOrUndefined(value)) {
            this._errorMapping = value;
        }
    }
    // eslint-disable-next-line
    @Output() onSave = new EventEmitter();
    // eslint-disable-next-line
    @Output() onCancel = new EventEmitter();

    /** @internal */
    isEditMode$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    setEditMode$ = new Subject();
    /** @internal */
    inputControl = new FormControl();
    /** @internal */
    inputValue = '';
    /** @internal */
    disabled = false;

    private _type: InlineInputType = InlineInputType.Text;
    private _inputType: InputType = 'text';
    private clickOutSideSubscription: Subscription;
    private onDestroy$ = new Subject<void>();
    private stayInEditMode = false;
    private _errorMapping: {[key: string]: string} = INPUT_INLINE_ERROR_MESSAGES_MAP;

    ngOnInit() {
        this.setEditMode$.pipe(takeUntil(this.onDestroy$)).subscribe(this.setEditMode.bind(this));
        this.isEditMode$.asObservable().pipe(takeUntil(this.onDestroy$)).subscribe(this.handleClickOutside.bind(this));
        this.inputControl.statusChanges.pipe(takeUntil(this.onDestroy$)).subscribe(status => {
            this.error = status === 'INVALID' ? this.getErrorMessage(this.inputControl.errors) : null;
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /** @internal */
    save() {
        if (this.isEditMode$.getValue() && this.inputControl.valid) {
            if (this.inputControl.value.toString() !== this.inputValue.toString()) {
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

    private getErrorMessage(inputError: {[key: string]: any}): string {
        if (inputError) {
            const errorKey = Object.keys(inputError)[0];
            let errorMessage = `Error: ${errorKey}`;
            console.log('>>', inputError);
            if (this._errorMapping[errorKey]) {
                errorMessage = this._errorMapping[errorKey];
                Object.keys(inputError[errorKey]).forEach((find: string) => {
                    errorMessage = errorMessage.replace(`{${find}}`, inputError[errorKey][find]);
                });
            }
            return errorMessage;
        }
        return null;
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
}
