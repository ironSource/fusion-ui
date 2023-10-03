import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule, TableOptions} from '@ironsource/fusion-ui/components/table';
import {TableComponent} from '../table.component';
import {TableStoryHolderComponent} from './table.story-holder.component/table.story-holder.component.component';
import {
    ROWS_DEFAULT_DATA,
    ROWS_EXPAND_ROWSPAN_DATA,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_ROWSPAN_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

export default {
    title: 'Components/Table/Expandable Rows',
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
            url: 'https://www.figma.com/file/kcJkxGeKecNjp1ViXxEYat/Margin-manager?node-id=923%3A70154&t=xPTPODCPLj2fgoMo-4'
        },
        docs: {
            description: {
                component: dedent`**Tables** expandable rows
                You need in the table options add rowsExpandableOptions: \`{ key: 'children', columns: TABLE_DEFAULT_COLUMNS_CONFIG}\`
                where key - it parent row key where child rows will be stored. and columns - columns configuration for child rows (must be correlated with main columns config).

                By click on ">" expand row icon event (expandRow) will me emitted with argument:.
                \`{rowIndex, row, isExpanded, successCallback, failedCallback, updateMap}: TableRowExpandEmitter\`

                see stackblitz example for details.
                `
            }
        }
    },
    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            rowsExpandableOptions: {
                key: 'children',
                columns: TABLE_DEFAULT_COLUMNS_CONFIG
            }
        } as TableOptions,
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA.slice(0, 5)
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
    import { delay, take, tap } from 'rxjs/operators';
    import { of } from 'rxjs';
    import { isNullOrUndefined, isNumber } from '@ironsource/fusion-ui/utils';
    import {
      TableModule,
      TableColumn,
      TableOptions,
      TableRowExpandEmitter,
    } from '@ironsource/fusion-ui/components/table';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options" (expandRow)="onExpandRow($event)"></fusion-table>\`,
      standalone: true,
      imports: [TableModule],
    })
    export class FusionStoryWrapperComponent {
      options: TableOptions = {
        tableLabel: { text: 'Table expandable rows', tooltip: 'lorem ipsum dolor' },
        rowsExpandableOptions: {
          key: 'children',
          columns: COLUMNS_CONFIG,
        },
      };

      columns: TableColumn[] = COLUMNS_CONFIG;
      rows: any[] = ROWS_DATA.slice(0, 5);

      tableRows = [];
      expandedRows: { [key: string]: boolean } = {};

      onExpandRow({
        rowIndex,
        row,
        isExpanded,
        successCallback,
        failedCallback,
        updateMap,
      }: TableRowExpandEmitter): void {
        // updateMap - in case external expand call it must be false because map will be already updated.
        const tableRows = this.rows;
        // get child rows that can be already existed
        const childExisted: any[] = tableRows[rowIndex].children;
        (isExpanded
          ? !isNullOrUndefined(childExisted)
            ? of(childExisted)
            : this.getExpandedData(rowIndex)
          : of(null)
        )
          .pipe(
            take(1),
            tap(
              (_) =>
                // set what row expanded, or update to collapsed state if was expanded
                (this.expandedRows = updateMap
                  ? { ...this.expandedRows, [rowIndex]: isExpanded }
                  : this.expandedRows)
            )
          )
          .subscribe((data) => {
            if (isNullOrUndefined(childExisted)) {
              // if was no children, set arrived data as children
              const children = !!data ? data : [];

              // update row by index with children
              tableRows.splice(parseInt(rowIndex as string, 10), 1, {...row, children});
              // update table rows
              this.tableRows = [...tableRows];
            }
            // all Ok - call success
            successCallback();
          }, failedCallback);
      }

      /**
       * Just get from main data mock - portion for child rows
       */
      private getExpandedData(rowIndex) {
        return of(isNumber(rowIndex) ? ROWS_DATA.slice(5, 7) : []).pipe(
          delay(1000)
        );
      }
    }

    const COLUMNS_CONFIG: TableColumn[] = ${JSON.stringify(TABLE_DEFAULT_COLUMNS_CONFIG)};
    const ROWS_DATA = ${JSON.stringify(ROWS_DEFAULT_DATA)};
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithRowspan = {
    render: TableTemplate,

    args: {
        options: {
            ...TABLE_DEFAULT_OPTIONS,
            rowsExpandableOptions: {
                key: 'children',
                columns: TABLE_ROWSPAN_COLUMNS_CONFIG
            },
            hasRowSpan: true
        } as TableOptions,
        columns: TABLE_ROWSPAN_COLUMNS_CONFIG,
        rows: ROWS_EXPAND_ROWSPAN_DATA
    }
};
