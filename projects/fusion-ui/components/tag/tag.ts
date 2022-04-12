import {IconData} from '@ironsource/fusion-ui/components/icon';

export interface Tag {
    id: number | string;
    title: string;
    icon?: string | IconData;
    flag?: string;
    tooltip?: string;
}
