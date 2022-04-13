/*
 * Created on 2020.4.21 By Andy Kononenko (andyk@ironsrc.com)
 */

import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {IconData} from '@ironsource/fusion-ui';

export interface InputConfigByStyle {
    iconSearch: IconData;
    iconClear: IconData;
    iconInfo: IconData;
    iconWarning: IconData;
    iconLoader: IconData;
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
        iconClear: {iconName: 'close-circle', iconVersion: 'v2'},
        iconInfo: {iconName: 'importent', iconVersion: 'v2'},
        iconWarning: {iconName: 'warning', iconVersion: 'v2'},
        iconLoader: {iconName: 'loading-rotate', iconVersion: 'v2'},
        currentStyleVersion: StyleVersion.V2
    }
};
