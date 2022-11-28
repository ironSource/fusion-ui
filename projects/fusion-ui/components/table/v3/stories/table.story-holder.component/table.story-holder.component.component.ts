import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TableModule} from '../../table.module';
import {TableColumn, TableOptions} from '@ironsource/fusion-ui/components/table';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
    selector: 'fusion-table-story-holder',
    templateUrl: './table.story-holder.component.component.html',
    styleUrls: ['./table.story-holder.component.component.scss'],
    standalone: true,
    imports: [TableModule]
})
export class TableStoryHolderComponent implements OnInit, OnDestroy {
    /**
     * Table columns configuration
     * columns: TableColumn[]
     */
    @Input() columns: TableColumn[] = [];
    /**
     * Table Options (configuration)
     * @param value: TableOptions
     */
    @Input() options: TableOptions = {};
    /**
     * Table rows data
     * rows: {[key: string]: any}[]
     */
    @Input() set rows(value: {[key: string]: any}[]) {
        if (Array.isArray(value)) {
            this._rows = value;
            this.tableRows = this._rows;
        }
    }

    /** @ignore */
    @Input() loading = false;
    /** @ignore */
    tableRows = [];

    private onDestroy$ = new Subject<void>();
    private _rows = [];

    ngOnInit() {
        this.options.searchOptions.onSearch.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.tableRows = [
                ...this._rows.filter(item => {
                    return item.name.includes(value);
                })
            ];
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
