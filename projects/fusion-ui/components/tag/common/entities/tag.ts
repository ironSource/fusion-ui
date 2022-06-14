import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

export interface Tag {
    id: number | string;
    title: string;
    icon?: IconData;
    flag?: string;
    tooltip?: string;
}
