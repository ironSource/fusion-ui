/*
 * Created on 2020.9.30 By Andy Kononenko (andyk@ironsrc.com)
 */
import {Theme} from '@ironsource/fusion-ui/components/style';
import {InjectionToken} from '@angular/core';

export interface VideoPlayerTheme extends Theme {
    '--player-border-radius'?: string;
    '--player-background-color'?: string;
}

export const VIDEO_PLAYER_THEME_TOKEN = new InjectionToken<VideoPlayerTheme>('Video Player Theme Token');
