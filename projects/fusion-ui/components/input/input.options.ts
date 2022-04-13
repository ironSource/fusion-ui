/*
 * Created on 2020.3.24 By Andy Kononenko (andyk@ironsrc.com)
 */

import {IconData} from '@ironsource/fusion-ui/components/icon';

export enum InputSize {
    Small = 'small',
    Medium = 'medium'
}

export interface InputOptions {
    size?: InputSize;
    width?: string;
    buttonIcon?: string | IconData;
    rounded?: boolean;
    style?: {[styleKey: string]: string};
    iconStyle?: {[styleKey: string]: string};
    preventCharacters?: string[];
    isPassHidden?: boolean;
}

export const DEFAULT_INPUT_OPTIONS = {
    width: '',
    rounded: false,
    isPassHidden: true
};
