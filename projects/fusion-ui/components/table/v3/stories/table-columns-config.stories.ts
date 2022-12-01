import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TableComponent} from '../table.component';
import {
    ROWS_DEFAULT_DATA,
    TABLE_CUSTOM_ALIGN_COLUMNS_CONFIG,
    TABLE_CUSTOM_STYLE_COLUMNS_CONFIG,
    TABLE_CUSTOM_WIDTH_COLUMNS_CONFIG,
    TABLE_DEFAULT_COLUMNS_CONFIG,
    TABLE_DEFAULT_OPTIONS,
    TABLE_HEADER_TOOLTIP_COLUMNS_CONFIG
} from '@ironsource/fusion-ui/components/table/v3/stories/table.mock-data';

export default {
    title: 'Components/Table/Columns Configuration',
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
                component: dedent`**Tables** columns configuration`
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

// region Default
export const Default = TableTemplate.bind({});
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';

import {
  TableModule,
  TableColumn,
  TableOptions,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
  };
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows = ROWS_DATA;
}

const COLUMNS_CONFIG = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'Email' },
    { key: 'website', title: 'Website' },
];

const ROWS_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Custom Column width
export const CustomWidth = TableTemplate.bind({});
CustomWidth.args = {
    columns: TABLE_CUSTOM_WIDTH_COLUMNS_CONFIG
};
CustomWidth.parameters = {
    docs: {
        description: {
            story: dedent`
            **Custom width** column - you can set custom width for each column in table
            Just add to column property \`width: '150px'\` will set 150px width for this column.
            For example for column "Name"
            `
        },
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';

import {
  TableModule,
  TableColumn,
  TableOptions,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
  };
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows = ROWS_DATA;
}

const COLUMNS_CONFIG = [
    { key: 'id', title: 'Id' },
    { key: 'name', title: 'Name' },
    { key: 'username', title: 'Username' },
    { key: 'email', title: 'Email' },
    { key: 'website', title: 'Website' },
];

const ROWS_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Custom Column Style
export const CustomStyle = TableTemplate.bind({});
CustomStyle.args = {
    columns: TABLE_CUSTOM_STYLE_COLUMNS_CONFIG
};
CustomStyle.parameters = {
    docs: {
        description: {
            story: dedent`
            **Custom style** column - you can set custom style for each column in table
            Just add to column property \`style: { [klass: string]: any; }\` See [NgStyle](https://angular.io/api/common/NgStyle).
            For example, to set right border 1px color red - \`style: {'border-right': 'solid 1px red'}\`
            `
        },
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';

import {
  TableModule,
  TableColumn,
  TableOptions,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
  };
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows = ROWS_DATA;
}

const COLUMNS_CONFIG = [
    {key: 'id', title: 'Id', style: {'border-right': 'solid 1px red'}},
    {key: 'name', title: 'Name',},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];

const ROWS_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Custom Column Align
export const CustomAlign = TableTemplate.bind({});
CustomAlign.args = {
    columns: TABLE_CUSTOM_ALIGN_COLUMNS_CONFIG
};
CustomAlign.parameters = {
    docs: {
        description: {
            story: dedent`
            **Custom align** column - you can set custom align for each column in table
            for header - use property **headerAlign: 'left' | 'center' | 'right' **
            for body - use property **align: 'left' | 'center' | 'right';**
            In example above will set align right for **Username** column
            `
        },
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';

import {
  TableModule,
  TableColumn,
  TableOptions,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
  };
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows = ROWS_DATA;
}

const COLUMNS_CONFIG = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username', align: 'right', headerAlign: 'right'},
    {key: 'email', title: 'Email'},
    {key: 'website', title: 'Website'}
];

const ROWS_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Custom Column Header Tooltip
export const CustomHeaderTooltip = TableTemplate.bind({});
CustomHeaderTooltip.args = {
    columns: TABLE_HEADER_TOOLTIP_COLUMNS_CONFIG
};
CustomHeaderTooltip.parameters = {
    docs: {
        description: {
            story: dedent`
            **Header tooltip** column - you can set tooltip for each column header in table
            for tooltip text - **tooltip: string**
            In example above will set tooltip on "Email" column header
            `
        },
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';

import {
  TableModule,
  TableColumn,
  TableOptions,
} from '@ironsource/fusion-ui/components/table';

@Component({
  selector: 'fusion-table-wrapper',
  template: \`<fusion-table
    [columns]="columns"
    [rows]="rows"
    [options]="options"
  ></fusion-table>\`,
  standalone: true,
  imports: [TableModule],
})
export class TableWrapperComponent {
  options: TableOptions = {
    tableLabel: {text: 'Table label', tooltip: 'lorem ipsum dolor'}
  };
  columns: TableColumn[] = COLUMNS_CONFIG;
  rows = ROWS_DATA;
}

const COLUMNS_CONFIG = [
    {key: 'id', title: 'Id'},
    {key: 'name', title: 'Name'},
    {key: 'username', title: 'Username'},
    {key: 'email', title: 'Email', tooltip: 'Lorem ipsum dolor.'},
    {key: 'website', title: 'Website'}
];

const ROWS_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
];
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion
