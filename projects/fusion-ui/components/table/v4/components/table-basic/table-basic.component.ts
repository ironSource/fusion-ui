import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent, Subject, from} from 'rxjs';
import {filter, mergeMap, takeUntil} from 'rxjs/operators';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {
    TableColumn,
    TableOptions,
    TableRowClassesEnum,
    TableRowExpandEmitter,
    ROW_HOVERED_CLASS_NAME,
    InnerEntityType
} from '@ironsource/fusion-ui/components/table/common/entities';
import {TableTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TableService} from '@ironsource/fusion-ui/components/table';
import {TableRowComponent} from '../table-row/table-row.component';
import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
import {LinkComponent} from '@ironsource/fusion-ui/components/link';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableBasic]',
    standalone: true,
    imports: [CommonModule, GenericPipe, TableRowComponent, TableLoadingComponent, LoadMoreModule, LinkComponent],
    templateUrl: './table-basic.component.html',
    styleUrls: ['./table-basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBasicComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() rows: {[key: string]: any}[];
    @Input() columns: TableColumn[];
    /** @internal */
    @Input() expandedRows: {[key: string]: boolean};

    @Input() set options(value: TableOptions) {
        this.tableOptions = value;
        this.childRowOptions = {...value, hasTotalsRow: false};
    }

    /** @internal */
    @Input() testId: string;

    @Output() rowSelected = new EventEmitter();
    @Output() expandRow = new EventEmitter<TableRowExpandEmitter>();

    get options() {
        return this.tableOptions;
    }

    get fullCellColspan(): number {
        if (!!this.tableService.expandLevels) {
            return this.columns.length + this.tableService.expandLevels;
        }
        return this.columns.length;
    }

    childRowOptions: TableOptions;
    loadingChildRows: {[key: number]: boolean} = {};
    failedChildRows: {[key: number]: boolean} = {};

    rowIsSelected = this.isRowSelected.bind(this);
    rowClass = this.getRowClass.bind(this);
    rowRowspanIndexes = this.getRowspanIndexes.bind(this);

    /** @internal */
    tableTestIdModifiers: typeof TableTestIdModifiers = TableTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);

    tableService: TableService = inject(TableService);

    private tableOptions: TableOptions;
    private onDestroy$ = new Subject();
    private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    private elementRef: ElementRef = inject(ElementRef);
    private renderer: Renderer2 = inject(Renderer2);

    ngOnInit(): void {
        this.tableService.selectionChanged.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            this.cdr.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit() {
        if (this.tableService.hasRowspanRows) {
            this.setHoverForRowspan();
        }
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

    isRowSelected(row: any): boolean {
        return this.tableService.isRowSelected(row);
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

    isInnerEntityType(innerType: InnerEntityType) {
        return this.options.rowsExpandableOptions.innerEntityType === innerType;
    }

    isExpanded(rowIndex: number | string): boolean {
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

    getRowspanIndexes(row): number[] {
        return [...Array(this.tableService.getMaxRowspanInColumn(row)).keys()].filter(Boolean);
    }

    private setHoverForRowspan() {
        const rowElements = this.elementRef.nativeElement.querySelectorAll('tr[data-row-idx]');
        const events = ['mouseenter', 'mouseleave'];
        from(events)
            .pipe(
                mergeMap(event => fromEvent(rowElements, event)),
                filter((event: MouseEvent) => {
                    return (
                        (event.type === 'mouseenter' && !(event.target as HTMLElement).classList.contains(ROW_HOVERED_CLASS_NAME)) ||
                        (event.type === 'mouseleave' && (event.target as HTMLElement).classList.contains(ROW_HOVERED_CLASS_NAME))
                    );
                }),
                takeUntil(this.onDestroy$)
            )
            .subscribe(this.toggleHoverClassForRowspan.bind(this));
    }

    private toggleHoverClassForRowspan(event: MouseEvent) {
        const eventType = event.type;
        const rowIndex = (event.target as HTMLElement).dataset.rowIdx;
        const sameRowIndexSelector = 'tr[data-row-idx="' + rowIndex + '"]';
        const rows = [...this.elementRef.nativeElement.querySelectorAll(sameRowIndexSelector)];
        switch (eventType) {
            case 'mouseenter':
                rows.forEach(row => {
                    this.renderer.addClass(row, ROW_HOVERED_CLASS_NAME);
                });
                break;
            case 'mouseleave':
                rows.forEach(row => {
                    this.renderer.removeClass(row, ROW_HOVERED_CLASS_NAME);
                });
                break;
        }
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
