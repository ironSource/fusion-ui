import {Component} from '@angular/core';
import {THEME_COLORS_PALETTE, UI_COLORS_PALETTE, COLORS_TEXT} from './colors-docs-config';
import {TableColumnTypeEnum} from '../../../../../../fusion-ui/src/public-api';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-colors-docs',
    templateUrl: './colors-docs.component.html',
    styleUrls: ['./colors-docs.component.scss']
})
export class ColorsDocsComponent {
    commonState: any;
    colorsThemeConfig: Array<any>;
    colorsUIConfig: Array<any>;
    colorSamples: Array<any>;

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Colors',
            items: [
                {
                    label: 'Palettes',
                    scrollTo: '#paletteColors',
                    scrollOffset: 30
                },
                {
                    label: 'Text Colors',
                    scrollTo: '#textColors',
                    scrollOffset: 0
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
                name: '--dark-color',
                description: 'Dark Color'
            },
            {
                name: '--dark-color-100',
                description: 'Dark 100 Color'
            },
            {
                name: '--dark-color-300',
                description: 'Dark 300 Color'
            },
            {
                name: '--dark-color-400',
                description: 'Dark 400 Color'
            },
            {
                name: '--light-color',
                description: 'Light Color'
            },
            {
                name: '--light-color-100',
                description: 'Light 100 Color'
            },
            {
                name: '--light-color-200',
                description: 'Light 200 Color'
            },
            {
                name: '--light-color-300',
                description: 'Light 300 Color'
            },
            {
                name: '--light-color-400',
                description: 'Light 400 Color'
            },
            {
                name: '--light-color-600',
                description: 'Dark 600 Color'
            },
            {
                name: '--light-color-700',
                description: 'Dark 700 Color'
            },
            {
                name: '--light-color-800',
                description: 'Dark 800 Color'
            },
            {
                name: '--light-color-hover',
                description: 'Dark Hover Color'
            },
            {
                name: '--primary-color',
                description: 'Primary Color'
            },
            {
                name: '--primary-color-100',
                description: 'Primary 100 Color'
            },
            {
                name: '--primary-color-200',
                description: 'Primary 200 Color'
            },

            {
                name: '--primary-color-hover',
                description: 'Primary Hover Color'
            },
            {
                name: '--positive-color',
                description: 'Positive Color'
            },
            {
                name: '--positive-color-100',
                description: 'Positive 100 Color'
            },
            {
                name: '--positive-color-200',
                description: 'Positive 200 Color'
            },
            {
                name: '--positive-color-300',
                description: 'Positive 300 Color'
            },
            {
                name: '--neutral-color',
                description: 'Neutral Color'
            },
            {
                name: '--neutral-color-100',
                description: 'Neutral 100 Color'
            },
            {
                name: '--neutral-color-200',
                description: 'Neutral 200 Color'
            },
            {
                name: '--neutral-color-700',
                description: 'Neutral 700 Color'
            },
            {
                name: '--negative-color',
                description: 'Negative Color'
            },
            {
                name: '--negative-color-100',
                description: 'Negative 100 Color'
            },
            {
                name: '--negative-color-200',
                description: 'Negative 200 Color'
            },
            {
                name: '--negative-color-300',
                description: 'Negative 300 Color'
            },
            {
                name: '--negative-color-hover',
                description: 'Negative Hover Color'
            }
        ]
    };

    constructor() {
        this.colorsThemeConfig = THEME_COLORS_PALETTE.map(paletta => {
            return paletta;
        });

        this.colorsUIConfig = UI_COLORS_PALETTE.map(paletta => {
            return paletta;
        });

        this.colorSamples = COLORS_TEXT.map(sample => {
            return sample;
        });
    }
}
