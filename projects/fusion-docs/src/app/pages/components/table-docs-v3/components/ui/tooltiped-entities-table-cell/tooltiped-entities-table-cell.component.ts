import {Component, Input} from '@angular/core';
import {EntitiesListForTooltipConfig} from './entities-list-for-tooltip/entities-list-for-tooltip.entities';

@Component({
    selector: 'fusion-tooltiped-entities-table-cell',
    templateUrl: './tooltiped-entities-table-cell.component.html',
    styleUrls: ['./tooltiped-entities-table-cell.component.scss']
})
export class TooltipedEntitiesTableCellComponent {
    @Input() set config(value: EntitiesListForTooltipConfig) {
        this.configuration = value;
    }

    get config(): EntitiesListForTooltipConfig {
        return this.configuration;
    }

    private configuration: EntitiesListForTooltipConfig;

    get entityCount(): number {
        return this.config?.entities?.length ?? 0;
    }

    get entityName(): string {
        return this.entityCount == 1 ? this.config.entityName : this.config.entitiesName;
    }
}
