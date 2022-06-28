import {Component, ElementRef, Type} from '@angular/core';

export enum PopupLocation {
    TopRight = 'top-right',
    TopLeft = 'top-left',
    BottomRight = 'bottom-right',
    BottomLeft = 'bottom-left',
    ElementRelated = 'element-related'
}

export interface PopupSize {
    width?: number;
    height?: number;
}

export interface PopupPositionOffset {
    top?: number;
    left?: number;
}

export interface PopupComponentContent {
    type: Type<Component>;
    data?: any;
}

export interface PopupEntity {
    backgroundColor?: string;
    component?: PopupComponentContent;
    element?: Node;
    isOpen?: boolean;
    size?: PopupSize;
    location?: PopupLocation;
    hostElement?: ElementRef;
    hostElementPositionOffset?: PopupPositionOffset;
    suppressCloseElementSelector?: string;
    newInstance?: boolean;
}
