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
    ROWS_COMPONENT_EDIT_DATA,
    TABLE_COMPONENT_EDIT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

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

// region Editable column
export const Default = TableEditTemplate.bind({});
Default.parameters = {
    docs: {
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
