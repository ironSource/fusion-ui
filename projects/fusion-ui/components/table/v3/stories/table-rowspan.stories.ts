import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TableComponent} from '../table.component';
import {
    TABLE_DEFAULT_OPTIONS,
    TABLE_ROWSPAN_COLUMNS_CONFIG,
    ROWS_ROWSPAN_DATA,
    ROWS_ROWSPAN_DIFF_DATA
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';
import {TableStoryHolderComponent} from '@ironsource/fusion-ui/components/table/v3/stories/table.story-holder.component/table.story-holder.component.component';

export default {
    title: 'Components/Table/Rowspan',
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
                component: dedent`**Tables** "rowspan".
                Table where some columns has more than one row, so other cells must have attribute rowspan and will not render in additional rows.

                Data for this cell must be set as array it a sign that here "multirow" cell`
            }
        }
    },
    args: {
        options: {...TABLE_DEFAULT_OPTIONS, hasRowSpan: true},
        columns: TABLE_ROWSPAN_COLUMNS_CONFIG,
        rows: ROWS_ROWSPAN_DATA
    }
} as Meta<TableComponent>;

const TableTemplate: StoryFn<TableComponent> = (args: TableComponent) => ({
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
    import { Component } from '@angular/core';
    import {FormControl, Validators} from '@angular/forms';
    import { InlineInputType } from '@ironsource/fusion-ui/components/input-inline/common/base';
    import {
      TableModule,
      TableColumn,
      TableOptions,
      TableColumnTypeEnum,
    } from '@ironsource/fusion-ui/components/table';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (rowModelChange)="onRowModelChange($event)"></fusion-table>\`,
      styles: [
        \`
              ::ng-deep tbody tr td.fu-badge div {
                  width: unset !important;
                  height: 20px;
                  line-height: 20px;
                  display: flex;
                  align-items: center;
                  padding: 2px 4px;
                  border-radius: 4px;
                  background-color: #edeff0;
              }
          \`,
      ],
      standalone: true,
      imports: [TableModule],
    })
    export class FusionStoryWrapperComponent {
      options: TableOptions = {
        tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
      };

      columns: TableColumn[] = COLUMNS_CONFIG;

      rows: any[] = ROWS_DATA;

      onRowModelChange($event) {
        console.log('onRowModelChange: ', $event);
        setTimeout(() => {
          $event.onRequestDone(true);
        }, 2000);
      }

    }

    const COLUMNS_CONFIG: TableColumn[] = [
        {key: 'id', title: 'Id'},
        {key: 'name', title: 'Name'},
        {key: 'us_row', title: '', groupName: 'Configuration', class: 'fu-badge'},
        {
            key: 'margin',
            title: 'Margin',
            align: 'right',
            headerAlign: 'right',
            type: TableColumnTypeEnum.InputEdit,
            inputType: InlineInputType.Currency,
            customErrorMapping: {
                required: {errorMessageKey: 'required'},
                min: {
                    errorMessageKey: 'min',
                    textMapping: [{key: 'minValue', value: '5'}]
                }
            },
            width: '120px'
        },
        {
            key: 'margin_target',
            title: 'Target margin',
            align: 'right',
            headerAlign: 'right',
            type: TableColumnTypeEnum.InputEdit,
            inputType: InlineInputType.Currency,
            customErrorMapping: {
                required: {errorMessageKey: 'required'},
                min: {
                    errorMessageKey: 'min',
                    textMapping: [{key: 'minValue', value: '5'}]
                }
            },
            width: '120px'
        },
        {
            key: 'profitizer',
            title: 'Profitizer',
            align: 'right',
            headerAlign: 'right',
            style: {'border-left': 'solid 1px #DDDFE1'},
            type: TableColumnTypeEnum.InputEdit,
            inputType: InlineInputType.Currency,
            customErrorMapping: {
                required: {errorMessageKey: 'required'},
                min: {
                    errorMessageKey: 'min',
                    textMapping: [{key: 'minValue', value: '5'}]
                }
            },
            width: '120px'
        },
        {key: 'username', title: 'Username', groupName: ' '},
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
    ].map((row, idx) => {
        const marginFormControl1 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginFormControl2 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginTargetFormControl1 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginTargetFormControl2 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const profitizerFormControl = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        return {
            ...row,
            us_row: ['US', 'ROW'],
            margin: [marginFormControl1, marginFormControl2],
            margin_target: [marginTargetFormControl1, marginTargetFormControl2],
            profitizer: profitizerFormControl
        };
    });
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DifferentRowspanInRow = {
    render: TableTemplate,

    args: {
        rows: ROWS_ROWSPAN_DIFF_DATA
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Tables** "rowspan".
                    Possible to show different "rowspan" in row. For example here in third main row, id# 3 you see 3 sub-rows
                    You just need set data in array. See example on stackblitz.
                    `
            },
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import {FormControl, Validators} from '@angular/forms';
    import { InlineInputType } from '@ironsource/fusion-ui/components/input-inline/common/base';
    import {
      TableModule,
      TableColumn,
      TableOptions,
      TableColumnTypeEnum,
    } from '@ironsource/fusion-ui/components/table';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (rowModelChange)="onRowModelChange($event)"></fusion-table>\`,
      styles: [
        \`
              ::ng-deep tbody tr td.fu-badge div {
                  width: unset !important;
                  height: 20px;
                  line-height: 20px;
                  display: flex;
                  align-items: center;
                  padding: 2px 4px;
                  border-radius: 4px;
                  background-color: #edeff0;
              }
          \`,
      ],
      standalone: true,
      imports: [TableModule],
    })
    export class FusionStoryWrapperComponent {
      options: TableOptions = {
        tableLabel: { text: 'Table label', tooltip: 'lorem ipsum dolor' },
      };

      columns: TableColumn[] = COLUMNS_CONFIG;

      rows: any[] = ROWS_DATA;

      onRowModelChange($event) {
        console.log('onRowModelChange: ', $event);
        setTimeout(() => {
          $event.onRequestDone(true);
        }, 2000);
      }

    }

    const COLUMNS_CONFIG: TableColumn[] = [
        {key: 'id', title: 'Id'},
        {key: 'name', title: 'Name'},
        {key: 'us_row', title: '', groupName: 'Configuration', class: 'fu-badge'},
        {
            key: 'margin',
            title: 'Margin',
            align: 'right',
            headerAlign: 'right',
            type: TableColumnTypeEnum.InputEdit,
            inputType: InlineInputType.Currency,
            customErrorMapping: {
                required: {errorMessageKey: 'required'},
                min: {
                    errorMessageKey: 'min',
                    textMapping: [{key: 'minValue', value: '5'}]
                }
            },
            width: '120px'
        },
        {
            key: 'margin_target',
            title: 'Target margin',
            align: 'right',
            headerAlign: 'right',
            type: TableColumnTypeEnum.InputEdit,
            inputType: InlineInputType.Currency,
            customErrorMapping: {
                required: {errorMessageKey: 'required'},
                min: {
                    errorMessageKey: 'min',
                    textMapping: [{key: 'minValue', value: '5'}]
                }
            },
            width: '120px'
        },
        {
            key: 'profitizer',
            title: 'Profitizer',
            align: 'right',
            headerAlign: 'right',
            style: {'border-left': 'solid 1px #DDDFE1'},
            type: TableColumnTypeEnum.InputEdit,
            inputType: InlineInputType.Currency,
            customErrorMapping: {
                required: {errorMessageKey: 'required'},
                min: {
                    errorMessageKey: 'min',
                    textMapping: [{key: 'minValue', value: '5'}]
                }
            },
            width: '120px'
        },
        {key: 'username', title: 'Username', groupName: ' '},
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
    ].map((row, idx) => {
        const marginFormControl1 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginFormControl2 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginFormControl3 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginTargetFormControl1 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginTargetFormControl2 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const marginTargetFormControl3 = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        const profitizerFormControl = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
        return {
            ...row,
            us_row: idx==2 ? ['US', 'IL', 'ROW'] : ['US', 'ROW'],
            margin: idx==2 ? [marginFormControl1, marginFormControl2, marginFormControl3] : [marginFormControl1, marginFormControl2],
            margin_target: idx==2 ? [marginTargetFormControl1, marginTargetFormControl2, marginTargetFormControl3] : [marginTargetFormControl1, marginTargetFormControl2],
            profitizer: profitizerFormControl
        };
    });
                `,
                format: true,
                type: 'code'
            }
        }
    }
};
