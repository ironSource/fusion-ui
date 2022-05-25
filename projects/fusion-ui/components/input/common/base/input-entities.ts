import {InputOptions} from './input.options';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

// Todo - replace multiple string type with enum

export interface InputConfiguration {
    placeholder?: string;
    errorType?: string;
    name?: string;
    icon?: InputIconData | InputIconData[];
    units?: string;
    unitPos?: string;
    unitPlaceholder?: boolean;
    btn?: string;
    btnDisabled?: boolean;
    btnLoading?: boolean;
    id?: number | string;
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

export interface InputIconData {
    iconData: string | IconData;
    iconPos: 'left' | 'right' | '';
}
