import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableColumn, TableModule, TableOptions} from '@ironsource/fusion-ui/components/table';
import {TableComponent} from './table.component';
import {EventEmitter} from '@angular/core';

// region Mocking data
const TABLE_DEFAULT_OPTIONS: TableOptions = {
    sortingType: 'local',
    noDataSubMessage: 'Try using again with a different filters'
};
// region Columnsconfig
const TABLE_DEFAULT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
const TABLE_SORTING_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id', sort: 'asc'},
    {key: 'name', title: 'Name', sort: ''},
    {key: 'username', title: 'Username', sort: ''},
    {key: 'email', title: 'Email', sort: ''},
    {key: 'website', title: 'Website'}
];

// endregion
const ROWS_DEFAULT_DATA = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net'
    }
];
// endregion

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

export const InFrame = TableTemplate.bind({});
InFrame.args = {
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
InFrame.parameters = {
    docs: {
        description: {
            story: dedent`**Framed** table - table in frame with **frame header** and **frame footer**
            To show table in frame need to update options with properties *(example)*:
            \`{
            tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
            searchOptions: {
                placeholder: 'Search',
                onSearch: new EventEmitter()
            }\`
            `
        }
    }
};
