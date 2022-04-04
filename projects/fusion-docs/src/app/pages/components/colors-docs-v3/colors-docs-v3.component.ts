import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {THEME_COLORS_PALETTE_V3} from './colors-docs-config-v3';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-colors-docs-v2',
    templateUrl: './colors-docs-v3.component.html',
    styleUrls: ['./colors-docs-v3.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsDocsV3Component implements OnInit {
    @ViewChild('colorsFixedContent', {static: true}) colorsFixedContent: TemplateRef<any>;

    colorsThemeConfig: Array<any>;

    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.colorsThemeConfig = THEME_COLORS_PALETTE_V3;

        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Color palette',
            content: {templateRef: this.colorsFixedContent},
            type: 'fixed'
        });
    }
}
