import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {THEME_COLORS_PALETTE_V3} from './colors-docs-config-v3';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {isNullOrUndefined} from '@ironsource/fusion-ui';

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

    invertColor(hex: string, bw = true): string {
        if (isNullOrUndefined(hex)) {
            return hex;
        }
        if (hex.startsWith('#')) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        let r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        if (bw) {
            // https://stackoverflow.com/a/3943023/112731
            return r * 0.299 + g * 0.587 + b * 0.114 > 141 //186
                ? '#1D1C64'
                : '#FFFFFF';
        }
        // pad each with zeros and return
        return '#' + this.padZero((255 - r).toString(16)) + this.padZero((255 - g).toString(16)) + this.padZero((255 - b).toString(16));
    }

    private padZero(str: string, len = 2): string {
        const zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }
}
