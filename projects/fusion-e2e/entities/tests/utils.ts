import {NAMED_WEB_COLORS} from '@ironsource/fusion-ui/services/colors/colors-palette';

export function toRgba(color: string, alpha: number = 100): string {
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

    if (alpha === 100) {
        return `rgb(${R},${G},${B})`;
    }

    return `rgba(${R},${G},${B},${alpha / 100})`;
}
