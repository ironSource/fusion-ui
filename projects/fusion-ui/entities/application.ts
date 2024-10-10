import {PlatformType} from './platform-type';

export interface Application {
    name: string;
    imageSrc: string;
    platform: PlatformType;
    key?: string;
}
