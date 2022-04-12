import {IconData} from '@ironsource/fusion-ui/components';

export interface IconSelectItem {
    id: number | string;
    label: string;
    icon?: IconData;
    disabled?: boolean;
}
