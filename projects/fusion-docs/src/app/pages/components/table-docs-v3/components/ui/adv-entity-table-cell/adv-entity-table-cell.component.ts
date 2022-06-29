import {Component, Input} from '@angular/core';
import {AdvEntityBase} from '../entities/adv-entity-base.interface';

@Component({
    selector: 'fusion-adv-entity-table-cell',
    templateUrl: './adv-entity-table-cell.component.html',
    styleUrls: ['./adv-entity-table-cell.component.scss']
})
export class AdvEntityTableCellComponent {
    @Input() set advEntity(value: AdvEntityBase) {
        this._advEntity = value;
    }

    get advEntity(): AdvEntityBase {
        return this._advEntity;
    }

    private _advEntity: AdvEntityBase;

    onEntityNameClicked($event) {
        console.log('>>', $event);
    }
}
