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

export const Default = TableTemplate.bind({});
// region No Data
export const NoData = TableTemplate.bind({});
NoData.args = {rows: []};
NoData.parameters = {
    docs: {
        description: {
            story: dedent`**Empty** table with no data. Input property rows has blank array \`rows:[]\`
            you can set with table option second **No Data** line text:
            \`noDataSubMessage: 'Try using again with a different filters'\``
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
            **rows** - must be empty array, and property **loading** must be true.
            \`rows:[], loading: true\`
            `
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
                For descending use - "desc".`
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
            it a totals row data. For example:
            \`rows: [
                {
                    name: '10 names',
                    username: '10 UserNames',
                    email: '10 E-mails',
                    website: '10 Websites'
                },
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                    website: 'hildegard.org'
                },
                .....\`
            `
        }
    }
};

// endregion
// region With Remove Row action
export const SingleRowAction = TableTemplate.bind({});
SingleRowAction.args = {
    options: {
        remove: {
            active: true
        }
    }
};
SingleRowAction.parameters = {
    docs: {
        description: {
            story: dedent`
            **Row remove action** table add possibility to remove row from table
            Need to add **remove:TableRowRemoveAction** property to the table input **[options]**
            like: \`remove:{active: true}\` it a minimum needed.
             For full remove properties see **TableRowRemoveAction**.

            \`interface TableRowRemoveAction {
                active?: boolean;
                icon?: IconData;
                tooltip?: {text: string; width?: string};
                onRemove?: EventEmitter<{rowIndex: number; rowToRemove: any};
            }\`
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
