import {MenuItemAdditionalData} from './menu-item-additional-data';
import {DynamicComponentConfiguration} from '../dynamic-components/dynamic-component';

export interface MenuItem {
    icon?: string;
    name: string;
    route?: string;
    permissions?: string[];
    redirect?: string; // in case has value here - route will be suppressed
    abstract?: boolean;
    cssClass?: string;
    customCSS?: {[key: string]: string | number};
    target?: string; // for open in new tab named as target
    showNewWindowIcon?: boolean;
    additionalAction?: MenuItemAdditionalData;
    children?: MenuItem[];
    platformMenuPath?: string;
    content?: DynamicComponentConfiguration;
}
