import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface MenuItemAdditionalData {
    name: string;
    route?: string;
    userEvent?: string;
    redirect?: string;
    icon?: IconData;
}
