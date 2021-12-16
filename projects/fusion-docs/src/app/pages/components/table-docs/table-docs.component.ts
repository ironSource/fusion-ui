import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Type} from '@angular/core';
import {
    InlineInputType,
    isBoolean,
    StyleVersion,
    TableColumn,
    TableColumnTypeEnum,
    TableOptions,
    TableRowExpandEmitter,
    VersionService
} from '@ironsrc/fusion-ui';
import {FormControl, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {delay, take, takeUntil, tap} from 'rxjs/operators';
import {TableCellIconExampleComponent} from '../../../components/table-cell-icon-exmpale';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';
import {TableCustomNoDataComponent} from '../../../components/table-custom-no-data/table-custom-no-data.component';

const tblOptions: TableOptions = {
    sortingType: 'local',
    remove: {active: true, onRemove: new EventEmitter()}
};
const tblColumns: Array<TableColumn> = [
    {key: 'checkbox', type: TableColumnTypeEnum.Checkbox, width: '35px'},
    {key: 'id', title: 'Id', sort: 'asc'}, // 'asc' | 'desc' | ''
    {key: 'live', type: TableColumnTypeEnum.ToggleButton, title: '', width: '45px'},
    {key: 'name', title: 'Name', sort: ''},
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
        tooltip: 'Lorem ipsum dolor sit amet',
        align: 'right'
    },
    {key: 'email', title: 'Email', sort: ''},
    {key: 'website', title: 'Website'}
];

/* eslint-disable quote-props */
@Component({
    selector: 'fusion-table-docs',
    templateUrl: './table-docs.component.html',
    styleUrls: ['./table-docs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDocsComponent implements OnInit, OnDestroy {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Multiple Selection',
                    scrollTo: '#typeMultipleSelect',
                    scrollOffset: 15
                },
                {
                    label: 'Expandable rows',
                    scrollTo: '#typExpandableRows',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Content',
            items: [
                {
                    label: 'Custom Component Column',
                    scrollTo: '#contentIcon',
                    scrollOffset: 30
                },
                {
                    label: 'No Data to Display',
                    scrollTo: '#contentNoData',
                    scrollOffset: 15
                },
                {
                    label: 'Custom No Data to Display',
                    scrollTo: '#contentCustomNoData',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Action on Hover',
                    scrollTo: '#variationsAction',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Disabled',
                    scrollTo: '#stateDisabled',
                    scrollOffset: 30
                },
                {
                    label: 'Loading',
                    scrollTo: '#stateLoading',
                    scrollOffset: 30
                },
                {
                    label: 'Loading With Data',
                    scrollTo: '#stateLoadingWithData',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Cell Options',
            items: [
                {
                    label: 'options',
                    scrollTo: '#cellOptions',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Grouped Table',
            items: [
                {
                    label: 'Example',
                    scrollTo: '#groupedTableExample',
                    scrollOffset: 30
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
                }
            ]
        }
    ];

    onDestroy$ = new Subject();
    loading$ = new BehaviorSubject(false);

    options: TableOptions = tblOptions;
    optionsTotals = {...tblOptions, ...{hasTotalsRow: true}};

    // for base table will NOT use select column
    columnsBasic: Array<TableColumn> = tblColumns.filter(cel => cel.key !== 'checkbox');
    optionsBasicTotals = {
        sortingType: 'local',
        hasTotalsRow: true
    };

    // With selection column
    columnsSelection: Array<TableColumn> = tblColumns;
    optionsSelection = {
        sortingType: 'local'
    };
    // No Data Table
    optionsNoData = {
        noDataSubMessage: 'Lorem ipsum dolor sit consectetur'
    };

    optionsNoDataCustom = {
        customNoData: {
            component: {
                type: TableCustomNoDataComponent as Type<Component>
            }
        }
    };

    // Disabled Row Columns
    optionsDisabled: Array<TableColumn> = [
        {key: 'id', title: 'ID', sort: 'asc'},
        {key: 'name', title: 'Name', sort: ''},
        {key: 'username', title: 'Username', sort: '', width: '250px'},
        {key: 'email', title: 'Email', sort: ''},
        {key: 'website', title: 'Website'}
    ];

    // Icon column
    optionsIconed: Array<TableColumn> = [
        {key: 'id', title: 'ID', sort: 'asc'},
        {
            key: 'icon',
            title: '',
            type: TableColumnTypeEnum.Component,
            component: TableCellIconExampleComponent,
            style: {width: '50px'}
        },
        {key: 'name', title: 'Name', sort: ''},
        {key: 'username', title: 'Username', sort: '', width: '250px'},
        {key: 'email', title: 'Email', sort: ''},
        {key: 'website', title: 'Website'}
    ];

    rows: Array<any> = [];
    rowsCopy1: Array<any> = [];
    rowsTotals: Array<any> = [];
    rowsSelected: Array<any> = [];

    mockData: Array<any> = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];

    predefinedData: Array<any> = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            website: 'hildegard.org',
            _options: ['disabled']
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, nunc ultricies volutpat, proin ornare purus lectus.',
            email: 'Shanna@melissa.tv',
            website: 'anastasia.net'
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            website: 'ramiro.info'
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            website: 'kale.biz'
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            website: 'demarco.info'
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info'
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            website: 'elvis.io'
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            website: 'jacynthe.com'
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            website: 'conrad.com'
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            website: 'ambrose.net'
        }
    ];

    predefinedIconedData: Array<any> = [
        {
            id: 1,
            icon: {iconName: {iconName: 'users', iconVersion: 'v1'}},
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            website: 'hildegard.org',
            _options: ['disabled']
        },
        {
            id: 2,
            name: 'Ervin Howell',
            icon: {iconName: {iconName: 'android', iconVersion: 'v1'}},
            username: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, nunc ultricies volutpat, proin ornare purus lectus.',
            email: 'Shanna@melissa.tv',
            website: 'anastasia.net'
        },
        {
            id: 3,
            icon: {iconName: {iconName: 'apps', iconVersion: 'v1'}},
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            website: 'ramiro.info'
        },
        {
            id: 4,
            icon: {iconName: {iconName: 'target', iconVersion: 'v1'}},
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            website: 'kale.biz'
        },
        {
            id: 5,
            icon: {iconName: {iconName: 'web', iconVersion: 'v1'}},
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            website: 'demarco.info'
        },
        {
            id: 6,
            icon: {iconName: {iconName: 'ghost', iconVersion: 'v1'}},
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            website: 'ola.org'
        },
        {
            id: 7,
            icon: {iconName: 'user-v-2'},
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            website: 'elvis.io'
        },
        {
            id: 8,
            icon: {iconName: {iconName: 'diamond', iconVersion: 'v1'}},
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            website: 'jacynthe.com'
        },
        {
            id: 9,
            icon: {iconName: {iconName: 'documentation', iconVersion: 'v1'}},
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            website: 'conrad.com'
        },
        {
            id: 10,
            icon: {iconName: {iconName: 'money', iconVersion: 'v1'}},
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            website: 'ambrose.net'
        }
    ];

    tblDataCellExamples = [
        {
            checkbox: false,
            string: 'Regular Text',
            component: {iconName: {iconName: 'users', iconVersion: 'v1'}},
            toggleButton: false,
            input: new FormControl('Input!'),
            date: new Date(),
            currency: '99.55555',
            number: '1222555',
            percent: 99
        }
    ];

    tblColumnsCellExamples: Array<TableColumn> = [
        {
            key: 'checkbox',
            title: '',
            type: TableColumnTypeEnum.Checkbox,
            width: '35px'
        },
        {key: 'string', title: 'String', type: TableColumnTypeEnum.String},
        {
            key: 'component',
            title: 'Component',
            type: TableColumnTypeEnum.Component,
            component: TableCellIconExampleComponent
        },
        {
            key: 'toggleButton',
            title: 'Toggle Button',
            type: TableColumnTypeEnum.ToggleButton
        },
        {key: 'input', title: 'Input', type: TableColumnTypeEnum.InputEdit},
        {key: 'date', title: 'Date', type: TableColumnTypeEnum.Date},
        {key: 'currency', title: 'Currency', type: TableColumnTypeEnum.Currency},
        {key: 'number', title: 'Number', type: TableColumnTypeEnum.Number},
        {key: 'percent', title: 'Percentage', type: TableColumnTypeEnum.Percent}
    ];

    // Grouped Table
    optionsGroupedTable = {
        isGroupedTable: true,
        remove: 'delete'
    };
    groupedTableRows = {
        value: 'DANIEL',
        children: [
            {
                value: 'Non-Incent-Video1',
                children: [
                    {
                        value: 'Tier 1',
                        children: [
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4]
                        ]
                    },
                    {
                        value: 'Tier 2',
                        children: [
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4]
                        ]
                    },
                    {
                        value: 'France',
                        children: [
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4]
                        ]
                    }
                ]
            },
            {
                value: 'Non-Incent-Video2',
                children: [
                    {
                        value: 'Tier 1',
                        children: [
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4]
                        ]
                    },
                    {
                        value: 'Tier 2',
                        children: [
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4]
                        ]
                    },
                    {
                        value: 'France',
                        children: [
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4],
                            [1, 2, 3, 4]
                        ]
                    }
                ]
            }
        ]
    };
    groupedTableColumns: any[] = [
        {key: 'danielName', title: 'Daniel Name'},
        {key: 'CampaignDistribution', title: 'Campaign Distribution'},
        {key: 'Geo', title: 'Geo'},
        {key: 'DeviceType', title: 'Device Type'},
        {key: 'DailyBudget', title: 'Daily Budget'},
        {key: 'TotalBudget', title: 'Total Budget'},
        {key: 'Stam', title: 'Stam'}
    ];
    isBadRequest = false; // used for alert inline edit
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    expandedRows: {[key: string]: boolean} = {};
    columnsBasicExpand: Array<TableColumn> = tblColumns
        .filter(cel => cel.key !== 'checkbox' && cel.key !== 'id' && cel.key !== 'live' && cel.key !== 'bid')
        .map(column => {
            if (column.key === 'name') {
                column = {...column, ...{style: {'border-left': 'none'}}};
            }
            delete column.sort;
            return column;
        });

    rowsExpandable$ = new BehaviorSubject<any[]>([]);
    private expandChildrenRowsKey = 'children';
    tableExpandableRowsOptions: TableOptions = {
        ...this.options,
        ...{
            hasTotalsRow: true,
            rowsExpandableOptions: {
                key: this.expandChildrenRowsKey,
                columns: this.columnsBasicExpand,
                keyToIgnore: 'notExpandable'
            }
        }
    };

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit() {
        this.getDataToTable();
        this.options.remove.onRemove.pipe(takeUntil(this.onDestroy$)).subscribe(rowRemoved => {
            console.log(`row removed`, rowRemoved);
        });
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/table']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onBasicSortChanged(sortKey: string) {
        console.log('Was local sort by', sortKey);
    }

    onBasicRowModelChange(rowDataChanged: any): void {
        console.log('onBasicRowModelChange: ', rowDataChanged);
        setTimeout(() => {
            this.isBadRequest = isBoolean(rowDataChanged.newValue) ? false : rowDataChanged.newValue === '123';
            rowDataChanged.onRequestDone(!this.isBadRequest); // for bad request testing
        }, 3000);
    }

    onSelectionChanged(selectedRows: Array<any>): void {
        this.rowsSelected = selectedRows;
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
                    this.rows = data.map((item, _index) => {
                        const fcBid = new FormControl(_index + 23, [Validators.required, Validators.min(10)]);
                        return {
                            checkbox: false,
                            id: item.id,
                            name: item.name,
                            username: item.username,
                            email: item.email,
                            website: item.website,
                            live: true,
                            bid: fcBid,
                            rowMetaData: {
                                readonly: _index === 3
                            }
                        };
                    });
                    this.rowsCopy1 = [...this.rows];
                    this.rowsTotals = [
                        Object.keys(this.rows[0]).reduce((acc, item, idx) => {
                            switch (item) {
                                case 'id':
                                    acc[item] = '345';
                                    break;
                                case 'name':
                                    acc[item] = '10 Names';
                                    break;
                                case 'email':
                                    acc[item] = '10 Emails';
                                    break;
                                case 'username':
                                    acc[item] = '10 Users';
                                    break;
                                case 'website':
                                    acc[item] = '10 Websites';
                                    break;
                                default:
                                    acc[item] = '';
                            }
                            return acc;
                        }, {}),
                        ...this.rows.map((item, idx) => {
                            if (idx === 3) {
                                item.name = 'Cell tooltip read only row';
                                item.rowMetaData = Object.assign(item.rowMetaData || {}, {
                                    cellToolTip: {name: 'This is cell tooltip', bid: 'Tooltip on bid cell'}
                                });
                            }
                            return {...item};
                        })
                    ];
                    this.rowsExpandable$.next(
                        this.rowsTotals.map((item, idx) => {
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

    private getExpandedData(rowIndex) {
        return of(this.predefinedData.slice(5, 7)).pipe(delay(1000));
    }

    onExpandRow({rowIndex, row, isExpanded, successCallback, failedCallback}: TableRowExpandEmitter): void {
        (isExpanded ? this.getExpandedData(rowIndex) : of(null))
            .pipe(
                take(1),
                tap(_ => (this.expandedRows = {...this.expandedRows, [rowIndex]: isExpanded}))
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
                              bid: fcBid
                          };
                      })
                    : [];

                const tableRows = this.rowsExpandable$.getValue();
                tableRows.splice(parseInt(rowIndex as string, 10), 1, {...row, children});
                this.rowsExpandable$.next([...tableRows]);

                successCallback();
            }, failedCallback);
    }
}
