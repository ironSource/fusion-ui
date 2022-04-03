/*
 * Created on 2020.4.19 By Andy Kononenko (andyk@ironsrc.com)
 */

import {IconData} from '@ironsource/fusion-ui';

export interface InputInlineConfigByStyle {
    iconEdit: string | IconData;
    iconSave: string | IconData;
    loadingSize: string;
}

export const CONFIG_INPUT_INLINE_BY_UI_STYLE: {[styleKey: string]: InputInlineConfigByStyle} = {
    style_v1: {
        iconEdit: {iconName: 'edit', iconVersion: 'v1'},
        iconSave: {iconName: 'check-v-2', iconVersion: 'v1'},
        loadingSize: 'small'
    },
    style_v2: {
        iconEdit: {iconName: 'pen', iconVersion: 'v2'},
        iconSave: {iconName: 'check', iconVersion: 'v2'},
        loadingSize: 'inline'
    }
};

export interface CurrencyPipeParameters {
    currencyCode?: string;
    display?: 'code' | 'symbol' | 'symbol-narrow' | string;
    digitsInfo?: string;
}
