import {Component, Input} from '@angular/core';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableLoading]',
    templateUrl: './table-loading.component.html',
    styleUrls: ['./table-loading.component.scss']
})
export class TableLoadingComponent {
    @Input() fusionTableLoading: number;
    @Input() fusionTableLoadingExpanding = false;

    get rowsToShow(): number[] {
        return [...Array(3).keys()];
    }

    get colsToShow(): number[] {
        return [...Array(this.fusionTableLoading ?? 1).keys()];
    }
}
