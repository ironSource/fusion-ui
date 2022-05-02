import {InputConfiguration} from './input-entities';
import {getUniqueNumber} from '@ironsource/fusion-ui/utils';
import {DEFAULT_INPUT_OPTIONS} from './input.options';

export const SPECIAL_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Tab', 'End', 'Home', 'Enter', 'Escape'];
export const ENTER_KEY_CODE = 'Enter';
export const ESCAPE_KEY_CODE = 'Escape';

export const INPUT_DEFAULT_CONFIGURATION: InputConfiguration = {
    placeholder: '',
    disabled: false,
    disableOnLoading: true,
    errorType: '',
    btnDisabled: false,
    btnLoading: false,
    id: getUniqueNumber(),
    type: 'text',
    class: '',
    showSearchIcon: 'none',
    showSearchIconWhenHasInputValue: false,
    acceptFileExtensions: '*/*',
    options: {...DEFAULT_INPUT_OPTIONS}
};
