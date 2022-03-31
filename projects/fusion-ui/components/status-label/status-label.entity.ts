/*
 * Created on 2020.5.11 By Andy Kononenko (andyk@ironsrc.com)
 */

export interface StatusLabelConfig {
    text?: string;
    icon?: string | {iconName: string; iconVersion: string};
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
