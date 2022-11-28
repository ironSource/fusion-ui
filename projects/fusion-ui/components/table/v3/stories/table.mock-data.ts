import {TableColumn, TableColumnTypeEnum, TableOptions} from '@ironsource/fusion-ui/components/table';

// region Mocking data
export const TABLE_DEFAULT_OPTIONS: TableOptions = {
    noDataSubMessage: 'Try using again with a different filters'
};
// region Columns-config
export const TABLE_DEFAULT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_SORTING_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id', sort: 'asc'},
    {key: 'name', title: 'Name', sort: ''},
    {key: 'username', title: 'Username', sort: ''},
    {key: 'email', title: 'Email', sort: ''},
    {key: 'website', title: 'Website'}
];
export const TABLE_CHECKBOX_COLUMNS_CONFIG = [
    {key: 'selected', type: TableColumnTypeEnum.Checkbox, width: '32px'},
    ...TABLE_DEFAULT_COLUMNS_CONFIG
];
export const TABLE_TOGGLE_COLUMNS_CONFIG = [
    {key: 'live', type: TableColumnTypeEnum.ToggleButton, title: '', width: '45px'},
    ...TABLE_DEFAULT_COLUMNS_CONFIG
];

// endregion
export const ROWS_DEFAULT_DATA = [
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
export const ROWS_CHECKBOX_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {selected: false, ...row};
});
export const ROWS_TOGGLE_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {live: true, ...row};
});
// endregion
