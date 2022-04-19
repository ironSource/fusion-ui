import {ElementRef} from '@angular/core';
import {IconData} from '@ironsource/fusion-ui/components/icon';

export enum TooltipPosition {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3,
    TopFixed = 4
}
export enum TooltipType {
    Html = 0,
    Component = 1
}

export interface ITooltipData {
    parentEl?: ElementRef;
    position?: TooltipPosition;
    content?: string;
    width?: number;
    type?: TooltipType;
    icon?: IconData;
    componentData?: any;
}

export interface IShiftPosition {
    top: number;
    left: number;
}
