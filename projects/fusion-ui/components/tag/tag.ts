import {IconData} from '@ironsource/fusion-ui/components';

export interface Tag {
    id: number | string;
    title: string;
    icon?: IconData;
    flag?: string;
    tooltip?: string;
}
