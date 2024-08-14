import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TableComponent, TableService} from '../v3';

@Component({
    selector: 'fusion-table-v4',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [],
    providers: [TableService],
    templateUrl: './table-v4.component.html',
    styleUrl: './table-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableV4Component extends TableComponent {}
