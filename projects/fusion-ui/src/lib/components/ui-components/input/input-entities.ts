import {InputOptions} from './input.options';

// Todo - replace multiple string type with enum
export interface InputConfiguration {
    placeholder?: string;
    errorType?: string;
    name?: string;
    icon?: string | {iconName: string; iconVersion?: string};
    iconPos?: 'left' | 'right' | '';
    units?: string;
    unitPos?: string;
    unitPlaceholder?: boolean;
    btn?: string;
    btnDisabled?: boolean;
    btnLoading?: boolean;
    id?: number;
    type?: string;
    class?: string;
    decimal?: number;
    clear?: boolean;
    readonly?: boolean;
    required?: boolean;
    showSearchIcon?: 'left' | 'right' | 'none';
    showSearchIconWhenHasInputValue?: boolean;
    min?: number;
    max?: number;
    maxlength?: number;
    sanitationRegex?: string | RegExp;
    acceptFileExtensions?: string;
    disableWheelScroll?: boolean;
    options?: InputOptions;
    disabled?: boolean;
    error?: boolean | string;
    autofocus?: boolean;
    disableOnLoading?: boolean; // suppress disable state on loading
}
