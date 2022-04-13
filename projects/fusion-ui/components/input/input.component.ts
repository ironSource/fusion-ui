import {
    Component,
    ChangeDetectionStrategy,
    forwardRef,
    ViewChild,
    ElementRef,
    Input,
    Output,
    EventEmitter,
    Injector,
    OnInit,
    OnDestroy,
    AfterViewInit
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputBase} from './input-base';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {CONFIG_INPUT_BY_UI_STYLE, InputConfigByStyle} from '@ironsource/fusion-ui/components/input/input.component.config';
import {StyleVersion, VersionService} from '@ironsource/fusion-ui/services';
import {InputConfiguration} from '@ironsource/fusion-ui/components/input/input-entities';
import {
    ENTER_KEY_CODE,
    ESCAPE_KEY_CODE,
    INPUT_DEFAULT_CONFIGURATION,
    SPECIAL_KEYS
} from '@ironsource/fusion-ui/components/input/input-utils';
import {filter, map, takeUntil, tap} from 'rxjs/operators';
import {isBoolean, isNullOrUndefined, isString} from '@ironsource/fusion-ui/utils';
import {InputOptions} from '@ironsource/fusion-ui/components';
import {InputParameters} from '@ironsource/fusion-ui/components/input/input-parameters';

// Todo - check if someone use error as boolean and if not change type to string only
@Component({
    selector: 'fusion-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component-v1.scss', './input.component-v2.scss', './input.component-v3.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}]
})
export class InputComponent extends InputParameters implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    @ViewChild('input', {static: false}) input: ElementRef;
    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

    @Input() loading: boolean;
    // Todo - think about a way to use it with generic way to listen to all kind of events
    @Output() ngFocus = new EventEmitter<void>();
    @Output() ngBlur = new EventEmitter<void>();
    @Output() ngEnter = new EventEmitter<any>();
    @Output() ngEscape = new EventEmitter<any>();
    @Output() btnAction = new EventEmitter<MouseEvent>();
    @Output() passHiddenStateChanged = new EventEmitter<boolean>();

    inputControl = new FormControl();
    file = new FormControl();
    focused: boolean;
    step: string;
    showErrorClass$ = new BehaviorSubject(false);
    configByStyle$ = new Observable<InputConfigByStyle>();
    disabled$ = new BehaviorSubject(false);
    protected inputControlValueChanges$: Observable<any>;
    protected fileControlValueChanges$: Observable<any>;
    protected onBlur: (args: string) => void;

    constructor(injector: Injector, public elementRef: ElementRef, private versionService: VersionService) {
        super(injector);
    }

    get config(): InputConfiguration {
        return {...INPUT_DEFAULT_CONFIGURATION, ...this._configuration};
    }

    get isSmall(): boolean {
        return this.config.options?.size === 'small';
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
        this.initChangesTrigger();
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this.setMouseWheelListener();
        this.setKeyDownListener();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    initChangesTrigger(): void {
        const valueChanges$ =
            this.config.type === 'file'
                ? this.fileControlValueChanges$.pipe(map(_ => this.fileInput.nativeElement.files))
                : this.inputControlValueChanges$;

        valueChanges$.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.propagateChange(value);
        });
    }

    onConfigurationChanged(value: InputConfiguration): void {
        this.onOptionsChanged({previousValue: this.config.options, currentValue: value.options});
        this.onDisabledChanged({previousValue: this.config.disabled, currentValue: value.disabled});
        this.onErrorChanged({previousValue: this.config.error, currentValue: value.error});
        this._configuration = value;
    }

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

    showErrorIcon(): boolean {
        if (this.versionService.styleVersion === StyleVersion.V2) {
            return !isNullOrUndefined(this.config.error);
        } else {
            return this.config.options.size === 'small' && this.config.error && !isBoolean(this.config.error);
        }
    }

    getErrorIcon(errorType: string, infoIconName: string, warningIconName: string): string {
        return errorType === 'error' ? infoIconName : errorType === 'warning' ? warningIconName : '';
    }

    getTooltipErrorsMessage(): string {
        return isString(this.config.error) ? (this.config.error as string) : '';
    }

    blur(): void {
        this.focused = false;
        if (this.ngBlur) {
            this.ngBlur.emit();
        }
        if (this.onBlur) {
            this.onBlur(this.inputControl.value);
        }
    }

    focus(): void {
        this.focused = true;
        if (this.ngFocus) {
            this.ngFocus.emit();
        }
    }

    onButtonClicked($event: MouseEvent): void {
        if (this.config.type === 'file') {
            this.fileInput.nativeElement.click();
        } else if (this.btnAction) {
            this.btnAction.emit($event);
        }
    }

    clearInput(isFocused = false): void {
        this.inputControl.setValue('');
        if (isFocused) {
            this.setFocus();
        }
    }

    setFocus(): void {
        this.input.nativeElement.focus();
    }

    passToggle($event: Event): void {
        const passShownState = this.config.options.hasOwnProperty('isPassHidden') ? this.config.options.isPassHidden : true;
        if (!isNullOrUndefined($event)) {
            this.setFocus();
            this.passHiddenStateChanged.emit(!passShownState);
        }
    }

    getInputType(): string {
        return this.config.type === 'file' || (this.config.type === 'password' && !this.config.options.isPassHidden)
            ? 'text'
            : this.config.type;
    }

    onPassToggleMouseDown($event: Event): void {
        $event.preventDefault();
    }

    toggleErrorClass(error: boolean): void {
        this.showErrorClass$.next(error);
    }

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
     */
    propagateChange = (_: string) => {};

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn): void {
        this.onBlur = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled$.next(isDisabled);
    }

    protected getStepIndication(): string {
        if (Number.isInteger(this.config.decimal) && this.config.decimal > 0) {
            return '0.' + new Array(this.config.decimal).fill('0').slice(0, -1).join('') + '1';
        }
    }

    protected setPasswordShownState(value: InputOptions): void {
        if (!!value && !isNullOrUndefined(value.isPassHidden)) {
            this.passToggle(null);
        }
    }

    // Todo - use optional chaining when upgrade ts version
    protected getFileControlValueChangesObservable(): Observable<any> {
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

    protected getConfigStyleObservable(): Observable<InputConfigByStyle> {
        return this.selectedVersion$.pipe(map((styleVersion: StyleVersion) => CONFIG_INPUT_BY_UI_STYLE[`style_v${styleVersion}`]));
    }

    // Todo - use optional chaining when upgrade ts version
    protected setInputElementListeners(): void {
        const hasPreventCharacters =
            this.config.options && this.config.options.preventCharacters && this.config.options.preventCharacters.length;
        const hasEscapeEmitterListeners = this.ngEscape.observers.length;
        const hasEnterEmitterListeners = this.ngEnter.observers.length;

        if (hasPreventCharacters || hasEscapeEmitterListeners || hasEnterEmitterListeners) {
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

    protected inputKeydownHandler(event: KeyboardEvent): boolean {
        if (event.key === ENTER_KEY_CODE) {
            this.ngEnter.emit(this.inputControl.value);
        } else if (event.key === ESCAPE_KEY_CODE) {
            this.ngEscape.emit(this.inputControl.value);
        } else {
            event.preventDefault();
            return false;
        }
    }

    protected setMouseWheelListener(): void {
        if (this.config.disableWheelScroll && this.config.type === 'number') {
            fromEvent(this.elementRef.nativeElement, 'mousewheel')
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(($event: MouseEvent) => $event.preventDefault());
        }
    }

    protected setKeyDownListener(): void {
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

    protected onOptionsChanged({previousValue, currentValue}: {previousValue: InputOptions; currentValue: InputOptions}): void {
        if (currentValue !== previousValue) {
            this.setPasswordShownState(currentValue);
        }
    }

    protected onDisabledChanged({previousValue, currentValue}: {previousValue: boolean; currentValue: boolean}): void {
        if (currentValue !== previousValue) {
            this.disabled$.next(currentValue);
        }
    }

    protected onErrorChanged({previousValue, currentValue}: {previousValue: boolean | string; currentValue: boolean | string}): void {
        if (currentValue !== previousValue) {
            this.toggleErrorClass(!!currentValue);
        }
    }
}
