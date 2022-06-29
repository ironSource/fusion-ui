import {Component, Input} from '@angular/core';
import {EntitiesListForTooltipConfig} from './entities-list-for-tooltip.entities';

@Component({
    selector: 'fusion-entities-list-for-tooltip',
    templateUrl: './entities-list-for-tooltip.component.html',
    styleUrls: ['./entities-list-for-tooltip.component.scss']
})
export class EntitiesListForTooltipComponent {
    @Input() configuration: EntitiesListForTooltipConfig;

    get entityName(): string {
        return this.configuration.entities.length == 1 ? this.configuration.entityName : this.configuration.entitiesName;
    }
}
