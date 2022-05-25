import {MobileOrientation} from './mobile-orientation.enum';
import {Component, Type} from '@angular/core';

export interface MobilePreviewerComponentConfiguration {
    orientation?: MobileOrientation;
    element?: Node;
    component?: {
        type: Type<Component>;
        data?: {[key: string]: any};
    };
}

export const DEVICE_ORIENTATION = ['tablet-portrait', 'tablet-landscape', 'phone-portrait', 'phone-landscape'];
