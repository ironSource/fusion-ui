import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface IconSelectItem {
    id: number | string;
    label: string;
    icon?: IconData;
    disabled?: boolean;
}
