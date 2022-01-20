import {Injectable} from '@angular/core';
import {COLORS_PALETTE, NAMED_WEB_COLORS, PIE_COLORS_PALETTE} from './colors-palette';
import {VersionService} from '../version/version.service';

@Injectable({
    providedIn: 'root'
})
export class ColorsService {
    constructor(private versionService: VersionService) {}

    public getColorPalette(): string[] {
        const paletteName = `style_v${this.versionService.styleVersion}`;
        return !!COLORS_PALETTE[paletteName] ? COLORS_PALETTE[paletteName] : COLORS_PALETTE.style_v1;
    }

    public getPieColorsPalette(): string[] {
        return PIE_COLORS_PALETTE;
    }

    public toRgba = (color: string, alpha: number = 100): string => {
        if (!color) {
            throw new Error(`No HEX color value in argument`);
        } else if (!color.startsWith('#')) {
            // if it named colors
            if (!NAMED_WEB_COLORS[color.toLowerCase()]) {
                throw new Error(`Color name not found`);
            }
            color = NAMED_WEB_COLORS[color.toLowerCase()];
        }
        color = color.replace('#', '');
        const R = parseInt(color.substring(0, 2), 16);
        const G = parseInt(color.substring(2, 4), 16);
        const B = parseInt(color.substring(4, 6), 16);

        const result = `rgba(${R},${G},${B},${alpha / 100})`;
        return result;
    };
}
