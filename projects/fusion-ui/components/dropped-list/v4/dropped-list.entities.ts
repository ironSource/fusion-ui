import {CountryCode} from '@ironsource/fusion-ui/components/flag/v4';

export interface DroppedListOption {
    id?: string | number;
    label: string;
    flag?: CountryCode;
    imageUrl?: string;
}
