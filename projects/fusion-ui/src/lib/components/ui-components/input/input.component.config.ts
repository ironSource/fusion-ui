/*
 * Created on 2020.4.21 By Andy Kononenko (andyk@ironsrc.com)
 */

import {StyleVersion} from '../../../services/version/style-version.enum';

export interface InputConfigByStyle {
    iconSearch: string | {iconName: string; iconVersion?: string};
    iconClear: string | {iconName: string; iconVersion?: string};
    iconInfo: string | {iconName: string; iconVersion?: string};
    iconWarning: string | {iconName: string; iconVersion?: string};
    iconLoader: string | {iconName: string; iconVersion?: string};
    currentStyleVersion: StyleVersion;
}

export const CONFIG_INPUT_BY_UI_STYLE: {[styleKey: string]: InputConfigByStyle} = {
    style_v1: {
        iconSearch: {iconName: 'search', iconVersion: 'v1'},
        iconClear: {iconName: 'clear-full-circle', iconVersion: 'v1'},
        iconInfo: {iconName: 'info', iconVersion: 'v1'},
        iconWarning: {iconName: 'warning', iconVersion: 'v1'},
        iconLoader: {iconName: 'loading', iconVersion: 'v1'},
        currentStyleVersion: StyleVersion.V1
    },
    style_v2: {
        iconSearch: {iconName: 'search', iconVersion: 'v2'},
        iconClear: 'close-circle',
        iconInfo: 'importent',
        iconWarning: 'warning',
        iconLoader: 'loading-rotate',
        currentStyleVersion: StyleVersion.V2
    }
};
