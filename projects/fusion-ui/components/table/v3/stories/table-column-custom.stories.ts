import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TableStoryHolderComponent} from './table.story-holder.component/table.story-holder.component.component';
import {TableComponent} from '../table.component';
import {
    ROWS_CHECKBOX_DATA,
    ROWS_COMPONENT_DATA,
    ROWS_DATE_DATA,
    ROWS_DEFAULT_DATA,
    ROWS_EDITABLE_DATA,
    ROWS_NUMBER_DATA,
    ROWS_TOGGLE_DATA,
    TABLE_CHECKBOX_COLUMNS_CONFIG,
    TABLE_COMPONENT_COLUMNS_CONFIG,
    TABLE_CURRENCY_COLUMNS_CONFIG,
    TABLE_DATE_COLUMNS_CONFIG,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_EDITABLE_COLUMNS_CONFIG,
    TABLE_NUMBER_COLUMNS_CONFIG,
    TABLE_PERCENT_COLUMNS_CONFIG,
    TABLE_TOGGLE_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player';

const actionsData = {
    selectionChanged: action('selectionChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'Components/Table/Column Types',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TableModule,
                TableStoryHolderComponent,
                VideoPlayerModule
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5529%3A98551'
        },
        docs: {
            description: {
                component: dedent`**Tables** columns types. Set column type you can with column configuration **TableColumn.type:TableColumnTypeEnum**.

                Types:
                - String,
                - Component,
                - Checkbox,
                - ToggleButton,
                - InputEdit,
                - Date,
                - Currency,
                - Number,
                - Percent

                `
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
};
// endregion

// region Number
export const ColumnNumber = TableTemplate.bind({});
ColumnNumber.args = {
    columns: TABLE_NUMBER_COLUMNS_CONFIG,
    rows: ROWS_NUMBER_DATA
};
ColumnNumber.parameters = {
    docs: {
        description: {
            story: dedent`
            **Number Column** column typer number has align - right in table body by default
            \`{key: 'amount', type: TableColumnTypeEnum.Number, title: 'Amount', headerAlign: 'right'},\``
        },
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';

import {
  TableModule,
  TableColumn,
  TableOptions,
  TableColumnTypeEnum
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
    { key: 'amount', type: TableColumnTypeEnum.Number, title: 'Amount', headerAlign: 'right' as "right" | "left" | "center"},
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
    amount: 23
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    amount: 45
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    amount: 14
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    amount: 98
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    amount: 5
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    amount: 65
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    amount: 34
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    amount: 76
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    amount: 12
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    amount: 29
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Currency
export const ColumnCurrency = TableTemplate.bind({});
ColumnCurrency.args = {
    columns: TABLE_CURRENCY_COLUMNS_CONFIG,
    rows: ROWS_NUMBER_DATA
};
ColumnCurrency.parameters = {
    docs: {
        description: {
            story: dedent`
            **Currency Column** column type currency used angular pipe **currency**
            \`{key: 'amount', type: TableColumnTypeEnum.Currency, title: 'Amount', headerAlign: 'right'},\`
            also you can use **pipeOptions** to set option for <a href='https://angular.io/api/common/CurrencyPipe' target='blank'>currency pipe</a>
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
  TableColumnTypeEnum
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
    { key: 'amount', type: TableColumnTypeEnum.Currency, title: 'Amount', headerAlign: 'right' as "right" | "left" | "center"},
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
    amount: 23
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    amount: 45
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    amount: 14
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    amount: 98
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    amount: 5
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    amount: 65
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    amount: 34
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    amount: 76
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    amount: 12
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    amount: 29
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Percent
export const ColumnPercent = TableTemplate.bind({});
ColumnPercent.args = {
    columns: TABLE_PERCENT_COLUMNS_CONFIG,
    rows: ROWS_NUMBER_DATA
};
ColumnPercent.parameters = {
    docs: {
        description: {
            story: dedent`
            **Percent Column** column type percent used pipe **number** and add sign "%" to the right
            \`{key: 'amount', type: TableColumnTypeEnum.Percent, title: 'Amount', headerAlign: 'right'},\`
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
  TableColumnTypeEnum
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
    { key: 'amount', type: TableColumnTypeEnum.Percent, title: 'Amount', headerAlign: 'right' as "right" | "left" | "center"},
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
    amount: 23
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    amount: 45
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    amount: 14
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    amount: 98
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    amount: 5
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    amount: 65
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    amount: 34
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    amount: 76
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    amount: 12
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    amount: 29
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Date
export const ColumnDate = TableTemplate.bind({});
ColumnDate.args = {
    columns: TABLE_DATE_COLUMNS_CONFIG,
    rows: ROWS_DATE_DATA
};
ColumnDate.parameters = {
    docs: {
        description: {
            story: dedent`
            **Date Column** column type date.
            \`{key: 'date', type: TableColumnTypeEnum.Date, title: 'Date'},\`
            You can set date format options in property **dateFormat** (default is - 'd MMM yyyy') and **ignoreTimeZone: true** for ignore time-zone
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
  TableColumnTypeEnum
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
    { key: 'date', type: TableColumnTypeEnum.Date, ignoreTimeZone: true, title: 'Date'},
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
    date: '02/13/2020'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    date: '02/13/2020'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    date: '02/13/2020'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    date: '02/13/2020'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    date: '02/13/2020'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    date: '02/13/2020'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    date: '02/13/2020'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    date: '02/13/2020'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    date: '02/13/2020'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    date: '02/13/2020'
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Column Checkbox
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
export const Checkbox = TableCheckboxTemplate.bind({});
Checkbox.args = {
    columns: TABLE_CHECKBOX_COLUMNS_CONFIG,
    rows: ROWS_CHECKBOX_DATA
};
Checkbox.parameters = {
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
    template: `<fusion-table-story-holder
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    (rowModelChange)="rowModelChange($event)"
></fusion-table-story-holder>`
});
export const Toggle = TableToggleTemplate.bind({});
Toggle.args = {
    columns: TABLE_TOGGLE_COLUMNS_CONFIG,
    rows: ROWS_TOGGLE_DATA
};
Toggle.parameters = {
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
        },
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {
  TableModule,
  TableColumn,
  TableOptions,
  TableColumnTypeEnum,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (rowModelChange)="onRowModelChange($event)"></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class FusionStoryWrapperComponent {
  options: TableOptions = {
    tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
    searchOptions: {
      placeholder: 'Search',
      onSearch: new EventEmitter(),
    },
    noDataSubMessage: 'Search again with a different keyword',
  };

  columns: TableColumn[] = COLUMNS_CONFIG;

  rows = ROWS_DATA.map((row) => {
    return { live: true, ...row };
  });

  onRowModelChange($event) {
    setTimeout(() => {
      if ($event.keyChanged === 'live') {
        $event.rowModel[$event.keyChanged] = $event.newValue;
      }
      $event.onRequestDone(true);
    }, 2000);
  }
}

const COLUMNS_CONFIG: TableColumn[] = [
  {
    key: 'live',
    type: TableColumnTypeEnum.ToggleButton,
    title: '',
    width: '45px',
  },
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

// region Editable column
const TableEditTemplate: Story<TableComponent> = (args: TableComponent) => ({
    props: {
        ...args,
        rowModelChange: actionsData.rowModelChange
    },
    template: `<fusion-table-story-holder
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    (rowModelChange)="rowModelChange($event)"
></fusion-table-story-holder>`
});
export const Editable = TableToggleTemplate.bind({});
Editable.args = {
    columns: TABLE_EDITABLE_COLUMNS_CONFIG,
    rows: ROWS_EDITABLE_DATA
};
Editable.parameters = {
    docs: {
        description: {
            story: dedent`
            **Editable column** possibility to edit data in cell. Data type for this cell - FormControl. It also give a possibility to set validation rules.
            For example - required value, or minimum / maximum value. Like \`cellValue = new FormControl(123, [Validators.required, Validators.min(5)])\`
            Column configuration:
            \`{key: 'amount', type: TableColumnTypeEnum.InputEdit, inputType: InlineInputType.Currency,title: 'Amount', width: '120px'},\`
            For validation error shown you need to add **customErrorMapping** fro this column configuration:
            \`customErrorMapping: {required: {errorMessageKey: 'required'},min: {errorMessageKey: 'min',textMapping: [{key: 'minValue', value: '5'}]}},\`
            On save, if validations will ok, it emit event **(rowModelChange)**. And you need add event processing method.
            Example: \`(rowModelChange)="rowModelChange($event)"\`
            in arguments you get object:
            \`{rowIndex: 6, rowModel: Object, keyChanged: "amount", newValue: "44", prevValue: 43}\`

            * **rowIndex**:  index for row in **rows** array that was send to the table as input parameter **[rows]**
            * **rowModel**:  row element from **rows** array related to the event **rowModelChange**
            * **keyChanged**: key name in element from **rows** array what was changed
            * **newValue**: new value for this key
            * **prevValue**: previous (current) value for this key

            Also it has call-back method **onRequestDone** that you need to call on the row data change ended
            \`onRequestDone(true)\` - in case data was changed successful
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
  template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (rowModelChange)="onRowModelChange($event)"></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class FusionStoryWrapperComponent {
  options: TableOptions = {
    tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
  };

  columns: TableColumn[] = COLUMNS_CONFIG;

  rows = ROWS_DATA.map((row) => {
    return { live: true, ...row };
  });

  onRowModelChange($event) {
    setTimeout(() => {
      if ($event.keyChanged === 'live') {
        $event.rowModel[$event.keyChanged] = $event.newValue;
      }
      $event.onRequestDone(true);
    }, 2000);
  }
}

const COLUMNS_CONFIG: TableColumn[] = [
  { key: 'id', title: 'Id' },
  { key: 'name', title: 'Name' },
  {
    key: 'amount',
    type: TableColumnTypeEnum.InputEdit,
    inputType: InlineInputType.Currency,
    customErrorMapping: {
      required: { errorMessageKey: 'required' },
      min: {
        errorMessageKey: 'min',
        textMapping: [{ key: 'minValue', value: '5' }],
      },
    },
    title: 'Amount',
    width: '120px',
  },
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
    amount: new FormControl(34, [Validators.required, Validators.min(5)]),
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    amount: new FormControl(45, [Validators.required, Validators.min(5)]),
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    amount: new FormControl(23, [Validators.required, Validators.min(5)]),
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    amount: new FormControl(17, [Validators.required, Validators.min(5)]),
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    amount: new FormControl(55, [Validators.required, Validators.min(5)]),
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    amount: new FormControl(14, [Validators.required, Validators.min(5)]),
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    amount: new FormControl(76, [Validators.required, Validators.min(5)]),
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    amount: new FormControl(78, [Validators.required, Validators.min(5)]),
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    amount: new FormControl(23, [Validators.required, Validators.min(5)]),
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    amount: new FormControl(98, [Validators.required, Validators.min(5)]),
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Editable column
export const EditableCustom = TableToggleTemplate.bind({});
EditableCustom.args = {
    columns: TABLE_EDITABLE_COLUMNS_CONFIG,
    rows: ROWS_EDITABLE_DATA
};
/*EditableCustom.parameters = {
    docs: {
        description: {
            story: dedent`
            **Editable column** possibility to edit data in cell. Data type for this cell - FormControl. It also give a possibility to set validation rules.
            For example - required value, or minimum / maximum value. Like \`cellValue = new FormControl(123, [Validators.required, Validators.min(5)])\`
            Column configuration:
            \`{key: 'amount', type: TableColumnTypeEnum.InputEdit, inputType: InlineInputType.Currency,title: 'Amount', width: '120px'},\`
            For validation error shown you need to add **customErrorMapping** fro this column configuration:
            \`customErrorMapping: {required: {errorMessageKey: 'required'},min: {errorMessageKey: 'min',textMapping: [{key: 'minValue', value: '5'}]}},\`
            On save, if validations will ok, it emit event **(rowModelChange)**. And you need add event processing method.
            Example: \`(rowModelChange)="rowModelChange($event)"\`
            in arguments you get object:
            \`{rowIndex: 6, rowModel: Object, keyChanged: "amount", newValue: "44", prevValue: 43}\`

            * **rowIndex**:  index for row in **rows** array that was send to the table as input parameter **[rows]**
            * **rowModel**:  row element from **rows** array related to the event **rowModelChange**
            * **keyChanged**: key name in element from **rows** array what was changed
            * **newValue**: new value for this key
            * **prevValue**: previous (current) value for this key

            Also it has call-back method **onRequestDone** that you need to call on the row data change ended
            \`onRequestDone(true)\` - in case data was changed successful
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
  template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (rowModelChange)="onRowModelChange($event)"></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class FusionStoryWrapperComponent {
  options: TableOptions = {
    tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
  };

  columns: TableColumn[] = COLUMNS_CONFIG;

  rows = ROWS_DATA.map((row) => {
    return { live: true, ...row };
  });

  onRowModelChange($event) {
    setTimeout(() => {
      if ($event.keyChanged === 'live') {
        $event.rowModel[$event.keyChanged] = $event.newValue;
      }
      $event.onRequestDone(true);
    }, 2000);
  }
}

const COLUMNS_CONFIG: TableColumn[] = [
  { key: 'id', title: 'Id' },
  { key: 'name', title: 'Name' },
  {
    key: 'amount',
    type: TableColumnTypeEnum.InputEdit,
    inputType: InlineInputType.Currency,
    customErrorMapping: {
      required: { errorMessageKey: 'required' },
      min: {
        errorMessageKey: 'min',
        textMapping: [{ key: 'minValue', value: '5' }],
      },
    },
    title: 'Amount',
    width: '120px',
  },
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
    amount: new FormControl(34, [Validators.required, Validators.min(5)]),
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    amount: new FormControl(45, [Validators.required, Validators.min(5)]),
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    amount: new FormControl(23, [Validators.required, Validators.min(5)]),
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    amount: new FormControl(17, [Validators.required, Validators.min(5)]),
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    amount: new FormControl(55, [Validators.required, Validators.min(5)]),
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    amount: new FormControl(14, [Validators.required, Validators.min(5)]),
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    amount: new FormControl(76, [Validators.required, Validators.min(5)]),
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    amount: new FormControl(78, [Validators.required, Validators.min(5)]),
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    amount: new FormControl(23, [Validators.required, Validators.min(5)]),
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    amount: new FormControl(98, [Validators.required, Validators.min(5)]),
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};*/
// endregion

// region Component
export const ColumnComponent = TableTemplate.bind({});
ColumnComponent.args = {
    columns: TABLE_COMPONENT_COLUMNS_CONFIG,
    rows: ROWS_COMPONENT_DATA
};
ColumnComponent.parameters = {
    docs: {
        description: {
            story: dedent`
            **Component Column** column type component for use any component in the table cell.
            for example for using **VideoPlayerComponent** we need add to the column configuration **type** and **component**
            \`{key: 'title', title: 'Title', type: TableColumnTypeEnum.Component, component: VideoPlayerComponent, width: '100px'},\`
            And in the row for **title** value - VideoPlayerComponent inputs as Object:
            \`...title: {thumbnail: 'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4'},...\`
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
import { VideoPlayerComponent } from '@ironsource/fusion-ui/components/video-player';

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
    tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
  };
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows = ROWS_DATA;
}

const COLUMNS_CONFIG = [
  { key: 'id', title: 'Id' },
  { key: 'name', title: 'Name' },
  {
    key: 'title',
    title: 'Title',
    type: TableColumnTypeEnum.Component,
    component: VideoPlayerComponent
  },
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
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
    title: {
      thumbnail:
        'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
      src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
      width: '200px'
    },
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion
