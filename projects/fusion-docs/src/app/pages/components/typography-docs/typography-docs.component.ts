import {Component} from '@angular/core';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-typography-docs',
    templateUrl: './typography-docs.component.html',
    styleUrls: ['./typography-docs.component.scss']
})
export class TypographyDocsComponent {
    rightMenu: Array<any> = [
        {
            title: 'Text Styles',
            items: [
                {
                    label: 'Fonts',
                    scrollTo: '#textStyles',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'CSS Custom Properties',
                    scrollTo: '#customProperties',
                    scrollOffset: 30
                }
            ]
        }
    ];

    customPropertiesTable = {
        columns: [
            {
                key: 'name',
                title: 'Name',
                type: TableColumnTypeEnum.String
            },
            {
                key: 'description',
                title: 'Description',
                type: TableColumnTypeEnum.String
            }
        ],
        rows: [
            {
                name: '--black-font-family',
                description: 'Black Font Used In <font1>'
            },
            {
                name: '--bold-font-family',
                description: 'Bold Font Used In <font2>,<font3>'
            },
            {
                name: '--medium-font-family',
                description: 'Medium Font Used In <font8>'
            },
            {
                name: '--regular-font-family',
                description: 'Regular Font Used In <font4> To <font7>'
            },
            {
                name: '--body-font-family',
                description: 'Body Font Used In <font9> To <font14>'
            }
        ]
    };
}
