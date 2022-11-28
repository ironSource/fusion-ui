import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TableModule} from '../../table.module';
import {TableColumn, TableOptions} from '@ironsource/fusion-ui/components/table';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-table-story-holder',
    template: `<fusion-table [columns]="columns" [rows]="tableRows" [options]="options" [loading]="loading"></fusion-table>`,
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
        if (!isNullOrUndefined(this.options?.searchOptions?.onSearch)) {
            this.options.searchOptions.onSearch.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                this.tableRows = [
                    ...this._rows.filter(item => {
                        return item.name.includes(value);
                    })
                ];
            });
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
