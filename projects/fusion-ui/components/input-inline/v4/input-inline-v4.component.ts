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
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';

@Component({
    selector: 'fusion-input-inline',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent, LoaderComponent, IconModule, DropdownComponent],
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
            if (value === InlineInputType.Text || value === InlineInputType.Dropdown) {
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

    get isDropdown(): boolean {
        return this.type === InlineInputType.Dropdown;
    }

    get dropdownSelectedText(): string {
        if (this.isDropdown && Array.isArray(this.inputControl?.value) && this.inputControl?.value.length > 0) {
            return this.inputControl?.value[0]?.displayText;
        }
        return '';
    }

    @Input() readOnly: boolean = false;

    @Input() set pending(value: boolean) {
        if (value) {
            this.inputControl.disable({emitEvent: false});
            this._pending = true;
        } else {
            if (!this.disabled) {
                this.inputControl.enable({emitEvent: false});
            }
            this._pending = false;
        }
    }

    get pending(): boolean {
        return this._pending;
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
    @Input() hideNumberArrows = true;

    @Input() selectOptions: DropdownOption[] = [];

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
    /** @internal */
    dropdownIcon = 'ph/caret-down';

    private _type: InlineInputType = InlineInputType.Text;
    private _inputType: InputType = 'text';
    private clickOutSideSubscription: Subscription;
    private onDestroy$ = new Subject<void>();
    private stayInEditMode = false;
    private _pending = false;
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
                this.isEditMode$.next(false);
                this.inputValue = this.inputControl.value;
            } else {
                this.cancel();
            }
        }
    }

    /** @internal */
    cancel() {
        if (this.isEditMode$.getValue() && !this.pending) {
            if (!this.stayInEditMode) {
                if (this.isDropdown) {
                    this.handleDropdownSelect();
                } else {
                    this.inputControl.setValue(this.inputValue, {emitEvent: false});
                    this.isEditMode$.next(false);
                    this.onCancel.emit();
                }
            } else {
                this.stayInEditMode = false;
            }
        }
    }

    /** @internal */
    goToEditMode(withValue?: string | number): void {
        if (!this.disabled && !this.readOnly) {
            this.inputControl.setValue(!isNullOrUndefined(withValue) ? withValue : this.inputValue, {emitEvent: false});
            this.isEditMode$.next(true);
        }
    }

    private getErrorMessage(inputError: {[key: string]: any}): string {
        if (inputError) {
            const errorKey = Object.keys(inputError)[0];
            let errorMessage = `Error: ${errorKey}`;
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

    private handleDropdownSelect() {
        if (this.inputControl.value === this.inputValue) {
            this.isEditMode$.next(false);
        } else {
            this.onSave.emit({
                currentValue: this.inputValue,
                newValue: this.inputControl.value
            });
            this.isEditMode$.next(false);
            this.inputValue = this.inputControl.value;
        }
    }

    private setEditMode(val: string | number) {
        if (!!val) {
            this.goToEditMode(val);
            this.stayInEditMode = true;
        }
    }

    private setFocusToInput() {
        setTimeout(() => {
            if (this.type === InlineInputType.Dropdown) {
                const dropdownTrigger = this.inputWrapper.nativeElement.querySelector('fusion-dropdown-select');
                if (!!dropdownTrigger) {
                    dropdownTrigger.click();
                }
            } else {
                this.inputComponent.setFocus();
            }
        }, 0);
    }

    private handleClickOutside(value: boolean) {
        if (value) {
            this.setFocusToInput();
            this.clickOutSideSubscription = fromEvent(document, 'click').subscribe((event: MouseEvent) => {
                const clickedInside = this.isClickInside(event);
                if (!clickedInside && !this.stayInEditMode) {
                    this.cancel();
                }
            });
        } else {
            this.clickOutSideSubscription?.unsubscribe();
        }
    }

    private isClickInside(event: MouseEvent): boolean {
        if (event.clientX === 0 && event.clientY === 0) {
            return !!(event.target as HTMLElement).closest('fusion-input-inline');
        }
        const parentRect = this.inputWrapper.nativeElement.getBoundingClientRect();
        return (
            parentRect.left <= event.clientX &&
            parentRect.right >= event.clientX &&
            parentRect.top <= event.clientY &&
            parentRect.bottom >= event.clientY
        );
    }

    protected readonly InlineInputType = InlineInputType;
}
