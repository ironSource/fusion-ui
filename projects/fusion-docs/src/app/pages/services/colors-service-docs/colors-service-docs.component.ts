import {Component, OnInit} from '@angular/core';
import {ColorsService} from '@ironsource/fusion-ui';
import {EXAMPLE_CODE_MOCK} from './example-mock';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {VersionService} from '../../../services/version/version.service';

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

    constructor(private colorsService: ColorsService, private versionService: VersionService) {}

    ngOnInit() {
        this.colorPalette = this.colorsService.getColorPalette(this.versionService.styleVersion);
    }
}
