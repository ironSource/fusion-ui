import {Directive, Input} from '@angular/core';
import {InputConfiguration, InputIconData} from './input-entities';
import {InputOptions, DEFAULT_INPUT_OPTIONS} from './input.options';
import {BehaviorSubject} from 'rxjs';

@Directive()
export abstract class InputParameters {
    /** @internal */
    @Input() set configuration(value: InputConfiguration) {
        this.onConfigurationChanged(value);
    }
    /** @internal */
    @Input() set placeholder(placeholder: string) {
        this.configuration = {...this._configuration, placeholder};
    }
    /** @internal */
    @Input() set errorType(errorType: string) {
        this.configuration = {...this._configuration, errorType};
    }
    /** @internal */
    @Input() set name(name: string) {
        this.configuration = {...this._configuration, name};
    }
    /** @internal */
    @Input() set icon(icon: InputIconData | InputIconData[]) {
        this.configuration = {...this._configuration, icon};
    }
    /** @internal */
    @Input() set units(units: string) {
        this.configuration = {...this._configuration, units};
    }
    /** @internal */
    @Input() set unitPos(unitPos: string) {
        this.configuration = {...this._configuration, unitPos};
    }
    /** @internal */
    @Input() set unitPlaceholder(unitPlaceholder: boolean) {
        this.configuration = {...this._configuration, unitPlaceholder};
    }
    /** @internal */
    @Input() set btn(btn: string) {
        this.configuration = {...this._configuration, btn};
    }
    /** @internal */
    @Input() set btnDisabled(btnDisabled: boolean) {
        this.configuration = {...this._configuration, btnDisabled};
    }
    /** @internal */
    @Input() set btnLoading(btnLoading: boolean) {
        this.configuration = {...this._configuration, btnLoading};
    }
    /** @internal */
    @Input() set id(id: number | string) {
        this.configuration = {...this._configuration, id};
    }
    /** @internal */
    @Input() set type(type: string) {
        this.configuration = {...this._configuration, type};
    }
    /** @internal */
    @Input() set class(value: string) {
        this.configuration = {...this._configuration, class: value};
    }
    /** @internal */
    @Input() set decimal(decimal: number) {
        this.configuration = {...this._configuration, decimal};
    }
    /** @internal */
    @Input() set clear(clear: boolean) {
        this.configuration = {...this._configuration, clear};
    }
    /** @internal */
    @Input() set readonly(readonly: boolean) {
        this.configuration = {...this._configuration, readonly};
    }
    /** @internal */
    @Input() set required(required: boolean) {
        this.configuration = {...this._configuration, required};
    }
    /** @internal */
    @Input() set showSearchIcon(showSearchIcon: 'left' | 'right' | 'none') {
        this.configuration = {...this._configuration, showSearchIcon};
        if (showSearchIcon !== 'none') {
            this.configuration = {...this._configuration, ...{iconPos: showSearchIcon}};
        }
    }
    /** @internal */
    @Input() set showSearchIconWhenHasInputValue(showSearchIconWhenHasInputValue: boolean) {
        this.configuration = {...this._configuration, showSearchIconWhenHasInputValue};
    }
    /** @internal */
    @Input() set min(min: number) {
        this.configuration = {...this._configuration, min};
    }
    /** @internal */
    @Input() set max(max: number) {
        this.configuration = {...this._configuration, max};
    }
    /** @internal */
    @Input() set maxlength(maxlength: number) {
        this.configuration = {...this._configuration, maxlength};
    }
    /** @internal */
    @Input() set sanitationRegex(sanitationRegex: string | RegExp) {
        this.configuration = {...this._configuration, sanitationRegex};
    }
    /** @internal */
    @Input() set acceptFileExtensions(acceptFileExtensions: string) {
        this.configuration = {...this._configuration, acceptFileExtensions};
    }
    /** @internal */
    @Input() set disableWheelScroll(disableWheelScroll: boolean) {
        this.configuration = {...this._configuration, disableWheelScroll};
    }
    /** @internal */
    @Input() set options(options: InputOptions) {
        this.configuration = {
            ...this._configuration,
            options: {
                ...DEFAULT_INPUT_OPTIONS,
                ...(options || {})
            }
        };
    }

    // /** @internal */
    // // eslint-disable-next-line @angular-eslint/no-input-rename
    // @Input('isDisabled') set disabled(disabled: boolean) {
    //     this.isDisabledInput$.next(false)
    //     this.configuration = {...this._configuration, disabled};
    // }
    /** @internal */
    @Input() set error(error: boolean | string) {
        this.configuration = {...this._configuration, error};
    }
    /** @internal */
    @Input() set helperText(helperText: string) {
        this.configuration = {...this._configuration, helperText};
    }

    /** @internal */
    _configuration: InputConfiguration = {};
    /** @internal */
    isDisabledInput$ = new BehaviorSubject<boolean>(false);
    /** @internal */
    abstract onConfigurationChanged(value: InputConfiguration): void;
}
