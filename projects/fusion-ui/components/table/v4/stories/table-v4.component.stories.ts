import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {EventEmitter} from '@angular/core';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {TableV4Component} from '../table-v4.component';
import {
    ROWS_DEFAULT_DATA,
    ROWS_DEFAULT_DATA_WITH_ID,
    ROWS_NUMBERS_DATA,
    ROWS_SELECTABLE_DATA,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_NUMBERS_COLUMNS_CONFIG,
    TABLE_NUMBERS_SORTABLE_COLUMNS_CONFIG,
    TABLE_SELECTABLE_COLUMNS_CONFIG,
    TABLE_TOOLTIP_COLUMNS_CONFIG
} from './table.mock-data';
import {TableV4StoryHolderComponent} from './table.story-holder.component/table.story-holder.component.component';
import {action} from '@storybook/addon-actions';

const TEMPLATE_TABLE_HOLDER = `<fusion-table-story-holder
    [options]="options"
    [columns]="columns"
    [rows]="rows"
    [hasCustomFooter]="hasCustomFooter"
    (selectionChanged)="selectionChanged($event)"
    (rowModelChange)="rowModelChange($event)"
></fusion-table-story-holder>`;

const actionsData = {
    selectionChanged: action('selectionChanged'),
    rowModelChange: action('rowModelChange')
};

export default {
    title: 'V4/Components/DataDisplay/DataGrid (Table)',
    component: TableV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), TableV4StoryHolderComponent]
        }),
        componentWrapperDecorator(story => `<div style="display: block; width: 800px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        columns: TABLE_DEFAULT_COLUMNS_CONFIG,
        rows: ROWS_DEFAULT_DATA
    }
} as Meta<TableV4Component>;

type Story = StoryObj<TableV4Component>;

export const Basic: Story = {};

export const ColumnTooltips: Story = {};
ColumnTooltips.args = {
    columns: TABLE_TOOLTIP_COLUMNS_CONFIG
};

export const Numbers: Story = {};
Numbers.args = {
    columns: TABLE_NUMBERS_COLUMNS_CONFIG,
    rows: ROWS_NUMBERS_DATA
};

export const SortableColumns: Story = {};
SortableColumns.args = {
    columns: TABLE_NUMBERS_SORTABLE_COLUMNS_CONFIG,
    rows: ROWS_NUMBERS_DATA
};

export const SelectableRows: Story = {
    render: args => ({
        props: {
            ...args,
            columns: TABLE_SELECTABLE_COLUMNS_CONFIG,
            rows: ROWS_SELECTABLE_DATA,
            selectionChanged: actionsData.selectionChanged
        },
        template: TEMPLATE_TABLE_HOLDER
    })
};

export const HeaderAndFooter: Story = {
    render: args => ({
        props: {
            ...args,
            options: {
                tableLabel: {text: 'Users', tooltip: 'Users table'},
                searchOptions: {
                    placeholder: 'Search',
                    onSearch: new EventEmitter()
                }
            },
            hasCustomFooter: true
        },
        template: TEMPLATE_TABLE_HOLDER
    })
};

export const StickyHeader: Story = {
    render: args => ({
        props: {
            ...args,
            rows: ROWS_DEFAULT_DATA_WITH_ID,
            options: {
                stickyHeader: true,
                tableLabel: {text: 'Users', tooltip: 'Users table'},
                searchOptions: {
                    placeholder: 'Search',
                    onSearch: new EventEmitter()
                }
            },
            hasCustomFooter: true
        },
        template: TEMPLATE_TABLE_HOLDER
    })
};
StickyHeader.decorators = [
    componentWrapperDecorator(story => `<div style="height: 600px; border: solid 0px red; display: block">${story}</div>`)
];

export const InfiniteScrolling: Story = {
    render: args => ({
        props: {
            ...args,
            rows: ROWS_DEFAULT_DATA_WITH_ID,
            options: {
                stickyHeader: true,
                pagination: {
                    enable: true
                }
            }
        },
        template: TEMPLATE_TABLE_HOLDER
    })
};
InfiniteScrolling.decorators = [
    componentWrapperDecorator(story => `<div style="height: 600px; border: solid 0px red; display: block">${story}</div>`)
];

export const SkeletonLoading: Story = {};
SkeletonLoading.args = {
    loading: true,
    rows: []
};

export const NoData: Story = {};
NoData.args = {
    rows: [],
    options: {
        noDataMessage: 'No data to display',
        noDataSubMessage: 'Lorem ipsum'
    }
};

export const NoSearchResult: Story = {};
NoSearchResult.args = {
    rows: [],
    options: {
        emptyTableType: 'noResult',
        noDataMessage: 'No data to display',
        noDataSubMessage: 'Search again with different filters'
    }
};
