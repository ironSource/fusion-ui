import {PlatformType} from '@ironsource/fusion-ui';

export interface Application {
    name: string;
    imageSrc: string;
    platform: PlatformType;
    key?: string;
}
