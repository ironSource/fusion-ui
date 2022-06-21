import {TableColumn, TableColumnTypeEnum, TableOptions} from '@ironsource/fusion-ui/components/table/v2';
import {SingleOrMultiTableCellComponent, StatusTableCellComponent} from '@network-operations/ui/components';

export const CAMPAIGN_PROMOTIONS_TABLE_FIRST_INITIALIZATION = 25;

export const CAMPAIGN_PROMOTIONS_TABLE_FRONT_END_PAGINATION = 5;

export const CAMPAIGN_PROMOTIONS_TABLE_BACK_END_PAGINATION = 50;

export const CAMPAIGN_PROMOTIONS_TABLE_OPTIONS: TableOptions = {
    sortingType: 'external',
    stickyHeader: true,
    hideHeaderOnEmpty: true,
    pagination: {
        enable: true,
        loading: false
    }
};

export const PROMOTIONS_TABLE_COLUMNS: TableColumn[] = [
    {
        key: 'name',
        title: 'Name',
        sort: '',
        width: '360px'
    },
    {
        key: 'status',
        title: 'Status',
        sort: '',
        width: '160px',
        style: {'min-width': '160px'},
        type: TableColumnTypeEnum.Component,
        component: StatusTableCellComponent
    },
    {
        key: 'creationDate',
        title: 'Creation date',
        sort: 'desc',
        width: '136px',
        type: TableColumnTypeEnum.Date,
        style: {'min-width': '136px'},
        dateFormat: "d MMM yyyy 'at' HH:mm"
    },
    {
        key: 'createdBy',
        title: 'Created by',
        sort: '',
        width: '136px'
    },
    {
        key: 'campaigns',
        title: 'Campaigns',
        style: {'min-width': '152px'},
        width: '152px',
        type: TableColumnTypeEnum.Component,
        component: SingleOrMultiTableCellComponent
    },
    {
        key: 'comments',
        title: 'Comments',
        width: '220px'
    }
];

export const CONFIGURATIONS_TABLE_COLUMNS: TableColumn[] = [
    {
        key: 'name',
        title: 'Name',
        sort: '',
        width: '304px'
    },
    {
        key: 'status',
        title: 'Status',
        sort: '',
        width: '152px',
        style: {'min-width': '152px'},
        type: TableColumnTypeEnum.Component,
        component: StatusTableCellComponent
    },
    {
        key: 'countries',
        title: 'Countries',
        style: {'min-width': '128px'},
        width: '128px',
        type: TableColumnTypeEnum.Component,
        component: SingleOrMultiTableCellComponent
    },
    {
        key: 'applicationId',
        title: 'Application ID',
        width: '200px',
        style: {'min-width': '200px', 'max-width': '200px'},
        type: TableColumnTypeEnum.Component,
        component: SingleOrMultiTableCellComponent
    },
    {
        key: 'adUnit',
        title: 'Ad unit',
        width: '136px'
    },
    {
        key: 'value',
        title: 'Value',
        sort: '',
        type: TableColumnTypeEnum.Percent,
        width: '80px'
    },
    {
        key: 'entityId',
        title: 'Entity ID',
        width: '240px',
        style: {'min-width': '240px', 'max-width': '240px'},
        type: TableColumnTypeEnum.Component,
        component: SingleOrMultiTableCellComponent
    }
];
