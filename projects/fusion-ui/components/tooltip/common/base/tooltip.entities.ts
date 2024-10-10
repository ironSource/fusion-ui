import {Component, ElementRef, Type} from '@angular/core';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export enum TooltipPosition {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3,
    TopFixed = 4,
    TopLeft = 5,
    TopRight = 6,
    BottomLeft = 7,
    BottomRight = 8
}
export enum TooltipType {
    Html = 0,
    Component = 1
}

export interface ITooltipData {
    parentEl?: ElementRef;
    position?: TooltipPosition;
    content?: string | Type<Component>;
    width?: number;
    type?: TooltipType;
    icon?: IconData;
    componentData?: any;
}

export interface IShiftPosition {
    top: number;
    left: number;
}

export type TooltipComponentStyleConfiguration = {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    'text-align'?: string;
    backgroundColor?: string;
};

export type tooltipConfiguration = {
    width?: number;
    height?: number;
    backgroundColor?: string;
    preventTooltipToClose?: boolean;
    position?: TooltipPosition;
    positionOffset?: number;
    suppressPositionArrow?: boolean;
};

export interface TooltipCustom {
    content?: {
        component: Type<Component>;
        dataInputs: any;
    };
    configuration?: tooltipConfiguration;
}
