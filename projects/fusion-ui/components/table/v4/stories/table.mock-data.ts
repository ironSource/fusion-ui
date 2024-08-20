import {TableColumn, TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table';

// region default data
export const TABLE_DEFAULT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'firstName', title: 'First name'},
    {key: 'lastName', title: 'Last name'},
    {key: 'address', title: 'Address'},
    {key: 'state', title: 'State'}
];

export const TABLE_TOOLTIP_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'firstName', title: 'First name', tooltip: 'First name tooltip'},
    {key: 'lastName', title: 'Last name', tooltip: 'Last name tooltip'},
    {key: 'address', title: 'Address'},
    {key: 'state', title: 'State', tooltip: 'State tooltip'}
];

export const ROWS_DEFAULT_DATA = [
    {
        id: 1,
        firstName: 'Abdullah',
        lastName: 'Williamson',
        address: '2785 Karlie Run',
        state: 'Florida'
    },
    {
        id: 2,
        firstName: 'Ada',
        lastName: 'McLaughlin',
        address: '841 Chanelle Canyon',
        state: 'Arkansas'
    },
    {
        id: 3,
        firstName: 'Adell',
        lastName: 'Bergstrom',
        address: '3844 Cormier Island',
        state: 'Georgia'
    }
];
// endregion

// region selectable rows data
export const TABLE_SELECTABLE_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'checkbox', type: TableColumnTypeEnum.Checkbox},
    ...TABLE_DEFAULT_COLUMNS_CONFIG
];

export const ROWS_SELECTABLE_DATA = ROWS_DEFAULT_DATA.map((row, idx) => {
    return {checkbox: idx == 3, ...row};
});
// endregion

// region numbers data
export const TABLE_NUMBERS_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'planName', title: 'Plan name'},
    {key: 'lastUpdate', title: 'Last updated', type: TableColumnTypeEnum.Date},
    {key: 'price', title: 'Price', type: TableColumnTypeEnum.Currency},
    {key: 'amount', title: 'Amount', type: TableColumnTypeEnum.Number},
    {key: 'discount', title: 'Discount', type: TableColumnTypeEnum.Percent}
];

export const TABLE_NUMBERS_SORTABLE_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'planName', title: 'Plan name', sort: 'asc'},
    {key: 'lastUpdate', title: 'Last updated', type: TableColumnTypeEnum.Date, sort: ''},
    {key: 'price', title: 'Price', type: TableColumnTypeEnum.Currency, sort: ''},
    {key: 'amount', title: 'Amount', type: TableColumnTypeEnum.Number, sort: ''},
    {key: 'discount', title: 'Discount', type: TableColumnTypeEnum.Percent, sort: '', tooltip: 'Discount tooltip'}
];

export const ROWS_NUMBERS_DATA = [
    {
        planName: 'Starter',
        lastUpdate: new Date('12 Oct 2023'),
        price: 10.9,
        amount: 46,
        discount: 1.3
    },
    {
        planName: 'Pro',
        lastUpdate: new Date('8 Oct 2023'),
        price: 35.9,
        amount: 22,
        discount: 2.4
    },
    {
        planName: 'Business',
        lastUpdate: new Date('11 Oct 2023'),
        price: 89.9,
        amount: 15,
        discount: 5
    }
];

// endregion
