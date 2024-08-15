import {Component, Input} from '@angular/core';
import {SkeletonComponent} from '@ironsource/fusion-ui/components/skeleton';

@Component({
    selector: '[fusionTableLoading]',
    imports: [SkeletonComponent],
    templateUrl: './table-loading.component.html',
    styleUrls: ['./table-loading.component.scss'],
    standalone: true
})
export class TableLoadingComponent {
    @Input() fusionTableLoading: number;
    @Input() fusionTableLoadingExpanding = false;
    @Input() fusionTableLoadingRows = 3;

    get rowsToShow(): number[] {
        return [...Array(this.fusionTableLoadingRows).keys()];
    }

    get colsToShow(): number[] {
        return [...Array(this.fusionTableLoading ?? 1).keys()];
    }
}
