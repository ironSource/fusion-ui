import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-colors-palette',
    templateUrl: './colors-palette.component.html',
    styleUrls: ['./colors-palette.component.scss', '../colors-docs.component.scss']
})
export class ColorsPaletteComponent {
    @Input() colorPalette: any;
}
