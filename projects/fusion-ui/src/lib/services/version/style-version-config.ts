import {InjectionToken} from '@angular/core';
import {StyleVersion} from './style-version.enum';

export const STYLE_VERSION_TOKEN = new InjectionToken<StyleVersion>('Style Version', {
    providedIn: 'root',
    factory: () => StyleVersion.V2
});
