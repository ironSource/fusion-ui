import {Story, Meta} from '@storybook/angular';
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
    ROWS_ROWSPAN_DATA
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

export default {
    title: 'Components/Table/Rowspan',
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
                component: dedent`**Tables** rowspan.
                Table where some columns has more than one row, so other cells must have attribute rowspan and will not render in additional rows.

                Data for this cell must be set as array it a sign that here "multirow" cell`
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_ROWSPAN_COLUMNS_CONFIG,
        rows: ROWS_ROWSPAN_DATA
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
// endregion
