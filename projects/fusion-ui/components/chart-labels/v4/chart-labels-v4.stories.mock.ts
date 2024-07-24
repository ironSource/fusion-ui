import {COLORS_PALETTE} from '@ironsource/fusion-ui/services/colors/colors-palette';
import {ChartLabel} from '@ironsource/fusion-ui/components/chart/common/base';

export const CHART_COLORS = COLORS_PALETTE['style_v4'];
export const CART_LABELS_MOCK: ChartLabel[] = [
    {
        color: CHART_COLORS[0],
        label: 'Label 1'
    },
    {
        color: CHART_COLORS[1],
        label: 'Label 2'
    }
];
export const CART_LABELS_ICONS_MOCK: ChartLabel[] = [
    {
        color: CHART_COLORS[0],
        label: 'Label 1',
        icon: 'v4/branded/android'
    },
    {
        color: CHART_COLORS[1],
        label: 'Label 2',
        icon: 'v4/branded/ios'
    }
];
