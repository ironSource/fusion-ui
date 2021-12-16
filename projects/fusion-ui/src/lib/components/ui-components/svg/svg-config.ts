import {SvgOptions} from './svg-entities';
import {InjectionToken} from '@angular/core';

export const SVG_OPTIONS_DEFAULT_VALUES: SvgOptions = {
    assetsPath: ''
};

export const SVG_OPTIONS_TOKEN = new InjectionToken<SvgOptions>('SVG options');
