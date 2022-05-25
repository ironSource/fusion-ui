import {Component, EventEmitter, OnDestroy, OnInit, Type} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {delay, take, takeUntil, tap} from 'rxjs/operators';
import {isNullOrUndefined, isNumber, StyleVersion} from '@ironsource/fusion-ui';
import {
    TableColumn,
    TableColumnTypeEnum,
    TableOptions,
    TableRowExpandEmitter,
    TableRowHeight
} from '@ironsource/fusion-ui/components/table/common/entities';
import {StatusLabelStatus} from '@ironsource/fusion-ui/components/status-label/common/entities';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {TableCellDynamicComponentExampleComponent} from './table-cell-dynamic-component-example';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {TableCustomNoDataComponent} from '../../../components/table-custom-no-data/table-custom-no-data.component';
import {VersionService} from '../../../services/version/version.service';

const TABLE_OPTIONS: TableOptions = {
    sortingType: 'local',
    remove: {active: true, onRemove: new EventEmitter()},
    noDataSubMessage: 'Lorem ipsum dolor'
};
const TABLE_COLUMNS_CONFIG: Array<TableColumn> = [
    {key: 'checkbox', type: TableColumnTypeEnum.Checkbox, width: '32px'},
    /*
    {key: 'id', title: 'ID', sort: 'asc'}, // 'asc' | 'desc' | ''},
     */
    {key: 'live', type: TableColumnTypeEnum.ToggleButton, title: '', width: '45px'},

    {key: 'name', title: 'Name', sort: 'asc'},
    {key: 'username', title: 'Username', sort: ''},
    {
        key: 'bid',
        type: TableColumnTypeEnum.InputEdit,
        inputType: InlineInputType.Currency,
        currencyPipeParameters: {
            digitsInfo: '1.0-3'
        },
        customErrorMapping: {
            required: {errorMessageKey: 'required'},
            min: {
                errorMessageKey: 'min',
                textMapping: [{key: 'minValue', value: '10'}]
            }
        },
        title: 'Bid',
        width: '85px',
        tooltip: 'Lorem ipsum dolor sit amet'
    },
    {
        key: 'bidSecond',
        type: TableColumnTypeEnum.InputEdit,
        inputType: InlineInputType.Currency,
        currencyPipeParameters: {
            digitsInfo: '1.0-3'
        },
        customErrorMapping: {
            required: {errorMessageKey: 'required'},
            min: {
                errorMessageKey: 'min',
                textMapping: [{key: 'minValue', value: '10'}]
            }
        },
        title: 'Second Bid',
        width: '85px',
        tooltip: 'Lorem ipsum dolor sit amet'
    },
    {key: 'email', title: 'Email', sort: ''},
    {key: 'website', title: 'Website'}
];
const MOCK_DATA = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org',
        bid: 23
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net',
        bid: 54
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info',
        bid: 33
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz',
        bid: 26
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info',
        bid: 27
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org',
        bid: 46
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io',
        bid: 35
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com',
        bid: 27
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com',
        bid: 18
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net',
        bid: 39
    }
];

@Component({
    selector: 'fusion-table-docs-v2',
    templateUrl: './table-docs-v2.component.html',
    styleUrls: ['./table-docs-v2.component.scss']
})
export class TableDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Default row size',
                    scrollTo: '#typeBasicDefault',
                    scrollOffset: 80
                },
                {
                    label: 'Big row size',
                    scrollTo: '#typeBigRowSze',
                    scrollOffset: 15
                },
                {
                    label: 'Small row size',
                    scrollTo: '#typeSmallRowSze',
                    scrollOffset: 15
                },
                {
                    label: 'Expandable Rows one level',
                    scrollTo: '#typExpandableRows',
                    scrollOffset: 15
                },
                {
                    label: 'Expandable Rows two level',
                    scrollTo: '#typExpandableRows1',
                    scrollOffset: 15
                },
                {
                    label: 'Dynamic Component in table',
                    scrollTo: '#typeCustomComponentCell',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Empty',
                    scrollTo: '#typeEmptyTable',
                    scrollOffset: 80
                },
                {
                    label: 'Empty Custom Content',
                    scrollTo: '#typeCustomEmptyTable',
                    scrollOffset: 80
                },
                {
                    label: 'Loading',
                    scrollTo: '#typeLoadingTable',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                },
                {
                    label: 'CSS Custom Properties',
                    scrollTo: '#customProperties',
                    scrollOffset: 30
                }
            ]
        }
    ];

    customPropertiesTable = {
        columns: [
            {
                key: 'name',
                title: 'Name',
                type: TableColumnTypeEnum.String
            },
            {
                key: 'description',
                title: 'Description',
                type: TableColumnTypeEnum.String
            }
        ],
        rows: [
            {
                name: '--table-header-bottom-border-color',
                description: 'Table header bottom border color'
            },
            {
                name: '--table-body-border',
                description: 'Table body border'
            },
            {
                name: '--table-header-font-family',
                description: 'Table header bottom font family'
            },
            {
                name: '--table-header-font-size',
                description: 'Table header bottom font size'
            },
            {
                name: '--table-header-font-weight',
                description: 'Table header bottom font weight'
            },
            {
                name: '--table-odd-row-background-color',
                description: 'Table odd rows background color'
            },
            {
                name: '--table-even-row-background-color',
                description: 'Table even rows background color'
            },
            {
                name: '--table-empty-image',
                description: 'Table Empty Image'
            }
        ]
    };

    loading$ = new BehaviorSubject(false);
    mockData: Array<any> = MOCK_DATA.slice(0, 5);

    // for base table will NOT use select column
    columnsBasic: Array<TableColumn> = TABLE_COLUMNS_CONFIG;
    columnsSmall: Array<TableColumn> = TABLE_COLUMNS_CONFIG.filter(cel => cel.key !== 'bid');
    columnsWithoutCheckbox: Array<TableColumn> = TABLE_COLUMNS_CONFIG.filter(cel => cel.key !== 'checkbox');
    columnsExpandable: Array<TableColumn> = [...this.columnsWithoutCheckbox];

    columnsDynamic: Array<TableColumn> = [...this.columnsWithoutCheckbox];

    columnsWithoutCheckboxAndToggle: Array<TableColumn> = TABLE_COLUMNS_CONFIG.filter(cel => cel.key !== 'checkbox' && cel.key !== 'live');

    tableOptions: TableOptions = {...TABLE_OPTIONS};
    tableOptionsWithTotalsRow: TableOptions = {...TABLE_OPTIONS, ...{hasTotalsRow: true}};
    tableBigRowsOptions: TableOptions = {...TABLE_OPTIONS, ...{rowHeight: TableRowHeight.Big}};
    tableSmallRowsOptions: TableOptions = {...TABLE_OPTIONS, ...{rowHeight: TableRowHeight.Small}};

    tableOptionsNoDataCustom = {
        customNoData: {
            component: {
                type: TableCustomNoDataComponent as Type<Component>
            }
        }
    };

    private expandChildrenRowsKey = 'children';
    tableExpandableRowsOptions: TableOptions = {
        ...TABLE_OPTIONS,
        ...{
            rowsExpandableOptions: {
                key: this.expandChildrenRowsKey,
                columns: this.columnsExpandable
            }
        }
    };

    tableExpandableRowsOptions2Levels$: TableOptions = {
        ...TABLE_OPTIONS,
        ...{
            rowsExpandableOptions: {
                key: this.expandChildrenRowsKey,
                columns: this.columnsExpandable,
                expandLevels: 2,
                keyToIgnore: 'notExpandable'
            }
        }
    };

    rows: Array<any> = [];
    rowsBig: Array<any> = [];
    rowsSmall: Array<any> = [];
    rowsTotals: Array<any> = [];
    rowsDynamicTotals: Array<any> = [];

    rowsExpandable$ = new BehaviorSubject<any[]>([]);
    rowsExpandable2Levels$ = new BehaviorSubject<any[]>([]);

    public expandedRows: {[key: string]: boolean} = {};
    public expandedRows2Levels: {[key: string]: boolean} = {};

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Table'
        });
        this.columnsDynamic.splice(3, 0, {
            key: 'status',
            title: 'Status',
            type: TableColumnTypeEnum.Component,
            component: TableCellDynamicComponentExampleComponent,
            totalRowTypeAsString: false
        });

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/table']);
            }
        });

        this.getDataToTable();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    getExampleData() {
        return of(this.mockData).pipe(delay(1000));
    }

    getDataToTable(e?: any) {
        if (typeof e !== 'undefined') {
            e.preventDefault();
        }
        if (this.rows.length !== 0) {
            this.rows = [];
        }

        this.loading$.next(true);
        this.getExampleData()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(
                data => {
                    const dataRowsCount = data.length;
                    this.rows = data.map((item, _index) => {
                        const fcBid = new FormControl(item.bid, [Validators.required, Validators.min(10)]);
                        const fcSecondBid = new FormControl({value: _index + 10, disabled: _index == 2}, [
                            Validators.required,
                            Validators.min(10)
                        ]);
                        return {
                            checkbox: false,
                            id: item.id,
                            name: item.name,
                            username: item.username,
                            email: item.email,
                            website: item.website,
                            live: _index !== 2,
                            bid: fcBid,
                            bidSecond: fcSecondBid
                        };
                    });
                    this.rowsBig = [...this.rows];
                    this.rowsSmall = [...this.rows];
                    this.rowsTotals = [
                        Object.keys(this.rows[0]).reduce((acc, item, idx) => {
                            switch (item) {
                                case 'name':
                                    acc[item] = dataRowsCount + ' Names';
                                    break;
                                case 'email':
                                    acc[item] = dataRowsCount + ' Emails';
                                    break;
                                case 'username':
                                    acc[item] = dataRowsCount + ' Users';
                                    break;
                                case 'website':
                                    acc[item] = dataRowsCount + ' Websites';
                                    break;
                                default:
                                    acc[item] = '';
                            }
                            return acc;
                        }, {}),
                        ...this.rows
                    ];
                    this.rowsDynamicTotals = [
                        Object.keys(this.rows[0]).reduce(
                            (acc, item, idx) => {
                                switch (item) {
                                    case 'name':
                                        acc[item] = dataRowsCount + ' Names';
                                        break;
                                    case 'email':
                                        acc[item] = dataRowsCount + ' Emails';
                                        break;
                                    case 'username':
                                        acc[item] = dataRowsCount + ' Users';
                                        break;
                                    case 'website':
                                        acc[item] = dataRowsCount + ' Websites';
                                        break;
                                    default:
                                        acc[item] = '';
                                }
                                return acc;
                            },
                            {status: {status: StatusLabelStatus.Warning}}
                        ),
                        ...this.rows.map(item => {
                            const itemBid = item.bid.value;
                            item.status = {
                                status:
                                    itemBid < 25
                                        ? StatusLabelStatus.Error
                                        : itemBid > 50
                                        ? StatusLabelStatus.Success
                                        : StatusLabelStatus.Warning
                            };
                            return item;
                        })
                    ];

                    this.rowsExpandable$.next(this.rows.map(item => ({...item})));
                    this.rowsExpandable2Levels$.next(
                        this.rows.map((item, idx) => {
                            if (idx === 3) {
                                item.name = 'Not Expandable example';
                                item.notExpandable = true;
                            }
                            return {...item};
                        })
                    );
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.loading$.next(false);
                }
            );
    }

    onBasicSortChanged(sortKey: string) {
        console.log('Was local sort by', sortKey);
    }

    onBasicRowModelChange(rowDataChanged: any): void {
        setTimeout(() => {
            if (rowDataChanged.keyChanged === 'live') {
                rowDataChanged.rowModel.bidSecond[rowDataChanged.newValue ? 'enable' : 'disable']();
            }
            rowDataChanged.onRequestDone(true);
        }, 2000);
    }

    /**
     * Just get from main data mock - portion for child rows
     */
    private getExpandedData(rowIndex) {
        if (isNumber(rowIndex)) {
            return of(MOCK_DATA.slice(5, 7)).pipe(delay(1000));
        }
        return of(MOCK_DATA.slice(7, 10)).pipe(delay(1000));
    }

    /**
     * Find row to expand by rowIndex and update it with children
     * @param rowIndex
     * @param row
     * @param childrenRowsKey
     * @param children
     */
    private updateRowByIndex(tableRows, rowIndex, row, childrenRowsKey, children): any[] {
        let indexes: number[] = [];
        // rowIndex - possible as number (for first expand level) or as string 0_1_2 here each number here - index of item
        // in expanded rows chain
        if (typeof rowIndex === 'string' && rowIndex.indexOf('_') > 0) {
            // not first expand level, need find expandable item
            indexes = rowIndex.split('_').map(Number);
            let rows = [...tableRows];
            indexes.forEach((index, idx) => {
                if (idx < indexes.length - 1) {
                    // not last level, go deeper
                    rows = !!idx ? rows[childrenRowsKey][index] : rows[index];
                } else {
                    // last expand level - do update expandable row with a children rows
                    rows[childrenRowsKey].splice(index, 1, {...row, children});
                }
            });
        } else {
            tableRows.splice(rowIndex, 1, {...row, children});
        }
        return [...tableRows];
    }

    onExpandRow({rowIndex, row, isExpanded, successCallback, failedCallback, updateMap}: TableRowExpandEmitter): void {
        // updateMap - in case external expand call it must be false because map will be already updated.
        const tableRows = this.rowsExpandable$.getValue();
        // get child rows that can be already existed
        const childExisted: any[] = tableRows[rowIndex].children;

        (isExpanded ? (!isNullOrUndefined(childExisted) ? of(childExisted) : this.getExpandedData(rowIndex)) : of(null))
            .pipe(
                take(1),
                tap(
                    _ =>
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
                    const children = !!data
                        ? data.map((item, _index) => {
                              const fcBid = new FormControl(item.bid, [Validators.required, Validators.min(10)]);
                              return {
                                  id: item.id,
                                  name: item.name,
                                  username: item.username,
                                  email: item.email,
                                  website: item.website,
                                  bid: fcBid
                              };
                          })
                        : [];

                    tableRows.splice(parseInt(rowIndex as string, 10), 1, {...row, children});
                    this.rowsExpandable$.next([...tableRows]);
                }
                successCallback();
            }, failedCallback);
    }

    onExpandRow2Levels({rowIndex, row, isExpanded, successCallback, failedCallback}: TableRowExpandEmitter): void {
        (isExpanded ? this.getExpandedData(rowIndex) : of(null))
            .pipe(
                take(1),
                tap(_ => (this.expandedRows2Levels = {...this.expandedRows2Levels, [rowIndex]: isExpanded}))
            )
            .subscribe(data => {
                const children = !!data
                    ? data.map((item, _index) => {
                          const fcBid = new FormControl(item.bid, [Validators.required, Validators.min(10)]);
                          return {
                              id: item.id,
                              name: item.name,
                              username: item.username,
                              email: item.email,
                              website: item.website,
                              bid: fcBid,
                              notExpandable: item.notExpandable
                          };
                      })
                    : [];

                this.rowsExpandable2Levels$.next(
                    this.updateRowByIndex(this.rowsExpandable2Levels$.getValue(), rowIndex, row, this.expandChildrenRowsKey, children)
                );

                successCallback();
            }, failedCallback);
    }

    doExpandRow(rowIndex?) {
        const index = rowIndex ?? 'default';
        if (index === 'reset') {
            this.expandedRows = {};
        } else {
            this.expandedRows = {...this.expandedRows, ...{[index]: !this.expandedRows[index] ?? true}};
        }
    }

    onSelectedChanged(selectedRows) {
        console.log('onSelectedChanged:', selectedRows);
    }

    onRowClicked(data: {$event: MouseEvent; rowIndex: string; rowEl: Element; rowData: any}) {
        console.log('onRowClicked: ', data);
    }
}
