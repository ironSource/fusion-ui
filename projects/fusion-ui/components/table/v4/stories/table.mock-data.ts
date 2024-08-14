import {TableColumn, TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table';

// region default data
export const TABLE_DEFAULT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'firstName', title: 'First name'},
    {key: 'lastName', title: 'Last name'},
    {key: 'address', title: 'Address'},
    {key: 'state', title: 'State'}
];

export const ROWS_DEFAULT_DATA = [
    {
        firstName: 'Abdullah',
        lastName: 'Williamson',
        address: '2785 Karlie Run',
        state: 'Florida'
    },
    {
        firstName: 'Ada',
        lastName: 'McLaughlin',
        address: '841 Chanelle Canyon',
        state: 'Arkansas'
    },
    {
        firstName: 'Adell',
        lastName: 'Bergstrom',
        address: '3844 Cormier Island',
        state: 'Georgia'
    }
];
// endregion

// region numbers data
export const TABLE_NUMBERS_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'planName', title: 'Plan name'},
    {key: 'lastUpdate', title: 'Last updated', type: TableColumnTypeEnum.Date},
    {key: 'price', title: 'Price', type: TableColumnTypeEnum.Currency}
];

export const ROWS_NUMBERS_DATA = [
    {
        planName: 'Starter',
        lastUpdate: new Date('12 Oct 2023'),
        price: 10.9
    },
    {
        planName: 'Pro',
        lastUpdate: new Date('8 Oct 2023'),
        price: 35.9
    },
    {
        planName: 'Business',
        lastUpdate: new Date('11 Oct 2023'),
        price: 89.9
    }
];

// endregion
