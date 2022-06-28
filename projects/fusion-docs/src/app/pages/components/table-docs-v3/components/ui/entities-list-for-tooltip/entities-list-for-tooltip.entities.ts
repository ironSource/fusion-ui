import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

export interface EntitiesListForTooltipConfig {
    entities: {
        id?: number;
        name: string;
        icon?: IconData;
        imageUrl?: string;
    }[];
    labelPrefix?: string;
    entityName: string;
    entitiesName?: string;
}
