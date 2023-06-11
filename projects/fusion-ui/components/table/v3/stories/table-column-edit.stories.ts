import {StoryFn, Meta} from '@storybook/angular';
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
    ROWS_DEFAULT_DATA,
    ROWS_EDITABLE_DATA,
    ROWS_EDITABLE_DISABLED_DATA,
    ROWS_EDITABLE_TEXT_DATA,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_EDITABLE_COLUMNS_CONFIG,
    TABLE_EDITABLE_CURRENCY_COLUMNS_CONFIG,
    TABLE_EDITABLE_MAX_WIDTH_COLUMNS_CONFIG,
    TABLE_EDITABLE_PERCENT_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player';

const actionsData = {
    selectionChanged: action('selectionChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'Components/Table/Column Editable',
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
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5529%3A98551'
        },
        docs: {
            description: {
                component: dedent`
            **Editable column** possibility to edit data in cell. Data type for this cell - FormControl. It also give a possibility to set validation rules.
            For example - required value, or minimum / maximum value. Like \`cellValue = new FormControl(123, [Validators.required, Validators.min(5)])\`
            Column configuration:
            \`{key: 'text', type: TableColumnTypeEnum.InputEdit, inputType: InlineInputType.Text, title: 'Text', width: '120px'},\`
            For validation error shown you need to add **customErrorMapping** fro this column configuration:
            \`customErrorMapping: {required: {errorMessageKey: 'required'}},\`
            On save, if validations will ok, it emit event **(rowModelChange)**. And you need add event processing method.
            Example: \`(rowModelChange)="rowModelChange($event)"\`
            in arguments you get object:
            \`{rowIndex: 6, rowModel: Object, keyChanged: "text", newValue: "edited 6 text", prevValue: "some 6 text"}\`

            * **rowIndex**:  index for row in **rows** array that was send to the table as input parameter **[rows]**
            * **rowModel**:  row element from **rows** array related to the event **rowModelChange**
            * **keyChanged**: key name in element from **rows** array what was changed
            * **newValue**: new value for this key
            * **prevValue**: previous (current) value for this key

            Also it has call-back method **onRequestDone** that you need to call on the row data change ended
            \`onRequestDone(true)\` - in case data was changed successful                `
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA
    }
} as Meta<TableComponent>;

const TableEditTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
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

export const Default = {
    render: TableEditTemplate,

    args: {
        columns: TABLE_EDITABLE_COLUMNS_CONFIG,
        rows: ROWS_EDITABLE_TEXT_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Editable column** possibility to edit data in cell. Data type for this cell - FormControl. It also give a possibility to set validation rules.
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
      key: 'text',
      type: TableColumnTypeEnum.InputEdit,
      inputType: InlineInputType.Text,
      customErrorMapping: {
        required: { errorMessageKey: 'required' }
      },
      title: 'Text',
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
      text: new FormControl('some 0 text', [Validators.required]),
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
      text: new FormControl('some 1 text', [Validators.required]),
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
      text: new FormControl('some 2 text', [Validators.required]),
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
      text: new FormControl('some 3 text', [Validators.required]),
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
      text: new FormControl('some 4 text', [Validators.required]),
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
      text: new FormControl('some 5 text', [Validators.required]),
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
      text: new FormControl('some 6 text', [Validators.required]),
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
      text: new FormControl('some 7 text', [Validators.required]),
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
      text: new FormControl('some 7 text', [Validators.required]),
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
      text: new FormControl('some 9 text', [Validators.required, Validators.min(5)]),
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const MaxWidth = {
    render: TableEditTemplate,

    args: {
        columns: TABLE_EDITABLE_MAX_WIDTH_COLUMNS_CONFIG,
        rows: ROWS_EDITABLE_TEXT_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Editable column** possibility to edit data in cell. Data type for this cell - FormControl. It also give a possibility to set validation rules.
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
      key: 'text',
      type: TableColumnTypeEnum.InputEdit,
      inputType: InlineInputType.Text,
      customErrorMapping: {
        required: { errorMessageKey: 'required' }
      },
      title: 'Text',
      width: '100px',
      style: {'max-width': '115px'}
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
      text: new FormControl('some 0 text', [Validators.required]),
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
      text: new FormControl('some 1 text', [Validators.required]),
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
      text: new FormControl('some 2 text', [Validators.required]),
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
      text: new FormControl('some 3 text', [Validators.required]),
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
      text: new FormControl('some 4 text', [Validators.required]),
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
      text: new FormControl('some 5 text', [Validators.required]),
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
      text: new FormControl('some 6 text', [Validators.required]),
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
      text: new FormControl('some 7 text', [Validators.required]),
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
      text: new FormControl('some 7 text', [Validators.required]),
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
      text: new FormControl('some 9 text', [Validators.required, Validators.min(5)]),
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Currency = {
    render: TableEditTemplate,

    args: {
        columns: TABLE_EDITABLE_CURRENCY_COLUMNS_CONFIG,
        rows: ROWS_EDITABLE_DATA
    },

    parameters: {
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
    }
};

export const Percent = {
    render: TableEditTemplate,

    args: {
        columns: TABLE_EDITABLE_PERCENT_COLUMNS_CONFIG,
        rows: ROWS_EDITABLE_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Editable column** possibility to edit data in cell. Data type for this cell - FormControl. It also give a possibility to set validation rules.
              For example - required value, or minimum / maximum value. Like \`cellValue = new FormControl(123, [Validators.required, Validators.min(5)])\`
              Column configuration:
              \`{key: 'amount', type: TableColumnTypeEnum.InputEdit, inputType: InlineInputType.Percent,title: 'Percent', width: '100px'},\`
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
      inputType: InlineInputType.Percent,
      customErrorMapping: {
        required: { errorMessageKey: 'required' },
        min: {
          errorMessageKey: 'min',
          textMapping: [{ key: 'minValue', value: '5' }],
        },
      },
      title: 'Percent',
      width: '100px',
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
    }
};

export const Disabled = {
    render: TableEditTemplate,

    args: {
        columns: TABLE_EDITABLE_CURRENCY_COLUMNS_CONFIG,
        rows: ROWS_EDITABLE_DISABLED_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Disable Editable column** as we are using FormControl for set editable cell value - we can just set form control disabled for disable input.

              Like: \` new FormControl({value: 150, disabled: true}, [Validators.required, Validators.min(5)]);\`

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
      amount: new FormControl({value:34, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
      amount: new FormControl({value:45, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
      amount: new FormControl({value:23, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
      amount: new FormControl({value:17, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
      amount: new FormControl({value:55, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
      amount: new FormControl({value:14, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
      amount: new FormControl({value:76, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
      amount: new FormControl({value:78, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
      amount: new FormControl({value:23, disabled: true}, [Validators.required, Validators.min(5)]),
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
      amount: new FormControl({value:98, disabled: true}, [Validators.required, Validators.min(5)]),
    },
  ];
              `,
                format: true,
                type: 'code'
            }
        }
    }
};
