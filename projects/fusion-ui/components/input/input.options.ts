/*
 * Created on 2020.3.24 By Andy Kononenko (andyk@ironsrc.com)
 */

export enum InputSize {
    Small = 'small',
    Medium = 'medium'
}

export interface InputOptions {
    size?: InputSize;
    width?: string;
    buttonIcon?: string | {iconName: string; iconVersion: string};
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
