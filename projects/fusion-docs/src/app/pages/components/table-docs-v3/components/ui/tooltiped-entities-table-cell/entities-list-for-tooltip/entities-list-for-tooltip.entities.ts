import {AdvEntityBase} from '../../entities/adv-entity-base.interface';

export interface EntitiesListForTooltipConfig {
    entities: AdvEntityBase[];
    labelPrefix?: string;
    entityName: string;
    entitiesName?: string;
}
