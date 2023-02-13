import {Story, Meta} from '@storybook/angular';
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
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/kcJkxGeKecNjp1ViXxEYat/Margin-manager?node-id=923%3A70154&t=xPTPODCPLj2fgoMo-4'
        },
        docs: {
            description: {
                component: dedent`**Tables** expandable rows`
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

const TableTemplate: Story<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<fusion-table-story-holder
    [options]="options"
    [columns]="columns"
    [rows]="rows"
></fusion-table-story-holder>`
});

// region Default
export const Default = TableTemplate.bind({});
// endregion

// region WithRowspan
export const WithRowspan = TableTemplate.bind({});
WithRowspan.args = {
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
};
// endregion
