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
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';
import {ROWS_DEFAULT_DATA, MOCK_ROW_ACTIONS, TABLE_DEFAULT_COLUMNS_CONFIG, TABLE_DEFAULT_OPTIONS} from './table.mock-data';

const actionsData = {
    selectionChanged: action('selectionChanged'),
    searchChanged: action('searchChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'V3/Components/Table/Floating actions',
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
                component: dedent`**Table Floating Actions** description...`
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA
    }
} as Meta<TableComponent>;

const TableTemplate: StoryFn<TableComponent> = args => ({
    props: {...args},
    template: `<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    [loading]="loading"
></fusion-table>`
});

export const Default = {
    render: TableTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            rowActionsMenu: {
                actions: MOCK_ROW_ACTIONS
            }
        }
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Floating actions** table row actions
              Need to add **rowActionsMenu:TableMultipleActions** property to the table input **[options]**

              like: \`rowActionsMenu:{actions: [{icon:'frame', label: 'List item 1'}, ...]}\` it a minimum needed.

              Output event: **rowActionClicked** with \`{action:MenuDropItem, rowIndex:  string | number, row: TableRow}\`
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
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
      (rowActionClicked)=onRowActionClicked($event)
    ></fusion-table>\`,
    standalone: true,
    imports: [CommonModule, TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = TABLE_OPTIONS;
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows$ = new BehaviorSubject(ROWS_DATA);

    onRowActionClicked($event){
      console.log('onRowActionClicked', $event)
    }
  }

  const TABLE_OPTIONS = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
    rowActionsMenu: {
      actions: [
        {icon: 'frame', label: 'List item 1'},
        {icon: 'frame', label: 'List item 2'},
        {icon: 'frame', label: 'List item 3'},
        {icon: 'frame', label: 'List item 4'}
      ]
    }
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
    }
};

export const DisabledAllForSomeRows = {
    render: TableTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            isFloatingActionDisabled: (row: any): boolean => {
                return row['email'].endsWith('.biz');
            },
            rowActionsMenu: {
                actions: MOCK_ROW_ACTIONS
            }
        },
        rows: ROWS_DEFAULT_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Floating actions disabled** If you need disabled floating actions for some rows:

              Need to add method **isFloatingActionDisabled(row: any, action?: MenuDropItem): boolean;** as property to the table input **[options]**
              \`
              isFloatingActionDisabled: (row: any): boolean => {
                  return row['email'].endsWith('.biz');
              }\`
              See live example on StackBlitz. Here in rows with e-main end with ".biz" all actions disabled.
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
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
      (rowActionClicked)=onRowActionClicked($event)
    ></fusion-table>\`,
    standalone: true,
    imports: [CommonModule, TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = TABLE_OPTIONS;
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows$ = new BehaviorSubject(ROWS_DATA);

    onRowActionClicked($event){
      console.log('onRowActionClicked', $event)
    }
  }

  const TABLE_OPTIONS = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
    rowActionsMenu: {
      actions: [
        {icon: 'frame', label: 'List item 1'},
        {icon: 'frame', label: 'List item 2'},
        {icon: 'frame', label: 'List item 3'},
        {icon: 'frame', label: 'List item 4'}
      ]
    },
    isFloatingActionDisabled: (row: any): boolean => {
      return row['email'].endsWith('.biz');
    }
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
    }
};

export const DisabledSomeActionsForSomeRows = {
    render: TableTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            isFloatingActionDisabled: (row: any, action: MenuDropItem): boolean => {
                return row['email'].endsWith('.biz') && (action.label === 'List item 2' || action.label === 'List item 3');
            },
            rowActionsMenu: {
                actions: MOCK_ROW_ACTIONS
            }
        },
        rows: ROWS_DEFAULT_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`
              **Floating actions disabled** If you need disabled some floating actions for some rows:

              Need to add method **isFloatingActionDisabled(row: any, action?: MenuDropItem): boolean;** as property to the table input **[options]**
              \`
              isFloatingActionDisabled: (row: any, action: MenuDropItem): boolean => {
                  return row['email'].endsWith('.biz') && (action.label === 'List item 2' || action.label === 'List item 3');
              },\`
              See live example on StackBlitz. Here in rows with e-main end with ".biz" actions "List item 2" and "List item 3" disabled.
              `
            },
            source: {
                language: 'typescript',
                format: true,
                type: 'code',
                code: dedent`
  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  import {
    TableModule,
    TableColumn,
    TableOptions,
  } from '@ironsource/fusion-ui/components/table';
  import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table
      [columns]="columns"
      [rows]="rows$ | async"
      [options]="options"
      (rowActionClicked)=onRowActionClicked($event)
    ></fusion-table>\`,
    standalone: true,
    imports: [CommonModule, TableModule],
  })
  export class FusionStoryWrapperComponent {
    options: TableOptions = TABLE_OPTIONS;
    columns: TableColumn[] = COLUMNS_CONFIG;
    rows$ = new BehaviorSubject(ROWS_DATA);

    onRowActionClicked($event){
      console.log('onRowActionClicked', $event)
    }
  }

  const TABLE_OPTIONS = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
    rowActionsMenu: {
      actions: [
        {icon: 'frame', label: 'List item 1'},
        {icon: 'frame', label: 'List item 2'},
        {icon: 'frame', label: 'List item 3'},
        {icon: 'frame', label: 'List item 4'}
      ]
    },
    isFloatingActionDisabled: (row: any, action: MenuDropItem): boolean => {
      return row['email'].endsWith('.biz') && (action.label === 'List item 2' || action.label === 'List item 3');
    }
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
    }
};
