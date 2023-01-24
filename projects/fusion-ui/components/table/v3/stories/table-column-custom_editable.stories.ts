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
    ROWS_CHECKBOX_DATA,
    ROWS_COMPONENT_DATA,
    ROWS_COMPONENT_EDIT_DATA,
    ROWS_DATE_DATA,
    ROWS_DEFAULT_DATA,
    ROWS_EDITABLE_DATA,
    ROWS_NUMBER_DATA,
    ROWS_TOGGLE_DATA,
    TABLE_CHECKBOX_COLUMNS_CONFIG,
    TABLE_COMPONENT_COLUMNS_CONFIG,
    TABLE_COMPONENT_EDIT_COLUMNS_CONFIG,
    TABLE_CURRENCY_COLUMNS_CONFIG,
    TABLE_DATE_COLUMNS_CONFIG,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_EDITABLE_COLUMNS_CONFIG,
    TABLE_NUMBER_COLUMNS_CONFIG,
    TABLE_PERCENT_COLUMNS_CONFIG,
    TABLE_TOGGLE_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player';

const actionsData = {
    selectionChanged: action('selectionChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'Components/Table/Column Custom/Editable Custom Cell',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TableModule,
                TableStoryHolderComponent,
                VideoPlayerModule
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
// endregion
