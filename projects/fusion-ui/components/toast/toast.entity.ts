/*
 * Created on 2020.11.2 By Andy Kononenko (andyk@ironsrc.com)
 */
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';

export type ToastType = 'success' | 'alert' | 'error' | 'warning';
export type ToastLocation = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface ToastEntity {
    text?: string;
    type?: ToastType;
    icon?: string | {iconName: string; iconVersion: string}; // icon name that will used inserted of type icon. Type must be not defined
    image?: string; // image URL that will used inserted of type icon. Type must be not defined
    custom?: DynamicComponentConfiguration; // toast dynamic content
    duration?: number; // shown duration in seconds. default null.
    location?: ToastLocation; // used without ToastService (default 'top-right')
}
