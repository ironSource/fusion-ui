import {Component} from '@angular/core';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table/common/entities';

@Component({
    selector: 'fusion-typography-docs',
    templateUrl: './typography-docs-v3.component.html',
    styleUrls: ['./typography-docs-v3.component.scss']
})
export class TypographyDocV3Component {
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

    typographyProps = [
        {
            name: 'Heading 1',
            description: 'Neue Haas Grotesk Display Pro, font-size: 60px; font-weight: 700;',
            cssName: 'font-heading-1'
        },
        {
            name: 'Heading 2',
            description: 'Neue Haas Grotesk Display Pro, font-size: 32px; font-weight: 700;',
            cssName: 'font-heading-2'
        },
        {
            name: 'Heading 3',
            description: 'Neue Haas Grotesk Display Pro, font-size: 22px; font-weight: 700;',
            cssName: 'font-heading-3'
        },
        {
            name: 'Heading 4',
            description: 'Neue Haas Grotesk Display Pro, font-size: 18px; font-weight: 700;',
            cssName: 'font-heading-4'
        },
        {
            name: 'Heading 5',
            description: 'Neue Haas Grotesk Display Pro, font-size: 15px; font-weight: 700;',
            cssName: 'font-heading-5'
        },
        {
            name: 'Heading 6',
            description: 'Neue Haas Grotesk Display Pro, font-size: 13px; font-weight: 700;',
            cssName: 'font-heading-6'
        },
        {
            name: 'Heading label',
            description: 'Neue Haas Grotesk Display Pro, font-size: 11px; font-weight: 400; letter-spacing: 0.25px',
            cssName: 'font-heading-label'
        },
        {
            name: 'Body large strong',
            description: 'Helvetica Neue, font-size: 16px; font-weight: 500;',
            cssName: 'font-bodyLargeStrong'
        },
        {
            name: 'Body large',
            description: 'Helvetica Neue, font-size: 16px; font-weight: 400;',
            cssName: 'font-bodyLarge'
        },
        {
            name: 'Body medium strong',
            description: 'Helvetica Neue, font-size: 14px; font-weight: 500;',
            cssName: 'font-bodyMediumStrong'
        },
        {
            name: 'Body medium',
            description: 'Helvetica Neue, font-size: 14px; font-weight: 400;',
            cssName: 'font-bodyMedium'
        },
        {
            name: 'Body small strong',
            description: 'Helvetica Neue, font-size: 13px; font-weight: 500;',
            cssName: 'font-bodySmallStrong'
        },
        {
            name: 'Body small',
            description: 'Helvetica Neue, font-size: 13px; font-weight: 400;',
            cssName: 'font-bodySmall'
        },
        {
            name: 'Body XSmall strong',
            description: 'Helvetica Neue, font-size: 12px; font-weight: 500;',
            cssName: 'font-bodyXSmallStrong'
        },
        {
            name: 'Body XSmall',
            description: 'Helvetica Neue, font-size: 12px; font-weight: 400;',
            cssName: 'font-bodyXSmall'
        },
        {
            name: 'Caption',
            description: 'Helvetica Neue, font-size: 11px; font-weight: 400;',
            cssName: 'font-caption'
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
