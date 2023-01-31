import {TableColumn, TableColumnTypeEnum, TableOptions} from '@ironsource/fusion-ui/components/table';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {FormControl, Validators} from '@angular/forms';
import {VideoPlayerComponent} from '@ironsource/fusion-ui/components/video-player';
import {CustomCellEditComponent} from '@ironsource/fusion-ui/components/table/v3/stories/custom-cell-edit/custom-cell-edit.component';

// region Utils
const randomDate = (start: Date, end: Date): Date => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
// endregion

// region Mocking data
export const TABLE_DEFAULT_OPTIONS: TableOptions = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'},
    noDataSubMessage: 'Try using again with a different filters'
};

export const MOCK_ROW_ACTIONS = [
    {icon: 'frame', label: 'List item 1'},
    {icon: 'frame', label: 'List item 2'},
    {icon: 'frame', label: 'List item 3'},
    {icon: 'frame', label: 'List item 4'}
];

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
export const TABLE_CHECKBOX_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'selected', type: TableColumnTypeEnum.Checkbox, width: '32px'},
    ...TABLE_DEFAULT_COLUMNS_CONFIG
];
export const TABLE_TOGGLE_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'live', type: TableColumnTypeEnum.ToggleButton, title: '', width: '45px'},
    ...TABLE_DEFAULT_COLUMNS_CONFIG
];
export const TABLE_NUMBER_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {key: 'amount', type: TableColumnTypeEnum.Number, title: 'Amount', headerAlign: 'right'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_CURRENCY_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {key: 'amount', type: TableColumnTypeEnum.Currency, title: 'Amount', headerAlign: 'right'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_PERCENT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {key: 'amount', type: TableColumnTypeEnum.Percent, title: 'Amount', headerAlign: 'right'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_DATE_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {key: 'date', type: TableColumnTypeEnum.Date, title: 'Date', ignoreTimeZone: true},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_COMPONENT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {key: 'title', title: 'Title', type: TableColumnTypeEnum.Component, component: VideoPlayerComponent},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_EDITABLE_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {
        key: 'amount',
        type: TableColumnTypeEnum.InputEdit,
        inputType: InlineInputType.Currency,
        customErrorMapping: {
            required: {errorMessageKey: 'required'},
            min: {
                errorMessageKey: 'min',
                textMapping: [{key: 'minValue', value: '5'}]
            }
        },
        title: 'Amount',
        width: '120px'
    },
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_COMPONENT_EDIT_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {
        key: 'amount',
        title: 'Daily budget',
        type: TableColumnTypeEnum.Component,
        component: CustomCellEditComponent,
        width: '150px',
        headerAlign: 'right'
    },
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_STICKY_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id', width: '50px', sticky: true},
    {key: 'name', title: 'Name', width: '180px', sticky: true, stickyLeftMargin: '62px'},
    {key: 'username', title: 'Username', width: '230px'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_CUSTOM_WIDTH_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', width: '150px'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_CUSTOM_STYLE_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id', style: {'border-right': 'solid 1px red'}},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_CUSTOM_ALIGN_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username', align: 'right', headerAlign: 'right'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];
export const TABLE_HEADER_TOOLTIP_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email', tooltip: 'Lorem ipsum dolor.'},
    {key: 'website', title: 'Website'}
];
export const TABLE_SUBHEADER_COLUMNS_CONFIG: TableColumn[] = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name', groupName: 'Section 1'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email', groupName: 'Section 2'},
    {key: 'website', title: 'Website'}
];
// endregion

// region Rows Data
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
]; /*.splice(0, 2)*/
export const ROWS_TOTALS_DATA = [
    {
        name: '10 names',
        username: '10 UserNames',
        email: '10 E-mails',
        website: '10 Websites'
    },
    ...ROWS_DEFAULT_DATA
];
export const ROWS_CHECKBOX_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {selected: false, ...row};
});
export const ROWS_TOGGLE_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {live: true, ...row};
});
export const ROWS_NUMBER_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {amount: Math.floor(Math.random() * 100), ...row};
});
export const ROWS_DATE_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {date: randomDate(new Date(2012, 0, 1), new Date()), ...row};
});
export const ROWS_COMPONENT_EDIT_DATA = ROWS_DEFAULT_DATA.map((row, idx) => {
    const data = idx == 3 ? null : Math.floor(Math.random() * 100);
    const amountData = {
        data: data,
        remaining: [3, 4, 6].some(item => item == idx) ? 0 : data - 14
    };
    return {amount: amountData, ...row};
});
export const ROWS_EDITABLE_DATA = ROWS_DEFAULT_DATA.map(row => {
    const amountFormControl = new FormControl(Math.floor(Math.random() * 100), [Validators.required, Validators.min(5)]);
    return {amount: amountFormControl, ...row};
});

export const ROWS_COMPONENT_DATA = ROWS_DEFAULT_DATA.map(row => {
    return {
        title: {
            thumbnail: 'https://thumbnails-demand.ssacdn.com/r7m09rxubjmjhtorpsj9.jpg',
            src: 'https://v.ssacdn.com/demand-creatives/assets/videos/r7m09rxubjmjhtorpsj9.mp4',
            width: '200px'
        },
        ...row
    };
});

// endregion
// endregion
