import {Locator} from '@playwright/test';
import {ChartPage} from '../../pages/chart-page';
import {CART_LABELS_ICONS_MOCK} from '@ironsource/fusion-ui/components/chart-labels/v4/chart-labels-v4.stories.mock';
import {NAMED_WEB_COLORS} from '@ironsource/fusion-ui/services/colors/colors-palette';
import {expect} from '@playwright/test';

export async function checkLabelProperties(index: number, labels: Locator, chartPage: ChartPage) {
    const label = await labels.nth(index);
    const mockLabel = CART_LABELS_ICONS_MOCK[index];

    // Check color
    const color: string = (await chartPage.getLabelColor(label)).replace(/\s/g, '');
    const ALPHA_VALUE = 100;
    const expectedColor = mockLabel.color.startsWith('#') ? toRgba(mockLabel.color, ALPHA_VALUE) : mockLabel.color;
    expect(color).toBe(expectedColor);

    // Check icon
    const icon = await chartPage.getLabelIcon(label);
    expect(icon).toBe(mockLabel.icon);
}

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
