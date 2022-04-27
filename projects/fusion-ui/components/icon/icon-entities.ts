import {SvgOptions} from '@ironsource/fusion-ui/components/svg';

export interface IconOptions {
    svgOptions: SvgOptions;
}

interface Icon {
    iconName: string;
    iconVersion: string;
}

export type IconData = string | Icon;
