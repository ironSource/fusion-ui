import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableComponent} from './table.component';
import {TableColumn, TableColumnTypeEnum, TableOptions} from '@ironsource/fusion-ui/components/table';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline/common/base';

// region Mocking data
const TABLE_DEFAULT_OPTIONS: TableOptions = {};

const TABLE_DEFAULT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'live', type: TableColumnTypeEnum.ToggleButton, title: '', width: '45px'},
    {key: 'name', title: 'Name', sort: 'asc'},
    {key: 'username', title: 'Username', sort: '', headerAlign: 'right', align: 'right'},
    {key: 'email', title: 'Email', sort: ''},
    {key: 'website', title: 'Website'}
];

// endregion

export default {
    title: 'Components/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            declarations: [TableComponent],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: 'Tables description'
            }
        }
    },
    args: {
        columns: [],
        rows: []
    }
} as Meta<TableComponent>;

const TableTemplate: Story<TableComponent> = (args: TableComponent) => ({
    props: {...args},
    template: `<fusion-table
    [columns]="columns"
    [rows]="rows"
></fusion-table>`
});

export const Default = TableTemplate.bind({});
