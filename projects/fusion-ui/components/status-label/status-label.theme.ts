/*
 * Created on 2020.5.11 By Andy Kononenko (andyk@ironsrc.com)
 */

import {Theme} from '@ironsource/fusion-ui/components/style';
import {InjectionToken} from '@angular/core';

export interface StatusLabelTheme extends Theme {
    '--state-label-success-inner-color'?: string;
    '--state-label-success-background-color'?: string;
    '--state-label-success-hover-background-color'?: string;

    '--state-label-warning-inner-color'?: string;
    '--state-label-warning-background-color'?: string;
    '--state-label-warning-hover-background-color'?: string;

    '--state-label-error-inner-color'?: string;
    '--state-label-error-background-color'?: string;
    '--state-label-error-hover-background-color'?: string;
}

export const STATUS_LABEL_THEME_TOKEN = new InjectionToken<StatusLabelTheme>('StatusLabel Theme Token');
