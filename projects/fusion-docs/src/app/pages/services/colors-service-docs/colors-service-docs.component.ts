import {Component, OnInit} from '@angular/core';
import {ColorsService} from '../../../../../../fusion-ui/src/lib/services/colors/colors.service';
import {EXAMPLE_CODE_MOCK} from './example-mock';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-colors-service-docs',
    templateUrl: './colors-service-docs.component.html',
    styleUrls: ['./colors-service-docs.component.scss']
})
export class ColorsServiceDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'How To Use',
                    scrollTo: '#howToUse',
                    scrollOffset: 30
                },
                {
                    label: 'Methods',
                    scrollTo: '#methods',
                    scrollOffset: 15
                },
                {
                    label: 'Color Palette',
                    scrollTo: '#cpalette',
                    scrollOffset: 15
                }
            ]
        }
    ];

    colorPalette: string[] = [];

    codeExample = EXAMPLE_CODE_MOCK;

    constructor(private colorsService: ColorsService) {}

    ngOnInit() {
        this.colorPalette = this.colorsService.getColorPalette();
    }
}
