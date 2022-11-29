import {Story, Meta} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TableComponent} from '../table.component';
import {
    ROWS_CHECKBOX_DATA,
    ROWS_DEFAULT_DATA,
    ROWS_TOGGLE_DATA,
    ROWS_TOTALS_DATA,
    TABLE_CHECKBOX_COLUMNS_CONFIG,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_SORTING_COLUMNS_CONFIG,
    TABLE_TOGGLE_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

const actionsData = {
    selectionChanged: action('selectionChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'Components/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TableModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5529%3A98551'
        },
        docs: {
            description: {
                component: '**Tables** description'
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA
    }
} as Meta<TableComponent>;

const TableTemplate: Story<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    [loading]="loading"
></fusion-table>`
});

// region Default
export const Default = TableTemplate.bind({});
Default.parameters = {
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
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {};
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
};
// endregion
// region No Data
export const NoData = TableTemplate.bind({});
NoData.args = {rows: []};
NoData.parameters = {
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
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
    [loading]="loading"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {};
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
};
// endregion
// region Loading
export const Loading = TableTemplate.bind({});
Loading.args = {rows: [], loading: true};
Loading.parameters = {
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
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
    [loading]="loading"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {};
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
};
// endregion
// region Sorting
export const Sorting = TableTemplate.bind({});
Sorting.args = {
    columns: TABLE_SORTING_COLUMNS_CONFIG
};
Sorting.parameters = {
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
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {};
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
};
// endregion
// region With "Totals" row
export const WithTotalRow = TableTemplate.bind({});
WithTotalRow.args = {
    options: {hasTotalsRow: true},
    rows: ROWS_TOTALS_DATA
};
WithTotalRow.parameters = {
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
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = { hasTotalsRow: true };
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
};

// endregion
// region With Remove Row action
export const RemoveRowAction = TableTemplate.bind({});
RemoveRowAction.args = {
    options: {
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
            code: dedent`
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
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows$ | async"
    [options]="options"
    [loading]="loading"
  ></fusion-table>\`,
  standalone: true,
  imports: [CommonModule, TableModule],
})
export class TableWrapperComponent implements OnInit, OnDestroy {
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
// region With Checkbox
const TableCheckboxTemplate: Story<TableComponent> = (args: TableComponent) => ({
    props: {
        ...args,
        selectionChanged: actionsData.selectionChanged
    },
    template: `<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    (selectionChanged)="selectionChanged($event)"
></fusion-table>`
});
export const WithCheckbox = TableCheckboxTemplate.bind({});
WithCheckbox.args = {
    columns: TABLE_CHECKBOX_COLUMNS_CONFIG,
    rows: ROWS_CHECKBOX_DATA
};
WithCheckbox.parameters = {
    docs: {
        description: {
            story: dedent`
            **Rows Selectable** table add possibility to select all or some rows.
            you need add to columns configuration column type "Checkbox":
            \`{key: 'selected', type: TableColumnTypeEnum.Checkbox, width: '32px'},\`
            and in **row** data add data for checkbox state:
            \`{selected: false, id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', website: 'hildegard.org'}\`
            `
        }
    }
};
// endregion
// region With Toggle
const TableToggleTemplate: Story<TableComponent> = (args: TableComponent) => ({
    props: {
        ...args,
        rowModelChange: actionsData.rowModelChange
    },
    template: `<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    (rowModelChange)="rowModelChange($event)"
></fusion-table>`
});
export const WithToggle = TableToggleTemplate.bind({});
WithToggle.args = {
    columns: TABLE_TOGGLE_COLUMNS_CONFIG,
    rows: ROWS_TOGGLE_DATA
};
WithToggle.parameters = {
    docs: {
        description: {
            story: dedent`
            **Rows with Toggle** table add possibility add toggle component to the rows.
            You need to add method for output event **(rowModelChange)**
            for example: \`(rowModelChange)="rowModelChange($event)"\`
            in arguments you get object:
            \`{rowIndex: 5, rowModel: Object, keyChanged: "live", newValue: false, prevValue: undefined, onRequestDone: Function}\`

            * **rowIndex**:  index for row in **rows** array that was send to the table as input parameter **[rows]**
            * **rowModel**:  row element from **rows** array related to the event **rowModelChange**
            * **keyChanged**: key name in element from **rows** array what was changed
            * **newValue**: new value for this key
            * **prevValue**: previous (current) value for this key

            Also it has call-back method **onRequestDone** that you need to call on the row data change ended
            \`onRequestDone(true)\` - in case data was changed successful
            `
        }
    }
};
// endregion
