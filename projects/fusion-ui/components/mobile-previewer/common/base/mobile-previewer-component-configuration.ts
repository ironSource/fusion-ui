import {MobileOrientation} from './mobile-orientation.enum';
import {Component, Type} from '@angular/core';

export interface MobilePreviewerComponentConfiguration {
    orientation?: MobileOrientation;
    staticComponentSize?: {width?: string; height?: string};
    element?: Node;
    component?: {
        type: Type<Component>;
        data?: {[key: string]: any};
    };
}

export const WIDTH_STATIC = '374';
export const HEIGHT_STATIC = '211';
export const BORDER_WIDTH = 2.6;
export const DEVICE_ORIENTATION = ['tablet-portrait', 'tablet-landscape', 'phone-portrait', 'phone-landscape'];
