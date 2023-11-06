import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {colorPaletteLight} from './colorsData';

@Component({
    selector: 'fusion-colors-palette',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './colors-palette.component.html',
    styleUrls: ['./colors-palette.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsPaletteComponent {
    colorPalette = colorPaletteLight;

    keepOrder = (a, b) => {
        return a;
    };
}
