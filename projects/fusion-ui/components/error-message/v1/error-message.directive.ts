import {
    ChangeDetectorRef,
    ComponentRef,
    Directive,
    ElementRef,
    Host,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    ViewContainerRef
} from '@angular/core';
import {isString} from '@ironsource/fusion-ui/utils';
import {ERROR_MESSAGES, FormControlStatus} from '@ironsource/fusion-ui/components/error-message/common/entities';
import {ErrorMessageComponent} from './error-message.component';
import {AbstractControl, ControlContainer, FormGroupDirective} from '@angular/forms';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v2';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v2';

@Directive({
    selector: '[fusionErrorMessage]',
    standalone: false
})
export class ErrorMessageDirective implements OnInit, OnDestroy, OnChanges {
    @Input() showError: boolean;
    @Input() fusionErrorMessage: string;
    @Input() errorInnerMessage: string;
    @Input() customMessages: {[key: string]: string};
    @Input() customMapping: {[key: string]: string};
    @Input() errorStyles = {};
    private errorMessageComponent: ComponentRef<ErrorMessageComponent>;
    private formControl: AbstractControl;
    private isTooltipMessage: boolean;
    private currentStatus: FormControlStatus;

    constructor(
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private changeDetectorRef: ChangeDetectorRef,
        private fg: ControlContainer,
        @Optional() @Host() private inputComponent: InputComponent,
        @Optional() @Host() private dropdownComponent: DropdownComponent,
        private loggerService: LogService
    ) {}

    get parentFormControl(): AbstractControl {
        return this.fg.formDirective ? (this.fg.formDirective as FormGroupDirective).form : null;
    }

    ngOnInit() {
        this.customMessages = this.customMessages || {};
        this.customMapping = this.customMapping || {};
        const showErrorInit = this.showError;
        this.showError = this.showError === undefined || this.showError === null ? true : this.showError;

        this.errorMessageComponent = this.viewContainerRef.createComponent(ErrorMessageComponent);
        this.errorMessageComponent.instance.styles = this.errorStyles;
        this.formControl = this.parentFormControl.get(this.elementRef.nativeElement.getAttribute('formcontrolname'));
        this.isTooltipMessage = this.elementRef.nativeElement.getAttribute('errortype');
        this.formControl.valueChanges.subscribe(() => {
            this._checkErrors();
        });

        this.formControl.statusChanges.subscribe((status: FormControlStatus) => {
            // handle async validations
            if (status === FormControlStatus.Invalid && this.currentStatus === FormControlStatus.Pending) {
                this._checkErrors(true);
            }
            this.currentStatus = status;
        });

        if (showErrorInit) {
            this._checkErrors();
        }
    }

    ngOnChanges() {
        this.viewContainerRef.clear();
        this._checkErrors();
    }

    ngOnDestroy() {
        if (this.errorMessageComponent) {
            this.errorMessageComponent.destroy();
        }
    }

    private _setComponentError(error: any) {
        if (this.inputComponent) {
            this.inputComponent.error = error;
            this.inputComponent.toggleErrorClass(!!error);
        } else if (this.dropdownComponent) {
            this.dropdownComponent.error = error;
        }
    }

    private _checkErrors(async?: boolean) {
        if (this.errorMessageComponent) {
            let errorMessage = '';
            this.errorMessageComponent.instance.showError = false;
            this._setComponentError('');
            const errors = this.formControl.errors || {};
            const isFormControlInvalid = Object.keys(errors).some(errorKey => {
                // if error value is string to that's the message will be shown
                errorMessage = isString(errors[errorKey]) ? errors[errorKey] : this._getMessage(errorKey);
                return true;
            });

            if (isFormControlInvalid && this.showError) {
                if (this.isTooltipMessage) {
                    this._setComponentError(errorMessage);
                } else {
                    this.errorMessageComponent.instance.errorMessage = errorMessage;
                    this.errorMessageComponent.instance.showError = this.showError;
                    if (this.inputComponent) {
                        this.inputComponent.error = this.errorMessageComponent.instance.showError;
                        this.inputComponent.toggleErrorClass(this.errorMessageComponent.instance.showError);
                    }
                }
            }

            if (async) {
                this.changeDetectorRef.detectChanges();
                this.errorMessageComponent.changeDetectorRef.detectChanges();
            }
        }
    }

    private _getMessage(errorKey) {
        let errorMessage = '';
        if (this.customMessages[errorKey]) {
            errorMessage = this.customMessages[errorKey];
        } else if (ERROR_MESSAGES[errorKey]) {
            errorMessage = ERROR_MESSAGES[errorKey];
            errorMessage = errorMessage.replace('{NAME}', this.fusionErrorMessage);
            errorMessage = errorMessage.replace('{INNER-NAME}', this.errorInnerMessage || this.fusionErrorMessage);
            Object.keys(this.customMapping).forEach(find => (errorMessage = errorMessage.replace(`{${find}}`, this.customMapping[find])));
        } else {
            this.loggerService.error(new Error(`Unknown validation message for error key: ${errorKey}`));
        }

        return errorMessage;
    }
}
