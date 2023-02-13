import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TableModule} from '../../table.module';
import {TableColumn, TableOptions, TableRowExpandEmitter} from '@ironsource/fusion-ui/components/table';
import {delay, take, takeUntil, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {isNullOrUndefined, isNumber} from '@ironsource/fusion-ui/utils';
import {FormControl, Validators} from '@angular/forms';
import {ROWS_DEFAULT_DATA} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

@Component({
    selector: 'fusion-table-story-holder',
    template: ` <fusion-table
        [columns]="columns"
        [rows]="tableRows"
        [options]="options"
        [loading]="loading"
        [(expandedRows)]="expandedRows"
        (rowModelChange)="onRowModelChange($event)"
        (scrollDown)="onscrollDown()"
        (expandRow)="onExpandRow($event)"
    ></fusion-table>`,
    styles: [
        `
            ::ng-deep tbody tr td.fu-badge:not(.inner-row) div {
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
    /** @ignore */
    expandedRows: {[key: string]: boolean} = {}; // maf expanded rows - {1: true} mean that row with index 1 - expanded

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

    onExpandRow({rowIndex, row, isExpanded, successCallback, failedCallback, updateMap}: TableRowExpandEmitter): void {
        // updateMap - in case external expand call it must be false because map will be already updated.
        const tableRows = this.tableRows;
        // get child rows that can be already existed
        const childExisted: any[] = tableRows[rowIndex].children;
        (isExpanded ? (!isNullOrUndefined(childExisted) ? of(childExisted) : this.getExpandedData(rowIndex)) : of(null))
            .pipe(
                take(1),
                tap(
                    _ =>
                        // set what row expanded, or update to collapsed state if was expanded
                        (this.expandedRows = updateMap ? {...this.expandedRows, [rowIndex]: isExpanded} : this.expandedRows)
                )
            )
            .subscribe(data => {
                if (isNullOrUndefined(childExisted)) {
                    // if was no children, set arrived data as children
                    const children = !!data ? data : [];

                    // update row by index with children
                    tableRows.splice(parseInt(rowIndex as string, 10), 1, {...row, children});
                    // update table rows
                    this.tableRows = [...tableRows];
                }
                // all Ok - call success
                successCallback();
            }, failedCallback);
    }

    /**
     * Just get from main data mock - portion for child rows
     */
    private getExpandedData(rowIndex) {
        if (isNumber(rowIndex)) {
            return of(
                ROWS_DEFAULT_DATA.slice(5, 7).map(item => {
                    if (!this.options.hasRowSpan) {
                        return item;
                    } else {
                        return {
                            ...item,
                            id: '',
                            margin: new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]),
                            margin_target: new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]),
                            profitizer: new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)])
                        };
                    }
                })
            ).pipe(delay(1000));
        }
        return of([]).pipe(delay(1000));
    }
}
