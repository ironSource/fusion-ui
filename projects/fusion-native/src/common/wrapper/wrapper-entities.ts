import {InjectionToken, Type} from '@angular/core';

export interface Transformer {
    transform(config: any): any;
}

export interface WrapperToken {
    component: Type<any>;
    type?: string;
    transformer?: Transformer;
    avoidJsonParse?: boolean;
}

export const WRAPPER_TOKEN = new InjectionToken<WrapperToken>('wrapper token');
