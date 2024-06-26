import {Input, EventEmitter, OnInit, Output, ElementRef, ViewChild, Injector, OnDestroy, AfterViewInit, Directive} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {isNullOrUndefined, isString} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject, Observable, fromEvent, Subject, of, combineLatest} from 'rxjs';
import {map, takeUntil, tap, filter, startWith} from 'rxjs/operators';
import {InputOptions} from './input.options';
import {InputConfigByStyle} from './input.component.config';
import {InputParameters} from './input-parameters';
import {SPECIAL_KEYS, ESCAPE_KEY_CODE, ENTER_KEY_CODE, INPUT_DEFAULT_CONFIGURATION} from './input-utils';
import {InputConfiguration} from './input-entities';

@Directive()
export class InputBaseComponent extends InputParameters implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    /** @internal */
    @ViewChild('input', {static: false}) input: ElementRef;
    /** @internal */
    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
    /** @internal */
    @Input() loading: boolean;
    /** @internal */
    // Todo - think about a way to use it with generic way to listen to all kind of events
    /** @internal */
    @Output() ngFocus = new EventEmitter<void>();
    /** @internal */
    @Output() ngBlur = new EventEmitter<void>();
    /** @internal */
    @Output() ngEnter = new EventEmitter<any>();
    /** @internal */
    @Output() ngEscape = new EventEmitter<any>();
    /** @internal */
    @Output() btnAction = new EventEmitter<MouseEvent>();
    /** @internal */
    @Output() passHiddenStateChanged = new EventEmitter<boolean>();

    /** @internal */
    onDestroy$ = new Subject<void>();
    /** @internal */
    inputControl = new FormControl();
    /** @internal */
    file = new FormControl();
    /** @internal */
    focused: boolean;
    /** @internal */
    step: string;
    /** @internal */
    showErrorClass$ = new BehaviorSubject(false);
    /** @internal */
    configByStyle$ = new Observable<InputConfigByStyle>();
    /** @internal */
    disabled$ = new BehaviorSubject(false);
    /** @internal */
    isDisabledInput$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    isDisabledFormControl$ = new BehaviorSubject<boolean>(false);

    private inputControlValueChanges$: Observable<any>;
    private fileControlValueChanges$: Observable<any>;
    private _isPassHidden = true;
    private onBlur: (args: string) => void;

    constructor(
        /** @internal */
        public elementRef: ElementRef
    ) {
        super();
    }

    get config(): InputConfiguration {
        return {...INPUT_DEFAULT_CONFIGURATION, ...this._configuration};
    }

    get isSmall(): boolean {
        return this.config.options?.size === 'small';
    }

    set isPassHidden(val: boolean) {
        this._isPassHidden = val;
    }

    get isPassHidden() {
        return this._isPassHidden;
    }

    get isReadOnly() {
        return (
            this.config?.readonly || this.disabled$.getValue() || (this.loading && this.config?.disableOnLoading) || this.config?.btnLoading
        );
    }

    // Todo - use optional chaining when upgrade ts version
    get displaySearchIcon(): boolean {
        const inputValue = this.input ? this.input.nativeElement.value : null;
        return (
            this.config.showSearchIcon !== 'none' && (!inputValue || (this.config.showSearchIconWhenHasInputValue && !this.config.clear))
        );
    }

    ngOnInit(): void {
        this.step = this.getStepIndication();
        this.inputControlValueChanges$ = this.inputControl.valueChanges;
        this.fileControlValueChanges$ = this.getFileControlValueChangesObservable();
        this.configByStyle$ = this.getConfigStyleObservable();
        this.showErrorClass$.next(!!this.config.error);
        this.isPassHidden = this.config.options.isPassHidden;
        this.initChangesTrigger();
        this.initDisabledStateChanged();
    }

    ngAfterViewInit(): void {
        this.setInputElementListeners();
        this.setMouseWheelListener();
        this.setKeyDownListener();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /** @internal */
    initChangesTrigger(): void {
        const valueChanges$ =
            this.config.type === 'file'
                ? this.fileControlValueChanges$.pipe(map(_ => this.fileInput.nativeElement.files))
                : this.inputControlValueChanges$;

        valueChanges$.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.propagateChange(value);
        });
    }

    initDisabledStateChanged() {
        combineLatest([this.isDisabledFormControl$.asObservable(), this.isDisabledInput$.asObservable()])
            .pipe(startWith([false, false]), takeUntil(this.onDestroy$))
            .subscribe(([isDisabledInput, isDisabledFormControl]: [boolean, boolean]) => {
                this.disabled$.next(isDisabledInput || isDisabledFormControl);
            });
    }
    /** @internal */
    onConfigurationChanged(value: InputConfiguration): void {
        this.onOptionsChanged({previousValue: this.config.options, currentValue: value.options});
        this.onDisabledChanged({previousValue: this.config.disabled, currentValue: value.disabled});
        this.onErrorChanged({previousValue: this.config.error, currentValue: value.error});
        this._configuration = value;
    }
    /** @internal */
    getHolderClasses(): string[] {
        return [
            this.config.errorType === 'error' && 'fu-error-error',
            this.config.errorType === 'warning' && 'fu-error-warning',
            this.config.showSearchIcon !== 'none' && 'fu-has-search-icon',
            this.config.showSearchIcon === 'right' && 'fu-search-icon-right-position',
            !!this.config.btn && 'fu-button',
            !!this.focused && 'focused',
            (this.disabled$.getValue() || this.loading || this.config.btnLoading) && 'fu-disabled',
            !!this.config.options.rounded && 'fu-rounded'
        ].filter(Boolean);
    }
    /** @internal */
    showErrorIcon(): boolean {
        return true;
    }
    /** @internal */
    getErrorIcon(errorType: string, infoIconName: string, warningIconName: string): string {
        return errorType === 'error' ? infoIconName : errorType === 'warning' ? warningIconName : '';
    }
    /** @internal */
    getTooltipErrorsMessage(): string {
        return isString(this.config.error) ? (this.config.error as string) : '';
    }
    /** @internal */
    blur(): void {
        this.focused = false;
        this.input.nativeElement.blur();
        if (this.ngBlur) {
            this.ngBlur.emit();
        }
        if (this.onBlur) {
            this.onBlur(this.inputControl.value);
        }
    }
    /** @internal */
    focus(): void {
        this.focused = true;
        if (this.ngFocus) {
            this.ngFocus.emit();
        }
    }
    /** @internal */
    onButtonClicked($event: MouseEvent): void {
        if (this.config.type === 'file') {
            this.fileInput.nativeElement.click();
        } else if (this.btnAction) {
            this.btnAction.emit($event);
        }
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
    /** @internal */
    passToggle($event: Event): void {
        const passShownState = this.config.options.hasOwnProperty('isPassHidden') ? this.isPassHidden : true;
        if (!isNullOrUndefined($event)) {
            this.isPassHidden = !this.isPassHidden;
            this.setFocus();
            this.passHiddenStateChanged.emit(!passShownState);
        }
    }
    /** @internal */
    getInputType(): string {
        return this.config.type === 'file' || (this.config.type === 'password' && !this.isPassHidden) ? 'text' : this.config.type;
    }
    /** @internal */
    onPassToggleMouseDown($event: Event): void {
        $event.preventDefault();
    }
    /** @internal */
    toggleErrorClass(error: boolean): void {
        this.showErrorClass$.next(error);
    }
    /** @internal */
    writeValue(value: any): void {
        if (isNullOrUndefined(value)) {
            this.clearInput();
        } else {
            if (this.config.type === 'number' && Number.isInteger(this.config.decimal) && this.config.decimal > 0) {
                value = parseFloat(value).toFixed(this.config.decimal);
            }
            this.inputControl.setValue(value, {emitEvent: false});
        }
    }

    /**
     * Method to call when the input value has changes.
     * @internal
     */
    propagateChange = (_: string) => {};
    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    /** @internal */
    registerOnTouched(fn): void {
        this.onBlur = fn;
    }
    /** @internal */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabledFormControl$.next(isDisabled);
    }

    private getStepIndication(): string {
        if (Number.isInteger(this.config.decimal) && this.config.decimal > 0) {
            return '0.' + new Array(this.config.decimal).fill('0').slice(0, -1).join('') + '1';
        }
    }

    private setPasswordShownState(value: InputOptions): void {
        if (!!value && !isNullOrUndefined(value.isPassHidden)) {
            this.passToggle(null);
        }
    }

    // Todo - use optional chaining when upgrade ts version
    private getFileControlValueChangesObservable(): Observable<any> {
        return this.file.valueChanges.pipe(
            tap(value => {
                const fileName =
                    this.fileInput.nativeElement.files && this.fileInput.nativeElement.files[0]
                        ? this.fileInput.nativeElement.files[0].name
                        : value;
                this.inputControl.setValue(fileName, {emitEvent: false});
                this.inputControl.disable({emitEvent: false});
            })
        );
    }

    // Todo - use optional chaining when upgrade ts version
    private setInputElementListeners(): void {
        const hasPreventCharacters =
            this.config.options && this.config.options.preventCharacters && this.config.options.preventCharacters.length;
        const hasEscapeEmitterListeners = this.ngEscape.observers.length;
        const hasEnterEmitterListeners = this.ngEnter.observers.length;

        if (!isNullOrUndefined(this.input) && (hasPreventCharacters || hasEscapeEmitterListeners || hasEnterEmitterListeners)) {
            fromEvent(this.input.nativeElement, 'keydown')
                .pipe(
                    filter((event: KeyboardEvent) => {
                        return (
                            (hasEscapeEmitterListeners && event.key === ESCAPE_KEY_CODE) ||
                            (hasEnterEmitterListeners && event.key === ENTER_KEY_CODE) ||
                            (hasPreventCharacters && this.config.options.preventCharacters.includes(event.key))
                        );
                    }),
                    takeUntil(this.onDestroy$)
                )
                .subscribe(this.inputKeydownHandler.bind(this));
        }
    }

    private inputKeydownHandler(event: KeyboardEvent): boolean {
        if (event.key === ENTER_KEY_CODE) {
            this.ngEnter.emit(this.inputControl.value);
        } else if (event.key === ESCAPE_KEY_CODE) {
            this.ngEscape.emit(this.inputControl.value);
        } else {
            event.preventDefault();
            return false;
        }
    }

    private setMouseWheelListener(): void {
        if (this.config.disableWheelScroll && this.config.type === 'number') {
            fromEvent(this.elementRef.nativeElement, 'mousewheel')
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(($event: MouseEvent) => $event.preventDefault());
        }
    }

    private setKeyDownListener(): void {
        if (this.config.sanitationRegex) {
            const regex = new RegExp(this.config.sanitationRegex);
            fromEvent(this.elementRef.nativeElement, 'keydown')
                .pipe(
                    filter(($event: KeyboardEvent) => !(SPECIAL_KEYS.indexOf($event.key) !== -1) && !regex.test($event.key)),
                    takeUntil(this.onDestroy$)
                )
                .subscribe(($event: KeyboardEvent) => $event.preventDefault());
        }
    }

    private onOptionsChanged({previousValue, currentValue}: {previousValue: InputOptions; currentValue: InputOptions}): void {
        if (currentValue !== previousValue) {
            this.setPasswordShownState(currentValue);
        }
    }

    private onDisabledChanged({previousValue, currentValue}: {previousValue: boolean; currentValue: boolean}): void {
        if (currentValue !== previousValue) {
            this.isDisabledInput$.next(currentValue);
        }
    }

    private onErrorChanged({previousValue, currentValue}: {previousValue: boolean | string; currentValue: boolean | string}): void {
        if (currentValue !== previousValue) {
            this.toggleErrorClass(!!currentValue);
        }
    }

    protected getConfigStyleObservable(): Observable<InputConfigByStyle> {
        return of({} as InputConfigByStyle);
    }
}
