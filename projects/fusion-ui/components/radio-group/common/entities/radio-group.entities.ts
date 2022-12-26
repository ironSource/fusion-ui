import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface RadioGroupOptions {
    id: string | number;
    label: string;
    icon?: IconData;
    tooltip?: string;
    disabled?: boolean;
}
