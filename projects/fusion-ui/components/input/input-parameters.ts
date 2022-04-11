import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {Directive, Input} from '@angular/core';
import {InputConfiguration, InputIconData} from './input-entities';
import {InputOptions, DEFAULT_INPUT_OPTIONS} from './input.options';

@Directive()
export abstract class InputParameters extends StyleBase {
    @Input() set configuration(value: InputConfiguration) {
        this.onConfigurationChanged(value);
    }

    @Input() set placeholder(placeholder: string) {
        this.configuration = {...this._configuration, placeholder};
    }

    @Input() set errorType(errorType: string) {
        this.configuration = {...this._configuration, errorType};
    }

    @Input() set name(name: string) {
        this.configuration = {...this._configuration, name};
    }

    @Input() set icon(icon: InputIconData | InputIconData[]) {
        this.configuration = {...this._configuration, icon};
    }

    @Input() set units(units: string) {
        this.configuration = {...this._configuration, units};
    }

    @Input() set unitPos(unitPos: string) {
        this.configuration = {...this._configuration, unitPos};
    }

    @Input() set unitPlaceholder(unitPlaceholder: boolean) {
        this.configuration = {...this._configuration, unitPlaceholder};
    }

    @Input() set btn(btn: string) {
        this.configuration = {...this._configuration, btn};
    }

    @Input() set btnDisabled(btnDisabled: boolean) {
        this.configuration = {...this._configuration, btnDisabled};
    }

    @Input() set btnLoading(btnLoading: boolean) {
        this.configuration = {...this._configuration, btnLoading};
    }

    @Input() set id(id: number) {
        this.configuration = {...this._configuration, id};
    }

    @Input() set type(type: string) {
        this.configuration = {...this._configuration, type};
    }

    @Input() set class(value: string) {
        this.configuration = {...this._configuration, class: value};
    }

    @Input() set decimal(decimal: number) {
        this.configuration = {...this._configuration, decimal};
    }

    @Input() set clear(clear: boolean) {
        this.configuration = {...this._configuration, clear};
    }

    @Input() set readonly(readonly: boolean) {
        this.configuration = {...this._configuration, readonly};
    }

    @Input() set required(required: boolean) {
        this.configuration = {...this._configuration, required};
    }

    @Input() set showSearchIcon(showSearchIcon: 'left' | 'right' | 'none') {
        this.configuration = {...this._configuration, showSearchIcon};
        if (showSearchIcon !== 'none') {
            this.configuration = {...this._configuration, ...{iconPos: showSearchIcon}};
        }
    }

    @Input() set showSearchIconWhenHasInputValue(showSearchIconWhenHasInputValue: boolean) {
        this.configuration = {...this._configuration, showSearchIconWhenHasInputValue};
    }

    @Input() set min(min: number) {
        this.configuration = {...this._configuration, min};
    }

    @Input() set max(max: number) {
        this.configuration = {...this._configuration, max};
    }

    @Input() set maxlength(maxlength: number) {
        this.configuration = {...this._configuration, maxlength};
    }

    @Input() set sanitationRegex(sanitationRegex: string | RegExp) {
        this.configuration = {...this._configuration, sanitationRegex};
    }

    @Input() set acceptFileExtensions(acceptFileExtensions: string) {
        this.configuration = {...this._configuration, acceptFileExtensions};
    }

    @Input() set disableWheelScroll(disableWheelScroll: boolean) {
        this.configuration = {...this._configuration, disableWheelScroll};
    }

    @Input() set options(options: InputOptions) {
        this.configuration = {
            ...this._configuration,
            options: {
                ...DEFAULT_INPUT_OPTIONS,
                ...(options || {})
            }
        };
    }

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('isDisabled') set disabled(disabled: boolean) {
        this.configuration = {...this._configuration, disabled};
    }

    @Input() set error(error: boolean | string) {
        this.configuration = {...this._configuration, error};
    }

    _configuration: InputConfiguration = {};

    abstract onConfigurationChanged(value: InputConfiguration): void;
}
