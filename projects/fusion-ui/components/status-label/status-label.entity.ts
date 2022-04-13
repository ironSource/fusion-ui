/*
 * Created on 2020.5.11 By Andy Kononenko (andyk@ironsrc.com)
 */

import {IconData} from '@ironsource/fusion-ui/components/icon';

export interface StatusLabelConfig {
    text?: string;
    icon?: string | IconData;
    status?: StatusLabelStatus;
    borderType?: StatusLabelBorderType;
    customColors?: {
        color?: string;
        backgroundColor?: string;
    };
}

export enum StatusLabelStatus {
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export enum StatusLabelBorderType {
    Square = 'square',
    Circle = 'circle'
}
