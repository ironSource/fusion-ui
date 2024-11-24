import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {THEME_COLORS_PALETTE_V2} from './colors-docs-config-v2';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-colors-docs-v2',
    templateUrl: './colors-docs-v2.component.html',
    styleUrls: ['./colors-docs-v2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ColorsDocsV2Component implements OnInit {
    @ViewChild('colorsFixedContent', {static: true}) colorsFixedContent: TemplateRef<any>;

    colorsThemeConfig: Array<any>;

    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.colorsThemeConfig = THEME_COLORS_PALETTE_V2;

        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Color palette',
            content: {templateRef: this.colorsFixedContent},
            type: 'fixed'
        });
    }
}
