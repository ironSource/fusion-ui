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
            story: dedent`**Framed** table - table in frame with **frame header** with **Search** and **frame footer**`
        },
        source: {
            language: 'typescript',
            code: dedent`
import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

import {TableModule, TableColumn, TableOptions} from '@ironsource/fusion-ui/components/table';

@Component({
    selector: 'fusion-table-wrapper',
    template: \`<fusion-table [columns]="columns" [rows]="rows" [options]="options"></fusion-table>\`,
    standalone: true,
    imports: [TableModule]
})
export class TableWrapperComponent implements OnInit, OnDestroy {
    options: TableOptions = {
        tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
        searchOptions: {
            placeholder: 'Search',
            onSearch: new EventEmitter()
        }
    };

    columns: TableColumn[] = [
        {key: 'id', title: 'Id'},
        {key: 'name', title: 'Name'},
        {key: 'username', title: 'Username'},
        {key: 'email', title: 'Email'},
        {key: 'website', title: 'Website'}
    ];

    allRows: {[key: string]: any}[] = [
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

    rows = [];

    private onDestroy$ = new Subject<void>();

    ngOnInit() {
        this.rows = [...this.allRows];

        if (!isNullOrUndefined(this.options?.searchOptions?.onSearch)) {
            this.options.searchOptions.onSearch.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                this.rows = [
                    ...this.allRows.filter(item => {
                        return item.name.includes(value);
                    })
                ];
            });
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion
