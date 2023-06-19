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
    ROWS_COMPONENT_EDIT_DATA,
    TABLE_COMPONENT_EDIT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';
import {ApiService} from '@ironsource/fusion-ui';

const actionsData = {
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'Components/Table/Column Custom Edit/Editable Custom Cell',
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
                component: dedent`**Tables** Custom editable column - here an example how to use custom column in fusion-table.
                Column "Amount" set as editable`
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_COMPONENT_EDIT_COLUMNS_CONFIG,
        rows: ROWS_COMPONENT_EDIT_DATA
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

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                // language=JavaScript
                code: dedent`
  import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
  import { takeUntil } from 'rxjs/operators';
  import { Subject } from 'rxjs';

  import {
    TableModule,
    TableColumn,
    TableOptions,
    TableColumnTypeEnum,
  } from '@ironsource/fusion-ui/components/table';
  import { CustomCellEditComponent } from '@ironsource/fusion-ui/components/table/v3/stories/custom-cell-edit';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (rowModelChange)="onRowModelChange($event)"></fusion-table>\`,
    standalone: true,
    imports: [TableModule],
  })
  export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();

    options: TableOptions = {
      tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
    };

    columns: TableColumn[] = COLUMNS_CONFIG;

    rows = [];

    private onRowDataChanged$ = new EventEmitter<any>();

    ngOnInit() {
      this.onRowDataChanged$
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(this.onRowModelChange.bind(this));

      this.getRows();
    }

    ngOnDestroy(): void {
      this.onDestroy$.next();
      this.onDestroy$.complete();
    }

    onRowModelChange($event) {
      setTimeout(() => {
        $event.onRequestDone(true);
      }, 2000);
    }

    private getRows() {
      this.rows = ROWS_DATA.map((row, idx) => {
        const data = idx == 3 ? null : Math.floor(Math.random() * 100);
        const amountData = {
          data: data,
          remaining: [3, 4, 6].some((item) => item == idx) ? 0 : data - 14,
          onChange: this.onRowDataChanged$,
        };
        return { ...row, amount: amountData };
      });
    }
  }

  const COLUMNS_CONFIG: TableColumn[] = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    {
      key: 'amount',
      title: 'Amount',
      type: TableColumnTypeEnum.Component,
      component: CustomCellEditComponent,
      width: '180px',
      headerAlign: 'right',
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
