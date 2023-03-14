import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {PrimaryMenuItem} from '@ironsource/fusion-ui/components/navigation-menu/v4';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';

export interface LayoutConfiguration {
    navigationMenuItems?: PrimaryMenuItem[];
    layoutUser?: LayoutUser;
}

export interface LayoutHeaderContentTitle {
    text: string;
    content?: DynamicComponentConfiguration;
    type?: 'static' | 'page' | 'fixed';
}

export interface LayoutHeaderConfiguration {
    title?: LayoutHeaderContentTitle;
    content?: DynamicComponentConfiguration; // header dynamic content
}
