import {Theme} from '../../theme/theme-base';
import {InjectionToken} from '@angular/core';

export interface AlertTheme extends Theme {
    '--alert-info-background-color'?: string;
}

export const ALERT_THEME_TOKEN = new InjectionToken<AlertTheme>('Alert Theme Token');
