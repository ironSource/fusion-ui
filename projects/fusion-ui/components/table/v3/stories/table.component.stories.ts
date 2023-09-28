import {StoryFn, Meta} from '@storybook/angular';
import {EventEmitter} from '@angular/core';
import {action} from '@storybook/addon-actions';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TableStoryHolderComponent} from './table.story-holder.component/table.story-holder.component.component';
import {TableComponent} from '../table.component';
import {
    ROWS_DEFAULT_DATA,
    ROWS_TOTALS_DATA,
    MOCK_ROW_ACTIONS,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_SORTING_COLUMNS_CONFIG,
    TABLE_STICKY_COLUMNS_CONFIG,
    TABLE_SUBHEADER_COLUMNS_CONFIG,
    ROWS_READONLY_ROW_DATA,
    TABLE_TOGGLE_EDIT_COLUMNS_CONFIG,
    TABLE_CHECKBOX_COLUMNS_CONFIG,
    ROWS_CHECKBOX_DATA
} from './table.mock-data';
import {ApiService} from '@ironsource/fusion-ui';

const onSearch = new EventEmitter();

const actionsData = {
    selectionChanged: action('selectionChanged'),
    searchChanged: action('searchChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'Components/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TableModule,
                TableStoryHolderComponent
            ],
            providers: [ApiService]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5529%3A98551'
        },
        docs: {
            description: {
                component: dedent`**Tables** are great for presenting information with a clear, repeating structure. Our users are busy and may not want to read long sections of text. Breaking structured data into tables can help them scan it and find what they need to make informed decisions.
                    While tables present a clear structure, they are not good for designing layouts. Use them only when data you are presenting calls for a tabular structure, for example prices for various travel dates or multiple options for baggage.
                    For table frame with label you must set in table **[options]** property \`tableLabel: {text: 'Table label'}\``
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA
    }
} as Meta<TableComponent>;

const TableTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    [loading]="loading"
></fusion-table>`
});

const TableWithHostTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<fusion-table-story-holder
    [options]="options"
    [columns]="columns"
    [rows]="rows"
></fusion-table-story-holder>`
});

export const Default = {
    render: TableTemplate,

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;
  }

  const COLUMNS_CONFIG = [
      { key: 'id', title: 'Id' },
      { key: 'name', title: 'Name' },
      { key: 'username', title: 'Username' },
      { key: 'email', title: 'Email' },
      { key: 'website', title: 'Website' },
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const NoData = {
    render: TableTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            noDataMessage: "We couldn't find any campaigns",
            noDataSubMessage: 'Try using again with a different filters'
        },
        rows: []
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Empty** table with no data.`
            },
            source: {
                language: 'typescript',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
      [loading]="loading"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = [];
    loading = false;
  }

  const COLUMNS_CONFIG = [
      { key: 'id', title: 'Id' },
      { key: 'name', title: 'Name' },
      { key: 'username', title: 'Username' },
      { key: 'email', title: 'Email' },
      { key: 'website', title: 'Website' },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Loading = {
    render: TableTemplate,
    args: {rows: [], loading: true},

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Loading** table - when data requested, but not arrived yet you can set table to *loading* state.
              `
            },
            source: {
                language: 'typescript',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
      [loading]="loading"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = [];
    loading = true;
  }

  const COLUMNS_CONFIG = [
      { key: 'id', title: 'Id' },
      { key: 'name', title: 'Name' },
      { key: 'username', title: 'Username' },
      { key: 'email', title: 'Email' },
      { key: 'website', title: 'Website' },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Sorting = {
    render: TableTemplate,

    args: {
        columns: TABLE_SORTING_COLUMNS_CONFIG
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Sortable** table - local sorting supported for columns where has \`sort: ''\` property in column configuration.
                  If it set \`sort: 'asc'\` it mean that data in table will be ascending sorted by default.
                  For descending use - "desc". If property **sort** not added to the column config, this column will not be sortable`
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;
  }

  const COLUMNS_CONFIG = [
      {key: 'id', title: 'Id', sort: 'asc'},
      {key: 'name', title: 'Name', sort: ''},
      {key: 'username', title: 'Username', sort: ''},
      {key: 'email', title: 'Email', sort: ''},
      {key: 'website', title: 'Website'} // not sortable
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `
            }
        }
    }
};

export const SortingBackend = {
    render: TableWithHostTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            sortingType: 'external',
            isLoadingOverlayMode: false
        },
        columns: TABLE_SORTING_COLUMNS_CONFIG
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Sortable** table - sorting supported for columns where has \`sort: ''\` property in column configuration.
                  If it set \`sort: 'asc'\` it mean that data in table will be ascending sorted by default.
                  For descending use - "desc". If property **sort** not added to the column config, this column will not be sortable

                  For external (backend) sorting need in options set \`sortingType: 'external', isLoadingOverlayMode: false\`
                  isLoadingOverlayMode: false - (no table overlay loading in v3)

                  Event \`(sortChanged)="onSortChanged($event)"\` will emitted. $event - column key for sorting.

                  See stackblitz example:
                  `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { Component, OnDestroy } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { BehaviorSubject, of, Subject } from 'rxjs';
  import { delay, finalize, map, takeUntil } from 'rxjs/operators';
  import { isNumber } from '@ironsource/fusion-ui/utils';
  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
      [loading]="tableLoading$ | async"
      (sortChanged)="onSortChanged($event)"
    ></fusion-table>\`,
    standalone: true,
    imports: [CommonModule, TableModule],
  })
  export class FusionStoryWrapperComponent implements OnDestroy {
    private onDestroy$ = new Subject<void>();

    options: TableOptions = {
      tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
      sortingType: 'external',
      isLoadingOverlayMode: false,
    };

    tableLoading$ = new BehaviorSubject(false);

    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;

    ngOnDestroy(): void {
      this.onDestroy$.next();
      this.onDestroy$.complete();
    }

    onSortChanged(sortByKey) {
      let sortDirection: 'asc' | 'desc';
      this.columns = this.columns.map((column) => {
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

      of(this.rows)
        .pipe(
          takeUntil(this.onDestroy$),
          map((rows) => {
            return this.doRowsSort(rows, sortByKey, sortDirection);
          }),
          delay(1000),
          finalize(() => {
            this.tableLoading$.next(false);
          })
        )
        .subscribe((rows) => {
          this.rows = [...rows];
        });
    }

    private doRowsSort(
      rows: any[],
      sortKey: string,
      sortDirection: 'asc' | 'desc'
    ): any[] {
      return rows.sort((a, b) => {
        if (isNumber(a[sortKey])) {
          return sortDirection === 'asc'
            ? a[sortKey] - b[sortKey]
            : b[sortKey] - a[sortKey];
        }
        return sortDirection === 'asc'
          ? a[sortKey].localeCompare(b[sortKey])
          : b[sortKey].localeCompare(a[sortKey]);
      });
    }
  }

  const COLUMNS_CONFIG = [
    { key: 'id', title: 'Id', sort: 'asc' },
    { key: 'name', title: 'Name', sort: '' },
    { key: 'username', title: 'Username', sort: '' },
    { key: 'email', title: 'Email', sort: '' },
    { key: 'website', title: 'Website' }, // not sortable
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `
            }
        }
    }
};

// endregion

// region Sticky Header
const TableStickyHeaderTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<div style="height: 523px">
    <fusion-table
        [options]="options"
        [columns]="columns"
        [rows]="rows"
    ></fusion-table>
</div>`
});

export const StickyHeader = {
    render: TableStickyHeaderTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            stickyHeader: true,
            rowActionsMenu: {
                actions: MOCK_ROW_ACTIONS
            }
        },
        rows: [
            ...ROWS_DEFAULT_DATA,
            ...Array.from({length: 30}, (_, i) => {
                const id = i + 11;
                return {
                    id: id,
                    name: id + ' name',
                    username: id + ' UserName',
                    email: id + ' E-mail',
                    website: id + ' Website'
                };
            })
        ]
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Sticky Header** table.
              In option add property - \`stickyHeader: true\`.
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<div style="height: 505px"><fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table></div>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
      stickyHeader: true
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = [
          ...ROWS_DEFAULT_DATA,
          ...Array.from({length: 30}, (_, i) => {
              const id = i + 11;
              return {
                  id: id,
                  name: id + ' name',
                  username: id + ' UserName',
                  email: id + ' E-mail',
                  website: id + ' Website'
              };
          })
      ];
  }

  const COLUMNS_CONFIG = [
      { key: 'id', title: 'Id' },
      { key: 'name', title: 'Name' },
      { key: 'username', title: 'Username' },
      { key: 'email', title: 'Email' },
      { key: 'website', title: 'Website' },
  ];

  const ROWS_DEFAULT_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `
            }
        }
    }
};

// endregion

// region Stiky Column
const TableStickyColumnTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<div style="width: 600px; margin: 0 auto;">
    <fusion-table
        [options]="options"
        [columns]="columns"
        [rows]="rows"
        [loading]="loading"
    ></fusion-table>
</div>`
});

export const StickyColumn = {
    render: TableStickyColumnTemplate,

    args: {
        columns: TABLE_STICKY_COLUMNS_CONFIG
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<div style="width: 600px;"><fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table></div>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;
  }

  const COLUMNS_CONFIG = [
      {key: 'id', title: 'Id', width: '50px', sticky: true},
      {key: 'name', title: 'Name', width: '180px', sticky: true, stickyLeftMargin: '62px'},
      {key: 'username', title: 'Username', width: '230px'},
      {key: 'email', title: 'Email'},
      {key: 'website', title: 'Website'}
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

// region Sticky Column and Header
const TableStickyColumnHeaderTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<div style="width: 600px; height: 523px; margin: 0 auto;">
    <fusion-table
        [options]="options"
        [columns]="columns"
        [rows]="rows"
        [loading]="loading"
    ></fusion-table>
</div>`
});

export const StickyColumnAndHeader = {
    render: TableStickyColumnHeaderTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            stickyHeader: true
        },
        columns: TABLE_STICKY_COLUMNS_CONFIG,
        rows: [
            ...ROWS_DEFAULT_DATA,
            ...Array.from({length: 30}, (_, i) => {
                const id = i + 11;
                return {
                    id: id,
                    name: id + ' name',
                    username: id + ' UserName',
                    email: id + ' E-mail',
                    website: id + ' Website'
                };
            })
        ]
    }
};

export const WithSearch = {
    render: TableWithHostTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            ...{
                noDataSubMessage: 'Search again with a different keyword',
                searchOptions: {
                    placeholder: 'Search',
                    onSearch: onSearch
                }
            }
        }
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Search** table - table with search input field in a header
              Need add to the **[options]** property \`searchOptions: {placeholder: 'Search',onSearch: new EventEmitter()}\`
              Then in parent component do subscribtion to the event. See example in code snippet.
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import {Component, OnDestroy, OnInit} from '@angular/core';
  import {EventEmitter} from '@angular/core';
  import {takeUntil} from 'rxjs/operators';
  import {Subject} from 'rxjs';
  import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

  import {TableModule, TableColumn, TableOptions} from '@ironsource/fusion-ui/components/table';

  @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options"></fusion-table>\`,
      standalone: true,
      imports: [TableModule]
  })
  export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
      options: TableOptions = {
          tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
          searchOptions: {
              placeholder: 'Search',
              onSearch: new EventEmitter()
          },
          noDataSubMessage: 'Search again with a different keyword',
      };

      columns: TableColumn[] = COLUMNS_CONFIG;

      allRows: {[key: string]: any}[] = ROWS_DATA;

      rows = [];

      private onDestroy$ = new Subject<void>();

      ngOnInit() {
          this.rows = [...this.allRows];

          if (!isNullOrUndefined(this.options?.searchOptions?.onSearch)) {
              this.options.searchOptions.onSearch.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                  this.rows = [
                      ...this.allRows.filter(item => {
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

  const COLUMNS_CONFIG = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'Email' },
    { key: 'website', title: 'Website' },
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `
            }
        }
    }
};

export const WithTotalsRow = {
    render: TableTemplate,

    args: {
        options: {tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}, hasTotalsRow: true},
        rows: ROWS_TOTALS_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Totals row** table - table where first tow is "totals"
              you need in table **options** input set \`hasTotalsRow: true\`. It mean that in the **rows** array first element (on index '0')
              it a totals row data.
              `
            },
            source: {
                language: 'typescript',
                code: dedent`
  import { Component } from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
      hasTotalsRow: true
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;
  }

  const COLUMNS_CONFIG = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'Email' },
    { key: 'website', title: 'Website' },
  ];

  const ROWS_DATA = [
    {
      name: '10 names',
      username: '10 UserNames',
      email: '10 E-mails',
      website: '10 Websites',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithReadOnlyRow = {
    render: TableWithHostTemplate,

    args: {
        options: {tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}},
        columns: TABLE_TOGGLE_EDIT_COLUMNS_CONFIG,
        rows: ROWS_READONLY_ROW_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Read Only row** table - table where has "read only" rows.

              For this rows need to add one more property - \`row{...rowMetaData: {readonly: true}}\`
              `
            },
            source: {
                language: 'typescript',
                code: dedent`
  import { Component } from '@angular/core';
  import {
    TableModule,
    TableColumn,
    TableOptions,
    TableColumnTypeEnum,
  } from '@ironsource/fusion-ui/components/table';
  import { InlineInputType } from '@ironsource/fusion-ui/components/input-inline/common/base';
  import { FormControl, Validators } from '@angular/forms';


  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
      (rowModelChange)="onRowModelChange($event)"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
      hasTotalsRow: true
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;

    onRowModelChange($event) {
    console.log('onRowModelChange: ', $event)
      setTimeout(() => {
        if ($event.keyChanged === 'live') {
          $event.rowModel[$event.keyChanged] = $event.newValue;
        }
        $event.onRequestDone(true);
      }, 2000);
    }
  }

  const COLUMNS_CONFIG: TableColumn[] = [
      {key: 'id', title: 'Id'},
      {key: 'live', type: TableColumnTypeEnum.ToggleButton, title: '', width: '45px'},
      {key: 'amount', type: TableColumnTypeEnum.InputEdit, inputType: InlineInputType.Currency,
          customErrorMapping: {
              required: {errorMessageKey: 'required'},
              min: {
                  errorMessageKey: 'min',
                  textMapping: [{key: 'minValue', value: '5'}]
              },
              max: {
                  errorMessageKey: 'max',
                  textMapping: [{key: 'maxValue', value: '500'}]
              }
          },
          title: 'Amount', width: '90px', align: 'right', headerAlign: "right"},
      {key: 'name', title: 'Name'},
      {key: 'username', title: 'Username'},
      {key: 'email', title: 'Email'},
      {key: 'website', title: 'Website'}
  ];

  const ROWS_DATA = ${JSON.stringify(ROWS_DEFAULT_DATA)}.map((row, idx) => {
      const amountFormControl = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5), Validators.max(500)]);
      return {
          ...row,
          name: (idx === 4) ? '>>READ ONLY ROW<<' : row.name,
          live: idx > 3,
          amount: amountFormControl,
          rowMetaData:{
              readonly: idx === 4
          }
      };
  });
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

/*
// region With Remove Row action
// Deprecated
export const RemoveRowAction = TableTemplate.bind({});
RemoveRowAction.args = {
    options: {
        ...TABLE_DEFAULT_OPTIONS,
        remove: {
            active: true
        }
    }
};
RemoveRowAction.parameters = {
    docs: {
        description: {
            story: dedent`
            **Row remove action** table add possibility to remove row from table
            Need to add **remove:TableRowRemoveAction** property to the table input **[options]**
            like: \`remove:{active: true}\` it a minimum needed.
            `
        },
        source: {
            language: 'typescript',
            format: true,
            type: 'code',
            code: dedent `
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from '@ironsource/fusion-ui/utils';
import {
  TableModule,
  TableColumn,
  TableOptions,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows$ | async"
    [options]="options"
    [loading]="loading"
  ></fusion-table>\`,
  standalone: true,
  imports: [CommonModule, TableModule],
})
export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
  options: TableOptions = TABLE_OPTIONS;
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows$ = new BehaviorSubject(ROWS_DATA);
  loading = false;

  private onDestroy$ = new Subject<void>();

  ngOnInit() {
    if (!isNullOrUndefined(this.options?.remove?.onRemove)) {
      this.options.remove.onRemove
        .pipe(takeUntil(this.onDestroy$))
        .subscribe((value) => {
          this.rows$.next(
            this.rows$.getValue().filter((item, idx) => idx != value.rowIndex)
          );
          console.log('Removed row: ', value);
          console.log('rows:', this.rows$.getValue());
        });
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

const TABLE_OPTIONS = {
  tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
  remove: {
    active: true,
    onRemove: new EventEmitter<{ rowIndex: number; rowToRemove: any }>(),
  },
};

const COLUMNS_CONFIG = [
  { key: 'id', title: 'Id' },
  { key: 'name', title: 'Name' },
  { key: 'username', title: 'Username' },
  { key: 'email', title: 'Email' },
  { key: 'website', title: 'Website' },
];

const ROWS_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
];
            `
        }
    }
};
// endregion
*/

// region Go Top Button
const TableGoTopButtonTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<div style="height: 505px;">
    <fusion-table
        [options]="options"
        [columns]="columns"
        [rows]="rows"
    ></fusion-table>
</div>`
});

export const GoTopButton = {
    render: TableGoTopButtonTemplate,

    args: {
        options: {...TABLE_DEFAULT_OPTIONS, stickyHeader: true, hasReturnToTopButton: true},
        rows: [
            ...ROWS_DEFAULT_DATA,
            ...Array.from({length: 30}, (_, i) => {
                const id = i + 11;
                return {
                    id: id,
                    name: id + ' name',
                    username: id + ' UserName',
                    email: id + ' E-mail',
                    website: id + ' Website'
                };
            })
        ]
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Go Top button** in table. On scroll down will shown "Go Top" button.
              Table wrapper must have limited height.
              In option add property - \`hasReturnToTopButton: true\`.
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<div style="height: 505px"><fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table></div>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
      stickyHeader: true,
      hasReturnToTopButton: true
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = [
          ...ROWS_DEFAULT_DATA,
          ...Array.from({length: 30}, (_, i) => {
              const id = i + 11;
              return {
                  id: id,
                  name: id + ' name',
                  username: id + ' UserName',
                  email: id + ' E-mail',
                  website: id + ' Website'
              };
          })
      ];
  }

  const COLUMNS_CONFIG = [
      { key: 'id', title: 'Id' },
      { key: 'name', title: 'Name' },
      { key: 'username', title: 'Username' },
      { key: 'email', title: 'Email' },
      { key: 'website', title: 'Website' },
  ];

  const ROWS_DEFAULT_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `
            }
        }
    }
};

// endregion

// region Infinity scroll
const TableInfinityScrollTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<div style="height: 507px;"><fusion-table-story-holder
    [options]="options"
    [columns]="columns"
    [rows]="rows"
></fusion-table-story-holder></div>`
});

export const InfinityScroll = {
    render: TableInfinityScrollTemplate,

    args: {
        columns: TABLE_CHECKBOX_COLUMNS_CONFIG,
        rows: ROWS_CHECKBOX_DATA,
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            pagination: {
                enable: true
            }
        }
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Infinity scroll** table will emit event (scrollDown) and show rows loading in case in table options set \`pagination:{enable: true}\`
              and table rows will scrolled down. In scrollDown event processing you can add more rows to table rows.
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<div style="height: 507px;"><fusion-table [columns]="columns" [rows]="rows" [options]="options" (scrollDown)="onscrollDown()"></fusion-table></div>\`,
    standalone: true,
    imports: [CommonModule, TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
      pagination: {
        enable: true,
      },
    };

    columns: TableColumn[] = COLUMNS_CONFIG;

    rows: { [key: string]: any }[] = ROWS_DATA;

    onscrollDown() {
      const shownLength = this.rows.length;
      const newRows = Array.from({ length: 20 }, (_, i) => {
        const id = i + shownLength + 1;
        return {
          id: id,
          name: id + ' name',
          username: id + ' UserName',
          email: id + ' E-mail',
          website: id + ' Website',
        };
      });

      setTimeout(() => {
        this.rows = [...this.rows, ...newRows];
        this.options = {
          ...this.options,
          pagination: { enable: true, loading: false },
        };
      }, 1000);
    }
  }

  const COLUMNS_CONFIG = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'Email' },
    { key: 'website', title: 'Website' },
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `
            }
        }
    }
};

export const WithSubHeaders = {
    render: TableTemplate,

    args: {
        columns: TABLE_SUBHEADER_COLUMNS_CONFIG
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component} from '@angular/core';

  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows"
      [options]="options"
    ></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = {
      tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
    };
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows = ROWS_DATA;
  }

  const COLUMNS_CONFIG = [
      {key: 'id', title: 'Id'},
      {key: 'name', title: 'Name', groupName: 'Section 1'},
      {key: 'username', title: 'Username'},
      {key: 'email', title: 'Email', groupName: 'Section 2'},
      {key: 'website', title: 'Website'}
  ];

  const ROWS_DATA = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithoutFooter = {
    render: TableTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            noTableFooter: true
        }
    }
};
