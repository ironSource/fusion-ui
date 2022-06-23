import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {
    TableColumn,
    TableOptions,
    TableRowClassesEnum,
    TableRowExpandEmitter
} from '@ironsource/fusion-ui/components/table/common/entities';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableBasic]',
    templateUrl: './table-basic.component.html',
    styleUrls: ['./table-basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBasicComponent implements OnInit, OnDestroy {
    @Input() rows: {[key: string]: any}[];
    @Input() columns: TableColumn[];
    @Input() expandedRows: {[key: string]: boolean};

    @Input() set options(value: TableOptions) {
        this.tableOptions = value;
        this.childRowOptions = {...value, hasTotalsRow: false};
    }

    @Input() set tableClientWidth(value: number) {
        this._halfTableClientWidth = value ? value / 2 : 0;
    }

    @Output() rowSelected = new EventEmitter();
    @Output() expandRow = new EventEmitter<TableRowExpandEmitter>();

    // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
    get options() {
        return this.tableOptions;
    }

    get fullCellColspan(): number {
        if (!!this.tableService.expandLevels) {
            return this.columns.length + this.tableService.expandLevels;
        }
        return this.columns.length;
    }

    get getHalfTableClientWidth(): number {
        return this._halfTableClientWidth;
    }

    childRowOptions: TableOptions;
    loadingChildRows: {[key: number]: boolean} = {};
    failedChildRows: {[key: number]: boolean} = {};

    private _halfTableClientWidth = 0;
    private tableOptions;
    private onDestroy$ = new Subject();

    constructor(public tableService: TableService, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.tableService.selectionChanged.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            this.cdr.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    trackByRowInvoke() {
        return this.trackByRow.bind(this);
    }

    trackByRow(index, row) {
        const keyOption = this.options && this.options.rowTrackingOption ? this.options.rowTrackingOption : 'id';
        return row && row[keyOption] ? row[keyOption] : row;
    }

    isRowDisabled(row: any): boolean {
        return row._options && row._options.some(options => 'disabled');
    }

    getRowClass(row, rowIndex) {
        const rowClasses = this.options.rowsOptions || {};
        const classes = {};
        classes[TableRowClassesEnum.Selected] = this.tableService.isRowSelected(row);
        classes[TableRowClassesEnum.Disabled] = this.isRowDisabled(row);
        return [
            ...Object.keys(classes).filter((item: string) => !!classes[item]),
            !!rowClasses[rowIndex] && !!rowClasses[rowIndex].class ? rowClasses[rowIndex].class : null
        ].filter(Boolean);
    }

    onExpandRow({rowIndex, row, isExpanded}, updateMap = true): void {
        if (!!row) {
            this.loadingChildRows[rowIndex] = isExpanded;
            delete this.failedChildRows[rowIndex];
            const successCallback = this.onExpendRowSuccess(rowIndex).bind(this);
            const failedCallback = this.onExpendRowFailed(rowIndex).bind(this);
            this.expandRow.emit({rowIndex, row, isExpanded, successCallback, failedCallback, updateMap: updateMap});
        }
    }

    displayExpandableRows(rowIndex: number | string): boolean {
        return !!this.options?.rowsExpandableOptions?.key && this.isExpanded(rowIndex);
    }

    getInnerRows(index): any[] {
        const innerKey = this.options.rowsExpandableOptions.key;
        const indexes = index.split('_').map(Number);
        let retRow = this.rows;
        indexes.forEach((item, idx) => {
            retRow = !!idx ? retRow[innerKey][item] : retRow[item];
        });
        return retRow[innerKey] || [];
    }

    isExpanded(rowIndex: number | string): boolean {
        // check if has row index keys in expandedRows / loadingChildRows / failedChildRows;
        if (
            this.expandedRows?.hasOwnProperty(rowIndex) ||
            this.loadingChildRows.hasOwnProperty(rowIndex) ||
            this.failedChildRows.hasOwnProperty(rowIndex)
        ) {
            return this.expandedRows[rowIndex] || this.loadingChildRows[rowIndex] || this.failedChildRows[rowIndex];
        }
        return this.expandedRows['default'];
    }

    hasAfterSticky(isLast, hasMore, rowIndex): boolean {
        return isLast && (hasMore || this.loadingChildRows[rowIndex] || this.failedChildRows[rowIndex]);
    }

    private onExpendRowSuccess(rowIndex: number): () => void {
        return () => {
            delete this.loadingChildRows[rowIndex];
        };
    }

    private onExpendRowFailed(rowIndex: number): () => void {
        return () => {
            delete this.loadingChildRows[rowIndex];
            this.failedChildRows[rowIndex] = true;
            this.cdr.detectChanges();
        };
    }
}
