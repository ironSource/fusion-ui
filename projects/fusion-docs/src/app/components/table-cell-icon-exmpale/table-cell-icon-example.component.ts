import {Component} from '@angular/core';

@Component({
    selector: 'fusion-table-cell-icon-example',
    templateUrl: './table-cell-icon-example.component.html',
    styleUrls: ['./table-cell-icon-example.component.scss'],
    standalone: false
})
export class TableCellIconExampleComponent {
    public iconName: string | {iconName: string; iconVersion?: string};
}
