import {Theme} from '../../../theme/theme-base';
import {InjectionToken} from '@angular/core';

export interface TableTheme extends Theme {
    '--table-header-bottom-border-color'?: string;
    '--table-body-border'?: string;
    '--table-header-font-family'?: string;
    '--table-header-font-size'?: string;
    '--table-header-font-weight'?: string;
    '--table-odd-row-background-color'?: string;
    '--table-even-row-background-color'?: string;
    '--table-empty-image'?: string;
}

export const TABLE_THEME_TOKEN = new InjectionToken<TableTheme>('Table Theme Token');
