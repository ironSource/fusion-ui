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

export const TABLE_HORIZONTAL_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'firstName', title: 'First name', width: '150px'},
    {key: 'lastName', title: 'Last name', width: '150px'},
    {key: 'address', title: 'Address', width: '200px'},
    {key: 'state', title: 'State', width: '150px'},
    {key: 'phone', title: 'Phone number', width: '200px'},
    {key: 'status', title: 'Status', width: '150px'}
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

export const ROWS_DEFAULT_DATA_WITH_ID = [
    {
        id: 1,
        firstName: 'Abdullah',
        lastName: 'Williamson',
        address: '2785 Karlie Run',
        state: 'Florida'
    },
    {id: 2, firstName: 'Sophia', lastName: 'Martinez', address: '4921 Eliza Crescent', state: 'California'},
    {
        id: 3,
        firstName: 'Liam',
        lastName: 'Johnson',
        address: '7856 Oliver Street',
        state: 'Texas'
    },
    {id: 4, firstName: 'Emma', lastName: 'Brown', address: '3214 Noah Avenue', state: 'New York'},
    {
        id: 5,
        firstName: 'Noah',
        lastName: 'Garcia',
        address: '9632 Ava Lane',
        state: 'Illinois'
    },
    {id: 6, firstName: 'Olivia', lastName: 'Miller', address: '1478 Ethan Road', state: 'Pennsylvania'},
    {
        id: 7,
        firstName: 'Ethan',
        lastName: 'Davis',
        address: '5236 Mia Circle',
        state: 'Ohio'
    },
    {id: 8, firstName: 'Ava', lastName: 'Rodriguez', address: '8741 William Boulevard', state: 'Georgia'},
    {
        id: 9,
        firstName: 'Mason',
        lastName: 'Wilson',
        address: '3698 Charlotte Drive',
        state: 'North Carolina'
    },
    {id: 10, firstName: 'Sophia', lastName: 'Anderson', address: '1597 James Court', state: 'Michigan'},
    {
        id: 11,
        firstName: 'William',
        lastName: 'Taylor',
        address: '7412 Amelia Way',
        state: 'New Jersey'
    },
    {id: 12, firstName: 'Isabella', lastName: 'Thomas', address: '9630 Benjamin Street', state: 'Virginia'},
    {
        id: 13,
        firstName: 'James',
        lastName: 'Hernandez',
        address: '2581 Evelyn Avenue',
        state: 'Washington'
    },
    {id: 14, firstName: 'Charlotte', lastName: 'Moore', address: '4723 Daniel Lane', state: 'Arizona'},
    {
        id: 15,
        firstName: 'Benjamin',
        lastName: 'Martin',
        address: '8159 Scarlett Road',
        state: 'Massachusetts'
    },
    {id: 16, firstName: 'Amelia', lastName: 'Jackson', address: '3647 Henry Circle', state: 'Indiana'},
    {
        id: 17,
        firstName: 'Lucas',
        lastName: 'Thompson',
        address: '6392 Alexander Court',
        state: 'Tennessee'
    },
    {id: 18, firstName: 'Mia', lastName: 'White', address: '1875 Sebastian Drive', state: 'Missouri'},
    {
        id: 19,
        firstName: 'Henry',
        lastName: 'Lopez',
        address: '5914 Violet Way',
        state: 'Maryland'
    },
    {id: 20, firstName: 'Evelyn', lastName: 'Lee', address: '2369 Jack Boulevard', state: 'Wisconsin'},
    {
        id: 21,
        firstName: 'Alexander',
        lastName: 'Gonzalez',
        address: '7896 Chloe Street',
        state: 'Minnesota'
    },
    {id: 22, firstName: 'Harper', lastName: 'Harris', address: '4125 Owen Road', state: 'Colorado'},
    {
        id: 23,
        firstName: 'Daniel',
        lastName: 'Clark',
        address: '9587 Zoey Avenue',
        state: 'Alabama'
    },
    {id: 24, firstName: 'Abigail', lastName: 'Lewis', address: '3214 Levi Lane', state: 'South Carolina'},
    {
        id: 25,
        firstName: 'Michael',
        lastName: 'Robinson',
        address: '6547 Aria Circle',
        state: 'Louisiana'
    },
    {id: 26, firstName: 'Emily', lastName: 'Walker', address: '1932 Grayson Court', state: 'Kentucky'},
    {
        id: 27,
        firstName: 'David',
        lastName: 'Perez',
        address: '8763 Layla Drive',
        state: 'Oregon'
    },
    {id: 28, firstName: 'Elizabeth', lastName: 'Hall', address: '5698 Asher Way', state: 'Oklahoma'},
    {
        id: 29,
        firstName: 'Joseph',
        lastName: 'Young',
        address: '2147 Ellie Road',
        state: 'Connecticut'
    },
    {id: 30, firstName: 'Sofia', lastName: 'Allen', address: '7536 Julian Avenue', state: 'Utah'},
    {
        id: 31,
        firstName: 'John',
        lastName: 'Sanchez',
        address: '4269 Leo Street',
        state: 'Iowa'
    },
    {id: 32, firstName: 'Avery', lastName: 'Wright', address: '9874 Nora Boulevard', state: 'Arkansas'},
    {
        id: 33,
        firstName: 'Samuel',
        lastName: 'King',
        address: '3652 Eli Circle',
        state: 'Mississippi'
    },
    {id: 34, firstName: 'Scarlett', lastName: 'Scott', address: '1478 Hannah Lane', state: 'Kansas'},
    {
        id: 35,
        firstName: 'Christopher',
        lastName: 'Green',
        address: '7896 Isaac Court',
        state: 'Nevada'
    },
    {id: 36, firstName: 'Victoria', lastName: 'Baker', address: '5214 Lily Road', state: 'New Mexico'},
    {
        id: 37,
        firstName: 'Andrew',
        lastName: 'Adams',
        address: '9632 Wyatt Drive',
        state: 'West Virginia'
    },
    {id: 38, firstName: 'Chloe', lastName: 'Nelson', address: '3698 Grace Way', state: 'Nebraska'},
    {
        id: 39,
        firstName: 'Jack',
        lastName: 'Hill',
        address: '1597 Luca Avenue',
        state: 'Idaho'
    },
    {id: 40, firstName: 'Grace', lastName: 'Ramirez', address: '7412 Aubrey Street', state: 'Hawaii'},
    {
        id: 41,
        firstName: 'Luke',
        lastName: 'Campbell',
        address: '2581 Hazel Circle',
        state: 'New Hampshire'
    },
    {id: 42, firstName: 'Zoe', lastName: 'Mitchell', address: '4723 Ezra Boulevard', state: 'Maine'},
    {
        id: 43,
        firstName: 'Isaac',
        lastName: 'Roberts',
        address: '8159 Aurora Lane',
        state: 'Montana'
    },
    {id: 44, firstName: 'Hannah', lastName: 'Carter', address: '3647 Hudson Road', state: 'Delaware'},
    {
        id: 45,
        firstName: 'Owen',
        lastName: 'Phillips',
        address: '6392 Stella Court',
        state: 'South Dakota'
    },
    {id: 46, firstName: 'Lily', lastName: 'Evans', address: '1875 Sawyer Drive', state: 'North Dakota'},
    {
        id: 47,
        firstName: 'Wyatt',
        lastName: 'Turner',
        address: '5914 Lincoln Way',
        state: 'Alaska'
    },
    {id: 48, firstName: 'Addison', lastName: 'Torres', address: '2369 Bella Avenue', state: 'Vermont'},
    {
        id: 49,
        firstName: 'Eli',
        lastName: 'Parker',
        address: '7896 Maverick Street',
        state: 'Wyoming'
    },
    {id: 50, firstName: 'Aubrey', lastName: 'Collins', address: '4125 Paisley Road', state: 'Rhode Island'}
];

export const ROWS_HORIZONTAL_DATA_WITH = [
    {
        id: 1,
        firstName: 'Abdullah',
        lastName: 'Williamson',
        address: '2785 Karlie Run',
        state: 'Florida',
        phone: '(212) 95-212-32',
        status: 'Active'
    },
    {
        id: 2,
        firstName: 'Sophia',
        lastName: 'Martinez',
        address: '4721 Oak Street',
        state: 'California',
        phone: '(555) 123-4567',
        status: 'Inactive'
    },
    {
        id: 3,
        firstName: 'Liam',
        lastName: 'Johnson',
        address: '789 Pine Avenue',
        state: 'New York',
        phone: '(333) 987-6543',
        status: 'Active'
    },
    {
        id: 4,
        firstName: 'Emma',
        lastName: 'Garcia',
        address: '1010 Maple Lane',
        state: 'Texas',
        phone: '(444) 567-8901',
        status: 'Active'
    },
    {
        id: 5,
        firstName: 'Noah',
        lastName: 'Brown',
        address: '2468 Elm Street',
        state: 'Illinois',
        phone: '(777) 234-5678',
        status: 'Inactive'
    },
    {
        id: 6,
        firstName: 'Olivia',
        lastName: 'Davis',
        address: '3690 Cedar Road',
        state: 'Pennsylvania',
        phone: '(888) 345-6789',
        status: 'Active'
    },
    {
        id: 7,
        firstName: 'Ethan',
        lastName: 'Wilson',
        address: '1357 Birch Boulevard',
        state: 'Ohio',
        phone: '(999) 876-5432',
        status: 'Active'
    },
    {
        id: 8,
        firstName: 'Ava',
        lastName: 'Anderson',
        address: '2468 Spruce Street',
        state: 'Michigan',
        phone: '(111) 222-3333',
        status: 'Inactive'
    },
    {
        id: 9,
        firstName: 'Mason',
        lastName: 'Taylor',
        address: '9876 Willow Way',
        state: 'Georgia',
        phone: '(222) 333-4444',
        status: 'Active'
    },
    {
        id: 10,
        firstName: 'Isabella',
        lastName: 'Thomas',
        address: '5432 Aspen Avenue',
        state: 'Washington',
        phone: '(333) 444-5555',
        status: 'Active'
    },
    {
        id: 11,
        firstName: 'William',
        lastName: 'Jackson',
        address: '7890 Sycamore Street',
        state: 'Arizona',
        phone: '(444) 555-6666',
        status: 'Inactive'
    },
    {
        id: 12,
        firstName: 'Charlotte',
        lastName: 'White',
        address: '1234 Magnolia Drive',
        state: 'Massachusetts',
        phone: '(555) 666-7777',
        status: 'Active'
    },
    {
        id: 13,
        firstName: 'James',
        lastName: 'Harris',
        address: '5678 Juniper Lane',
        state: 'Virginia',
        phone: '(666) 777-8888',
        status: 'Active'
    },
    {
        id: 14,
        firstName: 'Amelia',
        lastName: 'Martin',
        address: '9012 Poplar Place',
        state: 'New Jersey',
        phone: '(777) 888-9999',
        status: 'Inactive'
    },
    {
        id: 15,
        firstName: 'Benjamin',
        lastName: 'Thompson',
        address: '3456 Chestnut Court',
        state: 'North Carolina',
        phone: '(888) 999-0000',
        status: 'Active'
    },
    {
        id: 16,
        firstName: 'Mia',
        lastName: 'Garcia',
        address: '7890 Walnut Way',
        state: 'Colorado',
        phone: '(999) 000-1111',
        status: 'Active'
    },
    {
        id: 17,
        firstName: 'Elijah',
        lastName: 'Martinez',
        address: '2345 Hickory Hill',
        state: 'Oregon',
        phone: '(000) 111-2222',
        status: 'Inactive'
    },
    {
        id: 18,
        firstName: 'Evelyn',
        lastName: 'Robinson',
        address: '6789 Beech Boulevard',
        state: 'Indiana',
        phone: '(111) 222-3333',
        status: 'Active'
    },
    {
        id: 19,
        firstName: 'Daniel',
        lastName: 'Clark',
        address: '1357 Cypress Circle',
        state: 'Minnesota',
        phone: '(222) 333-4444',
        status: 'Active'
    },
    {
        id: 20,
        firstName: 'Harper',
        lastName: 'Rodriguez',
        address: '2468 Fir Forest',
        state: 'Wisconsin',
        phone: '(333) 444-5555',
        status: 'Inactive'
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
