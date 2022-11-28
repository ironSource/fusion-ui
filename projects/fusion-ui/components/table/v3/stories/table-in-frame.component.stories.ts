import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '../table.module';
import {TableStoryHolderComponent} from './table.story-holder.component/table.story-holder.component.component';
import {
    ROWS_DEFAULT_DATA,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';
import {EventEmitter} from '@angular/core';

export default {
    title: 'Components/Table/InFrame',
    component: TableStoryHolderComponent,
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
                component: dedent`**Framed** table - table in frame with **frame header** and **frame footer**
            To show table in frame need to update input **options** property with properties *(example)*:
            \`{tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}\``
            }
        }
    },
    args: {
        options: TABLE_DEFAULT_OPTIONS,
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA
    }
} as Meta<TableStoryHolderComponent>;

const TableInFrameTemplate: Story<TableStoryHolderComponent> = (args: TableStoryHolderComponent) => ({
    props: {...args}
});

// region default
export const Default = TableInFrameTemplate.bind({});
Default.args = {
    options: {
        ...TABLE_DEFAULT_OPTIONS,
        ...{
            tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
        }
    }
};
Default.parameters = {
    docs: {
        source: {
            language: 'html',
            code: dedent`<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="rows"
></fusion-table>`
        }
    }
};
// endregion

// region With Search
export const WithSearch = TableInFrameTemplate.bind({});
WithSearch.args = {
    options: {
        ...TABLE_DEFAULT_OPTIONS,
        ...{
            tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
            searchOptions: {
                placeholder: 'Search',
                onSearch: new EventEmitter()
            }
        }
    }
};
WithSearch.parameters = {
    docs: {
        description: {
            story: dedent`**Framed** table - table in frame with **frame header** and **frame footer**
            To show table in frame need to update input **options** property with properties *(example)*:
            \`{
            tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
            searchOptions: {
                placeholder: 'Search',
                onSearch: new EventEmitter()
            }\`
            Then in your host-component you can add subscribtion for rows sortind
            \`        this.options.searchOptions.onSearch.pipe(takeUntil(this.onDestroy$)).subscribe(value=>{
                this.tableRows = [
                    ...this._rows.filter(item => {
                        return item.name.includes(value);
                    })
                ];
            })\`
            `
        },
        source: {
            language: 'html',
            code: dedent`<fusion-table
    [options]="options"
    [columns]="columns"
    [rows]="tableRows"
></fusion-table>`
        }
    }
};
// endregion
