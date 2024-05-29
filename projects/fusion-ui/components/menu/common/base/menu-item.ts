import {MenuItemAdditionalData} from './menu-item-additional-data';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

export interface MenuItem {
    id?: string;
    icon?: IconData;
    name: string;
    route?: string;
    subRoutes?: string[]; // array of routes also can be used for menu item set to active
    permissions?: string[];
    redirect?: string; // in case has value here - route will be suppressed
    abstract?: boolean;
    cssClass?: string;
    withTopDelimiter?: boolean; // user in pop-menu. if item first in items group - add top delimiter
    customCSS?: {[key: string]: string | number};
    target?: string; // for open in new tab named as target
    showNewWindowIcon?: boolean;
    additionalAction?: MenuItemAdditionalData;
    children?: MenuItem[];
    platformMenuPath?: string;
    content?: DynamicComponentConfiguration;
    isGroupName?: boolean;
    order?: number;
    executeBeforeNavigation?: () => void;
    default?: boolean; // if primary menu has mode 'clickToDefaultSecondaryItem' use this flag to set default item to navigate
}
