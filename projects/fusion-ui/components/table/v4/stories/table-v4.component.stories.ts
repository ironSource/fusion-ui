import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {TableV4Component} from '../table-v4.component';
import {TABLE_DEFAULT_COLUMNS_CONFIG} from './table.mock-data';

export default {
    title: 'V4/Components/DataDisplay/DataGrid (Table)',
    component: TableV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        }),
        componentWrapperDecorator(story => `<div style="display: block; width: 800px; border: solid 0px red">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        columns: TABLE_DEFAULT_COLUMNS_CONFIG
    }
} as Meta<TableV4Component>;

type Story = StoryObj<TableV4Component>;

export const Basic: Story = {};

export const SkeletonLoading: Story = {};
SkeletonLoading.args = {
    loading: true
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
