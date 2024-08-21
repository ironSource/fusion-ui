import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, Validators} from '@angular/forms';
import {delay, finalize, map, take, takeUntil, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {isNullOrUndefined, isNumber} from '@ironsource/fusion-ui/utils';
import {TableColumn, TableOptions, TableRowExpandEmitter} from '@ironsource/fusion-ui/components/table';
import {ROWS_DEFAULT_DATA} from '../table.mock-data';
import {TableV4Component} from '../../table-v4.component';

@Component({
    selector: 'fusion-table-story-holder',
    standalone: true,
    imports: [CommonModule, TableV4Component],
    template: ` <fusion-table
        [columns]="columns"
        [rows]="tableRows"
        [options]="options"
        [loading]="tableLoading$ | async"
        [hasCustomFooter]="hasCustomFooter"
        [(expandedRows)]="expandedRows"
        (rowModelChange)="onRowModelChange($event)"
        (scrollDown)="onscrollDown()"
        (expandRow)="onExpandRow($event)"
        (sortChanged)="onSortChanged($event)"
        (selectionChanged)="selectedChanged($event)"
    >
        <div class="fu-table-footer" style="color: #646464;">
            Displaying <span style="color: #202020; font-weight: 500;">{{ shownRows }}</span> out of
            <span style="color: #202020; font-weight: 500;">{{ totalRows }}</span> total rows
        </div>
    </fusion-table>`,
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
    ]
})
export class TableV4StoryHolderComponent implements OnInit, OnDestroy {
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

    @Input() hasCustomFooter: boolean = false;

    @Output() rowModelChange = new EventEmitter();
    @Output() selectionChanged = new EventEmitter();

    /** @ignore */
    @Input() set loading(value: boolean) {
        this.tableLoading$.next(value);
    }

    /** @ignore */
    tableRows = [];
    /** @ignore */
    tableLoading$ = new BehaviorSubject(false);
    /** @ignore */
    expandedRows: {[key: string]: boolean} = {}; // maf expanded rows - {1: true} mean that row with index 1 - expanded

    totalRows: number;
    shownRows: number;

    private onDestroy$ = new Subject<void>();
    private _rows = [];

    private onRowDataChanged$ = new EventEmitter<any>();

    ngOnInit() {
        this.totalRows = this._rows.length;
        this.shownRows = this.totalRows;

        if (!isNullOrUndefined(this.options?.searchOptions?.onSearch)) {
            this.options.searchOptions.onSearch.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                console.log('onSearch >>', value);
                this.tableRows = [
                    ...this._rows.filter(item => {
                        return Object.keys(item).some(key => {
                            return item[key].toString().toLowerCase().includes(value.toLowerCase());
                        });
                    })
                ];
                this.shownRows = this.tableRows.length;
                if (this.tableRows.length === 0) {
                    this.options = {
                        ...this.options,
                        noDataMessage: 'No data to display',
                        noDataSubMessage: 'Search again with different filters',
                        emptyTableType: 'noResult'
                    };
                }
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

    selectedChanged($event) {
        console.log('selectedChanged >>', $event);
        this.tableRows = this.tableRows.map(item => {
            item.checkbox = $event.some(row => row.id === item.id);
            return item;
        });
        this.selectionChanged.emit($event);
    }

    onscrollDown() {
        const shownLength = this._rows.length;
        const newRows = Array.from({length: 20}, (_, i) => {
            const id = i + shownLength + 1;
            return {
                id: id,
                firstName: id + ' first name',
                lastName: id + ' last Name',
                address: id + ' address',
                state: id + ' state'
            };
        });

        setTimeout(() => {
            this._rows = [...this._rows, ...newRows];
            this.tableRows = this._rows;
            this.options = {...this.options, pagination: {enable: true, loading: false}};
        }, 1000);
    }

    onSortChanged(sortByKey) {
        let sortDirection: 'asc' | 'desc';
        this.columns = this.columns.map(column => {
            if (column.key === sortByKey) {
                sortDirection = column.sort === 'asc' ? 'desc' : 'asc';
                column.sort = sortDirection;
            } else {
                column.sort = '';
            }
            return column;
        });

        console.log('onSortChanged: ', sortByKey, sortDirection);

        this.tableLoading$.next(true);
        of(this._rows)
            .pipe(
                takeUntil(this.onDestroy$),
                map(rows => {
                    return this.doRowsSort(rows, sortByKey, sortDirection);
                }),
                delay(1000),
                finalize(() => {
                    this.tableLoading$.next(false);
                })
            )
            .subscribe(rows => {
                this.tableRows = [...rows];
            });
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
                        (this.expandedRows = updateMap
                            ? {
                                  ...this.expandedRows,
                                  [rowIndex]: isExpanded
                              }
                            : this.expandedRows)
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

    private doRowsSort(rows: any[], sortKey: string, sortDirection: 'asc' | 'desc'): any[] {
        return rows.sort((a, b) => {
            if (isNumber(a[sortKey])) {
                return sortDirection === 'asc' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
            }
            return sortDirection === 'asc' ? a[sortKey].localeCompare(b[sortKey]) : b[sortKey].localeCompare(a[sortKey]);
        });
    }
}
