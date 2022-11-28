import {Story, Meta} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TableComponent} from './table.component';
import {
    ROWS_CHECKBOX_DATA,
    ROWS_DEFAULT_DATA,
    TABLE_CHECKBOX_COLUMNS_CONFIG,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_SORTING_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

const actionsData = {
    selectionChanged: action('selectionChanged')
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
    props: {...args}
});

export const Default = TableTemplate.bind({});

export const NoData = TableTemplate.bind({});
NoData.args = {rows: []};
NoData.parameters = {
    docs: {
        description: {
            story: dedent`**Empty** table with no data. Input property rows has blank array \`rows:[]\``
        }
    }
};

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
        },
        source: {
            language: 'html',
            code: dedent`<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="tableRows"
    (selectionChanged)="selectionChanged($event)"
></fusion-table>`
        }
    }
};
