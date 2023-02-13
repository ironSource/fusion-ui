import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TableModule} from '../../table.module';
import {TableColumn, TableOptions} from '@ironsource/fusion-ui/components/table';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-table-story-holder',
    template: ` <fusion-table
        [columns]="columns"
        [rows]="tableRows"
        [options]="options"
        [loading]="loading"
        (rowModelChange)="onRowModelChange($event)"
        (scrollDown)="onscrollDown()"
    ></fusion-table>`,
    styles: [
        `
            ::ng-deep tbody tr td.fu-badge div {
                width: unset !important;
                height: 20px;
                display: flex;
                align-items: center;
                padding: 2px 4px;
                border-radius: 4px;
                background-color: #edeff0;
            }
        `
    ],
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

    @Output() rowModelChange = new EventEmitter();

    /** @ignore */
    @Input() loading = false;
    /** @ignore */
    tableRows = [];

    private onDestroy$ = new Subject<void>();
    private _rows = [];

    private onRowDataChanged$ = new EventEmitter<any>();

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
        this.onRowDataChanged$.pipe(takeUntil(this.onDestroy$)).subscribe(this.onRowModelChange.bind(this));
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onRowModelChange($event) {
        console.log('onRowModelChange >>', $event);
        this.rowModelChange.emit($event);
        setTimeout(() => {
            if ($event.keyChanged === 'live') {
                $event.rowModel[$event.keyChanged] = $event.newValue;
            }
            $event.onRequestDone(true);
        }, 2000);
    }

    onscrollDown() {
        const shownLength = this._rows.length;
        const newRows = Array.from({length: 20}, (_, i) => {
            const id = i + shownLength + 1;
            return {
                id: id,
                name: id + ' name',
                username: id + ' UserName',
                email: id + ' E-mail',
                website: id + ' Website'
            };
        });

        setTimeout(() => {
            this._rows = [...this._rows, ...newRows];
            this.tableRows = this._rows;
            this.options = {...this.options, pagination: {enable: true, loading: false}};
        }, 1000);
    }
}
