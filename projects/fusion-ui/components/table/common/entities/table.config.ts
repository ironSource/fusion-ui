import {InjectionToken} from '@angular/core';
import {TableModuleOptions} from './table-module-options';
import {ERROR_MESSAGES} from '@ironsource/fusion-ui/components/error-message';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export const TABLE_OPTIONS_DEFAULT_VALUES: TableModuleOptions = {
    errorMessages: ERROR_MESSAGES
};

export const TABLE_OPTIONS_TOKEN = new InjectionToken<TableModuleOptions>('Table options');

export const DEFAULT_REMOVE_ICON = 'close';
export const DEFAULT_REMOVE_TOOLTIP_TEXT = 'Remove';
export const DEFAULT_REMOVE_TOOLTIP_WIDTH = '71';
export const CELL_PADDING = '20px';

export interface TableIconsConfigByStyle {
    iconSort: IconData;
    iconInfo: IconData;
}

export const CONFIG_TABLE_BY_UI_STYLE: {[styleKey: string]: TableIconsConfigByStyle} = {
    style_v1: {
        iconSort: {iconName: 'arrow-sort-table', iconVersion: 'v1'},
        iconInfo: {iconName: 'info-tooltip', iconVersion: 'v1'}
    },
    style_v2: {
        iconSort: {iconName: 'arrow-sort-down', iconVersion: 'v2'},
        iconInfo: {iconName: 'info-circle', iconVersion: 'v2'}
    },
    style_v3: {
        iconSort: {iconName: 'arrow-sort-down', iconVersion: 'v3'},
        iconInfo: {iconName: 'info-circle', iconVersion: 'v3'}
    }
};

export const MAXIMUM_EXPANDABLE_LEVEL = 2;
export const DEFAULT_EXPANDABLE_LEVEL = 1;

export const ROW_CLICK_SUPPRESS_FOR_PARENT_SELECTORS = [
    'fusion-checkbox',
    'fusion-toggle',
    'fusion-input',
    'fusion-icon.icon-edit',
    'fusion-icon.icon-save',
    'fusion-button',
    '[fusion-button]'
];
