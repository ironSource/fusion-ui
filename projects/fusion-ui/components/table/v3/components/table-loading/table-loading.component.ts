import {Component, Input} from '@angular/core';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableLoading]',
    templateUrl: './table-loading.component.html',
    styleUrls: ['./table-loading.component.scss']
})
export class TableLoadingComponent {
    @Input() fusionTableLoading: number;
}
